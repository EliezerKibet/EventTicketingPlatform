/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { eventsApi } from '@/lib/api';
import { useTheme, useThemeClasses } from '@/hooks/useTheme';
import {
    Calendar,
    MapPin,
    Users,
    Plus,
    Edit,
    Trash2,
    Eye,
    EyeOff,
    Search,
    Filter,
    Globe,
    Clock,
    Tag,
    DollarSign
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

const OrganizerEventsPage = () => {
    const router = useRouter();
    const { user, isOrganizer } = useAuth();
    const themeClasses = useThemeClasses();

    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterPublished, setFilterPublished] = useState<'all' | 'published' | 'unpublished'>('all');

    // Load user's events
    useEffect(() => {
        if (user && isOrganizer) {
            fetchMyEvents();
        } else if (user && !isOrganizer) {
            router.push('/');
        }
    }, [user, isOrganizer, router]);

    const fetchMyEvents = async () => {
        try {
            setLoading(true);
            setError('');

            // Use the same API call as your dashboard
            const eventsData = await eventsApi.getMyEvents();
            console.log(`Successfully loaded ${eventsData.length} events with full data`);

            // Debug: Check what date fields are actually available
            if (eventsData.length > 0) {
                console.log('First event structure:', {
                    eventId: eventsData[0].eventId,
                    title: eventsData[0].title,
                    eventDate: eventsData[0].eventDate,
                    startDateTime: eventsData[0].startDateTime,
                    endDateTime: eventsData[0].endDateTime,
                    // Show all properties to see what's available
                    allProperties: Object.keys(eventsData[0])
                });
            }

            setEvents(eventsData);

        } catch (error) {
            console.error('Error fetching my events:', error);
            setError('Failed to load your events. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handlePublishToggle = async (eventId: number, isCurrentlyPublished: boolean) => {
        try {
            const action = isCurrentlyPublished ? 'unpublish' : 'publish';
            const response = await fetch(`http://localhost:5251/api/events/${eventId}/${action}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to ${action} event`);
            }

            // Update the event in the local state
            setEvents(prevEvents =>
                prevEvents.map(event =>
                    event.eventId === eventId
                        ? { ...event, isPublished: !isCurrentlyPublished }
                        : event
                )
            );

        } catch (error) {
            console.error('Error toggling publish status:', error);
            setError(`Failed to ${isCurrentlyPublished ? 'unpublish' : 'publish'} event`);
        }
    };

    const handleDeleteEvent = async (eventId: number, eventTitle: string) => {
        if (!confirm(`Are you sure you want to delete "${eventTitle}"? This action cannot be undone.`)) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:5251/api/events/${eventId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to delete event');
            }

            // Remove the event from local state
            setEvents(prevEvents => prevEvents.filter(event => event.eventId !== eventId));

        } catch (error) {
            console.error('Error deleting event:', error);
            setError('Failed to delete event. Please try again.');
        }
    };

    // Helper function to check if event spans multiple days
    const isMultiDayEvent = (startDate: string | number | Date, endDate: string | number | Date) => {
        if (!startDate || !endDate) return false;

        const start = new Date(startDate);
        const end = new Date(endDate);

        if (isNaN(start.getTime()) || isNaN(end.getTime())) return false;

        const startDateOnly = start.toDateString();
        const endDateOnly = end.toDateString();

        console.log('Event duration check:', {
            startDateOnly,
            endDateOnly,
            isMultiDay: startDateOnly !== endDateOnly
        });

        return startDateOnly !== endDateOnly;
    };

    // Helper function to format date range
    const formatDateRange = (startDate: string | number | Date, endDate: string | number | Date) => {
        if (!startDate) return 'Date not set';

        const start = new Date(startDate);
        if (isNaN(start.getTime())) return 'Invalid date';

        if (!endDate || !isMultiDayEvent(startDate, endDate)) {
            return start.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });
        }

        const end = new Date(endDate);
        if (isNaN(end.getTime())) {
            return start.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });
        }

        // Multi-day event formatting
        const startMonth = start.getMonth();
        const endMonth = end.getMonth();
        const startYear = start.getFullYear();
        const endYear = end.getFullYear();

        if (startYear === endYear) {
            if (startMonth === endMonth) {
                // Same month and year: "Jul 22-23, 2025"
                return `${start.toLocaleDateString('en-US', { month: 'short' })} ${start.getDate()}-${end.getDate()}, ${startYear}`;
            } else {
                // Different months, same year: "Jul 5 - Aug 7, 2025"
                return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, ${startYear}`;
            }
        } else {
            // Different years: "Dec 30, 2024 - Jan 5, 2025"
            return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
        }
    };

    // Helper function to format time range
    const formatTimeRange = (startDate: string | number | Date, endDate: string | number | Date) => {
        if (!startDate) return 'Time not set';

        const start = new Date(startDate);
        if (isNaN(start.getTime())) return 'Invalid time';

        const startTime = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (!endDate) {
            return startTime;
        }

        const end = new Date(endDate);
        if (isNaN(end.getTime())) {
            return startTime;
        }

        const endTime = end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (startTime !== endTime) {
            return `${startTime} - ${endTime}`;
        }

        return startTime;
    };

    // Calculate event duration in days
    const getEventDuration = (startDate: string | number | Date, endDate: string | number | Date) => {
        if (!startDate || !endDate || !isMultiDayEvent(startDate, endDate)) {
            return null;
        }

        const start = new Date(startDate);
        const end = new Date(endDate);

        if (isNaN(start.getTime()) || isNaN(end.getTime())) return null;

        const diffInMs = end.getTime() - start.getTime();
        const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

        return diffInDays > 0 ? diffInDays : null;
    };

    // Filter events based on search and publish status
    const filteredEvents = events.filter(event => {
        if (!searchTerm.trim()) {
            // If no search term, only apply publish filter
            return filterPublished === 'all' ||
                (filterPublished === 'published' && event.isPublished) ||
                (filterPublished === 'unpublished' && !event.isPublished);
        }

        // Case-insensitive search across multiple fields
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
            event.title?.toLowerCase().includes(searchLower) ||
            event.description?.toLowerCase().includes(searchLower) ||
            event.shortDescription?.toLowerCase().includes(searchLower) ||
            event.venueName?.toLowerCase().includes(searchLower) ||
            event.venueCity?.toLowerCase().includes(searchLower) ||
            event.categoryName?.toLowerCase().includes(searchLower) ||
            event.organizerName?.toLowerCase().includes(searchLower) ||
            // Search for "online" or "in-person"
            (event.isOnline && 'online'.includes(searchLower)) ||
            (!event.isOnline && ('in-person'.includes(searchLower) || 'physical'.includes(searchLower))) ||
            // Search in ticket and revenue info
            event.ticketsSold?.toString().includes(searchTerm) ||
            event.availableTickets?.toString().includes(searchTerm) ||
            event.currency?.toLowerCase().includes(searchLower) ||
            event.basePrice?.toString().includes(searchTerm) ||
            // Search in status
            (event.isPublished && ('published'.includes(searchLower) || 'live'.includes(searchLower))) ||
            (!event.isPublished && ('draft'.includes(searchLower) || 'unpublished'.includes(searchLower)));

        const matchesFilter = filterPublished === 'all' ||
            (filterPublished === 'published' && event.isPublished) ||
            (filterPublished === 'unpublished' && !event.isPublished);

        return matchesSearch && matchesFilter;
    });

    const formatDate = (dateString: string | number | Date) => {
        // Debug what we're trying to format
        console.log('Formatting date:', dateString, 'Type:', typeof dateString);

        if (!dateString) {
            console.log('No date provided');
            return 'Date not set';
        }

        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                console.log('Invalid date:', dateString);
                return 'Invalid date';
            }

            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (error) {
            console.log('Error formatting date:', error);
            return 'Date error';
        }
    };

    if (!user || !isOrganizer) {
        return (
            <div className={`min-h-screen ${themeClasses.background} flex items-center justify-center`}>
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className={`mt-4 ${themeClasses.textMuted}`}>Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${themeClasses.background}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className={`text-3xl font-bold ${themeClasses.text}`}>My Events</h1>
                            <p className={`${themeClasses.textMuted} mt-1`}>Manage your events and track their performance</p>
                        </div>
                        <button
                            onClick={() => router.push('/organizer/events/create')}
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Plus className="h-5 w-5 mr-2" />
                            Create Event
                        </button>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="mb-6 flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${themeClasses.textMuted}`} />
                        <input
                            type="text"
                            placeholder="Search by title, venue, category, date, status, revenue..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`w-full pl-10 pr-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text}`}
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Filter className={`h-5 w-5 ${themeClasses.textMuted}`} />
                        <select
                            value={filterPublished}
                            onChange={(e) => setFilterPublished(e.target.value as 'all' | 'published' | 'unpublished')}
                            className={`px-3 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text}`}
                        >
                            <option value="all">All Events</option>
                            <option value="published">Published</option>
                            <option value="unpublished">Unpublished</option>
                        </select>
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
                        <button
                            onClick={() => setError('')}
                            className="text-red-500 dark:text-red-400 text-xs underline mt-1"
                        >
                            Dismiss
                        </button>
                    </div>
                )}

                {/* Loading State */}
                {loading ? (
                    <div className="flex items-center justify-center py-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <p className={`ml-3 ${themeClasses.textMuted}`}>Loading your events...</p>
                    </div>
                ) : (
                    <>
                        {/* Enhanced Events Stats */}
                        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                            <div className={`${themeClasses.card} p-4 rounded-lg ${themeClasses.border} border`}>
                                <div className={`text-2xl font-bold ${themeClasses.text}`}>{events.length}</div>
                                <div className={`text-sm ${themeClasses.textMuted}`}>Total Events</div>
                            </div>
                            <div className={`${themeClasses.card} p-4 rounded-lg ${themeClasses.border} border`}>
                                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                                    {events.filter(e => e.isPublished).length}
                                </div>
                                <div className={`text-sm ${themeClasses.textMuted}`}>Published</div>
                            </div>
                            <div className={`${themeClasses.card} p-4 rounded-lg ${themeClasses.border} border`}>
                                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                                    {events.filter(e => !e.isPublished).length}
                                </div>
                                <div className={`text-sm ${themeClasses.textMuted}`}>Unpublished</div>
                            </div>
                            <div className={`${themeClasses.card} p-4 rounded-lg ${themeClasses.border} border`}>
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    {events.reduce((sum, e) => sum + (e.ticketsSold || 0), 0).toLocaleString()}
                                </div>
                                <div className={`text-sm ${themeClasses.textMuted}`}>Tickets Sold</div>
                            </div>
                            <div className={`${themeClasses.card} p-4 rounded-lg ${themeClasses.border} border`}>
                                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                    {events.length > 0 ? events[0].currency : 'RM'} {events.reduce((sum, e) => sum + (e.revenue || 0), 0).toLocaleString()}
                                </div>
                                <div className={`text-sm ${themeClasses.textMuted}`}>Total Revenue</div>
                            </div>
                        </div>

                        {/* Events List */}
                        {filteredEvents.length === 0 ? (
                            <div className="text-center py-12">
                                <Calendar className={`h-12 w-12 ${themeClasses.textMuted} mx-auto mb-4`} />
                                <h3 className={`text-lg font-medium ${themeClasses.text} mb-2`}>
                                    {events.length === 0 ? 'No events created yet' : 'No events match your search'}
                                </h3>
                                <p className={`${themeClasses.textMuted} mb-4`}>
                                    {events.length === 0
                                        ? 'Create your first event to get started with EventHub'
                                        : 'Try adjusting your search or filter criteria'
                                    }
                                </p>
                                {events.length === 0 && (
                                    <button
                                        onClick={() => router.push('/organizer/events/create')}
                                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        <Plus className="h-5 w-5 mr-2" />
                                        Create Your First Event
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {filteredEvents.map((event) => {
                                    const startDateTime = event.startDateTime || event.eventDate;
                                    const endDateTime = event.endDateTime || event.startDateTime || event.eventDate;
                                    const duration = getEventDuration(startDateTime, endDateTime);

                                    return (
                                        <div key={event.eventId} className={`${themeClasses.card} ${themeClasses.border} border rounded-lg shadow-sm hover:shadow-md transition-shadow`}>
                                            <div className="p-6">
                                                <div className="flex justify-between items-start">
                                                    <div className="flex-1">
                                                        <div className="flex items-center space-x-3 mb-2">
                                                            <button
                                                                onClick={() => router.push(`/organizer/events/${event.eventId}`)}
                                                                className={`text-xl font-semibold ${themeClasses.text} hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left`}
                                                            >
                                                                {event.title}
                                                            </button>
                                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${event.isPublished
                                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                                                : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                                                                }`}>
                                                                {event.isPublished ? 'Published' : 'Draft'}
                                                            </span>
                                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${event.isOnline
                                                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                                                                : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                                                                }`}>
                                                                {event.isOnline ? 'Online' : 'In-Person'}
                                                            </span>
                                                            {/* Multi-day badge */}
                                                            {duration && duration > 1 && (
                                                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                                                    {duration} Days
                                                                </span>
                                                            )}
                                                        </div>

                                                        <p className={`${themeClasses.textMuted} mb-4 line-clamp-2`}>
                                                            {event.description || event.shortDescription || 'No description available'}
                                                        </p>

                                                        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm ${themeClasses.textMuted} mb-4`}>
                                                            {/* Enhanced Date Display */}
                                                            <div className="flex items-start">
                                                                <Calendar className="h-4 w-4 mr-1 flex-shrink-0 mt-0.5" />
                                                                <div className="flex flex-col">
                                                                    <span className={`font-medium ${themeClasses.text}`}>
                                                                        {formatDateRange(startDateTime, endDateTime)}
                                                                    </span>
                                                                    {duration && duration > 1 && (
                                                                        <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                                                                            {duration} day event
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            {/* Enhanced Time Display */}
                                                            <div className="flex items-start">
                                                                <Clock className="h-4 w-4 mr-1 flex-shrink-0 mt-0.5" />
                                                                <div className="flex flex-col">
                                                                    <span>{formatTimeRange(startDateTime, endDateTime)}</span>
                                                                    {isMultiDayEvent(startDateTime, endDateTime) && (
                                                                        <span className={`text-xs ${themeClasses.textMuted}`}>
                                                                            Multi-day schedule
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            <div className="flex items-center">
                                                                {event.isOnline ? <Globe className="h-4 w-4 mr-1" /> : <MapPin className="h-4 w-4 mr-1" />}
                                                                {event.isOnline ? 'Virtual Event' : `${event.venueName} - ${event.venueCity}`}
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Tag className="h-4 w-4 mr-1" />
                                                                {event.categoryName || 'Uncategorized'}
                                                            </div>
                                                        </div>

                                                        {/* Event Statistics */}
                                                        <div className={`grid grid-cols-3 gap-4 p-3 ${themeClasses.isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-lg mb-4`}>
                                                            <div className="text-center">
                                                                <div className={`text-lg font-bold ${themeClasses.text}`}>{event.ticketsSold || 0}</div>
                                                                <div className={`text-xs ${themeClasses.textMuted}`}>Tickets Sold</div>
                                                            </div>
                                                            <div className="text-center">
                                                                <div className={`text-lg font-bold ${themeClasses.text}`}>{(event.availableTickets + (event.ticketsSold || 0)) || 'Unlimited'}</div>
                                                                <div className={`text-xs ${themeClasses.textMuted}`}>Total Capacity</div>
                                                            </div>
                                                            <div className="text-center">
                                                                <div className="text-lg font-bold text-green-600 dark:text-green-400">{event.currency} {(event.revenue || 0).toLocaleString()}</div>
                                                                <div className={`text-xs ${themeClasses.textMuted}`}>Revenue</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Actions */}
                                                    <div className="flex items-center space-x-2 ml-4">
                                                        <button
                                                            onClick={() => router.push(`/organizer/events/${event.eventId}`)}
                                                            className={`p-2 ${themeClasses.textMuted} ${themeClasses.hover} rounded-lg transition-colors`}
                                                            title="View event details"
                                                        >
                                                            <Eye className="h-5 w-5" />
                                                        </button>

                                                        <button
                                                            onClick={() => handlePublishToggle(event.eventId, event.isPublished)}
                                                            className={`p-2 rounded-lg transition-colors ${event.isPublished
                                                                ? 'text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20'
                                                                : 'text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20'
                                                                }`}
                                                            title={event.isPublished ? 'Unpublish event' : 'Publish event'}
                                                        >
                                                            {event.isPublished ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                                        </button>

                                                        <button
                                                            onClick={() => router.push(`/organizer/events/${event.eventId}/edit`)}
                                                            className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                                                            title="Edit event"
                                                        >
                                                            <Edit className="h-5 w-5" />
                                                        </button>

                                                        <button
                                                            onClick={() => handleDeleteEvent(event.eventId, event.title)}
                                                            className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                                            title="Delete event"
                                                        >
                                                            <Trash2 className="h-5 w-5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default OrganizerEventsPage;