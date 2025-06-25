/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// app/organizer/dashboard/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { eventsApi } from '@/lib/api';
import { useTheme, useThemeClasses } from '@/hooks/useTheme';
import { useI18nContext } from '@/components/providers/I18nProvider';
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
    ArrowDown,
    RefreshCw,
    AlertCircle
} from 'lucide-react';
import router from 'next/router';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5251';

interface Event {
    eventDate: string | number | Date;
    revenue: number;
    eventId: number;
    actualRevenue?: number; 
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

interface UserPreferences {
    emailNotifications?: boolean;
    sessionTimeout?: number;
    theme?: string;
    language?: string;
    dateFormat?: string;
    timeFormat?: string;
    defaultTimeZone?: string;
    accentColor?: string;
    fontSize?: string;
    compactMode?: boolean;
    currency?: 'USD' | 'EUR' | 'GBP' | 'JPY';
}

const OrganizerDashboard: React.FC = () => {
    const { user, isOrganizer } = useAuth();
    const { isDark, isCompact } = useTheme();
    const themeClasses = useThemeClasses();

    const { t, formatCurrency } = useI18nContext();

    const [preferences, setPreferences] = useState<UserPreferences | null>(null);

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
            fetchUserPreferences();
            fetchDashboardData();
        }
    }, [user, isOrganizer]);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);
            setError('');

            const eventsResponse = await eventsApi.getMyEvents();

            // Fetch enhanced revenue analytics for each event
            let totalActualRevenue = 0;

            for (const event of eventsResponse) {
                try {
                    const response = await fetch(`${API_BASE_URL}/api/tickets/event/${event.eventId}/revenue`, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                            'Content-Type': 'application/json'
                        }
                    });

                    if (response.ok) {
                        const revenueData = await response.json();
                        event.actualRevenue = revenueData.grossRevenue || 0;
                        totalActualRevenue += event.actualRevenue;
                    } else {
                        event.actualRevenue = 0;
                    }
                } catch (error) {
                    console.error(`Failed to fetch revenue for event ${event.eventId}`);
                    event.actualRevenue = 0;
                }
            }

            setEvents(eventsResponse);

            const now = new Date();
            const totalEvents = eventsResponse.length;
            const publishedEvents = eventsResponse.filter(event => event.isPublished).length;
            const upcomingEvents = eventsResponse.filter(event =>
                new Date(event.startDateTime || event.eventDate) > now && event.isPublished
            ).length;
            const totalTicketsSold = eventsResponse.reduce((sum, event) => sum + (event.ticketsSold || 0), 0);

            setStats({
                totalEvents,
                publishedEvents,
                totalTicketsSold,
                totalRevenue: totalActualRevenue, 
                upcomingEvents
            });

        } catch (error) {
            setError(t('dashboardError'));
        } finally {
            setLoading(false);
        }
    };

    const fetchUserPreferences = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/user/preferences`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const userPreferences = await response.json();
                setPreferences(userPreferences);
            }
        } catch (error) {
            setPreferences({
                currency: 'USD',
                dateFormat: 'MM/dd/yyyy',
                timeFormat: '12h',
                defaultTimeZone: 'UTC'
            });
        }
    };

    const handlePublishEvent = async (eventId: number, currentStatus: boolean) => {
        try {
            const endpoint = currentStatus ? 'unpublish' : 'publish';
            // Use environment variable instead of hardcoded URL
            const response = await fetch(`${API_BASE_URL}/api/events/${eventId}/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setEvents(events.map(event =>
                    event.eventId === eventId
                        ? { ...event, isPublished: !currentStatus }
                        : event
                ));

                setStats(prev => ({
                    ...prev,
                    publishedEvents: currentStatus ? prev.publishedEvents - 1 : prev.publishedEvents + 1
                }));
            } else {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.message || 'Failed to update event status');
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
            // Use environment variable instead of hardcoded URL
            const response = await fetch(`${API_BASE_URL}/api/events/${eventId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (response.ok) {
                const deletedEvent = events.find(e => e.eventId === eventId);
                setEvents(events.filter(event => event.eventId !== eventId));

                setStats(prev => ({
                    ...prev,
                    totalEvents: prev.totalEvents - 1,
                    publishedEvents: deletedEvent?.isPublished ? prev.publishedEvents - 1 : prev.publishedEvents
                }));
            } else {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.message || 'Failed to delete event');
            }
        } catch (error) {
            console.error('Error deleting event:', error);
            setError('Failed to delete event');
        }
    };

    const handleRefresh = async () => {
        await fetchDashboardData();
    };

    const formatEventDateTime = (dateTimeString: string, preferences: UserPreferences | null, currentLangData: any, t: any) => {
        const eventDate = new Date(dateTimeString);
        const userTimeZone = preferences?.defaultTimeZone || 'UTC';
        const dateFormat = preferences?.dateFormat || 'MM/dd/yyyy';
        const timeFormat = preferences?.timeFormat || '12h';

        const zonedDate = new Date(eventDate.toLocaleString("en-US", { timeZone: userTimeZone }));

        const year = zonedDate.getFullYear();
        const month = String(zonedDate.getMonth() + 1).padStart(2, '0');
        const day = String(zonedDate.getDate()).padStart(2, '0');

        const monthNames = [
            t('january'), t('february'), t('march'), t('april'),
            t('may'), t('june'), t('july'), t('august'),
            t('september'), t('october'), t('november'), t('december')
        ];
        const monthShort = monthNames[zonedDate.getMonth()];

        const weekdays = [
            t('sunday'), t('monday'), t('tuesday'), t('wednesday'),
            t('thursday'), t('friday'), t('saturday')
        ];
        const weekday = weekdays[zonedDate.getDay()];

        // Format date according to user preference - INDEPENDENT OF LOCALE
        let formattedDate: string;
        switch (dateFormat) {
            case 'dd/MM/yyyy':
                formattedDate = `${weekday}, ${day}/${month}/${year}`;
                break;
            case 'yyyy-MM-dd':
                formattedDate = `${weekday}, ${year}-${month}-${day}`;
                break;
            case 'MMM dd, yyyy':
                formattedDate = `${weekday}, ${monthShort} ${parseInt(day)}, ${year}`;
                break;
            case 'dd MMM yyyy':
                formattedDate = `${weekday}, ${parseInt(day)} ${monthShort} ${year}`;
                break;
            default: // MM/dd/yyyy
                formattedDate = `${weekday}, ${month}/${day}/${year}`;
        }

        // Format time - also independent of locale
        const hours24 = zonedDate.getHours();
        const minutes = String(zonedDate.getMinutes()).padStart(2, '0');

        let formattedTime: string;
        if (timeFormat === '24h') {
            formattedTime = `${String(hours24).padStart(2, '0')}:${minutes}`;
        } else {
            const hours12 = hours24 === 0 ? 12 : hours24 > 12 ? hours24 - 12 : hours24;
            const ampm = hours24 >= 12 ? 'PM' : 'AM';
            formattedTime = `${hours12}:${minutes} ${ampm}`;
        }

        // Add timezone abbreviation
        const timeZoneAbbr = getTimeZoneAbbreviation(userTimeZone);
        formattedTime += ` ${timeZoneAbbr}`;

        const result = `${formattedDate} ${t('at')} ${formattedTime}`;

        return result;
    };

    const getTimeZoneAbbreviation = (timeZone: string): string => {
        const abbreviations: { [key: string]: string } = {
            'UTC': 'UTC',
            'America/New_York': 'EST/EDT',
            'America/Chicago': 'CST/CDT',
            'America/Denver': 'MST/MDT',
            'America/Los_Angeles': 'PST/PDT',
            'Asia/Kuala_Lumpur': 'MYT',
            'Europe/London': 'GMT/BST',
            'Europe/Paris': 'CET/CEST',
            'Asia/Tokyo': 'JST',
            'Australia/Sydney': 'AEST/AEDT'
        };

        return abbreviations[timeZone] || timeZone.split('/').pop() || 'UTC';
    };

    const formatCurrencyWithUserPreference = (amount: number, preferences: UserPreferences | null, currentLangData: any) => {
        const currency = preferences?.currency ?? 'USD';
        const locale = currentLangData?.region ?? 'en-US';

        try {
            // Use Intl.NumberFormat for proper currency formatting
            const formatter = new Intl.NumberFormat(locale, {
                style: 'currency',
                currency: currency,
                minimumFractionDigits: currency === 'JPY' ? 0 : 2,
                maximumFractionDigits: currency === 'JPY' ? 0 : 2
            });

            return formatter.format(amount);
        } catch (error) {
            const symbols: { [key: string]: string } = {
                'USD': '$',
                'EUR': '€',
                'GBP': '£',
                'JPY': '¥'
            };

            const symbol = symbols[currency] || '$';

            if (currency === 'JPY') {
                const wholeAmount = Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                return `${symbol}${wholeAmount}`;
            }

            const formattedAmount = amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return `${symbol}${formattedAmount}`;
        }
    };

    const getCurrencySymbol = (currency: string) => {
        const symbols: { [key: string]: string } = {
            'USD': '$',
            'EUR': '€',
            'GBP': '£',
            'JPY': '¥'
        };

        return symbols[currency] || '$';
    };

    const convertAndFormatCurrency = (amount: number, fromCurrency: string, preferences: UserPreferences | null, currentLangData: any) => {
        const userCurrency = (preferences?.currency && ['USD', 'EUR', 'GBP', 'JPY'].includes(preferences.currency))
            ? preferences.currency
            : 'USD';


        if (fromCurrency === userCurrency) {
            return formatCurrencyWithUserPreference(amount, preferences, currentLangData);
        }

        const conversionRates: { [key: string]: { [key: string]: number } } = {
            'USD': {
                'USD': 1,
                'EUR': 0.92,  // 1 USD = 0.92 EUR
                'GBP': 0.79,  // 1 USD = 0.79 GBP
                'JPY': 149    // 1 USD = 149 JPY
            },
            'EUR': {
                'USD': 1.09,  // 1 EUR = 1.09 USD
                'EUR': 1,
                'GBP': 0.86,  // 1 EUR = 0.86 GBP
                'JPY': 162    // 1 EUR = 162 JPY
            },
            'GBP': {
                'USD': 1.27,  // 1 GBP = 1.27 USD
                'EUR': 1.16,  // 1 GBP = 1.16 EUR
                'GBP': 1,
                'JPY': 189    // 1 GBP = 189 JPY
            },
            'JPY': {
                'USD': 0.0067, // 1 JPY = 0.0067 USD
                'EUR': 0.0062, // 1 JPY = 0.0062 EUR
                'GBP': 0.0053, // 1 JPY = 0.0053 GBP
                'JPY': 1
            }
        };

        const rate = conversionRates[fromCurrency]?.[userCurrency] || 1;
        const convertedAmount = amount * rate;

        return formatCurrencyWithUserPreference(convertedAmount, preferences, currentLangData);
    };

    const StatCard: React.FC<{
        icon: React.ElementType;
        title: string;
        value: string | number;
        subtitle?: string;
        trend?: 'up' | 'down';
        trendValue?: string;
        color?: string;
    }> = ({ icon: Icon, title, value, subtitle, trend, trendValue, color = 'blue' }) => (
        <div className={`${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} theme-transition`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className={`p-3 rounded-lg ${color === 'blue' ? 'accent-bg' :
                        color === 'green' ? 'bg-green-500' :
                            color === 'purple' ? 'bg-purple-500' :
                                color === 'orange' ? 'bg-orange-500' : 'accent-bg'}`}>
                        <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className={`${isCompact ? 'ml-3' : 'ml-4'}`}>
                        <p className={`${themeClasses.textSm} font-medium ${themeClasses.themeMutedFg}`}>{title}</p>
                        <p className={`${themeClasses.text2Xl} font-bold ${themeClasses.themeFg}`}>{value}</p>
                        {subtitle && <p className={`${themeClasses.textSm} ${themeClasses.themeMutedFg}`}>{subtitle}</p>}
                    </div>
                </div>
                {trend && (
                    <div className={`flex items-center ${trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {trend === 'up' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                        <span className={`${themeClasses.textSm} font-medium ml-1`}>{trendValue}</span>
                    </div>
                )}
            </div>
        </div>
    );

    const EventCard: React.FC<{ event: Event }> = ({ event }) => {
        const formatDateRange = (startDate: string | number | Date, endDate: string | number | Date) => {
            if (!startDate) return 'Date not set';
            const start = new Date(startDate);
            if (isNaN(start.getTime())) return 'Invalid date';
            return start.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });
        };

        const startDateTime = event.startDateTime || event.eventDate;
        const endDateTime = event.endDateTime || event.startDateTime || event.eventDate;

        return (
            <div className={`${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} hover:shadow-md theme-transition`}>
                <div className={`flex justify-between items-start ${isCompact ? 'mb-3' : 'mb-4'}`}>
                    <div className="flex-1">
                        <h3 className={`${themeClasses.textLg} font-semibold ${themeClasses.themeFg} ${isCompact ? 'mb-1' : 'mb-2'}`}>{event.title}</h3>
                        <p className={`${themeClasses.themeMutedFg} ${themeClasses.textSm} line-clamp-2`}>{event.description}</p>

                        {/* Add event details */}
                        <div className={`mt-2 flex flex-wrap gap-2 ${themeClasses.textSm} ${themeClasses.themeMutedFg}`}>
                            {startDateTime && (
                                <div className="flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    <span>{formatEventDateTime(event.startDateTime, preferences, { region: 'en-US' }, t)}</span>
                                </div>
                            )}
                            {event.venueName && (
                                <div className="flex items-center">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    <span>{event.venueName}</span>
                                </div>
                            )}
                            {event.ticketsSold !== undefined && (
                                <div className="flex items-center">
                                    <Users className="h-3 w-3 mr-1" />
                                    <span>{event.ticketsSold} sold</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={`flex flex-col ${isCompact ? 'gap-1' : 'gap-2'} ${isCompact ? 'ml-3' : 'ml-4'}`}>
                        <span className={`px-3 py-1 rounded-full ${themeClasses.textSm} font-medium ${event.isPublished
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                            }`}>
                            {event.isPublished ? t('published') : t('draft')}
                        </span>
                        <span className={`px-3 py-1 rounded-full ${themeClasses.textSm} font-medium ${event.isOnline
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                            : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                            }`}>
                            {event.isOnline ? t('online') : t('inPerson')}
                        </span>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className={`flex ${isCompact ? 'gap-1' : 'gap-2'}`}>
                        <button
                            onClick={() => window.location.href = `/organizer/events/${event.eventId}/edit`}
                            className={`flex items-center ${themeClasses.compactButton} ${themeClasses.textSm} ${themeClasses.themeMuted} ${themeClasses.themeMutedFg} rounded-lg ${isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-200'} theme-transition`}
                        >
                            <Edit className="h-4 w-4 mr-1" />
                            {t('edit')}
                        </button>
                        <button
                            onClick={() => window.location.href = `/events/${event.eventId}`}
                            className={`flex items-center ${themeClasses.compactButton} ${themeClasses.textSm} ${themeClasses.themeMuted} ${themeClasses.themeMutedFg} rounded-lg ${isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-200'} theme-transition`}
                        >
                            <Eye className="h-4 w-4 mr-1" />
                            {t('view')}
                        </button>
                    </div>
                    <div className={`flex ${isCompact ? 'gap-1' : 'gap-2'}`}>
                        <button
                            onClick={() => handlePublishEvent(event.eventId, event.isPublished)}
                            className={`${themeClasses.compactButton} ${themeClasses.textSm} rounded-lg font-medium theme-transition ${event.isPublished
                                ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:hover:bg-yellow-900/50'
                                : 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50'
                                }`}
                        >
                            {event.isPublished ? t('unpublish') : t('publish')}
                        </button>
                        <button
                            onClick={() => handleDeleteEvent(event.eventId)}
                            className={`flex items-center ${themeClasses.compactButton} ${themeClasses.textSm} bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 theme-transition`}
                        >
                            <Trash2 className="h-4 w-4 mr-1" />
                            {t('delete')}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    if (loading) {
        return (
            <div className={`${isCompact ? 'p-4' : 'p-8'} min-h-screen ${themeClasses.themeBg}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center py-12">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 accent-border mx-auto"></div>
                            <p className={`mt-4 ${themeClasses.themeMutedFg}`}>{t('loadingDashboard')}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`${isCompact ? 'p-4' : 'p-6'} min-h-screen ${themeClasses.themeBg} theme-transition`}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className={isCompact ? 'mb-6' : 'mb-8'}>
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className={`${themeClasses.text3Xl} font-bold ${themeClasses.themeFg}`}>
                                {t('dashboard')}
                            </h1>
                            <p className={`${themeClasses.themeMutedFg} mt-1`}>
                                {t('welcomeBack', { name: user?.firstName })}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={handleRefresh}
                                className={`flex items-center ${themeClasses.compactButton} ${themeClasses.textSm} ${themeClasses.themeMuted} ${themeClasses.themeMutedFg} rounded-lg theme-transition`}
                                disabled={loading}
                            >
                                <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                                {t('refresh')}
                            </button>
                            <button
                                onClick={() => window.location.href = '/organizer/events/create'}
                                className="btn-accent"
                            >
                                <Plus className="h-5 w-5 mr-2" />
                                {t('createEvent')}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className={`${isCompact ? 'mb-4' : 'mb-6'} p-4 bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800 rounded-lg`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" />
                                <p className="text-red-600 dark:text-red-400">{error}</p>
                            </div>
                            <button
                                onClick={() => setError('')}
                                className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                )}

                {/* Stats Cards */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${themeClasses.compactGap} ${isCompact ? 'mb-6' : 'mb-8'}`}>
                    <StatCard
                        icon={Calendar}
                        title={t('totalEvents')}
                        value={stats.totalEvents}
                        subtitle={t('publishedCount', { count: stats.publishedEvents })}
                        color="blue"
                    />
                    <StatCard
                        icon={Users}
                        title={t('ticketsSold')}
                        value={stats.totalTicketsSold.toLocaleString()}
                        color="green"
                    />
                    <StatCard
                        icon={() => (
                            <div className="flex items-center justify-center w-6 h-6 text-white font-bold text-lg">
                                {getCurrencySymbol(preferences?.currency || 'USD')}
                            </div>
                        )}
                        title={t('totalRevenue')}
                        value={convertAndFormatCurrency(stats.totalRevenue, 'USD', preferences, { region: 'en-US' })}
                        color="purple"
                    />
                    <StatCard
                        icon={TrendingUp}
                        title={t('upcomingEvents')}
                        value={stats.upcomingEvents}
                        color="orange"
                    />
                </div>

                {/* Recent Events */}
                <div>
                    <div className={`flex justify-between items-center ${isCompact ? 'mb-4' : 'mb-6'}`}>
                        <h2 className={`${themeClasses.textXl} font-semibold ${themeClasses.themeFg}`}>{t('yourEvents')}</h2>
                        {events.length > 6 && (
                            <button
                                onClick={() => window.location.href = '/organizer/events'}
                                className="accent-text hover:accent-hover text-sm font-medium theme-transition"
                            >
                                {t('viewAllEvents')}
                            </button>
                        )}
                    </div>

                    {events.length === 0 ? (
                        <div className={`text-center ${isCompact ? 'py-8' : 'py-12'} ${themeClasses.themeCard} rounded-lg border ${themeClasses.themeBorder}`}>
                            <Calendar className={`h-12 w-12 ${themeClasses.themeMutedFg} mx-auto ${isCompact ? 'mb-3' : 'mb-4'}`} />
                            <h3 className={`${themeClasses.textLg} font-medium ${themeClasses.themeFg} ${isCompact ? 'mb-1' : 'mb-2'}`}>{t('noEventsYet')}</h3>
                            <p className={`${themeClasses.themeMutedFg} ${isCompact ? 'mb-4' : 'mb-6'}`}>{t('createFirstEventPrompt')}</p>
                            <button
                                onClick={() => window.location.href = '/organizer/events/create'}
                                className="btn-accent"
                            >
                                <Plus className="h-4 w-4 mr-2" />
                                {t('createYourFirstEvent')}
                            </button>
                        </div>
                    ) : (
                        <div className={`grid ${themeClasses.compactGap} lg:grid-cols-2`}>
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