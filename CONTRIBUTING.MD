# Contributing to EventHub Platform

Thank you for your interest in contributing to EventHub! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- .NET 9 SDK
- Node.js 18+
- SQL Server (Express or full)
- Git
- Visual Studio 2022 or VS Code

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/EliezerKibet/EventTicketingPlatform.git
   cd EventTicketingPlatform
   ```

2. **Set up Database**
   ```bash
   cd EventTicketing.API
   dotnet ef database update
   ```

3. **Install Dependencies**
   ```bash
   # Backend dependencies
   dotnet restore

   # Frontend dependencies
   cd ../EventTicketingfrontend/event-ticketing-frontend-nextjs
   npm install
   ```

4. **Run Tests**
   ```bash
   cd ../../EventTicketing.Tests
   dotnet test
   ```

## 🧪 Testing Requirements

### All contributions must include tests:
- **Unit Tests** for business logic
- **Integration Tests** for API endpoints
- **Component Tests** for React components
- **End-to-End Tests** for critical workflows

### Testing Commands
```bash
# Run all tests
dotnet test --verbosity normal

# Run with coverage
dotnet test --collect:"XPlat Code Coverage"

# Run specific test category
dotnet test --filter "Category=Unit"
```

## 📝 Code Standards

### Backend (.NET)
- Follow C# coding conventions
- Use meaningful variable and method names
- Include XML documentation for public APIs
- Implement proper error handling
- Use dependency injection patterns

### Frontend (React/TypeScript)
- Use TypeScript for all new code
- Follow React functional component patterns
- Implement proper error boundaries
- Use consistent naming conventions
- Write accessible components

### Database
- Use Entity Framework migrations
- Include proper indexing for performance
- Follow naming conventions for tables/columns
- Include data validation

## 🔄 Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write your code
   - Add/update tests
   - Update documentation if needed

3. **Test Everything**
   ```bash
   dotnet test
   npm test
   ```

4. **Commit with Clear Messages**
   ```bash
   git commit -m "feat: add ticket validation system"
   git commit -m "fix: resolve capacity calculation bug"
   git commit -m "docs: update API documentation"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## 🐛 Bug Reports

When reporting bugs, please include:
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Environment details** (OS, .NET version, browser)
- **Screenshots** if applicable

## ✨ Feature Requests

For new features, please:
- **Check existing issues** to avoid duplicates
- **Describe the problem** the feature would solve
- **Provide detailed specifications**
- **Include mockups/wireframes** if UI-related

## 📋 Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to docs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `question` - Further information requested

## 🏆 Recognition

Contributors will be:
- Added to the contributors list
- Mentioned in release notes
- Invited to join the maintainers team (for significant contributions)

## 📞 Getting Help

- **GitHub Issues** - For bugs and feature requests
- **Discussions** - For questions and general discussion
- **Email** - eliezer.kibet@example.com for private matters

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for making EventHub better! 🎫✨