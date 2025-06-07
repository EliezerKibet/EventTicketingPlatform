using System.Text;

namespace EventTicketing.API.Services
{
    public interface IQrCodeService
    {
        string GenerateQrCodeData(string ticketNumber, int eventId, string eventTitle);
        string GenerateTicketNumber();
    }

    public class QrCodeService : IQrCodeService
    {
        public string GenerateQrCodeData(string ticketNumber, int eventId, string eventTitle)
        {
            // Generate QR code data that contains ticket validation info
            var qrData = new
            {
                TicketNumber = ticketNumber,
                EventId = eventId,
                EventTitle = eventTitle,
                Timestamp = DateTime.UtcNow.ToString("yyyy-MM-ddTHH:mm:ssZ")
            };

            // Convert to JSON string for QR code
            return System.Text.Json.JsonSerializer.Serialize(qrData);
        }

        public string GenerateTicketNumber()
        {
            // Generate unique ticket number: TKT-YYYYMMDD-XXXXXX
            var prefix = "TKT";
            var date = DateTime.UtcNow.ToString("yyyyMMdd");
            var random = new Random().Next(100000, 999999);

            return $"{prefix}-{date}-{random}";
        }
    }
}