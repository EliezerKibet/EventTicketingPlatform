/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse, AxiosError } from 'axios';

// Enhanced types with smart ticketing support
interface User {
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];
}

interface AuthResponse {
    token: string;
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];
    expiresAt: string;
}

interface LoginRequest {
    email: string;
    password: string;
}

interface RegisterRequest {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
}

interface Event {
    eventDate: string | number | Date;
    revenue: number;
    eventId: number;
    title: string;
    description: string;
    shortDescription?: string;
    organizerId: number;
    organizerName: string;
    venueId: number;
    venueName: string;
    venueCity: string;
    categoryId: number;
    categoryName: string;
    startDateTime: string;
    endDateTime: string;
    imageUrl?: string;
    basePrice: number;
    currency: string;
    isOnline: boolean;
    ticketsSold: number;
    availableTickets: number;
    status: string;
    isPublished: boolean;
}

// Enhanced TicketType interface with smart editing support
interface TicketType {
    ticketTypeId: number;
    eventId: number;
    eventTitle?: string;
    name: string;
    description?: string;
    price: number;
    quantityAvailable: number;
    quantitySold: number;
    quantityRemaining: number;
    isActive: boolean;
    isOnSale: boolean;
    // Smart editing support fields
    isEventPublished?: boolean;
    eventStatus?: string;
    saleStartDate?: string;
    saleEndDate?: string;
    minQuantityPerOrder?: number;
    maxQuantityPerOrder?: number;
    sortOrder?: number;
    createdAt?: string;
    updatedAt?: string;
}

interface Ticket {
    ticketId: number;
    eventId: number;
    eventTitle: string;
    ticketTypeName: string;
    ticketNumber: string;
    qrCode?: string;
    pricePaid: number;
    status: string;
    purchaseDate: string;
    attendeeFirstName?: string;
    attendeeLastName?: string;
    attendeeEmail?: string;
    eventStartDateTime: string;
    venueName: string;
    venueAddress: string;
}

interface Order {
    orderId: number;
    orderNumber: string;
    eventTitle: string;
    totalAmount: number;
    currency: string;
    status: string;
    createdAt: string;
    tickets: Ticket[];
}

// Enhanced DTOs with proper field mapping
interface CreateEventDto {
    title: string;
    description: string;
    shortDescription?: string;
    startDateTime: string;
    endDateTime?: string;
    categoryId: number;
    venueId?: number;
    imageUrl?: string;
    bannerImageUrl?: string;
    tags?: string;
    maxAttendees: number;
    basePrice: number;
    currency: string;
    isOnline: boolean;
    onlineUrl?: string;
}

interface UpdateEventDto {
    title?: string;
    description?: string;
    shortDescription?: string;
    startDateTime?: string;
    endDateTime?: string;
    categoryId?: number;
    venueId?: number;
    imageUrl?: string;
    bannerImageUrl?: string;
    tags?: string;
    maxAttendees?: number;
    basePrice?: number;
    currency?: string;
    isOnline?: boolean;
    onlineUrl?: string;
}

// Enhanced CreateTicketTypeDto with all required fields
interface CreateTicketTypeDto {
    eventId: number;
    name: string;
    description?: string;
    price: number;
    quantityAvailable: number;
    saleStartDate?: string;
    saleEndDate?: string;
    minQuantityPerOrder?: number;
    maxQuantityPerOrder?: number;
    sortOrder?: number;
}

interface UpdateTicketTypeDto {
    name?: string;
    description?: string;
    price?: number;
    quantityAvailable?: number;
    saleStartDate?: string;
    saleEndDate?: string;
    minQuantityPerOrder?: number;
    maxQuantityPerOrder?: number;
    sortOrder?: number;
    isActive?: boolean;
}

interface Category {
    categoryId: number;
    name: string;
    description?: string;
}

interface CreateCategoryDto {
    name: string;
    description?: string;
}

interface Venue {
    venueId: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    description?: string;
}

interface CreateVenueDto {
    name: string;
    address: string;
    city: string;
    capacity: number;
    description?: string;
}

interface PurchaseTicketsDto {
    eventId: number;
    ticketItems: {
        ticketTypeId: number;
        quantity: number;
    }[];
    billingEmail: string;
    billingFirstName: string;
    billingLastName: string;
    billingAddress?: string;
    billingCity?: string;
    billingState?: string;
    billingZipCode?: string;
    promoCode?: string;
    attendees?: {
        firstName: string;
        lastName: string;
        email: string;
    }[];
}

interface OrderSummary {
    eventId: number;
    eventTitle: string;
    items: { ticketTypeId: number; quantity: number; }[];
    subTotal: number;
    serviceFee: number;
    taxAmount: number;
    discountAmount: number;
    totalAmount: number;
    currency: string;
}

interface CheckInTicketDto {
    ticketNumber: string;
}

interface TicketValidation {
    isValid: boolean;
    ticket?: Ticket;
    message: string;
}

interface UserProfile {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    dateOfBirth?: string;
    profileImageUrl?: string;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    createdAt: string;
    lastLoginAt?: string;
    status: string;
    bio?: string;
    website?: string;
    timeZone?: string;
    isOrganizer: boolean;
    roles: string[];
}

interface UpdateUserProfileDto {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    dateOfBirth?: string;
    bio?: string;
    website?: string;
    timeZone?: string;
}

interface UserOrganization {
    companyName?: string;
    businessLicense?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
}

interface UpdateUserOrganizationDto {
    companyName?: string;
    businessLicense?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
}

interface UserPreferences {
    emailNotifications: boolean;
    smsNotifications: boolean;
    newBookingNotifications: boolean;
    cancellationNotifications: boolean;
    lowInventoryNotifications: boolean;
    dailyReports: boolean;
    weeklyReports: boolean;
    monthlyReports: boolean;
    twoFactorEnabled: boolean;
    sessionTimeout: number;
    loginNotifications: boolean;
    defaultTimeZone?: string;
    defaultEventDuration: number;
    defaultTicketSaleStart: number;
    defaultRefundPolicy?: string;
    requireApproval: boolean;
    autoPublish: boolean;
    theme: string;
    language: string;
    dateFormat: string;
    timeFormat: string;
    currency: string;
    accentColor: string;
    fontSize: string;
    compactMode: boolean;
}

interface UpdateUserPreferencesDto {
    // ALL fields should be optional to allow partial updates
    emailNotifications?: boolean;
    smsNotifications?: boolean;
    newBookingNotifications?: boolean;
    cancellationNotifications?: boolean;
    lowInventoryNotifications?: boolean;
    dailyReports?: boolean;
    weeklyReports?: boolean;
    monthlyReports?: boolean;
    twoFactorEnabled?: boolean;
    sessionTimeout?: number;
    loginNotifications?: boolean;
    defaultTimeZone?: string;
    defaultEventDuration?: number;
    defaultTicketSaleStart?: number;
    defaultRefundPolicy?: string;
    requireApproval?: boolean;
    autoPublish?: boolean;
    theme?: string;        // Made optional
    language?: string;     // Made optional  
    dateFormat?: string;   // Made optional
    timeFormat?: string;   // Made optional
    currency?: string;     // Made optional
    accentColor?: string;  // Made optional
    fontSize?: string;     // Made optional
    compactMode?: boolean; // Made optional
}


interface ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
}

// API Response wrapper
interface ApiResponse<T> {
    success?: boolean;
    data?: T;
    message?: string;
    errors?: string[];
}

// Enhanced API configuration with environment support
const getApiBaseUrl = (): string => {
    if (typeof window !== 'undefined') {
        return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5251/api';
    }
    return process.env.API_URL || 'http://localhost:5251/api';
};

export const userApi = {
    // Profile management
    getProfile: async (): Promise<UserProfile> => {
        try {
            console.log('👤 Fetching user profile');
            const response = await api.get('/user/profile');
            console.log('👤 Successfully loaded user profile');
            return response.data;
        } catch (error: any) {
            console.error('👤 Error fetching profile:', error.message);
            throw new Error(`Failed to load profile: ${error.message}`);
        }
    },

    updateProfile: async (profileData: UpdateUserProfileDto): Promise<UserProfile> => {
        try {
            console.log('👤 Updating user profile');
            const response = await api.put('/user/profile', profileData);
            console.log('👤 Successfully updated user profile');
            return response.data;
        } catch (error: any) {
            console.error('👤 Error updating profile:', error.message);
            throw new Error(`Failed to update profile: ${error.message}`);
        }
    },

    changePassword: async (passwordData: ChangePasswordDto): Promise<void> => {
        try {
            console.log('👤 Changing password');
            await api.post('/user/change-password', passwordData);
            console.log('👤 Successfully changed password');
        } catch (error: any) {
            console.error('👤 Error changing password:', error.message);
            throw new Error(`Failed to change password: ${error.message}`);
        }
    },

    // Organization management
    getOrganization: async (): Promise<UserOrganization> => {
        try {
            console.log('🏢 Fetching organization details');
            const response = await api.get('/user/organization');
            console.log('🏢 Successfully loaded organization details');
            return response.data;
        } catch (error: any) {
            console.error('🏢 Error fetching organization:', error.message);
            // Return empty object for new organizations
            return {};
        }
    },

    updateOrganization: async (orgData: UpdateUserOrganizationDto): Promise<UserOrganization> => {
        try {
            console.log('🏢 Updating organization details');
            const response = await api.put('/user/organization', orgData);
            console.log('🏢 Successfully updated organization details');
            return response.data;
        } catch (error: any) {
            console.error('🏢 Error updating organization:', error.message);
            throw new Error(`Failed to update organization: ${error.message}`);
        }
    },

    // Preferences management
    getPreferences: async (): Promise<UserPreferences> => {
        try {
            console.log('⚙️ Fetching user preferences');
            const response = await api.get('/user/preferences');
            console.log('⚙️ Successfully loaded user preferences');
            return response.data;
        } catch (error: any) {
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

    updatePreferences: async (preferences: Partial<UpdateUserPreferencesDto>): Promise<UserPreferences> => {
        try {
            console.log('⚙️ Updating user preferences:', preferences);
            const response = await api.put('/user/preferences', preferences);
            console.log('⚙️ Successfully updated user preferences');
            return response.data;
        } catch (error: any) {
            console.error('⚙️ Error updating preferences:', {
                message: error.message,
                status: error.response?.status,
                data: error.response?.data,
                payload: preferences
            });
            throw new Error(`Failed to update preferences: ${error.message}`);
        }
    },

    updateLanguageOnly: async (language: string): Promise<void> => {
        try {
            console.log('🌐 Updating language preference only:', language);

            // Try PATCH method first (if backend supports it)
            try {
                await api.patch('/user/preferences/language', { language });
                console.log('🌐 Language updated via PATCH endpoint');
                return;
            } catch (patchError) {
                console.log('🌐 PATCH endpoint not available, using PUT with minimal data');
            }

            // Fallback: Use PUT with minimal required data
            const minimalUpdate = {
                language,
                // Add any other fields that might be required by your backend
                emailNotifications: true,
                smsNotifications: false,
                theme: 'light',
                fontSize: 'medium',
                compactMode: false
            };

            await api.put('/user/preferences', minimalUpdate);
            console.log('🌐 Language updated via PUT with minimal data');
        } catch (error: any) {
            console.error('🌐 Language-only update failed:', error.message);
            throw error;
        }
    }
};

const API_BASE_URL = getApiBaseUrl();

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000, // 30 second timeout
});

// Enhanced request interceptor with better error handling
api.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    // Log requests in development
    if (process.env.NODE_ENV === 'development') {
        console.log(`🔄 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    }

    return config;
});

// Enhanced response interceptor with better error handling
api.interceptors.response.use(
    (response: AxiosResponse) => {
        // Handle wrapped responses
        if (response.data?.success === false) {
            throw new Error(response.data.message || 'API request failed');
        }

        // Extract data from wrapped responses
        if (response.data?.success === true && response.data?.data !== undefined) {
            response.data = response.data.data;
        }

        if (process.env.NODE_ENV === 'development') {
            console.log(`✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`);
        }

        return response;
    },
    (error: AxiosError) => {
        const message = (error.response?.data as any)?.message || error.message || 'Network error';

        if (process.env.NODE_ENV === 'development') {
            console.error(`❌ API Error: ${error.config?.method?.toUpperCase()} ${error.config?.url}`, message);
        }

        if (error.response?.status === 401 && typeof window !== 'undefined') {
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
            // Don't redirect automatically, let components handle this
            console.warn('Authentication expired. Please log in again.');
        }

        // Create a more detailed error
        const enhancedError = new Error(message);
        (enhancedError as any).status = error.response?.status;
        (enhancedError as any).originalError = error;

        return Promise.reject(enhancedError);
    }
);

// Helper functions for data normalization
const normalizeTicketType = (tt: any): TicketType => ({
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

// Smart ticketing utility functions
export const canEditTicketType = (ticketType: TicketType): { canEdit: boolean; reason: string } => {
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

export const canCreateTicketTypes = (event: Event): { canCreate: boolean; reason: string } => {
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

// Auth API
export const authApi = {
    login: async (credentials: LoginRequest): Promise<AuthResponse> => {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    },

    register: async (userData: RegisterRequest): Promise<AuthResponse> => {
        const response = await api.post('/auth/register', userData);
        return response.data;
    },
};

// Events API - Enhanced for organizers
export const eventsApi = {
    // Public endpoints
    getEvents: async (params?: {
        categoryId?: number;
        search?: string;
        isOnline?: boolean;
        startDate?: string;
        endDate?: string;
        page?: number;
        pageSize?: number;
    }): Promise<Event[]> => {
        const response = await api.get('/events', { params });
        return Array.isArray(response.data) ? response.data : [];
    },

    getEvent: async (id: number): Promise<Event> => {
        const response = await api.get(`/events/${id}`);
        return response.data;
    },

    // Organizer endpoints
    getMyEvents: async (): Promise<Event[]> => {
        const response = await api.get('/events/my-events');
        return Array.isArray(response.data) ? response.data : [];
    },

    createEvent: async (eventData: CreateEventDto): Promise<Event> => {
        const response = await api.post('/events', eventData);
        return response.data;
    },

    updateEvent: async (id: number, eventData: UpdateEventDto): Promise<Event> => {
        const response = await api.put(`/events/${id}`, eventData);
        return response.data;
    },

    deleteEvent: async (id: number): Promise<boolean> => {
        const response = await api.delete(`/events/${id}`);
        return response.status === 204 || response.status === 200;
    },

    publishEvent: async (id: number): Promise<void> => {
        await api.post(`/events/${id}/publish`);
    },

    unpublishEvent: async (id: number): Promise<void> => {
        await api.post(`/events/${id}/unpublish`);
    }
};

// Categories API
export const categoriesApi = {
    getCategories: async (): Promise<Category[]> => {
        const response = await api.get('/categories');
        return Array.isArray(response.data) ? response.data : [];
    },

    getCategory: async (id: number): Promise<Category> => {
        const response = await api.get(`/categories/${id}`);
        return response.data;
    },

    createCategory: async (categoryData: CreateCategoryDto): Promise<Category> => {
        const response = await api.post('/categories', categoryData);
        return response.data;
    }
};

// Venues API
export const venuesApi = {
    getVenues: async (city?: string): Promise<Venue[]> => {
        const params = city ? { city } : {};
        const response = await api.get('/venues', { params });
        return Array.isArray(response.data) ? response.data : [];
    },

    getVenue: async (id: number): Promise<Venue> => {
        const response = await api.get(`/venues/${id}`);
        return response.data;
    },

    createVenue: async (venueData: CreateVenueDto): Promise<Venue> => {
        const response = await api.post('/venues', venueData);
        return response.data;
    }
};

// Enhanced Tickets API with smart ticketing support
export const ticketsApi = {
    // Ticket Types - Enhanced with proper error handling and data normalization
    getEventTicketTypes: async (eventId: number): Promise<TicketType[]> => {
        try {
            console.log(`🎫 Fetching ticket types for event ${eventId}`);
            const response = await api.get(`/tickets/event/${eventId}/ticket-types`);

            const ticketTypes = Array.isArray(response.data) ? response.data : [];
            const normalizedTicketTypes = ticketTypes.map(normalizeTicketType);

            console.log(`🎫 Successfully loaded ${normalizedTicketTypes.length} ticket types`);
            return normalizedTicketTypes;
        } catch (error: any) {
            console.error('🎫 Error fetching ticket types:', error.message);
            throw new Error(`Failed to load ticket types: ${error.message}`);
        }
    },

    createTicketType: async (ticketTypeData: CreateTicketTypeDto): Promise<TicketType> => {
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
        } catch (error: any) {
            console.error('🎫 Error creating ticket type:', error.message);
            throw new Error(`Failed to create ticket type: ${error.message}`);
        }
    },

    updateTicketType: async (id: number, ticketTypeData: UpdateTicketTypeDto): Promise<TicketType> => {
        try {
            console.log(`🎫 Updating ticket type ${id}:`, ticketTypeData);

            // Remove undefined values
            const payload = Object.fromEntries(
                Object.entries(ticketTypeData).filter(([_, value]) => value !== undefined)
            );

            const response = await api.put(`/tickets/ticket-types/${id}`, payload);
            const normalizedTicketType = normalizeTicketType(response.data);

            console.log('🎫 Successfully updated ticket type:', normalizedTicketType);
            return normalizedTicketType;
        } catch (error: any) {
            console.error('🎫 Error updating ticket type:', error.message);
            throw new Error(`Failed to update ticket type: ${error.message}`);
        }
    },

    deleteTicketType: async (id: number): Promise<boolean> => {
        try {
            console.log(`🎫 Deleting ticket type ${id}`);
            const response = await api.delete(`/tickets/ticket-types/${id}`);
            console.log('🎫 Successfully deleted ticket type');
            return response.status === 204 || response.status === 200;
        } catch (error: any) {
            console.error('🎫 Error deleting ticket type:', error.message);
            throw new Error(`Failed to delete ticket type: ${error.message}`);
        }
    },

    getTicketType: async (id: number): Promise<TicketType> => {
        const response = await api.get(`/tickets/ticket-types/${id}`);
        return normalizeTicketType(response.data);
    },

    // Orders and Purchases
    calculateOrder: async (purchaseData: PurchaseTicketsDto): Promise<OrderSummary> => {
        const response = await api.post('/tickets/calculate-order', purchaseData);
        return response.data;
    },

    purchaseTickets: async (purchaseData: PurchaseTicketsDto): Promise<Order> => {
        const response = await api.post('/tickets/purchase', purchaseData);
        return response.data;
    },

    // User tickets
    getMyTickets: async (): Promise<Ticket[]> => {
        const response = await api.get('/tickets/my-tickets');
        return Array.isArray(response.data) ? response.data : [];
    },

    getTicket: async (id: number): Promise<Ticket> => {
        const response = await api.get(`/tickets/${id}`);
        return response.data;
    },

    // Validation and Check-in
    validateTicket: async (ticketNumber: string): Promise<TicketValidation> => {
        const response = await api.post('/tickets/validate', JSON.stringify(ticketNumber), {
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data;
    },

    checkInTicket: async (checkInData: CheckInTicketDto): Promise<Ticket> => {
        const response = await api.post('/tickets/check-in', checkInData);
        return response.data;
    }
};

// Orders API
export const ordersApi = {
    getMyOrders: async (): Promise<Order[]> => {
        const response = await api.get('/orders');
        return Array.isArray(response.data) ? response.data : [];
    },

    getOrder: async (id: number): Promise<Order> => {
        const response = await api.get(`/orders/${id}`);
        return response.data;
    }
};

// Health check and connectivity testing
export const healthApi = {
    checkConnection: async (): Promise<boolean> => {
        try {
            const response = await api.get('/health');
            return response.status === 200;
        } catch {
            return false;
        }
    },

    testAuth: async (): Promise<boolean> => {
        try {
            const response = await api.get('/events/my-events');
            return response.status === 200;
        } catch {
            return false;
        }
    }
};

export default api;