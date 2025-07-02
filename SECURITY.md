# Security Policy

## 🔒 Supported Versions

We actively support the following versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | ✅ Fully supported |
| < 1.0   | ❌ Not supported   |

## 🚨 Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue, please follow these steps:

### **Private Disclosure Process**

1. **DO NOT** create a public GitHub issue
2. **Email us directly** at: elieserkibet@gmail.com
3. **Include the following information:**
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact assessment
   - Suggested fix (if known)

### **Response Timeline**

- **Initial Response**: Within 24 hours
- **Assessment**: Within 72 hours
- **Fix Development**: 1-7 days (depending on severity)
- **Security Advisory**: Published after fix deployment

## 🛡️ Security Measures

### **Authentication & Authorization**
- JWT tokens with configurable expiration
- Role-based access control (RBAC)
- Password strength validation
- Account lockout protection
- Secure session management

### **Data Protection**
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CSRF protection
- Secure file upload validation

### **Infrastructure Security**
- HTTPS enforcement
- Secure headers configuration
- Content Security Policy (CSP)
- Rate limiting implementation
- Audit logging

### **Dependencies**
- Regular dependency updates
- Automated security scanning
- Vulnerability monitoring
- License compliance checking

## 🔍 Security Testing

Our security testing includes:
- **OWASP Top 10** vulnerability scanning
- **Dependency vulnerability** checks
- **Authentication/authorization** testing
- **Input validation** testing
- **Session management** testing

## 📋 Security Checklist for Contributors

Before submitting code:
- [ ] Validate all user inputs
- [ ] Use parameterized queries
- [ ] Implement proper authentication
- [ ] Follow the principle of least privilege
- [ ] Avoid hardcoded secrets
- [ ] Test for common vulnerabilities

## 🚫 What NOT to Include

Never commit:
- Passwords or API keys
- Connection strings with credentials
- Private keys or certificates
- Personal data or PII
- Test data with real information

## 📞 Contact Information

- **Security Team**: elieserkibet@gmail.com
- **General Contact**: elieserkibet@gmail.com
- **Emergency**: For critical vulnerabilities requiring immediate attention

## 🏆 Security Hall of Fame

We recognize security researchers who help us improve EventHub's security:

*No security issues reported yet - be the first!*

---

**Your security research helps protect EventHub users worldwide. Thank you!** 🙏