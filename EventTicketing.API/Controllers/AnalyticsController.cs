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
    public class AnalyticsController : ControllerBase
    {
        private readonly IAnalyticsService _analyticsService;

        public AnalyticsController(IAnalyticsService analyticsService)
        {
            _analyticsService = analyticsService;
        }


        // GET: api/analytics/revenue-by-event
        [HttpGet("revenue-by-event")]
        public async Task<ActionResult<RevenueAnalyticsDto>> GetRevenueByEvent([FromQuery] string period = "last30days")
        {
            try
            {
                var userId = GetCurrentUserId();
                var data = await _analyticsService.GetRevenueAnalyticsAsync(userId, period);
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET: api/analytics/payment-methods
        [HttpGet("payment-methods")]
        public async Task<ActionResult<PaymentMethodAnalyticsDto>> GetPaymentMethodAnalytics([FromQuery] string period = "last30days")
        {
            try
            {
                var userId = GetCurrentUserId();
                var data = await _analyticsService.GetPaymentMethodAnalyticsAsync(userId, period);
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET: api/analytics/event-capacity
        [HttpGet("event-capacity")]
        public async Task<ActionResult<CapacityAnalyticsDto>> GetEventCapacityAnalytics([FromQuery] string period = "last30days")
        {
            try
            {
                var userId = GetCurrentUserId();
                var data = await _analyticsService.GetCapacityAnalyticsAsync(userId, period);
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET: api/analytics/attendee-demographics
        [HttpGet("attendee-demographics")]
        public async Task<ActionResult<DemographicsAnalyticsDto>> GetAttendeeDemographics([FromQuery] string period = "last30days")
        {
            try
            {
                var userId = GetCurrentUserId();
                var data = await _analyticsService.GetDemographicsAnalyticsAsync(userId, period);
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("check-in-patterns")]
        public async Task<IActionResult> GetCheckInAnalytics([FromQuery] string period = "last30days")
        {
            try
            {
                // Debug: Print all claims
                Console.WriteLine("=== JWT CLAIMS DEBUG ===");
                foreach (var claim in User.Claims)
                {
                    Console.WriteLine($"Type: {claim.Type} | Value: {claim.Value}");
                }
                Console.WriteLine("========================");

                // Extract user ID using the exact same claim type as AuthService
                var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
                if (userIdClaim == null)
                {
                    Console.WriteLine("ERROR: ClaimTypes.NameIdentifier not found in token");
                    return Ok(new CheckInAnalyticsDto());
                }

                if (!int.TryParse(userIdClaim.Value, out int organizerId) || organizerId <= 0)
                {
                    Console.WriteLine($"ERROR: Invalid user ID in token: '{userIdClaim.Value}'");
                    return Ok(new CheckInAnalyticsDto());
                }

                Console.WriteLine($"SUCCESS: Found organizer ID {organizerId}");

                var result = await _analyticsService.GetCheckInAnalyticsAsync(organizerId, period);
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Check-in analytics error: {ex.Message}");
                Console.WriteLine($"Stack trace: {ex.StackTrace}");
                return Ok(new CheckInAnalyticsDto());
            }
        }

        private int GetCurrentUserId()
        {
            // Debug: Print all claims for other methods too
            Console.WriteLine("=== GetCurrentUserId DEBUG ===");
            foreach (var claim in User.Claims)
            {
                Console.WriteLine($"Type: {claim.Type} | Value: {claim.Value}");
            }
            Console.WriteLine("==============================");

            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim == null)
            {
                Console.WriteLine("ERROR: ClaimTypes.NameIdentifier not found");
                throw new UnauthorizedAccessException("User not authenticated - no NameIdentifier claim");
            }

            if (!int.TryParse(userIdClaim.Value, out int userId) || userId <= 0)
            {
                Console.WriteLine($"ERROR: Invalid user ID value: '{userIdClaim.Value}'");
                throw new UnauthorizedAccessException($"Invalid user ID in token: {userIdClaim.Value}");
            }

            Console.WriteLine($"SUCCESS: GetCurrentUserId returning {userId}");
            return userId;
        }

        // GET: api/analytics/venue-performance
        [HttpGet("venue-performance")]
        public async Task<ActionResult<VenueAnalyticsDto>> GetVenuePerformance([FromQuery] string period = "last30days")
        {
            try
            {
                var userId = GetCurrentUserId();
                var data = await _analyticsService.GetVenueAnalyticsAsync(userId, period);
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET: api/analytics/seasonal-trends
        [HttpGet("seasonal-trends")]
        public async Task<ActionResult<SeasonalAnalyticsDto>> GetSeasonalTrends()
        {
            try
            {
                var userId = GetCurrentUserId();
                var data = await _analyticsService.GetSeasonalTrendsAsync(userId);
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET: api/analytics/low-attendance-events
        [HttpGet("low-attendance-events")]
        public async Task<ActionResult<LowAttendanceAnalyticsDto>> GetLowAttendanceEvents()
        {
            try
            {
                var userId = GetCurrentUserId();
                var data = await _analyticsService.GetLowAttendanceEventsAsync(userId);
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}