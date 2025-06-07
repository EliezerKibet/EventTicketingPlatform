/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import {
    Calendar, MapPin, Globe, Users, DollarSign, Plus, Trash2, Save, ArrowLeft,
    AlertCircle, Clock, Edit, Lock, AlertTriangle, Info, X
} from 'lucide-react';

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

interface TicketType {
    ticketTypeId?: number;
    name: string;
    price: number;
    quantityAvailable: number;
    quantitySold: number;
    description: string;
    isActive: boolean;
    isEventPublished?: boolean;
    eventStatus?: string;
    saleStartDate?: string;
    saleEndDate?: string;
    minQuantityPerOrder?: number;
    maxQuantityPerOrder?: number;
    sortOrder?: number;
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

interface CreateTicketTypeData {
    name: string;
    description: string;
    price: string;
    quantityAvailable: string;
    saleStartDate: string;
    saleEndDate: string;
    minQuantityPerOrder: string;
    maxQuantityPerOrder: string;
    sortOrder: string;
}

interface EditTicketTypeData extends CreateTicketTypeData {
    ticketTypeId: number;
}

const EditEventPage = () => {
    const router = useRouter();
    const params = useParams();
    const eventId = params?.id as string;
    const { user, isOrganizer } = useAuth();

    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);
    const [categories, setCategories] = useState<Category[]>([]);
    const [venues, setVenues] = useState<Venue[]>([]);
    const [ticketTypes, setTicketTypes] = useState<TicketType[]>([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Ticket editing state
    const [showCreateTicketForm, setShowCreateTicketForm] = useState(false);
    const [showEditTicketForm, setShowEditTicketForm] = useState(false);
    const [editingTicketType, setEditingTicketType] = useState<TicketType | null>(null);
    const [ticketFormLoading, setTicketFormLoading] = useState(false);

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

    const [createTicketData, setCreateTicketData] = useState<CreateTicketTypeData>({
        name: '',
        description: '',
        price: '',
        quantityAvailable: '',
        saleStartDate: '',
        saleEndDate: '',
        minQuantityPerOrder: '1',
        maxQuantityPerOrder: '10',
        sortOrder: '0'
    });

    const [editTicketData, setEditTicketData] = useState<EditTicketTypeData>({
        ticketTypeId: 0,
        name: '',
        description: '',
        price: '',
        quantityAvailable: '',
        saleStartDate: '',
        saleEndDate: '',
        minQuantityPerOrder: '1',
        maxQuantityPerOrder: '10',
        sortOrder: '0'
    });

    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [ticketFormErrors, setTicketFormErrors] = useState<Record<string, string>>({});

    // Load event data and initial data
    useEffect(() => {
        if (user && isOrganizer && eventId) {
            loadEventData();
            fetchInitialData();
        } else if (user && !isOrganizer) {
            router.push('/');
        }
    }, [user, isOrganizer, eventId, router]);

    const loadEventData = async () => {
        try {
            setInitialLoading(true);
            setError('');

            // Fetch event details using your API
            const response = await fetch(`http://localhost:5251/api/events/${eventId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (!response.ok) {
                if (response.status === 404) {
                    setError('Event not found');
                    return;
                }
                throw new Error('Failed to fetch event details');
            }

            const eventData = await response.json();
            console.log('Loaded event data:', eventData);

            // Helper function to format date for datetime-local input
            const formatDateForInput = (dateValue: any) => {
                if (!dateValue) return '';

                try {
                    const date = new Date(dateValue);
                    if (isNaN(date.getTime())) return '';

                    // Format to YYYY-MM-DDTHH:MM for datetime-local input
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const day = String(date.getDate()).padStart(2, '0');
                    const hours = String(date.getHours()).padStart(2, '0');
                    const minutes = String(date.getMinutes()).padStart(2, '0');

                    return `${year}-${month}-${day}T${hours}:${minutes}`;
                } catch (error) {
                    console.error('Error formatting date:', error);
                    return '';
                }
            };

            // Map API response to form data
            setFormData({
                title: eventData.title || '',
                description: eventData.description || '',
                eventDate: formatDateForInput(eventData.startDateTime || eventData.eventDate),
                endDate: formatDateForInput(eventData.endDateTime),
                location: eventData.location || '',
                isOnline: eventData.isOnline || false,
                maxCapacity: eventData.maxAttendees?.toString() || '',
                categoryId: eventData.categoryId?.toString() || '',
                venueId: eventData.venueId || null,
                imageUrl: eventData.imageUrl || '',
                registrationDeadline: formatDateForInput(eventData.registrationDeadline),
                isPublished: eventData.isPublished || false
            });

            // Fetch ticket types for this event
            await fetchTicketTypes();

        } catch (error) {
            console.error('Error loading event data:', error);
            setError('Failed to load event details');
        } finally {
            setInitialLoading(false);
        }
    };

    const fetchTicketTypes = async () => {
        try {
            const response = await fetch(`http://localhost:5251/api/tickets/event/${eventId}/ticket-types`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (response.ok) {
                const ticketTypesData = await response.json();
                console.log('Loaded ticket types:', ticketTypesData);

                // Map API response to local format with smart editing fields
                const mappedTicketTypes = ticketTypesData.map((tt: any) => ({
                    ticketTypeId: tt.ticketTypeId,
                    name: tt.name,
                    price: tt.price,
                    quantityAvailable: tt.quantityAvailable || tt.quantity,
                    quantitySold: tt.quantitySold || 0,
                    description: tt.description || '',
                    isActive: tt.isActive,
                    isEventPublished: tt.isEventPublished,
                    eventStatus: tt.eventStatus,
                    saleStartDate: tt.saleStartDate,
                    saleEndDate: tt.saleEndDate,
                    minQuantityPerOrder: tt.minQuantityPerOrder || 1,
                    maxQuantityPerOrder: tt.maxQuantityPerOrder || 10,
                    sortOrder: tt.sortOrder || 0
                }));

                setTicketTypes(mappedTicketTypes);
            }
        } catch (error) {
            console.error('Error fetching ticket types:', error);
            setTicketTypes([]);
        }
    };

    const fetchInitialData = async () => {
        try {
            // Fetch categories
            const categoriesResponse = await fetch('http://localhost:5251/api/categories', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (categoriesResponse.ok) {
                const categoriesData = await categoriesResponse.json();
                setCategories(categoriesData);
            }

            // Fetch venues
            const venuesResponse = await fetch('http://localhost:5251/api/venues', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (venuesResponse.ok) {
                const venuesData = await venuesResponse.json();
                setVenues(venuesData);
            }

        } catch (error) {
            console.error('Error fetching initial data:', error);
        }
    };

    // Smart editing logic for ticket types
    const canEditTicketType = (ticketType: TicketType): { canEdit: boolean; reason: string } => {
        // Check if event is published
        if (ticketType.isEventPublished) {
            return {
                canEdit: false,
                reason: 'Event is published. Ticket types cannot be modified to preserve existing sales data.'
            };
        }

        // Check if tickets have been sold
        const ticketsSold = ticketType.quantitySold || 0;
        if (ticketsSold > 0) {
            return {
                canEdit: false,
                reason: `${ticketsSold} ticket(s) already sold. Editing is locked to preserve purchase data.`
            };
        }

        // Check if event is in draft status
        if (ticketType.eventStatus && ticketType.eventStatus.toLowerCase() !== 'draft') {
            return {
                canEdit: false,
                reason: 'Event must be in DRAFT status to modify ticket types.'
            };
        }

        return {
            canEdit: true,
            reason: 'Ticket type can be safely modified.'
        };
    };

    const getEditingStatus = (ticketType: TicketType) => {
        const { canEdit, reason } = canEditTicketType(ticketType);
        const ticketsSold = ticketType.quantitySold || 0;

        if (!canEdit) {
            return {
                status: 'locked',
                icon: Lock,
                color: 'text-red-600',
                bgColor: 'bg-red-50',
                borderColor: 'border-red-200',
                reason: reason
            };
        }

        return {
            status: 'editable',
            icon: Edit,
            color: 'text-green-600',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200',
            reason: 'Safe to edit - no sales yet'
        };
    };

    const canCreateTicketTypes = (): { canCreate: boolean; reason: string } => {
        // Check if event is published
        if (formData.isPublished) {
            return {
                canCreate: false,
                reason: 'Event is published. Ticket types cannot be created to preserve sales data integrity.'
            };
        }

        // Check if any tickets have been sold
        const totalTicketsSold = ticketTypes.reduce((sum, tt) => sum + (tt.quantitySold || 0), 0);
        if (totalTicketsSold > 0) {
            return {
                canCreate: false,
                reason: `Cannot create new ticket types. ${totalTicketsSold} ticket(s) have already been sold.`
            };
        }

        return {
            canCreate: true,
            reason: 'Safe to create new ticket types.'
        };
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

    const handleCreateTicketInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCreateTicketData(prev => ({ ...prev, [name]: value }));

        if (ticketFormErrors[name]) {
            setTicketFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleEditTicketInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditTicketData(prev => ({ ...prev, [name]: value }));

        if (ticketFormErrors[name]) {
            setTicketFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateTicketForm = (data: CreateTicketTypeData) => {
        const errors: Record<string, string> = {};

        if (!data.name.trim()) errors.name = 'Ticket type name is required';
        if (!data.price || parseFloat(data.price) < 0) errors.price = 'Valid price is required';
        if (!data.quantityAvailable || parseInt(data.quantityAvailable) <= 0) errors.quantityAvailable = 'Quantity must be greater than 0';

        setTicketFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const openCreateTicketForm = () => {
        const { canCreate, reason } = canCreateTicketTypes();
        if (!canCreate) {
            setError(reason);
            return;
        }

        setCreateTicketData({
            name: '',
            description: '',
            price: '',
            quantityAvailable: '',
            saleStartDate: '',
            saleEndDate: '',
            minQuantityPerOrder: '1',
            maxQuantityPerOrder: '10',
            sortOrder: '0'
        });
        setShowCreateTicketForm(true);
    };

    const openEditTicketForm = (ticketType: TicketType) => {
        const { canEdit, reason } = canEditTicketType(ticketType);
        if (!canEdit) {
            setError(reason);
            return;
        }

        setEditingTicketType(ticketType);
        setEditTicketData({
            ticketTypeId: ticketType.ticketTypeId!,
            name: ticketType.name,
            description: ticketType.description,
            price: ticketType.price.toString(),
            quantityAvailable: ticketType.quantityAvailable.toString(),
            saleStartDate: ticketType.saleStartDate || '',
            saleEndDate: ticketType.saleEndDate || '',
            minQuantityPerOrder: (ticketType.minQuantityPerOrder || 1).toString(),
            maxQuantityPerOrder: (ticketType.maxQuantityPerOrder || 10).toString(),
            sortOrder: (ticketType.sortOrder || 0).toString()
        });
        setShowEditTicketForm(true);
    };

    const handleCreateTicketType = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateTicketForm(createTicketData)) return;

        setTicketFormLoading(true);
        setError('');

        try {
            const payload = {
                eventId: parseInt(eventId),
                name: createTicketData.name.trim(),
                description: createTicketData.description.trim() || null,
                price: parseFloat(createTicketData.price),
                quantityAvailable: parseInt(createTicketData.quantityAvailable),
                saleStartDate: createTicketData.saleStartDate || null,
                saleEndDate: createTicketData.saleEndDate || null,
                minQuantityPerOrder: parseInt(createTicketData.minQuantityPerOrder),
                maxQuantityPerOrder: parseInt(createTicketData.maxQuantityPerOrder),
                sortOrder: parseInt(createTicketData.sortOrder)
            };

            const response = await fetch('http://localhost:5251/api/tickets/ticket-types', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setSuccess('Ticket type created successfully!');
                await fetchTicketTypes();
                setShowCreateTicketForm(false);
                setTimeout(() => setSuccess(''), 3000);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Failed to create ticket type');
            }
        } catch (error) {
            setError('Network error. Please try again.');
        } finally {
            setTicketFormLoading(false);
        }
    };

    const handleUpdateTicketType = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateTicketForm(editTicketData)) return;

        setTicketFormLoading(true);
        setError('');

        try {
            const payload = {
                name: editTicketData.name.trim(),
                description: editTicketData.description.trim() || null,
                price: parseFloat(editTicketData.price),
                quantityAvailable: parseInt(editTicketData.quantityAvailable),
                saleStartDate: editTicketData.saleStartDate || null,
                saleEndDate: editTicketData.saleEndDate || null,
                minQuantityPerOrder: parseInt(editTicketData.minQuantityPerOrder),
                maxQuantityPerOrder: parseInt(editTicketData.maxQuantityPerOrder),
                sortOrder: parseInt(editTicketData.sortOrder)
            };

            const response = await fetch(`http://localhost:5251/api/tickets/ticket-types/${editTicketData.ticketTypeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setSuccess('Ticket type updated successfully!');
                await fetchTicketTypes();
                setShowEditTicketForm(false);
                setEditingTicketType(null);
                setTimeout(() => setSuccess(''), 3000);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Failed to update ticket type');
            }
        } catch (error) {
            setError('Network error. Please try again.');
        } finally {
            setTicketFormLoading(false);
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

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

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
            // Prepare event data for your API (matching UpdateEventDto exactly)
            const eventPayload = {
                title: formData.title,
                description: formData.description,
                shortDescription: null,
                startDateTime: formData.eventDate,
                endDateTime: formData.endDate || null,
                categoryId: parseInt(formData.categoryId),
                venueId: formData.isOnline ? null : parseInt(formData.venueId?.toString() || '0'),
                imageUrl: formData.imageUrl || null,
                bannerImageUrl: null,
                tags: null,
                maxAttendees: parseInt(formData.maxCapacity),
                basePrice: 0,
                currency: "USD",
                isOnline: formData.isOnline,
                onlineUrl: null
            };

            console.log('Updating event with corrected payload:', eventPayload);

            // Update event using your real API
            const response = await fetch(`http://localhost:5251/api/events/${eventId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                },
                body: JSON.stringify(eventPayload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('API Error:', errorData);
                throw new Error(errorData.message || 'Failed to update event');
            }

            const updatedEvent = await response.json();
            console.log('Event updated successfully:', updatedEvent);

            setSuccess('Event updated successfully!');

            // Redirect to event detail page after a short delay
            setTimeout(() => {
                router.push(`/organizer/events/${eventId}`);
            }, 2000);

        } catch (error) {
            console.error('Error updating event:', error);
            setError(error instanceof Error ? error.message : 'Failed to update event. Please try again.');
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

    if (initialLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading event details...</p>
                </div>
            </div>
        );
    }

    const eventDuration = getEventDuration();
    const { canCreate } = canCreateTicketTypes();
    const editableTickets = ticketTypes.filter(tt => canEditTicketType(tt).canEdit).length;
    const lockedTickets = ticketTypes.length - editableTickets;

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
                        Back to Events
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900">Edit Event</h1>
                    <p className="text-gray-600 mt-1">Update your event details</p>

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

                        {/* Enhanced Ticket Types Section */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold text-gray-900">Ticket Types</h2>
                                <button
                                    type="button"
                                    onClick={openCreateTicketForm}
                                    disabled={!canCreate}
                                    className={`flex items-center px-4 py-2 rounded-lg text-sm transition-colors ${canCreate
                                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                    title={canCreate ? 'Add new ticket type' : 'Cannot create ticket types - event is published or has sales'}
                                >
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Ticket Type
                                </button>
                            </div>

                            {/* Smart Editing Rules Notice */}
                            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <h3 className="text-sm font-medium text-blue-800 mb-2">💡 Smart Ticket Type Editing</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-blue-700">
                                    <div>
                                        <p className="font-medium mb-1">✅ When you CAN edit:</p>
                                        <ul className="space-y-1">
                                            <li>• Event is in DRAFT status</li>
                                            <li>• No tickets have been sold yet</li>
                                            <li>• Event is not published</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-medium mb-1">🔒 When editing is LOCKED:</p>
                                        <ul className="space-y-1">
                                            <li>• Event is published</li>
                                            <li>• Tickets have already been sold</li>
                                            <li>• Event status is not DRAFT</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Ticket Types Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <div className="text-2xl font-bold text-gray-900">{ticketTypes.length}</div>
                                    <div className="text-sm text-gray-600">Total Types</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-green-200">
                                    <div className="text-2xl font-bold text-green-600">{editableTickets}</div>
                                    <div className="text-sm text-gray-600">Editable</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-red-200">
                                    <div className="text-2xl font-bold text-red-600">{lockedTickets}</div>
                                    <div className="text-sm text-gray-600">Locked</div>
                                </div>
                            </div>

                            {ticketTypes.length === 0 ? (
                                <div className="text-center py-8 border border-gray-200 rounded-lg bg-gray-50">
                                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">No ticket types yet</h3>
                                    <p className="text-gray-600 mb-4">Add ticket types to start selling tickets for your event</p>
                                    {canCreate && (
                                        <button
                                            type="button"
                                            onClick={openCreateTicketForm}
                                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            <Plus className="h-4 w-4 mr-2" />
                                            Create First Ticket Type
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {ticketTypes.map((ticket, index) => {
                                        const editStatus = getEditingStatus(ticket);
                                        const { canEdit } = canEditTicketType(ticket);

                                        return (
                                            <div key={ticket.ticketTypeId || index} className="p-6 border border-gray-200 rounded-lg bg-white">
                                                <div className="flex justify-between items-start">
                                                    <div className="flex-1">
                                                        <div className="flex items-center space-x-3 mb-3">
                                                            <h3 className="text-lg font-medium text-gray-900">
                                                                {ticket.name || `Ticket Type ${index + 1}`}
                                                            </h3>
                                                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${editStatus.bgColor} ${editStatus.borderColor} border`}>
                                                                <div className="flex items-center">
                                                                    <editStatus.icon className={`h-3 w-3 ${editStatus.color} mr-1`} />
                                                                    <span className={editStatus.color}>
                                                                        {canEdit ? 'Editable' : 'Locked'}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {ticket.description && (
                                                            <p className="text-gray-600 mb-4">{ticket.description}</p>
                                                        )}

                                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                                                            <div>
                                                                <span className="font-medium text-gray-600">Price:</span>
                                                                <p className="text-gray-900 font-medium">RM {ticket.price}</p>
                                                            </div>
                                                            <div>
                                                                <span className="font-medium text-gray-600">Available:</span>
                                                                <p className="text-gray-900">{ticket.quantityAvailable}</p>
                                                            </div>
                                                            <div>
                                                                <span className="font-medium text-gray-600">Sold:</span>
                                                                <p className={`font-medium ${ticket.quantitySold > 0 ? 'text-blue-600' : 'text-gray-900'}`}>
                                                                    {ticket.quantitySold}
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <span className="font-medium text-gray-600">Status:</span>
                                                                <p className="text-gray-900">{ticket.isActive ? 'Active' : 'Inactive'}</p>
                                                            </div>
                                                        </div>

                                                        {/* Progress bar for sales */}
                                                        <div className="mt-4">
                                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                                <div
                                                                    className={`h-2 rounded-full ${ticket.quantitySold > 0 ? 'bg-blue-600' : 'bg-gray-400'}`}
                                                                    style={{
                                                                        width: `${(ticket.quantitySold / ticket.quantityAvailable) * 100}%`
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <p className="text-xs text-gray-500 mt-1">
                                                                {ticket.quantityAvailable - ticket.quantitySold} remaining
                                                            </p>
                                                        </div>

                                                        {/* Edit status explanation */}
                                                        <div className="mt-4 text-xs text-gray-600">
                                                            <strong>Edit Status:</strong> {editStatus.reason}
                                                        </div>
                                                    </div>

                                                    <div className="ml-4">
                                                        <button
                                                            type="button"
                                                            onClick={() => openEditTicketForm(ticket)}
                                                            disabled={!canEdit}
                                                            className={`p-2 rounded-lg transition-colors ${canEdit
                                                                    ? 'text-blue-600 hover:bg-blue-50 cursor-pointer'
                                                                    : 'text-gray-400 cursor-not-allowed bg-gray-50'
                                                                }`}
                                                            title={canEdit ? 'Edit ticket type' : editStatus.reason}
                                                        >
                                                            {canEdit ? <Edit className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Publishing Options */}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Publishing Options</h2>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                                <p className="text-sm text-yellow-700">
                                    <strong>Note:</strong> Publishing status is managed separately via the publish/unpublish buttons in your events list.
                                    This setting here is for reference only.
                                </p>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="isPublished"
                                    checked={formData.isPublished}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    disabled
                                />
                                <label className="ml-2 text-sm text-gray-500">
                                    Published (visible to the public) - {formData.isPublished ? 'Currently Published' : 'Currently Unpublished'}
                                </label>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                                Use the publish/unpublish buttons in the events list to change this status
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
                                        Updating Event...
                                    </>
                                ) : (
                                    <>
                                        <Save className="h-4 w-4 mr-2" />
                                        Update Event
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Create Ticket Type Modal */}
                {showCreateTicketForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-semibold text-gray-900">Create Ticket Type</h2>
                                    <button
                                        onClick={() => setShowCreateTicketForm(false)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>

                                <form onSubmit={handleCreateTicketType} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Ticket Type Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={createTicketData.name}
                                            onChange={handleCreateTicketInputChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${ticketFormErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="e.g., General Admission, VIP, Early Bird"
                                        />
                                        {ticketFormErrors.name && <p className="text-red-500 text-sm mt-1">{ticketFormErrors.name}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            name="description"
                                            value={createTicketData.description}
                                            onChange={handleCreateTicketInputChange}
                                            rows={3}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Optional description of what this ticket includes..."
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Price (RM) *
                                            </label>
                                            <input
                                                type="number"
                                                name="price"
                                                value={createTicketData.price}
                                                onChange={handleCreateTicketInputChange}
                                                min="0"
                                                step="0.01"
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${ticketFormErrors.price ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="0.00"
                                            />
                                            {ticketFormErrors.price && <p className="text-red-500 text-sm mt-1">{ticketFormErrors.price}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Quantity Available *
                                            </label>
                                            <input
                                                type="number"
                                                name="quantityAvailable"
                                                value={createTicketData.quantityAvailable}
                                                onChange={handleCreateTicketInputChange}
                                                min="1"
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${ticketFormErrors.quantityAvailable ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="Number of tickets available"
                                            />
                                            {ticketFormErrors.quantityAvailable && <p className="text-red-500 text-sm mt-1">{ticketFormErrors.quantityAvailable}</p>}
                                        </div>
                                    </div>

                                    <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                                        <button
                                            type="button"
                                            onClick={() => setShowCreateTicketForm(false)}
                                            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={ticketFormLoading}
                                            className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            {ticketFormLoading ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                    Creating...
                                                </>
                                            ) : (
                                                <>
                                                    <Save className="h-4 w-4 mr-2" />
                                                    Create Ticket Type
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                {/* Edit Ticket Type Modal */}
                {showEditTicketForm && editingTicketType && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-semibold text-gray-900">Edit Ticket Type</h2>
                                    <button
                                        onClick={() => {
                                            setShowEditTicketForm(false);
                                            setEditingTicketType(null);
                                        }}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>

                                <form onSubmit={handleUpdateTicketType} className="space-y-4">
                                    {/* Safe Edit Notice */}
                                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <h4 className="text-sm font-medium text-green-800 mb-2">✅ Safe to Edit</h4>
                                        <p className="text-xs text-green-700">
                                            This ticket type can be safely modified because no tickets have been sold yet
                                            and the event is still in draft status.
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Ticket Type Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={editTicketData.name}
                                            onChange={handleEditTicketInputChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${ticketFormErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="e.g., General Admission, VIP, Early Bird"
                                        />
                                        {ticketFormErrors.name && <p className="text-red-500 text-sm mt-1">{ticketFormErrors.name}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            name="description"
                                            value={editTicketData.description}
                                            onChange={handleEditTicketInputChange}
                                            rows={3}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Optional description of what this ticket includes..."
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Price (RM) *
                                            </label>
                                            <input
                                                type="number"
                                                name="price"
                                                value={editTicketData.price}
                                                onChange={handleEditTicketInputChange}
                                                min="0"
                                                step="0.01"
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${ticketFormErrors.price ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="0.00"
                                            />
                                            {ticketFormErrors.price && <p className="text-red-500 text-sm mt-1">{ticketFormErrors.price}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Quantity Available *
                                            </label>
                                            <input
                                                type="number"
                                                name="quantityAvailable"
                                                value={editTicketData.quantityAvailable}
                                                onChange={handleEditTicketInputChange}
                                                min="1"
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${ticketFormErrors.quantityAvailable ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="Number of tickets available"
                                            />
                                            {ticketFormErrors.quantityAvailable && <p className="text-red-500 text-sm mt-1">{ticketFormErrors.quantityAvailable}</p>}
                                        </div>
                                    </div>

                                    <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setShowEditTicketForm(false);
                                                setEditingTicketType(null);
                                            }}
                                            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={ticketFormLoading}
                                            className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            {ticketFormLoading ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                    Updating...
                                                </>
                                            ) : (
                                                <>
                                                    <Save className="h-4 w-4 mr-2" />
                                                    Update Ticket Type
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EditEventPage;