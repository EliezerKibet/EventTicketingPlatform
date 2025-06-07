using EventTicketing.API.Models.DTOs;

namespace EventTicketing.API.Services
{
    public interface ITicketService
    {
        // Ticket Types Management
        Task<TicketTypeResponseDto> CreateTicketTypeAsync(CreateTicketTypeDto createTicketTypeDto, int organizerId);
        Task<List<TicketTypeResponseDto>> GetTicketTypesByEventAsync(int eventId);
        Task<TicketTypeResponseDto> GetTicketTypeByIdAsync(int ticketTypeId);
        Task<TicketTypeResponseDto> UpdateTicketTypeAsync(int ticketTypeId, UpdateTicketTypeDto updateTicketTypeDto, int organizerId); // Fixed: Use UpdateTicketTypeDto
        Task<bool> DeleteTicketTypeAsync(int ticketTypeId, int organizerId);

        // Ticket Purchasing
        Task<OrderSummaryDto> CalculateOrderSummaryAsync(PurchaseTicketsDto purchaseDto);
        Task<OrderResponseDto> PurchaseTicketsAsync(PurchaseTicketsDto purchaseDto, int userId);

        // Order Management
        Task<List<OrderResponseDto>> GetUserOrdersAsync(int userId);
        Task<OrderResponseDto> GetOrderByIdAsync(int orderId, int userId);
        Task<List<OrderResponseDto>> GetEventOrdersAsync(int eventId, int organizerId);

        // Ticket Management
        Task<List<TicketResponseDto>> GetUserTicketsAsync(int userId);
        Task<TicketResponseDto> GetTicketByIdAsync(int ticketId, int userId);
        Task<List<TicketResponseDto>> GetEventTicketsAsync(int eventId, int organizerId);

        // Check-in System
        Task<TicketValidationDto> ValidateTicketAsync(string ticketNumber);
        Task<TicketResponseDto> CheckInTicketAsync(CheckInTicketDto checkInDto, int organizerId);
        Task<List<TicketResponseDto>> GetCheckedInTicketsAsync(int eventId, int organizerId);

        // Analytics
        Task<object> GetTicketSalesAnalyticsAsync(int eventId, int organizerId);
    }
}