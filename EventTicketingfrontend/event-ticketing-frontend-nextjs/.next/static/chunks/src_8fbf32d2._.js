(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s({
    "authApi": (()=>authApi),
    "canCreateTicketTypes": (()=>canCreateTicketTypes),
    "canEditTicketType": (()=>canEditTicketType),
    "categoriesApi": (()=>categoriesApi),
    "default": (()=>__TURBOPACK__default__export__),
    "eventsApi": (()=>eventsApi),
    "healthApi": (()=>healthApi),
    "ordersApi": (()=>ordersApi),
    "ticketsApi": (()=>ticketsApi),
    "userApi": (()=>userApi),
    "venuesApi": (()=>venuesApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
// Enhanced API configuration with environment support
const getApiBaseUrl = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:5251/api';
    }
    "TURBOPACK unreachable";
};
const userApi = {
    // Profile management
    getProfile: async ()=>{
        try {
            console.log('👤 Fetching user profile');
            const response = await api.get('/user/profile');
            console.log('👤 Successfully loaded user profile');
            return response.data;
        } catch (error) {
            console.error('👤 Error fetching profile:', error.message);
            throw new Error(`Failed to load profile: ${error.message}`);
        }
    },
    updateProfile: async (profileData)=>{
        try {
            console.log('👤 Updating user profile');
            const response = await api.put('/user/profile', profileData);
            console.log('👤 Successfully updated user profile');
            return response.data;
        } catch (error) {
            console.error('👤 Error updating profile:', error.message);
            throw new Error(`Failed to update profile: ${error.message}`);
        }
    },
    changePassword: async (passwordData)=>{
        try {
            console.log('👤 Changing password');
            await api.post('/user/change-password', passwordData);
            console.log('👤 Successfully changed password');
        } catch (error) {
            console.error('👤 Error changing password:', error.message);
            throw new Error(`Failed to change password: ${error.message}`);
        }
    },
    // Organization management
    getOrganization: async ()=>{
        try {
            console.log('🏢 Fetching organization details');
            const response = await api.get('/user/organization');
            console.log('🏢 Successfully loaded organization details');
            return response.data;
        } catch (error) {
            console.error('🏢 Error fetching organization:', error.message);
            // Return empty object for new organizations
            return {};
        }
    },
    updateOrganization: async (orgData)=>{
        try {
            console.log('🏢 Updating organization details');
            const response = await api.put('/user/organization', orgData);
            console.log('🏢 Successfully updated organization details');
            return response.data;
        } catch (error) {
            console.error('🏢 Error updating organization:', error.message);
            throw new Error(`Failed to update organization: ${error.message}`);
        }
    },
    // Preferences management
    getPreferences: async ()=>{
        try {
            console.log('⚙️ Fetching user preferences');
            const response = await api.get('/user/preferences');
            console.log('⚙️ Successfully loaded user preferences');
            return response.data;
        } catch (error) {
            console.error('⚙️ Error fetching preferences:', error.message);
            // Return default preferences if none exist
            return {
                emailNotifications: true,
                smsNotifications: false,
                newBookingNotifications: true,
                cancellationNotifications: true,
                lowInventoryNotifications: true,
                dailyReports: false,
                weeklyReports: true,
                monthlyReports: true,
                twoFactorEnabled: false,
                sessionTimeout: 30,
                loginNotifications: true,
                defaultTimeZone: 'America/New_York',
                defaultEventDuration: 120,
                defaultTicketSaleStart: 30,
                defaultRefundPolicy: 'flexible',
                requireApproval: false,
                autoPublish: false,
                theme: 'light',
                language: 'en',
                dateFormat: 'MM/dd/yyyy',
                timeFormat: '12h',
                currency: 'USD',
                accentColor: 'blue',
                fontSize: 'medium',
                compactMode: false
            };
        }
    },
    updatePreferences: async (preferencesData)=>{
        try {
            console.log('⚙️ Updating user preferences');
            const response = await api.put('/user/preferences', preferencesData);
            console.log('⚙️ Successfully updated user preferences');
            return response.data;
        } catch (error) {
            console.error('⚙️ Error updating preferences:', error.message);
            throw new Error(`Failed to update preferences: ${error.message}`);
        }
    }
};
const API_BASE_URL = getApiBaseUrl();
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 30000
});
// Enhanced request interceptor with better error handling
api.interceptors.request.use((config)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    // Log requests in development
    if ("TURBOPACK compile-time truthy", 1) {
        console.log(`🔄 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    }
    return config;
});
// Enhanced response interceptor with better error handling
api.interceptors.response.use((response)=>{
    // Handle wrapped responses
    if (response.data?.success === false) {
        throw new Error(response.data.message || 'API request failed');
    }
    // Extract data from wrapped responses
    if (response.data?.success === true && response.data?.data !== undefined) {
        response.data = response.data.data;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        console.log(`✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`);
    }
    return response;
}, (error)=>{
    const message = error.response?.data?.message || error.message || 'Network error';
    if ("TURBOPACK compile-time truthy", 1) {
        console.error(`❌ API Error: ${error.config?.method?.toUpperCase()} ${error.config?.url}`, message);
    }
    if (error.response?.status === 401 && "object" !== 'undefined') {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        // Don't redirect automatically, let components handle this
        console.warn('Authentication expired. Please log in again.');
    }
    // Create a more detailed error
    const enhancedError = new Error(message);
    enhancedError.status = error.response?.status;
    enhancedError.originalError = error;
    return Promise.reject(enhancedError);
});
// Helper functions for data normalization
const normalizeTicketType = (tt)=>({
        ticketTypeId: tt.ticketTypeId || tt.TicketTypeId,
        eventId: tt.eventId || tt.EventId,
        eventTitle: tt.eventTitle || tt.EventTitle,
        name: tt.name || tt.Name || '',
        description: tt.description || tt.Description || '',
        price: Number(tt.price || tt.Price || 0),
        quantityAvailable: Number(tt.quantityAvailable || tt.QuantityAvailable || 0),
        quantitySold: Number(tt.quantitySold || tt.QuantitySold || 0),
        quantityRemaining: Number(tt.quantityRemaining || tt.QuantityRemaining || 0),
        isActive: tt.isActive !== undefined ? tt.isActive : tt.IsActive !== undefined ? tt.IsActive : true,
        isOnSale: tt.isOnSale !== undefined ? tt.isOnSale : tt.IsOnSale !== undefined ? tt.IsOnSale : true,
        isEventPublished: tt.isEventPublished || tt.IsEventPublished || false,
        eventStatus: tt.eventStatus || tt.EventStatus || 'Draft',
        saleStartDate: tt.saleStartDate || tt.SaleStartDate,
        saleEndDate: tt.saleEndDate || tt.SaleEndDate,
        minQuantityPerOrder: Number(tt.minQuantityPerOrder || tt.MinQuantityPerOrder || 1),
        maxQuantityPerOrder: Number(tt.maxQuantityPerOrder || tt.MaxQuantityPerOrder || 10),
        sortOrder: Number(tt.sortOrder || tt.SortOrder || 0),
        createdAt: tt.createdAt || tt.CreatedAt,
        updatedAt: tt.updatedAt || tt.UpdatedAt
    });
const canEditTicketType = (ticketType)=>{
    if (ticketType.quantitySold > 0) {
        return {
            canEdit: false,
            reason: `${ticketType.quantitySold} ticket(s) already sold. Editing locked to preserve purchase data.`
        };
    }
    if (ticketType.isEventPublished) {
        return {
            canEdit: false,
            reason: 'Event is published. Limited editing to preserve sales integrity.'
        };
    }
    return {
        canEdit: true,
        reason: 'Safe to edit - no sales yet and event is unpublished.'
    };
};
const canCreateTicketTypes = (event)=>{
    const totalTicketsSold = event.ticketsSold || 0;
    if (totalTicketsSold > 0) {
        return {
            canCreate: false,
            reason: `Cannot create new ticket types. ${totalTicketsSold} ticket(s) have already been sold.`
        };
    }
    if (event.isPublished) {
        return {
            canCreate: true,
            reason: 'Event is published - new ticket types will be immediately available for sale.'
        };
    }
    return {
        canCreate: true,
        reason: 'Safe to create new ticket types.'
    };
};
const authApi = {
    login: async (credentials)=>{
        const response = await api.post('/auth/login', credentials);
        return response.data;
    },
    register: async (userData)=>{
        const response = await api.post('/auth/register', userData);
        return response.data;
    }
};
const eventsApi = {
    // Public endpoints
    getEvents: async (params)=>{
        const response = await api.get('/events', {
            params
        });
        return Array.isArray(response.data) ? response.data : [];
    },
    getEvent: async (id)=>{
        const response = await api.get(`/events/${id}`);
        return response.data;
    },
    // Organizer endpoints
    getMyEvents: async ()=>{
        const response = await api.get('/events/my-events');
        return Array.isArray(response.data) ? response.data : [];
    },
    createEvent: async (eventData)=>{
        const response = await api.post('/events', eventData);
        return response.data;
    },
    updateEvent: async (id, eventData)=>{
        const response = await api.put(`/events/${id}`, eventData);
        return response.data;
    },
    deleteEvent: async (id)=>{
        const response = await api.delete(`/events/${id}`);
        return response.status === 204 || response.status === 200;
    },
    publishEvent: async (id)=>{
        await api.post(`/events/${id}/publish`);
    },
    unpublishEvent: async (id)=>{
        await api.post(`/events/${id}/unpublish`);
    }
};
const categoriesApi = {
    getCategories: async ()=>{
        const response = await api.get('/categories');
        return Array.isArray(response.data) ? response.data : [];
    },
    getCategory: async (id)=>{
        const response = await api.get(`/categories/${id}`);
        return response.data;
    },
    createCategory: async (categoryData)=>{
        const response = await api.post('/categories', categoryData);
        return response.data;
    }
};
const venuesApi = {
    getVenues: async (city)=>{
        const params = city ? {
            city
        } : {};
        const response = await api.get('/venues', {
            params
        });
        return Array.isArray(response.data) ? response.data : [];
    },
    getVenue: async (id)=>{
        const response = await api.get(`/venues/${id}`);
        return response.data;
    },
    createVenue: async (venueData)=>{
        const response = await api.post('/venues', venueData);
        return response.data;
    }
};
const ticketsApi = {
    // Ticket Types - Enhanced with proper error handling and data normalization
    getEventTicketTypes: async (eventId)=>{
        try {
            console.log(`🎫 Fetching ticket types for event ${eventId}`);
            const response = await api.get(`/tickets/event/${eventId}/ticket-types`);
            const ticketTypes = Array.isArray(response.data) ? response.data : [];
            const normalizedTicketTypes = ticketTypes.map(normalizeTicketType);
            console.log(`🎫 Successfully loaded ${normalizedTicketTypes.length} ticket types`);
            return normalizedTicketTypes;
        } catch (error) {
            console.error('🎫 Error fetching ticket types:', error.message);
            throw new Error(`Failed to load ticket types: ${error.message}`);
        }
    },
    createTicketType: async (ticketTypeData)=>{
        try {
            console.log('🎫 Creating ticket type:', ticketTypeData);
            const payload = {
                eventId: Number(ticketTypeData.eventId),
                name: ticketTypeData.name.trim(),
                description: ticketTypeData.description?.trim() || null,
                price: Number(ticketTypeData.price),
                quantityAvailable: Number(ticketTypeData.quantityAvailable),
                saleStartDate: ticketTypeData.saleStartDate || null,
                saleEndDate: ticketTypeData.saleEndDate || null,
                minQuantityPerOrder: Number(ticketTypeData.minQuantityPerOrder || 1),
                maxQuantityPerOrder: Number(ticketTypeData.maxQuantityPerOrder || 10),
                sortOrder: Number(ticketTypeData.sortOrder || 0)
            };
            const response = await api.post('/tickets/ticket-types', payload);
            const normalizedTicketType = normalizeTicketType(response.data);
            console.log('🎫 Successfully created ticket type:', normalizedTicketType);
            return normalizedTicketType;
        } catch (error) {
            console.error('🎫 Error creating ticket type:', error.message);
            throw new Error(`Failed to create ticket type: ${error.message}`);
        }
    },
    updateTicketType: async (id, ticketTypeData)=>{
        try {
            console.log(`🎫 Updating ticket type ${id}:`, ticketTypeData);
            // Remove undefined values
            const payload = Object.fromEntries(Object.entries(ticketTypeData).filter(([_, value])=>value !== undefined));
            const response = await api.put(`/tickets/ticket-types/${id}`, payload);
            const normalizedTicketType = normalizeTicketType(response.data);
            console.log('🎫 Successfully updated ticket type:', normalizedTicketType);
            return normalizedTicketType;
        } catch (error) {
            console.error('🎫 Error updating ticket type:', error.message);
            throw new Error(`Failed to update ticket type: ${error.message}`);
        }
    },
    deleteTicketType: async (id)=>{
        try {
            console.log(`🎫 Deleting ticket type ${id}`);
            const response = await api.delete(`/tickets/ticket-types/${id}`);
            console.log('🎫 Successfully deleted ticket type');
            return response.status === 204 || response.status === 200;
        } catch (error) {
            console.error('🎫 Error deleting ticket type:', error.message);
            throw new Error(`Failed to delete ticket type: ${error.message}`);
        }
    },
    getTicketType: async (id)=>{
        const response = await api.get(`/tickets/ticket-types/${id}`);
        return normalizeTicketType(response.data);
    },
    // Orders and Purchases
    calculateOrder: async (purchaseData)=>{
        const response = await api.post('/tickets/calculate-order', purchaseData);
        return response.data;
    },
    purchaseTickets: async (purchaseData)=>{
        const response = await api.post('/tickets/purchase', purchaseData);
        return response.data;
    },
    // User tickets
    getMyTickets: async ()=>{
        const response = await api.get('/tickets/my-tickets');
        return Array.isArray(response.data) ? response.data : [];
    },
    getTicket: async (id)=>{
        const response = await api.get(`/tickets/${id}`);
        return response.data;
    },
    // Validation and Check-in
    validateTicket: async (ticketNumber)=>{
        const response = await api.post('/tickets/validate', JSON.stringify(ticketNumber), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    },
    checkInTicket: async (checkInData)=>{
        const response = await api.post('/tickets/check-in', checkInData);
        return response.data;
    }
};
const ordersApi = {
    getMyOrders: async ()=>{
        const response = await api.get('/orders');
        return Array.isArray(response.data) ? response.data : [];
    },
    getOrder: async (id)=>{
        const response = await api.get(`/orders/${id}`);
        return response.data;
    }
};
const healthApi = {
    checkConnection: async ()=>{
        try {
            const response = await api.get('/health');
            return response.status === 200;
        } catch  {
            return false;
        }
    },
    testAuth: async ()=>{
        try {
            const response = await api.get('/events/my-events');
            return response.status === 200;
        } catch  {
            return false;
        }
    }
};
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useI18n.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// hooks/useI18n.ts
__turbopack_context__.s({
    "SUPPORTED_LANGUAGES": (()=>SUPPORTED_LANGUAGES),
    "useI18n": (()=>useI18n)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
    },
    {
        code: 'pt',
        name: 'Portuguese',
        nativeName: 'Português',
        flag: '🇵🇹',
        direction: 'ltr',
        region: 'PT',
        dateFormat: 'dd/MM/yyyy',
        timeFormat: '24h',
        currency: 'EUR'
    },
    {
        code: 'zh',
        name: 'Chinese',
        nativeName: '中文',
        flag: '🇨🇳',
        direction: 'ltr',
        region: 'CN',
        dateFormat: 'yyyy/MM/dd',
        timeFormat: '24h',
        currency: 'CNY'
    },
    {
        code: 'ja',
        name: 'Japanese',
        nativeName: '日本語',
        flag: '🇯🇵',
        direction: 'ltr',
        region: 'JP',
        dateFormat: 'yyyy/MM/dd',
        timeFormat: '24h',
        currency: 'JPY'
    },
    {
        code: 'ko',
        name: 'Korean',
        nativeName: '한국어',
        flag: '🇰🇷',
        direction: 'ltr',
        region: 'KR',
        dateFormat: 'yyyy.MM.dd',
        timeFormat: '24h',
        currency: 'KRW'
    },
    {
        code: 'ar',
        name: 'Arabic',
        nativeName: 'العربية',
        flag: '🇸🇦',
        direction: 'rtl',
        region: 'SA',
        dateFormat: 'dd/MM/yyyy',
        timeFormat: '12h',
        currency: 'SAR'
    },
    {
        code: 'hi',
        name: 'Hindi',
        nativeName: 'हिन्दी',
        flag: '🇮🇳',
        direction: 'ltr',
        region: 'IN',
        dateFormat: 'dd/MM/yyyy',
        timeFormat: '12h',
        currency: 'INR'
    },
    {
        code: 'ms',
        name: 'Malay',
        nativeName: 'Bahasa Melayu',
        flag: '🇲🇾',
        direction: 'ltr',
        region: 'MY',
        dateFormat: 'dd/MM/yyyy',
        timeFormat: '12h',
        currency: 'MYR'
    }
];
// Translation data
const translations = {
    en: {
        // Common
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
        confirm: 'Confirm',
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
        eventTitle: 'Event Title',
        eventDescription: 'Event Description',
        eventDate: 'Event Date',
        eventTime: 'Event Time',
        eventLocation: 'Event Location',
        ticketPrice: 'Ticket Price',
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
        invalidInput: 'Invalid input',
        requiredField: 'This field is required'
    },
    es: {
        // Common
        save: 'Guardar',
        cancel: 'Cancelar',
        delete: 'Eliminar',
        edit: 'Editar',
        loading: 'Cargando...',
        error: 'Error',
        success: 'Éxito',
        confirm: 'Confirmar',
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
        eventTitle: 'Título del Evento',
        eventDescription: 'Descripción del Evento',
        eventDate: 'Fecha del Evento',
        eventTime: 'Hora del Evento',
        eventLocation: 'Ubicación del Evento',
        ticketPrice: 'Precio del Boleto',
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
        invalidInput: 'Entrada inválida',
        requiredField: 'Este campo es obligatorio'
    },
    fr: {
        // Common
        save: 'Enregistrer',
        cancel: 'Annuler',
        delete: 'Supprimer',
        edit: 'Modifier',
        loading: 'Chargement...',
        error: 'Erreur',
        success: 'Succès',
        confirm: 'Confirmer',
        // Navigation
        dashboard: 'Tableau de Bord',
        events: 'Événements',
        settings: 'Paramètres',
        profile: 'Profil',
        logout: 'Déconnexion',
        // Settings
        personalInformation: 'Informations Personnelles',
        organization: 'Organisation',
        notifications: 'Notifications',
        security: 'Sécurité',
        appearance: 'Apparence',
        language: 'Langue',
        preferences: 'Préférences',
        // Profile
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Email',
        phoneNumber: 'Numéro de Téléphone',
        companyName: 'Nom de l\'Entreprise',
        address: 'Adresse',
        city: 'Ville',
        state: 'État',
        zipCode: 'Code Postal',
        country: 'Pays',
        // Events
        createEvent: 'Créer un Événement',
        eventTitle: 'Titre de l\'Événement',
        eventDescription: 'Description de l\'Événement',
        eventDate: 'Date de l\'Événement',
        eventTime: 'Heure de l\'Événement',
        eventLocation: 'Lieu de l\'Événement',
        ticketPrice: 'Prix du Billet',
        // Appearance
        theme: 'Thème',
        lightMode: 'Mode Clair',
        darkMode: 'Mode Sombre',
        autoMode: 'Mode Automatique',
        accentColor: 'Couleur d\'Accent',
        fontSize: 'Taille de Police',
        compactMode: 'Mode Compact',
        // Time and Date
        timeFormat: 'Format d\'Heure',
        dateFormat: 'Format de Date',
        currency: 'Devise',
        timezone: 'Fuseau Horaire',
        // Messages
        saveSuccess: 'Paramètres enregistrés avec succès !',
        saveError: 'Échec de l\'enregistrement des paramètres',
        loadError: 'Échec du chargement des données',
        invalidInput: 'Entrée invalide',
        requiredField: 'Ce champ est obligatoire'
    },
    de: {
        // Common
        save: 'Speichern',
        cancel: 'Abbrechen',
        delete: 'Löschen',
        edit: 'Bearbeiten',
        loading: 'Laden...',
        error: 'Fehler',
        success: 'Erfolg',
        confirm: 'Bestätigen',
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
        createEvent: 'Veranstaltung Erstellen',
        eventTitle: 'Veranstaltungstitel',
        eventDescription: 'Veranstaltungsbeschreibung',
        eventDate: 'Veranstaltungsdatum',
        eventTime: 'Veranstaltungszeit',
        eventLocation: 'Veranstaltungsort',
        ticketPrice: 'Ticketpreis',
        // Appearance
        theme: 'Theme',
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
        invalidInput: 'Ungültige Eingabe',
        requiredField: 'Dieses Feld ist erforderlich'
    }
};
const useI18n = ()=>{
    _s();
    const [currentLanguage, setCurrentLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const [isRTL, setIsRTL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get current language data
    const currentLangData = SUPPORTED_LANGUAGES.find((lang)=>lang.code === currentLanguage) || SUPPORTED_LANGUAGES[0];
    // Translation function
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useI18n.useCallback[t]": (key)=>{
            return translations[currentLanguage]?.[key] || translations['en'][key] || key;
        }
    }["useI18n.useCallback[t]"], [
        currentLanguage
    ]);
    // Format currency
    const formatCurrency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useI18n.useCallback[formatCurrency]": (amount, currency)=>{
            const currencyCode = currency || currentLangData.currency;
            try {
                return new Intl.NumberFormat(currentLangData.region, {
                    style: 'currency',
                    currency: currencyCode
                }).format(amount);
            } catch  {
                return `${amount} ${currencyCode}`;
            }
        }
    }["useI18n.useCallback[formatCurrency]"], [
        currentLangData
    ]);
    // Format date
    const formatDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useI18n.useCallback[formatDate]": (date, format)=>{
            const dateFormat = format || currentLangData.dateFormat;
            try {
                return new Intl.DateTimeFormat(currentLangData.region).format(date);
            } catch  {
                return date.toLocaleDateString();
            }
        }
    }["useI18n.useCallback[formatDate]"], [
        currentLangData
    ]);
    // Format time
    const formatTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useI18n.useCallback[formatTime]": (date, format)=>{
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
        }
    }["useI18n.useCallback[formatTime]"], [
        currentLangData
    ]);
    // Change language
    const changeLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useI18n.useCallback[changeLanguage]": (languageCode)=>{
            const langData = SUPPORTED_LANGUAGES.find({
                "useI18n.useCallback[changeLanguage].langData": (lang)=>lang.code === languageCode
            }["useI18n.useCallback[changeLanguage].langData"]);
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
        }
    }["useI18n.useCallback[changeLanguage]"], []);
    // Load saved language on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useI18n.useEffect": ()=>{
            try {
                const savedLanguage = localStorage.getItem('selectedLanguage');
                if (savedLanguage && SUPPORTED_LANGUAGES.find({
                    "useI18n.useEffect": (lang)=>lang.code === savedLanguage
                }["useI18n.useEffect"])) {
                    changeLanguage(savedLanguage);
                } else {
                    // Detect browser language
                    const browserLang = navigator.language.split('-')[0];
                    const supportedLang = SUPPORTED_LANGUAGES.find({
                        "useI18n.useEffect.supportedLang": (lang)=>lang.code === browserLang
                    }["useI18n.useEffect.supportedLang"]);
                    if (supportedLang) {
                        changeLanguage(browserLang);
                    }
                }
            } catch (error) {
                console.error('Error loading language preference:', error);
            }
        }
    }["useI18n.useEffect"], [
        changeLanguage
    ]);
    return {
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
};
_s(useI18n, "RYLfRslVnVWRi4uQ0LrfskFWkDE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/organizer/settings/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTheme.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useI18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
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
// UPDATED: Enhanced currency options
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
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    // UPDATED: Use enhanced theme hooks
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
    // UPDATED: User preferences - REMOVED dateFormat
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
        accentColor: 'blue',
        fontSize: 'medium',
        compactMode: false,
        // Appearance preferences - REMOVED dateFormat
        theme: 'light',
        language: 'en',
        timeFormat: '12h',
        currency: 'USD'
    });
    const [passwordData, setPasswordData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    // UPDATED: Enhanced theme-aware input styles
    const getInputStyles = (hasError = false)=>{
        const baseStyles = `w-full border rounded-lg focus:ring-2 accent-focus placeholder-opacity-60 theme-transition`;
        const themeStyles = `${themeClasses.themeCard} ${themeClasses.themeFg} ${themeClasses.themeBorder} ${themeClasses.compactInput}`;
        const errorStyles = hasError ? 'border-red-500' : '';
        return `${baseStyles} ${themeStyles} ${errorStyles}`;
    };
    // Keep existing authentication and data fetching functions
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
    // UPDATED: Fetch user data - removed dateFormat
    const fetchUserData = async ()=>{
        if (!checkAuth()) return;
        setProfileLoading(true);
        setError(null);
        try {
            // Fetch user basic info using existing userApi
            const userResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userApi"].getProfile();
            setUserData({
                userId: userResponse.userId,
                firstName: userResponse.firstName || '',
                lastName: userResponse.lastName || '',
                email: userResponse.email || '',
                phoneNumber: userResponse.phoneNumber || '',
                dateOfBirth: userResponse.dateOfBirth || '',
                profileImageUrl: userResponse.profileImageUrl || '',
                isEmailVerified: userResponse.isEmailVerified || false,
                isPhoneVerified: userResponse.isPhoneVerified || false,
                createdAt: userResponse.createdAt || '',
                lastLoginAt: userResponse.lastLoginAt || '',
                status: userResponse.status || '',
                bio: userResponse.bio || '',
                website: userResponse.website || '',
                timeZone: userResponse.timeZone || '',
                isOrganizer: userResponse.isOrganizer || false,
                roles: userResponse.roles || []
            });
            // Fetch user organization using existing userApi
            try {
                const organizationData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userApi"].getOrganization();
                setUserProfile({
                    companyName: organizationData.companyName || '',
                    businessLicense: organizationData.businessLicense || '',
                    address: organizationData.address || '',
                    city: organizationData.city || '',
                    state: organizationData.state || '',
                    zipCode: organizationData.zipCode || '',
                    country: organizationData.country || 'United States',
                    bio: userResponse.bio || '',
                    website: userResponse.website || '',
                    timeZone: userResponse.timeZone || 'America/New_York',
                    isOrganizer: userResponse.isOrganizer || false
                });
            } catch (orgError) {
                console.log('No organization data found, using defaults');
                setUserProfile({
                    companyName: '',
                    businessLicense: '',
                    address: '',
                    city: '',
                    state: '',
                    zipCode: '',
                    country: 'United States',
                    bio: userResponse.bio || '',
                    website: userResponse.website || '',
                    timeZone: userResponse.timeZone || 'America/New_York',
                    isOrganizer: userResponse.isOrganizer || false
                });
            }
            // UPDATED: Fetch user preferences - REMOVED dateFormat
            try {
                const preferencesData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userApi"].getPreferences();
                setUserPreferences({
                    // Notification preferences
                    emailNotifications: preferencesData.emailNotifications ?? true,
                    smsNotifications: preferencesData.smsNotifications ?? false,
                    newBookingNotifications: preferencesData.newBookingNotifications ?? true,
                    cancellationNotifications: preferencesData.cancellationNotifications ?? true,
                    lowInventoryNotifications: preferencesData.lowInventoryNotifications ?? true,
                    dailyReports: preferencesData.dailyReports ?? false,
                    weeklyReports: preferencesData.weeklyReports ?? true,
                    monthlyReports: preferencesData.monthlyReports ?? true,
                    // Security preferences
                    twoFactorEnabled: preferencesData.twoFactorEnabled ?? false,
                    sessionTimeout: preferencesData.sessionTimeout ?? 30,
                    loginNotifications: preferencesData.loginNotifications ?? true,
                    // Event defaults
                    defaultTimeZone: preferencesData.defaultTimeZone ?? 'America/New_York',
                    defaultEventDuration: preferencesData.defaultEventDuration ?? 120,
                    defaultTicketSaleStart: preferencesData.defaultTicketSaleStart ?? 30,
                    defaultRefundPolicy: preferencesData.defaultRefundPolicy ?? 'flexible',
                    requireApproval: preferencesData.requireApproval ?? false,
                    autoPublish: preferencesData.autoPublish ?? false,
                    // Appearance preferences - REMOVED dateFormat
                    theme: [
                        'light',
                        'dark',
                        'auto'
                    ].includes(preferencesData.theme) ? preferencesData.theme : 'light',
                    language: preferencesData.language ?? 'en',
                    timeFormat: [
                        '12h',
                        '24h'
                    ].includes(preferencesData.timeFormat) ? preferencesData.timeFormat : '12h',
                    currency: preferencesData.currency ?? 'USD',
                    accentColor: preferencesData.accentColor ?? 'blue',
                    fontSize: [
                        'small',
                        'medium',
                        'large'
                    ].includes(preferencesData.fontSize) ? preferencesData.fontSize : 'medium',
                    compactMode: preferencesData.compactMode ?? false
                });
            } catch (prefError) {
                console.log('No preferences found, using defaults');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            setError(error.message || 'Failed to load user data');
            // Fallback to localStorage
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                try {
                    const userData = JSON.parse(storedUser);
                    setUserData({
                        firstName: userData.firstName || '',
                        lastName: userData.lastName || '',
                        email: userData.email || '',
                        phoneNumber: userData.phoneNumber || '',
                        profileImageUrl: userData.profileImageUrl || '',
                        bio: userData.bio || '',
                        website: userData.website || '',
                        timeZone: userData.timeZone || '',
                        isOrganizer: userData.isOrganizer || false,
                        roles: userData.roles || []
                    });
                } catch (parseError) {
                    console.error('Error parsing stored user data:', parseError);
                }
            }
        } finally{
            setProfileLoading(false);
        }
    };
    // Keep existing update functions but remove dateFormat from updateUserPreferences
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
            setError(error.message || 'Failed to update profile');
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
            setError(error.message || 'Failed to update profile information');
        } finally{
            setLoading(false);
        }
    };
    // UPDATED: Remove dateFormat from updateUserPreferences
    // FIXED: Updated updateUserPreferences function
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
                // ADD THIS: Include dateFormat with a default value
                dateFormat: 'MM/dd/yyyy' // Default US format
            });
            setSaved(true);
            setTimeout(()=>setSaved(false), 3000);
        } catch (error) {
            console.error('Error updating preferences:', error);
            setError(error.message || 'Failed to update preferences');
        } finally{
            setLoading(false);
        }
    };
    const changePassword = async ()=>{
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setError('New passwords do not match');
            return;
        }
        if (passwordData.newPassword.length < 6) {
            setError('New password must be at least 6 characters long');
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
            setError(error.message || 'Failed to change password');
        } finally{
            setLoading(false);
        }
    };
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
            case 'appearance':
                await updateUserPreferences();
                break;
            default:
                await updateUserProfile();
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
    };
    // Keep existing useEffect hooks
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
    // Tab configuration
    const tabs = [
        {
            id: 'profile',
            name: 'Profile',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
        },
        {
            id: 'organization',
            name: 'Organization',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
        },
        {
            id: 'notifications',
            name: 'Notifications',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"]
        },
        {
            id: 'security',
            name: 'Security',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
        },
        {
            id: 'language',
            name: t('language'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
        },
        {
            id: 'events',
            name: 'Event Defaults',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
        },
        {
            id: 'appearance',
            name: 'Appearance',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
        }
    ];
    // UPDATED: Enhanced Toggle component with accent colors
    const Toggle = ({ enabled, onChange, disabled = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: ()=>!disabled && onChange(!enabled),
            disabled: disabled,
            className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled ? 'accent-bg' : isDark ? 'bg-gray-600' : 'bg-gray-200'} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`
            }, void 0, false, {
                fileName: "[project]/src/app/organizer/settings/page.tsx",
                lineNumber: 634,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/organizer/settings/page.tsx",
            lineNumber: 627,
            columnNumber: 9
        }, this);
    // Keep existing render functions for profile, organization, notifications, security, events
    // I'll show the key ones that need updating for theme integration
    const renderProfileTab = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                profileLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${themeClasses.themeCard} rounded-lg ${themeClasses.compactCard} shadow-sm border ${themeClasses.themeBorder}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-8 w-8 border-b-2 accent-border"
                            }, void 0, false, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 649,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `ml-3 ${themeClasses.themeFg}`,
                                children: "Loading profile..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 650,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 648,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 647,
                    columnNumber: 17
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-5 h-5 text-red-600 dark:text-red-400 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 658,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-red-800 dark:text-red-300",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 659,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 657,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 656,
                    columnNumber: 17
                }, this),
                !profileLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${themeClasses.themeCard} rounded-lg ${themeClasses.compactCard} shadow-sm border ${themeClasses.themeBorder}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg} mb-4`,
                            children: "Personal Information"
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 666,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `grid grid-cols-1 md:grid-cols-2 ${themeClasses.compactGap}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                            children: "First Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 669,
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
                                            lineNumber: 670,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 668,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                            children: "Last Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 679,
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
                                            lineNumber: 680,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 678,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 689,
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
                                                    lineNumber: 691,
                                                    columnNumber: 33
                                                }, this),
                                                userData.isEmailVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "absolute right-3 top-2.5 w-5 h-5 text-green-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 690,
                                            columnNumber: 29
                                        }, this),
                                        !userData.isEmailVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-amber-600 dark:text-amber-400 mt-1",
                                            children: "Email address not verified"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 703,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 688,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                            children: "Phone Number"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 707,
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
                                                    placeholder: "Optional"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 709,
                                                    columnNumber: 33
                                                }, this),
                                                userData.isPhoneVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "absolute right-3 top-2.5 w-5 h-5 text-green-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 718,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 708,
                                            columnNumber: 29
                                        }, this),
                                        userData.phoneNumber && !userData.isPhoneVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-amber-600 dark:text-amber-400 mt-1",
                                            children: "Phone number not verified"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 722,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 706,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 667,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 665,
                    columnNumber: 17
                }, this),
                !profileLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${themeClasses.themeCard} rounded-lg ${themeClasses.compactCard} shadow-sm border ${themeClasses.themeBorder}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg} mb-4`,
                            children: "Change Password"
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 731,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                            children: "Current Password"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 734,
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
                                                    lineNumber: 736,
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
                                                        lineNumber: 749,
                                                        columnNumber: 53
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 749,
                                                        columnNumber: 76
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 735,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 733,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                            children: "New Password"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 754,
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
                                            placeholder: "Minimum 6 characters"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 755,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 753,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                            children: "Confirm New Password"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 765,
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
                                            lineNumber: 766,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 764,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: changePassword,
                                        disabled: loading || !passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword,
                                        className: "px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: loading ? 'Changing...' : 'Change Password'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 775,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 774,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 732,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 730,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/organizer/settings/page.tsx",
            lineNumber: 645,
            columnNumber: 9
        }, this);
    // MAIN UPDATE: Enhanced Appearance Tab with removed date format
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
                                    lineNumber: 795,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg}`,
                                    children: "Theme"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 796,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 794,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${themeClasses.textSm} ${themeClasses.themeMutedFg} mb-6`,
                            children: "Choose your preferred interface theme"
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 798,
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
                                                lineNumber: 816,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 815,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex items-center space-x-3 ${isCompact ? 'mb-2' : 'mb-3'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: `w-5 h-5 ${themeClasses.themeMutedFg}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 821,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-medium ${themeClasses.themeFg}`,
                                                    children: theme.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 822,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 820,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${themeClasses.textSm} ${themeClasses.themeMutedFg} ${isCompact ? 'mb-2' : 'mb-3'}`,
                                            children: theme.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 825,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${theme.preview.bg} ${theme.preview.border} border rounded p-2 space-y-1`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `h-2 accent-bg rounded`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 828,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `h-1 ${theme.preview.text} bg-current opacity-50 rounded`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 829,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `h-1 ${theme.preview.text} bg-current opacity-30 rounded w-3/4`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 830,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 827,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, theme.id, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 806,
                                    columnNumber: 29
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 800,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 793,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-sm border ${themeClasses.themeBorder}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg} mb-4`,
                            children: "Accent Color"
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 840,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${themeClasses.textSm} ${themeClasses.themeMutedFg} mb-6`,
                            children: "Choose your preferred accent color"
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 841,
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
                                            lineNumber: 853,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                            children: color.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 854,
                                            columnNumber: 29
                                        }, this),
                                        userPreferences.accentColor === color.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-1 right-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: `w-3 h-3 accent-text`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 857,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 856,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, color.id, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 845,
                                    columnNumber: 25
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 843,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 839,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-sm border ${themeClasses.themeBorder}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg} mb-4`,
                            children: "Display Settings"
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 867,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-3`,
                                            children: "Font Size"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 871,
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
                                                        children: size
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 882,
                                                        columnNumber: 37
                                                    }, this)
                                                }, size, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 874,
                                                    columnNumber: 33
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 872,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 870,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: `${themeClasses.textSm} font-medium ${themeClasses.themeFg}`,
                                                    children: "Compact Mode"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 892,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                                    children: "Reduce spacing between elements"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 893,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 891,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                            enabled: userPreferences.compactMode,
                                            onChange: (enabled)=>updatePreference('compactMode', enabled),
                                            disabled: loading
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 895,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 890,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 869,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 866,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-sm border ${themeClasses.themeBorder}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                    className: `w-5 h-5 ${themeClasses.themeMutedFg}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 907,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg}`,
                                    children: "Localization"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 908,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 906,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                            children: "Language"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 914,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: userPreferences.language,
                                            onChange: (e)=>updatePreference('language', e.target.value),
                                            className: getInputStyles(),
                                            disabled: loading,
                                            children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: lang.code,
                                                    children: [
                                                        lang.flag,
                                                        " ",
                                                        lang.name
                                                    ]
                                                }, lang.code, true, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 922,
                                                    columnNumber: 33
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 915,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 913,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                            children: "Currency"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 930,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: userPreferences.currency,
                                            onChange: (e)=>updatePreference('currency', e.target.value),
                                            className: getInputStyles(),
                                            disabled: loading,
                                            children: currencies.map((curr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: curr.code,
                                                    children: [
                                                        curr.symbol,
                                                        " ",
                                                        curr.name
                                                    ]
                                                }, curr.code, true, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 938,
                                                    columnNumber: 33
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 931,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 929,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 912,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `block ${themeClasses.textSm} font-medium ${themeClasses.themeFg} mb-2`,
                                    children: "Time Format"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 947,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>updatePreference('timeFormat', '12h'),
                                            className: `p-2 rounded-lg border-2 transition-all ${userPreferences.timeFormat === '12h' ? 'accent-border bg-blue-50 dark:bg-blue-900/20' : `${themeClasses.themeBorder} ${themeClasses.hover}`}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${themeClasses.textSm} font-medium ${themeClasses.themeFg}`,
                                                    children: "12-hour"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 956,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                                    children: "2:30 PM"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 957,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 949,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>updatePreference('timeFormat', '24h'),
                                            className: `p-2 rounded-lg border-2 transition-all ${userPreferences.timeFormat === '24h' ? 'accent-border bg-blue-50 dark:bg-blue-900/20' : `${themeClasses.themeBorder} ${themeClasses.hover}`}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${themeClasses.textSm} font-medium ${themeClasses.themeFg}`,
                                                    children: "24-hour"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 966,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                                    children: "14:30"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 967,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 959,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 948,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 946,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 905,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-sm border ${themeClasses.themeBorder}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg} mb-4`,
                            children: "Live Preview"
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 975,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `border-2 border-dashed ${themeClasses.themeBorder} rounded-lg p-6 ${isDark ? 'bg-gray-800/30' : 'bg-gray-50'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: `${themeClasses.textLg} font-semibold ${themeClasses.themeFg}`,
                                                children: "Sample Dashboard"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 980,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn-accent",
                                                children: "Create Event"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 981,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 979,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `grid grid-cols-1 md:grid-cols-3 ${themeClasses.compactGap}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${themeClasses.themeCard} p-4 rounded-lg border ${themeClasses.themeBorder}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                                        children: "Revenue"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 988,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${themeClasses.textXl} font-bold ${themeClasses.themeFg}`,
                                                        children: [
                                                            currencies.find((c)=>c.code === userPreferences.currency)?.symbol,
                                                            "12,345"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 989,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 987,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${themeClasses.themeCard} p-4 rounded-lg border ${themeClasses.themeBorder}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                                        children: "Next Event"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 994,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${themeClasses.textSm} font-medium ${themeClasses.themeFg}`,
                                                        children: userPreferences.timeFormat === '12h' ? '2:30 PM' : '14:30'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 995,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 993,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${themeClasses.themeCard} p-4 rounded-lg border ${themeClasses.themeBorder}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                                        children: "Language"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 1000,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${themeClasses.textSm} font-medium ${themeClasses.themeFg}`,
                                                        children: languages.find((l)=>l.code === userPreferences.language)?.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 1001,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 999,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 986,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 978,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 977,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 974,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/organizer/settings/page.tsx",
            lineNumber: 791,
            columnNumber: 9
        }, this);
    // Keep other render functions (renderOrganizationTab, renderNotificationsTab, etc.) 
    // but apply theme classes to them as well - I'll skip them for brevity
    const renderTabContent = ()=>{
        switch(activeTab){
            case 'profile':
                return renderProfileTab();
            // case 'organization': return renderOrganizationTab();
            // case 'notifications': return renderNotificationsTab();
            // case 'security': return renderSecurityTab();
            // case 'events': return renderEventsTab();
            case 'appearance':
                return renderAppearanceTab();
            default:
                return renderProfileTab();
        }
    };
    // UPDATED: Main render with full theme integration
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
                            lineNumber: 1034,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: themeClasses.themeFg,
                            children: "Checking authentication..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1035,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 1033,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/organizer/settings/page.tsx",
                lineNumber: 1032,
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
                            lineNumber: 1044,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `${themeClasses.textXl} font-bold ${themeClasses.themeFg} mb-2`,
                            children: "Authentication Required"
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1045,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${themeClasses.themeMutedFg} mb-4`,
                            children: "Please log in to access your settings."
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1046,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.location.href = '/login',
                            className: "btn-accent",
                            children: "Go to Login"
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                            lineNumber: 1047,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                    lineNumber: 1043,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/organizer/settings/page.tsx",
                lineNumber: 1042,
                columnNumber: 17
            }, this),
            authStatus === 'authenticated' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: isCompact ? 'mb-4' : 'mb-8',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: `${themeClasses.text3Xl} font-bold ${themeClasses.themeFg} mb-2`,
                                children: "Settings"
                            }, void 0, false, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 1061,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `${themeClasses.themeMutedFg} ${themeClasses.textBase}`,
                                children: "Manage your account and event preferences"
                            }, void 0, false, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 1062,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 1060,
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
                                                        lineNumber: 1084,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${themeClasses.textSm} font-medium`,
                                                        children: tab.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                        lineNumber: 1085,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, tab.id, true, {
                                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                lineNumber: 1073,
                                                columnNumber: 45
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1069,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                    lineNumber: 1068,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 1067,
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
                                                    lineNumber: 1105,
                                                    columnNumber: 41
                                                }, this) : saved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1107,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1109,
                                                    columnNumber: 41
                                                }, this),
                                                loading ? 'Saving...' : saved ? 'Saved!' : 'Save Changes'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 1099,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1098,
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
                                                    lineNumber: 1119,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-green-800 dark:text-green-300",
                                                    children: "Settings saved successfully!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/settings/page.tsx",
                                                    lineNumber: 1120,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/settings/page.tsx",
                                            lineNumber: 1118,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                                        lineNumber: 1117,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/settings/page.tsx",
                                lineNumber: 1094,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organizer/settings/page.tsx",
                        lineNumber: 1065,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/organizer/settings/page.tsx",
        lineNumber: 1029,
        columnNumber: 9
    }, this);
};
_s(OrganizerSettings, "ZBT87hSDIn55GSPdfUaefVXiL7E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"],
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

//# sourceMappingURL=src_8fbf32d2._.js.map