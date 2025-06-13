using Microsoft.AspNetCore.Http;

namespace EventTicketing.API.Services
{
    public class LocalImageStorageService : IImageStorageService
    {
        private readonly IWebHostEnvironment _environment;
        private readonly ILogger<LocalImageStorageService> _logger;

        public LocalImageStorageService(IWebHostEnvironment environment, ILogger<LocalImageStorageService> logger)
        {
            _environment = environment;
            _logger = logger;
        }

        public async Task<string> UploadEventBannerAsync(IFormFile file, int eventId)
        {
            return await SaveImageAsync(file, "events", "banners", $"event-{eventId}-banner");
        }

        public async Task<string> UploadEventImageAsync(IFormFile file, int eventId)
        {
            return await SaveImageAsync(file, "events", null, $"event-{eventId}");
        }

        public async Task<string> UploadVenueImageAsync(IFormFile file, int venueId)
        {
            return await SaveImageAsync(file, "venues", null, $"venue-{venueId}");
        }

        public async Task<string> UploadUserProfileImageAsync(IFormFile file, int userId)
        {
            return await SaveImageAsync(file, "users", "profiles", $"user-{userId}-profile");
        }

        public async Task<string> UploadCategoryIconAsync(IFormFile file, int categoryId)
        {
            return await SaveImageAsync(file, "categories", "icons", $"category-{categoryId}-icon");
        }

        private async Task<string> SaveImageAsync(IFormFile file, string mainFolder, string? subFolder, string filePrefix)
        {
            try
            {
                _logger.LogInformation($"📸 Saving image: {filePrefix} in {mainFolder}/{subFolder ?? "root"}");

                // Create filename with timestamp and GUID for uniqueness
                var fileExtension = Path.GetExtension(file.FileName).ToLower();
                var timestamp = DateTime.Now.ToString("yyyyMMdd-HHmmss");
                var uniqueId = Guid.NewGuid().ToString("N")[..16]; // First 16 chars
                var fileName = $"{filePrefix}-{timestamp}-{uniqueId}{fileExtension}";

                // Build the relative path - FIXED: No duplicate "images" folder
                var pathParts = new List<string> { "images", mainFolder };
                if (!string.IsNullOrEmpty(subFolder))
                {
                    pathParts.Add(subFolder);
                }
                pathParts.Add(fileName);

                var relativePath = Path.Combine(pathParts.ToArray());
                var absolutePath = Path.Combine(_environment.WebRootPath, relativePath);

                _logger.LogInformation($"📸 Relative path: {relativePath}");
                _logger.LogInformation($"📸 Absolute path: {absolutePath}");

                // Ensure directory exists
                var directory = Path.GetDirectoryName(absolutePath);
                if (!string.IsNullOrEmpty(directory) && !Directory.Exists(directory))
                {
                    Directory.CreateDirectory(directory);
                    _logger.LogInformation($"📸 Created directory: {directory}");
                }

                // Save the file
                using (var stream = new FileStream(absolutePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                // Return clean URL path (always with forward slashes and leading slash)
                var urlPath = "/" + relativePath.Replace('\\', '/');
                _logger.LogInformation($"📸 File saved successfully. URL: {urlPath}");

                return urlPath;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"📸 Error saving image: {filePrefix}");
                throw new Exception($"Failed to save image: {ex.Message}");
            }
        }

        public async Task<bool> DeleteImageAsync(string imageUrl)
        {
            try
            {
                if (string.IsNullOrEmpty(imageUrl))
                {
                    _logger.LogWarning("📸 Attempted to delete empty/null image URL");
                    return true;
                }

                _logger.LogInformation($"📸 Deleting image: {imageUrl}");

                // Convert URL to file path
                var relativePath = imageUrl.TrimStart('/').Replace('/', Path.DirectorySeparatorChar);
                var absolutePath = Path.Combine(_environment.WebRootPath, relativePath);

                _logger.LogInformation($"📸 File path: {absolutePath}");

                if (File.Exists(absolutePath))
                {
                    File.Delete(absolutePath);
                    _logger.LogInformation($"📸 Image deleted successfully: {absolutePath}");
                    return true;
                }
                else
                {
                    _logger.LogWarning($"📸 Image file not found: {absolutePath}");
                    return false;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"📸 Error deleting image: {imageUrl}");
                return false;
            }
        }

        public async Task<bool> ValidateImageAsync(IFormFile file)
        {
            try
            {
                if (file == null || file.Length == 0)
                {
                    _logger.LogWarning("📸 Validation failed: File is null or empty");
                    return false;
                }

                // Check file size (5MB limit)
                const long maxFileSize = 5 * 1024 * 1024; // 5MB
                if (file.Length > maxFileSize)
                {
                    _logger.LogWarning($"📸 Validation failed: File too large ({file.Length} bytes, max: {maxFileSize})");
                    return false;
                }

                // Check content type
                var allowedTypes = new[]
                {
                    "image/jpeg",
                    "image/jpg",
                    "image/png",
                    "image/webp",
                    "image/gif"
                };

                var contentType = file.ContentType.ToLower();
                if (!allowedTypes.Contains(contentType))
                {
                    _logger.LogWarning($"📸 Validation failed: Invalid content type ({contentType})");
                    return false;
                }

                // Check file extension
                var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".webp", ".gif" };
                var fileExtension = Path.GetExtension(file.FileName).ToLower();
                if (!allowedExtensions.Contains(fileExtension))
                {
                    _logger.LogWarning($"📸 Validation failed: Invalid file extension ({fileExtension})");
                    return false;
                }

                // Basic file header validation (optional but recommended)
                using var stream = file.OpenReadStream();
                var buffer = new byte[8];
                await stream.ReadAsync(buffer, 0, 8);

                // Check for common image file signatures
                var isValidImage = IsValidImageHeader(buffer, contentType);
                if (!isValidImage)
                {
                    _logger.LogWarning($"📸 Validation failed: Invalid file header for {contentType}");
                    return false;
                }

                _logger.LogInformation($"📸 Validation passed: {file.FileName} ({file.Length} bytes, {contentType})");
                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"📸 Error during image validation: {file?.FileName}");
                return false;
            }
        }

        private static bool IsValidImageHeader(byte[] buffer, string contentType)
        {
            if (buffer.Length < 8) return false;

            return contentType switch
            {
                "image/jpeg" or "image/jpg" => buffer[0] == 0xFF && buffer[1] == 0xD8,
                "image/png" => buffer[0] == 0x89 && buffer[1] == 0x50 && buffer[2] == 0x4E && buffer[3] == 0x47,
                "image/gif" => (buffer[0] == 0x47 && buffer[1] == 0x49 && buffer[2] == 0x46),
                "image/webp" => buffer[0] == 0x52 && buffer[1] == 0x49 && buffer[2] == 0x46 && buffer[3] == 0x46,
                _ => true // Allow other types to pass basic validation
            };
        }
    }
}