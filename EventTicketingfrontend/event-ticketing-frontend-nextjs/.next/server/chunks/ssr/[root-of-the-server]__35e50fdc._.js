module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[next]/internal/font/google/inter_59dee874.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "inter_59dee874-module__9CtR0q__className",
});
}}),
"[next]/internal/font/google/inter_59dee874.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_59dee874.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/hooks/useAuth.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = ({ children })=>{
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = localStorage.getItem('authToken');
        const userData = localStorage.getItem('user');
        if (token && userData) {
            try {
                setUser(JSON.parse(userData));
            } catch (error) {
                console.error('Error parsing user data:', error);
                localStorage.removeItem('authToken');
                localStorage.removeItem('user');
            }
        }
        setIsLoading(false);
    }, []);
    const login = async (credentials)=>{
        try {
            // Call your existing API
            const response = await fetch('http://localhost:5251/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
            const authData = await response.json();
            const userData = {
                email: authData.email,
                firstName: authData.firstName,
                lastName: authData.lastName,
                roles: authData.roles
            };
            localStorage.setItem('authToken', authData.token);
            localStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
            // Role-based redirect - this is the key addition!
            if (userData.roles.includes('Admin')) {
                router.push('/admin/dashboard');
            } else if (userData.roles.includes('Organizer')) {
                router.push('/organizer/dashboard');
            } else {
                router.push('/events'); // Your existing customer redirect
            }
        } catch (error) {
            console.error('Login error:', error);
            throw new Error('Login failed');
        }
    };
    const register = async (userData)=>{
        try {
            const response = await fetch('http://localhost:5251/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            if (!response.ok) {
                throw new Error('Registration failed');
            }
            const authData = await response.json();
            const user = {
                email: authData.email,
                firstName: authData.firstName,
                lastName: authData.lastName,
                roles: authData.roles
            };
            localStorage.setItem('authToken', authData.token);
            localStorage.setItem('user', JSON.stringify(user));
            setUser(user);
            // Role-based redirect after registration
            if (user.roles.includes('Admin')) {
                router.push('/admin/dashboard');
            } else if (user.roles.includes('Organizer')) {
                router.push('/organizer/dashboard');
            } else {
                router.push('/events'); // Your existing customer redirect
            }
        } catch (error) {
            console.error('Registration error:', error);
            throw new Error('Registration failed');
        }
    };
    const logout = ()=>{
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setUser(null);
        router.push('/');
    };
    const isAuthenticated = !!user;
    const isOrganizer = user?.roles.includes('Organizer') ?? false;
    const isAdmin = user?.roles.includes('Admin') ?? false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            login,
            register,
            logout,
            isLoading,
            isAuthenticated,
            isOrganizer,
            isAdmin
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/useAuth.tsx",
        lineNumber: 167,
        columnNumber: 9
    }, this);
};
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
}}),
"[project]/src/components/providers/I18nProvider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/no-unused-vars */ // components/providers/I18nProvider.tsx
__turbopack_context__.s({
    "I18nProvider": (()=>I18nProvider),
    "SUPPORTED_LANGUAGES": (()=>SUPPORTED_LANGUAGES),
    "default": (()=>__TURBOPACK__default__export__),
    "extendedTranslations": (()=>extendedTranslations),
    "settingsTranslationsDe": (()=>settingsTranslationsDe),
    "settingsTranslationsEn": (()=>settingsTranslationsEn),
    "settingsTranslationsEs": (()=>settingsTranslationsEs),
    "settingsTranslationsFr": (()=>settingsTranslationsFr),
    "settingsTranslationsIt": (()=>settingsTranslationsIt),
    "useI18n": (()=>useI18n),
    "useI18nContext": (()=>useI18nContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const SUPPORTED_LANGUAGES = [
    {
        code: 'en',
        name: 'English',
        nativeName: 'English',
        flag: '🇺🇸',
        direction: 'ltr',
        region: 'US',
        dateFormat: 'MM/dd/yyyy',
        timeFormat: '12h',
        currency: 'USD'
    },
    {
        code: 'es',
        name: 'Spanish',
        nativeName: 'Español',
        flag: '🇪🇸',
        direction: 'ltr',
        region: 'ES',
        dateFormat: 'dd/MM/yyyy',
        timeFormat: '24h',
        currency: 'EUR'
    },
    {
        code: 'fr',
        name: 'French',
        nativeName: 'Français',
        flag: '🇫🇷',
        direction: 'ltr',
        region: 'FR',
        dateFormat: 'dd/MM/yyyy',
        timeFormat: '24h',
        currency: 'EUR'
    },
    {
        code: 'de',
        name: 'German',
        nativeName: 'Deutsch',
        flag: '🇩🇪',
        direction: 'ltr',
        region: 'DE',
        dateFormat: 'dd.MM.yyyy',
        timeFormat: '24h',
        currency: 'EUR'
    },
    {
        code: 'it',
        name: 'Italian',
        nativeName: 'Italiano',
        flag: '🇮🇹',
        direction: 'ltr',
        region: 'IT',
        dateFormat: 'dd/MM/yyyy',
        timeFormat: '24h',
        currency: 'EUR'
    }
];
const settingsTranslationsEn = {
    // Organization Settings
    organizationInformation: 'Organization Information',
    businessLicense: 'Business License',
    // Notification Settings
    emailNotifications: 'Email Notifications',
    smsNotifications: 'SMS Notifications',
    newBookings: 'New Bookings',
    getNotifiedNewBooking: 'Get notified when someone books your event',
    cancellations: 'Cancellations',
    getNotifiedCancellations: 'Get notified when bookings are cancelled',
    lowInventoryNotifications: 'Low Inventory Notifications',
    dailyReports: 'Daily Reports',
    receiveDailySummary: 'Receive daily summary of bookings and revenue',
    weeklyReports: 'Weekly Reports',
    receiveWeeklyAnalytics: 'Receive weekly analytics and insights',
    monthlyReports: 'Monthly Reports',
    // Security Settings
    securitySettings: 'Security Settings',
    twoFactorAuthentication: 'Two-Factor Authentication',
    addExtraLayerSecurity: 'Add an extra layer of security to your account',
    loginNotifications: 'Login Notifications',
    getNotifiedNewLogins: 'Get notified of new login attempts',
    sessionTimeout: 'Session Timeout',
    sessionTimeoutMinutes: 'Session Timeout (minutes)',
    // Password Settings
    changePassword: 'Change Password',
    currentPassword: 'Current Password',
    newPassword: 'New Password',
    confirmNewPassword: 'Confirm New Password',
    minimumCharacters: 'Minimum 6 characters',
    passwordsDoNotMatch: 'New passwords do not match',
    passwordTooShort: 'New password must be at least 6 characters long',
    changingPassword: 'Changing Password...',
    passwordChanged: 'Password Changed Successfully',
    // Event Default Settings
    eventDefaults: 'Event Defaults',
    defaultEventDuration: 'Default Event Duration',
    defaultEventDurationMinutes: 'Default Event Duration (minutes)',
    ticketSaleStart: 'Ticket Sale Start',
    ticketSaleStartDays: 'Ticket Sale Start (days before event)',
    defaultRefundPolicy: 'Default Refund Policy',
    requireApproval: 'Require Approval',
    requireApprovalBeforeLive: 'Require approval before events go live',
    autoPublish: 'Auto Publish',
    autoPublishWhenCreated: 'Automatically publish events when created',
    // Language & Region Settings
    languageRegion: 'Language & Region',
    languagePreferences: 'Language preferences and regional formats',
    regionalFormats: 'Regional formats',
    interfaceLanguage: 'Interface Language',
    timeDateFormats: 'Time & Date Formats',
    currencySettings: 'Currency Settings',
    livePreview: 'Live Preview',
    // Time Format Settings
    hour12Format: '12-hour format',
    hour24Format: '24-hour format',
    // Date Format Settings
    dateFormatExample: 'Example: {example}',
    // Display Settings
    displaySettings: 'Display Settings',
    fontSizeSmall: 'Small',
    fontSizeMedium: 'Medium',
    fontSizeLarge: 'Large',
    reduceSpacing: 'Reduce spacing between elements',
    // Theme Settings
    themeSettings: 'Theme Settings',
    choosePreferredTheme: 'Choose your preferred interface theme',
    cleanBrightInterface: 'Clean and bright interface',
    easyOnEyes: 'Easy on the eyes',
    followsSystemPreference: 'Follows system preference',
    accentColorSettings: 'Accent Color',
    chooseAccentColor: 'Choose your preferred accent color',
    // Success Messages
    settingsSavedSuccessfully: 'Settings saved successfully!',
    profileUpdatedSuccessfully: 'Profile updated successfully!',
    organizationUpdatedSuccessfully: 'Organization updated successfully!',
    preferencesUpdatedSuccessfully: 'Preferences updated successfully!',
    // Error Messages
    failedToUpdateProfile: 'Failed to update profile',
    failedToUpdateOrganization: 'Failed to update organization',
    failedToUpdatePreferences: 'Failed to update preferences',
    failedToChangePassword: 'Failed to change password',
    // Loading States
    loadingProfile: 'Loading profile...',
    savingChanges: 'Saving changes...',
    // Authentication
    authenticationRequired: 'Authentication Required',
    pleaseLoginToAccess: 'Please log in to access your settings.',
    goToLogin: 'Go to Login',
    // General Settings
    manageAccount: 'Manage your account and event preferences',
    eventPreferences: 'Event preferences',
    saved: 'Saved!',
    saveChanges: 'Save Changes',
    // Verification Status
    emailNotVerified: 'Email address not verified',
    phoneNotVerified: 'Phone number not verified',
    verified: 'Verified',
    // Color Names
    blue: 'Blue',
    purple: 'Purple',
    green: 'Green',
    red: 'Red',
    orange: 'Orange',
    pink: 'Pink',
    // Size Names
    small: 'Small',
    medium: 'Medium',
    large: 'Large',
    eventImages: 'Event Images',
    bannerImage: 'Banner Image',
    bannerImageDescription: 'Large banner image displayed at the top of your event page',
    eventImage: 'Event Image',
    eventImageDescription: 'Main image shown in event listings and cards',
    noBannerImage: 'No banner image uploaded',
    noEventImage: 'No event image uploaded',
    changeBanner: 'Change Banner',
    uploadBanner: 'Upload Banner',
    changeImage: 'Change Image',
    uploadImage: 'Upload Image',
    uploadingImages: 'Uploading images...',
    imageGuidelines: 'Image Guidelines',
    supportedFormats: 'Supported formats',
    maxFileSize: 'Maximum file size',
    bannerRecommended: 'Banner recommended size',
    imageRecommended: 'Image recommended size',
    invalidImageFile: 'Invalid image file',
    imageUploadFailed: 'Image upload failed',
    imageUploadSuccess: 'Image uploaded successfully',
    selectImageFile: 'Select image file',
    imageProcessing: 'Processing image...',
    imagePreview: 'Image preview',
    removeImage: 'Remove image',
    cropImage: 'Crop image',
    rotateImage: 'Rotate image',
    imageQuality: 'Image quality',
    compressImage: 'Compress image',
    dropImageHere: 'Drop image here or click to upload'
};
// Spanish translations for settings
const settingsTranslationsEs = {
    // Organization Settings
    organizationInformation: 'Información de la Organización',
    businessLicense: 'Licencia Comercial',
    // Notification Settings
    emailNotifications: 'Notificaciones por Email',
    smsNotifications: 'Notificaciones SMS',
    newBookings: 'Nuevas Reservas',
    getNotifiedNewBooking: 'Recibe notificaciones cuando alguien reserve tu evento',
    cancellations: 'Cancelaciones',
    getNotifiedCancellations: 'Recibe notificaciones cuando se cancelen reservas',
    lowInventoryNotifications: 'Notificaciones de Inventario Bajo',
    dailyReports: 'Reportes Diarios',
    receiveDailySummary: 'Recibe resumen diario de reservas e ingresos',
    weeklyReports: 'Reportes Semanales',
    receiveWeeklyAnalytics: 'Recibe análisis e insights semanales',
    monthlyReports: 'Reportes Mensuales',
    // Security Settings
    securitySettings: 'Configuración de Seguridad',
    twoFactorAuthentication: 'Autenticación de Dos Factores',
    addExtraLayerSecurity: 'Agrega una capa adicional de seguridad a tu cuenta',
    loginNotifications: 'Notificaciones de Inicio de Sesión',
    getNotifiedNewLogins: 'Recibe notificaciones de nuevos intentos de inicio de sesión',
    sessionTimeout: 'Tiempo de Espera de Sesión',
    sessionTimeoutMinutes: 'Tiempo de Espera de Sesión (minutos)',
    // Password Settings
    changePassword: 'Cambiar Contraseña',
    currentPassword: 'Contraseña Actual',
    newPassword: 'Nueva Contraseña',
    confirmNewPassword: 'Confirmar Nueva Contraseña',
    minimumCharacters: 'Mínimo 6 caracteres',
    passwordsDoNotMatch: 'Las nuevas contraseñas no coinciden',
    passwordTooShort: 'La nueva contraseña debe tener al menos 6 caracteres',
    changingPassword: 'Cambiando Contraseña...',
    passwordChanged: 'Contraseña Cambiada Exitosamente',
    // Event Default Settings
    eventDefaults: 'Valores Predeterminados de Eventos',
    defaultEventDuration: 'Duración Predeterminada del Evento',
    defaultEventDurationMinutes: 'Duración Predeterminada del Evento (minutos)',
    ticketSaleStart: 'Inicio de Venta de Boletos',
    ticketSaleStartDays: 'Inicio de Venta de Boletos (días antes del evento)',
    defaultRefundPolicy: 'Política de Reembolso Predeterminada',
    requireApproval: 'Requerir Aprobación',
    requireApprovalBeforeLive: 'Requerir aprobación antes de que los eventos salgan en vivo',
    autoPublish: 'Publicación Automática',
    autoPublishWhenCreated: 'Publicar automáticamente los eventos cuando se crean',
    // Language & Region Settings
    languageRegion: 'Idioma y Región',
    languagePreferences: 'Preferencias de idioma y formatos regionales',
    regionalFormats: 'Formatos regionales',
    interfaceLanguage: 'Idioma de la Interfaz',
    timeDateFormats: 'Formatos de Hora y Fecha',
    currencySettings: 'Configuración de Moneda',
    livePreview: 'Vista Previa en Vivo',
    // Time Format Settings
    hour12Format: 'Formato de 12 horas',
    hour24Format: 'Formato de 24 horas',
    // Date Format Settings
    dateFormatExample: 'Ejemplo: {example}',
    // Display Settings
    displaySettings: 'Configuración de Pantalla',
    fontSizeSmall: 'Pequeño',
    fontSizeMedium: 'Mediano',
    fontSizeLarge: 'Grande',
    reduceSpacing: 'Reducir espaciado entre elementos',
    // Theme Settings
    themeSettings: 'Configuración del Tema',
    choosePreferredTheme: 'Elige tu tema de interfaz preferido',
    cleanBrightInterface: 'Interfaz limpia y brillante',
    easyOnEyes: 'Suave para los ojos',
    followsSystemPreference: 'Sigue la preferencia del sistema',
    accentColorSettings: 'Color de Acento',
    chooseAccentColor: 'Elige tu color de acento preferido',
    // Success Messages
    settingsSavedSuccessfully: '¡Configuración guardada exitosamente!',
    profileUpdatedSuccessfully: '¡Perfil actualizado exitosamente!',
    organizationUpdatedSuccessfully: '¡Organización actualizada exitosamente!',
    preferencesUpdatedSuccessfully: '¡Preferencias actualizadas exitosamente!',
    // Error Messages
    failedToUpdateProfile: 'Error al actualizar perfil',
    failedToUpdateOrganization: 'Error al actualizar organización',
    failedToUpdatePreferences: 'Error al actualizar preferencias',
    failedToChangePassword: 'Error al cambiar contraseña',
    // Loading States
    loadingProfile: 'Cargando perfil...',
    savingChanges: 'Guardando cambios...',
    // Authentication
    authenticationRequired: 'Autenticación Requerida',
    pleaseLoginToAccess: 'Por favor inicia sesión para acceder a tu configuración.',
    goToLogin: 'Ir al Login',
    // General Settings
    manageAccount: 'Gestiona tu cuenta y preferencias de eventos',
    eventPreferences: 'Preferencias de eventos',
    saved: '¡Guardado!',
    saveChanges: 'Guardar Cambios',
    // Verification Status
    emailNotVerified: 'Dirección de email no verificada',
    phoneNotVerified: 'Número de teléfono no verificado',
    verified: 'Verificado',
    // Color Names
    blue: 'Azul',
    purple: 'Morado',
    green: 'Verde',
    red: 'Rojo',
    orange: 'Naranja',
    pink: 'Rosa',
    // Size Names
    small: 'Pequeño',
    medium: 'Mediano',
    large: 'Grande',
    // Image Management
    eventImages: 'Imágenes del Evento',
    bannerImage: 'Imagen de Banner',
    bannerImageDescription: 'Imagen de banner grande mostrada en la parte superior de tu página de evento',
    eventImage: 'Imagen del Evento',
    eventImageDescription: 'Imagen principal mostrada en listados y tarjetas de eventos',
    noBannerImage: 'No se ha subido imagen de banner',
    noEventImage: 'No se ha subido imagen del evento',
    changeBanner: 'Cambiar Banner',
    uploadBanner: 'Subir Banner',
    changeImage: 'Cambiar Imagen',
    uploadImage: 'Subir Imagen',
    uploadingImages: 'Subiendo imágenes...',
    imageGuidelines: 'Directrices de Imagen',
    supportedFormats: 'Formatos soportados',
    maxFileSize: 'Tamaño máximo de archivo',
    bannerRecommended: 'Tamaño recomendado del banner',
    imageRecommended: 'Tamaño recomendado de imagen',
    invalidImageFile: 'Archivo de imagen inválido',
    imageUploadFailed: 'Error al subir imagen',
    imageUploadSuccess: 'Imagen subida exitosamente',
    selectImageFile: 'Seleccionar archivo de imagen',
    imageProcessing: 'Procesando imagen...',
    imagePreview: 'Vista previa de imagen',
    removeImage: 'Eliminar imagen',
    cropImage: 'Recortar imagen',
    rotateImage: 'Rotar imagen',
    imageQuality: 'Calidad de imagen',
    compressImage: 'Comprimir imagen',
    dropImageHere: 'Suelta la imagen aquí o haz clic para subir'
};
// French translations for settings
const settingsTranslationsFr = {
    // Organization Settings
    organizationInformation: 'Informations de l\'Organisation',
    businessLicense: 'Licence Commerciale',
    // Notification Settings
    emailNotifications: 'Notifications Email',
    smsNotifications: 'Notifications SMS',
    newBookings: 'Nouvelles Réservations',
    getNotifiedNewBooking: 'Soyez notifié quand quelqu\'un réserve votre événement',
    cancellations: 'Annulations',
    getNotifiedCancellations: 'Soyez notifié quand des réservations sont annulées',
    lowInventoryNotifications: 'Notifications de Stock Faible',
    dailyReports: 'Rapports Quotidiens',
    receiveDailySummary: 'Recevez un résumé quotidien des réservations et revenus',
    weeklyReports: 'Rapports Hebdomadaires',
    receiveWeeklyAnalytics: 'Recevez des analyses et insights hebdomadaires',
    monthlyReports: 'Rapports Mensuels',
    // Security Settings
    securitySettings: 'Paramètres de Sécurité',
    twoFactorAuthentication: 'Authentification à Deux Facteurs',
    addExtraLayerSecurity: 'Ajoutez une couche de sécurité supplémentaire à votre compte',
    loginNotifications: 'Notifications de Connexion',
    getNotifiedNewLogins: 'Soyez notifié des nouvelles tentatives de connexion',
    sessionTimeout: 'Délai d\'Expiration de Session',
    sessionTimeoutMinutes: 'Délai d\'Expiration de Session (minutes)',
    // Password Settings
    changePassword: 'Changer le Mot de Passe',
    currentPassword: 'Mot de Passe Actuel',
    newPassword: 'Nouveau Mot de Passe',
    confirmNewPassword: 'Confirmer le Nouveau Mot de Passe',
    minimumCharacters: 'Minimum 6 caractères',
    passwordsDoNotMatch: 'Les nouveaux mots de passe ne correspondent pas',
    passwordTooShort: 'Le nouveau mot de passe doit contenir au moins 6 caractères',
    changingPassword: 'Changement du Mot de Passe...',
    passwordChanged: 'Mot de Passe Changé avec Succès',
    // Event Default Settings
    eventDefaults: 'Paramètres par Défaut des Événements',
    defaultEventDuration: 'Durée par Défaut de l\'Événement',
    defaultEventDurationMinutes: 'Durée par Défaut de l\'Événement (minutes)',
    ticketSaleStart: 'Début des Ventes de Billets',
    ticketSaleStartDays: 'Début des Ventes de Billets (jours avant l\'événement)',
    defaultRefundPolicy: 'Politique de Remboursement par Défaut',
    requireApproval: 'Exiger une Approbation',
    requireApprovalBeforeLive: 'Exiger une approbation avant que les événements soient en direct',
    autoPublish: 'Publication Automatique',
    autoPublishWhenCreated: 'Publier automatiquement les événements lors de leur création',
    // Language & Region Settings
    languageRegion: 'Langue et Région',
    languagePreferences: 'Préférences linguistiques et formats régionaux',
    regionalFormats: 'Formats régionaux',
    interfaceLanguage: 'Langue de l\'Interface',
    timeDateFormats: 'Formats d\'Heure et de Date',
    currencySettings: 'Paramètres de Devise',
    livePreview: 'Aperçu en Direct',
    // Time Format Settings
    hour12Format: 'Format 12 heures',
    hour24Format: 'Format 24 heures',
    // Date Format Settings
    dateFormatExample: 'Exemple: {example}',
    // Display Settings
    displaySettings: 'Paramètres d\'Affichage',
    fontSizeSmall: 'Petit',
    fontSizeMedium: 'Moyen',
    fontSizeLarge: 'Grand',
    reduceSpacing: 'Réduire l\'espacement entre les éléments',
    // Theme Settings
    themeSettings: 'Paramètres du Thème',
    choosePreferredTheme: 'Choisissez votre thème d\'interface préféré',
    cleanBrightInterface: 'Interface propre et lumineuse',
    easyOnEyes: 'Reposant pour les yeux',
    followsSystemPreference: 'Suit la préférence du système',
    accentColorSettings: 'Couleur d\'Accent',
    chooseAccentColor: 'Choisissez votre couleur d\'accent préférée',
    // Success Messages
    settingsSavedSuccessfully: 'Paramètres sauvegardés avec succès !',
    profileUpdatedSuccessfully: 'Profil mis à jour avec succès !',
    organizationUpdatedSuccessfully: 'Organisation mise à jour avec succès !',
    preferencesUpdatedSuccessfully: 'Préférences mises à jour avec succès !',
    // Error Messages
    failedToUpdateProfile: 'Échec de la mise à jour du profil',
    failedToUpdateOrganization: 'Échec de la mise à jour de l\'organisation',
    failedToUpdatePreferences: 'Échec de la mise à jour des préférences',
    failedToChangePassword: 'Échec du changement de mot de passe',
    // Loading States
    loadingProfile: 'Chargement du profil...',
    savingChanges: 'Sauvegarde des modifications...',
    // Authentication
    authenticationRequired: 'Authentification Requise',
    pleaseLoginToAccess: 'Veuillez vous connecter pour accéder à vos paramètres.',
    goToLogin: 'Aller à la Connexion',
    // General Settings
    manageAccount: 'Gérez votre compte et les préférences d\'événements',
    eventPreferences: 'Préférences d\'événements',
    saved: 'Sauvegardé !',
    saveChanges: 'Sauvegarder les Modifications',
    // Verification Status
    emailNotVerified: 'Adresse email non vérifiée',
    phoneNotVerified: 'Numéro de téléphone non vérifié',
    verified: 'Vérifié',
    // Color Names
    blue: 'Bleu',
    purple: 'Violet',
    green: 'Vert',
    red: 'Rouge',
    orange: 'Orange',
    pink: 'Rose',
    // Size Names
    small: 'Petit',
    medium: 'Moyen',
    large: 'Grand',
    // Image Management
    eventImages: 'Images de l\'Événement',
    bannerImage: 'Image de Bannière',
    bannerImageDescription: 'Grande image de bannière affichée en haut de votre page d\'événement',
    eventImage: 'Image de l\'Événement',
    eventImageDescription: 'Image principale affichée dans les listes et cartes d\'événements',
    noBannerImage: 'Aucune image de bannière téléchargée',
    noEventImage: 'Aucune image d\'événement téléchargée',
    changeBanner: 'Changer la Bannière',
    uploadBanner: 'Télécharger la Bannière',
    changeImage: 'Changer l\'Image',
    uploadImage: 'Télécharger l\'Image',
    uploadingImages: 'Téléchargement des images...',
    imageGuidelines: 'Directives d\'Image',
    supportedFormats: 'Formats supportés',
    maxFileSize: 'Taille maximale du fichier',
    bannerRecommended: 'Taille recommandée de la bannière',
    imageRecommended: 'Taille recommandée de l\'image',
    invalidImageFile: 'Fichier image invalide',
    imageUploadFailed: 'Échec du téléchargement de l\'image',
    imageUploadSuccess: 'Image téléchargée avec succès',
    selectImageFile: 'Sélectionner un fichier image',
    imageProcessing: 'Traitement de l\'image...',
    imagePreview: 'Aperçu de l\'image',
    removeImage: 'Supprimer l\'image',
    cropImage: 'Recadrer l\'image',
    rotateImage: 'Faire pivoter l\'image',
    imageQuality: 'Qualité de l\'image',
    compressImage: 'Compresser l\'image',
    dropImageHere: 'Déposez l\'image ici ou cliquez pour télécharger'
};
// German translations for settings
const settingsTranslationsDe = {
    // Organization Settings
    organizationInformation: 'Organisationsinformationen',
    businessLicense: 'Gewerbeschein',
    // Notification Settings
    emailNotifications: 'E-Mail-Benachrichtigungen',
    smsNotifications: 'SMS-Benachrichtigungen',
    newBookings: 'Neue Buchungen',
    getNotifiedNewBooking: 'Benachrichtigung erhalten, wenn jemand Ihr Event bucht',
    cancellations: 'Stornierungen',
    getNotifiedCancellations: 'Benachrichtigung erhalten, wenn Buchungen storniert werden',
    lowInventoryNotifications: 'Benachrichtigungen bei niedrigem Bestand',
    dailyReports: 'Tägliche Berichte',
    receiveDailySummary: 'Tägliche Zusammenfassung von Buchungen und Einnahmen erhalten',
    weeklyReports: 'Wöchentliche Berichte',
    receiveWeeklyAnalytics: 'Wöchentliche Analysen und Einblicke erhalten',
    monthlyReports: 'Monatliche Berichte',
    // Security Settings
    securitySettings: 'Sicherheitseinstellungen',
    twoFactorAuthentication: 'Zwei-Faktor-Authentifizierung',
    addExtraLayerSecurity: 'Fügen Sie Ihrem Konto eine zusätzliche Sicherheitsebene hinzu',
    loginNotifications: 'Anmelde-Benachrichtigungen',
    getNotifiedNewLogins: 'Benachrichtigung über neue Anmeldeversuche erhalten',
    sessionTimeout: 'Sitzungs-Timeout',
    sessionTimeoutMinutes: 'Sitzungs-Timeout (Minuten)',
    // Password Settings
    changePassword: 'Passwort Ändern',
    currentPassword: 'Aktuelles Passwort',
    newPassword: 'Neues Passwort',
    confirmNewPassword: 'Neues Passwort Bestätigen',
    minimumCharacters: 'Mindestens 6 Zeichen',
    passwordsDoNotMatch: 'Die neuen Passwörter stimmen nicht überein',
    passwordTooShort: 'Das neue Passwort muss mindestens 6 Zeichen lang sein',
    changingPassword: 'Passwort wird geändert...',
    passwordChanged: 'Passwort erfolgreich geändert',
    // Event Default Settings
    eventDefaults: 'Event-Standardeinstellungen',
    defaultEventDuration: 'Standard-Event-Dauer',
    defaultEventDurationMinutes: 'Standard-Event-Dauer (Minuten)',
    ticketSaleStart: 'Ticketverkauf-Beginn',
    ticketSaleStartDays: 'Ticketverkauf-Beginn (Tage vor dem Event)',
    defaultRefundPolicy: 'Standard-Rückerstattungsrichtlinie',
    requireApproval: 'Genehmigung Erforderlich',
    requireApprovalBeforeLive: 'Genehmigung erforderlich, bevor Events live gehen',
    autoPublish: 'Auto-Veröffentlichung',
    autoPublishWhenCreated: 'Events automatisch veröffentlichen, wenn sie erstellt werden',
    // Language & Region Settings
    languageRegion: 'Sprache & Region',
    languagePreferences: 'Spracheinstellungen und regionale Formate',
    regionalFormats: 'Regionale Formate',
    interfaceLanguage: 'Interface-Sprache',
    timeDateFormats: 'Zeit- und Datumsformate',
    currencySettings: 'Währungseinstellungen',
    livePreview: 'Live-Vorschau',
    // Time Format Settings
    hour12Format: '12-Stunden-Format',
    hour24Format: '24-Stunden-Format',
    // Date Format Settings
    dateFormatExample: 'Beispiel: {example}',
    // Display Settings
    displaySettings: 'Anzeigeeinstellungen',
    fontSizeSmall: 'Klein',
    fontSizeMedium: 'Mittel',
    fontSizeLarge: 'Groß',
    reduceSpacing: 'Abstände zwischen Elementen reduzieren',
    // Theme Settings
    themeSettings: 'Theme-Einstellungen',
    choosePreferredTheme: 'Wählen Sie Ihr bevorzugtes Interface-Theme',
    cleanBrightInterface: 'Saubere und helle Benutzeroberfläche',
    easyOnEyes: 'Augenschonend',
    followsSystemPreference: 'Folgt der Systemeinstellung',
    accentColorSettings: 'Akzentfarbe',
    chooseAccentColor: 'Wählen Sie Ihre bevorzugte Akzentfarbe',
    // Success Messages
    settingsSavedSuccessfully: 'Einstellungen erfolgreich gespeichert!',
    profileUpdatedSuccessfully: 'Profil erfolgreich aktualisiert!',
    organizationUpdatedSuccessfully: 'Organisation erfolgreich aktualisiert!',
    preferencesUpdatedSuccessfully: 'Einstellungen erfolgreich aktualisiert!',
    // Error Messages
    failedToUpdateProfile: 'Fehler beim Aktualisieren des Profils',
    failedToUpdateOrganization: 'Fehler beim Aktualisieren der Organisation',
    failedToUpdatePreferences: 'Fehler beim Aktualisieren der Einstellungen',
    failedToChangePassword: 'Fehler beim Ändern des Passworts',
    // Loading States
    loadingProfile: 'Profil wird geladen...',
    savingChanges: 'Änderungen werden gespeichert...',
    // Authentication
    authenticationRequired: 'Authentifizierung Erforderlich',
    pleaseLoginToAccess: 'Bitte melden Sie sich an, um auf Ihre Einstellungen zuzugreifen.',
    goToLogin: 'Zur Anmeldung',
    // General Settings
    manageAccount: 'Verwalten Sie Ihr Konto und Event-Einstellungen',
    eventPreferences: 'Event-Einstellungen',
    saved: 'Gespeichert!',
    saveChanges: 'Änderungen Speichern',
    // Verification Status
    emailNotVerified: 'E-Mail-Adresse nicht verifiziert',
    phoneNotVerified: 'Telefonnummer nicht verifiziert',
    verified: 'Verifiziert',
    // Color Names
    blue: 'Blau',
    purple: 'Lila',
    green: 'Grün',
    red: 'Rot',
    orange: 'Orange',
    pink: 'Rosa',
    // Size Names
    small: 'Klein',
    medium: 'Mittel',
    large: 'Groß',
    // Image Management
    eventImages: 'Veranstaltungsbilder',
    bannerImage: 'Banner-Bild',
    bannerImageDescription: 'Großes Banner-Bild, das oben auf Ihrer Veranstaltungsseite angezeigt wird',
    eventImage: 'Veranstaltungsbild',
    eventImageDescription: 'Hauptbild, das in Veranstaltungslisten und -karten angezeigt wird',
    noBannerImage: 'Kein Banner-Bild hochgeladen',
    noEventImage: 'Kein Veranstaltungsbild hochgeladen',
    changeBanner: 'Banner Ändern',
    uploadBanner: 'Banner Hochladen',
    changeImage: 'Bild Ändern',
    uploadImage: 'Bild Hochladen',
    uploadingImages: 'Bilder werden hochgeladen...',
    imageGuidelines: 'Bild-Richtlinien',
    supportedFormats: 'Unterstützte Formate',
    maxFileSize: 'Maximale Dateigröße',
    bannerRecommended: 'Empfohlene Banner-Größe',
    imageRecommended: 'Empfohlene Bildgröße',
    invalidImageFile: 'Ungültige Bilddatei',
    imageUploadFailed: 'Bild-Upload fehlgeschlagen',
    imageUploadSuccess: 'Bild erfolgreich hochgeladen',
    selectImageFile: 'Bilddatei auswählen',
    imageProcessing: 'Bild wird verarbeitet...',
    imagePreview: 'Bildvorschau',
    removeImage: 'Bild entfernen',
    cropImage: 'Bild zuschneiden',
    rotateImage: 'Bild drehen',
    imageQuality: 'Bildqualität',
    compressImage: 'Bild komprimieren',
    dropImageHere: 'Bild hier ablegen oder klicken, um hochzuladen'
};
// Italian translations for settings
const settingsTranslationsIt = {
    // Organization Settings
    organizationInformation: 'Informazioni Organizzazione',
    businessLicense: 'Licenza Commerciale',
    // Notification Settings
    emailNotifications: 'Notifiche Email',
    smsNotifications: 'Notifiche SMS',
    newBookings: 'Nuove Prenotazioni',
    getNotifiedNewBooking: 'Ricevi notifiche quando qualcuno prenota il tuo evento',
    cancellations: 'Cancellazioni',
    getNotifiedCancellations: 'Ricevi notifiche quando le prenotazioni vengono cancellate',
    lowInventoryNotifications: 'Notifiche Scorte Basse',
    dailyReports: 'Report Giornalieri',
    receiveDailySummary: 'Ricevi riassunto giornaliero di prenotazioni e ricavi',
    weeklyReports: 'Report Settimanali',
    receiveWeeklyAnalytics: 'Ricevi analisi e approfondimenti settimanali',
    monthlyReports: 'Report Mensili',
    // Security Settings
    securitySettings: 'Impostazioni di Sicurezza',
    twoFactorAuthentication: 'Autenticazione a Due Fattori',
    addExtraLayerSecurity: 'Aggiungi un livello extra di sicurezza al tuo account',
    loginNotifications: 'Notifiche di Accesso',
    getNotifiedNewLogins: 'Ricevi notifiche di nuovi tentativi di accesso',
    sessionTimeout: 'Timeout Sessione',
    sessionTimeoutMinutes: 'Timeout Sessione (minuti)',
    // Password Settings
    changePassword: 'Cambia Password',
    currentPassword: 'Password Attuale',
    newPassword: 'Nuova Password',
    confirmNewPassword: 'Conferma Nuova Password',
    minimumCharacters: 'Minimo 6 caratteri',
    passwordsDoNotMatch: 'Le nuove password non corrispondono',
    passwordTooShort: 'La nuova password deve essere di almeno 6 caratteri',
    changingPassword: 'Cambio Password...',
    passwordChanged: 'Password Cambiata con Successo',
    // Event Default Settings
    eventDefaults: 'Impostazioni Predefinite Eventi',
    defaultEventDuration: 'Durata Predefinita Evento',
    defaultEventDurationMinutes: 'Durata Predefinita Evento (minuti)',
    ticketSaleStart: 'Inizio Vendita Biglietti',
    ticketSaleStartDays: 'Inizio Vendita Biglietti (giorni prima dell\'evento)',
    defaultRefundPolicy: 'Politica di Rimborso Predefinita',
    requireApproval: 'Richiedi Approvazione',
    requireApprovalBeforeLive: 'Richiedi approvazione prima che gli eventi vadano in diretta',
    autoPublish: 'Pubblicazione Automatica',
    autoPublishWhenCreated: 'Pubblica automaticamente gli eventi quando vengono creati',
    // Language & Region Settings
    languageRegion: 'Lingua e Regione',
    languagePreferences: 'Preferenze linguistiche e formati regionali',
    regionalFormats: 'Formati regionali',
    interfaceLanguage: 'Lingua dell\'Interfaccia',
    timeDateFormats: 'Formati Ora e Data',
    currencySettings: 'Impostazioni Valuta',
    livePreview: 'Anteprima dal Vivo',
    // Time Format Settings
    hour12Format: 'Formato 12 ore',
    hour24Format: 'Formato 24 ore',
    // Date Format Settings
    dateFormatExample: 'Esempio: {example}',
    // Display Settings
    displaySettings: 'Impostazioni Display',
    fontSizeSmall: 'Piccolo',
    fontSizeMedium: 'Medio',
    fontSizeLarge: 'Grande',
    reduceSpacing: 'Riduci spaziatura tra elementi',
    // Theme Settings
    themeSettings: 'Impostazioni Tema',
    choosePreferredTheme: 'Scegli il tuo tema di interfaccia preferito',
    cleanBrightInterface: 'Interfaccia pulita e luminosa',
    easyOnEyes: 'Facile per gli occhi',
    followsSystemPreference: 'Segue la preferenza del sistema',
    accentColorSettings: 'Colore di Accento',
    chooseAccentColor: 'Scegli il tuo colore di accento preferito',
    // Success Messages
    settingsSavedSuccessfully: 'Impostazioni salvate con successo!',
    profileUpdatedSuccessfully: 'Profilo aggiornato con successo!',
    organizationUpdatedSuccessfully: 'Organizzazione aggiornata con successo!',
    preferencesUpdatedSuccessfully: 'Preferenze aggiornate con successo!',
    // Error Messages
    failedToUpdateProfile: 'Impossibile aggiornare il profilo',
    failedToUpdateOrganization: 'Impossibile aggiornare l\'organizzazione',
    failedToUpdatePreferences: 'Impossibile aggiornare le preferenze',
    failedToChangePassword: 'Impossibile cambiare la password',
    // Loading States
    loadingProfile: 'Caricamento profilo...',
    savingChanges: 'Salvataggio modifiche...',
    // Authentication
    authenticationRequired: 'Autenticazione Richiesta',
    pleaseLoginToAccess: 'Accedi per accedere alle tue impostazioni.',
    goToLogin: 'Vai al Login',
    // General Settings
    manageAccount: 'Gestisci il tuo account e le preferenze degli eventi',
    eventPreferences: 'Preferenze eventi',
    saved: 'Salvato!',
    saveChanges: 'Salva Modifiche',
    // Verification Status
    emailNotVerified: 'Indirizzo email non verificato',
    phoneNotVerified: 'Numero di telefono non verificato',
    verified: 'Verificato',
    // Color Names
    blue: 'Blu',
    purple: 'Viola',
    green: 'Verde',
    red: 'Rosso',
    orange: 'Arancione',
    pink: 'Rosa',
    // Size Names
    small: 'Piccolo',
    medium: 'Medio',
    large: 'Grande',
    // Image Management
    eventImages: 'Immagini dell\'Evento',
    bannerImage: 'Immagine Banner',
    bannerImageDescription: 'Grande immagine banner visualizzata in cima alla pagina del tuo evento',
    eventImage: 'Immagine Evento',
    eventImageDescription: 'Immagine principale mostrata negli elenchi e nelle schede degli eventi',
    noBannerImage: 'Nessuna immagine banner caricata',
    noEventImage: 'Nessuna immagine evento caricata',
    changeBanner: 'Cambia Banner',
    uploadBanner: 'Carica Banner',
    changeImage: 'Cambia Immagine',
    uploadImage: 'Carica Immagine',
    uploadingImages: 'Caricamento immagini...',
    imageGuidelines: 'Linee Guida Immagini',
    supportedFormats: 'Formati supportati',
    maxFileSize: 'Dimensione massima file',
    bannerRecommended: 'Dimensione raccomandata banner',
    imageRecommended: 'Dimensione raccomandata immagine',
    invalidImageFile: 'File immagine non valido',
    imageUploadFailed: 'Caricamento immagine fallito',
    imageUploadSuccess: 'Immagine caricata con successo',
    selectImageFile: 'Seleziona file immagine',
    imageProcessing: 'Elaborazione immagine...',
    imagePreview: 'Anteprima immagine',
    removeImage: 'Rimuovi immagine',
    cropImage: 'Ritaglia immagine',
    rotateImage: 'Ruota immagine',
    imageQuality: 'Qualità immagine',
    compressImage: 'Comprimi immagine',
    dropImageHere: 'Trascina l\'immagine qui o clicca per caricare'
};
// Helper function for string interpolation
const interpolate = (str, params = {})=>{
    return str.replace(/\{\{(\w+)\}\}/g, (match, key)=>{
        return params[key] !== undefined ? String(params[key]) : match;
    }).replace(/\{(\w+)\}/g, (match, key)=>{
        return params[key] !== undefined ? String(params[key]) : match;
    });
};
// Complete translation data for all 5 languages
const translations = {
    en: {
        // Common
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        view: 'View',
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
        confirm: 'Confirm',
        back: 'Back',
        create: 'Create',
        update: 'Update',
        // Navigation
        dashboard: 'Dashboard',
        events: 'Events',
        settings: 'Settings',
        profile: 'Profile',
        logout: 'Logout',
        // Settings
        personalInformation: 'Personal Information',
        organization: 'Organization',
        notifications: 'Notifications',
        security: 'Security',
        appearance: 'Appearance',
        language: 'Language',
        preferences: 'Preferences',
        // Profile
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phoneNumber: 'Phone Number',
        companyName: 'Company Name',
        address: 'Address',
        city: 'City',
        state: 'State',
        zipCode: 'ZIP Code',
        country: 'Country',
        // Events
        createEvent: 'Create Event',
        editEvent: 'Edit Event',
        eventTitle: 'Event Title',
        eventDescription: 'Event Description',
        eventDate: 'Event Date',
        eventTime: 'Event Time',
        eventLocation: 'Event Location',
        ticketPrice: 'Ticket Price',
        yourEvents: 'Your Events',
        createYourFirstEvent: 'Create Your First Event',
        createFirstEventPrompt: 'Create your first event to get started with EventPro.',
        eventsSubtitle: 'Manage your events and track their performance',
        allEvents: 'All Events',
        unpublished: 'Unpublished',
        searchEvents: 'Search events...',
        noDescriptionAvailable: 'No description available',
        dateNotSet: 'Date not set',
        invalidDate: 'Invalid date',
        timeNotSet: 'Time not set',
        invalidTime: 'Invalid time',
        confirmDeleteEvent: 'Are you sure you want to delete "{title}"? This action cannot be undone.',
        failedToDeleteEvent: 'Failed to delete event',
        failedToTogglePublish: 'Failed to {action} event',
        noEventsMatchSearch: 'No events match your search',
        adjustSearchCriteria: 'Try adjusting your search or filter criteria',
        // Event Form
        createNewEvent: 'Create New Event',
        editEventDetails: 'Edit Event',
        fillEventDetails: 'Fill out the details to create your event',
        updateEventDetails: 'Update your event details',
        basicInformation: 'Basic Information',
        eventTitleRequired: 'Event title is required',
        enterEventTitle: 'Enter event title',
        descriptionRequired: 'Event description is required',
        describeEventDetail: 'Describe your event in detail...',
        categoryRequired: 'Category is required',
        selectCategory: 'Select category',
        maxCapacityRequired: 'Maximum capacity must be greater than 0',
        maximumAttendees: 'Maximum attendees',
        eventImageUrl: 'Event Image URL',
        enterImageUrl: 'https://example.com/event-image.jpg',
        // Date & Time
        dateTime: 'Date & Time',
        multiDayEvent: 'Multi-day event: {count} days',
        dayEvent: '{count} day event',
        startDateTime: 'Start Date & Time',
        startDateTimeRequired: 'Event start date is required',
        endDateTime: 'End Date & Time',
        leaveEmptySingleSession: 'Leave empty for single session events',
        endDateAfterStart: 'End date must be after start date',
        registrationDeadline: 'Registration Deadline',
        whenRegistrationClose: 'When should registration close? (optional)',
        registrationDeadlineBeforeEvent: 'Registration deadline must be before event start',
        // Location
        location: 'Location',
        onlineEvent: 'This is an online event',
        venueRequired: 'Venue is required for in-person events',
        selectVenue: 'Select venue',
        locationDetails: 'Location Details',
        meetingLinkPlatform: 'Meeting link or platform details',
        additionalLocationInfo: 'Additional location information',
        // Ticket Types
        ticketTypes: 'Ticket Types',
        addTicketType: 'Add Ticket Type',
        ticketTypesCount: 'Ticket Types',
        totalTypes: 'Total Types',
        editable: 'Editable',
        locked: 'Locked',
        noTicketTypesYet: 'No ticket types yet',
        addTicketTypesToStart: 'Add ticket types to start selling tickets for your event',
        createFirstTicketType: 'Create First Ticket Type',
        ticketTypeName: 'Ticket Name',
        ticketTypeNameRequired: 'Ticket name is required',
        ticketDescription: 'Description',
        optionalTicketDescription: 'Optional description for this ticket type',
        price: 'Price (RM)',
        priceRequired: 'Valid price is required',
        quantity: 'Quantity',
        quantityRequired: 'Ticket quantity must be greater than 0',
        quantityGreaterThanZero: 'Quantity must be greater than 0',
        ticketActive: 'Active (available for purchase)',
        availableForPurchase: 'Available for purchase',
        createTicketType: 'Create Ticket Type',
        updateTicketType: 'Update Ticket Type',
        editTicketType: 'Edit Ticket Type',
        // Smart Editing
        smartTicketEditing: '💡 Smart Ticket Type Editing',
        whenCanEdit: '✅ When you CAN edit:',
        eventDraftStatus: '• Event is in DRAFT status',
        noTicketsSold: '• No tickets sold yet',
        eventNotPublished: '• Event is not published',
        whenEditingLocked: '🔒 When editing is LOCKED:',
        eventIsPublished: '• Event is published',
        ticketsAlreadySold: '• Tickets have already been sold',
        eventStatusNotDraft: '• Event status is not DRAFT',
        safeToEdit: 'Safe to edit - no sales yet',
        lockedToPreserve: 'Locked to preserve sales data',
        ticketsSoldCount: '{count} ticket(s) already sold. Editing is locked to preserve purchase data.',
        cannotCreateTicketTypes: 'Cannot create new ticket types. {count} ticket(s) have already been sold.',
        salesDataIntegrity: 'Event is published. Cannot create ticket types to preserve sales data integrity.',
        // Publishing
        publishingOptions: 'Publishing Options',
        publishEventImmediately: 'Publish event immediately (make it visible to the public)',
        makeVisiblePublic: 'Make it visible to the public',
        publishUnpublishLater: 'You can always publish or unpublish your event later from the dashboard',
        currentlyPublished: 'Currently Published',
        currentlyUnpublished: 'Currently Unpublished',
        usePublishButtons: 'Use the publish/unpublish buttons in the events list to change this status',
        changePublishStatus: 'Change publish status',
        // Validation
        fixErrorsBelow: 'Please fix the errors below',
        formValidationError: 'Please fix form errors',
        requiredField: 'This field is required',
        invalidInput: 'Invalid input',
        // Success/Error Messages
        eventCreatedSuccessfully: 'Event and all ticket types created successfully!',
        eventUpdatedSuccessfully: 'Event updated successfully!',
        ticketTypeCreatedSuccessfully: 'Ticket type created successfully!',
        ticketTypeUpdatedSuccessfully: 'Ticket type updated successfully!',
        failedToCreateEvent: 'Failed to create event. Please try again.',
        failedToUpdateEvent: 'Failed to update event. Please try again.',
        failedToCreateTicketType: 'Failed to create ticket type',
        failedToUpdateTicketType: 'Failed to update ticket type',
        creatingEvent: 'Creating Event...',
        updatingEvent: 'Updating Event...',
        redirectingToDashboard: 'Redirecting to dashboard...',
        redirectingToEventDetail: 'Redirecting to event detail...',
        // Capacity and Venues
        capacity: 'Capacity',
        venue: 'Venue',
        selectAVenue: 'Select a venue',
        venueWithCapacity: '{name} - {city} (Capacity: {capacity})',
        // Categories
        category: 'Category',
        technology: 'Technology',
        business: 'Business',
        music: 'Music',
        sports: 'Sports',
        education: 'Education',
        // Event States
        published: 'Published',
        draft: 'Draft',
        online: 'Online',
        inPerson: 'In-Person',
        // Multi-day
        multiDaySchedule: 'Multi-day schedule',
        // Venue Management
        venues: 'Venues',
        createVenue: 'Create Venue',
        venueName: 'Venue Name',
        venueNameRequired: 'Venue name is required',
        enterVenueName: 'Enter venue name',
        venueAddress: 'Address',
        addressRequired: 'Address is required',
        enterVenueAddress: 'Enter venue address',
        venueState: 'State',
        enterState: 'Enter state',
        enterStateOptional: 'Enter state (optional)',
        venueCountry: 'Country',
        countryRequired: 'Country is required',
        enterCountry: 'Enter country',
        venueZipCode: 'ZIP Code',
        enterZipCode: 'Enter ZIP code',
        enterZipCodeOptional: 'Enter ZIP code (optional)',
        capacityRequired: 'Capacity must be greater than 0',
        maximumCapacity: 'Maximum capacity',
        contactEmail: 'Contact Email',
        contactPhone: 'Contact Phone',
        website: 'Website',
        latitude: 'Latitude',
        longitude: 'Longitude',
        description: 'Description',
        venueDescription: 'Venue Description',
        describeVenue: 'Describe the venue, amenities, special features...',
        venueImageUrl: 'Venue Image URL',
        validEmailRequired: 'Please enter a valid email address',
        latitudeBetween: 'Latitude must be between -90 and 90',
        longitudeBetween: 'Longitude must be between -180 and 180',
        optionalMapIntegration: 'Optional: For map integration',
        createNewVenue: 'Create New Venue',
        venueCreatedSuccessfully: 'Venue created successfully!',
        failedToCreateVenue: 'Failed to create venue. Please try again.',
        failedToFetchVenues: 'Failed to load venues',
        creatingVenue: 'Creating...',
        loadingVenues: 'Loading venues...',
        searchVenues: 'Search venues...',
        allCities: 'All Cities',
        noVenuesFound: 'No venues found',
        adjustFilters: 'Try adjusting your filters',
        getStartedFirstVenue: 'Get started by creating your first venue',
        venueLocation: 'Location',
        venueCapacity: 'Capacity',
        venueEvents: 'Events',
        venueStatus: 'Status',
        active: 'Active',
        inactive: 'Inactive',
        eventsCount: '{count} events',
        viewAvailableVenues: 'View available venues and create new ones',
        createNewOnes: 'Create new ones',
        // Ticket Management
        tickets: 'Tickets',
        ticketManagement: 'Ticket Management',
        manageTicketTypes: 'Manage ticket types, validate tickets, and handle check-ins',
        validateTickets: 'Validate Tickets',
        checkIn: 'Check-in',
        ticketValidation: 'Ticket Validation',
        ticketCheckIn: 'Ticket Check-in',
        ticketsAndCheckIn: 'Tickets & Check-in',
        // Ticket Types Management
        createTicketTypeAction: 'Create Ticket Type',
        ticketTypeLimitations: '⚠️ Important: Ticket Type Creation Limitations',
        publishedEventsRestriction: 'Published events: Ticket types cannot be modified to preserve existing sales data',
        eventsWithSalesRestriction: 'Events with sales: Ticket type editing is locked once tickets are sold',
        draftStatusRequired: 'For ticket type creation: Events must be in DRAFT status with no existing sales',
        alternativeCreateEvent: 'Alternative: Create a new event if you need different ticket types',
        onlyWorksForDraft: 'Only works for draft events with no existing sales',
        createNewEventLink: 'Create New Event',
        manageEventsLink: 'Manage Events',
        // Ticket Form
        selectAnEvent: 'Select an event',
        ticketCreationRequirements: '⚠️ Ticket Creation Requirements',
        eventMustBeDraft: 'Event must be in DRAFT status (not published)',
        noExistingTicketSales: 'Event must have no existing ticket sales',
        mustBeEventOrganizer: 'You must be the event organizer',
        editTicketsDuringCreation: 'If this fails, edit ticket types during event creation instead',
        ticketEvent: 'Event',
        eventRequired: 'Event is required',
        noEventsFound: 'No events found',
        needCreateEventFirst: 'You need to create an event first before creating ticket types.',
        // Ticket Types Display
        loadingTicketTypes: 'Loading ticket types...',
        noTicketTypesFound: 'No ticket types found',
        adjustFiltersOrCreate: 'Try adjusting your filters or create your first ticket type',
        createFirstTicketTypePrompt: 'Create your first ticket type',
        ticketType: 'Ticket Type',
        event: 'Event',
        availability: 'Availability',
        status: 'Status',
        remaining: 'remaining',
        // Validation Tab
        validateTicket: 'Validate Ticket',
        enterTicketNumber: 'Enter ticket number',
        validating: 'Validating...',
        validate: 'Validate',
        validTicket: 'Valid Ticket',
        invalidTicket: 'Invalid Ticket',
        ticketNumber: 'Ticket Number',
        attendeeName: 'Attendee',
        alreadyUsed: 'Already Used',
        notUsed: 'Not Used',
        // Check-in Tab
        checkInTicket: 'Check-in Ticket',
        enterTicketNumberCheckIn: 'Enter ticket number for check-in',
        checkingIn: 'Checking in...',
        ticketCheckedInSuccessfully: 'Ticket Checked In Successfully',
        // Ticket Warnings
        importantTicketLimitations: '⚠️ Important: Ticket Type Creation Limitations',
        cannotModifyPublished: '• Published events: Ticket types cannot be modified to preserve existing sales data',
        editingLockedAfterSales: '• Events with sales: Ticket type editing is locked once tickets are sold',
        draftStatusForCreation: '• For ticket type creation: Events must be in DRAFT status with no existing sales',
        createNewEventAlternative: '• Alternative: Create a new event if you need different ticket types',
        // Business Rules
        businessRulesWarning: '⚠️ Ticket Creation Requirements',
        // Ticket States
        ticketInactive: 'Inactive',
        // General UI
        optional: 'optional',
        required: 'required',
        // Appearance
        theme: 'Theme',
        lightMode: 'Light Mode',
        darkMode: 'Dark Mode',
        autoMode: 'Auto Mode',
        accentColor: 'Accent Color',
        fontSize: 'Font Size',
        compactMode: 'Compact Mode',
        // Time and Date
        timeFormat: 'Time Format',
        dateFormat: 'Date Format',
        currency: 'Currency',
        timezone: 'Timezone',
        // Messages
        saveSuccess: 'Settings saved successfully!',
        saveError: 'Failed to save settings',
        loadError: 'Failed to load data',
        // Dashboard specific
        welcomeBack: 'Welcome back, {name}!',
        virtualEvent: 'Virtual Event',
        viewAllEvents: 'View all events →',
        upcomingEvents: 'Upcoming Events',
        unpublish: 'Unpublish',
        unlimited: 'Unlimited',
        uncategorized: 'Uncategorized',
        totalRevenue: 'Total Revenue',
        totalEvents: 'Total Events',
        ticketsSold: 'Tickets Sold',
        revenue: 'Revenue',
        publish: 'Publish',
        noEventsYet: 'No events yet',
        maxCapacity: 'Max Capacity',
        loadingDashboard: 'Loading your dashboard...',
        dashboardError: 'Failed to load dashboard data',
        publishedCount: '{count} published',
        // Analytics Dashboard
        analytics: 'Analytics',
        analyticsSubtitle: 'Comprehensive insights for your events',
        comprehensiveInsights: 'Comprehensive insights for your events',
        refreshData: 'Refresh',
        someDataCouldntBeLoaded: 'Some data couldn\'t be loaded:',
        // Key Metrics
        totalAttendees: 'Total Attendees',
        activeEvents: 'Active Events',
        venuesUsed: 'Venues Used',
        fromLastMonth: 'from last month',
        noRevenueYet: 'No revenue yet',
        noAttendeesYet: 'No attendees yet',
        eventsRunning: 'Events running',
        noActiveEvents: 'No active events',
        venuePartnerships: 'Venue partnerships',
        noVenuesYet: 'No venues yet',
        // Charts and Analytics
        topRevenueEvents: 'Top Revenue Events',
        noEventsWithRevenueData: 'No events with revenue data yet',
        createAndPublishEvents: 'Create and publish events',
        seeRevenueAnalytics: 'to see revenue analytics',
        paymentMethodDistribution: 'Payment Method Distribution',
        noPaymentDataAvailable: 'No payment data available',
        eventCapacityUtilization: 'Event Capacity Utilization',
        utilizationPercentage: 'utilization',
        noEventsFoundForPeriod: 'No events found for the selected period',
        monthlyTrends: 'Monthly Trends',
        // Demographics
        genderDistribution: 'Gender Distribution',
        noDemographicDataAvailable: 'No demographic data available',
        venuePerformance: 'Venue Performance',
        avgAttendance: 'Avg Attendance',
        noVenueDataAvailable: 'No venue data available',
        // Events Needing Attention
        eventsNeedingAttention: 'Events Needing Attention',
        utilization: 'utilization',
        daysUntilEvent: 'days until event',
        potentialIssues: 'Potential Issues:',
        recommendations: 'Recommendations:',
        allEventsPerformingWell: 'All events are performing well!',
        noEventsWithLowAttendance: 'No events with low attendance found',
        // Time periods
        last7Days: 'Last 7 Days',
        last30Days: 'Last 30 Days',
        last3Months: 'Last 3 Months',
        last6Months: 'Last 6 Months',
        lastYear: 'Last Year',
        // Status messages
        checkingAuthentication: 'Checking authentication...',
        authenticationRequired: 'Authentication Required',
        pleaseLogInToView: 'Please log in to view the analytics dashboard.',
        goToLogin: 'Go to Login',
        // Orders and remaining
        orders: 'orders',
        organizationInformation: 'Organization Information',
        businessLicense: 'Business License',
        // Notification Settings (update existing ones)
        emailNotifications: 'Email Notifications',
        smsNotifications: 'SMS Notifications',
        newBookings: 'New Bookings',
        getNotifiedNewBooking: 'Get notified when someone books your event',
        cancellations: 'Cancellations',
        getNotifiedCancellations: 'Get notified when bookings are cancelled',
        lowInventoryNotifications: 'Low Inventory Notifications',
        dailyReports: 'Daily Reports',
        receiveDailySummary: 'Receive daily summary of bookings and revenue',
        weeklyReports: 'Weekly Reports',
        receiveWeeklyAnalytics: 'Receive weekly analytics and insights',
        monthlyReports: 'Monthly Reports',
        // Security Settings (update existing ones)
        securitySettings: 'Security Settings',
        twoFactorAuthentication: 'Two-Factor Authentication',
        addExtraLayerSecurity: 'Add an extra layer of security to your account',
        loginNotifications: 'Login Notifications',
        getNotifiedNewLogins: 'Get notified of new login attempts',
        sessionTimeout: 'Session Timeout',
        sessionTimeoutMinutes: 'Session Timeout (minutes)',
        // Password Settings
        changePassword: 'Change Password',
        currentPassword: 'Current Password',
        newPassword: 'New Password',
        confirmNewPassword: 'Confirm New Password',
        minimumCharacters: 'Minimum 6 characters',
        passwordsDoNotMatch: 'New passwords do not match',
        passwordTooShort: 'New password must be at least 6 characters long',
        changingPassword: 'Changing Password...',
        passwordChanged: 'Password Changed Successfully',
        // Event Default Settings
        eventDefaults: 'Event Defaults',
        defaultEventDuration: 'Default Event Duration',
        defaultEventDurationMinutes: 'Default Event Duration (minutes)',
        ticketSaleStart: 'Ticket Sale Start',
        ticketSaleStartDays: 'Ticket Sale Start (days before event)',
        defaultRefundPolicy: 'Default Refund Policy',
        requireApproval: 'Require Approval',
        requireApprovalBeforeLive: 'Require approval before events go live',
        autoPublish: 'Auto Publish',
        autoPublishWhenCreated: 'Automatically publish events when created',
        // Language & Region Settings
        languageRegion: 'Language & Region',
        languagePreferences: 'Language preferences and regional formats',
        regionalFormats: 'Regional formats',
        interfaceLanguage: 'Interface Language',
        timeDateFormats: 'Time & Date Formats',
        currencySettings: 'Currency Settings',
        livePreview: 'Live Preview',
        // Time Format Settings
        hour12Format: '12-hour format',
        hour24Format: '24-hour format',
        // Date Format Settings
        dateFormatExample: 'Example: {example}',
        // Display Settings
        displaySettings: 'Display Settings',
        fontSizeSmall: 'Small',
        fontSizeMedium: 'Medium',
        fontSizeLarge: 'Large',
        reduceSpacing: 'Reduce spacing between elements',
        // Theme Settings
        themeSettings: 'Theme Settings',
        choosePreferredTheme: 'Choose your preferred interface theme',
        cleanBrightInterface: 'Clean and bright interface',
        easyOnEyes: 'Easy on the eyes',
        followsSystemPreference: 'Follows system preference',
        accentColorSettings: 'Accent Color',
        chooseAccentColor: 'Choose your preferred accent color',
        // Success Messages
        settingsSavedSuccessfully: 'Settings saved successfully!',
        profileUpdatedSuccessfully: 'Profile updated successfully!',
        organizationUpdatedSuccessfully: 'Organization updated successfully!',
        preferencesUpdatedSuccessfully: 'Preferences updated successfully!',
        // Error Messages
        failedToUpdateProfile: 'Failed to update profile',
        failedToUpdateOrganization: 'Failed to update organization',
        failedToUpdatePreferences: 'Failed to update preferences',
        failedToChangePassword: 'Failed to change password',
        // Loading States
        loadingProfile: 'Loading profile...',
        savingChanges: 'Saving changes...',
        // Authentication (update existing)
        pleaseLoginToAccess: 'Please log in to access your settings.',
        // General Settings
        manageAccount: 'Manage your account and event preferences',
        eventPreferences: 'Event preferences',
        saved: 'Saved!',
        saveChanges: 'Save Changes',
        // Verification Status
        emailNotVerified: 'Email address not verified',
        phoneNotVerified: 'Phone number not verified',
        verified: 'Verified',
        // Color Names (for dynamic translation)
        blue: 'Blue',
        purple: 'Purple',
        green: 'Green',
        red: 'Red',
        orange: 'Orange',
        pink: 'Pink',
        // Size Names (for dynamic translation)
        small: 'Small',
        medium: 'Medium',
        large: 'Large',
        // Image Management
        eventImages: 'Event Images',
        bannerImage: 'Banner Image',
        bannerImageDescription: 'Large banner image displayed at the top of your event page',
        eventImage: 'Event Image',
        eventImageDescription: 'Main image shown in event listings and cards',
        noBannerImage: 'No banner image uploaded',
        noEventImage: 'No event image uploaded',
        changeBanner: 'Change Banner',
        uploadBanner: 'Upload Banner',
        changeImage: 'Change Image',
        uploadImage: 'Upload Image',
        uploadingImages: 'Uploading images...',
        imageGuidelines: 'Image Guidelines',
        supportedFormats: 'Supported formats',
        maxFileSize: 'Maximum file size',
        bannerRecommended: 'Banner recommended size',
        imageRecommended: 'Image recommended size',
        invalidImageFile: 'Invalid image file',
        imageUploadFailed: 'Image upload failed',
        imageUploadSuccess: 'Image uploaded successfully',
        selectImageFile: 'Select image file',
        imageProcessing: 'Processing image...',
        imagePreview: 'Image preview',
        removeImage: 'Remove image',
        cropImage: 'Crop image',
        rotateImage: 'Rotate image',
        imageQuality: 'Image quality',
        compressImage: 'Compress image',
        dropImageHere: 'Drop image here or click to upload'
    },
    // Spanish translations
    es: {
        // Common
        save: 'Guardar',
        cancel: 'Cancelar',
        delete: 'Eliminar',
        edit: 'Editar',
        view: 'Ver',
        loading: 'Cargando...',
        error: 'Error',
        success: 'Éxito',
        confirm: 'Confirmar',
        back: 'Atrás',
        create: 'Crear',
        update: 'Actualizar',
        // Navigation
        dashboard: 'Panel',
        events: 'Eventos',
        settings: 'Configuración',
        profile: 'Perfil',
        logout: 'Cerrar Sesión',
        // Settings
        personalInformation: 'Información Personal',
        organization: 'Organización',
        notifications: 'Notificaciones',
        security: 'Seguridad',
        appearance: 'Apariencia',
        language: 'Idioma',
        preferences: 'Preferencias',
        // Profile
        firstName: 'Nombre',
        lastName: 'Apellido',
        email: 'Correo Electrónico',
        phoneNumber: 'Número de Teléfono',
        companyName: 'Nombre de la Empresa',
        address: 'Dirección',
        city: 'Ciudad',
        state: 'Estado',
        zipCode: 'Código Postal',
        country: 'País',
        // Events
        createEvent: 'Crear Evento',
        editEvent: 'Editar Evento',
        eventTitle: 'Título del Evento',
        eventDescription: 'Descripción del Evento',
        eventDate: 'Fecha del Evento',
        eventTime: 'Hora del Evento',
        eventLocation: 'Ubicación del Evento',
        ticketPrice: 'Precio del Boleto',
        yourEvents: 'Tus Eventos',
        createYourFirstEvent: 'Crear Tu Primer Evento',
        createFirstEventPrompt: 'Crea tu primer evento para comenzar con EventPro.',
        eventsSubtitle: 'Gestiona tus eventos y rastrea su rendimiento',
        allEvents: 'Todos los Eventos',
        unpublished: 'No Publicado',
        searchEvents: 'Buscar eventos...',
        noDescriptionAvailable: 'Sin descripción disponible',
        dateNotSet: 'Fecha no establecida',
        invalidDate: 'Fecha inválida',
        timeNotSet: 'Hora no establecida',
        invalidTime: 'Hora inválida',
        confirmDeleteEvent: '¿Estás seguro de que quieres eliminar "{title}"? Esta acción no se puede deshacer.',
        failedToDeleteEvent: 'Error al eliminar evento',
        failedToTogglePublish: 'Error al {action} evento',
        noEventsMatchSearch: 'Ningún evento coincide con tu búsqueda',
        adjustSearchCriteria: 'Intenta ajustar tus criterios de búsqueda o filtro',
        // Event Form
        createNewEvent: 'Crear Nuevo Evento',
        editEventDetails: 'Editar Evento',
        fillEventDetails: 'Completa los detalles para crear tu evento',
        updateEventDetails: 'Actualiza los detalles de tu evento',
        basicInformation: 'Información Básica',
        eventTitleRequired: 'El título del evento es obligatorio',
        enterEventTitle: 'Ingresa el título del evento',
        descriptionRequired: 'La descripción del evento es obligatoria',
        describeEventDetail: 'Describe tu evento en detalle...',
        categoryRequired: 'La categoría es obligatoria',
        selectCategory: 'Seleccionar categoría',
        maxCapacityRequired: 'La capacidad máxima debe ser mayor a 0',
        maximumAttendees: 'Máximo de asistentes',
        eventImageUrl: 'URL de Imagen del Evento',
        enterImageUrl: 'https://ejemplo.com/imagen-evento.jpg',
        // Date & Time
        dateTime: 'Fecha y Hora',
        multiDayEvent: 'Evento de múltiples días: {count} días',
        dayEvent: 'Evento de {count} día',
        startDateTime: 'Fecha y Hora de Inicio',
        startDateTimeRequired: 'La fecha de inicio del evento es obligatoria',
        endDateTime: 'Fecha y Hora de Fin',
        leaveEmptySingleSession: 'Deja vacío para eventos de una sola sesión',
        endDateAfterStart: 'La fecha de fin debe ser posterior a la fecha de inicio',
        registrationDeadline: 'Fecha Límite de Registro',
        whenRegistrationClose: '¿Cuándo debe cerrarse el registro? (opcional)',
        registrationDeadlineBeforeEvent: 'La fecha límite de registro debe ser antes del inicio del evento',
        // Location
        location: 'Ubicación',
        onlineEvent: 'Este es un evento en línea',
        venueRequired: 'Se requiere un lugar para eventos presenciales',
        selectVenue: 'Seleccionar lugar',
        locationDetails: 'Detalles de Ubicación',
        meetingLinkPlatform: 'Enlace de reunión o detalles de plataforma',
        additionalLocationInfo: 'Información adicional de ubicación',
        // Ticket Types
        ticketTypes: 'Tipos de Boletos',
        addTicketType: 'Agregar Tipo de Boleto',
        ticketTypesCount: 'Tipos de Boletos',
        totalTypes: 'Tipos Totales',
        editable: 'Editable',
        locked: 'Bloqueado',
        noTicketTypesYet: 'Aún no hay tipos de boletos',
        addTicketTypesToStart: 'Agrega tipos de boletos para comenzar a vender boletos para tu evento',
        createFirstTicketType: 'Crear Primer Tipo de Boleto',
        ticketTypeName: 'Nombre del Boleto',
        ticketTypeNameRequired: 'El nombre del boleto es obligatorio',
        ticketDescription: 'Descripción',
        optionalTicketDescription: 'Descripción opcional para este tipo de boleto',
        price: 'Precio (RM)',
        priceRequired: 'Se requiere un precio válido',
        quantity: 'Cantidad',
        quantityRequired: 'La cantidad de boletos debe ser mayor a 0',
        quantityGreaterThanZero: 'La cantidad debe ser mayor a 0',
        ticketActive: 'Activo (disponible para compra)',
        availableForPurchase: 'Disponible para compra',
        createTicketType: 'Crear Tipo de Boleto',
        updateTicketType: 'Actualizar Tipo de Boleto',
        editTicketType: 'Editar Tipo de Boleto',
        // Smart Editing
        smartTicketEditing: '💡 Edición Inteligente de Tipos de Boleto',
        whenCanEdit: '✅ Cuándo PUEDES editar:',
        eventDraftStatus: '• El evento está en estado BORRADOR',
        noTicketsSold: '• No se han vendido boletos aún',
        eventNotPublished: '• El evento no está publicado',
        whenEditingLocked: '🔒 Cuándo la edición está BLOQUEADA:',
        eventIsPublished: '• El evento está publicado',
        ticketsAlreadySold: '• Ya se han vendido boletos',
        eventStatusNotDraft: '• El estado del evento no es BORRADOR',
        safeToEdit: 'Seguro para editar - sin ventas aún',
        lockedToPreserve: 'Bloqueado para preservar datos de ventas',
        ticketsSoldCount: '{count} boleto(s) ya vendidos. La edición está bloqueada para preservar datos de compra.',
        cannotCreateTicketTypes: 'No se pueden crear nuevos tipos de boletos. {count} boleto(s) ya han sido vendidos.',
        salesDataIntegrity: 'El evento está publicado. No se pueden crear tipos de boletos para preservar la integridad de los datos de ventas.',
        // Publishing
        publishingOptions: 'Opciones de Publicación',
        publishEventImmediately: 'Publicar evento inmediatamente (hacerlo visible al público)',
        makeVisiblePublic: 'Hacerlo visible al público',
        publishUnpublishLater: 'Siempre puedes publicar o despublicar tu evento más tarde desde el panel',
        currentlyPublished: 'Actualmente Publicado',
        currentlyUnpublished: 'Actualmente No Publicado',
        usePublishButtons: 'Usa los botones de publicar/despublicar en la lista de eventos para cambiar este estado',
        changePublishStatus: 'Cambiar estado de publicación',
        // Validation
        fixErrorsBelow: 'Por favor corrige los errores a continuación',
        formValidationError: 'Por favor corrige los errores del formulario',
        requiredField: 'Este campo es obligatorio',
        invalidInput: 'Entrada inválida',
        // Success/Error Messages
        eventCreatedSuccessfully: '¡Evento y todos los tipos de boletos creados exitosamente!',
        eventUpdatedSuccessfully: '¡Evento actualizado exitosamente!',
        ticketTypeCreatedSuccessfully: '¡Tipo de boleto creado exitosamente!',
        ticketTypeUpdatedSuccessfully: '¡Tipo de boleto actualizado exitosamente!',
        failedToCreateEvent: 'Error al crear evento. Por favor intenta de nuevo.',
        failedToUpdateEvent: 'Error al actualizar evento. Por favor intenta de nuevo.',
        failedToCreateTicketType: 'Error al crear tipo de boleto',
        failedToUpdateTicketType: 'Error al actualizar tipo de boleto',
        creatingEvent: 'Creando Evento...',
        updatingEvent: 'Actualizando Evento...',
        redirectingToDashboard: 'Redirigiendo al panel...',
        redirectingToEventDetail: 'Redirigiendo a detalles del evento...',
        // Capacity and Venues
        capacity: 'Capacidad',
        venue: 'Lugar',
        selectAVenue: 'Selecciona un lugar',
        venueWithCapacity: '{name} - {city} (Capacidad: {capacity})',
        // Categories
        category: 'Categoría',
        technology: 'Tecnología',
        business: 'Negocios',
        music: 'Música',
        sports: 'Deportes',
        education: 'Educación',
        // Event States
        published: 'Publicado',
        draft: 'Borrador',
        online: 'En línea',
        inPerson: 'Presencial',
        // Multi-day
        multiDaySchedule: 'Horario de múltiples días',
        // Venue Management
        venues: 'Lugares',
        createVenue: 'Crear Lugar',
        venueName: 'Nombre del Lugar',
        venueNameRequired: 'El nombre del lugar es obligatorio',
        enterVenueName: 'Ingresa el nombre del lugar',
        venueAddress: 'Dirección',
        addressRequired: 'La dirección es obligatoria',
        enterVenueAddress: 'Ingresa la dirección del lugar',
        venueState: 'Estado',
        enterState: 'Ingresa el estado',
        enterStateOptional: 'Ingresa el estado (opcional)',
        venueCountry: 'País',
        countryRequired: 'El país es obligatorio',
        enterCountry: 'Ingresa el país',
        venueZipCode: 'Código Postal',
        enterZipCode: 'Ingresa el código postal',
        enterZipCodeOptional: 'Ingresa el código postal (opcional)',
        capacityRequired: 'La capacidad debe ser mayor a 0',
        maximumCapacity: 'Capacidad máxima',
        contactEmail: 'Email de Contacto',
        contactPhone: 'Teléfono de Contacto',
        website: 'Sitio Web',
        latitude: 'Latitud',
        longitude: 'Longitud',
        description: 'Descripción',
        venueDescription: 'Descripción del Lugar',
        describeVenue: 'Describe el lugar, amenidades, características especiales...',
        venueImageUrl: 'URL de Imagen del Lugar',
        validEmailRequired: 'Por favor ingresa una dirección de email válida',
        latitudeBetween: 'La latitud debe estar entre -90 y 90',
        longitudeBetween: 'La longitud debe estar entre -180 y 180',
        optionalMapIntegration: 'Opcional: Para integración con mapas',
        createNewVenue: 'Crear Nuevo Lugar',
        venueCreatedSuccessfully: '¡Lugar creado exitosamente!',
        failedToCreateVenue: 'Error al crear lugar. Por favor intenta de nuevo.',
        failedToFetchVenues: 'Error al cargar lugares',
        creatingVenue: 'Creando...',
        loadingVenues: 'Cargando lugares...',
        searchVenues: 'Buscar lugares...',
        allCities: 'Todas las Ciudades',
        noVenuesFound: 'No se encontraron lugares',
        adjustFilters: 'Intenta ajustar tus filtros',
        getStartedFirstVenue: 'Comienza creando tu primer lugar',
        venueLocation: 'Ubicación',
        venueCapacity: 'Capacidad',
        venueEvents: 'Eventos',
        venueStatus: 'Estado',
        active: 'Activo',
        inactive: 'Inactivo',
        eventsCount: '{count} eventos',
        viewAvailableVenues: 'Ver lugares disponibles y crear nuevos',
        createNewOnes: 'Crear nuevos',
        // Ticket Management
        tickets: 'Boletos',
        ticketManagement: 'Gestión de Boletos',
        manageTicketTypes: 'Gestiona tipos de boletos, valida boletos y maneja check-ins',
        validateTickets: 'Validar Boletos',
        checkIn: 'Check-in',
        ticketValidation: 'Validación de Boletos',
        ticketCheckIn: 'Check-in de Boletos',
        ticketsAndCheckIn: 'Boletos y Check-in',
        // Ticket Types Management
        createTicketTypeAction: 'Crear Tipo de Boleto',
        ticketTypeLimitations: '⚠️ Importante: Limitaciones de Creación de Tipos de Boleto',
        publishedEventsRestriction: 'Eventos publicados: Los tipos de boletos no se pueden modificar para preservar los datos de ventas existentes',
        eventsWithSalesRestriction: 'Eventos con ventas: La edición de tipos de boletos se bloquea una vez que se venden boletos',
        draftStatusRequired: 'Para crear tipos de boletos: Los eventos deben estar en estado BORRADOR sin ventas existentes',
        alternativeCreateEvent: 'Alternativa: Crear un nuevo evento si necesitas diferentes tipos de boletos',
        onlyWorksForDraft: 'Solo funciona para eventos en borrador sin ventas existentes',
        createNewEventLink: 'Crear Nuevo Evento',
        manageEventsLink: 'Gestionar Eventos',
        // Ticket Form
        selectAnEvent: 'Seleccionar un evento',
        ticketCreationRequirements: '⚠️ Requisitos de Creación de Boletos',
        eventMustBeDraft: 'El evento debe estar en estado BORRADOR (no publicado)',
        noExistingTicketSales: 'El evento no debe tener ventas de boletos existentes',
        mustBeEventOrganizer: 'Debes ser el organizador del evento',
        editTicketsDuringCreation: 'Si esto falla, edita los tipos de boletos durante la creación del evento',
        ticketEvent: 'Evento',
        eventRequired: 'El evento es obligatorio',
        noEventsFound: 'No se encontraron eventos',
        needCreateEventFirst: 'Necesitas crear un evento primero antes de crear tipos de boletos.',
        // Ticket Types Display
        loadingTicketTypes: 'Cargando tipos de boletos...',
        noTicketTypesFound: 'No se encontraron tipos de boletos',
        adjustFiltersOrCreate: 'Intenta ajustar tus filtros o crear tu primer tipo de boleto',
        createFirstTicketTypePrompt: 'Crear tu primer tipo de boleto',
        ticketType: 'Tipo de Boleto',
        event: 'Evento',
        availability: 'Disponibilidad',
        status: 'Estado',
        remaining: 'restantes',
        // Validation Tab
        validateTicket: 'Validar Boleto',
        enterTicketNumber: 'Ingresa el número de boleto',
        validating: 'Validando...',
        validate: 'Validar',
        validTicket: 'Boleto Válido',
        invalidTicket: 'Boleto Inválido',
        ticketNumber: 'Número de Boleto',
        attendeeName: 'Asistente',
        alreadyUsed: 'Ya Usado',
        notUsed: 'No Usado',
        // Check-in Tab
        checkInTicket: 'Check-in de Boleto',
        enterTicketNumberCheckIn: 'Ingresa el número de boleto para check-in',
        checkingIn: 'Haciendo check-in...',
        ticketCheckedInSuccessfully: 'Check-in de Boleto Exitoso',
        // Ticket Warnings
        importantTicketLimitations: '⚠️ Importante: Limitaciones de Creación de Tipos de Boleto',
        cannotModifyPublished: '• Eventos publicados: Los tipos de boletos no se pueden modificar para preservar los datos de ventas existentes',
        editingLockedAfterSales: '• Eventos con ventas: La edición de tipos de boletos se bloquea una vez que se venden boletos',
        draftStatusForCreation: '• Para crear tipos de boletos: Los eventos deben estar en estado BORRADOR sin ventas existentes',
        createNewEventAlternative: '• Alternativa: Crear un nuevo evento si necesitas diferentes tipos de boletos',
        // Business Rules
        businessRulesWarning: '⚠️ Requisitos de Creación de Boletos',
        // Ticket States
        ticketInactive: 'Inactivo',
        // General UI
        optional: 'opcional',
        required: 'obligatorio',
        // Appearance
        theme: 'Tema',
        lightMode: 'Modo Claro',
        darkMode: 'Modo Oscuro',
        autoMode: 'Modo Automático',
        accentColor: 'Color de Acento',
        fontSize: 'Tamaño de Fuente',
        compactMode: 'Modo Compacto',
        // Time and Date
        timeFormat: 'Formato de Hora',
        dateFormat: 'Formato de Fecha',
        currency: 'Moneda',
        timezone: 'Zona Horaria',
        // Messages
        saveSuccess: '¡Configuración guardada exitosamente!',
        saveError: 'Error al guardar la configuración',
        loadError: 'Error al cargar los datos',
        // Dashboard specific
        welcomeBack: '¡Bienvenido de vuelta, {name}!',
        virtualEvent: 'Evento Virtual',
        viewAllEvents: 'Ver todos los eventos →',
        upcomingEvents: 'Próximos Eventos',
        unpublish: 'Despublicar',
        unlimited: 'Ilimitado',
        uncategorized: 'Sin categoría',
        totalRevenue: 'Ingresos Totales',
        totalEvents: 'Total de Eventos',
        ticketsSold: 'Boletos Vendidos',
        revenue: 'Ingresos',
        publish: 'Publicar',
        noEventsYet: 'Aún no hay eventos',
        maxCapacity: 'Capacidad Máxima',
        loadingDashboard: 'Cargando tu panel...',
        dashboardError: 'Error al cargar los datos del panel',
        publishedCount: '{count} publicados',
        // Analytics Dashboard
        analytics: 'Analíticas',
        analyticsSubtitle: 'Insights integrales para tus eventos',
        comprehensiveInsights: 'Insights integrales para tus eventos',
        refreshData: 'Actualizar',
        someDataCouldntBeLoaded: 'Algunos datos no se pudieron cargar:',
        // Key Metrics
        totalAttendees: 'Total de Asistentes',
        activeEvents: 'Eventos Activos',
        venuesUsed: 'Lugares Utilizados',
        fromLastMonth: 'del mes pasado',
        noRevenueYet: 'Sin ingresos aún',
        noAttendeesYet: 'Sin asistentes aún',
        eventsRunning: 'Eventos en curso',
        noActiveEvents: 'Sin eventos activos',
        venuePartnerships: 'Alianzas de lugares',
        noVenuesYet: 'Sin lugares aún',
        // Charts and Analytics
        topRevenueEvents: 'Eventos con Mayores Ingresos',
        noEventsWithRevenueData: 'Aún no hay eventos con datos de ingresos',
        createAndPublishEvents: 'Crea y publica eventos',
        seeRevenueAnalytics: 'para ver analíticas de ingresos',
        paymentMethodDistribution: 'Distribución de Métodos de Pago',
        noPaymentDataAvailable: 'No hay datos de pago disponibles',
        eventCapacityUtilization: 'Utilización de Capacidad de Eventos',
        utilizationPercentage: 'utilización',
        noEventsFoundForPeriod: 'No se encontraron eventos para el período seleccionado',
        monthlyTrends: 'Tendencias Mensuales',
        // Demographics
        genderDistribution: 'Distribución por Género',
        noDemographicDataAvailable: 'No hay datos demográficos disponibles',
        venuePerformance: 'Rendimiento de Lugares',
        avgAttendance: 'Asistencia Promedio',
        noVenueDataAvailable: 'No hay datos de lugares disponibles',
        // Events Needing Attention
        eventsNeedingAttention: 'Eventos que Necesitan Atención',
        utilization: 'utilización',
        daysUntilEvent: 'días hasta el evento',
        potentialIssues: 'Problemas Potenciales:',
        recommendations: 'Recomendaciones:',
        allEventsPerformingWell: '¡Todos los eventos están funcionando bien!',
        noEventsWithLowAttendance: 'No se encontraron eventos con baja asistencia',
        // Time periods
        last7Days: 'Últimos 7 Días',
        last30Days: 'Últimos 30 Días',
        last3Months: 'Últimos 3 Meses',
        last6Months: 'Últimos 6 Meses',
        lastYear: 'Último Año',
        // Status messages
        checkingAuthentication: 'Verificando autenticación...',
        authenticationRequired: 'Autenticación Requerida',
        pleaseLogInToView: 'Por favor inicia sesión para ver el panel de analíticas.',
        goToLogin: 'Ir al Login',
        // Orders and remaining
        orders: 'órdenes',
        organizationInformation: 'Información de la Organización',
        businessLicense: 'Licencia Comercial',
        // Notification Settings (update existing ones)
        emailNotifications: 'Notificaciones por Email',
        smsNotifications: 'Notificaciones por SMS',
        newBookings: 'Nuevas Reservas',
        getNotifiedNewBooking: 'Recibir notificaciones cuando alguien reserve tu evento',
        cancellations: 'Cancelaciones',
        getNotifiedCancellations: 'Recibir notificaciones cuando se cancelen reservas',
        lowInventoryNotifications: 'Notificaciones de Inventario Bajo',
        dailyReports: 'Informes Diarios',
        receiveDailySummary: 'Recibir resumen diario de reservas e ingresos',
        weeklyReports: 'Informes Semanales',
        receiveWeeklyAnalytics: 'Recibir analíticas y insights semanales',
        monthlyReports: 'Informes Mensuales',
        // Security Settings (update existing ones)
        securitySettings: 'Configuración de Seguridad',
        twoFactorAuthentication: 'Autenticación de Dos Factores',
        addExtraLayerSecurity: 'Añade una capa extra de seguridad a tu cuenta',
        loginNotifications: 'Notificaciones de Inicio de Sesión',
        getNotifiedNewLogins: 'Recibir notificaciones de nuevos intentos de inicio de sesión',
        sessionTimeout: 'Tiempo de Espera de Sesión',
        sessionTimeoutMinutes: 'Tiempo de Espera de Sesión (minutos)',
        // Password Settings
        changePassword: 'Cambiar Contraseña',
        currentPassword: 'Contraseña Actual',
        newPassword: 'Nueva Contraseña',
        confirmNewPassword: 'Confirmar Nueva Contraseña',
        minimumCharacters: 'Mínimo 6 caracteres',
        passwordsDoNotMatch: 'Las nuevas contraseñas no coinciden',
        passwordTooShort: 'La nueva contraseña debe tener al menos 6 caracteres',
        changingPassword: 'Cambiando Contraseña...',
        passwordChanged: 'Contraseña Cambiada Exitosamente',
        // Event Default Settings
        eventDefaults: 'Configuraciones Predeterminadas del Evento',
        defaultEventDuration: 'Duración Predeterminada del Evento',
        defaultEventDurationMinutes: 'Duración Predeterminada del Evento (minutos)',
        ticketSaleStart: 'Inicio de Venta de Entradas',
        ticketSaleStartDays: 'Inicio de Venta de Entradas (días antes del evento)',
        defaultRefundPolicy: 'Política de Reembolso Predeterminada',
        requireApproval: 'Requerir Aprobación',
        requireApprovalBeforeLive: 'Requiere aprobación antes de publicar eventos',
        autoPublish: 'Publicación Automática',
        autoPublishWhenCreated: 'Publicar automáticamente eventos al crearlos',
        // Language & Region Settings
        languageRegion: 'Idioma y Región',
        languagePreferences: 'Preferencias de idioma y formatos regionales',
        regionalFormats: 'Formatos regionales',
        interfaceLanguage: 'Idioma de la Interfaz',
        timeDateFormats: 'Formatos de Hora y Fecha',
        currencySettings: 'Configuración de Moneda',
        livePreview: 'Vista Previa en Vivo',
        // Time Format Settings
        hour12Format: 'Formato de 12 horas',
        hour24Format: 'Formato de 24 horas',
        // Date Format Settings
        dateFormatExample: 'Ejemplo: {example}',
        // Display Settings
        displaySettings: 'Configuración de Pantalla',
        fontSizeSmall: 'Pequeño',
        fontSizeMedium: 'Mediano',
        fontSizeLarge: 'Grande',
        reduceSpacing: 'Reducir espaciado entre elementos',
        // Theme Settings
        themeSettings: 'Configuración de Tema',
        choosePreferredTheme: 'Elige tu tema de interfaz preferido',
        cleanBrightInterface: 'Interfaz limpia y brillante',
        easyOnEyes: 'Más cómodo para la vista',
        followsSystemPreference: 'Sigue la preferencia del sistema',
        accentColorSettings: 'Color de Acento',
        chooseAccentColor: 'Elige tu color de acento preferido',
        // Success Messages
        settingsSavedSuccessfully: '¡Configuración guardada exitosamente!',
        profileUpdatedSuccessfully: '¡Perfil actualizado exitosamente!',
        organizationUpdatedSuccessfully: '¡Organización actualizada exitosamente!',
        preferencesUpdatedSuccessfully: '¡Preferencias actualizadas exitosamente!',
        // Error Messages
        failedToUpdateProfile: 'Error al actualizar el perfil',
        failedToUpdateOrganization: 'Error al actualizar la organización',
        failedToUpdatePreferences: 'Error al actualizar las preferencias',
        failedToChangePassword: 'Error al cambiar la contraseña',
        // Loading States
        loadingProfile: 'Cargando perfil...',
        savingChanges: 'Guardando cambios...',
        // Authentication
        pleaseLoginToAccess: 'Por favor, inicia sesión para acceder a tu configuración.',
        // General Settings
        manageAccount: 'Administra tu cuenta y preferencias de eventos',
        eventPreferences: 'Preferencias de eventos',
        saved: '¡Guardado!',
        saveChanges: 'Guardar Cambios',
        // Verification Status
        emailNotVerified: 'Correo electrónico no verificado',
        phoneNotVerified: 'Número de teléfono no verificado',
        verified: 'Verificado',
        // Color Names
        blue: 'Azul',
        purple: 'Morado',
        green: 'Verde',
        red: 'Rojo',
        orange: 'Naranja',
        pink: 'Rosa',
        // Size Names
        small: 'Pequeño',
        medium: 'Mediano',
        large: 'Grande',
        // Image Management
        eventImages: 'Imágenes del Evento',
        bannerImage: 'Imagen de Banner',
        bannerImageDescription: 'Imagen de banner grande mostrada en la parte superior de tu página de evento',
        eventImage: 'Imagen del Evento',
        eventImageDescription: 'Imagen principal mostrada en listados y tarjetas de eventos',
        noBannerImage: 'No se ha subido imagen de banner',
        noEventImage: 'No se ha subido imagen del evento',
        changeBanner: 'Cambiar Banner',
        uploadBanner: 'Subir Banner',
        changeImage: 'Cambiar Imagen',
        uploadImage: 'Subir Imagen',
        uploadingImages: 'Subiendo imágenes...',
        imageGuidelines: 'Directrices de Imagen',
        supportedFormats: 'Formatos soportados',
        maxFileSize: 'Tamaño máximo de archivo',
        bannerRecommended: 'Tamaño recomendado del banner',
        imageRecommended: 'Tamaño recomendado de imagen',
        invalidImageFile: 'Archivo de imagen inválido',
        imageUploadFailed: 'Error al subir imagen',
        imageUploadSuccess: 'Imagen subida exitosamente',
        selectImageFile: 'Seleccionar archivo de imagen',
        imageProcessing: 'Procesando imagen...',
        imagePreview: 'Vista previa de imagen',
        removeImage: 'Eliminar imagen',
        cropImage: 'Recortar imagen',
        rotateImage: 'Rotar imagen',
        imageQuality: 'Calidad de imagen',
        compressImage: 'Comprimir imagen',
        dropImageHere: 'Suelta la imagen aquí o haz clic para subir'
    },
    // French translations
    fr: {
        // Common
        save: 'Enregistrer',
        cancel: 'Annuler',
        delete: 'Supprimer',
        edit: 'Modifier',
        view: 'Voir',
        loading: 'Chargement...',
        error: 'Erreur',
        success: 'Succès',
        confirm: 'Confirmer',
        back: 'Retour',
        create: 'Créer',
        update: 'Mettre à jour',
        // Navigation
        dashboard: 'Tableau de bord',
        events: 'Événements',
        settings: 'Paramètres',
        profile: 'Profil',
        logout: 'Déconnexion',
        // Settings
        personalInformation: 'Informations personnelles',
        organization: 'Organisation',
        notifications: 'Notifications',
        security: 'Sécurité',
        appearance: 'Apparence',
        language: 'Langue',
        preferences: 'Préférences',
        // Profile
        firstName: 'Prénom',
        lastName: 'Nom de famille',
        email: 'Email',
        phoneNumber: 'Numéro de téléphone',
        companyName: 'Nom de l\'entreprise',
        address: 'Adresse',
        city: 'Ville',
        state: 'État',
        zipCode: 'Code postal',
        country: 'Pays',
        // Events
        createEvent: 'Créer un événement',
        editEvent: 'Modifier l\'événement',
        eventTitle: 'Titre de l\'événement',
        eventDescription: 'Description de l\'événement',
        eventDate: 'Date de l\'événement',
        eventTime: 'Heure de l\'événement',
        eventLocation: 'Lieu de l\'événement',
        ticketPrice: 'Prix du billet',
        yourEvents: 'Vos événements',
        createYourFirstEvent: 'Créer votre premier événement',
        createFirstEventPrompt: 'Créez votre premier événement pour commencer avec EventPro.',
        eventsSubtitle: 'Gérez vos événements et suivez leurs performances',
        allEvents: 'Tous les événements',
        unpublished: 'Non publié',
        searchEvents: 'Rechercher des événements...',
        noDescriptionAvailable: 'Aucune description disponible',
        dateNotSet: 'Date non définie',
        invalidDate: 'Date invalide',
        timeNotSet: 'Heure non définie',
        invalidTime: 'Heure invalide',
        confirmDeleteEvent: 'Êtes-vous sûr de vouloir supprimer "{title}" ? Cette action ne peut pas être annulée.',
        failedToDeleteEvent: 'Échec de la suppression de l\'événement',
        failedToTogglePublish: 'Échec de {action} l\'événement',
        noEventsMatchSearch: 'Aucun événement ne correspond à votre recherche',
        adjustSearchCriteria: 'Essayez d\'ajuster vos critères de recherche ou de filtre',
        // Event Form
        createNewEvent: 'Créer un nouvel événement',
        editEventDetails: 'Modifier l\'événement',
        fillEventDetails: 'Remplissez les détails pour créer votre événement',
        updateEventDetails: 'Mettez à jour les détails de votre événement',
        basicInformation: 'Informations de base',
        eventTitleRequired: 'Le titre de l\'événement est requis',
        enterEventTitle: 'Entrez le titre de l\'événement',
        descriptionRequired: 'La description de l\'événement est requise',
        describeEventDetail: 'Décrivez votre événement en détail...',
        categoryRequired: 'La catégorie est requise',
        selectCategory: 'Sélectionner une catégorie',
        maxCapacityRequired: 'La capacité maximale doit être supérieure à 0',
        maximumAttendees: 'Nombre maximum de participants',
        eventImageUrl: 'URL de l\'image de l\'événement',
        enterImageUrl: 'https://exemple.com/image-evenement.jpg',
        // Date & Time
        dateTime: 'Date et heure',
        multiDayEvent: 'Événement de plusieurs jours: {count} jours',
        dayEvent: 'Événement de {count} jour',
        startDateTime: 'Date et heure de début',
        startDateTimeRequired: 'La date de début de l\'événement est requise',
        endDateTime: 'Date et heure de fin',
        leaveEmptySingleSession: 'Laissez vide pour les événements d\'une seule session',
        endDateAfterStart: 'La date de fin doit être postérieure à la date de début',
        registrationDeadline: 'Date limite d\'inscription',
        whenRegistrationClose: 'Quand l\'inscription doit-elle se fermer ? (optionnel)',
        registrationDeadlineBeforeEvent: 'La date limite d\'inscription doit être avant le début de l\'événement',
        // Location
        location: 'Lieu',
        onlineEvent: 'Ceci est un événement en ligne',
        venueRequired: 'Un lieu est requis pour les événements en personne',
        selectVenue: 'Sélectionner un lieu',
        locationDetails: 'Détails du lieu',
        meetingLinkPlatform: 'Lien de réunion ou détails de la plateforme',
        additionalLocationInfo: 'Informations supplémentaires sur le lieu',
        // Ticket Types
        ticketTypes: 'Types de billets',
        addTicketType: 'Ajouter un type de billet',
        ticketTypesCount: 'Types de billets',
        totalTypes: 'Types totaux',
        editable: 'Modifiable',
        locked: 'Verrouillé',
        noTicketTypesYet: 'Aucun type de billet pour le moment',
        addTicketTypesToStart: 'Ajoutez des types de billets pour commencer à vendre des billets pour votre événement',
        createFirstTicketType: 'Créer le premier type de billet',
        ticketTypeName: 'Nom du billet',
        ticketTypeNameRequired: 'Le nom du billet est requis',
        ticketDescription: 'Description',
        optionalTicketDescription: 'Description optionnelle pour ce type de billet',
        price: 'Prix (RM)',
        priceRequired: 'Un prix valide est requis',
        quantity: 'Quantité',
        quantityRequired: 'La quantité de billets doit être supérieure à 0',
        quantityGreaterThanZero: 'La quantité doit être supérieure à 0',
        ticketActive: 'Actif (disponible à l\'achat)',
        availableForPurchase: 'Disponible à l\'achat',
        createTicketType: 'Créer un type de billet',
        updateTicketType: 'Mettre à jour le type de billet',
        editTicketType: 'Modifier le type de billet',
        // Smart Editing
        smartTicketEditing: '💡 Édition intelligente des types de billets',
        whenCanEdit: '✅ Quand vous POUVEZ modifier:',
        eventDraftStatus: '• L\'événement est en statut BROUILLON',
        noTicketsSold: '• Aucun billet vendu encore',
        eventNotPublished: '• L\'événement n\'est pas publié',
        whenEditingLocked: '🔒 Quand l\'édition est VERROUILLÉE:',
        eventIsPublished: '• L\'événement est publié',
        ticketsAlreadySold: '• Des billets ont déjà été vendus',
        eventStatusNotDraft: '• Le statut de l\'événement n\'est pas BROUILLON',
        safeToEdit: 'Sûr à modifier - aucune vente encore',
        lockedToPreserve: 'Verrouillé pour préserver les données de ventes',
        ticketsSoldCount: '{count} billet(s) déjà vendu(s). L\'édition est verrouillée pour préserver les données d\'achat.',
        cannotCreateTicketTypes: 'Impossible de créer de nouveaux types de billets. {count} billet(s) ont déjà été vendus.',
        salesDataIntegrity: 'L\'événement est publié. Impossible de créer des types de billets pour préserver l\'intégrité des données de ventes.',
        // Publishing
        publishingOptions: 'Options de publication',
        publishEventImmediately: 'Publier l\'événement immédiatement (le rendre visible au public)',
        makeVisiblePublic: 'Le rendre visible au public',
        publishUnpublishLater: 'Vous pouvez toujours publier ou dépublier votre événement plus tard depuis le tableau de bord',
        currentlyPublished: 'Actuellement publié',
        currentlyUnpublished: 'Actuellement non publié',
        usePublishButtons: 'Utilisez les boutons publier/dépublier dans la liste des événements pour changer ce statut',
        changePublishStatus: 'Changer le statut de publication',
        // Validation
        fixErrorsBelow: 'Veuillez corriger les erreurs ci-dessous',
        formValidationError: 'Veuillez corriger les erreurs du formulaire',
        requiredField: 'Ce champ est requis',
        invalidInput: 'Entrée invalide',
        // Success/Error Messages
        eventCreatedSuccessfully: 'Événement et tous les types de billets créés avec succès !',
        eventUpdatedSuccessfully: 'Événement mis à jour avec succès !',
        ticketTypeCreatedSuccessfully: 'Type de billet créé avec succès !',
        ticketTypeUpdatedSuccessfully: 'Type de billet mis à jour avec succès !',
        failedToCreateEvent: 'Échec de la création de l\'événement. Veuillez réessayer.',
        failedToUpdateEvent: 'Échec de la mise à jour de l\'événement. Veuillez réessayer.',
        failedToCreateTicketType: 'Échec de la création du type de billet',
        failedToUpdateTicketType: 'Échec de la mise à jour du type de billet',
        creatingEvent: 'Création de l\'événement...',
        updatingEvent: 'Mise à jour de l\'événement...',
        redirectingToDashboard: 'Redirection vers le tableau de bord...',
        redirectingToEventDetail: 'Redirection vers les détails de l\'événement...',
        // Capacity and Venues
        capacity: 'Capacité',
        venue: 'Lieu',
        selectAVenue: 'Sélectionner un lieu',
        venueWithCapacity: '{name} - {city} (Capacité: {capacity})',
        // Categories
        category: 'Catégorie',
        technology: 'Technologie',
        business: 'Affaires',
        music: 'Musique',
        sports: 'Sports',
        education: 'Éducation',
        // Event States
        published: 'Publié',
        draft: 'Brouillon',
        online: 'En ligne',
        inPerson: 'En personne',
        // Multi-day
        multiDaySchedule: 'Programme de plusieurs jours',
        // Venue Management
        venues: 'Lieux',
        createVenue: 'Créer un lieu',
        venueName: 'Nom du lieu',
        venueNameRequired: 'Le nom du lieu est requis',
        enterVenueName: 'Entrez le nom du lieu',
        venueAddress: 'Adresse',
        addressRequired: 'L\'adresse est requise',
        enterVenueAddress: 'Entrez l\'adresse du lieu',
        venueState: 'État',
        enterState: 'Entrez l\'état',
        enterStateOptional: 'Entrez l\'état (optionnel)',
        venueCountry: 'Pays',
        countryRequired: 'Le pays est requis',
        enterCountry: 'Entrez le pays',
        venueZipCode: 'Code postal',
        enterZipCode: 'Entrez le code postal',
        enterZipCodeOptional: 'Entrez le code postal (optionnel)',
        capacityRequired: 'La capacité doit être supérieure à 0',
        maximumCapacity: 'Capacité maximale',
        contactEmail: 'Email de contact',
        contactPhone: 'Téléphone de contact',
        website: 'Site web',
        latitude: 'Latitude',
        longitude: 'Longitude',
        description: 'Description',
        venueDescription: 'Description du lieu',
        describeVenue: 'Décrivez le lieu, les commodités, les caractéristiques spéciales...',
        venueImageUrl: 'URL de l\'image du lieu',
        validEmailRequired: 'Veuillez entrer une adresse email valide',
        latitudeBetween: 'La latitude doit être entre -90 et 90',
        longitudeBetween: 'La longitude doit être entre -180 et 180',
        optionalMapIntegration: 'Optionnel: Pour l\'intégration de cartes',
        createNewVenue: 'Créer un nouveau lieu',
        venueCreatedSuccessfully: 'Lieu créé avec succès !',
        failedToCreateVenue: 'Échec de la création du lieu. Veuillez réessayer.',
        failedToFetchVenues: 'Échec du chargement des lieux',
        creatingVenue: 'Création...',
        loadingVenues: 'Chargement des lieux...',
        searchVenues: 'Rechercher des lieux...',
        allCities: 'Toutes les villes',
        noVenuesFound: 'Aucun lieu trouvé',
        adjustFilters: 'Essayez d\'ajuster vos filtres',
        getStartedFirstVenue: 'Commencez en créant votre premier lieu',
        venueLocation: 'Lieu',
        venueCapacity: 'Capacité',
        venueEvents: 'Événements',
        venueStatus: 'Statut',
        active: 'Actif',
        inactive: 'Inactif',
        eventsCount: '{count} événements',
        viewAvailableVenues: 'Voir les lieux disponibles et en créer de nouveaux',
        createNewOnes: 'Créer de nouveaux',
        // Ticket Management
        tickets: 'Billets',
        ticketManagement: 'Gestion des billets',
        manageTicketTypes: 'Gérez les types de billets, validez les billets et gérez les enregistrements',
        validateTickets: 'Valider les billets',
        checkIn: 'Enregistrement',
        ticketValidation: 'Validation des billets',
        ticketCheckIn: 'Enregistrement des billets',
        ticketsAndCheckIn: 'Billets et enregistrement',
        // Ticket Types Management
        createTicketTypeAction: 'Créer un type de billet',
        ticketTypeLimitations: '⚠️ Important: Limitations de création de types de billets',
        publishedEventsRestriction: 'Événements publiés: Les types de billets ne peuvent pas être modifiés pour préserver les données de ventes existantes',
        eventsWithSalesRestriction: 'Événements avec ventes: L\'édition des types de billets est verrouillée une fois que les billets sont vendus',
        draftStatusRequired: 'Pour la création de types de billets: Les événements doivent être en statut BROUILLON sans ventes existantes',
        alternativeCreateEvent: 'Alternative: Créer un nouvel événement si vous avez besoin de différents types de billets',
        onlyWorksForDraft: 'Ne fonctionne que pour les événements en brouillon sans ventes existantes',
        createNewEventLink: 'Créer un nouvel événement',
        manageEventsLink: 'Gérer les événements',
        // Ticket Form
        selectAnEvent: 'Sélectionner un événement',
        ticketCreationRequirements: '⚠️ Exigences de création de billets',
        eventMustBeDraft: 'L\'événement doit être en statut BROUILLON (non publié)',
        noExistingTicketSales: 'L\'événement ne doit pas avoir de ventes de billets existantes',
        mustBeEventOrganizer: 'Vous devez être l\'organisateur de l\'événement',
        editTicketsDuringCreation: 'Si cela échoue, modifiez les types de billets pendant la création de l\'événement',
        ticketEvent: 'Événement',
        eventRequired: 'L\'événement est requis',
        noEventsFound: 'Aucun événement trouvé',
        needCreateEventFirst: 'Vous devez créer un événement d\'abord avant de créer des types de billets.',
        // Ticket Types Display
        loadingTicketTypes: 'Chargement des types de billets...',
        noTicketTypesFound: 'Aucun type de billet trouvé',
        adjustFiltersOrCreate: 'Essayez d\'ajuster vos filtres ou créez votre premier type de billet',
        createFirstTicketTypePrompt: 'Créer votre premier type de billet',
        ticketType: 'Type de billet',
        event: 'Événement',
        availability: 'Disponibilité',
        status: 'Statut',
        remaining: 'restants',
        // Validation Tab
        validateTicket: 'Valider le billet',
        enterTicketNumber: 'Entrez le numéro de billet',
        validating: 'Validation...',
        validate: 'Valider',
        validTicket: 'Billet valide',
        invalidTicket: 'Billet invalide',
        ticketNumber: 'Numéro de billet',
        attendeeName: 'Participant',
        alreadyUsed: 'Déjà utilisé',
        notUsed: 'Non utilisé',
        // Check-in Tab
        checkInTicket: 'Enregistrement de billet',
        enterTicketNumberCheckIn: 'Entrez le numéro de billet pour l\'enregistrement',
        checkingIn: 'Enregistrement...',
        ticketCheckedInSuccessfully: 'Billet enregistré avec succès',
        // Ticket Warnings
        importantTicketLimitations: '⚠️ Important: Limitations de création de types de billets',
        cannotModifyPublished: '• Événements publiés: Les types de billets ne peuvent pas être modifiés pour préserver les données de ventes existantes',
        editingLockedAfterSales: '• Événements avec ventes: L\'édition des types de billets est verrouillée une fois que les billets sont vendus',
        draftStatusForCreation: '• Pour la création de types de billets: Les événements doivent être en statut BROUILLON sans ventes existantes',
        createNewEventAlternative: '• Alternative: Créer un nouvel événement si vous avez besoin de différents types de billets',
        // Business Rules
        businessRulesWarning: '⚠️ Exigences de création de billets',
        // Ticket States
        ticketInactive: 'Inactif',
        // General UI
        optional: 'optionnel',
        required: 'requis',
        // Appearance
        theme: 'Thème',
        lightMode: 'Mode clair',
        darkMode: 'Mode sombre',
        autoMode: 'Mode automatique',
        accentColor: 'Couleur d\'accent',
        fontSize: 'Taille de police',
        compactMode: 'Mode compact',
        // Time and Date
        timeFormat: 'Format d\'heure',
        dateFormat: 'Format de date',
        currency: 'Devise',
        timezone: 'Fuseau horaire',
        // Messages
        saveSuccess: 'Paramètres sauvegardés avec succès !',
        saveError: 'Échec de la sauvegarde des paramètres',
        loadError: 'Échec du chargement des données',
        // Dashboard specific
        welcomeBack: 'Bon retour, {name} !',
        virtualEvent: 'Événement virtuel',
        viewAllEvents: 'Voir tous les événements →',
        upcomingEvents: 'Événements à venir',
        unpublish: 'Dépublier',
        unlimited: 'Illimité',
        uncategorized: 'Non catégorisé',
        totalRevenue: 'Revenus totaux',
        totalEvents: 'Total des événements',
        ticketsSold: 'Billets vendus',
        revenue: 'Revenus',
        publish: 'Publier',
        noEventsYet: 'Aucun événement encore',
        maxCapacity: 'Capacité maximale',
        loadingDashboard: 'Chargement de votre tableau de bord...',
        dashboardError: 'Échec du chargement des données du tableau de bord',
        publishedCount: '{count} publiés',
        // Analytics Dashboard
        analytics: 'Analytiques',
        analyticsSubtitle: 'Aperçus complets pour vos événements',
        comprehensiveInsights: 'Aperçus complets pour vos événements',
        refreshData: 'Actualiser',
        someDataCouldntBeLoaded: 'Certaines données n\'ont pas pu être chargées :',
        // Key Metrics
        totalAttendees: 'Total des participants',
        activeEvents: 'Événements actifs',
        venuesUsed: 'Lieux utilisés',
        fromLastMonth: 'du mois dernier',
        noRevenueYet: 'Aucun revenu encore',
        noAttendeesYet: 'Aucun participant encore',
        eventsRunning: 'Événements en cours',
        noActiveEvents: 'Aucun événement actif',
        venuePartnerships: 'Partenariats de lieux',
        noVenuesYet: 'Aucun lieu encore',
        // Charts and Analytics
        topRevenueEvents: 'Événements les plus rentables',
        noEventsWithRevenueData: 'Aucun événement avec des données de revenus encore',
        createAndPublishEvents: 'Créez et publiez des événements',
        seeRevenueAnalytics: 'pour voir les analyses de revenus',
        paymentMethodDistribution: 'Répartition des méthodes de paiement',
        noPaymentDataAvailable: 'Aucune donnée de paiement disponible',
        eventCapacityUtilization: 'Utilisation de la capacité des événements',
        utilizationPercentage: 'utilisation',
        noEventsFoundForPeriod: 'Aucun événement trouvé pour la période sélectionnée',
        monthlyTrends: 'Tendances mensuelles',
        // Demographics
        genderDistribution: 'Répartition par sexe',
        noDemographicDataAvailable: 'Aucune donnée démographique disponible',
        venuePerformance: 'Performance des lieux',
        avgAttendance: 'Fréquentation moyenne',
        noVenueDataAvailable: 'Aucune donnée de lieu disponible',
        // Events Needing Attention
        eventsNeedingAttention: 'Événements nécessitant une attention',
        utilization: 'utilisation',
        daysUntilEvent: 'jours jusqu\'à l\'événement',
        potentialIssues: 'Problèmes potentiels :',
        recommendations: 'Recommandations :',
        allEventsPerformingWell: 'Tous les événements se portent bien !',
        noEventsWithLowAttendance: 'Aucun événement avec une faible fréquentation trouvé',
        // Time periods
        last7Days: '7 derniers jours',
        last30Days: '30 derniers jours',
        last3Months: '3 derniers mois',
        last6Months: '6 derniers mois',
        lastYear: 'Dernière année',
        // Status messages
        checkingAuthentication: 'Vérification de l\'authentification...',
        authenticationRequired: 'Authentification requise',
        pleaseLogInToView: 'Veuillez vous connecter pour voir le tableau de bord analytique.',
        goToLogin: 'Aller à la connexion',
        // Orders and remaining
        orders: 'commandes',
        // Organization Settings
        organizationInformation: 'Informations de l\'Organisation',
        businessLicense: 'Licence Commerciale',
        // Notification Settings
        emailNotifications: 'Notifications par Email',
        smsNotifications: 'Notifications par SMS',
        newBookings: 'Nouvelles Réservations',
        getNotifiedNewBooking: 'Recevez une notification lorsque quelqu\'un réserve votre événement',
        cancellations: 'Annulations',
        getNotifiedCancellations: 'Recevez une notification lorsque des réservations sont annulées',
        lowInventoryNotifications: 'Notifications de Stock Faible',
        dailyReports: 'Rapports Quotidiens',
        receiveDailySummary: 'Recevez un résumé quotidien des réservations et des revenus',
        weeklyReports: 'Rapports Hebdomadaires',
        receiveWeeklyAnalytics: 'Recevez des analyses et statistiques hebdomadaires',
        monthlyReports: 'Rapports Mensuels',
        // Security Settings
        securitySettings: 'Paramètres de Sécurité',
        twoFactorAuthentication: 'Authentification à Deux Facteurs',
        addExtraLayerSecurity: 'Ajoutez une couche de sécurité supplémentaire à votre compte',
        loginNotifications: 'Notifications de Connexion',
        getNotifiedNewLogins: 'Recevez une notification des nouvelles tentatives de connexion',
        sessionTimeout: 'Délai d\'Expiration de Session',
        sessionTimeoutMinutes: 'Délai d\'expiration de session (minutes)',
        // Password Settings
        changePassword: 'Changer le Mot de Passe',
        currentPassword: 'Mot de Passe Actuel',
        newPassword: 'Nouveau Mot de Passe',
        confirmNewPassword: 'Confirmer le Nouveau Mot de Passe',
        minimumCharacters: 'Minimum 6 caractères',
        passwordsDoNotMatch: 'Les nouveaux mots de passe ne correspondent pas',
        passwordTooShort: 'Le nouveau mot de passe doit contenir au moins 6 caractères',
        changingPassword: 'Changement du Mot de Passe...',
        passwordChanged: 'Mot de Passe Modifié avec Succès',
        // Event Default Settings
        eventDefaults: 'Paramètres par Défaut des Événements',
        defaultEventDuration: 'Durée par Défaut de l\'Événement',
        defaultEventDurationMinutes: 'Durée par défaut de l\'événement (minutes)',
        ticketSaleStart: 'Début de la Vente de Billets',
        ticketSaleStartDays: 'Début de la vente de billets (jours avant l\'événement)',
        defaultRefundPolicy: 'Politique de Remboursement par Défaut',
        requireApproval: 'Approbation Requise',
        requireApprovalBeforeLive: 'Approbation requise avant la publication des événements',
        autoPublish: 'Publication Automatique',
        autoPublishWhenCreated: 'Publier automatiquement les événements lors de leur création',
        // Language & Region Settings
        languageRegion: 'Langue et Région',
        languagePreferences: 'Préférences de langue et formats régionaux',
        regionalFormats: 'Formats régionaux',
        interfaceLanguage: 'Langue de l\'Interface',
        timeDateFormats: 'Formats d\'Heure et de Date',
        currencySettings: 'Paramètres de Devise',
        livePreview: 'Aperçu en Direct',
        // Time Format Settings
        hour12Format: 'Format 12 heures',
        hour24Format: 'Format 24 heures',
        // Date Format Settings
        dateFormatExample: 'Exemple : {example}',
        // Display Settings
        displaySettings: 'Paramètres d\'Affichage',
        fontSizeSmall: 'Petit',
        fontSizeMedium: 'Moyen',
        fontSizeLarge: 'Grand',
        reduceSpacing: 'Réduire l\'espacement entre les éléments',
        // Theme Settings
        themeSettings: 'Paramètres du Thème',
        choosePreferredTheme: 'Choisissez votre thème d\'interface préféré',
        cleanBrightInterface: 'Interface claire et lumineuse',
        easyOnEyes: 'Reposant pour les yeux',
        followsSystemPreference: 'Suit les préférences du système',
        accentColorSettings: 'Couleur d\'Accentuation',
        chooseAccentColor: 'Choisissez votre couleur d\'accentuation préférée',
        // Success Messages
        settingsSavedSuccessfully: 'Paramètres enregistrés avec succès !',
        profileUpdatedSuccessfully: 'Profil mis à jour avec succès !',
        organizationUpdatedSuccessfully: 'Organisation mise à jour avec succès !',
        preferencesUpdatedSuccessfully: 'Préférences mises à jour avec succès !',
        // Error Messages
        failedToUpdateProfile: 'Échec de la mise à jour du profil',
        failedToUpdateOrganization: 'Échec de la mise à jour de l\'organisation',
        failedToUpdatePreferences: 'Échec de la mise à jour des préférences',
        failedToChangePassword: 'Échec du changement de mot de passe',
        // Loading States
        loadingProfile: 'Chargement du profil...',
        savingChanges: 'Enregistrement des modifications...',
        pleaseLoginToAccess: 'Veuillez vous connecter pour accéder à vos paramètres.',
        // General Settings
        manageAccount: 'Gérez votre compte et vos préférences d\'événements',
        eventPreferences: 'Préférences d\'événements',
        saved: 'Enregistré !',
        saveChanges: 'Enregistrer les Modifications',
        // Verification Status
        emailNotVerified: 'Adresse email non vérifiée',
        phoneNotVerified: 'Numéro de téléphone non vérifié',
        verified: 'Vérifié',
        // Color Names
        blue: 'Bleu',
        purple: 'Violet',
        green: 'Vert',
        red: 'Rouge',
        orange: 'Orange',
        pink: 'Rose',
        // Size Names
        small: 'Petit',
        medium: 'Moyen',
        large: 'Grand',
        // Image Management
        eventImages: 'Images de l\'Événement',
        bannerImage: 'Image de Bannière',
        bannerImageDescription: 'Grande image de bannière affichée en haut de votre page d\'événement',
        eventImage: 'Image de l\'Événement',
        eventImageDescription: 'Image principale affichée dans les listes et cartes d\'événements',
        noBannerImage: 'Aucune image de bannière téléchargée',
        noEventImage: 'Aucune image d\'événement téléchargée',
        changeBanner: 'Changer la Bannière',
        uploadBanner: 'Télécharger la Bannière',
        changeImage: 'Changer l\'Image',
        uploadImage: 'Télécharger l\'Image',
        uploadingImages: 'Téléchargement des images...',
        imageGuidelines: 'Directives d\'Image',
        supportedFormats: 'Formats supportés',
        maxFileSize: 'Taille maximale du fichier',
        bannerRecommended: 'Taille recommandée de la bannière',
        imageRecommended: 'Taille recommandée de l\'image',
        invalidImageFile: 'Fichier image invalide',
        imageUploadFailed: 'Échec du téléchargement de l\'image',
        imageUploadSuccess: 'Image téléchargée avec succès',
        selectImageFile: 'Sélectionner un fichier image',
        imageProcessing: 'Traitement de l\'image...',
        imagePreview: 'Aperçu de l\'image',
        removeImage: 'Supprimer l\'image',
        cropImage: 'Recadrer l\'image',
        rotateImage: 'Faire pivoter l\'image',
        imageQuality: 'Qualité de l\'image',
        compressImage: 'Compresser l\'image',
        dropImageHere: 'Déposez l\'image ici ou cliquez pour télécharger'
    },
    // German translations
    de: {
        // Common
        save: 'Speichern',
        cancel: 'Abbrechen',
        delete: 'Löschen',
        edit: 'Bearbeiten',
        view: 'Anzeigen',
        loading: 'Laden...',
        error: 'Fehler',
        success: 'Erfolg',
        confirm: 'Bestätigen',
        back: 'Zurück',
        create: 'Erstellen',
        update: 'Aktualisieren',
        // Navigation
        dashboard: 'Dashboard',
        events: 'Veranstaltungen',
        settings: 'Einstellungen',
        profile: 'Profil',
        logout: 'Abmelden',
        // Settings
        personalInformation: 'Persönliche Informationen',
        organization: 'Organisation',
        notifications: 'Benachrichtigungen',
        security: 'Sicherheit',
        appearance: 'Erscheinungsbild',
        language: 'Sprache',
        preferences: 'Einstellungen',
        // Profile
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail',
        phoneNumber: 'Telefonnummer',
        companyName: 'Firmenname',
        address: 'Adresse',
        city: 'Stadt',
        state: 'Bundesland',
        zipCode: 'Postleitzahl',
        country: 'Land',
        // Events
        createEvent: 'Veranstaltung erstellen',
        editEvent: 'Veranstaltung bearbeiten',
        eventTitle: 'Veranstaltungstitel',
        eventDescription: 'Veranstaltungsbeschreibung',
        eventDate: 'Veranstaltungsdatum',
        eventTime: 'Veranstaltungszeit',
        eventLocation: 'Veranstaltungsort',
        ticketPrice: 'Ticketpreis',
        yourEvents: 'Ihre Veranstaltungen',
        createYourFirstEvent: 'Erstellen Sie Ihre erste Veranstaltung',
        createFirstEventPrompt: 'Erstellen Sie Ihre erste Veranstaltung, um mit EventPro zu beginnen.',
        eventsSubtitle: 'Verwalten Sie Ihre Veranstaltungen und verfolgen Sie ihre Leistung',
        allEvents: 'Alle Veranstaltungen',
        unpublished: 'Unveröffentlicht',
        searchEvents: 'Veranstaltungen suchen...',
        noDescriptionAvailable: 'Keine Beschreibung verfügbar',
        dateNotSet: 'Datum nicht festgelegt',
        invalidDate: 'Ungültiges Datum',
        timeNotSet: 'Zeit nicht festgelegt',
        invalidTime: 'Ungültige Zeit',
        confirmDeleteEvent: 'Sind Sie sicher, dass Sie "{title}" löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.',
        failedToDeleteEvent: 'Fehler beim Löschen der Veranstaltung',
        failedToTogglePublish: 'Fehler beim {action} der Veranstaltung',
        noEventsMatchSearch: 'Keine Veranstaltungen entsprechen Ihrer Suche',
        adjustSearchCriteria: 'Versuchen Sie, Ihre Such- oder Filterkriterien anzupassen',
        // Event Form
        createNewEvent: 'Neue Veranstaltung erstellen',
        editEventDetails: 'Veranstaltung bearbeiten',
        fillEventDetails: 'Füllen Sie die Details aus, um Ihre Veranstaltung zu erstellen',
        updateEventDetails: 'Aktualisieren Sie die Details Ihrer Veranstaltung',
        basicInformation: 'Grundinformationen',
        eventTitleRequired: 'Veranstaltungstitel ist erforderlich',
        enterEventTitle: 'Veranstaltungstitel eingeben',
        descriptionRequired: 'Veranstaltungsbeschreibung ist erforderlich',
        describeEventDetail: 'Beschreiben Sie Ihre Veranstaltung im Detail...',
        categoryRequired: 'Kategorie ist erforderlich',
        selectCategory: 'Kategorie auswählen',
        maxCapacityRequired: 'Maximale Kapazität muss größer als 0 sein',
        maximumAttendees: 'Maximale Teilnehmerzahl',
        eventImageUrl: 'Veranstaltungsbild-URL',
        enterImageUrl: 'https://beispiel.com/veranstaltungsbild.jpg',
        // Date & Time
        dateTime: 'Datum & Zeit',
        multiDayEvent: 'Mehrtägige Veranstaltung: {count} Tage',
        dayEvent: '{count}-tägige Veranstaltung',
        startDateTime: 'Startdatum & -zeit',
        startDateTimeRequired: 'Startdatum der Veranstaltung ist erforderlich',
        endDateTime: 'Enddatum & -zeit',
        leaveEmptySingleSession: 'Leer lassen für einsitzige Veranstaltungen',
        endDateAfterStart: 'Enddatum muss nach dem Startdatum liegen',
        registrationDeadline: 'Anmeldefrist',
        whenRegistrationClose: 'Wann soll die Anmeldung geschlossen werden? (optional)',
        registrationDeadlineBeforeEvent: 'Anmeldefrist muss vor Veranstaltungsbeginn liegen',
        // Location
        location: 'Ort',
        onlineEvent: 'Dies ist eine Online-Veranstaltung',
        venueRequired: 'Veranstaltungsort ist für Präsenzveranstaltungen erforderlich',
        selectVenue: 'Veranstaltungsort auswählen',
        locationDetails: 'Ortsdetails',
        meetingLinkPlatform: 'Meeting-Link oder Plattformdetails',
        additionalLocationInfo: 'Zusätzliche Ortsinformationen',
        // Ticket Types
        ticketTypes: 'Tickettypen',
        addTicketType: 'Tickettyp hinzufügen',
        ticketTypesCount: 'Tickettypen',
        totalTypes: 'Gesamttypen',
        editable: 'Bearbeitbar',
        locked: 'Gesperrt',
        noTicketTypesYet: 'Noch keine Tickettypen',
        addTicketTypesToStart: 'Fügen Sie Tickettypen hinzu, um mit dem Verkauf von Tickets für Ihre Veranstaltung zu beginnen',
        createFirstTicketType: 'Ersten Tickettyp erstellen',
        ticketTypeName: 'Ticketname',
        ticketTypeNameRequired: 'Ticketname ist erforderlich',
        ticketDescription: 'Beschreibung',
        optionalTicketDescription: 'Optionale Beschreibung für diesen Tickettyp',
        price: 'Preis (RM)',
        priceRequired: 'Gültiger Preis ist erforderlich',
        quantity: 'Menge',
        quantityRequired: 'Ticketmenge muss größer als 0 sein',
        quantityGreaterThanZero: 'Menge muss größer als 0 sein',
        ticketActive: 'Aktiv (zum Kauf verfügbar)',
        availableForPurchase: 'Zum Kauf verfügbar',
        createTicketType: 'Tickettyp erstellen',
        updateTicketType: 'Tickettyp aktualisieren',
        editTicketType: 'Tickettyp bearbeiten',
        // Smart Editing
        smartTicketEditing: '💡 Intelligente Tickettyp-Bearbeitung',
        whenCanEdit: '✅ Wann Sie bearbeiten KÖNNEN:',
        eventDraftStatus: '• Veranstaltung ist im ENTWURF-Status',
        noTicketsSold: '• Noch keine Tickets verkauft',
        eventNotPublished: '• Veranstaltung ist nicht veröffentlicht',
        whenEditingLocked: '🔒 Wann die Bearbeitung GESPERRT ist:',
        eventIsPublished: '• Veranstaltung ist veröffentlicht',
        ticketsAlreadySold: '• Tickets wurden bereits verkauft',
        eventStatusNotDraft: '• Veranstaltungsstatus ist nicht ENTWURF',
        safeToEdit: 'Sicher zu bearbeiten - noch keine Verkäufe',
        lockedToPreserve: 'Gesperrt zur Erhaltung der Verkaufsdaten',
        ticketsSoldCount: '{count} Ticket(s) bereits verkauft. Bearbeitung ist gesperrt, um Kaufdaten zu erhalten.',
        cannotCreateTicketTypes: 'Kann keine neuen Tickettypen erstellen. {count} Ticket(s) wurden bereits verkauft.',
        salesDataIntegrity: 'Veranstaltung ist veröffentlicht. Kann keine Tickettypen erstellen, um die Integrität der Verkaufsdaten zu erhalten.',
        // Publishing
        publishingOptions: 'Veröffentlichungsoptionen',
        publishEventImmediately: 'Veranstaltung sofort veröffentlichen (für die Öffentlichkeit sichtbar machen)',
        makeVisiblePublic: 'Für die Öffentlichkeit sichtbar machen',
        publishUnpublishLater: 'Sie können Ihre Veranstaltung später jederzeit vom Dashboard aus veröffentlichen oder zurückziehen',
        currentlyPublished: 'Derzeit veröffentlicht',
        currentlyUnpublished: 'Derzeit nicht veröffentlicht',
        usePublishButtons: 'Verwenden Sie die Veröffentlichen/Zurückziehen-Buttons in der Veranstaltungsliste, um diesen Status zu ändern',
        changePublishStatus: 'Veröffentlichungsstatus ändern',
        // Validation
        fixErrorsBelow: 'Bitte beheben Sie die Fehler unten',
        formValidationError: 'Bitte beheben Sie Formularfehler',
        requiredField: 'Dieses Feld ist erforderlich',
        invalidInput: 'Ungültige Eingabe',
        // Success/Error Messages
        eventCreatedSuccessfully: 'Veranstaltung und alle Tickettypen erfolgreich erstellt!',
        eventUpdatedSuccessfully: 'Veranstaltung erfolgreich aktualisiert!',
        ticketTypeCreatedSuccessfully: 'Tickettyp erfolgreich erstellt!',
        ticketTypeUpdatedSuccessfully: 'Tickettyp erfolgreich aktualisiert!',
        failedToCreateEvent: 'Fehler beim Erstellen der Veranstaltung. Bitte versuchen Sie es erneut.',
        failedToUpdateEvent: 'Fehler beim Aktualisieren der Veranstaltung. Bitte versuchen Sie es erneut.',
        failedToCreateTicketType: 'Fehler beim Erstellen des Tickettyps',
        failedToUpdateTicketType: 'Fehler beim Aktualisieren des Tickettyps',
        creatingEvent: 'Veranstaltung wird erstellt...',
        updatingEvent: 'Veranstaltung wird aktualisiert...',
        redirectingToDashboard: 'Weiterleitung zum Dashboard...',
        redirectingToEventDetail: 'Weiterleitung zu Veranstaltungsdetails...',
        // Capacity and Venues
        capacity: 'Kapazität',
        venue: 'Veranstaltungsort',
        selectAVenue: 'Veranstaltungsort auswählen',
        venueWithCapacity: '{name} - {city} (Kapazität: {capacity})',
        // Categories
        category: 'Kategorie',
        technology: 'Technologie',
        business: 'Geschäft',
        music: 'Musik',
        sports: 'Sport',
        education: 'Bildung',
        // Event States
        published: 'Veröffentlicht',
        draft: 'Entwurf',
        online: 'Online',
        inPerson: 'Präsenz',
        // Multi-day
        multiDaySchedule: 'Mehrtägiger Zeitplan',
        // Venue Management
        venues: 'Veranstaltungsorte',
        createVenue: 'Veranstaltungsort erstellen',
        venueName: 'Name des Veranstaltungsortes',
        venueNameRequired: 'Name des Veranstaltungsortes ist erforderlich',
        enterVenueName: 'Name des Veranstaltungsortes eingeben',
        venueAddress: 'Adresse',
        addressRequired: 'Adresse ist erforderlich',
        enterVenueAddress: 'Adresse des Veranstaltungsortes eingeben',
        venueState: 'Bundesland',
        enterState: 'Bundesland eingeben',
        enterStateOptional: 'Bundesland eingeben (optional)',
        venueCountry: 'Land',
        countryRequired: 'Land ist erforderlich',
        enterCountry: 'Land eingeben',
        venueZipCode: 'Postleitzahl',
        enterZipCode: 'Postleitzahl eingeben',
        enterZipCodeOptional: 'Postleitzahl eingeben (optional)',
        capacityRequired: 'Kapazität muss größer als 0 sein',
        maximumCapacity: 'Maximale Kapazität',
        contactEmail: 'Kontakt-E-Mail',
        contactPhone: 'Kontakttelefon',
        website: 'Website',
        latitude: 'Breitengrad',
        longitude: 'Längengrad',
        description: 'Beschreibung',
        venueDescription: 'Beschreibung des Veranstaltungsortes',
        describeVenue: 'Beschreiben Sie den Veranstaltungsort, Annehmlichkeiten, besondere Merkmale...',
        venueImageUrl: 'Bild-URL des Veranstaltungsortes',
        validEmailRequired: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
        latitudeBetween: 'Breitengrad muss zwischen -90 und 90 liegen',
        longitudeBetween: 'Längengrad muss zwischen -180 und 180 liegen',
        optionalMapIntegration: 'Optional: Für Kartenintegration',
        createNewVenue: 'Neuen Veranstaltungsort erstellen',
        venueCreatedSuccessfully: 'Veranstaltungsort erfolgreich erstellt!',
        failedToCreateVenue: 'Fehler beim Erstellen des Veranstaltungsortes. Bitte versuchen Sie es erneut.',
        failedToFetchVenues: 'Fehler beim Laden der Veranstaltungsorte',
        creatingVenue: 'Wird erstellt...',
        loadingVenues: 'Veranstaltungsorte werden geladen...',
        searchVenues: 'Veranstaltungsorte suchen...',
        allCities: 'Alle Städte',
        noVenuesFound: 'Keine Veranstaltungsorte gefunden',
        adjustFilters: 'Versuchen Sie, Ihre Filter anzupassen',
        getStartedFirstVenue: 'Beginnen Sie mit der Erstellung Ihres ersten Veranstaltungsortes',
        venueLocation: 'Ort',
        venueCapacity: 'Kapazität',
        venueEvents: 'Veranstaltungen',
        venueStatus: 'Status',
        active: 'Aktiv',
        inactive: 'Inaktiv',
        eventsCount: '{count} Veranstaltungen',
        viewAvailableVenues: 'Verfügbare Veranstaltungsorte anzeigen und neue erstellen',
        createNewOnes: 'Neue erstellen',
        // Ticket Management
        tickets: 'Tickets',
        ticketManagement: 'Ticket-Verwaltung',
        manageTicketTypes: 'Verwalten Sie Tickettypen, validieren Sie Tickets und bearbeiten Sie Check-ins',
        validateTickets: 'Tickets validieren',
        checkIn: 'Check-in',
        ticketValidation: 'Ticket-Validierung',
        ticketCheckIn: 'Ticket-Check-in',
        ticketsAndCheckIn: 'Tickets & Check-in',
        // Ticket Types Management
        createTicketTypeAction: 'Tickettyp erstellen',
        ticketTypeLimitations: '⚠️ Wichtig: Einschränkungen bei der Erstellung von Tickettypen',
        publishedEventsRestriction: 'Veröffentlichte Veranstaltungen: Tickettypen können nicht geändert werden, um bestehende Verkaufsdaten zu erhalten',
        eventsWithSalesRestriction: 'Veranstaltungen mit Verkäufen: Die Bearbeitung von Tickettypen wird gesperrt, sobald Tickets verkauft werden',
        draftStatusRequired: 'Für die Erstellung von Tickettypen: Veranstaltungen müssen im ENTWURF-Status ohne bestehende Verkäufe sein',
        alternativeCreateEvent: 'Alternative: Erstellen Sie eine neue Veranstaltung, wenn Sie andere Tickettypen benötigen',
        onlyWorksForDraft: 'Funktioniert nur für Entwurfs-Veranstaltungen ohne bestehende Verkäufe',
        createNewEventLink: 'Neue Veranstaltung erstellen',
        manageEventsLink: 'Veranstaltungen verwalten',
        // Ticket Form
        selectAnEvent: 'Veranstaltung auswählen',
        ticketCreationRequirements: '⚠️ Anforderungen für die Ticket-Erstellung',
        eventMustBeDraft: 'Veranstaltung muss im ENTWURF-Status sein (nicht veröffentlicht)',
        noExistingTicketSales: 'Veranstaltung darf keine bestehenden Ticketverkäufe haben',
        mustBeEventOrganizer: 'Sie müssen der Veranstaltungsorganisator sein',
        editTicketsDuringCreation: 'Falls dies fehlschlägt, bearbeiten Sie Tickettypen während der Veranstaltungserstellung',
        ticketEvent: 'Veranstaltung',
        eventRequired: 'Veranstaltung ist erforderlich',
        noEventsFound: 'Keine Veranstaltungen gefunden',
        needCreateEventFirst: 'Sie müssen zuerst eine Veranstaltung erstellen, bevor Sie Tickettypen erstellen.',
        // Ticket Types Display
        loadingTicketTypes: 'Tickettypen werden geladen...',
        noTicketTypesFound: 'Keine Tickettypen gefunden',
        adjustFiltersOrCreate: 'Versuchen Sie, Ihre Filter anzupassen oder erstellen Sie Ihren ersten Tickettyp',
        createFirstTicketTypePrompt: 'Erstellen Sie Ihren ersten Tickettyp',
        ticketType: 'Tickettyp',
        event: 'Veranstaltung',
        availability: 'Verfügbarkeit',
        status: 'Status',
        remaining: 'verbleibend',
        // Validation Tab
        validateTicket: 'Ticket validieren',
        enterTicketNumber: 'Ticketnummer eingeben',
        validating: 'Wird validiert...',
        validate: 'Validieren',
        validTicket: 'Gültiges Ticket',
        invalidTicket: 'Ungültiges Ticket',
        ticketNumber: 'Ticketnummer',
        attendeeName: 'Teilnehmer',
        alreadyUsed: 'Bereits verwendet',
        notUsed: 'Nicht verwendet',
        // Check-in Tab
        checkInTicket: 'Ticket-Check-in',
        enterTicketNumberCheckIn: 'Ticketnummer für Check-in eingeben',
        checkingIn: 'Check-in läuft...',
        ticketCheckedInSuccessfully: 'Ticket erfolgreich eingecheckt',
        // Ticket Warnings
        importantTicketLimitations: '⚠️ Wichtig: Einschränkungen bei der Erstellung von Tickettypen',
        cannotModifyPublished: '• Veröffentlichte Veranstaltungen: Tickettypen können nicht geändert werden, um bestehende Verkaufsdaten zu erhalten',
        editingLockedAfterSales: '• Veranstaltungen mit Verkäufen: Die Bearbeitung von Tickettypen wird gesperrt, sobald Tickets verkauft werden',
        draftStatusForCreation: '• Für die Erstellung von Tickettypen: Veranstaltungen müssen im ENTWURF-Status ohne bestehende Verkäufe sein',
        createNewEventAlternative: '• Alternative: Erstellen Sie eine neue Veranstaltung, wenn Sie andere Tickettypen benötigen',
        // Business Rules
        businessRulesWarning: '⚠️ Anforderungen für die Ticket-Erstellung',
        // Ticket States
        ticketInactive: 'Inaktiv',
        // General UI
        optional: 'optional',
        required: 'erforderlich',
        // Appearance
        theme: 'Design',
        lightMode: 'Heller Modus',
        darkMode: 'Dunkler Modus',
        autoMode: 'Automatischer Modus',
        accentColor: 'Akzentfarbe',
        fontSize: 'Schriftgröße',
        compactMode: 'Kompakter Modus',
        // Time and Date
        timeFormat: 'Zeitformat',
        dateFormat: 'Datumsformat',
        currency: 'Währung',
        timezone: 'Zeitzone',
        // Messages
        saveSuccess: 'Einstellungen erfolgreich gespeichert!',
        saveError: 'Fehler beim Speichern der Einstellungen',
        loadError: 'Fehler beim Laden der Daten',
        // Dashboard specific
        welcomeBack: 'Willkommen zurück, {name}!',
        virtualEvent: 'Virtuelle Veranstaltung',
        viewAllEvents: 'Alle Veranstaltungen anzeigen →',
        upcomingEvents: 'Bevorstehende Veranstaltungen',
        unpublish: 'Zurückziehen',
        unlimited: 'Unbegrenzt',
        uncategorized: 'Unkategorisiert',
        totalRevenue: 'Gesamtumsatz',
        totalEvents: 'Gesamte Veranstaltungen',
        ticketsSold: 'Verkaufte Tickets',
        revenue: 'Umsatz',
        publish: 'Veröffentlichen',
        noEventsYet: 'Noch keine Veranstaltungen',
        maxCapacity: 'Maximale Kapazität',
        loadingDashboard: 'Dashboard wird geladen...',
        dashboardError: 'Fehler beim Laden der Dashboard-Daten',
        publishedCount: '{count} veröffentlicht',
        // Analytics Dashboard
        analytics: 'Analysen',
        analyticsSubtitle: 'Umfassende Einblicke für Ihre Veranstaltungen',
        comprehensiveInsights: 'Umfassende Einblicke für Ihre Veranstaltungen',
        refreshData: 'Aktualisieren',
        someDataCouldntBeLoaded: 'Einige Daten konnten nicht geladen werden:',
        // Key Metrics
        totalAttendees: 'Gesamtteilnehmer',
        activeEvents: 'Aktive Veranstaltungen',
        venuesUsed: 'Verwendete Veranstaltungsorte',
        fromLastMonth: 'vom letzten Monat',
        noRevenueYet: 'Noch kein Umsatz',
        noAttendeesYet: 'Noch keine Teilnehmer',
        eventsRunning: 'Laufende Veranstaltungen',
        noActiveEvents: 'Keine aktiven Veranstaltungen',
        venuePartnerships: 'Veranstaltungsort-Partnerschaften',
        noVenuesYet: 'Noch keine Veranstaltungsorte',
        // Charts and Analytics
        topRevenueEvents: 'Umsatzstärkste Veranstaltungen',
        noEventsWithRevenueData: 'Noch keine Veranstaltungen mit Umsatzdaten',
        createAndPublishEvents: 'Erstellen und veröffentlichen Sie Veranstaltungen',
        seeRevenueAnalytics: 'um Umsatzanalysen zu sehen',
        paymentMethodDistribution: 'Verteilung der Zahlungsmethoden',
        noPaymentDataAvailable: 'Keine Zahlungsdaten verfügbar',
        eventCapacityUtilization: 'Kapazitätsauslastung der Veranstaltungen',
        utilizationPercentage: 'Auslastung',
        noEventsFoundForPeriod: 'Keine Veranstaltungen für den gewählten Zeitraum gefunden',
        monthlyTrends: 'Monatliche Trends',
        // Demographics
        genderDistribution: 'Geschlechterverteilung',
        noDemographicDataAvailable: 'Keine demografischen Daten verfügbar',
        venuePerformance: 'Veranstaltungsort-Performance',
        avgAttendance: 'Durchschnittliche Teilnahme',
        noVenueDataAvailable: 'Keine Veranstaltungsort-Daten verfügbar',
        // Events Needing Attention
        eventsNeedingAttention: 'Veranstaltungen, die Aufmerksamkeit benötigen',
        utilization: 'Auslastung',
        daysUntilEvent: 'Tage bis zur Veranstaltung',
        potentialIssues: 'Mögliche Probleme:',
        recommendations: 'Empfehlungen:',
        allEventsPerformingWell: 'Alle Veranstaltungen laufen gut!',
        noEventsWithLowAttendance: 'Keine Veranstaltungen mit geringer Teilnahme gefunden',
        // Time periods
        last7Days: 'Letzte 7 Tage',
        last30Days: 'Letzte 30 Tage',
        last3Months: 'Letzte 3 Monate',
        last6Months: 'Letzte 6 Monate',
        lastYear: 'Letztes Jahr',
        // Status messages
        checkingAuthentication: 'Authentifizierung wird überprüft...',
        authenticationRequired: 'Authentifizierung erforderlich',
        pleaseLogInToView: 'Bitte melden Sie sich an, um das Analyse-Dashboard zu sehen.',
        goToLogin: 'Zur Anmeldung',
        // Orders and remaining
        orders: 'Bestellungen',
        // Organization Settings
        organizationInformation: 'Organisationsinformationen',
        businessLicense: 'Gewerbeschein',
        // Notification Settings
        emailNotifications: 'E-Mail-Benachrichtigungen',
        smsNotifications: 'SMS-Benachrichtigungen',
        newBookings: 'Neue Buchungen',
        getNotifiedNewBooking: 'Benachrichtigung erhalten, wenn jemand Ihre Veranstaltung bucht',
        cancellations: 'Stornierungen',
        getNotifiedCancellations: 'Benachrichtigung erhalten, wenn Buchungen storniert werden',
        lowInventoryNotifications: 'Benachrichtigungen bei niedrigem Bestand',
        dailyReports: 'Tägliche Berichte',
        receiveDailySummary: 'Tägliche Zusammenfassung von Buchungen und Umsätzen erhalten',
        weeklyReports: 'Wöchentliche Berichte',
        receiveWeeklyAnalytics: 'Wöchentliche Analysen und Einblicke erhalten',
        monthlyReports: 'Monatliche Berichte',
        // Security Settings
        securitySettings: 'Sicherheitseinstellungen',
        twoFactorAuthentication: 'Zwei-Faktor-Authentifizierung',
        addExtraLayerSecurity: 'Fügen Sie Ihrem Konto eine zusätzliche Sicherheitsebene hinzu',
        loginNotifications: 'Anmelde-Benachrichtigungen',
        getNotifiedNewLogins: 'Benachrichtigung bei neuen Anmeldeversuchen erhalten',
        sessionTimeout: 'Sitzungszeitüberschreitung',
        sessionTimeoutMinutes: 'Sitzungszeitüberschreitung (Minuten)',
        // Password Settings
        changePassword: 'Passwort ändern',
        currentPassword: 'Aktuelles Passwort',
        newPassword: 'Neues Passwort',
        confirmNewPassword: 'Neues Passwort bestätigen',
        minimumCharacters: 'Mindestens 6 Zeichen',
        passwordsDoNotMatch: 'Die neuen Passwörter stimmen nicht überein',
        passwordTooShort: 'Das neue Passwort muss mindestens 6 Zeichen lang sein',
        changingPassword: 'Passwort wird geändert...',
        passwordChanged: 'Passwort erfolgreich geändert',
        // Event Default Settings
        eventDefaults: 'Standard-Veranstaltungseinstellungen',
        defaultEventDuration: 'Standard-Veranstaltungsdauer',
        defaultEventDurationMinutes: 'Standard-Veranstaltungsdauer (Minuten)',
        ticketSaleStart: 'Ticketverkaufsstart',
        ticketSaleStartDays: 'Ticketverkaufsstart (Tage vor der Veranstaltung)',
        defaultRefundPolicy: 'Standard-Rückerstattungsrichtlinie',
        requireApproval: 'Genehmigung erforderlich',
        requireApprovalBeforeLive: 'Genehmigung vor Veröffentlichung erforderlich',
        autoPublish: 'Automatische Veröffentlichung',
        autoPublishWhenCreated: 'Veranstaltungen bei Erstellung automatisch veröffentlichen',
        // Language & Region Settings
        languageRegion: 'Sprache & Region',
        languagePreferences: 'Spracheinstellungen und regionale Formate',
        regionalFormats: 'Regionale Formate',
        interfaceLanguage: 'Oberflächensprache',
        timeDateFormats: 'Zeit- und Datumsformate',
        currencySettings: 'Währungseinstellungen',
        livePreview: 'Live-Vorschau',
        // Time Format Settings
        hour12Format: '12-Stunden-Format',
        hour24Format: '24-Stunden-Format',
        // Date Format Settings
        dateFormatExample: 'Beispiel: {example}',
        // Display Settings
        displaySettings: 'Anzeigeeinstellungen',
        fontSizeSmall: 'Klein',
        fontSizeMedium: 'Mittel',
        fontSizeLarge: 'Groß',
        reduceSpacing: 'Abstand zwischen Elementen reduzieren',
        // Theme Settings
        themeSettings: 'Design-Einstellungen',
        choosePreferredTheme: 'Wählen Sie Ihr bevorzugtes Oberflächendesign',
        cleanBrightInterface: 'Saubere und helle Oberfläche',
        easyOnEyes: 'Augenschonend',
        followsSystemPreference: 'Folgt Systemeinstellung',
        accentColorSettings: 'Akzentfarbe',
        chooseAccentColor: 'Wählen Sie Ihre bevorzugte Akzentfarbe',
        // Success Messages
        settingsSavedSuccessfully: 'Einstellungen erfolgreich gespeichert!',
        profileUpdatedSuccessfully: 'Profil erfolgreich aktualisiert!',
        organizationUpdatedSuccessfully: 'Organisation erfolgreich aktualisiert!',
        preferencesUpdatedSuccessfully: 'Einstellungen erfolgreich aktualisiert!',
        // Error Messages
        failedToUpdateProfile: 'Fehler beim Aktualisieren des Profils',
        failedToUpdateOrganization: 'Fehler beim Aktualisieren der Organisation',
        failedToUpdatePreferences: 'Fehler beim Aktualisieren der Einstellungen',
        failedToChangePassword: 'Fehler beim Ändern des Passworts',
        // Loading States
        loadingProfile: 'Profil wird geladen...',
        savingChanges: 'Änderungen werden gespeichert...',
        // Authentication (already exists as authenticationRequired, but adding full context)
        pleaseLoginToAccess: 'Bitte melden Sie sich an, um auf Ihre Einstellungen zuzugreifen.',
        // General Settings
        manageAccount: 'Verwalten Sie Ihr Konto und Ihre Veranstaltungseinstellungen',
        eventPreferences: 'Veranstaltungseinstellungen',
        saved: 'Gespeichert!',
        saveChanges: 'Änderungen speichern',
        // Verification Status
        emailNotVerified: 'E-Mail-Adresse nicht verifiziert',
        phoneNotVerified: 'Telefonnummer nicht verifiziert',
        verified: 'Verifiziert',
        // Color Names (for dynamic translation)
        blue: 'Blau',
        purple: 'Violett',
        green: 'Grün',
        red: 'Rot',
        orange: 'Orange',
        pink: 'Rosa',
        // Size Names (already exist as small, medium, large but adding for consistency)
        small: 'Klein',
        medium: 'Mittel',
        large: 'Groß',
        // Image Management
        eventImages: 'Veranstaltungsbilder',
        bannerImage: 'Banner-Bild',
        bannerImageDescription: 'Großes Banner-Bild, das oben auf Ihrer Veranstaltungsseite angezeigt wird',
        eventImage: 'Veranstaltungsbild',
        eventImageDescription: 'Hauptbild, das in Veranstaltungslisten und -karten angezeigt wird',
        noBannerImage: 'Kein Banner-Bild hochgeladen',
        noEventImage: 'Kein Veranstaltungsbild hochgeladen',
        changeBanner: 'Banner Ändern',
        uploadBanner: 'Banner Hochladen',
        changeImage: 'Bild Ändern',
        uploadImage: 'Bild Hochladen',
        uploadingImages: 'Bilder werden hochgeladen...',
        imageGuidelines: 'Bild-Richtlinien',
        supportedFormats: 'Unterstützte Formate',
        maxFileSize: 'Maximale Dateigröße',
        bannerRecommended: 'Empfohlene Banner-Größe',
        imageRecommended: 'Empfohlene Bildgröße',
        invalidImageFile: 'Ungültige Bilddatei',
        imageUploadFailed: 'Bild-Upload fehlgeschlagen',
        imageUploadSuccess: 'Bild erfolgreich hochgeladen',
        selectImageFile: 'Bilddatei auswählen',
        imageProcessing: 'Bild wird verarbeitet...',
        imagePreview: 'Bildvorschau',
        removeImage: 'Bild entfernen',
        cropImage: 'Bild zuschneiden',
        rotateImage: 'Bild drehen',
        imageQuality: 'Bildqualität',
        compressImage: 'Bild komprimieren',
        dropImageHere: 'Ziehen Sie Ihr Bild hierher oder klicken Sie zum Hochladen'
    },
    // Italian translations
    it: {
        // Common
        save: 'Salva',
        cancel: 'Annulla',
        delete: 'Elimina',
        edit: 'Modifica',
        view: 'Visualizza',
        loading: 'Caricamento...',
        error: 'Errore',
        success: 'Successo',
        confirm: 'Conferma',
        back: 'Indietro',
        create: 'Crea',
        update: 'Aggiorna',
        // Navigation
        dashboard: 'Dashboard',
        events: 'Eventi',
        settings: 'Impostazioni',
        profile: 'Profilo',
        logout: 'Disconnetti',
        // Settings
        personalInformation: 'Informazioni personali',
        organization: 'Organizzazione',
        notifications: 'Notifiche',
        security: 'Sicurezza',
        appearance: 'Aspetto',
        language: 'Lingua',
        preferences: 'Preferenze',
        // Profile
        firstName: 'Nome',
        lastName: 'Cognome',
        email: 'Email',
        phoneNumber: 'Numero di telefono',
        companyName: 'Nome dell\'azienda',
        address: 'Indirizzo',
        city: 'Città',
        state: 'Stato',
        zipCode: 'Codice postale',
        country: 'Paese',
        // Events
        createEvent: 'Crea evento',
        editEvent: 'Modifica evento',
        eventTitle: 'Titolo dell\'evento',
        eventDescription: 'Descrizione dell\'evento',
        eventDate: 'Data dell\'evento',
        eventTime: 'Ora dell\'evento',
        eventLocation: 'Luogo dell\'evento',
        ticketPrice: 'Prezzo del biglietto',
        yourEvents: 'I tuoi eventi',
        createYourFirstEvent: 'Crea il tuo primo evento',
        createFirstEventPrompt: 'Crea il tuo primo evento per iniziare con EventPro.',
        eventsSubtitle: 'Gestisci i tuoi eventi e monitora le loro prestazioni',
        allEvents: 'Tutti gli eventi',
        unpublished: 'Non pubblicato',
        searchEvents: 'Cerca eventi...',
        noDescriptionAvailable: 'Nessuna descrizione disponibile',
        dateNotSet: 'Data non impostata',
        invalidDate: 'Data non valida',
        timeNotSet: 'Ora non impostata',
        invalidTime: 'Ora non valida',
        confirmDeleteEvent: 'Sei sicuro di voler eliminare "{title}"? Questa azione non può essere annullata.',
        failedToDeleteEvent: 'Impossibile eliminare l\'evento',
        failedToTogglePublish: 'Impossibile {action} l\'evento',
        noEventsMatchSearch: 'Nessun evento corrisponde alla tua ricerca',
        adjustSearchCriteria: 'Prova ad aggiustare i tuoi criteri di ricerca o filtro',
        // Event Form
        createNewEvent: 'Crea nuovo evento',
        editEventDetails: 'Modifica evento',
        fillEventDetails: 'Compila i dettagli per creare il tuo evento',
        updateEventDetails: 'Aggiorna i dettagli del tuo evento',
        basicInformation: 'Informazioni di base',
        eventTitleRequired: 'Il titolo dell\'evento è obbligatorio',
        enterEventTitle: 'Inserisci il titolo dell\'evento',
        descriptionRequired: 'La descrizione dell\'evento è obbligatoria',
        describeEventDetail: 'Descrivi il tuo evento in dettaglio...',
        categoryRequired: 'La categoria è obbligatoria',
        selectCategory: 'Seleziona categoria',
        maxCapacityRequired: 'La capacità massima deve essere maggiore di 0',
        maximumAttendees: 'Numero massimo di partecipanti',
        eventImageUrl: 'URL immagine evento',
        enterImageUrl: 'https://esempio.com/immagine-evento.jpg',
        // Date & Time
        dateTime: 'Data e ora',
        multiDayEvent: 'Evento di più giorni: {count} giorni',
        dayEvent: 'Evento di {count} giorno',
        startDateTime: 'Data e ora di inizio',
        startDateTimeRequired: 'La data di inizio dell\'evento è obbligatoria',
        endDateTime: 'Data e ora di fine',
        leaveEmptySingleSession: 'Lascia vuoto per eventi a sessione singola',
        endDateAfterStart: 'La data di fine deve essere dopo la data di inizio',
        registrationDeadline: 'Scadenza registrazione',
        whenRegistrationClose: 'Quando dovrebbe chiudersi la registrazione? (opzionale)',
        registrationDeadlineBeforeEvent: 'La scadenza della registrazione deve essere prima dell\'inizio dell\'evento',
        // Location
        location: 'Luogo',
        onlineEvent: 'Questo è un evento online',
        venueRequired: 'Il luogo è obbligatorio per eventi in presenza',
        selectVenue: 'Seleziona luogo',
        locationDetails: 'Dettagli del luogo',
        meetingLinkPlatform: 'Link della riunione o dettagli della piattaforma',
        additionalLocationInfo: 'Informazioni aggiuntive sul luogo',
        // Ticket Types
        ticketTypes: 'Tipi di biglietto',
        addTicketType: 'Aggiungi tipo di biglietto',
        ticketTypesCount: 'Tipi di biglietto',
        totalTypes: 'Tipi totali',
        editable: 'Modificabile',
        locked: 'Bloccato',
        noTicketTypesYet: 'Nessun tipo di biglietto ancora',
        addTicketTypesToStart: 'Aggiungi tipi di biglietto per iniziare a vendere biglietti per il tuo evento',
        createFirstTicketType: 'Crea primo tipo di biglietto',
        ticketTypeName: 'Nome biglietto',
        ticketTypeNameRequired: 'Il nome del biglietto è obbligatorio',
        ticketDescription: 'Descrizione',
        optionalTicketDescription: 'Descrizione opzionale per questo tipo di biglietto',
        price: 'Prezzo (RM)',
        priceRequired: 'È richiesto un prezzo valido',
        quantity: 'Quantità',
        quantityRequired: 'La quantità di biglietti deve essere maggiore di 0',
        quantityGreaterThanZero: 'La quantità deve essere maggiore di 0',
        ticketActive: 'Attivo (disponibile per l\'acquisto)',
        availableForPurchase: 'Disponibile per l\'acquisto',
        createTicketType: 'Crea tipo di biglietto',
        updateTicketType: 'Aggiorna tipo di biglietto',
        editTicketType: 'Modifica tipo di biglietto',
        // Smart Editing
        smartTicketEditing: '💡 Modifica intelligente dei tipi di biglietto',
        whenCanEdit: '✅ Quando PUOI modificare:',
        eventDraftStatus: '• L\'evento è in stato BOZZA',
        noTicketsSold: '• Nessun biglietto venduto ancora',
        eventNotPublished: '• L\'evento non è pubblicato',
        whenEditingLocked: '🔒 Quando la modifica è BLOCCATA:',
        eventIsPublished: '• L\'evento è pubblicato',
        ticketsAlreadySold: '• I biglietti sono già stati venduti',
        eventStatusNotDraft: '• Lo stato dell\'evento non è BOZZA',
        safeToEdit: 'Sicuro da modificare - nessuna vendita ancora',
        lockedToPreserve: 'Bloccato per preservare i dati di vendita',
        ticketsSoldCount: '{count} biglietto/i già venduto/i. La modifica è bloccata per preservare i dati di acquisto.',
        cannotCreateTicketTypes: 'Impossibile creare nuovi tipi di biglietto. {count} biglietto/i sono già stati venduti.',
        salesDataIntegrity: 'L\'evento è pubblicato. Impossibile creare tipi di biglietto per preservare l\'integrità dei dati di vendita.',
        // Publishing
        publishingOptions: 'Opzioni di pubblicazione',
        publishEventImmediately: 'Pubblica evento immediatamente (rendilo visibile al pubblico)',
        makeVisiblePublic: 'Rendilo visibile al pubblico',
        publishUnpublishLater: 'Puoi sempre pubblicare o annullare la pubblicazione del tuo evento più tardi dalla dashboard',
        currentlyPublished: 'Attualmente pubblicato',
        currentlyUnpublished: 'Attualmente non pubblicato',
        usePublishButtons: 'Usa i pulsanti pubblica/annulla pubblicazione nell\'elenco eventi per cambiare questo stato',
        changePublishStatus: 'Cambia stato di pubblicazione',
        // Validation
        fixErrorsBelow: 'Si prega di correggere gli errori sotto',
        formValidationError: 'Si prega di correggere gli errori del modulo',
        requiredField: 'Questo campo è obbligatorio',
        invalidInput: 'Input non valido',
        // Success/Error Messages
        eventCreatedSuccessfully: 'Evento e tutti i tipi di biglietto creati con successo!',
        eventUpdatedSuccessfully: 'Evento aggiornato con successo!',
        ticketTypeCreatedSuccessfully: 'Tipo di biglietto creato con successo!',
        ticketTypeUpdatedSuccessfully: 'Tipo di biglietto aggiornato con successo!',
        failedToCreateEvent: 'Impossibile creare l\'evento. Si prega di riprovare.',
        failedToUpdateEvent: 'Impossibile aggiornare l\'evento. Si prega di riprovare.',
        failedToCreateTicketType: 'Impossibile creare il tipo di biglietto',
        failedToUpdateTicketType: 'Impossibile aggiornare il tipo di biglietto',
        creatingEvent: 'Creazione evento...',
        updatingEvent: 'Aggiornamento evento...',
        redirectingToDashboard: 'Reindirizzamento alla dashboard...',
        redirectingToEventDetail: 'Reindirizzamento ai dettagli dell\'evento...',
        // Capacity and Venues
        capacity: 'Capacità',
        venue: 'Luogo',
        selectAVenue: 'Seleziona un luogo',
        venueWithCapacity: '{name} - {city} (Capacità: {capacity})',
        // Categories
        category: 'Categoria',
        technology: 'Tecnologia',
        business: 'Business',
        music: 'Musica',
        sports: 'Sport',
        education: 'Educazione',
        // Event States
        published: 'Pubblicato',
        draft: 'Bozza',
        online: 'Online',
        inPerson: 'In presenza',
        // Multi-day
        multiDaySchedule: 'Programma multi-giorno',
        // Venue Management
        venues: 'Luoghi',
        createVenue: 'Crea luogo',
        venueName: 'Nome del luogo',
        venueNameRequired: 'Il nome del luogo è obbligatorio',
        enterVenueName: 'Inserisci il nome del luogo',
        venueAddress: 'Indirizzo',
        addressRequired: 'L\'indirizzo è obbligatorio',
        enterVenueAddress: 'Inserisci l\'indirizzo del luogo',
        venueState: 'Stato',
        enterState: 'Inserisci lo stato',
        enterStateOptional: 'Inserisci lo stato (opzionale)',
        venueCountry: 'Paese',
        countryRequired: 'Il paese è obbligatorio',
        enterCountry: 'Inserisci il paese',
        venueZipCode: 'Codice postale',
        enterZipCode: 'Inserisci il codice postale',
        enterZipCodeOptional: 'Inserisci il codice postale (opzionale)',
        capacityRequired: 'La capacità deve essere maggiore di 0',
        maximumCapacity: 'Capacità massima',
        contactEmail: 'Email di contatto',
        contactPhone: 'Telefono di contatto',
        website: 'Sito web',
        latitude: 'Latitudine',
        longitude: 'Longitudine',
        description: 'Descrizione',
        venueDescription: 'Descrizione del luogo',
        describeVenue: 'Descrivi il luogo, i servizi, le caratteristiche speciali...',
        venueImageUrl: 'URL immagine del luogo',
        validEmailRequired: 'Si prega di inserire un indirizzo email valido',
        latitudeBetween: 'La latitudine deve essere tra -90 e 90',
        longitudeBetween: 'La longitudine deve essere tra -180 e 180',
        optionalMapIntegration: 'Opzionale: Per l\'integrazione delle mappe',
        createNewVenue: 'Crea nuovo luogo',
        venueCreatedSuccessfully: 'Luogo creato con successo!',
        failedToCreateVenue: 'Impossibile creare il luogo. Si prega di riprovare.',
        failedToFetchVenues: 'Impossibile caricare i luoghi',
        creatingVenue: 'Creazione...',
        loadingVenues: 'Caricamento luoghi...',
        searchVenues: 'Cerca luoghi...',
        allCities: 'Tutte le città',
        noVenuesFound: 'Nessun luogo trovato',
        adjustFilters: 'Prova ad aggiustare i tuoi filtri',
        getStartedFirstVenue: 'Inizia creando il tuo primo luogo',
        venueLocation: 'Posizione',
        venueCapacity: 'Capacità',
        venueEvents: 'Eventi',
        venueStatus: 'Stato',
        active: 'Attivo',
        inactive: 'Inattivo',
        eventsCount: '{count} eventi',
        viewAvailableVenues: 'Visualizza luoghi disponibili e creane di nuovi',
        createNewOnes: 'Creane di nuovi',
        // Ticket Management
        tickets: 'Biglietti',
        ticketManagement: 'Gestione biglietti',
        manageTicketTypes: 'Gestisci tipi di biglietto, valida biglietti e gestisci check-in',
        validateTickets: 'Valida biglietti',
        checkIn: 'Check-in',
        ticketValidation: 'Validazione biglietti',
        ticketCheckIn: 'Check-in biglietti',
        ticketsAndCheckIn: 'Biglietti e check-in',
        // Ticket Types Management
        createTicketTypeAction: 'Crea tipo di biglietto',
        ticketTypeLimitations: '⚠️ Importante: Limitazioni nella creazione dei tipi di biglietto',
        publishedEventsRestriction: 'Eventi pubblicati: I tipi di biglietto non possono essere modificati per preservare i dati di vendita esistenti',
        eventsWithSalesRestriction: 'Eventi con vendite: La modifica dei tipi di biglietto è bloccata una volta che i biglietti sono venduti',
        draftStatusRequired: 'Per la creazione di tipi di biglietto: Gli eventi devono essere in stato BOZZA senza vendite esistenti',
        alternativeCreateEvent: 'Alternativa: Crea un nuovo evento se hai bisogno di tipi di biglietto diversi',
        onlyWorksForDraft: 'Funziona solo per eventi in bozza senza vendite esistenti',
        createNewEventLink: 'Crea nuovo evento',
        manageEventsLink: 'Gestisci eventi',
        // Ticket Form
        selectAnEvent: 'Seleziona un evento',
        ticketCreationRequirements: '⚠️ Requisiti per la creazione di biglietti',
        eventMustBeDraft: 'L\'evento deve essere in stato BOZZA (non pubblicato)',
        noExistingTicketSales: 'L\'evento non deve avere vendite di biglietti esistenti',
        mustBeEventOrganizer: 'Devi essere l\'organizzatore dell\'evento',
        editTicketsDuringCreation: 'Se questo fallisce, modifica i tipi di biglietto durante la creazione dell\'evento',
        ticketEvent: 'Evento',
        eventRequired: 'L\'evento è obbligatorio',
        noEventsFound: 'Nessun evento trovato',
        needCreateEventFirst: 'Devi creare un evento prima di creare tipi di biglietto.',
        // Ticket Types Display
        loadingTicketTypes: 'Caricamento tipi di biglietto...',
        noTicketTypesFound: 'Nessun tipo di biglietto trovato',
        adjustFiltersOrCreate: 'Prova ad aggiustare i tuoi filtri o crea il tuo primo tipo di biglietto',
        createFirstTicketTypePrompt: 'Crea il tuo primo tipo di biglietto',
        ticketType: 'Tipo di biglietto',
        event: 'Evento',
        availability: 'Disponibilità',
        status: 'Stato',
        remaining: 'rimanenti',
        // Validation Tab
        validateTicket: 'Valida biglietto',
        enterTicketNumber: 'Inserisci il numero del biglietto',
        validating: 'Validazione...',
        validate: 'Valida',
        validTicket: 'Biglietto valido',
        invalidTicket: 'Biglietto non valido',
        ticketNumber: 'Numero biglietto',
        attendeeName: 'Partecipante',
        alreadyUsed: 'Già usato',
        notUsed: 'Non usato',
        // Check-in Tab
        checkInTicket: 'Check-in biglietto',
        enterTicketNumberCheckIn: 'Inserisci il numero del biglietto per il check-in',
        checkingIn: 'Check-in in corso...',
        ticketCheckedInSuccessfully: 'Biglietto registrato con successo',
        // Ticket Warnings
        importantTicketLimitations: '⚠️ Importante: Limitazioni nella creazione dei tipi di biglietto',
        cannotModifyPublished: '• Eventi pubblicati: I tipi di biglietto non possono essere modificati per preservare i dati di vendita esistenti',
        editingLockedAfterSales: '• Eventi con vendite: La modifica dei tipi di biglietto è bloccata una volta che i biglietti sono venduti',
        draftStatusForCreation: '• Per la creazione di tipi di biglietto: Gli eventi devono essere in stato BOZZA senza vendite esistenti',
        createNewEventAlternative: '• Alternativa: Crea un nuovo evento se hai bisogno di tipi di biglietto diversi',
        // Business Rules
        businessRulesWarning: '⚠️ Requisiti per la creazione di biglietti',
        // Ticket States
        ticketInactive: 'Inattivo',
        // General UI
        optional: 'opzionale',
        required: 'obbligatorio',
        // Appearance
        theme: 'Tema',
        lightMode: 'Modalità chiara',
        darkMode: 'Modalità scura',
        autoMode: 'Modalità automatica',
        accentColor: 'Colore accento',
        fontSize: 'Dimensione carattere',
        compactMode: 'Modalità compatta',
        // Time and Date
        timeFormat: 'Formato ora',
        dateFormat: 'Formato data',
        currency: 'Valuta',
        timezone: 'Fuso orario',
        // Messages
        saveSuccess: 'Impostazioni salvate con successo!',
        saveError: 'Impossibile salvare le impostazioni',
        loadError: 'Impossibile caricare i dati',
        // Dashboard specific
        welcomeBack: 'Bentornato, {name}!',
        virtualEvent: 'Evento virtuale',
        viewAllEvents: 'Visualizza tutti gli eventi →',
        upcomingEvents: 'Eventi in arrivo',
        unpublish: 'Annulla pubblicazione',
        unlimited: 'Illimitato',
        uncategorized: 'Non categorizzato',
        totalRevenue: 'Ricavi totali',
        totalEvents: 'Eventi totali',
        ticketsSold: 'Biglietti venduti',
        revenue: 'Ricavi',
        publish: 'Pubblica',
        noEventsYet: 'Nessun evento ancora',
        maxCapacity: 'Capacità massima',
        loadingDashboard: 'Caricamento della tua dashboard...',
        dashboardError: 'Impossibile caricare i dati della dashboard',
        publishedCount: '{count} pubblicati',
        // Analytics Dashboard
        analytics: 'Analisi',
        analyticsSubtitle: 'Approfondimenti completi per i tuoi eventi',
        comprehensiveInsights: 'Approfondimenti completi per i tuoi eventi',
        refreshData: 'Aggiorna',
        someDataCouldntBeLoaded: 'Alcuni dati non sono stati caricati:',
        // Key Metrics
        totalAttendees: 'Totale partecipanti',
        activeEvents: 'Eventi attivi',
        venuesUsed: 'Luoghi utilizzati',
        fromLastMonth: 'dal mese scorso',
        noRevenueYet: 'Nessun ricavo ancora',
        noAttendeesYet: 'Nessun partecipante ancora',
        eventsRunning: 'Eventi in corso',
        noActiveEvents: 'Nessun evento attivo',
        venuePartnerships: 'Partnership con luoghi',
        noVenuesYet: 'Nessun luogo ancora',
        // Charts and Analytics
        topRevenueEvents: 'Eventi con maggiori ricavi',
        noEventsWithRevenueData: 'Nessun evento con dati sui ricavi ancora',
        createAndPublishEvents: 'Crea e pubblica eventi',
        seeRevenueAnalytics: 'per vedere le analisi dei ricavi',
        paymentMethodDistribution: 'Distribuzione metodi di pagamento',
        noPaymentDataAvailable: 'Nessun dato di pagamento disponibile',
        eventCapacityUtilization: 'Utilizzo capacità eventi',
        utilizationPercentage: 'utilizzo',
        noEventsFoundForPeriod: 'Nessun evento trovato per il periodo selezionato',
        monthlyTrends: 'Tendenze mensili',
        // Demographics
        genderDistribution: 'Distribuzione per genere',
        noDemographicDataAvailable: 'Nessun dato demografico disponibile',
        venuePerformance: 'Performance dei luoghi',
        avgAttendance: 'Partecipazione media',
        noVenueDataAvailable: 'Nessun dato sui luoghi disponibile',
        // Events Needing Attention
        eventsNeedingAttention: 'Eventi che richiedono attenzione',
        utilization: 'utilizzo',
        daysUntilEvent: 'giorni all\'evento',
        potentialIssues: 'Problemi potenziali:',
        recommendations: 'Raccomandazioni:',
        allEventsPerformingWell: 'Tutti gli eventi stanno andando bene!',
        noEventsWithLowAttendance: 'Nessun evento con bassa partecipazione trovato',
        // Time periods
        last7Days: 'Ultimi 7 giorni',
        last30Days: 'Ultimi 30 giorni',
        last3Months: 'Ultimi 3 mesi',
        last6Months: 'Ultimi 6 mesi',
        lastYear: 'Ultimo anno',
        // Status messages
        checkingAuthentication: 'Verifica autenticazione...',
        authenticationRequired: 'Autenticazione richiesta',
        pleaseLogInToView: 'Accedi per visualizzare la dashboard di analisi.',
        goToLogin: 'Vai al login',
        // Orders and remaining
        orders: 'ordini',
        // Organization Settings
        organizationInformation: 'Informazioni sull\'Organizzazione',
        businessLicense: 'Licenza Commerciale',
        // Notification Settings
        emailNotifications: 'Notifiche Email',
        smsNotifications: 'Notifiche SMS',
        newBookings: 'Nuove Prenotazioni',
        getNotifiedNewBooking: 'Ricevi notifiche quando qualcuno prenota il tuo evento',
        cancellations: 'Cancellazioni',
        getNotifiedCancellations: 'Ricevi notifiche quando le prenotazioni vengono cancellate',
        lowInventoryNotifications: 'Notifiche Inventario Basso',
        dailyReports: 'Report Giornalieri',
        receiveDailySummary: 'Ricevi un riepilogo giornaliero di prenotazioni e ricavi',
        weeklyReports: 'Report Settimanali',
        receiveWeeklyAnalytics: 'Ricevi analisi e statistiche settimanali',
        monthlyReports: 'Report Mensili',
        // Security Settings
        securitySettings: 'Impostazioni di Sicurezza',
        twoFactorAuthentication: 'Autenticazione a Due Fattori',
        addExtraLayerSecurity: 'Aggiungi un ulteriore livello di sicurezza al tuo account',
        loginNotifications: 'Notifiche di Accesso',
        getNotifiedNewLogins: 'Ricevi notifiche di nuovi tentativi di accesso',
        sessionTimeout: 'Timeout Sessione',
        sessionTimeoutMinutes: 'Timeout sessione (minuti)',
        // Password Settings
        changePassword: 'Cambia Password',
        currentPassword: 'Password Attuale',
        newPassword: 'Nuova Password',
        confirmNewPassword: 'Conferma Nuova Password',
        minimumCharacters: 'Minimo 6 caratteri',
        passwordsDoNotMatch: 'Le nuove password non corrispondono',
        passwordTooShort: 'La nuova password deve contenere almeno 6 caratteri',
        changingPassword: 'Modifica Password in corso...',
        passwordChanged: 'Password Modificata con Successo',
        // Event Default Settings
        eventDefaults: 'Impostazioni Predefinite Eventi',
        defaultEventDuration: 'Durata Predefinita Evento',
        defaultEventDurationMinutes: 'Durata predefinita evento (minuti)',
        ticketSaleStart: 'Inizio Vendita Biglietti',
        ticketSaleStartDays: 'Inizio vendita biglietti (giorni prima dell\'evento)',
        defaultRefundPolicy: 'Politica di Rimborso Predefinita',
        requireApproval: 'Richiede Approvazione',
        requireApprovalBeforeLive: 'Richiede approvazione prima della pubblicazione',
        autoPublish: 'Pubblicazione Automatica',
        autoPublishWhenCreated: 'Pubblica automaticamente gli eventi quando vengono creati',
        // Language & Region Settings
        languageRegion: 'Lingua e Regione',
        languagePreferences: 'Preferenze lingua e formati regionali',
        regionalFormats: 'Formati regionali',
        interfaceLanguage: 'Lingua Interfaccia',
        timeDateFormats: 'Formati Ora e Data',
        currencySettings: 'Impostazioni Valuta',
        livePreview: 'Anteprima Live',
        // Time Format Settings
        hour12Format: 'Formato 12 ore',
        hour24Format: 'Formato 24 ore',
        // Date Format Settings
        dateFormatExample: 'Esempio: {example}',
        // Display Settings
        displaySettings: 'Impostazioni Visualizzazione',
        fontSizeSmall: 'Piccolo',
        fontSizeMedium: 'Medio',
        fontSizeLarge: 'Grande',
        reduceSpacing: 'Riduci spaziatura tra gli elementi',
        // Theme Settings
        themeSettings: 'Impostazioni Tema',
        choosePreferredTheme: 'Scegli il tuo tema interfaccia preferito',
        cleanBrightInterface: 'Interfaccia pulita e luminosa',
        easyOnEyes: 'Riposante per gli occhi',
        followsSystemPreference: 'Segue le preferenze di sistema',
        accentColorSettings: 'Colore Accento',
        chooseAccentColor: 'Scegli il tuo colore accento preferito',
        // Success Messages
        settingsSavedSuccessfully: 'Impostazioni salvate con successo!',
        profileUpdatedSuccessfully: 'Profilo aggiornato con successo!',
        organizationUpdatedSuccessfully: 'Organizzazione aggiornata con successo!',
        preferencesUpdatedSuccessfully: 'Preferenze aggiornate con successo!',
        // Error Messages
        failedToUpdateProfile: 'Impossibile aggiornare il profilo',
        failedToUpdateOrganization: 'Impossibile aggiornare l\'organizzazione',
        failedToUpdatePreferences: 'Impossibile aggiornare le preferenze',
        failedToChangePassword: 'Impossibile cambiare la password',
        // Loading States
        loadingProfile: 'Caricamento profilo...',
        savingChanges: 'Salvataggio modifiche...',
        // Authentication (already exists as authenticationRequired, but adding full context)
        pleaseLoginToAccess: 'Accedi per accedere alle tue impostazioni.',
        // General Settings
        manageAccount: 'Gestisci il tuo account e le preferenze degli eventi',
        eventPreferences: 'Preferenze eventi',
        saved: 'Salvato!',
        saveChanges: 'Salva Modifiche',
        // Verification Status
        emailNotVerified: 'Indirizzo email non verificato',
        phoneNotVerified: 'Numero di telefono non verificato',
        verified: 'Verificato',
        // Color Names (for dynamic translation)
        blue: 'Blu',
        purple: 'Viola',
        green: 'Verde',
        red: 'Rosso',
        orange: 'Arancione',
        pink: 'Rosa',
        // Size Names (already exist but adding for consistency)
        small: 'Piccolo',
        medium: 'Medio',
        large: 'Grande',
        // Image Management
        eventImages: 'Immagini dell\'Evento',
        bannerImage: 'Immagine Banner',
        bannerImageDescription: 'Grande immagine banner visualizzata in cima alla pagina del tuo evento',
        eventImage: 'Immagine Evento',
        eventImageDescription: 'Immagine principale mostrata negli elenchi e nelle schede degli eventi',
        noBannerImage: 'Nessuna immagine banner caricata',
        noEventImage: 'Nessuna immagine evento caricata',
        changeBanner: 'Cambia Banner',
        uploadBanner: 'Carica Banner',
        changeImage: 'Cambia Immagine',
        uploadImage: 'Carica Immagine',
        uploadingImages: 'Caricamento immagini...',
        imageGuidelines: 'Linee Guida Immagini',
        supportedFormats: 'Formati supportati',
        maxFileSize: 'Dimensione massima file',
        bannerRecommended: 'Dimensione raccomandata banner',
        imageRecommended: 'Dimensione raccomandata immagine',
        invalidImageFile: 'File immagine non valido',
        imageUploadFailed: 'Caricamento immagine fallito',
        imageUploadSuccess: 'Immagine caricata con successo',
        selectImageFile: 'Seleziona file immagine',
        imageProcessing: 'Elaborazione immagine...',
        imagePreview: 'Anteprima immagine',
        removeImage: 'Rimuovi immagine',
        cropImage: 'Ritaglia immagine',
        rotateImage: 'Ruota immagine',
        imageQuality: 'Qualità immagine',
        compressImage: 'Comprimi immagine',
        dropImageHere: 'Trascina l\'immagine qui o clicca per selezionare'
    }
};
const extendedTranslations = {
    en: {
        ...translations.en,
        ...settingsTranslationsEn
    },
    es: {
        ...translations.es,
        ...settingsTranslationsEs
    },
    fr: {
        ...translations.fr,
        ...settingsTranslationsFr
    },
    de: {
        ...translations.de,
        ...settingsTranslationsDe
    },
    it: {
        ...translations.it,
        ...settingsTranslationsIt
    }
};
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const I18nProvider = ({ children })=>{
    const [currentLanguage, setCurrentLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    const [isRTL, setIsRTL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get current language data
    const currentLangData = SUPPORTED_LANGUAGES.find((lang)=>lang.code === currentLanguage) || SUPPORTED_LANGUAGES[0];
    // Translation function with interpolation support
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, params)=>{
        const translation = translations[currentLanguage]?.[key] || translations['en'][key] || key;
        return params ? interpolate(translation, params) : translation;
    }, [
        currentLanguage
    ]);
    // Format currency
    const formatCurrency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((amount, currency)=>{
        const currencyCode = currency || currentLangData.currency;
        try {
            return new Intl.NumberFormat(currentLangData.region, {
                style: 'currency',
                currency: currencyCode
            }).format(amount);
        } catch  {
            return `${amount} ${currencyCode}`;
        }
    }, [
        currentLangData
    ]);
    // Format date
    const formatDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((date, format)=>{
        try {
            return new Intl.DateTimeFormat(currentLangData.region).format(date);
        } catch  {
            return date.toLocaleDateString();
        }
    }, [
        currentLangData
    ]);
    // Format time
    const formatTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((date, format)=>{
        const timeFormat = format || currentLangData.timeFormat;
        try {
            return new Intl.DateTimeFormat(currentLangData.region, {
                hour: '2-digit',
                minute: '2-digit',
                hour12: timeFormat === '12h'
            }).format(date);
        } catch  {
            return date.toLocaleTimeString();
        }
    }, [
        currentLangData
    ]);
    // Change language
    const changeLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((languageCode)=>{
        const langData = SUPPORTED_LANGUAGES.find((lang)=>lang.code === languageCode);
        if (langData) {
            setCurrentLanguage(languageCode);
            setIsRTL(langData.direction === 'rtl');
            // Update document direction
            if (typeof document !== 'undefined') {
                document.documentElement.dir = langData.direction;
                document.documentElement.lang = languageCode;
            }
            // Save to localStorage
            try {
                localStorage.setItem('selectedLanguage', languageCode);
            } catch (error) {
                console.error('Error saving language preference:', error);
            }
        }
    }, []);
    // Load saved language on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const savedLanguage = localStorage.getItem('selectedLanguage');
            if (savedLanguage && SUPPORTED_LANGUAGES.find((lang)=>lang.code === savedLanguage)) {
                changeLanguage(savedLanguage);
            } else {
                // Detect browser language
                const browserLang = navigator.language.split('-')[0];
                const supportedLang = SUPPORTED_LANGUAGES.find((lang)=>lang.code === browserLang);
                if (supportedLang) {
                    changeLanguage(browserLang);
                }
            }
        } catch (error) {
            console.error('Error loading language preference:', error);
        }
    }, [
        changeLanguage
    ]);
    const contextValue = {
        currentLanguage,
        currentLangData,
        isRTL,
        t,
        formatCurrency,
        formatDate,
        formatTime,
        changeLanguage,
        supportedLanguages: SUPPORTED_LANGUAGES,
        availableLanguages: SUPPORTED_LANGUAGES.map((lang)=>({
                code: lang.code,
                name: lang.name,
                nativeName: lang.nativeName,
                flag: lang.flag
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/providers/I18nProvider.tsx",
        lineNumber: 4757,
        columnNumber: 9
    }, this);
};
;
const useI18nContext = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (!context) {
        throw new Error('useI18nContext must be used within an I18nProvider');
    }
    return context;
};
const useI18n = useI18nContext;
const __TURBOPACK__default__export__ = translations;
 // ========================================
 // REMOVE ALL THE ABOVE CODE FROM YOUR FILE
 // ========================================
 // KEEP ONLY this at the very end of your file:
}}),
"[project]/src/app/organizer/OrganizerClientLayout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-unused-vars */ // components/layouts/ConditionalLayout.tsx
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$organizer$2f$OrganizerClientLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/organizer/OrganizerClientLayout.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const ConditionalLayout = ({ children })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [showUserMenu, setShowUserMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check if we're in the organizer section
    const isOrganizerRoute = pathname?.startsWith('/organizer');
    // Check if we're on the dashboard page specifically
    const isDashboardPage = pathname === '/organizer' || pathname === '/organizer/dashboard';
    // Check if we're on auth pages (login/register)
    const isAuthPage = pathname?.includes('/login') || pathname?.includes('/register');
    const handleSignOut = async ()=>{
        try {
            await logout();
            setShowUserMenu(false);
            router.push('/login');
        } catch (error) {
            console.error('Sign out error:', error);
        }
    };
    if (isOrganizerRoute) {
        // For organizer dashboard, render without header
        if (isDashboardPage) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$organizer$2f$OrganizerClientLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                    lineNumber: 46,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                lineNumber: 45,
                columnNumber: 17
            }, this);
        }
        // For other organizer routes, use the organizer layout with header functionality
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "bg-white/80 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-white/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-full mx-auto px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center hover:opacity-80 transition-opacity",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "h-8 w-8 text-blue-600 mr-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                            lineNumber: 62,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold text-gray-900",
                                            children: "EventHub"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                            lineNumber: 63,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-3 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full",
                                            children: "Organizer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                            lineNumber: 64,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                    lineNumber: 61,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-6",
                                    children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600 hidden sm:block",
                                                children: [
                                                    "Welcome back, ",
                                                    user.firstName || 'Organizer'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                lineNumber: 74,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowUserMenu(!showUserMenu),
                                                        className: "flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                    className: "h-4 w-4 text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                    lineNumber: 85,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "hidden sm:block font-medium",
                                                                children: [
                                                                    user.firstName,
                                                                    " ",
                                                                    user.lastName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 45
                                                    }, this),
                                                    showUserMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-4 py-3 border-b border-gray-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium text-gray-900",
                                                                        children: [
                                                                            user.firstName,
                                                                            " ",
                                                                            user.lastName
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                        lineNumber: 96,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500 truncate",
                                                                        children: user.email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                        lineNumber: 99,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-blue-600 font-medium mt-1",
                                                                        children: "Organizer Account"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                        lineNumber: 102,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "py-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/organizer/profile",
                                                                        className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors",
                                                                        onClick: ()=>setShowUserMenu(false),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                                className: "h-4 w-4 mr-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                                lineNumber: 113,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            "My Profile"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                        lineNumber: 108,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/organizer/settings",
                                                                        className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors",
                                                                        onClick: ()=>setShowUserMenu(false),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                                                className: "h-4 w-4 mr-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                                lineNumber: 122,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            "Account Settings"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                        lineNumber: 117,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/organizer",
                                                                        className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors",
                                                                        onClick: ()=>setShowUserMenu(false),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                                className: "h-4 w-4 mr-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                                lineNumber: 131,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            "Dashboard"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                        lineNumber: 126,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "border-t border-gray-100 my-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                        lineNumber: 135,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/",
                                                                        className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors",
                                                                        onClick: ()=>setShowUserMenu(false),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                                className: "h-4 w-4 mr-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                                lineNumber: 142,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            "View Public Site"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "border-t border-gray-100 my-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: handleSignOut,
                                                                        className: "flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50 transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                                className: "h-4 w-4 mr-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                                lineNumber: 152,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            "Sign Out"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                        lineNumber: 148,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                lineNumber: 79,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true) : /* Guest User Options */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/login",
                                                className: "text-gray-600 hover:text-gray-900 transition-colors",
                                                children: "Sign In"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                lineNumber: 163,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/register",
                                                className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors",
                                                children: "Sign Up"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                lineNumber: 169,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                        lineNumber: 162,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                    lineNumber: 70,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                            lineNumber: 59,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                        lineNumber: 58,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, this),
                showUserMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-40",
                    onClick: ()=>setShowUserMenu(false)
                }, void 0, false, {
                    fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                    lineNumber: 184,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$organizer$2f$OrganizerClientLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                    lineNumber: 191,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
            lineNumber: 55,
            columnNumber: 13
        }, this);
    }
    if (isAuthPage) {
        // For auth pages, render without any layout
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    // For regular pages (like events homepage), render without header
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
const __TURBOPACK__default__export__ = ConditionalLayout;
}}),
"[project]/src/components/layouts/ConditionalLayout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-unused-vars */ // components/layouts/ConditionalLayout.tsx
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$organizer$2f$OrganizerClientLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/organizer/OrganizerClientLayout.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const ConditionalLayout = ({ children })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [showUserMenu, setShowUserMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check if we're in the organizer section
    const isOrganizerRoute = pathname?.startsWith('/organizer');
    // Check if we're on the dashboard page specifically
    const isDashboardPage = pathname === '/organizer' || pathname === '/organizer/dashboard';
    // Check if we're on auth pages (login/register)
    const isAuthPage = pathname?.includes('/login') || pathname?.includes('/register');
    const handleSignOut = async ()=>{
        try {
            await logout();
            setShowUserMenu(false);
            router.push('/login');
        } catch (error) {
            console.error('Sign out error:', error);
        }
    };
    if (isOrganizerRoute) {
        // For organizer dashboard, render without header
        if (isDashboardPage) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$organizer$2f$OrganizerClientLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                    lineNumber: 46,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                lineNumber: 45,
                columnNumber: 17
            }, this);
        }
        // For other organizer routes, use the organizer layout with header functionality
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "bg-white/80 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-white/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-full mx-auto px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center hover:opacity-80 transition-opacity",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "h-8 w-8 text-blue-600 mr-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                            lineNumber: 62,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold text-gray-900",
                                            children: "EventHub"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                            lineNumber: 63,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-3 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full",
                                            children: "Organizer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                            lineNumber: 64,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                    lineNumber: 61,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-6",
                                    children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600 hidden sm:block",
                                                children: [
                                                    "Welcome back, ",
                                                    user.firstName || 'Organizer'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                lineNumber: 74,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowUserMenu(!showUserMenu),
                                                        className: "flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                    className: "h-4 w-4 text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                    lineNumber: 85,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "hidden sm:block font-medium",
                                                                children: [
                                                                    user.firstName,
                                                                    " ",
                                                                    user.lastName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 45
                                                    }, this),
                                                    showUserMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-4 py-3 border-b border-gray-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium text-gray-900",
                                                                        children: [
                                                                            user.firstName,
                                                                            " ",
                                                                            user.lastName
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                        lineNumber: 96,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500 truncate",
                                                                        children: user.email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                        lineNumber: 99,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-blue-600 font-medium mt-1",
                                                                        children: "Organizer Account"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                        lineNumber: 102,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "py-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/organizer/profile",
                                                                        className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors",
                                                                        onClick: ()=>setShowUserMenu(false),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                                className: "h-4 w-4 mr-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                                lineNumber: 113,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            "My Profile"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                        lineNumber: 108,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/organizer/settings",
                                                                        className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors",
                                                                        onClick: ()=>setShowUserMenu(false),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                                                className: "h-4 w-4 mr-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                                lineNumber: 122,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            "Account Settings"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                        lineNumber: 117,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/organizer",
                                                                        className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors",
                                                                        onClick: ()=>setShowUserMenu(false),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                                className: "h-4 w-4 mr-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                                lineNumber: 131,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            "Dashboard"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                        lineNumber: 126,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "border-t border-gray-100 my-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                        lineNumber: 135,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/",
                                                                        className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors",
                                                                        onClick: ()=>setShowUserMenu(false),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                                className: "h-4 w-4 mr-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                                lineNumber: 142,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            "View Public Site"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "border-t border-gray-100 my-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: handleSignOut,
                                                                        className: "flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50 transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                                className: "h-4 w-4 mr-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                                lineNumber: 152,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            "Sign Out"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                        lineNumber: 148,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                lineNumber: 79,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true) : /* Guest User Options */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/login",
                                                className: "text-gray-600 hover:text-gray-900 transition-colors",
                                                children: "Sign In"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                lineNumber: 163,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/register",
                                                className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors",
                                                children: "Sign Up"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                                lineNumber: 169,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                        lineNumber: 162,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                                    lineNumber: 70,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                            lineNumber: 59,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                        lineNumber: 58,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, this),
                showUserMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-40",
                    onClick: ()=>setShowUserMenu(false)
                }, void 0, false, {
                    fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                    lineNumber: 184,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$organizer$2f$OrganizerClientLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
                    lineNumber: 191,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
            lineNumber: 55,
            columnNumber: 13
        }, this);
    }
    if (isAuthPage) {
        // For auth pages, render without any layout
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    // For regular pages (like events homepage), render without header
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
const __TURBOPACK__default__export__ = ConditionalLayout;
}}),
"[project]/src/app/layout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// app/layout.tsx
__turbopack_context__.s({
    "default": (()=>RootLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_59dee874.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$I18nProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/providers/I18nProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2f$ConditionalLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layouts/ConditionalLayout.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].className,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$I18nProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I18nProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2f$ConditionalLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 22,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 21,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 20,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__35e50fdc._.js.map