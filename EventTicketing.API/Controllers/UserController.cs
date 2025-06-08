using EventTicketing.API.Models.DTOs;
using EventTicketing.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace EventTicketing.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        private int GetCurrentUserId()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim == null)
                throw new UnauthorizedAccessException("User not authenticated");

            return int.Parse(userIdClaim.Value);
        }

        // GET: api/user/profile
        [HttpGet("profile")]
        public async Task<ActionResult<UserProfileResponseDto>> GetProfile()
        {
            try
            {
                var userId = GetCurrentUserId();
                var profile = await _userService.GetUserProfileAsync(userId);
                return Ok(profile);
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }

        // PUT: api/user/profile
        [HttpPut("profile")]
        public async Task<ActionResult<UserProfileResponseDto>> UpdateProfile(UpdateUserProfileDto updateDto)
        {
            try
            {
                var userId = GetCurrentUserId();
                var profile = await _userService.UpdateUserProfileAsync(userId, updateDto);
                return Ok(profile);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // POST: api/user/change-password
        [HttpPost("change-password")]
        public async Task<ActionResult> ChangePassword(ChangePasswordDto changePasswordDto)
        {
            try
            {
                var userId = GetCurrentUserId();
                await _userService.ChangePasswordAsync(userId, changePasswordDto);
                return Ok(new { message = "Password changed successfully" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET: api/user/organization
        [HttpGet("organization")]
        public async Task<ActionResult<UserOrganizationDto>> GetOrganization()
        {
            try
            {
                var userId = GetCurrentUserId();
                var organization = await _userService.GetUserOrganizationAsync(userId);
                return Ok(organization);
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }

        // PUT: api/user/organization
        [HttpPut("organization")]
        public async Task<ActionResult<UserOrganizationDto>> UpdateOrganization(UpdateUserOrganizationDto updateDto)
        {
            try
            {
                var userId = GetCurrentUserId();
                var organization = await _userService.UpdateUserOrganizationAsync(userId, updateDto);
                return Ok(organization);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET: api/user/preferences
        [HttpGet("preferences")]
        public async Task<ActionResult<UserPreferencesDto>> GetPreferences()
        {
            try
            {
                var userId = GetCurrentUserId();
                Console.WriteLine($"🔍 Getting preferences for user {userId}");
                var preferences = await _userService.GetUserPreferencesAsync(userId);
                Console.WriteLine($"✅ Returning preferences: Theme={preferences.Theme}, AccentColor={preferences.AccentColor}, FontSize={preferences.FontSize}, CompactMode={preferences.CompactMode}");
                return Ok(preferences);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"❌ Error getting preferences: {ex.Message}");
                return NotFound(new { message = ex.Message });
            }
        }

        // PUT: api/user/preferences
        [HttpPut("preferences")]
        public async Task<ActionResult<UserPreferencesDto>> UpdatePreferences(UpdateUserPreferencesDto updateDto)
        {
            try
            {
                var userId = GetCurrentUserId();

                // DEBUG: Log what we received from frontend
                Console.WriteLine($"🔍 Updating preferences for user {userId}");
                Console.WriteLine($"📝 Received - Theme: {updateDto.Theme}");
                Console.WriteLine($"📝 Received - AccentColor: {updateDto.AccentColor}");
                Console.WriteLine($"📝 Received - FontSize: {updateDto.FontSize}");
                Console.WriteLine($"📝 Received - CompactMode: {updateDto.CompactMode}");
                Console.WriteLine($"📝 Received - Currency: {updateDto.Currency}");
                Console.WriteLine($"📝 Received - Language: {updateDto.Language}");

                var preferences = await _userService.UpdateUserPreferencesAsync(userId, updateDto);

                Console.WriteLine($"✅ Successfully updated preferences");
                Console.WriteLine($"💾 Saved - Theme: {preferences.Theme}");
                Console.WriteLine($"💾 Saved - AccentColor: {preferences.AccentColor}");
                Console.WriteLine($"💾 Saved - FontSize: {preferences.FontSize}");
                Console.WriteLine($"💾 Saved - CompactMode: {preferences.CompactMode}");

                return Ok(preferences);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"❌ Error updating preferences: {ex.Message}");
                Console.WriteLine($"❌ Stack trace: {ex.StackTrace}");
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}