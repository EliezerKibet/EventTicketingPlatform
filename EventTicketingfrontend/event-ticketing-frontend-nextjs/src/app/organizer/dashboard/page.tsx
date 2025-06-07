/* eslint-disable @typescript-eslint/no-unused-vars */
// app/organizer/dashboard/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { eventsApi } from '@/lib/api';
import {
    Calendar,
    Users,
    DollarSign,
    TrendingUp,
    Plus,
    Eye,
    Edit,
    Trash2,
    MapPin,
    Clock,
    Tag,
    Globe,
    ArrowUp,
    ArrowDown
} from 'lucide-react';

// Define Event type locally to match your types file
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

interface Stats {
    totalEvents: number;
    publishedEvents: number;
    totalTicketsSold: number;
    totalRevenue: number;
    upcomingEvents: number;
}

const OrganizerDashboard: React.FC = () => {
    const { user, isOrganizer } = useAuth();
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState<Event[]>([]);
    const [stats, setStats] = useState<Stats>({
        totalEvents: 0,
        publishedEvents: 0,
        totalTicketsSold: 0,
        totalRevenue: 0,
        upcomingEvents: 0
    });
    const [error, setError] = useState('');

    useEffect(() => {
        if (user && isOrganizer) {
            fetchDashboardData();
        }
    }, [user, isOrganizer]);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);
            setError('');

            // Fetch organizer's events using your API
            const eventsResponse = await eventsApi.getMyEvents();
            setEvents(eventsResponse);

            // Calculate stats from events data
            const now = new Date();
            const totalEvents = eventsResponse.length;
            const publishedEvents = eventsResponse.filter(event => event.isPublished).length;
            const upcomingEvents = eventsResponse.filter(event =>
                new Date(event.startDateTime || event.eventDate) > now && event.isPublished
            ).length;

            // Use your existing Event properties
            const totalTicketsSold = eventsResponse.reduce((sum, event) => sum + (event.ticketsSold || 0), 0);
            const totalRevenue = eventsResponse.reduce((sum, event) => sum + (event.revenue || 0), 0);

            setStats({
                totalEvents,
                publishedEvents,
                totalTicketsSold,
                totalRevenue,
                upcomingEvents
            });

        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            setError('Failed to load dashboard data');
        } finally {
            setLoading(false);
        }
    };

    const handlePublishEvent = async (eventId: number, currentStatus: boolean) => {
        try {
            const endpoint = currentStatus ? 'unpublish' : 'publish';
            const response = await fetch(`http://localhost:5251/api/events/${eventId}/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                // Update local state
                setEvents(events.map(event =>
                    event.eventId === eventId
                        ? { ...event, isPublished: !currentStatus }
                        : event
                ));

                // Update stats
                setStats(prev => ({
                    ...prev,
                    publishedEvents: currentStatus ? prev.publishedEvents - 1 : prev.publishedEvents + 1
                }));
            } else {
                throw new Error('Failed to update event status');
            }
        } catch (error) {
            console.error('Error updating event status:', error);
            setError('Failed to update event status');
        }
    };

    const handleDeleteEvent = async (eventId: number) => {
        if (!confirm('Are you sure you want to delete this event? This action cannot be undone.')) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:5251/api/events/${eventId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (response.ok) {
                // Remove from local state
                const deletedEvent = events.find(e => e.eventId === eventId);
                setEvents(events.filter(event => event.eventId !== eventId));

                // Update stats
                setStats(prev => ({
                    ...prev,
                    totalEvents: prev.totalEvents - 1,
                    publishedEvents: deletedEvent?.isPublished ? prev.publishedEvents - 1 : prev.publishedEvents
                }));
            } else {
                throw new Error('Failed to delete event');
            }
        } catch (error) {
            console.error('Error deleting event:', error);
            setError('Failed to delete event');
        }
    };

    const StatCard: React.FC<{
        icon: React.ElementType;
        title: string;
        value: string | number;
        subtitle?: string;
        trend?: 'up' | 'down';
        trendValue?: string;
        color?: string;
    }> = ({ icon: Icon, title, value, subtitle, trend, trendValue, color = 'bg-blue-500' }) => (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className={`p-3 rounded-lg ${color}`}>
                        <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">{title}</p>
                        <p className="text-2xl font-bold text-gray-900">{value}</p>
                        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
                    </div>
                </div>
                {trend && (
                    <div className={`flex items-center ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {trend === 'up' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                        <span className="text-sm font-medium ml-1">{trendValue}</span>
                    </div>
                )}
            </div>
        </div>
    );

    

    // Updated EventCard component section - replace the date/time display part in your existing component

    // Updated EventCard component section - replace the date/time display part in your existing component

    const EventCard: React.FC<{ event: Event }> = ({ event }) => {
        // Helper function to normalize date to string
        const normalizeDate = (date: string | number | Date): string => {
            if (typeof date === 'string') return date;
            if (typeof date === 'number') return new Date(date).toISOString();
            return date.toISOString();
        };

        // Helper function to check if event spans multiple days
        const isMultiDayEvent = (startDate: string | number | Date, endDate: string | number | Date) => {
            if (!startDate || !endDate) return false;

            const start = new Date(startDate);
            const end = new Date(endDate);

            // Check if dates are valid
            if (isNaN(start.getTime()) || isNaN(end.getTime())) return false;

            // Compare just the date portion (ignore time)
            const startDateOnly = start.toDateString();
            const endDateOnly = end.toDateString();

            console.log('Comparing dates:', { startDateOnly, endDateOnly, isMultiDay: startDateOnly !== endDateOnly });

            return startDateOnly !== endDateOnly;
        };

        // Helper function to format date range
        const formatDateRange = (startDate: string | number | Date, endDate: string | number | Date) => {
            if (!startDate) return 'Date not set';

            const start = new Date(startDate);
            if (isNaN(start.getTime())) return 'Invalid date';

            // If no end date, show single date
            if (!endDate) {
                return start.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                });
            }

            const end = new Date(endDate);
            if (isNaN(end.getTime())) {
                // If end date is invalid, just show start date
                return start.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                });
            }

            // Check if it's the same day
            if (!isMultiDayEvent(startDate, endDate)) {
                // Same day event - just show the date once
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

            // Always show time range if we have both start and end times
            if (startTime !== endTime) {
                return `${startTime} - ${endTime}`;
            }

            return startTime;
        };

        // Calculate event duration in days
        const getEventDuration = () => {
            if (!startDateTime || !endDateTime || !isMultiDayEvent(startDateTime, endDateTime)) {
                return null;
            }

            const start = new Date(startDateTime);
            const end = new Date(endDateTime);

            if (isNaN(start.getTime()) || isNaN(end.getTime())) return null;

            const diffInMs = end.getTime() - start.getTime();
            const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

            return diffInDays > 0 ? diffInDays : null;
        };

        // Use the actual API field names based on your data
        const startDateTime = event.startDateTime || event.eventDate;
        const endDateTime = event.endDateTime || event.startDateTime || event.eventDate;

        // Debug logging to see what data we're working with
        console.log('Event data for date formatting:', {
            eventId: event.eventId,
            title: event.title,
            startDateTime: startDateTime,
            endDateTime: endDateTime,
            eventDate: event.eventDate,
            startDateObj: new Date(startDateTime),
            endDateObj: new Date(endDateTime),
            startDateString: new Date(startDateTime).toDateString(),
            endDateString: new Date(endDateTime).toDateString(),
            isSameDay: new Date(startDateTime).toDateString() === new Date(endDateTime).toDateString()
        });

        return (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${event.isPublished
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                            }`}>
                            {event.isPublished ? 'Published' : 'Draft'}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${event.isOnline
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                            }`}>
                            {event.isOnline ? 'Online' : 'In-Person'}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Date Range Display */}
                    <div className="flex items-start text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                        <div className="flex flex-col">
                            <span className="font-medium">
                                {formatDateRange(startDateTime, endDateTime)}
                            </span>
                            {(() => {
                                const duration = getEventDuration();
                                return duration && duration > 1 ? (
                                    <span className="text-xs text-blue-600 mt-1 font-medium">
                                        {duration} day event
                                    </span>
                                ) : null;
                            })()}
                        </div>
                    </div>

                    {/* Time Range Display */}
                    <div className="flex items-start text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                        <div className="flex flex-col">
                            <span>
                                {formatTimeRange(startDateTime, endDateTime)}
                            </span>
                            {isMultiDayEvent(startDateTime, endDateTime) && (
                                <span className="text-xs text-gray-500 mt-1">
                                    Multi-day schedule
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                        {event.isOnline ? <Globe className="h-4 w-4 mr-2 flex-shrink-0" /> : <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />}
                        <span className="truncate">{event.venueName || 'Virtual Event'}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <Tag className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{event.categoryName || 'Uncategorized'}</span>
                    </div>
                </div>

                {/* Event Stats */}
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg mb-4">
                    <div className="text-center">
                        <p className="text-lg font-bold text-gray-900">{event.ticketsSold || 0}</p>
                        <p className="text-xs text-gray-600">Tickets Sold</p>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-bold text-gray-900">{event.availableTickets + event.ticketsSold || 'Unlimited'}</p>
                        <p className="text-xs text-gray-600">Max Capacity</p>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-bold text-green-600">{event.currency} {(event.revenue || 0).toLocaleString()}</p>
                        <p className="text-xs text-gray-600">Revenue</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <button
                            onClick={() => window.open(`/events/${event.eventId}`, '_blank')}
                            className="flex items-center px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                        >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                        </button>
                        <button
                            onClick={() => window.location.href = `/organizer/events/${event.eventId}/edit`}
                            className="flex items-center px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => handlePublishEvent(event.eventId, event.isPublished)}
                            className={`px-4 py-2 text-sm rounded-lg font-medium transition-colors ${event.isPublished
                                ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                                : 'bg-green-100 text-green-700 hover:bg-green-200'
                                }`}
                        >
                            {event.isPublished ? 'Unpublish' : 'Publish'}
                        </button>
                        <button
                            onClick={() => handleDeleteEvent(event.eventId)}
                            className="flex items-center px-3 py-2 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                        >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    if (loading) {
        return (
            <div className="p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center py-12">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="mt-4 text-gray-600">Loading your dashboard...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                            <p className="text-gray-600 mt-1">Welcome back, {user?.firstName}! Here&apos;s what&apos;s happening with your events.</p>
                        </div>
                        <button
                            onClick={() => window.location.href = '/organizer/events/create'}
                            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Plus className="h-5 w-5 mr-2" />
                            Create Event
                        </button>
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600">{error}</p>
                    </div>
                )}

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard
                        icon={Calendar}
                        title="Total Events"
                        value={stats.totalEvents}
                        subtitle={`${stats.publishedEvents} published`}
                        color="bg-blue-500"
                    />
                    <StatCard
                        icon={Users}
                        title="Tickets Sold"
                        value={stats.totalTicketsSold.toLocaleString()}
                        color="bg-green-500"
                    />
                    <StatCard
                        icon={DollarSign}
                        title="Total Revenue"
                        value={`RM ${stats.totalRevenue.toLocaleString()}`}
                        color="bg-purple-500"
                    />
                    <StatCard
                        icon={TrendingUp}
                        title="Upcoming Events"
                        value={stats.upcomingEvents}
                        color="bg-orange-500"
                    />
                </div>

                {/* Recent Events */}
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-900">Your Events</h2>
                        {events.length > 6 && (
                            <button
                                onClick={() => window.location.href = '/organizer/events'}
                                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                                View all events →
                            </button>
                        )}
                    </div>

                    {events.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No events yet</h3>
                            <p className="text-gray-600 mb-6">Create your first event to get started with EventPro.</p>
                            <button
                                onClick={() => window.location.href = '/organizer/events/create'}
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                <Plus className="h-4 w-4 mr-2" />
                                Create Your First Event
                            </button>
                        </div>
                    ) : (
                        <div className="grid gap-6 lg:grid-cols-2">
                            {events.slice(0, 6).map((event) => (
                                <EventCard key={event.eventId} event={event} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrganizerDashboard;