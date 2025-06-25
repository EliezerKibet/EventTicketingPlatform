/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { eventsApi } from '@/lib/api';
import { useTheme, useThemeClasses } from '@/hooks/useTheme';
import { useI18nContext } from '@/components/providers/I18nProvider'; // FIXED: Use the same hook as settings
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
    DollarSign,
    AlertCircle
} from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5251';


interface Event {
    eventDate: string | number | Date;
    revenue: number;
    actualRevenue?: number;
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

const OrganizerEventsPage = () => {
    const router = useRouter();
    const { user, isOrganizer } = useAuth();
    const { isDark, isCompact } = useTheme();
    const themeClasses = useThemeClasses();

    const { t, formatCurrency } = useI18nContext();

    const [preferences, setPreferences] = useState<UserPreferences | null>(null);


    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterPublished, setFilterPublished] = useState<'all' | 'published' | 'unpublished'>('all');

    const [stats, setStats] = useState<Stats>({
        totalEvents: 0,
        publishedEvents: 0,
        totalTicketsSold: 0,
        totalRevenue: 0,
        upcomingEvents: 0
    });


    const fetchMyEvents = async () => {
        try {
            setLoading(true);
            setError('');

            const eventsData = await eventsApi.getMyEvents();

            // Get actual revenue for each event using the API
            let totalActualRevenue = 0;

            for (const event of eventsData) {
                try {
                    const response = await fetch(`${API_BASE_URL}/api/tickets/event/${event.eventId}/revenue`, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                            'Content-Type': 'application/json'
                        }
                    });

                    if (response.ok) {
                        const revenueData = await response.json();
                        // FIXED: Use grossRevenue instead of revenue
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

            setEvents(eventsData);

            // Use ACTUAL revenue instead of wrong calculation
            const now = new Date();
            const totalEvents = eventsData.length;
            const publishedEvents = eventsData.filter(event => event.isPublished).length;
            const upcomingEvents = eventsData.filter(event =>
                new Date(event.startDateTime || event.eventDate) > now && event.isPublished
            ).length;
            const totalTicketsSold = eventsData.reduce((sum, event) => sum + (event.ticketsSold || 0), 0);

            setStats({
                totalEvents,
                publishedEvents,
                totalTicketsSold,
                totalRevenue: totalActualRevenue, // Use actual revenue
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

            setEvents(prevEvents =>
                prevEvents.map(event =>
                    event.eventId === eventId
                        ? { ...event, isPublished: !isCurrentlyPublished }
                        : event
                )
            );

        } catch (error) {
            setError(t('failedToTogglePublish', { action: isCurrentlyPublished ? t('unpublish') : t('publish') }));
        }
    };

    const handleDeleteEvent = async (eventId: number, eventTitle: string) => {
        if (!confirm(t('confirmDeleteEvent', { title: eventTitle }))) {
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
                throw new Error(t('failedToDeleteEvent'));
            }

            setEvents(prevEvents => prevEvents.filter(event => event.eventId !== eventId));

        } catch (error) {
            setError(t('dashboardError'));
        }
    };

    const isMultiDayEvent = (startDate: string | number | Date, endDate: string | number | Date) => {
        if (!startDate || !endDate) return false;
        const start = new Date(startDate);
        const end = new Date(endDate);
        if (isNaN(start.getTime()) || isNaN(end.getTime())) return false;
        return start.toDateString() !== end.toDateString();
    };

    const formatDateRange = (startDate: string | number | Date, endDate: string | number | Date) => {
        if (!startDate) return t('dateNotSet');
        const start = new Date(startDate);
        if (isNaN(start.getTime())) return t('invalidDate');

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

        return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
    };

    const formatTimeRange = (startDate: string | number | Date, endDate: string | number | Date) => {
        if (!startDate) return t('timeNotSet');
        const start = new Date(startDate);
        if (isNaN(start.getTime())) return t('invalidTime');
        const startTime = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (!endDate) return startTime;
        const end = new Date(endDate);
        if (isNaN(end.getTime())) return startTime;
        const endTime = end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return startTime !== endTime ? `${startTime} - ${endTime}` : startTime;
    };

    const getEventDuration = (startDate: string | number | Date, endDate: string | number | Date) => {
        if (!startDate || !endDate || !isMultiDayEvent(startDate, endDate)) return null;
        const start = new Date(startDate);
        const end = new Date(endDate);
        if (isNaN(start.getTime()) || isNaN(end.getTime())) return null;
        const diffInMs = end.getTime() - start.getTime();
        const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
        return diffInDays > 0 ? diffInDays : null;
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
                'EUR': '\u20AC', // Euro symbol
                'GBP': '\u00A3', // Pound symbol
                'JPY': '\u00A5'  // Yen symbol
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
            'EUR': '\u20AC', // Euro symbol
            'GBP': '\u00A3', // Pound symbol
            'JPY': '\u00A5'  // Yen symbol
        };

        return symbols[currency] || '$';
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

    const filteredEvents = events.filter(event => {
        if (!searchTerm.trim()) {
            return filterPublished === 'all' ||
                (filterPublished === 'published' && event.isPublished) ||
                (filterPublished === 'unpublished' && !event.isPublished);
        }

        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
            event.title?.toLowerCase().includes(searchLower) ||
            event.description?.toLowerCase().includes(searchLower) ||
            event.shortDescription?.toLowerCase().includes(searchLower) ||
            event.venueName?.toLowerCase().includes(searchLower) ||
            event.venueCity?.toLowerCase().includes(searchLower) ||
            event.categoryName?.toLowerCase().includes(searchLower) ||
            (event.isOnline && 'online'.includes(searchLower)) ||
            (!event.isOnline && 'in-person'.includes(searchLower)) ||
            (event.isPublished && 'published'.includes(searchLower)) ||
            (!event.isPublished && 'draft'.includes(searchLower));

        const matchesFilter = filterPublished === 'all' ||
            (filterPublished === 'published' && event.isPublished) ||
            (filterPublished === 'unpublished' && !event.isPublished);

        return matchesSearch && matchesFilter;
    });

    useEffect(() => {
        if (user && isOrganizer) {
            fetchUserPreferences();
            fetchMyEvents();
        } else if (user && !isOrganizer) {
            router.push('/');
        }
    }, [user, isOrganizer, router]);

    if (!user || !isOrganizer) {
        return (
            <div className={`min-h-screen ${themeClasses.themeBg} flex items-center justify-center theme-transition`}>
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 accent-border mx-auto"></div>
                    <p className={`mt-4 ${themeClasses.themeMutedFg}`}>{t('loading')}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${themeClasses.themeBg} theme-transition`}>
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isCompact ? 'py-4' : 'py-8'}`}>
                {/* Header - Identical to Dashboard style */}
                <div className={isCompact ? 'mb-6' : 'mb-8'}>
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className={`${themeClasses.text3Xl} font-bold ${themeClasses.themeFg}`}>
                                {t('yourEvents')}
                            </h1>
                            <p className={`${themeClasses.themeMutedFg} mt-1`}>
                                {t('eventsSubtitle')}
                            </p>
                        </div>
                        <button
                            onClick={() => router.push('/organizer/events/create')}
                            className="btn-accent"
                        >
                            <Plus className="h-5 w-5 mr-2" />
                            {t('createEvent')}
                        </button>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className={`${isCompact ? 'mb-4' : 'mb-6'} flex flex-col sm:flex-row ${themeClasses.compactGap}`}>
                    <div className="flex-1 relative">
                        <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${themeClasses.themeMutedFg}`} />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder={t('searchEvents')}
                            className={`w-full pl-10 pr-4 ${themeClasses.compactInput} ${themeClasses.themeCard} ${themeClasses.themeFg} ${themeClasses.themeBorder} border rounded-lg focus:ring-2 accent-focus focus:border-transparent theme-transition`}
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Filter className={`h-5 w-5 ${themeClasses.themeMutedFg}`} />
                        <select
                            value={filterPublished}
                            onChange={(e) => setFilterPublished(e.target.value as 'all' | 'published' | 'unpublished')}
                            className={`${themeClasses.compactInput} ${themeClasses.themeCard} ${themeClasses.themeFg} ${themeClasses.themeBorder} border rounded-lg focus:ring-2 accent-focus focus:border-transparent theme-transition`}
                        >
                            <option value="all">{t('allEvents')}</option>
                            <option value="published">{t('published')}</option>
                            <option value="unpublished">{t('unpublished')}</option>
                        </select>
                    </div>
                </div>

                {/* Error Message - Identical to Dashboard */}
                {error && (
                    <div className={`${isCompact ? 'mb-4' : 'mb-6'} p-4 bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800 rounded-lg`}>
                        <div className="flex items-center">
                            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" />
                            <p className="text-red-600 dark:text-red-400">{error}</p>
                        </div>
                    </div>
                )}

                {/* Loading State - Identical to Dashboard */}
                {loading ? (
                    <div className="flex items-center justify-center py-12">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 accent-border mx-auto"></div>
                            <p className={`mt-4 ${themeClasses.themeMutedFg}`}>{t('loadingDashboard')}</p>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Enhanced Events Stats - Using same classes as Dashboard */}
                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ${themeClasses.compactGap} ${isCompact ? 'mb-6' : 'mb-8'}`}>
                            <div className={`${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} theme-transition`}>
                                <div className={`${themeClasses.text2Xl} font-bold ${themeClasses.themeFg}`}>{events.length}</div>
                                <div className={`${themeClasses.textSm} ${themeClasses.themeMutedFg}`}>
                                    {t('totalEvents')}
                                </div>
                            </div>
                            <div className={`${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} theme-transition`}>
                                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                                    {events.filter(e => e.isPublished).length}
                                </div>
                                <div className={`${themeClasses.textSm} ${themeClasses.themeMutedFg}`}>
                                    {t('published')}
                                </div>
                            </div>
                            <div className={`${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} theme-transition`}>
                                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                                    {events.filter(e => !e.isPublished).length}
                                </div>
                                <div className={`${themeClasses.textSm} ${themeClasses.themeMutedFg}`}>
                                    {t('draft')}
                                </div>
                            </div>
                            <div className={`${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} theme-transition`}>
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                    {events.reduce((sum, e) => sum + (e.ticketsSold || 0), 0).toLocaleString()}
                                </div>
                                <div className={`${themeClasses.textSm} ${themeClasses.themeMutedFg}`}>
                                    {t('ticketsSold')}
                                </div>
                            </div>
                            <div className={`${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} theme-transition`}>
                                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                    {convertAndFormatCurrency(stats.totalRevenue, 'USD', preferences, { region: 'en-US' })}
                                </div>
                                <div className={`${themeClasses.textSm} ${themeClasses.themeMutedFg}`}>
                                    {t('totalRevenue')} ({getCurrencySymbol(preferences?.currency || 'USD')})
                                </div>
                            </div>
                        </div>

                        {/* Events List */}
                        <div>
                            <div className={`flex justify-between items-center ${isCompact ? 'mb-4' : 'mb-6'}`}>
                                <h2 className={`${themeClasses.textXl} font-semibold ${themeClasses.themeFg}`}>{t('allEvents')}</h2>
                            </div>

                            {filteredEvents.length === 0 ? (
                                <div className={`text-center ${isCompact ? 'py-8' : 'py-12'} ${themeClasses.themeCard} rounded-lg border ${themeClasses.themeBorder}`}>
                                    <Calendar className={`h-12 w-12 ${themeClasses.themeMutedFg} mx-auto ${isCompact ? 'mb-3' : 'mb-4'}`} />
                                    <h3 className={`${themeClasses.textLg} font-medium ${themeClasses.themeFg} ${isCompact ? 'mb-1' : 'mb-2'}`}>
                                        {events.length === 0 ? t('noEventsYet') : t('noEventsMatchSearch')}
                                    </h3>
                                    <p className={`${themeClasses.themeMutedFg} ${isCompact ? 'mb-4' : 'mb-6'}`}>
                                        {events.length === 0
                                            ? t('createFirstEventPrompt')
                                            : t('adjustSearchCriteria')
                                        }
                                    </p>
                                    {events.length === 0 && (
                                        <button
                                            onClick={() => router.push('/organizer/events/create')}
                                            className="btn-accent"
                                        >
                                            <Plus className="h-4 w-4 mr-2" />
                                            {t('createYourFirstEvent')}
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
                                            <div key={event.eventId} className={`${themeClasses.themeCard} ${themeClasses.compactCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} hover:shadow-md theme-transition`}>
                                                <div className={`flex justify-between items-start ${isCompact ? 'mb-3' : 'mb-4'}`}>
                                                    <div className="flex-1">
                                                        <div className={`flex items-center ${themeClasses.compactGap} ${isCompact ? 'mb-2' : 'mb-3'}`}>
                                                            <button
                                                                onClick={() => router.push(`/organizer/events/${event.eventId}`)}
                                                                className={`${themeClasses.textLg} font-semibold ${themeClasses.themeFg} hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left`}
                                                            >
                                                                {event.title}
                                                            </button>
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
                                                            {duration && duration > 1 && (
                                                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                                                    {t('dayEvent', { count: duration })}
                                                                </span>
                                                            )}
                                                        </div>

                                                        <p className={`${themeClasses.themeMutedFg} ${themeClasses.textSm} line-clamp-2 ${isCompact ? 'mb-3' : 'mb-4'}`}>
                                                            {event.description || event.shortDescription || t('noDescriptionAvailable')}
                                                        </p>

                                                        <div className={`grid grid-cols-2 lg:grid-cols-4 ${themeClasses.compactGap} ${themeClasses.textSm} ${themeClasses.themeMutedFg} ${isCompact ? 'mb-3' : 'mb-4'}`}>
                                                            <div className="flex items-center">
                                                                <Calendar className="h-4 w-4 mr-1" />
                                                                <span className={`font-medium ${themeClasses.themeFg}`}>
                                                                    {formatEventDateTime(event.startDateTime, preferences, { region: 'en-US' }, t)}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                {event.isOnline ? <Globe className="h-4 w-4 mr-1" /> : <MapPin className="h-4 w-4 mr-1" />}
                                                                {event.isOnline ? t('virtualEvent') : `${event.venueName} - ${event.venueCity}`}
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Tag className="h-4 w-4 mr-1" />
                                                                {event.categoryName || t('uncategorized')}
                                                            </div>
                                                        </div>


                                                        {/* Event Statistics */}
                                                        <div className={`grid grid-cols-3 ${themeClasses.compactGap} ${themeClasses.compactCard} ${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-lg`}>
                                                            <div className="text-center">
                                                                <div className={`${themeClasses.textLg} font-bold ${themeClasses.themeFg}`}>
                                                                    {event.ticketsSold || 0}
                                                                </div>
                                                                <div className={`text-xs ${themeClasses.themeMutedFg}`}>
                                                                    {t('ticketsSold')}
                                                                </div>
                                                            </div>
                                                            <div className="text-center">
                                                                <div className={`${themeClasses.textLg} font-bold ${themeClasses.themeFg}`}>
                                                                    {(event.availableTickets + (event.ticketsSold || 0)) || t('unlimited')}
                                                                </div>
                                                                <div className={`text-xs ${themeClasses.themeMutedFg}`}>
                                                                    {t('maxCapacity')}
                                                                </div>
                                                            </div>
                                                            <div className="text-center">
                                                                <div className={`${themeClasses.textLg} font-bold text-green-600 dark:text-green-400`}>
                                                                    {convertAndFormatCurrency(
                                                                        event.actualRevenue || 0, 
                                                                        event.currency || 'USD',
                                                                        preferences,
                                                                        { region: 'en-US' }
                                                                    )}
                                                                </div>
                                                                <div className={`text-xs ${themeClasses.themeMutedFg}`}>
                                                                    {t('revenue')} ({getCurrencySymbol(preferences?.currency || 'USD')})
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Actions - Same style as Dashboard */}
                                                    <div className={`flex ${isCompact ? 'gap-1' : 'gap-2'} ${isCompact ? 'ml-3' : 'ml-4'}`}>
                                                        <button
                                                            onClick={() => router.push(`/organizer/events/${event.eventId}/edit`)}
                                                            className={`flex items-center ${themeClasses.compactButton} ${themeClasses.textSm} ${themeClasses.themeMuted} ${themeClasses.themeMutedFg} rounded-lg ${isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-200'} theme-transition`}
                                                        >
                                                            <Edit className="h-4 w-4 mr-1" />
                                                            {t('edit')}
                                                        </button>
                                                        <button
                                                            onClick={() => handlePublishToggle(event.eventId, event.isPublished)}
                                                            className={`${themeClasses.compactButton} ${themeClasses.textSm} rounded-lg font-medium theme-transition ${event.isPublished
                                                                ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:hover:bg-yellow-900/50'
                                                                : 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50'
                                                                }`}
                                                        >
                                                            {event.isPublished ? t('unpublish') : t('publish')}
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteEvent(event.eventId, event.title)}
                                                            className={`flex items-center ${themeClasses.compactButton} ${themeClasses.textSm} bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 theme-transition`}
                                                        >
                                                            <Trash2 className="h-4 w-4 mr-1" />
                                                            {t('delete')}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default OrganizerEventsPage;