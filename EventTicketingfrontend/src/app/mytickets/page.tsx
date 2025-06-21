/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Calendar,
    MapPin,
    Clock,
    Ticket,
    Download,
    Search,
    Filter,
    CheckCircle,
    XCircle,
    AlertCircle,
    QrCode,
    User,
    Mail,
    Phone,
    ExternalLink,
    ChevronDown,
    ChevronUp,
    ArrowLeft
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { userApi } from '@/lib/api';

interface TicketData {
    ticketId: number;
    eventId: number;
    eventTitle: string;
    ticketTypeId: number;
    ticketTypeName: string;
    ticketNumber: string;
    qrCode: string;
    pricePaid: number;
    status: string;
    purchaseDate: string;
    checkInDate?: string;
    attendeeFirstName: string;
    attendeeLastName: string;
    attendeeEmail: string;
    eventStartDateTime: string;
    venueName: string;
    venueAddress: string;
}

interface UserPreferences {
    emailNotifications: boolean;
    sessionTimeout: number;
    theme: string;
    language: string;
    dateFormat: string;
    timeFormat: string;
    defaultTimeZone?: string;
    accentColor?: string;
    fontSize?: string;
    compactMode?: boolean;
}

const getThemeClasses = (preferences: UserPreferences | null) => {
    const isDarkMode = preferences?.theme === 'dark' ||
        (preferences?.theme === 'auto' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const accentColor = preferences?.accentColor || 'blue';
    const fontSize = preferences?.fontSize || 'medium';
    const compactMode = preferences?.compactMode || false;

    // Accent color configurations
    const accentColors = {
        blue: {
            primary: 'bg-blue-600',
            hover: 'hover:bg-blue-700',
            light: isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50',
            text: isDarkMode ? 'text-blue-400' : 'text-blue-600',
            border: isDarkMode ? 'border-blue-700' : 'border-blue-200',
            ring: 'focus:ring-blue-500 focus:border-blue-500'
        },
        purple: {
            primary: 'bg-purple-600',
            hover: 'hover:bg-purple-700',
            light: isDarkMode ? 'bg-purple-900/20' : 'bg-purple-50',
            text: isDarkMode ? 'text-purple-400' : 'text-purple-600',
            border: isDarkMode ? 'border-purple-700' : 'border-purple-200',
            ring: 'focus:ring-purple-500 focus:border-purple-500'
        },
        green: {
            primary: 'bg-green-600',
            hover: 'hover:bg-green-700',
            light: isDarkMode ? 'bg-green-900/20' : 'bg-green-50',
            text: isDarkMode ? 'text-green-400' : 'text-green-600',
            border: isDarkMode ? 'border-green-700' : 'border-green-200',
            ring: 'focus:ring-green-500 focus:border-green-500'
        },
        orange: {
            primary: 'bg-orange-600',
            hover: 'hover:bg-orange-700',
            light: isDarkMode ? 'bg-orange-900/20' : 'bg-orange-50',
            text: isDarkMode ? 'text-orange-400' : 'text-orange-600',
            border: isDarkMode ? 'border-orange-700' : 'border-orange-200',
            ring: 'focus:ring-orange-500 focus:border-orange-500'
        },
        pink: {
            primary: 'bg-pink-600',
            hover: 'hover:bg-pink-700',
            light: isDarkMode ? 'bg-pink-900/20' : 'bg-pink-50',
            text: isDarkMode ? 'text-pink-400' : 'text-pink-600',
            border: isDarkMode ? 'border-pink-700' : 'border-pink-200',
            ring: 'focus:ring-pink-500 focus:border-pink-500'
        }
    };

    const currentAccent = accentColors[accentColor as keyof typeof accentColors] || accentColors.blue;

    // Font size configurations - Updated with professional typography classes
    const fontSizes = {
        small: {
            text: 'text-body-small',
            heading: 'text-heading-3',
            title: 'text-heading-1',
            subtitle: 'text-caption',
            button: 'text-button',
            label: 'form-label',
            display: 'text-display'
        },
        medium: {
            text: 'text-body',
            heading: 'text-heading-2',
            title: 'text-display',
            subtitle: 'text-body-small',
            button: 'text-button',
            label: 'form-label',
            display: 'text-display-large'
        },
        large: {
            text: 'text-body-large',
            heading: 'text-heading-1',
            title: 'text-display-large',
            subtitle: 'text-body',
            button: 'text-button',
            label: 'form-label',
            display: 'text-display-large'
        }
    };

    const currentFont = fontSizes[fontSize as keyof typeof fontSizes] || fontSizes.medium;

    return {
        // Basic colors
        background: isDarkMode ? 'bg-gray-900' : 'bg-white',
        backgroundCard: isDarkMode ? 'bg-gray-800/90' : 'bg-white/90',
        backgroundInput: isDarkMode ? 'bg-gray-700/90' : 'bg-white/90',
        backgroundOverlay: isDarkMode ? 'bg-black/40' : 'bg-black/20',

        // Text colors
        text: isDarkMode ? 'text-gray-100' : 'text-gray-900',
        textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
        textMuted: isDarkMode ? 'text-gray-400' : 'text-gray-500',

        // Borders
        border: isDarkMode ? 'border-gray-600' : 'border-gray-300',
        borderCard: isDarkMode ? 'border-gray-600/30' : 'border-white/30',

        // Effects
        shadow: isDarkMode ? 'shadow-2xl shadow-black/50' : 'shadow-2xl',
        hover: isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-white/50',

        // Typography & Layout
        fontSize: currentFont,

        // Padding/spacing based on compact mode
        padding: compactMode ? 'p-3' : 'p-6',
        paddingSmall: compactMode ? 'p-2' : 'p-4',
        paddingLarge: compactMode ? 'p-4' : 'p-8',

        // Margins
        margin: compactMode ? 'mb-3' : 'mb-6',
        marginSmall: compactMode ? 'mb-2' : 'mb-4',
        marginLarge: compactMode ? 'mb-4' : 'mb-8',

        // Spacing between elements
        spacing: compactMode ? 'space-y-2' : 'space-y-4',
        gap: compactMode ? 'gap-2' : 'gap-4',

        // Button sizes
        buttonPadding: compactMode ? 'px-4 py-2' : 'px-6 py-3',
        buttonPaddingSmall: compactMode ? 'px-2 py-1' : 'px-3 py-2',

        // Input heights
        inputHeight: compactMode ? 'h-9' : 'h-11',

        // Icon sizes
        iconSize: compactMode ? 'h-4 w-4' : 'h-5 w-5',
        iconSizeSmall: compactMode ? 'h-3 w-3' : 'h-4 w-4',
        iconSizeLarge: compactMode ? 'h-6 w-6' : 'h-8 w-8',

        // Accent colors
        accent: currentAccent.primary,
        accentHover: currentAccent.hover,
        accentText: currentAccent.text,
        accentLight: currentAccent.light,
        accentBorder: currentAccent.border,
        accentRing: currentAccent.ring,

        // State info
        isDarkMode,
        accentColor,
        fontSizeValue: fontSize,
        compactMode
    };
};

export default function MyTicketsPage() {
    const router = useRouter();
    const [tickets, setTickets] = useState<TicketData[]>([]);
    const [filteredTickets, setFilteredTickets] = useState<TicketData[]>([]);
    const [preferences, setPreferences] = useState<UserPreferences | null>(null);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [dateFilter, setDateFilter] = useState('all');
    const [expandedTicket, setExpandedTicket] = useState<number | null>(null);

    const themeClasses = getThemeClasses(preferences);

    useEffect(() => {
        Promise.all([fetchTickets(), loadUserPreferences()]);
    }, []);

    useEffect(() => {
        filterTickets();
    }, [tickets, searchQuery, statusFilter, dateFilter]);

    // Apply theme to document body
    useEffect(() => {
        if (preferences) {
            if (themeClasses.isDarkMode) {
                document.documentElement.classList.add('dark');
                document.body.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
                document.body.classList.remove('dark');
            }
        }
    }, [preferences, themeClasses.isDarkMode]);

    const loadUserPreferences = async () => {
        try {
            const prefsData = await userApi.getPreferences();
            setPreferences({
                emailNotifications: prefsData.emailNotifications || true,
                sessionTimeout: prefsData.sessionTimeout || 30,
                theme: prefsData.theme || 'light',
                language: prefsData.language || 'en',
                dateFormat: prefsData.dateFormat || 'MM/dd/yyyy',
                timeFormat: prefsData.timeFormat || '12h',
                defaultTimeZone: prefsData.defaultTimeZone || 'UTC',
                accentColor: prefsData.accentColor || 'blue',
                fontSize: prefsData.fontSize || 'medium',
                compactMode: prefsData.compactMode || false
            });
        } catch (error) {
            console.log('No preferences found, using defaults');
            setPreferences({
                emailNotifications: true,
                sessionTimeout: 30,
                theme: 'light',
                language: 'en',
                dateFormat: 'MM/dd/yyyy',
                timeFormat: '12h',
                defaultTimeZone: 'UTC',
                accentColor: 'blue',
                fontSize: 'medium',
                compactMode: false
            });
        }
    };

    const fetchTickets = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch('http://localhost:5251/api/tickets/my-tickets', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log('🎫 Tickets loaded:', data);
                setTickets(data);
            } else {
                console.error('Failed to fetch tickets');
            }
        } catch (error) {
            console.error('Error fetching tickets:', error);
        } finally {
            setLoading(false);
        }
    };

    const filterTickets = () => {
        let filtered = tickets;

        // Search filter
        if (searchQuery) {
            filtered = filtered.filter(ticket =>
                ticket.eventTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                ticket.ticketTypeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                ticket.venueName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                ticket.ticketNumber.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Status filter
        if (statusFilter !== 'all') {
            filtered = filtered.filter(ticket => ticket.status.toLowerCase() === statusFilter);
        }

        // Date filter
        const now = new Date();
        if (dateFilter === 'upcoming') {
            filtered = filtered.filter(ticket => new Date(ticket.eventStartDateTime) > now);
        } else if (dateFilter === 'past') {
            filtered = filtered.filter(ticket => new Date(ticket.eventStartDateTime) <= now);
        }

        setFilteredTickets(filtered);
    };

    const getStatusIcon = (status: string) => {
        switch (status.toLowerCase()) {
            case 'valid':
                return <CheckCircle className={`${themeClasses.iconSize} text-green-500`} />;
            case 'used':
                return <CheckCircle className={`${themeClasses.iconSize} text-blue-500`} />;
            case 'cancelled':
                return <XCircle className={`${themeClasses.iconSize} text-red-500`} />;
            default:
                return <AlertCircle className={`${themeClasses.iconSize} text-yellow-500`} />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'valid':
                return 'bg-green-100 text-green-800';
            case 'used':
                return 'bg-blue-100 text-blue-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-yellow-100 text-yellow-800';
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const format = preferences?.dateFormat || 'MM/dd/yyyy';

        switch (format) {
            case 'dd/MM/yyyy':
                return date.toLocaleDateString('en-GB');
            case 'yyyy-MM-dd':
                return date.toISOString().split('T')[0];
            default:
                return date.toLocaleDateString('en-US');
        }
    };

    const formatTime = (dateString: string) => {
        const date = new Date(dateString);
        const format = preferences?.timeFormat || '12h';

        if (format === '24h') {
            return date.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
        } else {
            return date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
        }
    };

    const isEventUpcoming = (eventDate: string) => {
        return new Date(eventDate) > new Date();
    };

    const downloadTicket = async (ticketId: number) => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`http://localhost:5251/api/tickets/${ticketId}/download`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `ticket-${ticketId}.pdf`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            }
        } catch (error) {
            console.error('Error downloading ticket:', error);
        }
    };

    const generateQRCode = (ticket: TicketData) => {
        return (
            <div className={`${themeClasses.compactMode ? 'w-12 h-12' : 'w-16 h-16'} ${themeClasses.backgroundInput} border-2 border-dashed ${themeClasses.border} rounded flex items-center justify-center`}>
                <QrCode className={`${themeClasses.compactMode ? 'h-6 w-6' : 'h-8 w-8'} ${themeClasses.textMuted}`} />
            </div>
        );
    };

    if (loading || !preferences) {
        return (
            <div
                className="min-h-screen flex items-center justify-center"
                style={{
                    backgroundImage: 'url("/images/bg/ticketsbg.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className={`${themeClasses?.backgroundCard || 'bg-white/80'} backdrop-blur-xl rounded-2xl ${themeClasses?.paddingLarge || 'p-8'} ${themeClasses?.shadow || 'shadow-2xl'} border ${themeClasses?.borderCard || 'border-white/30'}`}>
                    <div className="text-center">
                        <div className={`animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto ${themeClasses?.marginSmall || 'mb-4'}`}></div>
                        <p className={`${themeClasses?.fontSize?.text || 'text-base'} ${themeClasses?.textSecondary || 'text-gray-600'}`}>Loading your tickets...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundImage: 'url("/images/bg/ticketsbg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className={`min-h-screen ${themeClasses.backgroundOverlay} backdrop-blur-[2px]`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Header with glass effect */}
                    <div className={`${themeClasses.marginLarge} ${themeClasses.backgroundCard} backdrop-blur-xl rounded-2xl ${themeClasses.padding} border ${themeClasses.borderCard} ${themeClasses.shadow}`}>
                        <button
                            onClick={() => router.back()}
                            className={`flex items-center ${themeClasses.textSecondary} hover:${themeClasses.text} ${themeClasses.marginSmall} transition-colors ${themeClasses.fontSize.text}`}
                        >
                            <ArrowLeft className={`${themeClasses.iconSize} mr-2`} />
                            Back to Events
                        </button>
                        <h1 className={`${themeClasses.fontSize.display} font-bold ${themeClasses.text} ${themeClasses.marginSmall}`}>My Tickets</h1>
                        <p className={`${themeClasses.fontSize.text} text-subtle`}>View and manage all your event tickets</p>
                    </div>

                    {/* Filters with glass effect */}
                    <div className={`${themeClasses.backgroundCard} backdrop-blur-xl rounded-2xl ${themeClasses.shadow} border ${themeClasses.borderCard} ${themeClasses.padding} ${themeClasses.marginLarge}`}>
                        <div className={`flex flex-col sm:flex-row ${themeClasses.gap}`}>
                            {/* Search */}
                            <div className="flex-1">
                                <div className="relative">
                                    <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${themeClasses.iconSize} ${themeClasses.textMuted}`} />
                                    <input
                                        type="text"
                                        placeholder="Search tickets..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className={`w-full pl-10 pr-4 py-2 border ${themeClasses.border} rounded-lg ${themeClasses.accentRing} ${themeClasses.backgroundInput} backdrop-blur-sm ${themeClasses.text} ${themeClasses.fontSize.text} ${themeClasses.inputHeight}`}
                                    />
                                </div>
                            </div>

                            {/* Status Filter */}
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className={`${themeClasses.buttonPadding} border ${themeClasses.border} rounded-lg ${themeClasses.accentRing} ${themeClasses.backgroundInput} backdrop-blur-sm ${themeClasses.text} ${themeClasses.fontSize.text}`}
                            >
                                <option value="all">All Status</option>
                                <option value="valid">Valid</option>
                                <option value="used">Used</option>
                                <option value="cancelled">Cancelled</option>
                            </select>

                            {/* Date Filter */}
                            <select
                                value={dateFilter}
                                onChange={(e) => setDateFilter(e.target.value)}
                                className={`${themeClasses.buttonPadding} border ${themeClasses.border} rounded-lg ${themeClasses.accentRing} ${themeClasses.backgroundInput} backdrop-blur-sm ${themeClasses.text} ${themeClasses.fontSize.text}`}
                            >
                                <option value="all">All Events</option>
                                <option value="upcoming">Upcoming</option>
                                <option value="past">Past Events</option>
                            </select>
                        </div>
                    </div>

                    {/* Tickets Summary with glass effect */}
                    <div className={`grid grid-cols-1 md:grid-cols-3 ${themeClasses.gap} ${themeClasses.marginLarge}`}>
                        <div className={`${themeClasses.backgroundCard} backdrop-blur-xl rounded-2xl ${themeClasses.shadow} border ${themeClasses.borderCard} ${themeClasses.padding}`}>
                            <div className="flex items-center">
                                <Ticket className={`${themeClasses.iconSizeLarge} ${themeClasses.accentText} mr-3`} />
                                <div>
                                    <p className={`${themeClasses.fontSize.heading} font-bold ${themeClasses.text}`}>{tickets.length}</p>
                                    <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>Total Tickets</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${themeClasses.backgroundCard} backdrop-blur-xl rounded-2xl ${themeClasses.shadow} border ${themeClasses.borderCard} ${themeClasses.padding}`}>
                            <div className="flex items-center">
                                <Calendar className={`${themeClasses.iconSizeLarge} text-green-500 mr-3`} />
                                <div>
                                    <p className={`${themeClasses.fontSize.heading} font-bold ${themeClasses.text}`}>
                                        {tickets.filter(t => isEventUpcoming(t.eventStartDateTime)).length}
                                    </p>
                                    <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>Upcoming Events</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${themeClasses.backgroundCard} backdrop-blur-xl rounded-2xl ${themeClasses.shadow} border ${themeClasses.borderCard} ${themeClasses.padding}`}>
                            <div className="flex items-center">
                                <CheckCircle className={`${themeClasses.iconSizeLarge} text-purple-500 mr-3`} />
                                <div>
                                    <p className={`${themeClasses.fontSize.heading} font-bold ${themeClasses.text}`}>
                                        {tickets.filter(t => t.status.toLowerCase() === 'used').length}
                                    </p>
                                    <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>Events Attended</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tickets List */}
                    {filteredTickets.length === 0 ? (
                        <div className={`text-center py-12 ${themeClasses.backgroundCard} backdrop-blur-xl rounded-2xl ${themeClasses.shadow} border ${themeClasses.borderCard}`}>
                            <Ticket className={`h-12 w-12 ${themeClasses.textMuted} mx-auto mb-4`} />
                            <h3 className={`card-title`}>No tickets found</h3>
                            <p className={`card-description mb-4`}>
                                {tickets.length === 0
                                    ? "You haven't purchased any tickets yet."
                                    : "No tickets match your current filters."
                                }
                            </p>
                            <Link
                                href="/events"
                                className={`inline-flex items-center ${themeClasses.accent} ${themeClasses.accentHover} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
                            >
                                Browse Events
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filteredTickets.map((ticket) => (
                                <div
                                    key={ticket.ticketId}
                                    className={`${themeClasses.backgroundCard} backdrop-blur-xl rounded-2xl ${themeClasses.shadow} border ${themeClasses.borderCard} overflow-hidden hover:shadow-xl transition-all duration-300`}
                                >
                                    {/* Ticket Header */}
                                    <div className="p-6">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center flex-wrap gap-3 mb-2">
                                                    <h3 className={`card-title`}>
                                                        {ticket.eventTitle}
                                                    </h3>
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                                                        {getStatusIcon(ticket.status)}
                                                        <span className="ml-1">{ticket.status}</span>
                                                    </span>
                                                    {isEventUpcoming(ticket.eventStartDateTime) && (
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                            Upcoming
                                                        </span>
                                                    )}
                                                </div>

                                                <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 text-body-small text-subtle`}>
                                                    <div className="flex items-center">
                                                        <Calendar className="h-4 w-4 mr-2" />
                                                        <span>{formatDate(ticket.eventStartDateTime)}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Clock className="h-4 w-4 mr-2" />
                                                        <span>{formatTime(ticket.eventStartDateTime)}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <MapPin className="h-4 w-4 mr-2" />
                                                        <span>{ticket.venueName}</span>
                                                    </div>
                                                </div>

                                                <div className="mt-3 flex items-center space-x-4 text-sm">
                                                    <span className={`font-medium ${themeClasses.text}`}>
                                                        {ticket.ticketTypeName}
                                                    </span>
                                                    <span className={themeClasses.textSecondary}>
                                                        ${ticket.pricePaid.toFixed(2)}
                                                    </span>
                                                    <span className={`${themeClasses.textMuted} font-mono text-xs`}>
                                                        {ticket.ticketNumber}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-2 ml-4">
                                                {generateQRCode(ticket)}
                                                <div className="flex flex-col space-y-2">
                                                    <button
                                                        onClick={() => downloadTicket(ticket.ticketId)}
                                                        className={`flex items-center px-3 py-2 text-sm ${themeClasses.accent} ${themeClasses.accentHover} text-white rounded-lg transition-colors`}
                                                    >
                                                        <Download className="h-4 w-4 mr-1" />
                                                        Download
                                                    </button>
                                                    <button
                                                        onClick={() => setExpandedTicket(
                                                            expandedTicket === ticket.ticketId ? null : ticket.ticketId
                                                        )}
                                                        className={`flex items-center px-3 py-2 text-sm ${themeClasses.backgroundInput} ${themeClasses.hover} ${themeClasses.text} rounded-lg transition-colors border ${themeClasses.border}`}
                                                    >
                                                        {expandedTicket === ticket.ticketId ? (
                                                            <ChevronUp className="h-4 w-4 mr-1" />
                                                        ) : (
                                                            <ChevronDown className="h-4 w-4 mr-1" />
                                                        )}
                                                        Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded Details */}
                                    {expandedTicket === ticket.ticketId && (
                                        <div className={`border-t ${themeClasses.border} ${themeClasses.backgroundInput} backdrop-blur-xl p-6`}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {/* Attendee Information */}
                                                <div>
                                                    <h4 className={`font-medium ${themeClasses.text} mb-3 flex items-center`}>
                                                        <User className="h-4 w-4 mr-2" />
                                                        Attendee Information
                                                    </h4>
                                                    <div className="space-y-2 text-sm">
                                                        <div>
                                                            <span className={themeClasses.textSecondary}>Name:</span>
                                                            <span className={`ml-2 font-medium ${themeClasses.text}`}>
                                                                {ticket.attendeeFirstName} {ticket.attendeeLastName}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Mail className={`h-4 w-4 ${themeClasses.textMuted} mr-1`} />
                                                            <span className={themeClasses.textSecondary}>Email:</span>
                                                            <span className={`ml-2 ${themeClasses.text}`}>{ticket.attendeeEmail}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Event Information */}
                                                <div>
                                                    <h4 className={`font-medium ${themeClasses.text} mb-3 flex items-center`}>
                                                        <MapPin className="h-4 w-4 mr-2" />
                                                        Event Location
                                                    </h4>
                                                    <div className="space-y-2 text-sm">
                                                        <div>
                                                            <span className={themeClasses.textSecondary}>Venue:</span>
                                                            <span className={`ml-2 font-medium ${themeClasses.text}`}>{ticket.venueName}</span>
                                                        </div>
                                                        <div>
                                                            <span className={themeClasses.textSecondary}>Address:</span>
                                                            <span className={`ml-2 ${themeClasses.text}`}>{ticket.venueAddress}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Purchase Information */}
                                                <div>
                                                    <h4 className={`font-medium ${themeClasses.text} mb-3`}>Purchase Details</h4>
                                                    <div className="space-y-2 text-sm">
                                                        <div>
                                                            <span className={themeClasses.textSecondary}>Purchase Date:</span>
                                                            <span className={`ml-2 ${themeClasses.text}`}>{formatDate(ticket.purchaseDate)}</span>
                                                        </div>
                                                        <div>
                                                            <span className={themeClasses.textSecondary}>Price Paid:</span>
                                                            <span className={`ml-2 font-medium ${themeClasses.text}`}>${ticket.pricePaid.toFixed(2)}</span>
                                                        </div>
                                                        {ticket.checkInDate && (
                                                            <div>
                                                                <span className={themeClasses.textSecondary}>Check-in Date:</span>
                                                                <span className={`ml-2 ${themeClasses.text}`}>{formatDate(ticket.checkInDate)}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Actions */}
                                                <div>
                                                    <h4 className={`font-medium ${themeClasses.text} mb-3`}>Actions</h4>
                                                    <div className="space-y-2">
                                                        <Link
                                                            href={`/events/${ticket.eventId}`}
                                                            className={`inline-flex items-center text-sm ${themeClasses.accentText} ${themeClasses.accentHover}`}
                                                        >
                                                            <ExternalLink className="h-4 w-4 mr-1" />
                                                            View Event Details
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}