using EventTicketing.API.Data;
using EventTicketing.API.Models.DTOs;
using EventTicketing.API.Models.Entities;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace EventTicketing.API.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;
        private readonly IAuthService _authService; // For password hashing

        public UserService(ApplicationDbContext context, IAuthService authService)
        {
            _context = context;
            _authService = authService;
        }

        public async Task<UserProfileResponseDto> GetUserProfileAsync(int userId)
        {
            var user = await _context.Users
                .Include(u => u.UserProfile)
                .Include(u => u.UserRoles)
                .FirstOrDefaultAsync(u => u.UserId == userId);

            if (user == null)
                throw new ArgumentException("User not found");

            return new UserProfileResponseDto
            {
                UserId = user.UserId,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                PhoneNumber = user.PhoneNumber,
                DateOfBirth = user.DateOfBirth,
                ProfileImageUrl = user.ProfileImageUrl,
                IsEmailVerified = user.IsEmailVerified,
                IsPhoneVerified = user.IsPhoneVerified,
                CreatedAt = user.CreatedAt,
                LastLoginAt = user.LastLoginAt,
                Status = user.Status,
                Bio = user.UserProfile?.Bio,
                Website = user.UserProfile?.Website,
                TimeZone = user.UserProfile?.TimeZone,
                IsOrganizer = user.UserProfile?.IsOrganizer ?? false,
                Roles = user.UserRoles.Where(ur => ur.IsActive).Select(ur => ur.Role.ToString()).ToList()
            };
        }

        public async Task<UserProfileResponseDto> UpdateUserProfileAsync(int userId, UpdateUserProfileDto updateDto)
        {
            var user = await _context.Users
                .Include(u => u.UserProfile)
                .Include(u => u.UserRoles)
                .FirstOrDefaultAsync(u => u.UserId == userId);

            if (user == null)
                throw new ArgumentException("User not found");

            // Check if email is already taken by another user
            if (await _context.Users.AnyAsync(u => u.Email == updateDto.Email && u.UserId != userId))
                throw new ArgumentException("Email is already in use");

            // Update user basic info
            user.FirstName = updateDto.FirstName;
            user.LastName = updateDto.LastName;
            user.Email = updateDto.Email;
            user.PhoneNumber = updateDto.PhoneNumber;
            user.DateOfBirth = updateDto.DateOfBirth;

            // Update or create user profile
            if (user.UserProfile == null)
            {
                user.UserProfile = new UserProfile
                {
                    UserId = userId,
                    Bio = updateDto.Bio,
                    Website = updateDto.Website,
                    TimeZone = updateDto.TimeZone
                };
                _context.UserProfiles.Add(user.UserProfile);
            }
            else
            {
                user.UserProfile.Bio = updateDto.Bio;
                user.UserProfile.Website = updateDto.Website;
                user.UserProfile.TimeZone = updateDto.TimeZone;
            }

            await _context.SaveChangesAsync();

            return await GetUserProfileAsync(userId);
        }

        public async Task ChangePasswordAsync(int userId, ChangePasswordDto changePasswordDto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserId == userId);

            if (user == null)
                throw new ArgumentException("User not found");

            // Verify current password (you'll need to implement password verification in AuthService)
            if (!await _authService.VerifyPasswordAsync(changePasswordDto.CurrentPassword, user.PasswordHash))
                throw new ArgumentException("Current password is incorrect");

            // Hash new password
            user.PasswordHash = await _authService.HashPasswordAsync(changePasswordDto.NewPassword);

            await _context.SaveChangesAsync();
        }

        public async Task<UserOrganizationDto> GetUserOrganizationAsync(int userId)
        {
            var userProfile = await _context.UserProfiles
                .FirstOrDefaultAsync(up => up.UserId == userId);

            if (userProfile == null)
            {
                return new UserOrganizationDto();
            }

            return new UserOrganizationDto
            {
                CompanyName = userProfile.CompanyName,
                BusinessLicense = userProfile.BusinessLicense,
                Address = userProfile.Address,
                City = userProfile.City,
                State = userProfile.State,
                ZipCode = userProfile.ZipCode,
                Country = userProfile.Country
            };
        }

        public async Task<UserOrganizationDto> UpdateUserOrganizationAsync(int userId, UpdateUserOrganizationDto updateDto)
        {
            var user = await _context.Users
                .Include(u => u.UserProfile)
                .FirstOrDefaultAsync(u => u.UserId == userId);

            if (user == null)
                throw new ArgumentException("User not found");

            // Create profile if it doesn't exist
            if (user.UserProfile == null)
            {
                user.UserProfile = new UserProfile { UserId = userId };
                _context.UserProfiles.Add(user.UserProfile);
            }

            // Update organization info
            user.UserProfile.CompanyName = updateDto.CompanyName;
            user.UserProfile.BusinessLicense = updateDto.BusinessLicense;
            user.UserProfile.Address = updateDto.Address;
            user.UserProfile.City = updateDto.City;
            user.UserProfile.State = updateDto.State;
            user.UserProfile.ZipCode = updateDto.ZipCode;
            user.UserProfile.Country = updateDto.Country;

            await _context.SaveChangesAsync();

            return await GetUserOrganizationAsync(userId);
        }

        public async Task<UserPreferencesDto> GetUserPreferencesAsync(int userId)
        {
            var user = await _context.Users
                .Include(u => u.UserProfile)
                .FirstOrDefaultAsync(u => u.UserId == userId);

            if (user == null)
                throw new ArgumentException("User not found");

            // For now, return default preferences
            // You can store these in a separate UserPreferences table or as JSON in UserProfile
            return new UserPreferencesDto
            {
                EmailNotifications = true,
                SmsNotifications = false,
                NewBookingNotifications = true,
                CancellationNotifications = true,
                LowInventoryNotifications = true,
                DailyReports = false,
                WeeklyReports = true,
                MonthlyReports = true,
                TwoFactorEnabled = false,
                SessionTimeout = 30,
                LoginNotifications = true,
                DefaultTimeZone = user.UserProfile?.TimeZone ?? "America/New_York",
                DefaultEventDuration = 120,
                DefaultTicketSaleStart = 30,
                DefaultRefundPolicy = "flexible",
                RequireApproval = false,
                AutoPublish = false,
                Theme = "light",
                Language = "en",
                DateFormat = "MM/dd/yyyy",
                TimeFormat = "12h",
                Currency = "USD"
            };
        }

        public async Task<UserPreferencesDto> UpdateUserPreferencesAsync(int userId, UpdateUserPreferencesDto updateDto)
        {
            var user = await _context.Users
                .Include(u => u.UserProfile)
                .FirstOrDefaultAsync(u => u.UserId == userId);

            if (user == null)
                throw new ArgumentException("User not found");

            // For now, we'll just return the updated preferences
            // In a real implementation, you'd save these to a UserPreferences table or JSON field

            // Update timezone in user profile if provided
            if (user.UserProfile != null && !string.IsNullOrEmpty(updateDto.DefaultTimeZone))
            {
                user.UserProfile.TimeZone = updateDto.DefaultTimeZone;
                await _context.SaveChangesAsync();
            }

            return new UserPreferencesDto
            {
                EmailNotifications = updateDto.EmailNotifications,
                SmsNotifications = updateDto.SmsNotifications,
                NewBookingNotifications = updateDto.NewBookingNotifications,
                CancellationNotifications = updateDto.CancellationNotifications,
                LowInventoryNotifications = updateDto.LowInventoryNotifications,
                DailyReports = updateDto.DailyReports,
                WeeklyReports = updateDto.WeeklyReports,
                MonthlyReports = updateDto.MonthlyReports,
                TwoFactorEnabled = updateDto.TwoFactorEnabled,
                SessionTimeout = updateDto.SessionTimeout,
                LoginNotifications = updateDto.LoginNotifications,
                DefaultTimeZone = updateDto.DefaultTimeZone,
                DefaultEventDuration = updateDto.DefaultEventDuration,
                DefaultTicketSaleStart = updateDto.DefaultTicketSaleStart,
                DefaultRefundPolicy = updateDto.DefaultRefundPolicy,
                RequireApproval = updateDto.RequireApproval,
                AutoPublish = updateDto.AutoPublish,
                Theme = updateDto.Theme,
                Language = updateDto.Language,
                DateFormat = updateDto.DateFormat,
                TimeFormat = updateDto.TimeFormat,
                Currency = updateDto.Currency
            };
        }
    }
}