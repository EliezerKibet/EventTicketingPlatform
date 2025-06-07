using EventTicketing.API.Models.DTOs;

namespace EventTicketing.API.Services
{
    public interface IAuthService
    {
        Task<AuthResponseDto> RegisterAsync(RegisterDto registerDto);
        Task<AuthResponseDto> LoginAsync(LoginDto loginDto);
        string GenerateJwtToken(int userId, string email, List<string> roles);
    }
}