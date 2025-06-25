using System.ComponentModel.DataAnnotations;

namespace EventTicketing.API.Models.DTOs
{
	public class RegisterDto
	{
		[Required]
		[EmailAddress]
		public string Email { get; set; }

		[Required]
		[MinLength(6)]
		public string Password { get; set; }

		[Required]
		public string FirstName { get; set; }

		[Required]
		public string LastName { get; set; }

		public string? PhoneNumber { get; set; }
		public string? UserType { get; set; }
    }

	public class LoginDto
	{
		[Required]
		[EmailAddress]
		public string Email { get; set; }

		[Required]
		public string Password { get; set; }
	}

	public class AuthResponseDto
	{
		public string Token { get; set; }
		public string Email { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public List<string> Roles { get; set; }
		public DateTime ExpiresAt { get; set; }
	}
}