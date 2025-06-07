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
                var preferences = await _userService.GetUserPreferencesAsync(userId);
                return Ok(preferences);
            }
            catch (Exception ex)
            {
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
                var preferences = await _userService.UpdateUserPreferencesAsync(userId, updateDto);
                return Ok(preferences);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}