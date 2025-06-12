using Microsoft.AspNetCore.Http;

namespace EventTicketing.API.Services
{
    public class LocalImageStorageService : IImageStorageService
    {
        private readonly IWebHostEnvironment _environment;
        private readonly ILogger<LocalImageStorageService> _logger;
        private const int MaxFileSizeBytes = 5 * 1024 * 1024; // 5MB
        private readonly string[] AllowedExtensions = { ".jpg", ".jpeg", ".png", ".webp", ".gif" };

        public LocalImageStorageService(IWebHostEnvironment environment, ILogger<LocalImageStorageService> logger)
        {
            _environment = environment;
            _logger = logger;
        }

        public async Task<string> UploadEventBannerAsync(IFormFile file, int eventId)
        {
            return await UploadImageAsync(file, "events", "banners", $"event-{eventId}");
        }

        public async Task<string> UploadEventImageAsync(IFormFile file, int eventId)
        {
            return await UploadImageAsync(file, "events", "images", $"event-{eventId}");
        }

        public async Task<string> UploadVenueImageAsync(IFormFile file, int venueId)
        {
            return await UploadImageAsync(file, "venues", "images", $"venue-{venueId}");
        }

        public async Task<string> UploadUserProfileImageAsync(IFormFile file, int userId)
        {
            return await UploadImageAsync(file, "users", "avatars", $"user-{userId}");
        }

        public async Task<string> UploadCategoryIconAsync(IFormFile file, int categoryId)
        {
            return await UploadImageAsync(file, "categories", "icons", $"category-{categoryId}");
        }

        private async Task<string> UploadImageAsync(IFormFile file, string category, string subCategory, string prefix)
        {
            if (!await ValidateImageAsync(file))
            {
                throw new ArgumentException("Invalid image file");
            }

            // Create directory structure
            var uploadsPath = Path.Combine(_environment.WebRootPath, "images", category, subCategory);
            Directory.CreateDirectory(uploadsPath);

            // Generate unique filename
            var extension = Path.GetExtension(file.FileName).ToLowerInvariant();
            var fileName = $"{prefix}-{DateTime.UtcNow:yyyyMMdd-HHmmss}-{Guid.NewGuid():N}{extension}";
            var filePath = Path.Combine(uploadsPath, fileName);

            // Save file
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            // Return relative URL
            return $"/images/{category}/{subCategory}/{fileName}";
        }

        public async Task<bool> ValidateImageAsync(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return false;

            // Check file size
            if (file.Length > MaxFileSizeBytes)
                return false;

            // Check file extension
            var extension = Path.GetExtension(file.FileName).ToLowerInvariant();
            if (!AllowedExtensions.Contains(extension))
                return false;

            // Validate file signature (magic bytes)
            var buffer = new byte[8];

            try
            {
                using var stream = file.OpenReadStream();

                // FIXED: Use the standard ReadAsync method instead of ReadAtLeastAsync
                var bytesRead = await stream.ReadAsync(buffer, 0, 8);

                // Reset stream position for future use
                stream.Position = 0;

                // Only validate if we read enough bytes
                if (bytesRead >= 2) // Minimum for JPEG detection
                {
                    return IsValidImageSignature(buffer);
                }

                return false;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error validating image file: {FileName}", file.FileName);
                return false;
            }
        }

        public async Task<bool> DeleteImageAsync(string imageUrl)
        {
            try
            {
                if (string.IsNullOrEmpty(imageUrl) || !imageUrl.StartsWith("/images/"))
                    return false;

                var fullPath = Path.Combine(_environment.WebRootPath, imageUrl.TrimStart('/').Replace('/', Path.DirectorySeparatorChar));

                if (File.Exists(fullPath))
                {
                    File.Delete(fullPath);
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting image: {ImageUrl}", imageUrl);
                return false;
            }
        }

        private bool IsValidImageSignature(byte[] buffer)
        {
            // JPEG
            if (buffer.Length >= 2 && buffer[0] == 0xFF && buffer[1] == 0xD8)
                return true;

            // PNG
            if (buffer.Length >= 8 && buffer[0] == 0x89 && buffer[1] == 0x50 && buffer[2] == 0x4E && buffer[3] == 0x47)
                return true;

            // GIF
            if (buffer.Length >= 6 && buffer[0] == 0x47 && buffer[1] == 0x49 && buffer[2] == 0x46)
                return true;

            // WebP
            if (buffer.Length >= 8 && buffer[0] == 0x52 && buffer[1] == 0x49 && buffer[2] == 0x46 && buffer[3] == 0x46)
                return true;

            return false;
        }
    }
}