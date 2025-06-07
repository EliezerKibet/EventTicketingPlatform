/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Calendar, MapPin, Globe, Users, DollarSign, Plus, Trash2, Save, ArrowLeft, AlertCircle, Clock } from 'lucide-react';

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
                    { categoryId: 1, name: 'Technology', description: 'Tech events' },
                    { categoryId: 2, name: 'Business', description: 'Business events' },
                    { categoryId: 3, name: 'Music', description: 'Music events' },
                    { categoryId: 4, name: 'Sports', description: 'Sports events' },
                    { categoryId: 5, name: 'Education', description: 'Educational events' }
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
            setError('Failed to load categories and venues');

            // Set fallback mock data
            setCategories([
                { categoryId: 1, name: 'Technology', description: 'Tech events' },
                { categoryId: 2, name: 'Business', description: 'Business events' },
                { categoryId: 3, name: 'Music', description: 'Music events' },
                { categoryId: 4, name: 'Sports', description: 'Sports events' },
                { categoryId: 5, name: 'Education', description: 'Educational events' }
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
            errors.title = 'Event title is required';
        }

        if (!formData.description.trim()) {
            errors.description = 'Event description is required';
        }

        if (!formData.eventDate) {
            errors.eventDate = 'Event start date is required';
        }

        // Validate end date if provided
        if (formData.endDate && formData.eventDate) {
            const start = new Date(formData.eventDate);
            const end = new Date(formData.endDate);

            if (end <= start) {
                errors.endDate = 'End date must be after start date';
            }
        }

        if (!formData.categoryId) {
            errors.categoryId = 'Category is required';
        }

        if (!formData.isOnline && !formData.venueId) {
            errors.venueId = 'Venue is required for in-person events';
        }

        if (!formData.maxCapacity || parseInt(formData.maxCapacity) <= 0) {
            errors.maxCapacity = 'Maximum capacity must be greater than 0';
        }

        // Validate registration deadline
        if (formData.registrationDeadline && formData.eventDate) {
            const regDeadline = new Date(formData.registrationDeadline);
            const eventStart = new Date(formData.eventDate);

            if (regDeadline >= eventStart) {
                errors.registrationDeadline = 'Registration deadline must be before event start';
            }
        }

        // Validate ticket types
        ticketTypes.forEach((ticket, index) => {
            if (!ticket.name.trim()) {
                errors[`ticketName_${index}`] = 'Ticket name is required';
            }
            if (ticket.quantity <= 0) {
                errors[`ticketQuantity_${index}`] = 'Ticket quantity must be greater than 0';
            }
        });

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Updated ticket creation payload to match your DTO
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            setError('Please fix the errors below');
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
                throw new Error(errorData.message || `Failed to create event: ${eventResponse.status} ${eventResponse.statusText}`);
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
                        quantityAvailable: Number(ticketType.quantity), // Fixed: using quantityAvailable instead of quantity
                        saleStartDate: null, // Optional: you can add this to your form if needed
                        saleEndDate: null,   // Optional: you can add this to your form if needed
                        minQuantityPerOrder: 1, // Default value
                        maxQuantityPerOrder: Math.min(10, Number(ticketType.quantity)), // Default to 10 or available quantity
                        sortOrder: index // Use index as sort order
                    };

                    // Validate the payload before sending
                    if (!ticketPayload.name) {
                        throw new Error(`Ticket ${index + 1}: Name is required`);
                    }
                    if (ticketPayload.price < 0) {
                        throw new Error(`Ticket ${index + 1}: Price cannot be negative`);
                    }
                    if (ticketPayload.quantityAvailable <= 0) {
                        throw new Error(`Ticket ${index + 1}: Quantity must be greater than 0`);
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
                setSuccess('Event and all ticket types created successfully!');
            } else if (failedTickets < ticketTypes.length) {
                setSuccess(`Event created successfully! ${ticketTypes.length - failedTickets} ticket types created, ${failedTickets} failed. Check console for details.`);
            } else {
                setSuccess('Event created successfully, but all ticket types failed. You can add them later from the dashboard. Check console for details.');
            }

            // Redirect after a delay
            setTimeout(() => {
                router.push('/organizer/dashboard');
            }, 3000);

        } catch (error) {
            console.error('Error in event creation process:', error);
            setError(error instanceof Error ? error.message : 'Failed to create event. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (!user || !isOrganizer) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    const eventDuration = getEventDuration();

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900">Create New Event</h1>
                    <p className="text-gray-600 mt-1">Fill out the details to create your event</p>

                    {/* Show event duration if multi-day */}
                    {eventDuration && eventDuration > 1 && (
                        <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                            <Clock className="h-4 w-4 mr-1" />
                            {eventDuration} day event
                        </div>
                    )}
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    {/* Success/Error Messages */}
                    {success && (
                        <div className="p-4 bg-green-50 border-b border-green-200">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-green-700">{success}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {error && (
                        <div className="p-4 bg-red-50 border-b border-red-200">
                            <div className="flex items-center">
                                <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                                <div className="ml-3">
                                    <p className="text-sm text-red-700">{error}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="p-6 space-y-8">
                        {/* Basic Information */}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Event Title *
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-gray-900 ${formErrors.title ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Enter event title"
                                    />
                                    {formErrors.title && <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Description *
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-gray-900 ${formErrors.description ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Describe your event in detail..."
                                    />
                                    {formErrors.description && <p className="text-red-500 text-sm mt-1">{formErrors.description}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Category *
                                    </label>
                                    <select
                                        name="categoryId"
                                        value={formData.categoryId}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 ${formErrors.categoryId ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    >
                                        <option value="" className="text-gray-500">Select category</option>
                                        {categories.map(category => (
                                            <option key={category.categoryId} value={category.categoryId} className="text-gray-900">
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    {formErrors.categoryId && <p className="text-red-500 text-sm mt-1">{formErrors.categoryId}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Max Capacity *
                                    </label>
                                    <input
                                        type="number"
                                        name="maxCapacity"
                                        value={formData.maxCapacity}
                                        onChange={handleInputChange}
                                        min="1"
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-gray-900 ${formErrors.maxCapacity ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="Maximum attendees"
                                    />
                                    {formErrors.maxCapacity && <p className="text-red-500 text-sm mt-1">{formErrors.maxCapacity}</p>}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Event Image URL
                                    </label>
                                    <input
                                        type="url"
                                        name="imageUrl"
                                        value={formData.imageUrl}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-gray-900"
                                        placeholder="https://example.com/event-image.jpg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Date & Time */}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Date & Time</h2>

                            {/* Date Range Preview */}
                            {formData.eventDate && formData.endDate && isMultiDayEvent() && (
                                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                    <div className="flex items-center">
                                        <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                                        <span className="text-sm text-blue-700 font-medium">
                                            Multi-day event: {eventDuration} days
                                        </span>
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Start Date & Time *
                                    </label>
                                    <input
                                        type="datetime-local"
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 ${formErrors.eventDate ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {formErrors.eventDate && <p className="text-red-500 text-sm mt-1">{formErrors.eventDate}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        End Date & Time
                                    </label>
                                    <input
                                        type="datetime-local"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 ${formErrors.endDate ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {formErrors.endDate && <p className="text-red-500 text-sm mt-1">{formErrors.endDate}</p>}
                                    <p className="text-xs text-gray-600 mt-1">
                                        Leave empty for single-session events
                                    </p>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Registration Deadline
                                    </label>
                                    <input
                                        type="datetime-local"
                                        name="registrationDeadline"
                                        value={formData.registrationDeadline}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 ${formErrors.registrationDeadline ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {formErrors.registrationDeadline && <p className="text-red-500 text-sm mt-1">{formErrors.registrationDeadline}</p>}
                                    <p className="text-xs text-gray-600 mt-1">
                                        When should registration close? (optional)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Location</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="isOnline"
                                        checked={formData.isOnline}
                                        onChange={handleInputChange}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label className="ml-2 text-sm text-gray-700">
                                        This is an online event
                                    </label>
                                </div>

                                {!formData.isOnline && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Venue *
                                        </label>
                                        <select
                                            name="venueId"
                                            value={formData.venueId || ''}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 ${formErrors.venueId ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                        >
                                            <option value="" className="text-gray-500">Select venue</option>
                                            {venues.map(venue => (
                                                <option key={venue.venueId} value={venue.venueId} className="text-gray-900">
                                                    {venue.name} - {venue.city} (Capacity: {venue.capacity})
                                                </option>
                                            ))}
                                        </select>
                                        {formErrors.venueId && <p className="text-red-500 text-sm mt-1">{formErrors.venueId}</p>}
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Location Details
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-gray-900"
                                        placeholder={formData.isOnline ? "Meeting link or platform details" : "Additional location information"}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Ticket Types */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold text-gray-900">Ticket Types</h2>
                                <button
                                    type="button"
                                    onClick={addTicketType}
                                    className="flex items-center px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200"
                                >
                                    <Plus className="h-4 w-4 mr-1" />
                                    Add Ticket Type
                                </button>
                            </div>

                            <div className="space-y-4">
                                {ticketTypes.map((ticket, index) => (
                                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-md font-medium text-gray-900">
                                                Ticket Type {index + 1}
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
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Ticket Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    value={ticket.name}
                                                    onChange={(e) => handleTicketTypeChange(index, 'name', e.target.value)}
                                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-gray-900 ${formErrors[`ticketName_${index}`] ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                    placeholder="e.g., General Admission"
                                                />
                                                {formErrors[`ticketName_${index}`] && (
                                                    <p className="text-red-500 text-sm mt-1">{formErrors[`ticketName_${index}`]}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Price (RM)
                                                </label>
                                                <input
                                                    type="number"
                                                    value={ticket.price}
                                                    onChange={(e) => handleTicketTypeChange(index, 'price', parseFloat(e.target.value) || 0)}
                                                    min="0"
                                                    step="0.01"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-gray-900"
                                                    placeholder="0.00"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Quantity *
                                                </label>
                                                <input
                                                    type="number"
                                                    value={ticket.quantity}
                                                    onChange={(e) => handleTicketTypeChange(index, 'quantity', parseInt(e.target.value) || 0)}
                                                    min="1"
                                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-gray-900 ${formErrors[`ticketQuantity_${index}`] ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                    placeholder="100"
                                                />
                                                {formErrors[`ticketQuantity_${index}`] && (
                                                    <p className="text-red-500 text-sm mt-1">{formErrors[`ticketQuantity_${index}`]}</p>
                                                )}
                                            </div>

                                            <div className="md:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Description
                                                </label>
                                                <textarea
                                                    value={ticket.description}
                                                    onChange={(e) => handleTicketTypeChange(index, 'description', e.target.value)}
                                                    rows={2}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-gray-900"
                                                    placeholder="Optional description for this ticket type"
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
                                                    <label className="ml-2 text-sm text-gray-700">
                                                        Active (available for purchase)
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
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Publishing Options</h2>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="isPublished"
                                    checked={formData.isPublished}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label className="ml-2 text-sm text-gray-700">
                                    Publish event immediately (make it visible to the public)
                                </label>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                                You can always publish or unpublish your event later from the dashboard
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                disabled={loading}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        Creating Event...
                                    </>
                                ) : (
                                    <>
                                        <Save className="h-4 w-4 mr-2" />
                                        Create Event
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