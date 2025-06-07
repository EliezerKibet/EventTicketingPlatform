using EventTicketing.API.Models.DTOs;
using EventTicketing.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EventTicketing.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VenuesController : ControllerBase
    {
        private readonly IEventService _eventService;

        public VenuesController(IEventService eventService)
        {
            _eventService = eventService;
        }

        // GET: api/venues
        [HttpGet]
        public async Task<ActionResult<List<VenueResponseDto>>> GetVenues([FromQuery] string? city = null)
        {
            try
            {
                var venues = await _eventService.GetVenuesAsync(city);
                return Ok(venues);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET: api/venues/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<VenueResponseDto>> GetVenue(int id)
        {
            try
            {
                var venue = await _eventService.GetVenueByIdAsync(id);
                return Ok(venue);
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }

        // POST: api/venues
        [HttpPost]
        [Authorize(Roles = "Admin,Organizer")]
        public async Task<ActionResult<VenueResponseDto>> CreateVenue(CreateVenueDto createVenueDto)
        {
            try
            {
                var venue = await _eventService.CreateVenueAsync(createVenueDto);
                return CreatedAtAction(nameof(GetVenue), new { id = venue.VenueId }, venue);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}