/* eslint-disable @typescript-eslint/no-unused-vars */
// app/organizer/events/[id]/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { eventsApi } from '@/lib/api';
import {
    Calendar,
    Users,
    DollarSign,
    MapPin,
    Clock,
    Tag,
    Globe,
    Edit,
    Trash2,
    Eye,
    EyeOff,
    ArrowLeft,
    Share2,
    Download,
    BarChart3,
    TrendingUp,
    AlertCircle
} from 'lucide-react';

// Use the same Event interface as your dashboard
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

const EventDetailPage = () => {
    const router = useRouter();
    const params = useParams();
    const eventId = params?.id as string;
    const { user, isOrganizer } = useAuth();

    const [event, setEvent] = useState<Event | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (user && isOrganizer && eventId) {
            fetchEventDetails();
        } else if (user && !isOrganizer) {
            router.push('/');
        }
    }, [user, isOrganizer, eventId, router]);

    const fetchEventDetails = async () => {
        try {
            setLoading(true);
            setError('');

            // First try to get the event from the events list
            const allEvents = await eventsApi.getMyEvents();
            const foundEvent = allEvents.find(e => e.eventId.toString() === eventId);

            if (foundEvent) {
                setEvent(foundEvent);
                console.log('Loaded event details:', foundEvent);
            } else {
                setError('Event not found or you do not have permission to view it.');
            }

        } catch (error) {
            console.error('Error fetching event details:', error);
            setError('Failed to load event details. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handlePublishToggle = async () => {
        if (!event) return;

        try {
            const action = event.isPublished ? 'unpublish' : 'publish';
            const response = await fetch(`http://localhost:5251/api/events/${event.eventId}/${action}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to ${action} event`);
            }

            setEvent(prev => prev ? { ...prev, isPublished: !prev.isPublished } : null);
            setSuccess(`Event ${action}ed successfully!`);

            // Clear success message after 3 seconds
            setTimeout(() => setSuccess(''), 3000);

        } catch (error) {
            console.error('Error toggling publish status:', error);
            setError(`Failed to ${event.isPublished ? 'unpublish' : 'publish'} event`);
        }
    };

    const handleDeleteEvent = async () => {
        if (!event) return;

        if (!confirm(`Are you sure you want to delete "${event.title}"? This action cannot be undone.`)) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:5251/api/events/${event.eventId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to delete event');
            }

            // Redirect to events list after successful deletion
            router.push('/organizer/events');

        } catch (error) {
            console.error('Error deleting event:', error);
            setError('Failed to delete event. Please try again.');
        }
    };

    // Helper function to check if event spans multiple days
    const isMultiDayEvent = (startDate: string | number | Date, endDate: string | number | Date) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        return start.toDateString() !== end.toDateString();
    };

    // Helper function to format date range
    const formatDateRange = (startDate: string | number | Date, endDate: string | number | Date) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        if (isMultiDayEvent(startDate, endDate)) {
            // Multi-day event
            const startMonth = start.getMonth();
            const endMonth = end.getMonth();
            const startYear = start.getFullYear();
            const endYear = end.getFullYear();

            if (startYear === endYear) {
                if (startMonth === endMonth) {
                    // Same month and year: "December 15-20, 2024"
                    return `${start.toLocaleDateString('en-US', { month: 'long' })} ${start.getDate()}-${end.getDate()}, ${startYear}`;
                } else {
                    // Different months, same year: "December 30 - January 5, 2024"
                    return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}, ${startYear}`;
                }
            } else {
                // Different years: "December 30, 2024 - January 5, 2025"
                return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
            }
        } else {
            // Single day event
            return start.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
    };

    // Helper function to format time range
    const formatTimeRange = (startDate: string | number | Date, endDate: string | number | Date) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const startTime = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const endTime = end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (isMultiDayEvent(startDate, endDate)) {
            // For multi-day events, show both start and end times
            return `${startTime} - ${endTime}`;
        } else {
            // Single day event with time range
            return `${startTime} - ${endTime}`;
        }
    };

    const formatDate = (dateString: string | number | Date) => {
        if (!dateString) return 'Date not set';

        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) return 'Invalid date';

            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (error) {
            return 'Date error';
        }
    };

    const formatTime = (dateString: string | number | Date) => {
        if (!dateString) return 'Time not set';

        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) return 'Invalid time';

            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } catch (error) {
            return 'Time error';
        }
    };

    const calculateCapacityPercentage = () => {
        if (!event || !event.availableTickets) return 0;
        const total = event.availableTickets + (event.ticketsSold || 0);
        return total > 0 ? ((event.ticketsSold || 0) / total) * 100 : 0;
    };

    const calculateEventDuration = () => {
        if (!event || !event.startDateTime || !event.endDateTime) return null;

        const start = new Date(event.startDateTime);
        const end = new Date(event.endDateTime);
        const diffInMs = end.getTime() - start.getTime();
        const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

        return diffInDays;
    };

    if (loading) {
        return (
            <div className="p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center py-12">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="mt-4 text-gray-600">Loading event details...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !event) {
        return (
            <div className="p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center py-12">
                        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h2>
                        <p className="text-gray-600 mb-6">{error || 'The event you are looking for does not exist.'}</p>
                        <button
                            onClick={() => router.push('/organizer/events')}
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Events
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const startDateTime = event.startDateTime || event.eventDate;
    const endDateTime = event.endDateTime || event.startDateTime || event.eventDate;
    const eventDuration = calculateEventDuration();

    return (
        <div className="p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => router.push('/organizer/events')}
                        className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Events
                    </button>

                    <div className="flex justify-between items-start">
                        <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                                <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${event.isPublished
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {event.isPublished ? 'Published' : 'Draft'}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${event.isOnline
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-purple-100 text-purple-800'
                                    }`}>
                                    {event.isOnline ? 'Online' : 'In-Person'}
                                </span>
                            </div>
                            <p className="text-gray-600">{event.description || event.shortDescription}</p>
                        </div>

                        <div className="flex items-center space-x-3">
                            <button
                                onClick={() => router.push(`/organizer/events/${event.eventId}/edit`)}
                                className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                            </button>
                            <button
                                onClick={handlePublishToggle}
                                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${event.isPublished
                                    ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                                    }`}
                            >
                                {event.isPublished ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                                {event.isPublished ? 'Unpublish' : 'Publish'}
                            </button>
                            <button
                                onClick={handleDeleteEvent}
                                className="flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                            >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                            </button>
                        </div>
                    </div>
                </div>

                {/* Success/Error Messages */}
                {success && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-600">{success}</p>
                    </div>
                )}

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600">{error}</p>
                        <button
                            onClick={() => setError('')}
                            className="text-red-500 text-sm underline mt-1"
                        >
                            Dismiss
                        </button>
                    </div>
                )}

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Event Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Event Image */}
                        {event.imageUrl && (
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                <img
                                    src={event.imageUrl}
                                    alt={event.title}
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                        )}

                        {/* Event Information */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Information</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Enhanced Date & Time Display */}
                                <div className="flex items-start space-x-3">
                                    <Calendar className="h-5 w-5 text-blue-600 mt-1" />
                                    <div>
                                        <p className="font-medium text-gray-900">Date & Time</p>
                                        <p className="text-gray-900 font-medium">
                                            {formatDateRange(startDateTime, endDateTime)}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            {formatTimeRange(startDateTime, endDateTime)}
                                        </p>
                                        {eventDuration && eventDuration > 1 && (
                                            <p className="text-blue-600 text-xs mt-1">
                                                {eventDuration} day event
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    {event.isOnline ? (
                                        <Globe className="h-5 w-5 text-blue-600 mt-1" />
                                    ) : (
                                        <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                                    )}
                                    <div>
                                        <p className="font-medium text-gray-900">Location</p>
                                        <p className="text-gray-600">
                                            {event.isOnline ? 'Virtual Event' : `${event.venueName}, ${event.venueCity}`}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Tag className="h-5 w-5 text-blue-600 mt-1" />
                                    <div>
                                        <p className="font-medium text-gray-900">Category</p>
                                        <p className="text-gray-600">{event.categoryName || 'Uncategorized'}</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Users className="h-5 w-5 text-blue-600 mt-1" />
                                    <div>
                                        <p className="font-medium text-gray-900">Organizer</p>
                                        <p className="text-gray-600">{event.organizerName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event Description */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
                            <div className="prose max-w-none">
                                <p className="text-gray-600 whitespace-pre-wrap">
                                    {event.description || event.shortDescription || 'No description provided.'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Statistics & Actions */}
                    <div className="space-y-6">
                        {/* Key Metrics */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Statistics</h2>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="text-2xl font-bold text-gray-900">{event.ticketsSold || 0}</p>
                                        <p className="text-sm text-gray-600">Tickets Sold</p>
                                    </div>
                                    <Users className="h-8 w-8 text-blue-600" />
                                </div>

                                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="text-2xl font-bold text-gray-900">
                                            {(event.availableTickets + (event.ticketsSold || 0)) || 'Unlimited'}
                                        </p>
                                        <p className="text-sm text-gray-600">Total Capacity</p>
                                    </div>
                                    <BarChart3 className="h-8 w-8 text-green-600" />
                                </div>

                                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="text-2xl font-bold text-green-600">
                                            {event.currency} {(event.revenue || 0).toLocaleString()}
                                        </p>
                                        <p className="text-sm text-gray-600">Total Revenue</p>
                                    </div>
                                    <DollarSign className="h-8 w-8 text-green-600" />
                                </div>

                                {/* Capacity Progress Bar */}
                                {event.availableTickets > 0 && (
                                    <div>
                                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                                            <span>Capacity</span>
                                            <span>{Math.round(calculateCapacityPercentage())}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                                style={{ width: `${calculateCapacityPercentage()}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>

                            <div className="space-y-3">
                                <button
                                    onClick={() => window.open(`/events/${event.eventId}`, '_blank')}
                                    className="w-full flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                                >
                                    <Eye className="h-4 w-4 mr-2" />
                                    View Public Page
                                </button>

                                <button
                                    onClick={() => {
                                        const url = `${window.location.origin}/events/${event.eventId}`;
                                        navigator.clipboard.writeText(url);
                                        setSuccess('Event URL copied to clipboard!');
                                        setTimeout(() => setSuccess(''), 3000);
                                    }}
                                    className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    <Share2 className="h-4 w-4 mr-2" />
                                    Copy Event Link
                                </button>

                                <button
                                    className="w-full flex items-center justify-center px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                                >
                                    <Download className="h-4 w-4 mr-2" />
                                    Export Attendees
                                </button>
                            </div>
                        </div>

                        {/* Event Status */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Status</h2>

                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Visibility</span>
                                    <span className={`font-medium ${event.isPublished ? 'text-green-600' : 'text-yellow-600'}`}>
                                        {event.isPublished ? 'Published' : 'Draft'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Event Type</span>
                                    <span className="font-medium text-gray-900">
                                        {event.isOnline ? 'Online' : 'In-Person'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Base Price</span>
                                    <span className="font-medium text-gray-900">
                                        {event.currency} {event.basePrice?.toLocaleString() || '0'}
                                    </span>
                                </div>
                                {eventDuration && eventDuration > 1 && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Duration</span>
                                        <span className="font-medium text-blue-600">
                                            {eventDuration} days
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailPage;