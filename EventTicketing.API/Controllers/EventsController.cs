using EventTicketing.API.Models.DTOs;
using EventTicketing.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace EventTicketing.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventsController : ControllerBase
    {
        private readonly IEventService _eventService;

        public EventsController(IEventService eventService)
        {
            _eventService = eventService;
        }

        private int GetCurrentUserId()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim == null)
                throw new UnauthorizedAccessException("User not authenticated");

            return int.Parse(userIdClaim.Value);
        }

        // GET: api/events
        [HttpGet]
        public async Task<ActionResult<List<EventListDto>>> GetEvents(
            [FromQuery] int? categoryId = null,
            [FromQuery] string? search = null,
            [FromQuery] bool? isOnline = null,
            [FromQuery] DateTime? startDate = null,
            [FromQuery] DateTime? endDate = null,
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10)
        {
            try
            {
                var events = await _eventService.GetEventsAsync(categoryId, search, isOnline,
                    startDate, endDate, page, pageSize);
                return Ok(events);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET: api/events/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<EventResponseDto>> GetEvent(int id)
        {
            try
            {
                var eventDto = await _eventService.GetEventByIdAsync(id);
                return Ok(eventDto);
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }

        // POST: api/events
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<EventResponseDto>> CreateEvent(CreateEventDto createEventDto)
        {
            try
            {
                var userId = GetCurrentUserId();
                var eventDto = await _eventService.CreateEventAsync(createEventDto, userId);
                return CreatedAtAction(nameof(GetEvent), new { id = eventDto.EventId }, eventDto);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // PUT: api/events/{id}
        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult<EventResponseDto>> UpdateEvent(int id, UpdateEventDto updateEventDto)
        {
            try
            {
                var userId = GetCurrentUserId();
                var eventDto = await _eventService.UpdateEventAsync(id, updateEventDto, userId);
                return Ok(eventDto);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // DELETE: api/events/{id}
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult> DeleteEvent(int id)
        {
            try
            {
                var userId = GetCurrentUserId();
                var result = await _eventService.DeleteEventAsync(id, userId);
                if (result)
                    return NoContent();
                return NotFound(new { message = "Event not found" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // POST: api/events/{id}/publish
        [HttpPost("{id}/publish")]
        [Authorize]
        public async Task<ActionResult> PublishEvent(int id)
        {
            try
            {
                var userId = GetCurrentUserId();
                var result = await _eventService.PublishEventAsync(id, userId);
                if (result)
                    return Ok(new { message = "Event published successfully" });
                return NotFound(new { message = "Event not found" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // POST: api/events/{id}/unpublish
        [HttpPost("{id}/unpublish")]
        [Authorize]
        public async Task<ActionResult> UnpublishEvent(int id)
        {
            try
            {
                var userId = GetCurrentUserId();
                var result = await _eventService.UnpublishEventAsync(id, userId);
                if (result)
                    return Ok(new { message = "Event unpublished successfully" });
                return NotFound(new { message = "Event not found" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET: api/events/my-events
        [HttpGet("my-events")]
        [Authorize]
        public async Task<ActionResult<List<EventListDto>>> GetMyEvents()
        {
            try
            {
                var userId = GetCurrentUserId();
                var events = await _eventService.GetEventsByOrganizerAsync(userId);
                return Ok(events);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}