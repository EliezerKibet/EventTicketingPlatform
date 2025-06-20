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

export interface Event {
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

export interface PromoCode {
    promoCodeId: number;
    code: string;
    description: string;
    type: string; // 'Percentage' | 'FixedAmount'
    value: number;
    formattedValue: string; // "20% off" or "$10.00 off"
    minimumOrderAmount?: number;
    maximumDiscountAmount?: number;
    scope: string; // 'EventSpecific' | 'OrganizerWide'
    eventId?: number;
    eventTitle?: string;
    startDate: string;
    endDate: string;
    maxUsageCount: number;
    currentUsageCount: number;
    remainingUsage: number;
    maxUsagePerUser?: number;
    status: string; // 'Active' | 'Inactive' | 'Expired' | 'Suspended'
    isActive: boolean;
    isValid: boolean;
    invalidReason?: string;
    createdAt: string;
    updatedAt?: string;
}

export interface PromoCodeStats {
    totalPromoCodes: number;
    activePromoCodes: number;
    totalUsages: number;
    totalDiscountGiven: number;
    averageDiscountAmount: number;
    topPerformingCodes: Array<{
        code: string;
        usages: number;
        totalDiscount: number;
    }>;
}

interface PromoCodeAnalytics {
    promoCodeId: number;
    code: string;
    totalUsages: number;
    maxUsages: number;
    remainingUsages: number;
    totalDiscountGiven: number;
    averageDiscountAmount: number;
    totalOrderValue: number;
    conversionRate: number;
    usageByDay: Array<{
        date: string;
        usages: number;
        totalDiscount: number;
        totalOrderValue: number;
    }>;
    usageByEvent: Array<{
        eventId: number;
        eventTitle: string;
        usages: number;
        totalDiscount: number;
        totalOrderValue: number;
    }>;
}

export interface CreatePromoCodeDto {
    code: string;
    description?: string;
    type: number; // 0 = Percentage, 1 = FixedAmount
    value: number;
    minimumOrderAmount?: number;
    maximumDiscountAmount?: number;
    scope: number; // 0 = EventSpecific, 1 = OrganizerWide
    eventId?: number;
    startDate: string; // ISO string
    endDate: string; // ISO string
    maxUsageCount: number;
    maxUsagePerUser?: number;
}

interface UpdatePromoCodeDto {
    description?: string;
    value?: number;
    minimumOrderAmount?: number;
    maximumDiscountAmount?: number;
    startDate?: string;
    endDate?: string;
    maxUsageCount?: number;
    maxUsagePerUser?: number;
    status?: number; // 0 = Inactive, 1 = Active, 2 = Expired, 3 = Suspended
    isActive?: boolean;
}

interface ValidatePromoCodeRequest {
    code: string;
    eventId: number;
    orderSubtotal: number;
}

interface PromoCodeValidation {
    isValid: boolean;
    message: string;
    discountAmount: number;
    formattedDiscount: string;
    promoCode?: PromoCode;
}

interface PromoCodeUsage {
    promoCodeUsageId: number;
    promoCode: string;
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    eventTitle: string;
    discountAmount: number;
    orderSubtotal: number;
    usedAt: string;
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
    profileImageUrl?: string; 
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

interface ImageUploadResponse {
    success: boolean;
    imageUrl?: string;
    message?: string;
}

interface ImageValidationResult {
    isValid: boolean;
    error?: string;
}

// Enhanced API configuration with environment support
const getApiBaseUrl = (): string => {
    if (typeof window !== 'undefined') {
        return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5251/api';
    }
    return process.env.API_URL || 'http://localhost:5251/api';
};


export const promoCodesApi = {
    // Get all promo codes for the organizer
    getPromoCodes: async (): Promise<PromoCode[]> => {
        try {
            console.log('🏷️ Fetching promo codes');
            const response = await api.get('/PromoCodes');
            console.log(`🏷️ Successfully loaded ${Array.isArray(response.data) ? response.data.length : 0} promo codes`);
            return Array.isArray(response.data) ? response.data : [];
        } catch (error: any) {
            console.error('🏷️ Error fetching promo codes:', error.message);
            throw new Error(`Failed to load promo codes: ${error.message}`);
        }
    },

    // Get promo code statistics
    getStats: async (): Promise<PromoCodeStats> => {
        try {
            console.log('🏷️ Fetching promo code statistics');
            const response = await api.get('/PromoCodes/stats');
            console.log('🏷️ Successfully loaded promo code statistics');
            return response.data;
        } catch (error: any) {
            console.error('🏷️ Error fetching stats:', error.message);
            // Return default stats if endpoint fails
            return {
                totalPromoCodes: 0,
                activePromoCodes: 0,
                totalUsages: 0,
                totalDiscountGiven: 0,
                averageDiscountAmount: 0,
                topPerformingCodes: []
            };
        }
    },

    // Get single promo code
    getPromoCode: async (id: number): Promise<PromoCode> => {
        try {
            console.log(`🏷️ Fetching promo code ${id}`);
            const response = await api.get(`/PromoCodes/${id}`);
            console.log('🏷️ Successfully loaded promo code');
            return response.data;
        } catch (error: any) {
            console.error('🏷️ Error fetching promo code:', error.message);
            throw new Error(`Failed to load promo code: ${error.message}`);
        }
    },

    // Create a new promo code
    createPromoCode: async (data: CreatePromoCodeDto): Promise<PromoCode> => {
        try {
            console.log('🏷️ Creating promo code:', data);

            // Ensure proper data types
            const payload = {
                code: data.code.trim().toUpperCase(),
                description: data.description?.trim() || null,
                type: Number(data.type),
                value: Number(data.value),
                minimumOrderAmount: data.minimumOrderAmount ? Number(data.minimumOrderAmount) : null,
                maximumDiscountAmount: data.maximumDiscountAmount ? Number(data.maximumDiscountAmount) : null,
                scope: Number(data.scope),
                eventId: data.scope === 0 ? Number(data.eventId) : null,
                startDate: data.startDate,
                endDate: data.endDate,
                maxUsageCount: Number(data.maxUsageCount),
                maxUsagePerUser: data.maxUsagePerUser ? Number(data.maxUsagePerUser) : null
            };

            const response = await api.post('/PromoCodes', payload);
            console.log('🏷️ Successfully created promo code');
            return response.data;
        } catch (error: any) {
            console.error('🏷️ Error creating promo code:', error.message);
            throw new Error(`Failed to create promo code: ${error.message}`);
        }
    },

    // Update promo code
    updatePromoCode: async (id: number, data: UpdatePromoCodeDto): Promise<PromoCode> => {
        try {
            console.log(`🏷️ Updating promo code ${id}:`, data);

            // Remove undefined values and ensure proper types
            const payload = Object.fromEntries(
                Object.entries(data)
                    .filter(([_, value]) => value !== undefined)
                    .map(([key, value]) => [
                        key,
                        typeof value === 'string' && !isNaN(Number(value)) ? Number(value) : value
                    ])
            );

            const response = await api.put(`/PromoCodes/${id}`, payload);
            console.log('🏷️ Successfully updated promo code');
            return response.data;
        } catch (error: any) {
            console.error('🏷️ Error updating promo code:', error.message);
            throw new Error(`Failed to update promo code: ${error.message}`);
        }
    },

    // Delete promo code
    deletePromoCode: async (id: number): Promise<boolean> => {
        try {
            console.log(`🏷️ Deleting promo code ${id}`);
            const response = await api.delete(`/PromoCodes/${id}`);
            console.log('🏷️ Successfully deleted promo code');
            return response.status === 204 || response.status === 200;
        } catch (error: any) {
            console.error('🏷️ Error deleting promo code:', error.message);
            throw new Error(`Failed to delete promo code: ${error.message}`);
        }
    },

    // Get analytics for a promo code
    getAnalytics: async (id: number): Promise<PromoCodeAnalytics> => {
        try {
            console.log(`🏷️ Fetching analytics for promo code ${id}`);
            const response = await api.get(`/PromoCodes/${id}/analytics`);
            console.log('🏷️ Successfully loaded promo code analytics');
            return response.data;
        } catch (error: any) {
            console.error('🏷️ Error fetching analytics:', error.message);
            throw new Error(`Failed to load analytics: ${error.message}`);
        }
    },

    // Get usage history for a promo code
    getUsageHistory: async (id: number): Promise<PromoCodeUsage[]> => {
        try {
            console.log(`🏷️ Fetching usage history for promo code ${id}`);
            const response = await api.get(`/PromoCodes/${id}/usage-history`);
            console.log(`🏷️ Successfully loaded ${Array.isArray(response.data) ? response.data.length : 0} usage records`);
            return Array.isArray(response.data) ? response.data : [];
        } catch (error: any) {
            console.error('🏷️ Error fetching usage history:', error.message);
            throw new Error(`Failed to load usage history: ${error.message}`);
        }
    },

    // Validate promo code (public endpoint)
    validatePromoCode: async (data: ValidatePromoCodeRequest): Promise<PromoCodeValidation> => {
        try {
            console.log('🏷️ Validating promo code:', data.code);

            // This endpoint might not require authentication for public validation
            const response = await api.post('/PromoCodes/validate', data);
            console.log('🏷️ Promo code validation completed');
            return response.data;
        } catch (error: any) {
            console.error('🏷️ Error validating promo code:', error.message);
            throw new Error(`Failed to validate promo code: ${error.message}`);
        }
    },

    // Get promo codes for a specific event
    getEventPromoCodes: async (eventId: number): Promise<PromoCode[]> => {
        try {
            console.log(`🏷️ Fetching promo codes for event ${eventId}`);
            const response = await api.get(`/PromoCodes/event/${eventId}`);
            console.log(`🏷️ Successfully loaded ${Array.isArray(response.data) ? response.data.length : 0} event promo codes`);
            return Array.isArray(response.data) ? response.data : [];
        } catch (error: any) {
            console.error('🏷️ Error fetching event promo codes:', error.message);
            throw new Error(`Failed to load event promo codes: ${error.message}`);
        }
    }
};

// Image helper utilities
export const imageUtils = {
    // Get image with fallback
    getImageWithFallback: (
        imageUrl?: string,
        type: 'event-banner' | 'event-image' | 'venue' | 'user' | 'category' = 'event-image'
    ): string => {
        if (imageUrl && imageUrl.trim() !== '') {
            // If it's already a full URL, return as-is
            if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
                return imageUrl;
            }
            // If it's a relative path, ensure it starts with /
            return imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
        }

        const defaults = {
            'event-banner': '/images/defaults/event-banner.jpg',
            'event-image': '/images/defaults/event-image.jpg',
            'venue': '/images/defaults/venue-placeholder.jpg',
            'user': '/images/defaults/user-avatar.jpg',
            'category': '/images/defaults/category-icon.png'
        };

        return defaults[type];
    },

    // Resize image for preview (client-side)
    resizeImageForPreview: (file: File, maxWidth = 400, maxHeight = 300, quality = 0.8): Promise<string> => {
        return new Promise((resolve) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d')!;
            const img = new Image();

            img.onload = () => {
                const { width, height } = img;
                const ratio = Math.min(maxWidth / width, maxHeight / height);

                canvas.width = width * ratio;
                canvas.height = height * ratio;

                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL('image/jpeg', quality));
            };

            img.src = URL.createObjectURL(file);
        });
    },

    // Get file size in human readable format
    formatFileSize: (bytes: number): string => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
};


export const imageApi = {
    // Validation helper
    validateImageFile: (file: File): ImageValidationResult => {
        const maxSize = 5 * 1024 * 1024; // 5MB
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

        if (!allowedTypes.includes(file.type)) {
            return {
                isValid: false,
                error: 'Please select a valid image file (JPEG, PNG, WebP, or GIF)'
            };
        }

        if (file.size > maxSize) {
            return {
                isValid: false,
                error: 'File size must be less than 5MB'
            };
        }

        return { isValid: true };
    },

    // Event Images
    uploadEventBanner: async (eventId: number, file: File): Promise<ImageUploadResponse> => {
        try {
            const validation = imageApi.validateImageFile(file);
            if (!validation.isValid) {
                throw new Error(validation.error);
            }

            const formData = new FormData();
            formData.append('file', file);

            console.log(`📸 Uploading event banner for event ${eventId}`);

            const response = await api.post(`/events/${eventId}/upload-banner`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('📸 Event banner uploaded successfully');
            return response.data;
        } catch (error: any) {
            console.error('📸 Event banner upload failed:', error.message);
            throw new Error(`Failed to upload event banner: ${error.message}`);
        }
    },

    uploadEventImage: async (eventId: number, file: File): Promise<ImageUploadResponse> => {
        try {
            const validation = imageApi.validateImageFile(file);
            if (!validation.isValid) {
                throw new Error(validation.error);
            }

            const formData = new FormData();
            formData.append('file', file);

            console.log(`📸 Uploading event image for event ${eventId}`);

            const response = await api.post(`/events/${eventId}/upload-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('📸 Event image uploaded successfully');
            return response.data;
        } catch (error: any) {
            console.error('📸 Event image upload failed:', error.message);
            throw new Error(`Failed to upload event image: ${error.message}`);
        }
    },

    deleteEventBanner: async (eventId: number): Promise<ImageUploadResponse> => {
        try {
            console.log(`📸 Deleting event banner for event ${eventId}`);
            const response = await api.delete(`/events/${eventId}/banner`);
            console.log('📸 Event banner deleted successfully');
            return response.data;
        } catch (error: any) {
            console.error('📸 Event banner deletion failed:', error.message);
            throw new Error(`Failed to delete event banner: ${error.message}`);
        }
    },

    deleteEventImage: async (eventId: number): Promise<ImageUploadResponse> => {
        try {
            console.log(`📸 Deleting event image for event ${eventId}`);
            const response = await api.delete(`/events/${eventId}/image`);
            console.log('📸 Event image deleted successfully');
            return response.data;
        } catch (error: any) {
            console.error('📸 Event image deletion failed:', error.message);
            throw new Error(`Failed to delete event image: ${error.message}`);
        }
    },

    // User Profile Images
    uploadUserProfileImage: async (file: File): Promise<ImageUploadResponse> => {
        try {
            const validation = imageApi.validateImageFile(file);
            if (!validation.isValid) {
                throw new Error(validation.error);
            }

            const formData = new FormData();
            formData.append('file', file);

            console.log('📸 Uploading user profile image');

            const response = await api.post('/user/upload-profile-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('📸 Profile image uploaded successfully');
            return response.data;
        } catch (error: any) {
            console.error('📸 Profile image upload failed:', error.message);
            throw new Error(`Failed to upload profile image: ${error.message}`);
        }
    },

    deleteUserProfileImage: async (): Promise<ImageUploadResponse> => {
        try {
            console.log('📸 Deleting user profile image');
            const response = await api.delete('/user/profile-image');
            console.log('📸 Profile image deleted successfully');
            return response.data;
        } catch (error: any) {
            console.error('📸 Profile image deletion failed:', error.message);
            throw new Error(`Failed to delete profile image: ${error.message}`);
        }
    },

    // Venue Images
    uploadVenueImage: async (venueId: number, file: File): Promise<ImageUploadResponse> => {
        try {
            const validation = imageApi.validateImageFile(file);
            if (!validation.isValid) {
                throw new Error(validation.error);
            }

            const formData = new FormData();
            formData.append('file', file);

            console.log(`📸 Uploading venue image for venue ${venueId}`);

            const response = await api.post(`/venues/${venueId}/upload-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('📸 Venue image uploaded successfully');
            return response.data;
        } catch (error: any) {
            console.error('📸 Venue image upload failed:', error.message);
            throw new Error(`Failed to upload venue image: ${error.message}`);
        }
    },

    deleteVenueImage: async (venueId: number): Promise<ImageUploadResponse> => {
        try {
            console.log(`📸 Deleting venue image for venue ${venueId}`);
            const response = await api.delete(`/venues/${venueId}/image`);
            console.log('📸 Venue image deleted successfully');
            return response.data;
        } catch (error: any) {
            console.error('📸 Venue image deletion failed:', error.message);
            throw new Error(`Failed to delete venue image: ${error.message}`);
        }
    },

    // Category Icons (Admin only)
    uploadCategoryIcon: async (categoryId: number, file: File): Promise<ImageUploadResponse> => {
        try {
            const validation = imageApi.validateImageFile(file);
            if (!validation.isValid) {
                throw new Error(validation.error);
            }

            const formData = new FormData();
            formData.append('file', file);

            console.log(`📸 Uploading category icon for category ${categoryId}`);

            const response = await api.post(`/categories/${categoryId}/upload-icon`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('📸 Category icon uploaded successfully');
            return response.data;
        } catch (error: any) {
            console.error('📸 Category icon upload failed:', error.message);
            throw new Error(`Failed to upload category icon: ${error.message}`);
        }
    },

    deleteCategoryIcon: async (categoryId: number): Promise<ImageUploadResponse> => {
        try {
            console.log(`📸 Deleting category icon for category ${categoryId}`);
            const response = await api.delete(`/categories/${categoryId}/icon`);
            console.log('📸 Category icon deleted successfully');
            return response.data;
        } catch (error: any) {
            console.error('📸 Category icon deletion failed:', error.message);
            throw new Error(`Failed to delete category icon: ${error.message}`);
        }
    }
};

export const userApi = {

    updateProfileWithImage: async (
        profileData: UpdateUserProfileDto,
        profileImageFile?: File,
        deleteImage = false
    ): Promise<UserProfile> => {
        try {
            console.log('👤 Updating profile with image');

            // Step 1: Update profile data
            let updatedProfile = await userApi.updateProfile(profileData);

            // Step 2: Handle image operations
            if (deleteImage) {
                await imageApi.deleteUserProfileImage();
            } else if (profileImageFile) {
                await imageApi.uploadUserProfileImage(profileImageFile);
                // Fetch updated profile to get new image URL
                updatedProfile = await userApi.getProfile();
            }

            console.log('👤 Profile updated successfully');
            return updatedProfile;
        } catch (error: any) {
            console.error('👤 Profile update with image failed:', error.message);
            throw error;
        }
    },

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
    },

    // Enhanced create event with image upload support
    createEventWithImages: async (
        eventData: CreateEventDto,
        bannerFile?: File,
        imageFile?: File
    ): Promise<Event> => {
        try {
            console.log('🎯 Creating event with images');

            // Step 1: Create the event first
            const event = await eventsApi.createEvent(eventData);
            console.log('🎯 Event created, ID:', event.eventId);

            // Step 2: Upload banner if provided
            if (bannerFile) {
                try {
                    const bannerResult = await imageApi.uploadEventBanner(event.eventId, bannerFile);
                    console.log('🎯 Banner uploaded:', bannerResult.imageUrl);

                    // Update event with banner URL
                    const updateData: UpdateEventDto = { bannerImageUrl: bannerResult.imageUrl };
                    await eventsApi.updateEvent(event.eventId, updateData);
                } catch (bannerError) {
                    console.warn('🎯 Banner upload failed, continuing without banner:', bannerError);
                }
            }

            // Step 3: Upload image if provided
            if (imageFile) {
                try {
                    const imageResult = await imageApi.uploadEventImage(event.eventId, imageFile);
                    console.log('🎯 Image uploaded:', imageResult.imageUrl);

                    // Update event with image URL
                    const updateData: UpdateEventDto = { imageUrl: imageResult.imageUrl };
                    await eventsApi.updateEvent(event.eventId, updateData);
                } catch (imageError) {
                    console.warn('🎯 Image upload failed, continuing without image:', imageError);
                }
            }

            // Step 4: Return the updated event
            return await eventsApi.getEvent(event.eventId);
        } catch (error: any) {
            console.error('🎯 Event creation with images failed:', error.message);
            throw error;
        }
    },

    // Update event with image handling
    updateEventWithImages: async (
        eventId: number,
        eventData: UpdateEventDto,
        bannerFile?: File,
        imageFile?: File,
        deleteBanner = false,
        deleteImage = false
    ): Promise<Event> => {
        try {
            console.log('🎯 Updating event with images');

            // Step 1: Update event data
            let updatedEvent = await eventsApi.updateEvent(eventId, eventData);

            // Step 2: Handle banner operations
            if (deleteBanner) {
                await imageApi.deleteEventBanner(eventId);
            } else if (bannerFile) {
                const bannerResult = await imageApi.uploadEventBanner(eventId, bannerFile);
                const updateData: UpdateEventDto = { bannerImageUrl: bannerResult.imageUrl };
                updatedEvent = await eventsApi.updateEvent(eventId, updateData);
            }

            // Step 3: Handle image operations
            if (deleteImage) {
                await imageApi.deleteEventImage(eventId);
            } else if (imageFile) {
                const imageResult = await imageApi.uploadEventImage(eventId, imageFile);
                const updateData: UpdateEventDto = { imageUrl: imageResult.imageUrl };
                updatedEvent = await eventsApi.updateEvent(eventId, updateData);
            }

            console.log('🎯 Event updated successfully');
            return await eventsApi.getEvent(eventId);
        } catch (error: any) {
            console.error('🎯 Event update with images failed:', error.message);
            throw error;
        }
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
    },

    createVenueWithImage: async (
        venueData: CreateVenueDto,
        imageFile?: File
    ): Promise<Venue> => {
        try {
            console.log('🏢 Creating venue with image');

            // Step 1: Create venue
            const venue = await venuesApi.createVenue(venueData);
            console.log('🏢 Venue created, ID:', venue.venueId);

            // Step 2: Upload image if provided
            if (imageFile) {
                try {
                    const imageResult = await imageApi.uploadVenueImage(venue.venueId, imageFile);
                    console.log('🏢 Venue image uploaded:', imageResult.imageUrl);
                } catch (imageError) {
                    console.warn('🏢 Venue image upload failed, continuing without image:', imageError);
                }
            }

            // Step 3: Return updated venue
            return await venuesApi.getVenue(venue.venueId);
        } catch (error: any) {
            console.error('🏢 Venue creation with image failed:', error.message);
            throw error;
        }
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