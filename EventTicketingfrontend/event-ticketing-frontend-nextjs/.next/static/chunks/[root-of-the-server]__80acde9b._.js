(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[next]/internal/font/google/inter_59dee874.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "inter_59dee874-module__9CtR0q__className",
});
}}),
"[next]/internal/font/google/inter_59dee874.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_59dee874.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/src/hooks/useAuth.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = ({ children })=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
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
        }
    }["AuthProvider.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
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
_s(AuthProvider, "8WEfEbosx3NfLBPRVajZSQS3udc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/providers/I18nProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/no-unused-vars */ // components/providers/I18nProvider.tsx
__turbopack_context__.s({
    "I18nProvider": (()=>I18nProvider),
    "SUPPORTED_LANGUAGES": (()=>SUPPORTED_LANGUAGES),
    "useI18n": (()=>useI18n),
    "useI18nContext": (()=>useI18nContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
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
// Helper function for string interpolation
const interpolate = (str, params = {})=>{
    return str.replace(/\{\{(\w+)\}\}/g, (match, key)=>{
        return params[key] !== undefined ? String(params[key]) : match;
    }).replace(/\{(\w+)\}/g, (match, key)=>{
        return params[key] !== undefined ? String(params[key]) : match;
    });
};
// Complete translation data - matching your dashboard
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
        yourEvents: 'Your Events',
        createYourFirstEvent: 'Create Your First Event',
        createFirstEventPrompt: 'Create your first event to get started with EventPro.',
        eventsSubtitle: 'Manage your events and track their performance',
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
        requiredField: 'This field is required',
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
        published: 'Published',
        publish: 'Publish',
        online: 'Online',
        noEventsYet: 'No events yet',
        multiDaySchedule: 'Multi-day schedule',
        maxCapacity: 'Max Capacity',
        loadingDashboard: 'Loading your dashboard...',
        inPerson: 'In-Person',
        draft: 'Draft',
        dashboardError: 'Failed to load dashboard data',
        publishedCount: '{count} published',
        dayEvent: '{count}-day event'
    },
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
        yourEvents: 'Tus Eventos',
        createYourFirstEvent: 'Crear Tu Primer Evento',
        createFirstEventPrompt: 'Crea tu primer evento para comenzar con EventPro.',
        eventsSubtitle: 'Gestiona tus eventos y rastrea su rendimiento',
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
        requiredField: 'Este campo es obligatorio',
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
        published: 'Publicado',
        publish: 'Publicar',
        online: 'En línea',
        noEventsYet: 'Aún no hay eventos',
        multiDaySchedule: 'Horario de varios días',
        maxCapacity: 'Capacidad Máxima',
        loadingDashboard: 'Cargando tu panel...',
        inPerson: 'Presencial',
        draft: 'Borrador',
        dashboardError: 'Error al cargar los datos del panel',
        publishedCount: '{count} publicados',
        dayEvent: 'Evento de {count} días'
    },
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
        yourEvents: 'Vos Événements',
        createYourFirstEvent: 'Créer Votre Premier Événement',
        createFirstEventPrompt: 'Créez votre premier événement pour commencer avec EventPro.',
        eventsSubtitle: 'Gérez vos événements et suivez leurs performances',
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
        requiredField: 'Ce champ est obligatoire',
        // Dashboard specific
        welcomeBack: 'Bon retour, {name} !',
        virtualEvent: 'Événement Virtuel',
        viewAllEvents: 'Voir tous les événements →',
        upcomingEvents: 'Événements à Venir',
        unpublish: 'Dépublier',
        unlimited: 'Illimité',
        uncategorized: 'Non catégorisé',
        totalRevenue: 'Revenus Totaux',
        totalEvents: 'Total des Événements',
        ticketsSold: 'Billets Vendus',
        revenue: 'Revenus',
        published: 'Publié',
        publish: 'Publier',
        online: 'En ligne',
        noEventsYet: 'Aucun événement pour le moment',
        multiDaySchedule: 'Horaire sur plusieurs jours',
        maxCapacity: 'Capacité Maximale',
        loadingDashboard: 'Chargement de votre tableau de bord...',
        inPerson: 'En Personne',
        draft: 'Brouillon',
        dashboardError: 'Échec du chargement des données du tableau de bord',
        publishedCount: '{count} publiés',
        dayEvent: 'Événement de {count} jours'
    },
    de: {
        // Common
        save: 'Speichern',
        cancel: 'Abbrechen',
        delete: 'Löschen',
        edit: 'Bearbeiten',
        view: 'Ansehen',
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
        yourEvents: 'Ihre Veranstaltungen',
        createYourFirstEvent: 'Ihre Erste Veranstaltung Erstellen',
        createFirstEventPrompt: 'Erstellen Sie Ihre erste Veranstaltung, um mit EventPro zu beginnen.',
        eventsSubtitle: 'Verwalten Sie Ihre Veranstaltungen und verfolgen Sie deren Leistung',
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
        requiredField: 'Dieses Feld ist erforderlich',
        // Dashboard specific
        welcomeBack: 'Willkommen zurück, {name}!',
        virtualEvent: 'Virtuelle Veranstaltung',
        viewAllEvents: 'Alle Veranstaltungen anzeigen →',
        upcomingEvents: 'Bevorstehende Veranstaltungen',
        unpublish: 'Veröffentlichung aufheben',
        unlimited: 'Unbegrenzt',
        uncategorized: 'Unkategorisiert',
        totalRevenue: 'Gesamtumsatz',
        totalEvents: 'Gesamte Veranstaltungen',
        ticketsSold: 'Verkaufte Tickets',
        revenue: 'Umsatz',
        published: 'Veröffentlicht',
        publish: 'Veröffentlichen',
        online: 'Online',
        noEventsYet: 'Noch keine Veranstaltungen',
        multiDaySchedule: 'Mehrtägiger Zeitplan',
        maxCapacity: 'Maximale Kapazität',
        loadingDashboard: 'Ihr Dashboard wird geladen...',
        inPerson: 'Vor Ort',
        draft: 'Entwurf',
        dashboardError: 'Fehler beim Laden der Dashboard-Daten',
        publishedCount: '{count} veröffentlicht',
        dayEvent: '{count}-tägige Veranstaltung'
    },
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
        // Navigation
        dashboard: 'Dashboard',
        events: 'Eventi',
        settings: 'Impostazioni',
        profile: 'Profilo',
        logout: 'Disconnetti',
        // Settings
        personalInformation: 'Informazioni Personali',
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
        phoneNumber: 'Numero di Telefono',
        companyName: 'Nome Azienda',
        address: 'Indirizzo',
        city: 'Città',
        state: 'Regione',
        zipCode: 'CAP',
        country: 'Paese',
        // Events
        createEvent: 'Crea Evento',
        eventTitle: 'Titolo Evento',
        eventDescription: 'Descrizione Evento',
        eventDate: 'Data Evento',
        eventTime: 'Ora Evento',
        eventLocation: 'Luogo Evento',
        ticketPrice: 'Prezzo Biglietto',
        yourEvents: 'I Tuoi Eventi',
        createYourFirstEvent: 'Crea il Tuo Primo Evento',
        createFirstEventPrompt: 'Crea il tuo primo evento per iniziare con EventPro.',
        eventsSubtitle: 'Gestisci i tuoi eventi e monitora le loro prestazioni',
        // Appearance
        theme: 'Tema',
        lightMode: 'Modalità Chiara',
        darkMode: 'Modalità Scura',
        autoMode: 'Modalità Automatica',
        accentColor: 'Colore Accent',
        fontSize: 'Dimensione Font',
        compactMode: 'Modalità Compatta',
        // Time and Date
        timeFormat: 'Formato Ora',
        dateFormat: 'Formato Data',
        currency: 'Valuta',
        timezone: 'Fuso Orario',
        // Messages
        saveSuccess: 'Impostazioni salvate con successo!',
        saveError: 'Errore nel salvare le impostazioni',
        loadError: 'Errore nel caricare i dati',
        invalidInput: 'Input non valido',
        requiredField: 'Questo campo è obbligatorio',
        // Dashboard specific
        welcomeBack: 'Bentornato, {name}!',
        virtualEvent: 'Evento Virtuale',
        viewAllEvents: 'Visualizza tutti gli eventi →',
        upcomingEvents: 'Eventi Prossimi',
        unpublish: 'Rimuovi Pubblicazione',
        unlimited: 'Illimitato',
        uncategorized: 'Senza Categoria',
        totalRevenue: 'Ricavi Totali',
        totalEvents: 'Eventi Totali',
        ticketsSold: 'Biglietti Venduti',
        revenue: 'Ricavi',
        published: 'Pubblicato',
        publish: 'Pubblica',
        online: 'Online',
        noEventsYet: 'Nessun evento ancora',
        multiDaySchedule: 'Programma multi-giorno',
        maxCapacity: 'Capacità Massima',
        loadingDashboard: 'Caricamento dashboard...',
        inPerson: 'Di Persona',
        draft: 'Bozza',
        dashboardError: 'Errore nel caricare i dati del dashboard',
        publishedCount: '{count} pubblicati',
        dayEvent: 'Evento di {count} giorni'
    }
};
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const I18nProvider = ({ children })=>{
    _s();
    const [currentLanguage, setCurrentLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const [isRTL, setIsRTL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get current language data
    const currentLangData = SUPPORTED_LANGUAGES.find((lang)=>lang.code === currentLanguage) || SUPPORTED_LANGUAGES[0];
    // Translation function with interpolation support
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "I18nProvider.useCallback[t]": (key, params)=>{
            const translation = translations[currentLanguage]?.[key] || translations['en'][key] || key;
            return params ? interpolate(translation, params) : translation;
        }
    }["I18nProvider.useCallback[t]"], [
        currentLanguage
    ]);
    // Format currency
    const formatCurrency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "I18nProvider.useCallback[formatCurrency]": (amount, currency)=>{
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
    }["I18nProvider.useCallback[formatCurrency]"], [
        currentLangData
    ]);
    // Format date
    const formatDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "I18nProvider.useCallback[formatDate]": (date, format)=>{
            try {
                return new Intl.DateTimeFormat(currentLangData.region).format(date);
            } catch  {
                return date.toLocaleDateString();
            }
        }
    }["I18nProvider.useCallback[formatDate]"], [
        currentLangData
    ]);
    // Format time
    const formatTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "I18nProvider.useCallback[formatTime]": (date, format)=>{
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
    }["I18nProvider.useCallback[formatTime]"], [
        currentLangData
    ]);
    // Change language
    const changeLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "I18nProvider.useCallback[changeLanguage]": (languageCode)=>{
            const langData = SUPPORTED_LANGUAGES.find({
                "I18nProvider.useCallback[changeLanguage].langData": (lang)=>lang.code === languageCode
            }["I18nProvider.useCallback[changeLanguage].langData"]);
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
    }["I18nProvider.useCallback[changeLanguage]"], []);
    // Load saved language on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "I18nProvider.useEffect": ()=>{
            try {
                const savedLanguage = localStorage.getItem('selectedLanguage');
                if (savedLanguage && SUPPORTED_LANGUAGES.find({
                    "I18nProvider.useEffect": (lang)=>lang.code === savedLanguage
                }["I18nProvider.useEffect"])) {
                    changeLanguage(savedLanguage);
                } else {
                    // Detect browser language
                    const browserLang = navigator.language.split('-')[0];
                    const supportedLang = SUPPORTED_LANGUAGES.find({
                        "I18nProvider.useEffect.supportedLang": (lang)=>lang.code === browserLang
                    }["I18nProvider.useEffect.supportedLang"]);
                    if (supportedLang) {
                        changeLanguage(browserLang);
                    }
                }
            } catch (error) {
                console.error('Error loading language preference:', error);
            }
        }
    }["I18nProvider.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/providers/I18nProvider.tsx",
        lineNumber: 813,
        columnNumber: 9
    }, this);
};
_s(I18nProvider, "RYLfRslVnVWRi4uQ0LrfskFWkDE=");
_c = I18nProvider;
const useI18nContext = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (!context) {
        throw new Error('useI18nContext must be used within an I18nProvider');
    }
    return context;
};
_s1(useI18nContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const useI18n = useI18nContext;
var _c;
__turbopack_context__.k.register(_c, "I18nProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useTheme.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// hooks/useTheme.ts - Complete version with proper initialization
__turbopack_context__.s({
    "useTheme": (()=>useTheme),
    "useThemeClasses": (()=>useThemeClasses),
    "useThemeUtils": (()=>useThemeUtils)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
const ACCENT_COLORS = {
    blue: 'rgb(59, 130, 246)',
    purple: 'rgb(168, 85, 247)',
    green: 'rgb(34, 197, 94)',
    red: 'rgb(239, 68, 68)',
    orange: 'rgb(249, 115, 22)',
    pink: 'rgb(236, 72, 153)'
};
const defaultSettings = {
    theme: 'light',
    accentColor: 'blue',
    fontSize: 'medium',
    compactMode: false
};
const useTheme = ()=>{
    _s();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultSettings);
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCompact, setIsCompact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Apply theme to document
    const applyTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTheme.useCallback[applyTheme]": (newSettings)=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            const root = document.documentElement;
            const body = document.body;
            // Handle theme class
            const shouldBeDark = newSettings.theme === 'dark' || newSettings.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDark(shouldBeDark);
            body.classList.toggle('dark', shouldBeDark);
            root.classList.toggle('dark', shouldBeDark);
            // Handle font size
            body.classList.remove('text-size-small', 'text-size-medium', 'text-size-large');
            body.classList.add(`text-size-${newSettings.fontSize}`);
            root.classList.remove('text-size-small', 'text-size-medium', 'text-size-large');
            root.classList.add(`text-size-${newSettings.fontSize}`);
            // Handle compact mode
            setIsCompact(newSettings.compactMode);
            body.classList.toggle('compact', newSettings.compactMode);
            root.classList.toggle('compact', newSettings.compactMode);
            // Set CSS custom properties for accent color
            const accentColor = ACCENT_COLORS[newSettings.accentColor] || ACCENT_COLORS.blue;
            root.style.setProperty('--color-primary', accentColor);
            // Emit custom event for other components
            window.dispatchEvent(new CustomEvent('themeChanged', {
                detail: {
                    ...newSettings,
                    isDark: shouldBeDark
                }
            }));
        }
    }["useTheme.useCallback[applyTheme]"], []);
    // Update theme settings
    const updateTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTheme.useCallback[updateTheme]": (newSettings)=>{
            setSettings({
                "useTheme.useCallback[updateTheme]": (prevSettings)=>{
                    const updatedSettings = {
                        ...prevSettings,
                        ...newSettings
                    };
                    // Apply theme immediately
                    applyTheme(updatedSettings);
                    // Save to localStorage
                    try {
                        localStorage.setItem('themeSettings', JSON.stringify(updatedSettings));
                    } catch (error) {
                        console.error('Error saving theme settings:', error);
                    }
                    return updatedSettings;
                }
            }["useTheme.useCallback[updateTheme]"]);
        }
    }["useTheme.useCallback[updateTheme]"], [
        applyTheme
    ]);
    // Initialize theme on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            if (isInitialized.current || "object" === 'undefined') return;
            isInitialized.current = true;
            let initialSettings = defaultSettings;
            // Load from localStorage
            try {
                const saved = localStorage.getItem('themeSettings');
                if (saved) {
                    const parsed = JSON.parse(saved);
                    initialSettings = {
                        ...defaultSettings,
                        ...parsed
                    };
                }
            } catch (error) {
                console.error('Error loading theme settings:', error);
            }
            // Set state and apply theme
            setSettings(initialSettings);
            applyTheme(initialSettings);
            // Listen for system theme changes
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = {
                "useTheme.useEffect.handleChange": ()=>{
                    if (initialSettings.theme === 'auto') {
                        applyTheme(initialSettings);
                    }
                }
            }["useTheme.useEffect.handleChange"];
            mediaQuery.addEventListener('change', handleChange);
            return ({
                "useTheme.useEffect": ()=>{
                    mediaQuery.removeEventListener('change', handleChange);
                }
            })["useTheme.useEffect"];
        }
    }["useTheme.useEffect"], [
        applyTheme
    ]);
    // Initialize theme function for compatibility
    const initializeTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTheme.useCallback[initializeTheme]": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                applyTheme(settings);
            }
        }
    }["useTheme.useCallback[initializeTheme]"], [
        settings,
        applyTheme
    ]);
    return {
        settings,
        isDark,
        isCompact,
        updateTheme,
        initializeTheme,
        applyTheme,
        accentColors: ACCENT_COLORS,
        getAccentColor: ()=>ACCENT_COLORS[settings.accentColor] || ACCENT_COLORS.blue
    };
};
_s(useTheme, "6YoBaLo7kR3fWRARJuloe0FyRac=");
const useThemeClasses = ()=>{
    _s1();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCompact, setIsCompact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useThemeClasses.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            const updateThemeState = {
                "useThemeClasses.useEffect.updateThemeState": ()=>{
                    const currentIsDark = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');
                    const currentIsCompact = document.documentElement.classList.contains('compact') || document.body.classList.contains('compact');
                    setIsDark({
                        "useThemeClasses.useEffect.updateThemeState": (prev)=>prev !== currentIsDark ? currentIsDark : prev
                    }["useThemeClasses.useEffect.updateThemeState"]);
                    setIsCompact({
                        "useThemeClasses.useEffect.updateThemeState": (prev)=>prev !== currentIsCompact ? currentIsCompact : prev
                    }["useThemeClasses.useEffect.updateThemeState"]);
                }
            }["useThemeClasses.useEffect.updateThemeState"];
            // Initial state update
            setTimeout(updateThemeState, 0);
            // Observe class changes on both html and body
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            observerRef.current = new MutationObserver({
                "useThemeClasses.useEffect": (mutations)=>{
                    for (const mutation of mutations){
                        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                            setTimeout(updateThemeState, 0);
                            break;
                        }
                    }
                }
            }["useThemeClasses.useEffect"]);
            // Observe both documentElement and body
            observerRef.current.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    'class'
                ]
            });
            observerRef.current.observe(document.body, {
                attributes: true,
                attributeFilter: [
                    'class'
                ]
            });
            // Listen for theme change events
            const handleThemeChange = {
                "useThemeClasses.useEffect.handleThemeChange": ()=>{
                    setTimeout(updateThemeState, 0);
                }
            }["useThemeClasses.useEffect.handleThemeChange"];
            window.addEventListener('themeChanged', handleThemeChange);
            return ({
                "useThemeClasses.useEffect": ()=>{
                    if (observerRef.current) {
                        observerRef.current.disconnect();
                    }
                    window.removeEventListener('themeChanged', handleThemeChange);
                }
            })["useThemeClasses.useEffect"];
        }
    }["useThemeClasses.useEffect"], []);
    return {
        // Theme state
        isDark,
        isCompact,
        // Background classes
        themeBg: isDark ? 'bg-gray-900' : 'bg-gray-50',
        themeCard: isDark ? 'bg-gray-800' : 'bg-white',
        themeMuted: isDark ? 'bg-gray-700' : 'bg-gray-100',
        // Text color classes
        themeFg: isDark ? 'text-gray-100' : 'text-gray-900',
        themeCardFg: isDark ? 'text-gray-100' : 'text-gray-900',
        themeMutedFg: isDark ? 'text-gray-400' : 'text-gray-600',
        // Border classes
        themeBorder: isDark ? 'border-gray-700' : 'border-gray-200',
        // Hover classes
        hover: isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100',
        // Responsive text size classes
        textXs: 'text-xs',
        textSm: 'text-responsive-sm text-sm',
        textBase: 'text-responsive-base text-base',
        textLg: 'text-responsive-lg text-lg',
        textXl: 'text-responsive-xl text-xl',
        text2Xl: 'text-responsive-2xl text-2xl',
        text3Xl: 'text-responsive-3xl text-3xl',
        // Compact mode classes
        compactCard: isCompact ? 'p-3' : 'p-6',
        compactInput: isCompact ? 'py-1.5 px-3' : 'py-2 px-4',
        compactButton: isCompact ? 'py-1.5 px-3' : 'py-2 px-4',
        compactGap: isCompact ? 'gap-2' : 'gap-4',
        compactSpace: isCompact ? 'space-y-2' : 'space-y-4',
        // Legacy classes for backward compatibility
        background: isDark ? 'bg-gray-900' : 'bg-gray-50',
        card: isDark ? 'bg-gray-800' : 'bg-white',
        text: isDark ? 'text-gray-100' : 'text-gray-900',
        textMuted: isDark ? 'text-gray-400' : 'text-gray-600',
        border: isDark ? 'border-gray-700' : 'border-gray-200',
        // Button classes
        btnAccent: `bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors ${isCompact ? 'text-sm' : ''}`,
        btnAccentOutline: `border-2 border-blue-600 text-blue-600 bg-transparent px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors ${isCompact ? 'text-sm' : ''}`
    };
};
_s1(useThemeClasses, "qgePexiWCjVKbRefr2F089QQegY=");
const useThemeUtils = ()=>{
    _s2();
    const { isDark, isCompact } = useTheme();
    const themeClasses = useThemeClasses();
    const getInputStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useThemeUtils.useCallback[getInputStyles]": (hasError = false)=>{
            const baseStyles = `w-full border rounded-lg focus:ring-2 accent-focus placeholder-opacity-60 transition-colors`;
            const themeStyles = `${themeClasses.themeCard} ${themeClasses.themeFg} ${themeClasses.themeBorder} ${themeClasses.compactInput}`;
            const errorStyles = hasError ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : '';
            return `${baseStyles} ${themeStyles} ${errorStyles}`;
        }
    }["useThemeUtils.useCallback[getInputStyles]"], [
        themeClasses
    ]);
    const getCardStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useThemeUtils.useCallback[getCardStyles]": (interactive = false)=>{
            const baseStyles = `rounded-lg shadow-sm border transition-all`;
            const themeStyles = `${themeClasses.themeCard} ${themeClasses.themeBorder} ${themeClasses.compactCard}`;
            const interactiveStyles = interactive ? 'hover:shadow-md cursor-pointer' : '';
            return `${baseStyles} ${themeStyles} ${interactiveStyles}`;
        }
    }["useThemeUtils.useCallback[getCardStyles]"], [
        themeClasses
    ]);
    const getButtonStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useThemeUtils.useCallback[getButtonStyles]": (variant = 'primary')=>{
            const baseStyles = `font-medium rounded-lg transition-colors ${themeClasses.compactButton}`;
            switch(variant){
                case 'primary':
                    return `${baseStyles} accent-bg text-white hover:opacity-90`;
                case 'secondary':
                    return `${baseStyles} ${themeClasses.themeBorder} border ${themeClasses.themeFg} ${themeClasses.hover}`;
                case 'danger':
                    return `${baseStyles} bg-red-600 text-white hover:bg-red-700`;
                default:
                    return `${baseStyles} accent-bg text-white hover:opacity-90`;
            }
        }
    }["useThemeUtils.useCallback[getButtonStyles]"], [
        themeClasses
    ]);
    return {
        getInputStyles,
        getCardStyles,
        getButtonStyles,
        isDark,
        isCompact
    };
};
_s2(useThemeUtils, "unuKHybU3d8UfcXKuay7S+gJFlI=", false, function() {
    return [
        useTheme,
        useThemeClasses
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useSafeI18n.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s({
    "SUPPORTED_LANGUAGES": (()=>SUPPORTED_LANGUAGES),
    "useI18n": (()=>useI18n)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
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
// Helper function for string interpolation
const interpolate = (str, params = {})=>{
    return str.replace(/\{(\w+)\}/g, (match, key)=>{
        return params[key] !== undefined ? String(params[key]) : match;
    });
};
// Translation data - COMPLETE WITH ALL LANGUAGES
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
        eventsSubtitle: 'Manage your events and track their performance',
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
        requiredField: 'This field is required',
        // Dashboard specific
        welcomeBack: 'Welcome back, {name}!',
        yourEvents: 'Your Events',
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
        published: 'Published',
        publish: 'Publish',
        online: 'Online',
        noEventsYet: 'No events yet',
        multiDaySchedule: 'Multi-day schedule',
        maxCapacity: 'Max Capacity',
        loadingDashboard: 'Loading your dashboard...',
        inPerson: 'In-Person',
        draft: 'Draft',
        dashboardError: 'Failed to load dashboard data',
        createYourFirstEvent: 'Create Your First Event',
        createFirstEventPrompt: 'Create your first event to get started with EventPro.',
        publishedCount: '{count} published',
        dayEvent: '{count}-day event'
    },
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
        eventsSubtitle: 'Gestiona tus eventos y rastrea su rendimiento',
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
        requiredField: 'Este campo es obligatorio',
        // Dashboard specific
        welcomeBack: '¡Bienvenido de vuelta, {name}!',
        yourEvents: 'Tus Eventos',
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
        published: 'Publicado',
        publish: 'Publicar',
        online: 'En línea',
        noEventsYet: 'Aún no hay eventos',
        multiDaySchedule: 'Horario de varios días',
        maxCapacity: 'Capacidad Máxima',
        loadingDashboard: 'Cargando tu panel...',
        inPerson: 'Presencial',
        draft: 'Borrador',
        dashboardError: 'Error al cargar los datos del panel',
        createYourFirstEvent: 'Crear Tu Primer Evento',
        createFirstEventPrompt: 'Crea tu primer evento para comenzar con EventPro.',
        publishedCount: '{count} publicados',
        dayEvent: 'Evento de {count} días'
    },
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
        eventsSubtitle: 'Gérez vos événements et suivez leurs performances',
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
        requiredField: 'Ce champ est obligatoire',
        // Dashboard specific
        welcomeBack: 'Bon retour, {name} !',
        yourEvents: 'Vos Événements',
        virtualEvent: 'Événement Virtuel',
        viewAllEvents: 'Voir tous les événements →',
        upcomingEvents: 'Événements à Venir',
        unpublish: 'Dépublier',
        unlimited: 'Illimité',
        uncategorized: 'Non catégorisé',
        totalRevenue: 'Revenus Totaux',
        totalEvents: 'Total des Événements',
        ticketsSold: 'Billets Vendus',
        revenue: 'Revenus',
        published: 'Publié',
        publish: 'Publier',
        online: 'En ligne',
        noEventsYet: 'Aucun événement pour le moment',
        multiDaySchedule: 'Horaire sur plusieurs jours',
        maxCapacity: 'Capacité Maximale',
        loadingDashboard: 'Chargement de votre tableau de bord...',
        inPerson: 'En Personne',
        draft: 'Brouillon',
        dashboardError: 'Échec du chargement des données du tableau de bord',
        createYourFirstEvent: 'Créer Votre Premier Événement',
        createFirstEventPrompt: 'Créez votre premier événement pour commencer avec EventPro.',
        publishedCount: '{count} publiés',
        dayEvent: 'Événement de {count} jours'
    },
    de: {
        // Common
        save: 'Speichern',
        cancel: 'Abbrechen',
        delete: 'Löschen',
        edit: 'Bearbeiten',
        view: 'Ansehen',
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
        eventsSubtitle: 'Verwalten Sie Ihre Veranstaltungen und verfolgen Sie deren Leistung',
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
        requiredField: 'Dieses Feld ist erforderlich',
        // Dashboard specific
        welcomeBack: 'Willkommen zurück, {name}!',
        yourEvents: 'Ihre Veranstaltungen',
        virtualEvent: 'Virtuelle Veranstaltung',
        viewAllEvents: 'Alle Veranstaltungen anzeigen →',
        upcomingEvents: 'Bevorstehende Veranstaltungen',
        unpublish: 'Veröffentlichung aufheben',
        unlimited: 'Unbegrenzt',
        uncategorized: 'Unkategorisiert',
        totalRevenue: 'Gesamtumsatz',
        totalEvents: 'Gesamte Veranstaltungen',
        ticketsSold: 'Verkaufte Tickets',
        revenue: 'Umsatz',
        published: 'Veröffentlicht',
        publish: 'Veröffentlichen',
        online: 'Online',
        noEventsYet: 'Noch keine Veranstaltungen',
        multiDaySchedule: 'Mehrtägiger Zeitplan',
        maxCapacity: 'Maximale Kapazität',
        loadingDashboard: 'Ihr Dashboard wird geladen...',
        inPerson: 'Vor Ort',
        draft: 'Entwurf',
        dashboardError: 'Fehler beim Laden der Dashboard-Daten',
        createYourFirstEvent: 'Ihre Erste Veranstaltung Erstellen',
        createFirstEventPrompt: 'Erstellen Sie Ihre erste Veranstaltung, um mit EventPro zu beginnen.',
        publishedCount: '{count} veröffentlicht',
        dayEvent: '{count}-tägige Veranstaltung'
    },
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
        // Navigation
        dashboard: 'Dashboard',
        events: 'Eventi',
        settings: 'Impostazioni',
        profile: 'Profilo',
        logout: 'Disconnetti',
        // Settings
        personalInformation: 'Informazioni Personali',
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
        phoneNumber: 'Numero di Telefono',
        companyName: 'Nome Azienda',
        address: 'Indirizzo',
        city: 'Città',
        state: 'Regione',
        zipCode: 'CAP',
        country: 'Paese',
        // Events
        createEvent: 'Crea Evento',
        eventTitle: 'Titolo Evento',
        eventDescription: 'Descrizione Evento',
        eventDate: 'Data Evento',
        eventTime: 'Ora Evento',
        eventLocation: 'Luogo Evento',
        ticketPrice: 'Prezzo Biglietto',
        eventsSubtitle: 'Gestisci i tuoi eventi e monitora le loro prestazioni',
        // Appearance
        theme: 'Tema',
        lightMode: 'Modalità Chiara',
        darkMode: 'Modalità Scura',
        autoMode: 'Modalità Automatica',
        accentColor: 'Colore Accent',
        fontSize: 'Dimensione Font',
        compactMode: 'Modalità Compatta',
        // Time and Date
        timeFormat: 'Formato Ora',
        dateFormat: 'Formato Data',
        currency: 'Valuta',
        timezone: 'Fuso Orario',
        // Messages
        saveSuccess: 'Impostazioni salvate con successo!',
        saveError: 'Errore nel salvare le impostazioni',
        loadError: 'Errore nel caricare i dati',
        invalidInput: 'Input non valido',
        requiredField: 'Questo campo è obbligatorio',
        // Dashboard specific
        welcomeBack: 'Bentornato, {name}!',
        yourEvents: 'I Tuoi Eventi',
        virtualEvent: 'Evento Virtuale',
        viewAllEvents: 'Visualizza tutti gli eventi →',
        upcomingEvents: 'Eventi Prossimi',
        unpublish: 'Rimuovi Pubblicazione',
        unlimited: 'Illimitato',
        uncategorized: 'Senza Categoria',
        totalRevenue: 'Ricavi Totali',
        totalEvents: 'Eventi Totali',
        ticketsSold: 'Biglietti Venduti',
        revenue: 'Ricavi',
        published: 'Pubblicato',
        publish: 'Pubblica',
        online: 'Online',
        noEventsYet: 'Nessun evento ancora',
        multiDaySchedule: 'Programma multi-giorno',
        maxCapacity: 'Capacità Massima',
        loadingDashboard: 'Caricamento dashboard...',
        inPerson: 'Di Persona',
        draft: 'Bozza',
        dashboardError: 'Errore nel caricare i dati del dashboard',
        createYourFirstEvent: 'Crea il Tuo Primo Evento',
        createFirstEventPrompt: 'Crea il tuo primo evento per iniziare con EventPro.',
        publishedCount: '{count} pubblicati',
        dayEvent: 'Evento di {count} giorni'
    }
};
const useI18n = ()=>{
    _s();
    const [currentLanguage, setCurrentLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const [isRTL, setIsRTL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get current language data
    const currentLangData = SUPPORTED_LANGUAGES.find((lang)=>lang.code === currentLanguage) || SUPPORTED_LANGUAGES[0];
    // Translation function with interpolation support
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useI18n.useCallback[t]": (key, params)=>{
            const translation = translations[currentLanguage]?.[key] || translations['en'][key] || key;
            return params ? interpolate(translation, params) : translation;
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
    updatePreferences: async (preferences)=>{
        try {
            console.log('⚙️ Updating user preferences');
            const response = await api.put('/user/preferences', preferences);
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
"[project]/src/app/organizer/OrganizerClientLayout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/no-unused-vars */ // app/organizer/OrganizerClientLayout.tsx
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTheme.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSafeI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSafeI18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket.js [app-client] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// Add the safe mapping functions
const safeMapTheme = (theme)=>{
    if (!theme) return 'auto';
    return [
        'light',
        'dark',
        'auto'
    ].includes(theme) ? theme : 'auto';
};
const safeMapFontSize = (fontSize)=>{
    if (!fontSize) return 'medium';
    return [
        'small',
        'medium',
        'large'
    ].includes(fontSize) ? fontSize : 'medium';
};
const OrganizerClientLayout = ({ children })=>{
    _s();
    const { user, logout, isOrganizer, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [languageDropdownOpen, setLanguageDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [preferencesLoaded, setPreferencesLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Theme hooks
    const { isDark, isCompact, updateTheme, initializeTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const themeClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeClasses"])();
    // I18n hook
    const { t, changeLanguage, currentLanguage, supportedLanguages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSafeI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    // Load user preferences when component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrganizerClientLayout.useEffect": ()=>{
            const loadUserPreferences = {
                "OrganizerClientLayout.useEffect.loadUserPreferences": async ()=>{
                    if (user && isOrganizer) {
                        try {
                            const preferences = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userApi"].getPreferences();
                            // Apply theme preferences with safe mapping
                            updateTheme({
                                theme: safeMapTheme(preferences.theme),
                                fontSize: safeMapFontSize(preferences.fontSize),
                                accentColor: preferences.accentColor || 'blue',
                                compactMode: Boolean(preferences.compactMode)
                            });
                            // Apply language preference
                            if (preferences.language && preferences.language !== currentLanguage) {
                                changeLanguage(preferences.language);
                            }
                            setPreferencesLoaded(true);
                        } catch (error) {
                            console.error('Failed to load user preferences:', error);
                            // Initialize with defaults if loading fails
                            initializeTheme();
                            setPreferencesLoaded(true);
                        }
                    } else {
                        initializeTheme();
                        setPreferencesLoaded(true);
                    }
                }
            }["OrganizerClientLayout.useEffect.loadUserPreferences"];
            loadUserPreferences();
        }
    }["OrganizerClientLayout.useEffect"], [
        user,
        isOrganizer,
        updateTheme,
        changeLanguage,
        currentLanguage,
        initializeTheme
    ]);
    // Handle authentication and authorization
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrganizerClientLayout.useEffect": ()=>{
            if (!isLoading && preferencesLoaded) {
                if (!user) {
                    router.push('/login');
                    return;
                }
                if (!isOrganizer) {
                    router.push('/');
                    return;
                }
            }
        }
    }["OrganizerClientLayout.useEffect"], [
        user,
        isOrganizer,
        isLoading,
        preferencesLoaded,
        router
    ]);
    const navigation = [
        {
            name: t('dashboard'),
            href: '/organizer/dashboard',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
        },
        {
            name: t('events'),
            href: '/organizer/events',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
        },
        {
            name: t('createEvent'),
            href: '/organizer/events/create',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"]
        },
        {
            name: 'Venues',
            href: '/organizer/venues',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
        },
        {
            name: 'Ticket Management',
            href: '/organizer/tickets',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"]
        },
        {
            name: 'Analytics',
            href: '/organizer/analytics',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
        },
        {
            name: t('settings'),
            href: '/organizer/settings',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
        }
    ];
    const handleLogout = ()=>{
        logout();
        router.push('/login');
    };
    const handleLanguageChange = async (langCode)=>{
        changeLanguage(langCode);
        setLanguageDropdownOpen(false);
        try {
            // Create a properly typed partial update object
            const updateData = {
                language: langCode
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userApi"].updatePreferences(updateData);
        } catch (error) {
            console.error('Failed to save language preference:', error);
        }
    };
    // Show loading state while preferences are loading
    if (isLoading || !preferencesLoaded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `min-h-screen ${themeClasses.themeBg} flex items-center justify-center theme-transition`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 accent-border mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                        lineNumber: 200,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `mt-4 ${themeClasses.themeMutedFg}`,
                        children: t('loading')
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                        lineNumber: 201,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                lineNumber: 199,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
            lineNumber: 198,
            columnNumber: 13
        }, this);
    }
    // Don't render anything if user is not authenticated or not an organizer
    if (!user || !isOrganizer) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-screen flex overflow-hidden ${themeClasses.themeBg} theme-transition`,
        children: [
            sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40 lg:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-gray-600 bg-opacity-75",
                    onClick: ()=>setSidebarOpen(false)
                }, void 0, false, {
                    fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                    lineNumber: 217,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                lineNumber: 216,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-y-0 left-0 z-50 w-64 ${themeClasses.themeCard} shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col theme-transition`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center justify-between ${isCompact ? 'h-12' : 'h-16'} px-6 border-b ${themeClasses.themeBorder} flex-shrink-0`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: `${isCompact ? 'h-6 w-6' : 'h-8 w-8'} accent-text`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                            lineNumber: 232,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                        lineNumber: 231,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: `${isCompact ? themeClasses.textBase : themeClasses.textLg} font-semibold ${themeClasses.themeFg}`,
                                                children: "EventPro"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                lineNumber: 235,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-xs ${themeClasses.themeMutedFg}`,
                                                children: "Organizer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                lineNumber: 236,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                        lineNumber: 234,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                lineNumber: 230,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSidebarOpen(false),
                                className: `lg:hidden p-2 rounded-md ${themeClasses.themeMutedFg} ${themeClasses.hover} transition-colors`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                    lineNumber: 243,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                lineNumber: 239,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                        lineNumber: 229,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: `flex-1 px-4 ${isCompact ? 'py-4' : 'py-6'} ${isCompact ? 'space-y-1' : 'space-y-2'} overflow-y-auto`,
                        children: navigation.map((item)=>{
                            const Icon = item.icon;
                            const isActive = "object" !== 'undefined' && window.location.pathname === item.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                onClick: ()=>setSidebarOpen(false),
                                className: `flex items-center ${isCompact ? 'px-2 py-1.5' : 'px-3 py-2'} ${themeClasses.textSm} font-medium rounded-lg transition-colors ${isActive ? 'accent-bg text-white' : `${themeClasses.themeMutedFg} ${themeClasses.hover} hover:${themeClasses.themeFg}`}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: `${isCompact ? 'h-4 w-4 mr-2' : 'h-5 w-5 mr-3'} ${isActive ? 'text-white' : themeClasses.themeMutedFg}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                        lineNumber: 263,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: isCompact ? 'text-xs' : '',
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                        lineNumber: 264,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, item.name, true, {
                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                lineNumber: 254,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                        lineNumber: 248,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `border-t ${themeClasses.themeBorder} ${isCompact ? 'p-2' : 'p-4'} flex-shrink-0`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setLanguageDropdownOpen(!languageDropdownOpen),
                                    className: `flex items-center w-full ${isCompact ? 'px-2 py-1.5' : 'px-3 py-2'} ${themeClasses.textSm} ${themeClasses.themeMutedFg} ${themeClasses.hover} hover:${themeClasses.themeFg} rounded-lg transition-colors`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                                            className: `${isCompact ? 'h-3 w-3 mr-1' : 'h-4 w-4 mr-2'}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                            lineNumber: 277,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: isCompact ? 'text-xs' : '',
                                            children: t('language')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                            lineNumber: 278,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                    lineNumber: 273,
                                    columnNumber: 25
                                }, this),
                                languageDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute bottom-full left-0 mb-2 w-full ${themeClasses.themeCard} rounded-lg shadow-lg border ${themeClasses.themeBorder} py-1 z-50`,
                                    children: supportedLanguages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleLanguageChange(lang.code),
                                            className: `flex items-center w-full ${isCompact ? 'px-2 py-1.5' : 'px-3 py-2'} ${themeClasses.textSm} ${currentLanguage === lang.code ? `${themeClasses.themeFg} accent-bg accent-text` : `${themeClasses.themeMutedFg} ${themeClasses.hover} hover:${themeClasses.themeFg}`} transition-colors`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `${isCompact ? 'mr-1' : 'mr-2'}`,
                                                    children: lang.flag
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: isCompact ? 'text-xs' : '',
                                                    children: lang.nativeName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, lang.code, true, {
                                            fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                            lineNumber: 284,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                    lineNumber: 282,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                            lineNumber: 272,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                        lineNumber: 271,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `border-t ${themeClasses.themeBorder} ${isCompact ? 'p-2' : 'p-4'} flex-shrink-0`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center ${isCompact ? 'space-x-2 mb-1' : 'space-x-3 mb-3'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${isCompact ? 'h-6 w-6' : 'h-10 w-10'} rounded-full accent-bg flex items-center justify-center`,
                                            style: {
                                                opacity: 0.1
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: `${isCompact ? 'h-3 w-3' : 'h-5 w-5'} accent-text`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                lineNumber: 306,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                            lineNumber: 305,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                        lineNumber: 304,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${isCompact ? 'text-xs' : themeClasses.textSm} font-medium ${themeClasses.themeFg} truncate`,
                                                children: [
                                                    user.firstName,
                                                    " ",
                                                    user.lastName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                lineNumber: 310,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-xs ${themeClasses.themeMutedFg} truncate ${isCompact ? 'hidden' : ''}`,
                                                children: user.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                                lineNumber: 313,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                        lineNumber: 309,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                lineNumber: 303,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogout,
                                className: `flex items-center w-full ${isCompact ? 'px-2 py-1.5' : 'px-3 py-2'} ${themeClasses.textSm} ${themeClasses.themeMutedFg} ${themeClasses.hover} hover:${themeClasses.themeFg} rounded-lg transition-colors`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: `${isCompact ? 'h-3 w-3 mr-1' : 'h-4 w-4 mr-2'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                        lineNumber: 320,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: isCompact ? 'text-xs' : '',
                                        children: t('logout')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                        lineNumber: 321,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                lineNumber: 316,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                        lineNumber: 302,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                lineNumber: 225,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-hidden lg:ml-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${themeClasses.themeCard} shadow-sm border-b ${themeClasses.themeBorder} flex-shrink-0 theme-transition`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center justify-between ${isCompact ? 'h-10 px-4' : 'h-16 px-4 sm:px-6 lg:px-8'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSidebarOpen(true),
                                    className: `lg:hidden p-2 rounded-md ${themeClasses.themeMutedFg} ${themeClasses.hover} hover:${themeClasses.themeFg} transition-colors`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                        lineNumber: 335,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                    lineNumber: 331,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden sm:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${isCompact ? 'text-xs' : themeClasses.textSm} ${themeClasses.themeMutedFg}`,
                                            children: t('welcomeBack', {
                                                name: user.firstName
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                            lineNumber: 340,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                        lineNumber: 339,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                                    lineNumber: 338,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                            lineNumber: 330,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                        lineNumber: 329,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: `flex-1 overflow-y-auto ${themeClasses.themeBg} theme-transition`,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                        lineNumber: 349,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
                lineNumber: 327,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/organizer/OrganizerClientLayout.tsx",
        lineNumber: 213,
        columnNumber: 9
    }, this);
};
_s(OrganizerClientLayout, "NzSiIXLvUmCWxOqKJmYAfTwHRls=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeClasses"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSafeI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = OrganizerClientLayout;
const __TURBOPACK__default__export__ = OrganizerClientLayout;
var _c;
__turbopack_context__.k.register(_c, "OrganizerClientLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layouts/ConditionalLayout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/layouts/ConditionalLayout.tsx
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$organizer$2f$OrganizerClientLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/organizer/OrganizerClientLayout.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ConditionalLayout = ({ children })=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Check if we're in the organizer section
    const isOrganizerRoute = pathname?.startsWith('/organizer');
    if (isOrganizerRoute) {
        // For organizer routes, use the organizer layout which includes its own sidebar
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$organizer$2f$OrganizerClientLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/layouts/ConditionalLayout.tsx",
            lineNumber: 21,
            columnNumber: 13
        }, this);
    }
    // For non-organizer routes, render children without any layout wrapper
    // This prevents the global layout from adding another sidebar
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
_s(ConditionalLayout, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ConditionalLayout;
const __TURBOPACK__default__export__ = ConditionalLayout;
var _c;
__turbopack_context__.k.register(_c, "ConditionalLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/layout.tsx
__turbopack_context__.s({
    "default": (()=>RootLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_59dee874.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$I18nProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/providers/I18nProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2f$ConditionalLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layouts/ConditionalLayout.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_59dee874$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$I18nProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I18nProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2f$ConditionalLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__80acde9b._.js.map