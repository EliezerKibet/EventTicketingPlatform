(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/organizer/settings/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable react-hooks/exhaustive-deps */ /* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTheme.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$I18nProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/providers/I18nProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Theme configurations
const themes = [
    {
        id: 'light',
        name: 'Light',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"],
        description: 'Clean and bright interface',
        preview: {
            bg: 'bg-white',
            text: 'text-gray-900',
            border: 'border-gray-200'
        }
    },
    {
        id: 'dark',
        name: 'Dark',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"],
        description: 'Easy on the eyes',
        preview: {
            bg: 'bg-gray-900',
            text: 'text-white',
            border: 'border-gray-700'
        }
    },
    {
        id: 'auto',
        name: 'Auto',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"],
        description: 'Follows system preference',
        preview: {
            bg: 'bg-gradient-to-r from-white to-gray-900',
            text: 'text-gray-600',
            border: 'border-gray-400'
        }
    }
];
const accentColors = [
    {
        id: 'blue',
        name: 'Blue',
        class: 'bg-blue-500',
        rgb: 'rgb(59, 130, 246)'
    },
    {
        id: 'purple',
        name: 'Purple',
        class: 'bg-purple-500',
        rgb: 'rgb(168, 85, 247)'
    },
    {
        id: 'green',
        name: 'Green',
        class: 'bg-green-500',
        rgb: 'rgb(34, 197, 94)'
    },
    {
        id: 'red',
        name: 'Red',
        class: 'bg-red-500',
        rgb: 'rgb(239, 68, 68)'
    },
    {
        id: 'orange',
        name: 'Orange',
        class: 'bg-orange-500',
        rgb: 'rgb(249, 115, 22)'
    },
    {
        id: 'pink',
        name: 'Pink',
        class: 'bg-pink-500',
        rgb: 'rgb(236, 72, 153)'
    }
];
const languages = [
    {
        code: 'en',
        name: 'English',
        flag: '🇺🇸'
    },
    {
        code: 'es',
        name: 'Español',
        flag: '🇪🇸'
    },
    {
        code: 'fr',
        name: 'Français',
        flag: '🇫🇷'
    },
    {
        code: 'de',
        name: 'Deutsch',
        flag: '🇩🇪'
    },
    {
        code: 'it',
        name: 'Italiano',
        flag: '🇮🇹'
    }
];
const currencies = [
    {
        code: 'USD',
        symbol: '$',
        name: 'US Dollar'
    },
    {
        code: 'EUR',
        symbol: '€',
        name: 'Euro'
    },
    {
        code: 'GBP',
        symbol: '£',
        name: 'British Pound'
    },
    {
        code: 'CAD',
        symbol: 'C$',
        name: 'Canadian Dollar'
    },
    {
        code: 'MYR',
        symbol: 'RM',
        name: 'Malaysian Ringgit'
    },
    {
        code: 'SGD',
        symbol: 'S$',
        name: 'Singapore Dollar'
    },
    {
        code: 'JPY',
        symbol: '¥',
        name: 'Japanese Yen'
    },
    {
        code: 'AUD',
        symbol: 'A$',
        name: 'Australian Dollar'
    }
];
const dateFormats = [
    {
        id: 'MM/dd/yyyy',
        name: 'MM/DD/YYYY',
        example: '12/31/2024'
    },
    {
        id: 'dd/MM/yyyy',
        name: 'DD/MM/YYYY',
        example: '31/12/2024'
    },
    {
        id: 'yyyy-MM-dd',
        name: 'YYYY-MM-DD',
        example: '2024-12-31'
    },
    {
        id: 'dd-MM-yyyy',
        name: 'DD-MM-YYYY',
        example: '31-12-2024'
    },
    {
        id: 'MMM dd, yyyy',
        name: 'MMM DD, YYYY',
        example: 'Dec 31, 2024'
    },
    {
        id: 'dd MMM yyyy',
        name: 'DD MMM YYYY',
        example: '31 Dec 2024'
    }
];
const OrganizerSettings = ()=>{
    _s();
    // State declarations
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('profile');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profileLoading, setProfileLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authStatus, setAuthStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('checking');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Use your existing hooks
    const { t, changeLanguage, currentLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$I18nProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18nContext"])();
    const { updateTheme, isDark, isCompact } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const themeClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeClasses"])();
    // User basic data (from User entity)
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        profileImageUrl: ''
    });
    // User profile data (from UserProfile entity)
    const [userProfile, setUserProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        bio: '',
        website: '',
        companyName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'United States',
        timeZone: 'America/New_York',
        isOrganizer: false,
        businessLicense: ''
    });
    // User preferences with dateFormat included
    const [userPreferences, setUserPreferences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        // Notification preferences
        emailNotifications: true,
        smsNotifications: false,
        newBookingNotifications: true,
        cancellationNotifications: true,
        lowInventoryNotifications: true,
        dailyReports: false,
        weeklyReports: true,
        monthlyReports: true,
        // Security preferences
        twoFactorEnabled: false,
        sessionTimeout: 30,
        loginNotifications: true,
        // Event defaults
        defaultTimeZone: 'America/New_York',
        defaultEventDuration: 120,
        defaultTicketSaleStart: 30,
        defaultRefundPolicy: 'flexible',
        requireApproval: false,
        autoPublish: false,
        // Appearance preferences including dateFormat
        dateFormat: 'MM/dd/yyyy',
        theme: 'light',
        language: 'en',
        timeFormat: '12h',
        currency: 'USD',
        accentColor: 'blue',
        fontSize: 'medium',
        compactMode: false
    });
    const [passwordData, setPasswordData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    // Tab configuration
    const tabs = [
        {
            id: 'profile',
            name: t('personalInformation'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
        },
        {
            id: 'organization',
            name: t('organization'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
        },
        {
            id: 'notifications',
            name: t('notifications'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"]
        },
        {
            id: 'security',
            name: t('security'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
        },
        {
            id: 'language',
            name: t('languageRegion'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"]
        },
        {
            id: 'events',
            name: t('eventDefaults'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
        },
        {
            id: 'appearance',
            name: t('appearance'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
        }
    ];
    // Enhanced theme-aware input styles
    const getInputStyles = (hasError = false)=>{
        const baseStyles = `w-full border rounded-lg focus:ring-2 accent-focus placeholder-opacity-60 theme-transition`;
        const themeStyles = `${themeClasses.themeCard} ${themeClasses.themeFg} ${themeClasses.themeBorder} ${themeClasses.compactInput}`;
        const errorStyles = hasError ? 'border-red-500' : '';
        return `${baseStyles} ${themeStyles} ${errorStyles}`;
    };
    // Toggle component
    const Toggle = ({ enabled, onChange, disabled = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: ()=>!disabled && onChange(!enabled),
            disabled: disabled,
            className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled ? 'accent-bg' : isDark ? 'bg-gray-600' : 'bg-gray-200'} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`
            }, void 0, false, {
                fileName: "[project]/src/app/organizer/settings/page.tsx",
                lineNumber: 288,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/organizer/settings/page.tsx",
            lineNumber: 281,
            columnNumber: 9
        }, this);
    // Loading skeleton component
    const LoadingSkeleton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${themeClasses.themeCard} rounded-lg ${themeClasses.compactCard} shadow-sm border ${themeClasses.themeBorder}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mb-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 300,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-gray-300 dark:bg-gray-600 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 302,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 303,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-10 bg-gray-300 dark:bg-gray-600 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 305,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-10 bg-gray-300 dark:bg-gray-600 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 306,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 304,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 301,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 299,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/organizer/settings/page.tsx",
                lineNumber: 298,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/organizer/settings/page.tsx",
            lineNumber: 297,
            columnNumber: 9
        }, this);
    // Auth check function
    const checkAuth = ()=>{
        const token = localStorage.getItem('authToken');
        console.log('🔍 Checking auth status:', {
            hasToken: !!token
        });
        if (!token) {
            setAuthStatus('unauthenticated');
            return false;
        }
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const currentTime = Math.floor(Date.now() / 1000);
            if (payload.exp && payload.exp < currentTime) {
                localStorage.removeItem('authToken');
                localStorage.removeItem('user');
                setAuthStatus('unauthenticated');
                return false;
            }
            setAuthStatus('authenticated');
            console.log('✅ Authentication successful');
            return true;
        } catch (error) {
            console.error('Invalid token format:', error);
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
            setAuthStatus('unauthenticated');
            return false;
        }
    };
    // Fetch user data function
    const fetchUserData = async ()=>{
        if (!checkAuth()) return;
        setProfileLoading(true);
        setError(null);
        try {
            const [userResponse, organizationData, preferencesData] = await Promise.allSettled([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userApi"].getProfile(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userApi"].getOrganization(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userApi"].getPreferences()
            ]);
            // Handle user profile data
            if (userResponse.status === 'fulfilled') {
                setUserData({
                    userId: userResponse.value.userId,
                    firstName: userResponse.value.firstName || '',
                    lastName: userResponse.value.lastName || '',
                    email: userResponse.value.email || '',
                    phoneNumber: userResponse.value.phoneNumber || '',
                    dateOfBirth: userResponse.value.dateOfBirth || '',
                    profileImageUrl: userResponse.value.profileImageUrl || '',
                    isEmailVerified: userResponse.value.isEmailVerified || false,
                    isPhoneVerified: userResponse.value.isPhoneVerified || false,
                    createdAt: userResponse.value.createdAt || '',
                    lastLoginAt: userResponse.value.lastLoginAt || '',
                    status: userResponse.value.status || '',
                    bio: userResponse.value.bio || '',
                    website: userResponse.value.website || '',
                    timeZone: userResponse.value.timeZone || '',
                    isOrganizer: userResponse.value.isOrganizer || false,
                    roles: userResponse.value.roles || []
                });
            }
            // Handle organization data
            if (organizationData.status === 'fulfilled') {
                setUserProfile({
                    companyName: organizationData.value.companyName || '',
                    businessLicense: organizationData.value.businessLicense || '',
                    address: organizationData.value.address || '',
                    city: organizationData.value.city || '',
                    state: organizationData.value.state || '',
                    zipCode: organizationData.value.zipCode || '',
                    country: organizationData.value.country || 'United States',
                    bio: userResponse.status === 'fulfilled' ? userResponse.value.bio || '' : '',
                    website: userResponse.status === 'fulfilled' ? userResponse.value.website || '' : '',
                    timeZone: userResponse.status === 'fulfilled' ? userResponse.value.timeZone || 'America/New_York' : 'America/New_York',
                    isOrganizer: userResponse.status === 'fulfilled' ? userResponse.value.isOrganizer || false : false
                });
            }
            // Handle preferences data
            if (preferencesData.status === 'fulfilled') {
                setUserPreferences({
                    emailNotifications: preferencesData.value.emailNotifications ?? true,
                    smsNotifications: preferencesData.value.smsNotifications ?? false,
                    newBookingNotifications: preferencesData.value.newBookingNotifications ?? true,
                    cancellationNotifications: preferencesData.value.cancellationNotifications ?? true,
                    lowInventoryNotifications: preferencesData.value.lowInventoryNotifications ?? true,
                    dailyReports: preferencesData.value.dailyReports ?? false,
                    weeklyReports: preferencesData.value.weeklyReports ?? true,
                    monthlyReports: preferencesData.value.monthlyReports ?? true,
                    twoFactorEnabled: preferencesData.value.twoFactorEnabled ?? false,
                    sessionTimeout: preferencesData.value.sessionTimeout ?? 30,
                    loginNotifications: preferencesData.value.loginNotifications ?? true,
                    defaultTimeZone: preferencesData.value.defaultTimeZone ?? 'America/New_York',
                    defaultEventDuration: preferencesData.value.defaultEventDuration ?? 120,
                    defaultTicketSaleStart: preferencesData.value.defaultTicketSaleStart ?? 30,
                    defaultRefundPolicy: preferencesData.value.defaultRefundPolicy ?? 'flexible',
                    requireApproval: preferencesData.value.requireApproval ?? false,
                    autoPublish: preferencesData.value.autoPublish ?? false,
                    dateFormat: preferencesData.value.dateFormat ?? 'MM/dd/yyyy',
                    theme: [
                        'light',
                        'dark',
                        'auto'
                    ].includes(preferencesData.value.theme) ? preferencesData.value.theme : 'light',
                    language: preferencesData.value.language ?? 'en',
                    timeFormat: [
                        '12h',
                        '24h'
                    ].includes(preferencesData.value.timeFormat) ? preferencesData.value.timeFormat : '12h',
                    currency: preferencesData.value.currency ?? 'USD',
                    accentColor: preferencesData.value.accentColor ?? 'blue',
                    fontSize: [
                        'small',
                        'medium',
                        'large'
                    ].includes(preferencesData.value.fontSize) ? preferencesData.value.fontSize : 'medium',
                    compactMode: preferencesData.value.compactMode ?? false
                });
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            setError(error.message || t('loadError'));
        } finally{
            setProfileLoading(false);
        }
    };
    // Update functions
    const updateUserProfile = async ()=>{
        setLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userApi"].updateProfile({
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                phoneNumber: userData.phoneNumber
            });
            setSaved(true);
            setTimeout(()=>setSaved(false), 3000);
        } catch (error) {
            console.error('Error updating profile:', error);
            setError(error.message || t('failedToUpdateProfile'));
        } finally{
            setLoading(false);
        }
    };
    const updateUserProfileInfo = async ()=>{
        setLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userApi"].updateOrganization({
                companyName: userProfile.companyName,
                businessLicense: userProfile.businessLicense,
                address: userProfile.address,
                city: userProfile.city,
                state: userProfile.state,
                zipCode: userProfile.zipCode,
                country: userProfile.country
            });
            setSaved(true);
            setTimeout(()=>setSaved(false), 3000);
        } catch (error) {
            console.error('Error updating profile info:', error);
            setError(error.message || t('failedToUpdateOrganization'));
        } finally{
            setLoading(false);
        }
    };
    const updateUserPreferences = async ()=>{
        setLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userApi"].updatePreferences({
                emailNotifications: userPreferences.emailNotifications,
                smsNotifications: userPreferences.smsNotifications,
                newBookingNotifications: userPreferences.newBookingNotifications,
                cancellationNotifications: userPreferences.cancellationNotifications,
                lowInventoryNotifications: userPreferences.lowInventoryNotifications,
                dailyReports: userPreferences.dailyReports,
                weeklyReports: userPreferences.weeklyReports,
                monthlyReports: userPreferences.monthlyReports,
                twoFactorEnabled: userPreferences.twoFactorEnabled,
                sessionTimeout: userPreferences.sessionTimeout,
                loginNotifications: userPreferences.loginNotifications,
                defaultTimeZone: userPreferences.defaultTimeZone,
                defaultEventDuration: userPreferences.defaultEventDuration,
                defaultTicketSaleStart: userPreferences.defaultTicketSaleStart,
                defaultRefundPolicy: userPreferences.defaultRefundPolicy,
                requireApproval: userPreferences.requireApproval,
                autoPublish: userPreferences.autoPublish,
                theme: userPreferences.theme,
                language: userPreferences.language,
                timeFormat: userPreferences.timeFormat,
                currency: userPreferences.currency,
                accentColor: userPreferences.accentColor,
                fontSize: userPreferences.fontSize,
                compactMode: userPreferences.compactMode,
                dateFormat: userPreferences.dateFormat
            });
            setSaved(true);
            setTimeout(()=>setSaved(false), 3000);
        } catch (error) {
            console.error('Error updating preferences:', error);
            setError(error.message || t('failedToUpdatePreferences'));
        } finally{
            setLoading(false);
        }
    };
    // Password change function
    const changePassword = async ()=>{
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setError(t('passwordsDoNotMatch'));
            return;
        }
        if (passwordData.newPassword.length < 6) {
            setError(t('passwordTooShort'));
            return;
        }
        setLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userApi"].changePassword({
                currentPassword: passwordData.currentPassword,
                newPassword: passwordData.newPassword
            });
            setPasswordData({
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            });
            setSaved(true);
            setTimeout(()=>setSaved(false), 3000);
        } catch (error) {
            console.error('Error changing password:', error);
            setError(error.message || t('failedToChangePassword'));
        } finally{
            setLoading(false);
        }
    };
    // Helper function for updating preferences
    const updatePreference = (key, value)=>{
        setUserPreferences((prev)=>({
                ...prev,
                [key]: value
            }));
        // Update theme immediately for theme-related changes
        if (key === 'theme' || key === 'accentColor' || key === 'fontSize' || key === 'compactMode') {
            updateTheme({
                [key]: value
            });
        }
        // Update language immediately when language changes
        if (key === 'language') {
            changeLanguage(value);
        }
    };
    // Save handler
    const handleSave = async (section)=>{
        setError(null);
        switch(section){
            case 'profile':
                await updateUserProfile();
                break;
            case 'organization':
                await updateUserProfileInfo();
                break;
            case 'notifications':
            case 'security':
            case 'events':
            case 'language':
            case 'appearance':
                await updateUserPreferences();
                break;
            default:
                await updateUserProfile();
        }
    };
    // Render Personal Information Tab
    const renderProfileTab = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-5 h-5 text-red-600 dark:text-red-400 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 618,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-red-800 dark:text-red-300",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 619,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 617,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 616,
                    columnNumber: 17
                }, this),
                !profileLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${themeClasses.themeCard} rounded-lg ${themeClasses.compactCard} shadow-sm border ${themeClasses.themeBorder}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg} mb-4`,
                            children: t('personalInformation')
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 626,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `grid grid-cols-1 md:grid-cols-2 ${themeClasses.compactGap}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                            children: [
                                                t('firstName'),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 632,
                                                    columnNumber: 50
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 631,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: userData.firstName,
                                            onChange: (e)=>setUserData({
                                                    ...userData,
                                                    firstName: e.target.value
                                                }),
                                            className: getInputStyles(),
                                            disabled: loading
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 634,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 630,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                            children: [
                                                t('lastName'),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 643,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: userData.lastName,
                                            onChange: (e)=>setUserData({
                                                    ...userData,
                                                    lastName: e.target.value
                                                }),
                                            className: getInputStyles(),
                                            disabled: loading
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 646,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 642,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                            children: [
                                                t('email'),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 656,
                                                    columnNumber: 46
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 655,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: userData.email,
                                                    onChange: (e)=>setUserData({
                                                            ...userData,
                                                            email: e.target.value
                                                        }),
                                                    className: getInputStyles(),
                                                    disabled: loading
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 33
                                                }, this),
                                                userData.isEmailVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "absolute right-3 top-2.5 w-5 h-5 text-green-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 667,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 658,
                                            columnNumber: 29
                                        }, this),
                                        !userData.isEmailVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-amber-600 dark:text-amber-400 mt-1",
                                            children: t('emailNotVerified')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 671,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 654,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                            children: t('phoneNumber')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 677,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    value: userData.phoneNumber || '',
                                                    onChange: (e)=>setUserData({
                                                            ...userData,
                                                            phoneNumber: e.target.value
                                                        }),
                                                    className: getInputStyles(),
                                                    disabled: loading,
                                                    placeholder: t('optional')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 681,
                                                    columnNumber: 33
                                                }, this),
                                                userData.isPhoneVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "absolute right-3 top-2.5 w-5 h-5 text-green-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 680,
                                            columnNumber: 29
                                        }, this),
                                        userData.phoneNumber && !userData.isPhoneVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-amber-600 dark:text-amber-400 mt-1",
                                            children: t('phoneNotVerified')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 694,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 676,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 629,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 625,
                    columnNumber: 17
                }, this),
                !profileLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${themeClasses.themeCard} rounded-lg ${themeClasses.compactCard} shadow-sm border ${themeClasses.themeBorder}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg} mb-4`,
                            children: t('changePassword')
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 706,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                            children: t('currentPassword')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 711,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: showPassword ? 'text' : 'password',
                                                    value: passwordData.currentPassword,
                                                    onChange: (e)=>setPasswordData({
                                                            ...passwordData,
                                                            currentPassword: e.target.value
                                                        }),
                                                    className: `${getInputStyles()} pr-10`,
                                                    disabled: loading
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 715,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    className: `absolute right-3 top-2.5 ${themeClasses.themeMutedFg}`,
                                                    disabled: loading,
                                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 728,
                                                        columnNumber: 53
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 728,
                                                        columnNumber: 76
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 722,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 714,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 710,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                            children: t('newPassword')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 733,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: passwordData.newPassword,
                                            onChange: (e)=>setPasswordData({
                                                    ...passwordData,
                                                    newPassword: e.target.value
                                                }),
                                            className: getInputStyles(),
                                            disabled: loading,
                                            placeholder: t('minimumCharacters')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 736,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 732,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                            children: t('confirmNewPassword')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 746,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: passwordData.confirmPassword,
                                            onChange: (e)=>setPasswordData({
                                                    ...passwordData,
                                                    confirmPassword: e.target.value
                                                }),
                                            className: getInputStyles(),
                                            disabled: loading
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 749,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 745,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: changePassword,
                                        disabled: loading || !passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword,
                                        className: "px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: loading ? t('changingPassword') : t('changePassword')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 758,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 757,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 709,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 705,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/organizer/settings/page.tsx",
            lineNumber: 614,
            columnNumber: 9
        }, this);
    // Render Organization Tab
    const renderOrganizationTab = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${themeClasses.themeCard} rounded-lg ${themeClasses.compactCard} shadow-sm border ${themeClasses.themeBorder}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg} mb-4`,
                        children: t('organizationInformation')
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 776,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `grid grid-cols-1 md:grid-cols-2 ${themeClasses.compactGap}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                        children: t('companyName')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 781,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: userProfile.companyName || '',
                                        onChange: (e)=>setUserProfile({
                                                ...userProfile,
                                                companyName: e.target.value
                                            }),
                                        className: getInputStyles(),
                                        disabled: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 784,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 780,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                        children: t('businessLicense')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 793,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: userProfile.businessLicense || '',
                                        onChange: (e)=>setUserProfile({
                                                ...userProfile,
                                                businessLicense: e.target.value
                                            }),
                                        className: getInputStyles(),
                                        disabled: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 796,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 792,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                        children: t('address')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 805,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: userProfile.address || '',
                                        onChange: (e)=>setUserProfile({
                                                ...userProfile,
                                                address: e.target.value
                                            }),
                                        className: getInputStyles(),
                                        disabled: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 808,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 804,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                        children: t('city')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 817,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: userProfile.city || '',
                                        onChange: (e)=>setUserProfile({
                                                ...userProfile,
                                                city: e.target.value
                                            }),
                                        className: getInputStyles(),
                                        disabled: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 820,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 816,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                        children: t('state')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 829,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: userProfile.state || '',
                                        onChange: (e)=>setUserProfile({
                                                ...userProfile,
                                                state: e.target.value
                                            }),
                                        className: getInputStyles(),
                                        disabled: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 832,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 828,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                        children: t('zipCode')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 841,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: userProfile.zipCode || '',
                                        onChange: (e)=>setUserProfile({
                                                ...userProfile,
                                                zipCode: e.target.value
                                            }),
                                        className: getInputStyles(),
                                        disabled: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 844,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 840,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 779,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/organizer/settings/page.tsx",
                lineNumber: 775,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/organizer/settings/page.tsx",
            lineNumber: 774,
            columnNumber: 9
        }, this);
    // Render Notifications Tab
    const renderNotificationsTab = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${themeClasses.themeCard} rounded-lg ${themeClasses.compactCard} shadow-sm border ${themeClasses.themeBorder}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg} mb-4`,
                        children: t('emailNotifications')
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 861,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: `${themeClasses.textSm} font-medium ${themeClasses.themeFg}`,
                                                children: t('newBookings')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 867,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                                children: t('getNotifiedNewBooking')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 870,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 866,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                        enabled: userPreferences.newBookingNotifications,
                                        onChange: (enabled)=>updatePreference('newBookingNotifications', enabled),
                                        disabled: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 874,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 865,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: `${themeClasses.textSm} font-medium ${themeClasses.themeFg}`,
                                                children: t('cancellations')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 882,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                                children: t('getNotifiedCancellations')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 885,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 881,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                        enabled: userPreferences.cancellationNotifications,
                                        onChange: (enabled)=>updatePreference('cancellationNotifications', enabled),
                                        disabled: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 889,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 880,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: `${themeClasses.textSm} font-medium ${themeClasses.themeFg}`,
                                                children: t('dailyReports')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 897,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                                children: t('receiveDailySummary')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 900,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 896,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                        enabled: userPreferences.dailyReports,
                                        onChange: (enabled)=>updatePreference('dailyReports', enabled),
                                        disabled: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 904,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 895,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: `${themeClasses.textSm} font-medium ${themeClasses.themeFg}`,
                                                children: t('weeklyReports')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 912,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                                children: t('receiveWeeklyAnalytics')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 915,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 911,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                        enabled: userPreferences.weeklyReports,
                                        onChange: (enabled)=>updatePreference('weeklyReports', enabled),
                                        disabled: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 919,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 910,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 864,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/organizer/settings/page.tsx",
                lineNumber: 860,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/organizer/settings/page.tsx",
            lineNumber: 859,
            columnNumber: 9
        }, this);
    // Render Security Tab
    const renderSecurityTab = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${themeClasses.themeCard} rounded-lg ${themeClasses.compactCard} shadow-sm border ${themeClasses.themeBorder}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg} mb-4`,
                        children: t('securitySettings')
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 934,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: `${themeClasses.textSm} font-medium ${themeClasses.themeFg}`,
                                                children: t('twoFactorAuthentication')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 940,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                                children: t('addExtraLayerSecurity')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 943,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 939,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                        enabled: userPreferences.twoFactorEnabled,
                                        onChange: (enabled)=>updatePreference('twoFactorEnabled', enabled),
                                        disabled: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 947,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 938,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: `${themeClasses.textSm} font-medium ${themeClasses.themeFg}`,
                                                children: t('loginNotifications')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 955,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                                children: t('getNotifiedNewLogins')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 958,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 954,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                        enabled: userPreferences.loginNotifications,
                                        onChange: (enabled)=>updatePreference('loginNotifications', enabled),
                                        disabled: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 962,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 953,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                        children: t('sessionTimeoutMinutes')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 969,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: userPreferences.sessionTimeout,
                                        onChange: (e)=>updatePreference('sessionTimeout', parseInt(e.target.value) || 30),
                                        className: getInputStyles(),
                                        disabled: loading,
                                        min: "5",
                                        max: "480"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 972,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 968,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 937,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/organizer/settings/page.tsx",
                lineNumber: 933,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/organizer/settings/page.tsx",
            lineNumber: 932,
            columnNumber: 9
        }, this);
    // Render Language Tab
    const renderLanguageTab = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-sm border ${themeClasses.themeBorder}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                                className: `w-5 h-5 ${themeClasses.themeMutedFg}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 993,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg}`,
                                children: t('languageRegion')
                            }, void 0, false, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 994,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 992,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `${themeClasses.textSm} ${themeClasses.themeMutedFg} mb-6`,
                        children: t('languagePreferences')
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 998,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-3`,
                                        children: t('interfaceLanguage')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1005,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",
                                        children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>updatePreference('language', lang.code),
                                                className: `p-3 rounded-lg border-2 transition-all text-left ${currentLanguage === lang.code ? 'accent-border bg-blue-50 dark:bg-blue-900/20' : `${themeClasses.themeBorder} ${themeClasses.hover}`}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg",
                                                                    children: lang.flag
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                                    lineNumber: 1020,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `${themeClasses.textSm} font-medium ${themeClasses.themeFg}`,
                                                                    children: lang.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                                    lineNumber: 1021,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                            lineNumber: 1019,
                                                            columnNumber: 41
                                                        }, this),
                                                        currentLanguage === lang.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-4 h-4 accent-text"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                            lineNumber: 1026,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1018,
                                                    columnNumber: 37
                                                }, this)
                                            }, lang.code, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 1010,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1008,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 1004,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-3`,
                                        children: t('timeDateFormats')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1036,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: `block text-xs font-medium ${themeClasses.themeMutedFg} mb-2`,
                                                        children: t('timeFormat')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 1041,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2",
                                                        children: [
                                                            '12h',
                                                            '24h'
                                                        ].map((format)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>updatePreference('timeFormat', format),
                                                                className: `p-2 rounded border transition-all ${userPreferences.timeFormat === format ? 'accent-border accent-bg text-white' : `${themeClasses.themeBorder} ${themeClasses.hover}`}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-medium",
                                                                    children: format === '12h' ? t('hour12Format') : t('hour24Format')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                                    lineNumber: 1054,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, format, false, {
                                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                                lineNumber: 1046,
                                                                columnNumber: 41
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 1044,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 1040,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: `block text-xs font-medium ${themeClasses.themeMutedFg} mb-2`,
                                                        children: t('dateFormat')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 1062,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: userPreferences.dateFormat,
                                                        onChange: (e)=>updatePreference('dateFormat', e.target.value),
                                                        className: getInputStyles(),
                                                        children: dateFormats.map((format)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: format.id,
                                                                children: [
                                                                    format.name,
                                                                    " - ",
                                                                    format.example
                                                                ]
                                                            }, format.id, true, {
                                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                                lineNumber: 1071,
                                                                columnNumber: 41
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 1065,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 1061,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1039,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 1035,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-3`,
                                        children: t('currencySettings')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1082,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: userPreferences.currency,
                                        onChange: (e)=>updatePreference('currency', e.target.value),
                                        className: getInputStyles(),
                                        children: currencies.map((currency)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: currency.code,
                                                children: [
                                                    currency.symbol,
                                                    " - ",
                                                    currency.name,
                                                    " (",
                                                    currency.code,
                                                    ")"
                                                ]
                                            }, currency.code, true, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 1091,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1085,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 1081,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 1002,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/organizer/settings/page.tsx",
                lineNumber: 991,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/organizer/settings/page.tsx",
            lineNumber: 989,
            columnNumber: 9
        }, this);
    // Render Events Tab
    const renderEventsTab = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${themeClasses.themeCard} rounded-lg ${themeClasses.compactCard} shadow-sm border ${themeClasses.themeBorder}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg} mb-4`,
                        children: t('eventDefaults')
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 1106,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                        children: t('defaultEventDurationMinutes')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1111,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: userPreferences.defaultEventDuration,
                                        onChange: (e)=>updatePreference('defaultEventDuration', parseInt(e.target.value) || 120),
                                        className: getInputStyles(),
                                        disabled: loading,
                                        min: "15",
                                        step: "15"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1114,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 1110,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                        children: t('ticketSaleStartDays')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1125,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: userPreferences.defaultTicketSaleStart,
                                        onChange: (e)=>updatePreference('defaultTicketSaleStart', parseInt(e.target.value) || 30),
                                        className: getInputStyles(),
                                        disabled: loading,
                                        min: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1128,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 1124,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: `${themeClasses.textSm} font-medium ${themeClasses.themeFg}`,
                                                children: t('requireApproval')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 1139,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                                children: t('requireApprovalBeforeLive')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 1142,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1138,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                        enabled: userPreferences.requireApproval,
                                        onChange: (enabled)=>updatePreference('requireApproval', enabled),
                                        disabled: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1146,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 1137,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: `${themeClasses.textSm} font-medium ${themeClasses.themeFg}`,
                                                children: t('autoPublish')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 1154,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                                children: t('autoPublishWhenCreated')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 1157,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1153,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                        enabled: userPreferences.autoPublish,
                                        onChange: (enabled)=>updatePreference('autoPublish', enabled),
                                        disabled: loading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1161,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 1152,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 1109,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/organizer/settings/page.tsx",
                lineNumber: 1105,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/organizer/settings/page.tsx",
            lineNumber: 1104,
            columnNumber: 9
        }, this);
    // Render Appearance Tab
    const renderAppearanceTab = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-sm border ${themeClasses.themeBorder}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                    className: `w-5 h-5 ${themeClasses.themeMutedFg}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 1178,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg}`,
                                    children: t('theme')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 1179,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1177,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${themeClasses.textSm} ${themeClasses.themeMutedFg} mb-6`,
                            children: t('choosePreferredTheme')
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1183,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `grid grid-cols-1 md:grid-cols-3 ${themeClasses.compactGap}`,
                            children: themes.map((theme)=>{
                                const Icon = theme.icon;
                                const isSelected = userPreferences.theme === theme.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>updatePreference('theme', theme.id),
                                    className: `relative p-4 rounded-lg border-2 transition-all ${isSelected ? 'accent-border bg-blue-50 dark:bg-blue-900/20' : `${themeClasses.themeBorder} ${themeClasses.hover}`}`,
                                    children: [
                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 right-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-4 h-4 accent-text"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 1203,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 1202,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex items-center space-x-3 ${isCompact ? 'mb-2' : 'mb-3'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: `w-5 h-5 ${themeClasses.themeMutedFg}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1208,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-medium ${themeClasses.themeFg}`,
                                                    children: getThemeTranslation(theme.id)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1209,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 1207,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${themeClasses.textSm} ${themeClasses.themeMutedFg} ${isCompact ? 'mb-2' : 'mb-3'}`,
                                            children: theme.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 1214,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${theme.preview.bg} ${theme.preview.border} border rounded p-2 space-y-1`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `h-2 accent-bg rounded`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1219,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `h-1 ${theme.preview.text} bg-current opacity-50 rounded`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1220,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `h-1 ${theme.preview.text} bg-current opacity-30 rounded w-3/4`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1221,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 1218,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, theme.id, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 1193,
                                    columnNumber: 29
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1187,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 1176,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-sm border ${themeClasses.themeBorder}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg} mb-4`,
                            children: t('accentColor')
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1231,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${themeClasses.textSm} ${themeClasses.themeMutedFg} mb-6`,
                            children: t('chooseAccentColor')
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1234,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `grid grid-cols-3 md:grid-cols-6 ${themeClasses.compactGap}`,
                            children: accentColors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>updatePreference('accentColor', color.id),
                                    className: `relative p-3 rounded-lg border-2 transition-all ${userPreferences.accentColor === color.id ? `accent-border ${themeClasses.themeCard}` : `${themeClasses.themeBorder} ${themeClasses.hover}`}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-8 h-8 ${color.class} rounded-full mx-auto mb-2`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 1248,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                            children: getColorTranslation(color.id)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 1249,
                                            columnNumber: 29
                                        }, this),
                                        userPreferences.accentColor === color.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-1 right-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: `w-3 h-3 accent-text`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 1254,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 1253,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, color.id, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 1240,
                                    columnNumber: 25
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1238,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 1230,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-sm border ${themeClasses.themeBorder}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg} mb-4`,
                            children: t('displaySettings')
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1264,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-3`,
                                            children: t('fontSize')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 1270,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `grid grid-cols-3 ${themeClasses.compactGap}`,
                                            children: [
                                                'small',
                                                'medium',
                                                'large'
                                            ].map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updatePreference('fontSize', size),
                                                    className: `p-3 rounded-lg border-2 transition-all ${userPreferences.fontSize === size ? 'accent-border bg-blue-50 dark:bg-blue-900/20' : `${themeClasses.themeBorder} ${themeClasses.hover}`}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base'} ${themeClasses.themeFg} font-medium capitalize`,
                                                        children: t(size)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 1283,
                                                        columnNumber: 37
                                                    }, this)
                                                }, size, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1275,
                                                    columnNumber: 33
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 1273,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 1269,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: `${themeClasses.textSm} font-medium ${themeClasses.themeFg}`,
                                                    children: t('compactMode')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1293,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                                    children: t('reduceSpacing')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1296,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 1292,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                            enabled: userPreferences.compactMode,
                                            onChange: (enabled)=>updatePreference('compactMode', enabled),
                                            disabled: loading
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 1300,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 1291,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1268,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 1263,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/organizer/settings/page.tsx",
            lineNumber: 1174,
            columnNumber: 9
        }, this);
    // Main render tab content function
    const renderTabContent = ()=>{
        if (profileLoading) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingSkeleton, {}, void 0, false, {
                fileName: "[project]/src/app/organizer/settings/page.tsx",
                lineNumber: 1314,
                columnNumber: 20
            }, this);
        }
        switch(activeTab){
            case 'profile':
                return renderProfileTab();
            case 'organization':
                return renderOrganizationTab();
            case 'notifications':
                return renderNotificationsTab();
            case 'security':
                return renderSecurityTab();
            case 'language':
                return renderLanguageTab();
            case 'events':
                return renderEventsTab();
            case 'appearance':
                return renderAppearanceTab();
            default:
                return renderProfileTab();
        }
    };
    const getThemeTranslation = (themeId)=>{
        const themeKeys = {
            light: 'lightMode',
            dark: 'darkMode',
            auto: 'autoMode'
        };
        return t(themeKeys[themeId] || 'lightMode');
    };
    const getColorTranslation = (colorId)=>{
        const colorKeys = {
            blue: 'blue',
            purple: 'purple',
            green: 'green',
            red: 'red',
            orange: 'orange',
            pink: 'pink'
        };
        return t(colorKeys[colorId] || 'blue');
    };
    const getSizeTranslation = (sizeId)=>{
        const sizeKeys = {
            small: 'small',
            medium: 'medium',
            large: 'large'
        };
        return t(sizeKeys[sizeId] || 'medium');
    };
    // Effects
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrganizerSettings.useEffect": ()=>{
            checkAuth();
        }
    }["OrganizerSettings.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrganizerSettings.useEffect": ()=>{
            if (authStatus === 'authenticated') {
                fetchUserData();
            }
        }
    }["OrganizerSettings.useEffect"], [
        authStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrganizerSettings.useEffect": ()=>{
            if (!profileLoading && authStatus === 'authenticated') {
                updateTheme({
                    theme: userPreferences.theme,
                    accentColor: userPreferences.accentColor,
                    fontSize: userPreferences.fontSize,
                    compactMode: userPreferences.compactMode
                });
            }
        }
    }["OrganizerSettings.useEffect"], [
        profileLoading,
        authStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrganizerSettings.useEffect": ()=>{
            if (currentLanguage && userPreferences.language !== currentLanguage) {
                setUserPreferences({
                    "OrganizerSettings.useEffect": (prev)=>({
                            ...prev,
                            language: currentLanguage
                        })
                }["OrganizerSettings.useEffect"]);
            }
        }
    }["OrganizerSettings.useEffect"], [
        currentLanguage
    ]);
    // Main render
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `max-w-7xl mx-auto ${isCompact ? 'p-4' : 'p-6'} ${themeClasses.themeBg} min-h-screen theme-transition`,
        children: [
            authStatus === 'checking' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-12 w-12 border-b-2 accent-border mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1406,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: themeClasses.themeFg,
                            children: t('checkingAuthentication')
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1407,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 1405,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/organizer/settings/page.tsx",
                lineNumber: 1404,
                columnNumber: 17
            }, this),
            authStatus === 'unauthenticated' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `text-center ${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-md`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                            className: "w-16 h-16 text-red-500 mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1416,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `${themeClasses.textXl} font-bold ${themeClasses.themeFg} mb-2`,
                            children: t('authenticationRequired')
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1417,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${themeClasses.themeMutedFg} mb-4`,
                            children: t('pleaseLoginToAccess')
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1420,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.location.href = '/login',
                            className: "btn-accent",
                            children: t('goToLogin')
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1423,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 1415,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/organizer/settings/page.tsx",
                lineNumber: 1414,
                columnNumber: 17
            }, this),
            authStatus === 'authenticated' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: isCompact ? 'mb-4' : 'mb-8',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: `${themeClasses.text3Xl} font-bold ${themeClasses.themeFg} mb-2`,
                                children: t('settings')
                            }, void 0, false, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 1437,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `${themeClasses.themeMutedFg} ${themeClasses.textBase}`,
                                children: t('manageAccount')
                            }, void 0, false, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 1440,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 1436,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col lg:flex-row ${themeClasses.compactGap}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:w-64",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${themeClasses.themeCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} ${themeClasses.compactCard}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "space-y-2",
                                        children: tabs.map((tab)=>{
                                            const Icon = tab.icon;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setActiveTab(tab.id);
                                                    setError(null);
                                                },
                                                className: `w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${activeTab === tab.id ? 'accent-bg text-white' : `${themeClasses.themeFg} ${themeClasses.hover}`}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 1464,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${themeClasses.textSm} font-medium`,
                                                        children: tab.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 1465,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, tab.id, true, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 1453,
                                                columnNumber: 45
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1449,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 1448,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 1447,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    renderTabContent(),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${isCompact ? 'mt-4' : 'mt-8'} flex justify-end`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleSave(activeTab),
                                            disabled: loading || profileLoading,
                                            className: "btn-accent disabled:opacity-50",
                                            children: [
                                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: "w-4 h-4 mr-2 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1487,
                                                    columnNumber: 41
                                                }, this) : saved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1489,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1491,
                                                    columnNumber: 41
                                                }, this),
                                                loading ? t('savingChanges') : saved ? t('saved') : t('saveChanges')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 1481,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1480,
                                        columnNumber: 29
                                    }, this),
                                    saved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-5 h-5 text-green-600 dark:text-green-400 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1501,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-green-800 dark:text-green-300",
                                                    children: t('settingsSavedSuccessfully')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1502,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 1500,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1499,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 1476,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 1445,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/organizer/settings/page.tsx",
        lineNumber: 1401,
        columnNumber: 9
    }, this);
};
_s(OrganizerSettings, "+TCBVHi9Wh2EHBCM5LcutLpL23M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$I18nProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18nContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeClasses"]
    ];
});
_c = OrganizerSettings;
const __TURBOPACK__default__export__ = OrganizerSettings;
var _c;
__turbopack_context__.k.register(_c, "OrganizerSettings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_organizer_settings_page_tsx_f3446a1e._.js.map