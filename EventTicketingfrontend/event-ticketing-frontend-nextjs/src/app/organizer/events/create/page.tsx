/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useI18n } from '@/components/providers/I18nProvider'; // Add this import
import { Calendar, MapPin, Globe, Users, DollarSign, Plus, Trash2, Save, ArrowLeft, AlertCircle, Clock } from 'lucide-react';
import { useTheme, useThemeClasses } from '@/hooks/useTheme';

// Local interfaces to avoid import issues
interface Category {
    categoryId: number;
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

interface TicketTypeFormData {
    name: string;
    price: number;
    quantity: number;
    description: string;
    isActive: boolean;
}

interface EventFormData {
    title: string;
    description: string;
    eventDate: string;
    endDate: string;
    location: string;
    isOnline: boolean;
    maxCapacity: string;
    categoryId: string;
    venueId: number | null;
    imageUrl: string;
    registrationDeadline: string;
    isPublished: boolean;
}

const CreateEventPage = () => {
    const router = useRouter();
    const { user, isOrganizer } = useAuth();
    const { t } = useI18n(); // Add this hook
    const themeClasses = useThemeClasses();

    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [venues, setVenues] = useState<Venue[]>([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Form state
    const [formData, setFormData] = useState<EventFormData>({
        title: '',
        description: '',
        eventDate: '',
        endDate: '',
        location: '',
        isOnline: false,
        maxCapacity: '',
        categoryId: '',
        venueId: null,
        imageUrl: '',
        registrationDeadline: '',
        isPublished: false
    });

    // Ticket types state
    const [ticketTypes, setTicketTypes] = useState<TicketTypeFormData[]>([
        {
            name: 'General Admission',
            price: 0,
            quantity: 100,
            description: '',
            isActive: true
        }
    ]);

    const [formErrors, setFormErrors] = useState<Record<string, string>>({});

    // Fetch initial data
    useEffect(() => {
        if (user && isOrganizer) {
            fetchInitialData();
        } else if (user && !isOrganizer) {
            router.push('/');
        }
    }, [user, isOrganizer, router]);

    const fetchInitialData = async () => {
        try {
            // Fetch categories from your API
            const categoriesResponse = await fetch('http://localhost:5251/api/categories', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (categoriesResponse.ok) {
                const categoriesData = await categoriesResponse.json();
                setCategories(categoriesData);
            } else {
                // Fallback to mock data if API fails
                const mockCategories: Category[] = [
                    { categoryId: 1, name: t('technology'), description: 'Tech events' },
                    { categoryId: 2, name: t('business'), description: 'Business events' },
                    { categoryId: 3, name: t('music'), description: 'Music events' },
                    { categoryId: 4, name: t('sports'), description: 'Sports events' },
                    { categoryId: 5, name: t('education'), description: 'Educational events' }
                ];
                setCategories(mockCategories);
            }

            // Fetch venues from your API
            const venuesResponse = await fetch('http://localhost:5251/api/venues', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (venuesResponse.ok) {
                const venuesData = await venuesResponse.json();
                setVenues(venuesData);
            } else {
                // Fallback to mock data if API fails
                const mockVenues: Venue[] = [
                    { venueId: 1, name: 'KLCC Convention Center', address: 'Kuala Lumpur City Centre', city: 'Kuala Lumpur', capacity: 1000 },
                    { venueId: 2, name: 'Sunway Convention Centre', address: 'Bandar Sunway', city: 'Petaling Jaya', capacity: 800 },
                    { venueId: 3, name: 'Mid Valley Exhibition Centre', address: 'Mid Valley City', city: 'Kuala Lumpur', capacity: 500 },
                    { venueId: 4, name: 'Penang International Convention Centre', address: 'Georgetown', city: 'Penang', capacity: 600 }
                ];
                setVenues(mockVenues);
            }

        } catch (error) {
            console.error('Error fetching initial data:', error);
            setError(t('loadError'));

            // Set fallback mock data
            setCategories([
                { categoryId: 1, name: t('technology'), description: 'Tech events' },
                { categoryId: 2, name: t('business'), description: 'Business events' },
                { categoryId: 3, name: t('music'), description: 'Music events' },
                { categoryId: 4, name: t('sports'), description: 'Sports events' },
                { categoryId: 5, name: t('education'), description: 'Educational events' }
            ]);

            setVenues([
                { venueId: 1, name: 'KLCC Convention Center', address: 'Kuala Lumpur City Centre', city: 'Kuala Lumpur', capacity: 1000 },
                { venueId: 2, name: 'Sunway Convention Centre', address: 'Bandar Sunway', city: 'Petaling Jaya', capacity: 800 },
                { venueId: 3, name: 'Mid Valley Exhibition Centre', address: 'Mid Valley City', city: 'Kuala Lumpur', capacity: 500 }
            ]);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error when field is updated
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleTicketTypeChange = (index: number, field: keyof TicketTypeFormData, value: string | number | boolean) => {
        setTicketTypes(prev => prev.map((ticket, i) =>
            i === index ? { ...ticket, [field]: value } : ticket
        ));
    };

    const addTicketType = () => {
        setTicketTypes(prev => [...prev, {
            name: '',
            price: 0,
            quantity: 0,
            description: '',
            isActive: true
        }]);
    };

    const removeTicketType = (index: number) => {
        if (ticketTypes.length > 1) {
            setTicketTypes(prev => prev.filter((_, i) => i !== index));
        }
    };

    // Helper function to check if event spans multiple days
    const isMultiDayEvent = () => {
        if (!formData.eventDate || !formData.endDate) return false;

        const start = new Date(formData.eventDate);
        const end = new Date(formData.endDate);

        return start.toDateString() !== end.toDateString();
    };

    // Helper function to calculate event duration
    const getEventDuration = () => {
        if (!formData.eventDate || !formData.endDate) return null;

        const start = new Date(formData.eventDate);
        const end = new Date(formData.endDate);
        const diffInMs = end.getTime() - start.getTime();
        const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

        return diffInDays > 0 ? diffInDays : null;
    };

    const validateForm = () => {
        const errors: Record<string, string> = {};

        if (!formData.title.trim()) {
            errors.title = t('eventTitleRequired');
        }

        if (!formData.description.trim()) {
            errors.description = t('descriptionRequired');
        }

        if (!formData.eventDate) {
            errors.eventDate = t('startDateTimeRequired');
        }

        // Validate end date if provided
        if (formData.endDate && formData.eventDate) {
            const start = new Date(formData.eventDate);
            const end = new Date(formData.endDate);

            if (end <= start) {
                errors.endDate = t('endDateAfterStart');
            }
        }

        if (!formData.categoryId) {
            errors.categoryId = t('categoryRequired');
        }

        if (!formData.isOnline && !formData.venueId) {
            errors.venueId = t('venueRequired');
        }

        if (!formData.maxCapacity || parseInt(formData.maxCapacity) <= 0) {
            errors.maxCapacity = t('maxCapacityRequired');
        }

        // Validate registration deadline
        if (formData.registrationDeadline && formData.eventDate) {
            const regDeadline = new Date(formData.registrationDeadline);
            const eventStart = new Date(formData.eventDate);

            if (regDeadline >= eventStart) {
                errors.registrationDeadline = t('registrationDeadlineBeforeEvent');
            }
        }

        // Validate ticket types
        ticketTypes.forEach((ticket, index) => {
            if (!ticket.name.trim()) {
                errors[`ticketName_${index}`] = t('ticketTypeNameRequired');
            }
            if (ticket.quantity <= 0) {
                errors[`ticketQuantity_${index}`] = t('quantityGreaterThanZero');
            }
        });

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Updated ticket creation payload to match your DTO
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            setError(t('fixErrorsBelow'));
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');

        try {
            // Format dates properly for API
            const formatDateForApi = (dateString: string) => {
                if (!dateString) return null;
                const date = new Date(dateString);
                return date.toISOString();
            };

            // Prepare event data
            const eventPayload = {
                title: formData.title.trim(),
                description: formData.description.trim(),
                shortDescription: null,
                startDateTime: formatDateForApi(formData.eventDate),
                endDateTime: formData.endDate ? formatDateForApi(formData.endDate) : null,
                categoryId: parseInt(formData.categoryId),
                venueId: formData.isOnline ? null : (formData.venueId ? parseInt(formData.venueId.toString()) : null),
                imageUrl: formData.imageUrl || null,
                bannerImageUrl: null,
                tags: null,
                maxAttendees: parseInt(formData.maxCapacity),
                basePrice: 0,
                currency: "USD",
                isOnline: formData.isOnline,
                onlineUrl: formData.isOnline ? formData.location : null,
                isPublished: formData.isPublished,
                registrationDeadline: formData.registrationDeadline ? formatDateForApi(formData.registrationDeadline) : null
            };

            console.log('Creating event with payload:', eventPayload);

            // Create event
            const eventResponse = await fetch('http://localhost:5251/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                },
                body: JSON.stringify(eventPayload)
            });

            if (!eventResponse.ok) {
                const errorData = await eventResponse.json();
                console.error('Event creation failed:', errorData);
                throw new Error(errorData.message || t('failedToCreateEvent'));
            }

            const createdEvent = await eventResponse.json();
            console.log('Event created successfully:', createdEvent);

            // Create ticket types with corrected payload structure
            const ticketCreationResults = [];
            let failedTickets = 0;

            for (const [index, ticketType] of ticketTypes.entries()) {
                try {
                    // Fixed payload to match CreateTicketTypeDto
                    const ticketPayload = {
                        eventId: createdEvent.eventId,
                        name: ticketType.name.trim(),
                        description: ticketType.description?.trim() || null,
                        price: Number(ticketType.price),
                        quantityAvailable: Number(ticketType.quantity),
                        saleStartDate: null,
                        saleEndDate: null,
                        minQuantityPerOrder: 1,
                        maxQuantityPerOrder: Math.min(10, Number(ticketType.quantity)),
                        sortOrder: index
                    };

                    // Validate the payload before sending
                    if (!ticketPayload.name) {
                        throw new Error(`Ticket ${index + 1}: ${t('ticketTypeNameRequired')}`);
                    }
                    if (ticketPayload.price < 0) {
                        throw new Error(`Ticket ${index + 1}: ${t('priceRequired')}`);
                    }
                    if (ticketPayload.quantityAvailable <= 0) {
                        throw new Error(`Ticket ${index + 1}: ${t('quantityGreaterThanZero')}`);
                    }

                    console.log(`Creating ticket type ${index + 1} with corrected payload:`, ticketPayload);

                    const ticketResponse = await fetch('http://localhost:5251/api/tickets/ticket-types', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                        },
                        body: JSON.stringify(ticketPayload)
                    });

                    console.log(`Ticket ${index + 1} response status:`, ticketResponse.status);

                    if (!ticketResponse.ok) {
                        const ticketErrorText = await ticketResponse.text();
                        console.error(`Failed to create ticket type ${index + 1}:`, ticketErrorText);

                        let ticketError;
                        try {
                            ticketError = JSON.parse(ticketErrorText);
                        } catch {
                            ticketError = { message: ticketErrorText };
                        }

                        console.error(`Ticket ${index + 1} error details:`, ticketError);
                        failedTickets++;

                        // Log the specific validation errors if available
                        if (ticketError.errors) {
                            console.error(`Ticket ${index + 1} validation errors:`, ticketError.errors);
                        }
                    } else {
                        const createdTicketType = await ticketResponse.json();
                        console.log(`Ticket type ${index + 1} created successfully:`, createdTicketType);
                        ticketCreationResults.push(createdTicketType);
                    }
                } catch (ticketError) {
                    console.error(`Error creating ticket type ${index + 1}:`, ticketError);
                    failedTickets++;
                }
            }

            // Show appropriate success message
            if (failedTickets === 0) {
                setSuccess(t('eventCreatedSuccessfully'));
            } else if (failedTickets < ticketTypes.length) {
                setSuccess(t('eventCreatedSuccessfully'));
            } else {
                setSuccess(t('eventCreatedSuccessfully'));
            }

            // Redirect after a delay
            setTimeout(() => {
                router.push('/organizer/dashboard');
            }, 3000);

        } catch (error) {
            console.error('Error in event creation process:', error);
            setError(error instanceof Error ? error.message : t('failedToCreateEvent'));
        } finally {
            setLoading(false);
        }
    };

    if (!user || !isOrganizer) {
        return (
            <div className={`min-h-screen ${themeClasses.background} flex items-center justify-center`}>
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className={`mt-4 ${themeClasses.textMuted}`}>{t('loading')}</p>
                </div>
            </div>
        );
    }

    const eventDuration = getEventDuration();

    return (
        <div className={`min-h-screen ${themeClasses.background}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => router.back()}
                        className={`flex items-center ${themeClasses.textMuted} hover:${themeClasses.text} mb-4`}
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        {t('back')}
                    </button>
                    <h1 className={`text-3xl font-bold ${themeClasses.text}`}>{t('createNewEvent')}</h1>
                    <p className={`${themeClasses.textMuted} mt-1`}>{t('fillEventDetails')}</p>

                    {/* Show event duration if multi-day */}
                    {eventDuration && eventDuration > 1 && (
                        <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                            <Clock className="h-4 w-4 mr-1" />
                            {t('dayEvent', { count: eventDuration })}
                        </div>
                    )}
                </div>

                <div className={`${themeClasses.card} rounded-lg shadow-sm ${themeClasses.border} border`}>
                    {/* Success/Error Messages */}
                    {success && (
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 border-b border-green-200 dark:border-green-800">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-green-700 dark:text-green-300">{success}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {error && (
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800">
                            <div className="flex items-center">
                                <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                                <div className="ml-3">
                                    <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="p-6 space-y-8">
                        {/* Basic Information */}
                        <div>
                            <h2 className={`text-lg font-semibold ${themeClasses.text} mb-4`}>{t('basicInformation')}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                        {t('eventTitle')} *
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.title ? 'border-red-500' : ''}`}
                                        placeholder={t('enterEventTitle')}
                                    />
                                    {formErrors.title && <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>}
                                </div>

                                <div className="md:col-span-2">
                                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                        {t('eventDescription')} *
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className={`w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.description ? 'border-red-500' : ''}`}
                                        placeholder={t('describeEventDetail')}
                                    />
                                    {formErrors.description && <p className="text-red-500 text-sm mt-1">{formErrors.description}</p>}
                                </div>

                                <div>
                                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                        {t('category')} *
                                    </label>
                                    <select
                                        name="categoryId"
                                        value={formData.categoryId}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.categoryId ? 'border-red-500' : ''}`}
                                    >
                                        <option value="" className={themeClasses.textMuted}>{t('selectCategory')}</option>
                                        {categories.map(category => (
                                            <option key={category.categoryId} value={category.categoryId} className={themeClasses.text}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    {formErrors.categoryId && <p className="text-red-500 text-sm mt-1">{formErrors.categoryId}</p>}
                                </div>

                                <div>
                                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                        {t('maxCapacity')} *
                                    </label>
                                    <input
                                        type="number"
                                        name="maxCapacity"
                                        value={formData.maxCapacity}
                                        onChange={handleInputChange}
                                        min="1"
                                        className={`w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.maxCapacity ? 'border-red-500' : ''}`}
                                        placeholder={t('maximumAttendees')}
                                    />
                                    {formErrors.maxCapacity && <p className="text-red-500 text-sm mt-1">{formErrors.maxCapacity}</p>}
                                </div>

                                <div className="md:col-span-2">
                                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                        {t('eventImageUrl')}
                                    </label>
                                    <input
                                        type="url"
                                        name="imageUrl"
                                        value={formData.imageUrl}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text}`}
                                        placeholder={t('enterImageUrl')}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Date & Time */}
                        <div>
                            <h2 className={`text-lg font-semibold ${themeClasses.text} mb-4`}>{t('dateTime')}</h2>

                            {/* Date Range Preview */}
                            {formData.eventDate && formData.endDate && isMultiDayEvent() && (
                                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                                    <div className="flex items-center">
                                        <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                                        <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                                            {t('multiDayEvent', { count: eventDuration })}
                                        </span>
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                        {t('startDateTime')} *
                                    </label>
                                    <input
                                        type="datetime-local"
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.eventDate ? 'border-red-500' : ''}`}
                                    />
                                    {formErrors.eventDate && <p className="text-red-500 text-sm mt-1">{formErrors.eventDate}</p>}
                                </div>

                                <div>
                                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                        {t('endDateTime')}
                                    </label>
                                    <input
                                        type="datetime-local"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.endDate ? 'border-red-500' : ''}`}
                                    />
                                    {formErrors.endDate && <p className="text-red-500 text-sm mt-1">{formErrors.endDate}</p>}
                                    <p className={`text-xs ${themeClasses.textMuted} mt-1`}>
                                        {t('leaveEmptySingleSession')}
                                    </p>
                                </div>

                                <div className="md:col-span-2">
                                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                        {t('registrationDeadline')}
                                    </label>
                                    <input
                                        type="datetime-local"
                                        name="registrationDeadline"
                                        value={formData.registrationDeadline}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.registrationDeadline ? 'border-red-500' : ''}`}
                                    />
                                    {formErrors.registrationDeadline && <p className="text-red-500 text-sm mt-1">{formErrors.registrationDeadline}</p>}
                                    <p className={`text-xs ${themeClasses.textMuted} mt-1`}>
                                        {t('whenRegistrationClose')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <h2 className={`text-lg font-semibold ${themeClasses.text} mb-4`}>{t('location')}</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="isOnline"
                                        checked={formData.isOnline}
                                        onChange={handleInputChange}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label className={`ml-2 text-sm ${themeClasses.text}`}>
                                        {t('onlineEvent')}
                                    </label>
                                </div>

                                {!formData.isOnline && (
                                    <div>
                                        <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                            {t('venue')} *
                                        </label>
                                        <select
                                            name="venueId"
                                            value={formData.venueId || ''}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.venueId ? 'border-red-500' : ''}`}
                                        >
                                            <option value="" className={themeClasses.textMuted}>{t('selectVenue')}</option>
                                            {venues.map(venue => (
                                                <option key={venue.venueId} value={venue.venueId} className={themeClasses.text}>
                                                    {t('venueWithCapacity', { name: venue.name, city: venue.city, capacity: venue.capacity })}
                                                </option>
                                            ))}
                                        </select>
                                        {formErrors.venueId && <p className="text-red-500 text-sm mt-1">{formErrors.venueId}</p>}
                                    </div>
                                )}

                                <div>
                                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                        {t('locationDetails')}
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text}`}
                                        placeholder={formData.isOnline ? t('meetingLinkPlatform') : t('additionalLocationInfo')}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Ticket Types */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className={`text-lg font-semibold ${themeClasses.text}`}>{t('ticketTypes')}</h2>
                                <button
                                    type="button"
                                    onClick={addTicketType}
                                    className="flex items-center px-3 py-2 text-sm bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50"
                                >
                                    <Plus className="h-4 w-4 mr-1" />
                                    {t('addTicketType')}
                                </button>
                            </div>

                            <div className="space-y-4">
                                {ticketTypes.map((ticket, index) => (
                                    <div key={index} className={`p-4 ${themeClasses.border} border rounded-lg`}>
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className={`text-md font-medium ${themeClasses.text}`}>
                                                {t('ticketTypeName')} {index + 1}
                                            </h3>
                                            {ticketTypes.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeTicketType(index)}
                                                    className="text-red-600 hover:text-red-800"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div>
                                                <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                    {t('ticketTypeName')} *
                                                </label>
                                                <input
                                                    type="text"
                                                    value={ticket.name}
                                                    onChange={(e) => handleTicketTypeChange(index, 'name', e.target.value)}
                                                    className={`w-full px-3 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors[`ticketName_${index}`] ? 'border-red-500' : ''}`}
                                                    placeholder="e.g., General Admission"
                                                />
                                                {formErrors[`ticketName_${index}`] && (
                                                    <p className="text-red-500 text-sm mt-1">{formErrors[`ticketName_${index}`]}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                    {t('price')}
                                                </label>
                                                <input
                                                    type="number"
                                                    value={ticket.price}
                                                    onChange={(e) => handleTicketTypeChange(index, 'price', parseFloat(e.target.value) || 0)}
                                                    min="0"
                                                    step="0.01"
                                                    className={`w-full px-3 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text}`}
                                                    placeholder="0.00"
                                                />
                                            </div>

                                            <div>
                                                <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                    {t('quantity')} *
                                                </label>
                                                <input
                                                    type="number"
                                                    value={ticket.quantity}
                                                    onChange={(e) => handleTicketTypeChange(index, 'quantity', parseInt(e.target.value) || 0)}
                                                    min="1"
                                                    className={`w-full px-3 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors[`ticketQuantity_${index}`] ? 'border-red-500' : ''}`}
                                                    placeholder="100"
                                                />
                                                {formErrors[`ticketQuantity_${index}`] && (
                                                    <p className="text-red-500 text-sm mt-1">{formErrors[`ticketQuantity_${index}`]}</p>
                                                )}
                                            </div>

                                            <div className="md:col-span-3">
                                                <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                    {t('ticketDescription')}
                                                </label>
                                                <textarea
                                                    value={ticket.description}
                                                    onChange={(e) => handleTicketTypeChange(index, 'description', e.target.value)}
                                                    rows={2}
                                                    className={`w-full px-3 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text}`}
                                                    placeholder={t('optionalTicketDescription')}
                                                />
                                            </div>

                                            <div className="md:col-span-3">
                                                <div className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={ticket.isActive}
                                                        onChange={(e) => handleTicketTypeChange(index, 'isActive', e.target.checked)}
                                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                    />
                                                    <label className={`ml-2 text-sm ${themeClasses.text}`}>
                                                        {t('ticketActive')}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Publishing Options */}
                        <div>
                            <h2 className={`text-lg font-semibold ${themeClasses.text} mb-4`}>{t('publishingOptions')}</h2>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="isPublished"
                                    checked={formData.isPublished}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label className={`ml-2 text-sm ${themeClasses.text}`}>
                                    {t('publishEventImmediately')}
                                </label>
                            </div>
                            <p className={`text-xs ${themeClasses.textMuted} mt-1`}>
                                {t('publishUnpublishLater')}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className={`flex justify-end space-x-4 pt-6 border-t ${themeClasses.border}`}>
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className={`px-6 py-2 ${themeClasses.border} border ${themeClasses.text} rounded-lg ${themeClasses.hover} transition-colors`}
                                disabled={loading}
                            >
                                {t('cancel')}
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        {t('creatingEvent')}
                                    </>
                                ) : (
                                    <>
                                        <Save className="h-4 w-4 mr-2" />
                                        {t('createEvent')}
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateEventPage;