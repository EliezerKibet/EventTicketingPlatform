using EventTicketing.API.Models.DTOs;
using EventTicketing.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace EventTicketing.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TicketsController : ControllerBase
    {
        private readonly ITicketService _ticketService;

        public TicketsController(ITicketService ticketService)
        {
            _ticketService = ticketService;
        }

        private int GetCurrentUserId()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim == null)
                throw new UnauthorizedAccessException("User not authenticated");

            return int.Parse(userIdClaim.Value);
        }

        // GET: api/tickets/event/{eventId}/ticket-types
        [HttpGet("event/{eventId}/ticket-types")]
        public async Task<ActionResult<List<TicketTypeResponseDto>>> GetEventTicketTypes(int eventId)
        {
            try
            {
                var ticketTypes = await _ticketService.GetTicketTypesByEventAsync(eventId);
                return Ok(ticketTypes);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // POST: api/tickets/ticket-types
        [HttpPost("ticket-types")]
        [Authorize]
        public async Task<ActionResult<TicketTypeResponseDto>> CreateTicketType(CreateTicketTypeDto createTicketTypeDto)
        {
            try
            {
                var userId = GetCurrentUserId();
                var ticketType = await _ticketService.CreateTicketTypeAsync(createTicketTypeDto, userId);
                return CreatedAtAction(nameof(GetTicketType), new { id = ticketType.TicketTypeId }, ticketType);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // PUT: api/tickets/ticket-types/{id}
        [HttpPut("ticket-types/{id}")]
        [Authorize]
        public async Task<ActionResult<TicketTypeResponseDto>> UpdateTicketType(int id, UpdateTicketTypeDto updateTicketTypeDto)
        {
            try
            {
                var userId = GetCurrentUserId();
                var ticketType = await _ticketService.UpdateTicketTypeAsync(id, updateTicketTypeDto, userId);
                return Ok(ticketType);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Forbid(ex.Message);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET: api/tickets/ticket-types/{id}
        [HttpGet("ticket-types/{id}")]
        public async Task<ActionResult<TicketTypeResponseDto>> GetTicketType(int id)
        {
            try
            {
                var ticketType = await _ticketService.GetTicketTypeByIdAsync(id);
                return Ok(ticketType);
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }

        // POST: api/tickets/calculate-order
        [HttpPost("calculate-order")]
        public async Task<ActionResult<OrderSummaryDto>> CalculateOrder(PurchaseTicketsDto purchaseDto)
        {
            try
            {
                var summary = await _ticketService.CalculateOrderSummaryAsync(purchaseDto);
                return Ok(summary);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // POST: api/tickets/purchase
        [HttpPost("purchase")]
        [Authorize]
        public async Task<ActionResult<OrderResponseDto>> PurchaseTickets(PurchaseTicketsDto purchaseDto)
        {
            try
            {
                var userId = GetCurrentUserId();
                var order = await _ticketService.PurchaseTicketsAsync(purchaseDto, userId);
                return Ok(order);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET: api/tickets/my-tickets
        [HttpGet("my-tickets")]
        [Authorize]
        public async Task<ActionResult<List<TicketResponseDto>>> GetMyTickets()
        {
            try
            {
                var userId = GetCurrentUserId();
                var tickets = await _ticketService.GetUserTicketsAsync(userId);
                return Ok(tickets);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET: api/tickets/{id}
        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<TicketResponseDto>> GetTicket(int id)
        {
            try
            {
                var userId = GetCurrentUserId();
                var ticket = await _ticketService.GetTicketByIdAsync(id, userId);
                return Ok(ticket);
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }

        // POST: api/tickets/validate
        [HttpPost("validate")]
        [Authorize]
        public async Task<ActionResult<TicketValidationDto>> ValidateTicket([FromBody] string ticketNumber)
        {
            try
            {
                var validation = await _ticketService.ValidateTicketAsync(ticketNumber);
                return Ok(validation);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // POST: api/tickets/check-in
        [HttpPost("check-in")]
        [Authorize]
        public async Task<ActionResult<TicketResponseDto>> CheckInTicket(CheckInTicketDto checkInDto)
        {
            try
            {
                var userId = GetCurrentUserId();
                var ticket = await _ticketService.CheckInTicketAsync(checkInDto, userId);
                return Ok(ticket);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}