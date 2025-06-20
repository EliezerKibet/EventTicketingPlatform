using EventTicketing.API.Data;
using EventTicketing.API.Models.DTOs;
using EventTicketing.API.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace EventTicketing.API.Services
{
    public class TicketService : ITicketService
    {
        private readonly ApplicationDbContext _context;
        private readonly IQrCodeService _qrCodeService;
        private readonly IPromoCodeService _promoCodeService;

        public TicketService(ApplicationDbContext context, IQrCodeService qrCodeService, IPromoCodeService promoCodeService)
        {
            _context = context;
            _qrCodeService = qrCodeService;
            _promoCodeService = promoCodeService;
        }

        public async Task<TicketTypeResponseDto> CreateTicketTypeAsync(CreateTicketTypeDto createTicketTypeDto, int organizerId)
        {
            // Fetch the event with related data for validation
            var eventEntity = await _context.Events
                .Include(e => e.TicketTypes)
                .ThenInclude(tt => tt.Tickets)
                .FirstOrDefaultAsync(e => e.EventId == createTicketTypeDto.EventId);

            if (eventEntity == null)
                throw new Exception("Event not found");

            // Verify the organizer owns the event
            if (eventEntity.OrganizerId != organizerId)
                throw new Exception("You can only create ticket types for your own events");

            // Business rule: Check if event is published
            if (eventEntity.IsPublished)
                throw new Exception("Cannot create ticket types for published events. Ticket types must be created before publishing to preserve sales data integrity.");

            // Business rule: Check if any tickets have been sold for this event
            var totalTicketsSold = eventEntity.TicketTypes.Sum(tt => tt.QuantitySold);
            if (totalTicketsSold > 0)
                throw new Exception($"Cannot create new ticket types. {totalTicketsSold} ticket(s) have already been sold for this event. Create ticket types before any sales occur.");

            // Business rule: Check if event is in draft status
            if (eventEntity.Status != EventStatus.Draft)
                throw new Exception("Ticket types can only be created when the event is in DRAFT status");

            // Additional validation: Check for duplicate ticket type names within the same event
            var existingTicketType = eventEntity.TicketTypes
                .FirstOrDefault(tt => tt.Name.ToLower() == createTicketTypeDto.Name.ToLower() && tt.IsActive);

            if (existingTicketType != null)
                throw new Exception($"A ticket type with the name '{createTicketTypeDto.Name}' already exists for this event");

            var ticketType = new TicketType
            {
                EventId = createTicketTypeDto.EventId,
                Name = createTicketTypeDto.Name,
                Description = createTicketTypeDto.Description,
                Price = createTicketTypeDto.Price,
                QuantityAvailable = createTicketTypeDto.QuantityAvailable,
                QuantitySold = 0,
                SaleStartDate = createTicketTypeDto.SaleStartDate,
                SaleEndDate = createTicketTypeDto.SaleEndDate,
                MinQuantityPerOrder = createTicketTypeDto.MinQuantityPerOrder,
                MaxQuantityPerOrder = createTicketTypeDto.MaxQuantityPerOrder,
                IsActive = true,
                SortOrder = createTicketTypeDto.SortOrder,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _context.TicketTypes.Add(ticketType);
            await _context.SaveChangesAsync();

            return await GetTicketTypeByIdAsync(ticketType.TicketTypeId);
        }

        public async Task<List<TicketTypeResponseDto>> GetTicketTypesByEventAsync(int eventId)
        {
            var ticketTypes = await _context.TicketTypes
                .Include(tt => tt.Event)
                .Where(tt => tt.EventId == eventId && tt.IsActive)
                .OrderBy(tt => tt.SortOrder)
                .ToListAsync();

            return ticketTypes.Select(tt => new TicketTypeResponseDto
            {
                TicketTypeId = tt.TicketTypeId,
                EventId = tt.EventId,
                EventTitle = tt.Event.Title,
                Name = tt.Name,
                Description = tt.Description,
                Price = tt.Price,
                QuantityAvailable = tt.QuantityAvailable,
                QuantitySold = tt.QuantitySold,
                QuantityRemaining = tt.QuantityAvailable - tt.QuantitySold,
                SaleStartDate = tt.SaleStartDate,
                SaleEndDate = tt.SaleEndDate,
                MinQuantityPerOrder = tt.MinQuantityPerOrder,
                MaxQuantityPerOrder = tt.MaxQuantityPerOrder,
                IsActive = tt.IsActive,
                IsOnSale = IsTicketTypeOnSale(tt),
                SortOrder = tt.SortOrder,
                // NEW: Smart editing support fields
                IsEventPublished = tt.Event.IsPublished,
                EventStatus = tt.Event.Status.ToString(),
                CreatedAt = tt.CreatedAt,
                UpdatedAt = tt.UpdatedAt
            }).ToList();
        }

        public async Task<TicketTypeResponseDto> GetTicketTypeByIdAsync(int ticketTypeId)
        {
            var ticketType = await _context.TicketTypes
                .Include(tt => tt.Event)
                .FirstOrDefaultAsync(tt => tt.TicketTypeId == ticketTypeId);

            if (ticketType == null)
                throw new Exception("Ticket type not found");

            return new TicketTypeResponseDto
            {
                TicketTypeId = ticketType.TicketTypeId,
                EventId = ticketType.EventId,
                EventTitle = ticketType.Event.Title,
                Name = ticketType.Name,
                Description = ticketType.Description,
                Price = ticketType.Price,
                QuantityAvailable = ticketType.QuantityAvailable,
                QuantitySold = ticketType.QuantitySold,
                QuantityRemaining = ticketType.QuantityAvailable - ticketType.QuantitySold,
                SaleStartDate = ticketType.SaleStartDate,
                SaleEndDate = ticketType.SaleEndDate,
                MinQuantityPerOrder = ticketType.MinQuantityPerOrder,
                MaxQuantityPerOrder = ticketType.MaxQuantityPerOrder,
                IsActive = ticketType.IsActive,
                IsOnSale = IsTicketTypeOnSale(ticketType),
                SortOrder = ticketType.SortOrder,
                // NEW: Smart editing support fields
                IsEventPublished = ticketType.Event.IsPublished,
                EventStatus = ticketType.Event.Status.ToString(),
                CreatedAt = ticketType.CreatedAt,
                UpdatedAt = ticketType.UpdatedAt
            };
        }

        public async Task<OrderSummaryDto> CalculateOrderSummaryAsync(PurchaseTicketsDto purchaseDto)
        {
            var summary = new OrderSummaryDto
            {
                EventId = purchaseDto.EventId,
                Items = purchaseDto.TicketItems,
                Currency = "USD"
            };

            decimal subTotal = 0;

            // Get event details
            var eventEntity = await _context.Events.FindAsync(purchaseDto.EventId);
            if (eventEntity == null)
                throw new Exception("Event not found");

            summary.EventTitle = eventEntity.Title;

            // Calculate subtotal
            foreach (var item in purchaseDto.TicketItems)
            {
                var ticketType = await _context.TicketTypes.FindAsync(item.TicketTypeId);
                if (ticketType == null)
                    throw new Exception($"Ticket type {item.TicketTypeId} not found");

                // Validate quantity available
                if (ticketType.QuantityAvailable - ticketType.QuantitySold < item.Quantity)
                    throw new Exception($"Not enough tickets available for {ticketType.Name}");

                subTotal += ticketType.Price * item.Quantity;
            }

            summary.SubTotal = subTotal;

            // Calculate fees and taxes (customize as needed)
            summary.ServiceFee = subTotal * 0.05m; // 5% service fee
            summary.TaxAmount = subTotal * 0.08m; // 8% tax

            // Apply promo code discount if provided
            summary.DiscountAmount = 0;
            if (!string.IsNullOrEmpty(purchaseDto.PromoCode))
            {
                summary.DiscountAmount = await CalculatePromoCodeDiscountAsync(purchaseDto.PromoCode, subTotal, purchaseDto.EventId);
            }

            summary.TotalAmount = summary.SubTotal + summary.ServiceFee + summary.TaxAmount - summary.DiscountAmount;

            return summary;
        }

        public async Task<OrderResponseDto> PurchaseTicketsAsync(PurchaseTicketsDto purchaseDto, int userId)
        {
            using var transaction = await _context.Database.BeginTransactionAsync();

            try
            {
                // Calculate order summary
                var summary = await CalculateOrderSummaryAsync(purchaseDto);

                // Create order
                var order = new Order
                {
                    UserId = userId,
                    OrderNumber = GenerateOrderNumber(),
                    SubTotal = summary.SubTotal,
                    TaxAmount = summary.TaxAmount,
                    ServiceFee = summary.ServiceFee,
                    TotalAmount = summary.TotalAmount,
                    Currency = summary.Currency,
                    Status = OrderStatus.Completed,
                    CreatedAt = DateTime.UtcNow,
                    CompletedAt = DateTime.UtcNow,
                    BillingEmail = purchaseDto.BillingEmail,
                    BillingFirstName = purchaseDto.BillingFirstName,
                    BillingLastName = purchaseDto.BillingLastName,
                    BillingAddress = purchaseDto.BillingAddress,
                    BillingCity = purchaseDto.BillingCity,
                    BillingState = purchaseDto.BillingState,
                    BillingZipCode = purchaseDto.BillingZipCode,
                    PromoCode = purchaseDto.PromoCode,
                    DiscountAmount = summary.DiscountAmount
                };

                _context.Orders.Add(order);
                await _context.SaveChangesAsync();

                // Create tickets
                var tickets = new List<Ticket>();
                int attendeeIndex = 0;

                foreach (var item in purchaseDto.TicketItems)
                {
                    var ticketType = await _context.TicketTypes.FindAsync(item.TicketTypeId);

                    for (int i = 0; i < item.Quantity; i++)
                    {
                        var attendee = attendeeIndex < purchaseDto.Attendees.Count
                            ? purchaseDto.Attendees[attendeeIndex]
                            : null;

                        var ticketNumber = _qrCodeService.GenerateTicketNumber();
                        var qrCode = _qrCodeService.GenerateQrCodeData(ticketNumber, purchaseDto.EventId, summary.EventTitle);

                        var ticket = new Ticket
                        {
                            EventId = purchaseDto.EventId,
                            TicketTypeId = item.TicketTypeId,
                            OrderId = order.OrderId,
                            UserId = userId,
                            TicketNumber = ticketNumber,
                            QrCode = qrCode,
                            PricePaid = ticketType.Price,
                            Status = TicketStatus.Valid,
                            PurchaseDate = DateTime.UtcNow,
                            AttendeeFirstName = attendee?.FirstName ?? purchaseDto.BillingFirstName,
                            AttendeeLastName = attendee?.LastName ?? purchaseDto.BillingLastName,
                            AttendeeEmail = attendee?.Email ?? purchaseDto.BillingEmail
                        };

                        tickets.Add(ticket);
                        attendeeIndex++;
                    }

                    // Update ticket type sold quantity
                    ticketType.QuantitySold += item.Quantity;
                }

                _context.Tickets.AddRange(tickets);
                await _context.SaveChangesAsync();

                // 🏷️ RECORD PROMO CODE USAGE INSIDE TRANSACTION (BEFORE COMMIT)
                if (!string.IsNullOrEmpty(purchaseDto.PromoCode) && summary.DiscountAmount > 0)
                {
                    try
                    {
                        Console.WriteLine($"🏷️ Recording promo code usage for: {purchaseDto.PromoCode}");
                        Console.WriteLine($"🏷️ Order ID: {order.OrderId}, Event ID: {purchaseDto.EventId}");
                        Console.WriteLine($"🏷️ Discount Amount: {summary.DiscountAmount}, Subtotal: {summary.SubTotal}");
                        Console.WriteLine($"🏷️ Using same context - Hash: {_context.GetHashCode()}");

                        // Find the promo code using the SAME context
                        var promoCode = await _context.PromoCodes
                            .FirstOrDefaultAsync(pc => pc.Code.ToUpper() == purchaseDto.PromoCode.ToUpper());

                        if (promoCode == null)
                        {
                            Console.WriteLine($"🏷️ ❌ Promo code not found: {purchaseDto.PromoCode}");
                            throw new Exception("Promo code not found during usage recording");
                        }

                        Console.WriteLine($"🏷️ Found promo code - ID: {promoCode.PromoCodeId}, Current Usage: {promoCode.CurrentUsageCount}");

                        // Create usage record
                        var usage = new PromoCodeUsage
                        {
                            PromoCodeId = promoCode.PromoCodeId,
                            OrderId = order.OrderId,
                            UserId = userId,
                            EventId = purchaseDto.EventId,
                            DiscountAmount = summary.DiscountAmount,
                            OrderSubtotal = summary.SubTotal,
                            UsedAt = DateTime.UtcNow
                        };

                        _context.PromoCodeUsages.Add(usage);

                        // Update usage count
                        promoCode.CurrentUsageCount++;

                        // Save changes within the same transaction
                        await _context.SaveChangesAsync();

                        Console.WriteLine($"🏷️ ✅ Successfully recorded promo code usage for {purchaseDto.PromoCode}");
                        Console.WriteLine($"🏷️ New usage count: {promoCode.CurrentUsageCount}");
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"🏷️ ❌ Failed to record promo code usage: {ex.Message}");
                        Console.WriteLine($"🏷️ ❌ Stack trace: {ex.StackTrace}");

                        // IMPORTANT: Now we DO want to fail the transaction if promo code recording fails
                        // since it's part of the same transaction
                        throw;
                    }
                }

                // Commit the transaction (includes order, tickets, AND promo code usage)
                await transaction.CommitAsync();
                Console.WriteLine($"🏷️ ✅ Transaction committed successfully");

                // Return order details
                return await GetOrderByIdAsync(order.OrderId, userId);
            }
            catch
            {
                await transaction.RollbackAsync();
                Console.WriteLine($"🏷️ ❌ Transaction rolled back");
                throw;
            }
        }

        public async Task<List<OrderResponseDto>> GetUserOrdersAsync(int userId)
        {
            var orders = await _context.Orders
                .Include(o => o.Tickets)
                    .ThenInclude(t => t.Event)
                .Where(o => o.UserId == userId)
                .OrderByDescending(o => o.CreatedAt)
                .ToListAsync();

            return orders.Select(MapToOrderResponseDto).ToList();
        }

        public async Task<OrderResponseDto> GetOrderByIdAsync(int orderId, int userId)
        {
            var order = await _context.Orders
                .Include(o => o.Tickets)
                    .ThenInclude(t => t.Event)
                .Include(o => o.Tickets)
                    .ThenInclude(t => t.TicketType)
                .FirstOrDefaultAsync(o => o.OrderId == orderId && o.UserId == userId);

            if (order == null)
                throw new Exception("Order not found");

            return MapToOrderResponseDto(order);
        }

        public async Task<List<TicketResponseDto>> GetUserTicketsAsync(int userId)
        {
            var tickets = await _context.Tickets
                .Include(t => t.Event)
                    .ThenInclude(e => e.Venue)
                .Include(t => t.TicketType)
                .Where(t => t.UserId == userId)
                .OrderByDescending(t => t.PurchaseDate)
                .ToListAsync();

            return tickets.Select(MapToTicketResponseDto).ToList();
        }

        public async Task<TicketResponseDto> GetTicketByIdAsync(int ticketId, int userId)
        {
            var ticket = await _context.Tickets
                .Include(t => t.Event)
                    .ThenInclude(e => e.Venue)
                .Include(t => t.TicketType)
                .FirstOrDefaultAsync(t => t.TicketId == ticketId && t.UserId == userId);

            if (ticket == null)
                throw new Exception("Ticket not found");

            return MapToTicketResponseDto(ticket);
        }

        public async Task<TicketValidationDto> ValidateTicketAsync(string ticketNumber)
        {
            var ticket = await _context.Tickets
                .Include(t => t.Event)
                .FirstOrDefaultAsync(t => t.TicketNumber == ticketNumber);

            if (ticket == null)
            {
                return new TicketValidationDto
                {
                    IsValid = false,
                    Message = "Ticket not found"
                };
            }

            if (ticket.Status == TicketStatus.Used)
            {
                return new TicketValidationDto
                {
                    IsValid = false,
                    Message = "Ticket has already been used",
                    Ticket = MapToTicketResponseDto(ticket)
                };
            }

            if (ticket.Status != TicketStatus.Valid)
            {
                return new TicketValidationDto
                {
                    IsValid = false,
                    Message = $"Ticket status is {ticket.Status}",
                    Ticket = MapToTicketResponseDto(ticket)
                };
            }

            return new TicketValidationDto
            {
                IsValid = true,
                Message = "Ticket is valid",
                Ticket = MapToTicketResponseDto(ticket)
            };
        }

        public async Task<TicketResponseDto> CheckInTicketAsync(CheckInTicketDto checkInDto, int organizerId)
        {
            var ticket = await _context.Tickets
                .Include(t => t.Event)
                    .ThenInclude(e => e.Venue)
                .Include(t => t.TicketType)
                .FirstOrDefaultAsync(t => t.TicketNumber == checkInDto.TicketNumber);

            if (ticket == null)
                throw new Exception("Ticket not found");

            // Verify organizer owns the event
            if (ticket.Event.OrganizerId != organizerId)
                throw new Exception("You can only check in tickets for your own events");

            if (ticket.Status == TicketStatus.Used)
                throw new Exception("Ticket has already been checked in");

            if (ticket.Status != TicketStatus.Valid)
                throw new Exception($"Ticket is not valid. Status: {ticket.Status}");

            // Check in the ticket
            ticket.Status = TicketStatus.Used;
            ticket.CheckInDate = DateTime.UtcNow;

            await _context.SaveChangesAsync();

            return MapToTicketResponseDto(ticket);
        }

        // Helper methods
        private bool IsTicketTypeOnSale(TicketType ticketType)
        {
            var now = DateTime.UtcNow;

            if (ticketType.SaleStartDate.HasValue && now < ticketType.SaleStartDate.Value)
                return false;

            if (ticketType.SaleEndDate.HasValue && now > ticketType.SaleEndDate.Value)
                return false;

            return ticketType.IsActive && (ticketType.QuantityAvailable - ticketType.QuantitySold) > 0;
        }

        private async Task<decimal> CalculatePromoCodeDiscountAsync(string promoCode, decimal subTotal, int eventId)
        {
            if (string.IsNullOrEmpty(promoCode))
                return 0;

            // Use the new PromoCodeService for validation and calculation
            var promoCodeService = new PromoCodeService(_context);

            // For now, get the current user ID from the context (you may need to pass this as a parameter)
            // This is a simplified approach - in production, you'd want to properly pass the user ID
            var userId = 0; // You'll need to pass this properly

            return await promoCodeService.CalculateDiscountAsync(promoCode, eventId, subTotal, userId);
        }

        private string GenerateOrderNumber()
        {
            var prefix = "ORD";
            var timestamp = DateTime.UtcNow.ToString("yyyyMMddHHmmss");
            var random = new Random().Next(1000, 9999);

            return $"{prefix}-{timestamp}-{random}";
        }

        private OrderResponseDto MapToOrderResponseDto(Order order)
        {
            return new OrderResponseDto
            {
                OrderId = order.OrderId,
                OrderNumber = order.OrderNumber,
                UserId = order.UserId,
                EventId = order.Tickets.First().EventId,
                EventTitle = order.Tickets.First().Event.Title,
                SubTotal = order.SubTotal,
                TaxAmount = order.TaxAmount,
                ServiceFee = order.ServiceFee,
                TotalAmount = order.TotalAmount,
                Currency = order.Currency,
                Status = order.Status.ToString(),
                CreatedAt = order.CreatedAt,
                CompletedAt = order.CompletedAt,
                BillingEmail = order.BillingEmail,
                BillingFirstName = order.BillingFirstName,
                BillingLastName = order.BillingLastName,
                PromoCode = order.PromoCode,
                DiscountAmount = order.DiscountAmount,
                Tickets = order.Tickets.Select(MapToTicketResponseDto).ToList()
            };
        }

        private TicketResponseDto MapToTicketResponseDto(Ticket ticket)
        {
            return new TicketResponseDto
            {
                TicketId = ticket.TicketId,
                EventId = ticket.EventId,
                EventTitle = ticket.Event?.Title ?? "",
                TicketTypeId = ticket.TicketTypeId,
                TicketTypeName = ticket.TicketType?.Name ?? "",
                TicketNumber = ticket.TicketNumber,
                QrCode = ticket.QrCode,
                PricePaid = ticket.PricePaid,
                Status = ticket.Status.ToString(),
                PurchaseDate = ticket.PurchaseDate,
                CheckInDate = ticket.CheckInDate,
                AttendeeFirstName = ticket.AttendeeFirstName,
                AttendeeLastName = ticket.AttendeeLastName,
                AttendeeEmail = ticket.AttendeeEmail,
                EventStartDateTime = ticket.Event?.StartDateTime.ToString("yyyy-MM-ddTHH:mm:ss") ?? "",
                VenueName = ticket.Event?.Venue?.Name ?? "",
                VenueAddress = ticket.Event?.Venue?.Address ?? ""
            };
        }

        // Implement remaining interface methods...
        public async Task<TicketTypeResponseDto> UpdateTicketTypeAsync(int ticketTypeId, UpdateTicketTypeDto updateTicketTypeDto, int organizerId)
        {
            // Fetch the ticket type with related event data
            var ticketType = await _context.TicketTypes
                .Include(tt => tt.Event)
                .FirstOrDefaultAsync(tt => tt.TicketTypeId == ticketTypeId);

            if (ticketType == null)
                throw new Exception("Ticket type not found");

            // Verify the organizer owns the event
            if (ticketType.Event.OrganizerId != organizerId)
                throw new Exception("You can only modify ticket types for your own events");

            // Business rule: Check if event is published
            if (ticketType.Event.IsPublished)
                throw new Exception("Cannot modify ticket types for published events. Ticket types are locked to preserve existing sales data.");

            // Business rule: Check if any tickets have been sold
            if (ticketType.QuantitySold > 0)
                throw new Exception($"Cannot modify ticket type. {ticketType.QuantitySold} ticket(s) have already been sold. Editing is locked to preserve purchase data.");

            // Business rule: Check if event is in draft status
            if (ticketType.Event.Status != EventStatus.Draft)
                throw new Exception("Ticket types can only be modified when the event is in DRAFT status");

            // Apply updates only if values are provided (partial update)
            if (!string.IsNullOrEmpty(updateTicketTypeDto.Name))
                ticketType.Name = updateTicketTypeDto.Name;

            if (updateTicketTypeDto.Description != null)
                ticketType.Description = updateTicketTypeDto.Description;

            if (updateTicketTypeDto.Price.HasValue)
                ticketType.Price = updateTicketTypeDto.Price.Value;

            if (updateTicketTypeDto.QuantityAvailable.HasValue)
            {
                // Validate new quantity is not less than tickets already sold
                if (updateTicketTypeDto.QuantityAvailable.Value < ticketType.QuantitySold)
                    throw new Exception($"New quantity ({updateTicketTypeDto.QuantityAvailable.Value}) cannot be less than tickets already sold ({ticketType.QuantitySold})");

                ticketType.QuantityAvailable = updateTicketTypeDto.QuantityAvailable.Value;
            }

            if (updateTicketTypeDto.SaleStartDate.HasValue)
                ticketType.SaleStartDate = updateTicketTypeDto.SaleStartDate;

            if (updateTicketTypeDto.SaleEndDate.HasValue)
                ticketType.SaleEndDate = updateTicketTypeDto.SaleEndDate;

            if (updateTicketTypeDto.MinQuantityPerOrder.HasValue)
                ticketType.MinQuantityPerOrder = updateTicketTypeDto.MinQuantityPerOrder.Value;

            if (updateTicketTypeDto.MaxQuantityPerOrder.HasValue)
                ticketType.MaxQuantityPerOrder = updateTicketTypeDto.MaxQuantityPerOrder.Value;

            if (updateTicketTypeDto.SortOrder.HasValue)
                ticketType.SortOrder = updateTicketTypeDto.SortOrder.Value;

            if (updateTicketTypeDto.IsActive.HasValue)
                ticketType.IsActive = updateTicketTypeDto.IsActive.Value;

            ticketType.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();
            return await GetTicketTypeByIdAsync(ticketTypeId);
        }

        public async Task<bool> DeleteTicketTypeAsync(int ticketTypeId, int organizerId)
        {
            var ticketType = await _context.TicketTypes
                .Include(tt => tt.Event)
                .FirstOrDefaultAsync(tt => tt.TicketTypeId == ticketTypeId);

            if (ticketType == null)
                return false;

            if (ticketType.Event.OrganizerId != organizerId)
                throw new Exception("You can only delete ticket types for your own events");

            // Check if any tickets have been sold
            if (ticketType.QuantitySold > 0)
            {
                // Don't delete, just deactivate
                ticketType.IsActive = false;
            }
            else
            {
                _context.TicketTypes.Remove(ticketType);
            }

            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<List<OrderResponseDto>> GetEventOrdersAsync(int eventId, int organizerId)
        {
            // Verify organizer owns the event
            var eventEntity = await _context.Events.FindAsync(eventId);
            if (eventEntity == null)
                throw new Exception("Event not found");

            if (eventEntity.OrganizerId != organizerId)
                throw new Exception("You can only view orders for your own events");

            var orders = await _context.Orders
                .Include(o => o.Tickets)
                    .ThenInclude(t => t.Event)
                .Include(o => o.Tickets)
                    .ThenInclude(t => t.TicketType)
                .Where(o => o.Tickets.Any(t => t.EventId == eventId))
                .OrderByDescending(o => o.CreatedAt)
                .ToListAsync();

            return orders.Select(MapToOrderResponseDto).ToList();
        }

        public async Task<List<TicketResponseDto>> GetEventTicketsAsync(int eventId, int organizerId)
        {
            // Verify organizer owns the event
            var eventEntity = await _context.Events.FindAsync(eventId);
            if (eventEntity == null)
                throw new Exception("Event not found");

            if (eventEntity.OrganizerId != organizerId)
                throw new Exception("You can only view tickets for your own events");

            var tickets = await _context.Tickets
                .Include(t => t.Event)
                    .ThenInclude(e => e.Venue)
                .Include(t => t.TicketType)
                .Where(t => t.EventId == eventId)
                .OrderByDescending(t => t.PurchaseDate)
                .ToListAsync();

            return tickets.Select(MapToTicketResponseDto).ToList();
        }

        public async Task<List<TicketResponseDto>> GetCheckedInTicketsAsync(int eventId, int organizerId)
        {
            // Verify organizer owns the event
            var eventEntity = await _context.Events.FindAsync(eventId);
            if (eventEntity == null)
                throw new Exception("Event not found");

            if (eventEntity.OrganizerId != organizerId)
                throw new Exception("You can only view tickets for your own events");

            var tickets = await _context.Tickets
                .Include(t => t.Event)
                    .ThenInclude(e => e.Venue)
                .Include(t => t.TicketType)
                .Where(t => t.EventId == eventId && t.Status == TicketStatus.Used)
                .OrderByDescending(t => t.CheckInDate)
                .ToListAsync();

            return tickets.Select(MapToTicketResponseDto).ToList();
        }

        public async Task<object> GetTicketSalesAnalyticsAsync(int eventId, int organizerId)
        {
            // Verify organizer owns the event
            var eventEntity = await _context.Events.FindAsync(eventId);
            if (eventEntity == null)
                throw new Exception("Event not found");

            if (eventEntity.OrganizerId != organizerId)
                throw new Exception("You can only view analytics for your own events");

            var ticketTypes = await _context.TicketTypes
                .Where(tt => tt.EventId == eventId)
                .ToListAsync();

            var orders = await _context.Orders
                .Include(o => o.Tickets)
                .Where(o => o.Tickets.Any(t => t.EventId == eventId))
                .ToListAsync();

            var tickets = await _context.Tickets
                .Where(t => t.EventId == eventId)
                .ToListAsync();

            return new
            {
                EventId = eventId,
                EventTitle = eventEntity.Title,
                TotalTicketTypes = ticketTypes.Count,
                TotalTicketsAvailable = ticketTypes.Sum(tt => tt.QuantityAvailable),
                TotalTicketsSold = ticketTypes.Sum(tt => tt.QuantitySold),
                TotalRevenue = orders.Sum(o => o.TotalAmount),
                TotalOrders = orders.Count,
                CheckedInTickets = tickets.Count(t => t.Status == TicketStatus.Used),
                TicketTypeBreakdown = ticketTypes.Select(tt => new
                {
                    TicketTypeName = tt.Name,
                    Price = tt.Price,
                    Available = tt.QuantityAvailable,
                    Sold = tt.QuantitySold,
                    Revenue = tt.QuantitySold * tt.Price
                }),
                SalesByDay = orders.GroupBy(o => o.CreatedAt.Date)
                    .Select(g => new
                    {
                        Date = g.Key,
                        Orders = g.Count(),
                        Revenue = g.Sum(o => o.TotalAmount),
                        TicketsSold = g.Sum(o => o.Tickets.Count())
                    })
                    .OrderBy(x => x.Date)
            };
        }
    }
}