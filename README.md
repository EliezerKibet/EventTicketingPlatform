# 🎫 Event Ticketing Platform

![Event Ticketing Platform Tests](https://github.com/EliezerKibet/EventTicketingPlatform/workflows/Event%20Ticketing%20Platform%20Tests/badge.svg)
![.NET](https://img.shields.io/badge/.NET-9.0-blue)
![Tests](https://img.shields.io/badge/tests-24%20passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-comprehensive-green)
![Quality](https://img.shields.io/badge/code%20quality-enterprise-blue)

A professional event ticketing system built with .NET 9 and React, featuring **comprehensive test coverage** and enterprise-grade reliability.

## ✅ Quality Assured

**24/24 tests passing** ✨ - Our comprehensive testing ensures reliability across:

- **Event Management** - Creation, validation, and publishing workflows
- **Authentication & Security** - JWT tokens, password validation, role-based access
- **Ticket Processing** - Booking logic, capacity management, pricing calculations  
- **Payment Systems** - Transaction processing, refund policies, promo codes
- **Analytics & Reporting** - Revenue tracking, demographic analysis, capacity metrics
- **API Reliability** - All controller endpoints thoroughly tested

## 🧪 Testing Excellence

```bash
cd EventTicketing.Tests
dotnet test --verbosity normal

# ✅ Test Results:
# Total: 24, Failed: 0, Succeeded: 24
# Duration: 3.4s
```

Our testing strategy covers:
- **Unit Tests** - Business logic validation
- **Integration Tests** - API endpoint functionality  
- **Controller Tests** - Request/response handling
- **Security Tests** - Authentication and authorization
- **Edge Case Testing** - Capacity limits, invalid inputs, error scenarios

## 🚀 Features

- **Real-time Ticket Booking** - Instant reservation with capacity management
- **QR Code Generation** - Secure digital tickets with validation
- **Payment Processing** - Multiple payment methods with refund support
- **Event Management** - Complete event lifecycle from creation to analytics
- **User Authentication** - Role-based access (Admin, Organizer, Customer)
- **Analytics Dashboard** - Revenue tracking and attendee insights
- **Promo Code System** - Flexible discount and marketing campaigns
- **Mobile Responsive** - Optimized for all devices

## 🛠️ Tech Stack

- **Backend**: .NET 9 Web API
- **Frontend**: React with TypeScript
- **Database**: SQL Server with Entity Framework Core
- **Authentication**: JWT with role-based authorization
- **Testing**: xUnit with FluentAssertions
- **CI/CD**: GitHub Actions with automated testing
- **Documentation**: Swagger/OpenAPI
- **Image Storage**: Local file system with validation

## 🔧 Getting Started

### Prerequisites
- .NET 9 SDK
- SQL Server or SQL Server Express
- Node.js (for frontend)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/EliezerKibet/EventTicketingPlatform.git
   cd EventTicketingPlatform
   ```

2. **Set up the database**
   ```bash
   cd EventTicketing.API
   dotnet ef database update
   ```

3. **Run the API**
   ```bash
   dotnet run
   ```

4. **Run the frontend**
   ```bash
   cd ../EventTicketingfrontend
   npm install
   npm start
   ```

## 🧪 Running Tests

Execute the comprehensive test suite:

```bash
cd EventTicketing.Tests
dotnet test --verbosity detailed

# For coverage report:
dotnet test --collect:"XPlat Code Coverage"
```

## 📊 API Documentation

When running locally, visit:
- **Swagger UI**: `https://localhost:5001/swagger`
- **API Endpoints**: Full REST API with authentication

## 🔐 Security Features

- **JWT Authentication** with configurable expiration
- **Role-based Authorization** (Admin, Organizer, Customer)
- **Password Strength Validation** with security requirements
- **Input Sanitization** preventing injection attacks
- **Secure File Upload** with type and size validation

## 📈 Analytics & Reporting

- **Revenue Analytics** - Track earnings by event, time period, payment method
- **Capacity Management** - Monitor ticket sales and availability
- **Demographic Insights** - Understand your audience
- **Performance Metrics** - Event success indicators
- **Seasonal Trends** - Historical data analysis

## 🎯 Production Ready

This platform demonstrates enterprise-level practices:
- ✅ **Comprehensive Testing** (24 test scenarios)
- ✅ **Clean Architecture** with separation of concerns
- ✅ **Error Handling** with graceful degradation
- ✅ **Performance Optimization** with efficient queries
- ✅ **Security Best Practices** throughout the application
- ✅ **Scalable Design** ready for high-traffic events

## 📞 Support

For questions or support, please open an issue or contact the development team.

---

**Built with ❤️ by EliezerKibet** | **24 Tests Passing** ✨ | **Enterprise Quality** 🚀
