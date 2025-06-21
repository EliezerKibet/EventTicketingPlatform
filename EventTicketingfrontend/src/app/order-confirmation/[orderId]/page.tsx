/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Download, Calendar, MapPin, Clock, Ticket } from 'lucide-react';
import { userApi } from '@/lib/api';

interface Order {
    orderId: number;
    orderNumber: string;
    eventId: number;
    eventTitle: string;
    totalAmount: number;
    currency: string;
    status: string;
    createdAt: string;
    tickets: Array<{
        ticketId: number;
        ticketNumber: string;
        ticketTypeName: string;
        attendeeFirstName: string;
        attendeeLastName: string;
        attendeeEmail: string;
        qrCode: string;
    }>;
}

interface Event {
    eventId: number;
    title: string;
    description: string;
    bannerImageUrl?: string;
    imageUrl?: string;
    startDateTime: string;
    endDateTime: string;
    venueName: string;
    venueCity: string;
    isOnline: boolean;
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

    // Font size configurations
    const fontSizes = {
        small: {
            text: 'text-sm',
            heading: 'text-lg',
            title: 'text-xl',
            subtitle: 'text-xs',
            button: 'text-sm',
            label: 'text-xs'
        },
        medium: {
            text: 'text-base',
            heading: 'text-xl',
            title: 'text-2xl',
            subtitle: 'text-sm',
            button: 'text-base',
            label: 'text-sm'
        },
        large: {
            text: 'text-lg',
            heading: 'text-2xl',
            title: 'text-3xl',
            subtitle: 'text-base',
            button: 'text-lg',
            label: 'text-base'
        }
    };

    const currentFont = fontSizes[fontSize as keyof typeof fontSizes] || fontSizes.medium;

    return {
        // Basic colors
        background: isDarkMode ? 'bg-gray-900' : 'bg-white',
        backgroundCard: isDarkMode ? 'bg-gray-800/95' : 'bg-white/95',
        backgroundOverlay: isDarkMode ? 'bg-black/60' : 'bg-black/40',

        // Text colors
        text: isDarkMode ? 'text-gray-100' : 'text-gray-900',
        textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
        textMuted: isDarkMode ? 'text-gray-400' : 'text-gray-500',
        textLight: isDarkMode ? 'text-gray-200' : 'text-white',

        // Borders
        border: isDarkMode ? 'border-gray-600' : 'border-gray-200',
        borderCard: isDarkMode ? 'border-gray-600/30' : 'border-gray-200',

        // Effects
        shadow: isDarkMode ? 'shadow-2xl shadow-black/50' : 'shadow-lg',
        hover: isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50',

        // Typography & Layout
        fontSize: currentFont,

        // Padding/spacing based on compact mode
        padding: compactMode ? 'p-4' : 'p-6',
        paddingSmall: compactMode ? 'p-2' : 'p-4',
        paddingLarge: compactMode ? 'p-6' : 'py-12',

        // Margins
        margin: compactMode ? 'mb-4' : 'mb-6',
        marginSmall: compactMode ? 'mb-2' : 'mb-4',
        marginLarge: compactMode ? 'mb-6' : 'mb-8',

        // Spacing between elements
        spacing: compactMode ? 'space-y-2' : 'space-y-4',
        gap: compactMode ? 'gap-2' : 'gap-4',

        // Button sizes
        buttonPadding: compactMode ? 'px-4 py-2' : 'px-6 py-3',

        // Icon sizes
        iconSize: compactMode ? 'h-4 w-4' : 'h-5 w-5',
        iconSizeSmall: compactMode ? 'h-3 w-3' : 'h-4 w-4',
        iconSizeLarge: compactMode ? 'h-12 w-12' : 'h-16 w-16',

        // Accent colors
        accent: currentAccent.primary,
        accentHover: currentAccent.hover,
        accentText: currentAccent.text,
        accentLight: currentAccent.light,
        accentBorder: currentAccent.border,

        // State info
        isDarkMode,
        accentColor,
        fontSizeValue: fontSize,
        compactMode
    };
};

export default function OrderConfirmationPage() {
    const params = useParams();
    const orderId = params.orderId as string;
    const [order, setOrder] = useState<Order | null>(null);
    const [event, setEvent] = useState<Event | null>(null);
    const [preferences, setPreferences] = useState<UserPreferences | null>(null);
    const [loading, setLoading] = useState(true);

    const themeClasses = getThemeClasses(preferences);

    useEffect(() => {
        Promise.all([fetchOrder(), loadUserPreferences()]);
    }, [orderId]);

    useEffect(() => {
        if (order && order.eventId) {
            fetchEventDetails();
        }
    }, [order]);

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

    const getImageUrl = (imageUrl?: string) => {
        if (!imageUrl || imageUrl === 'NULL' || imageUrl.trim() === '') return null;

        if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
            return imageUrl;
        }

        if (imageUrl.startsWith('/')) {
            return `http://localhost:5251${imageUrl}`;
        }

        return `http://localhost:5251/${imageUrl}`;
    };

    const fetchOrder = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`http://localhost:5251/api/orders/${orderId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log('🎫 Order data received:', data);
                setOrder(data);
            }
        } catch (error) {
            console.error('Failed to fetch order:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchEventDetails = async () => {
        if (!order) return;

        try {
            const response = await fetch(`http://localhost:5251/api/events/${order.eventId}`);
            if (response.ok) {
                const eventData = await response.json();
                console.log('🖼️ Event data for banner:', eventData);
                console.log('🖼️ Banner URL from API:', eventData.bannerImageUrl);
                setEvent(eventData);
            }
        } catch (error) {
            console.error('Failed to fetch event details:', error);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const format = preferences?.dateFormat || 'MM/dd/yyyy';

        switch (format) {
            case 'dd/MM/yyyy':
                return date.toLocaleDateString('en-GB', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            case 'yyyy-MM-dd':
                return date.toLocaleDateString('sv-SE', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            default:
                return date.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
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

    if (loading || !preferences) {
        return (
            <div className={`min-h-screen ${themeClasses?.background || 'bg-gray-50'} flex items-center justify-center`}>
                <div className={`animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600`}></div>
            </div>
        );
    }

    if (!order) {
        return (
            <div className={`min-h-screen ${themeClasses.background} flex items-center justify-center`}>
                <div className="text-center">
                    <h1 className={`${themeClasses.fontSize.title} font-bold ${themeClasses.text}`}>Order not found</h1>
                </div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen relative"
            style={{
                backgroundImage: event?.bannerImageUrl
                    ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${getImageUrl(event.bannerImageUrl)})`
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                transform: 'scaleX(-1)'
            }}
        >
            {/* Content */}
            <div className={`relative z-10 ${themeClasses.paddingLarge}`} style={{ transform: 'scaleX(-1)' }}>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Success Header */}
                    <div className={`text-center ${themeClasses.marginLarge}`}>
                        <CheckCircle className={`${themeClasses.iconSizeLarge} text-green-500 mx-auto ${themeClasses.marginSmall} drop-shadow-lg`} />
                        <h1 className={`${themeClasses.fontSize.title} font-bold ${themeClasses.textLight} ${themeClasses.marginSmall} drop-shadow-lg`}>
                            Purchase Successful!
                        </h1>
                        <p className={`${themeClasses.fontSize.heading} ${themeClasses.textLight} drop-shadow`}>
                            Your tickets have been confirmed and sent to your email.
                        </p>
                    </div>

                    {/* Event Info Banner */}
                    {event && (
                        <div className={`${themeClasses.backgroundCard} backdrop-blur-sm rounded-lg ${themeClasses.shadow} border ${themeClasses.borderCard} ${themeClasses.padding} ${themeClasses.marginLarge}`}>
                            <h2 className={`${themeClasses.fontSize.heading} font-semibold ${themeClasses.text} ${themeClasses.marginSmall}`}>Event Details</h2>
                            <div className="flex items-start space-x-4">
                                <div className="flex-1">
                                    <h3 className={`${themeClasses.fontSize.heading} font-bold ${themeClasses.text} ${themeClasses.marginSmall}`}>{event.title}</h3>
                                    <div className={`${themeClasses.spacing} ${themeClasses.fontSize.text} ${themeClasses.textSecondary}`}>
                                        <div className="flex items-center">
                                            <Calendar className={`${themeClasses.iconSize} mr-2`} />
                                            <span>{formatDate(event.startDateTime)}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className={`${themeClasses.iconSize} mr-2`} />
                                            <span>{formatTime(event.startDateTime)}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className={`${themeClasses.iconSize} mr-2`} />
                                            <span>{event.isOnline ? 'Online Event' : `${event.venueName}, ${event.venueCity}`}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Order Details */}
                    <div className={`${themeClasses.backgroundCard} backdrop-blur-sm rounded-lg ${themeClasses.shadow} border ${themeClasses.borderCard} ${themeClasses.padding} ${themeClasses.marginLarge}`}>
                        <h2 className={`${themeClasses.fontSize.heading} font-semibold ${themeClasses.text} ${themeClasses.marginSmall}`}>Order Details</h2>

                        <div className={`grid grid-cols-2 ${themeClasses.gap} ${themeClasses.marginSmall}`}>
                            <div>
                                <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>Order Number</p>
                                <p className={`font-semibold ${themeClasses.text} ${themeClasses.fontSize.text}`}>{order.orderNumber}</p>
                            </div>
                            <div>
                                <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>Total Amount</p>
                                <p className={`font-semibold ${themeClasses.text} ${themeClasses.fontSize.text}`}>${order.totalAmount.toFixed(2)}</p>
                            </div>
                        </div>

                        <div className={`grid grid-cols-2 ${themeClasses.gap}`}>
                            <div>
                                <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>Order Date</p>
                                <p className={`font-semibold ${themeClasses.text} ${themeClasses.fontSize.text}`}>{new Date(order.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>Status</p>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full ${themeClasses.fontSize.subtitle} font-medium bg-green-100 text-green-800`}>
                                    {order.status}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Tickets */}
                    <div className={`${themeClasses.backgroundCard} backdrop-blur-sm rounded-lg ${themeClasses.shadow} border ${themeClasses.borderCard} ${themeClasses.padding} ${themeClasses.marginLarge}`}>
                        <div className={`flex items-center justify-between ${themeClasses.marginSmall}`}>
                            <h2 className={`${themeClasses.fontSize.heading} font-semibold ${themeClasses.text}`}>Your Tickets</h2>
                            <span className={`${themeClasses.fontSize.text} ${themeClasses.textSecondary}`}>{order.tickets.length} ticket(s)</span>
                        </div>

                        <div className={themeClasses.spacing}>
                            {order.tickets.map((ticket, index) => (
                                <div key={ticket.ticketId} className={`border ${themeClasses.borderCard} rounded-lg ${themeClasses.paddingSmall} ${themeClasses.background} bg-opacity-50`}>
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <div className={`flex items-center space-x-2 ${themeClasses.marginSmall}`}>
                                                <span className={`${themeClasses.accentLight} ${themeClasses.accentText} ${themeClasses.fontSize.subtitle} font-medium px-2.5 py-0.5 rounded-full`}>
                                                    Ticket #{index + 1}
                                                </span>
                                                <span className={`${themeClasses.fontSize.text} font-medium ${themeClasses.text}`}>{ticket.ticketTypeName}</span>
                                            </div>
                                            <div className="space-y-1">
                                                <p className={`font-medium ${themeClasses.text} ${themeClasses.fontSize.text}`}>
                                                    {ticket.attendeeFirstName} {ticket.attendeeLastName}
                                                </p>
                                                <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>{ticket.attendeeEmail}</p>
                                                <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textMuted} font-mono`}>
                                                    {ticket.ticketNumber}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-center ml-4">
                                            <div className={`${themeClasses.compactMode ? 'w-12 h-12' : 'w-16 h-16'} ${themeClasses.background} border-2 border-dashed ${themeClasses.border} rounded flex items-center justify-center ${themeClasses.marginSmall}`}>
                                                <span className={`${themeClasses.fontSize.subtitle} ${themeClasses.textMuted}`}>QR Code</span>
                                            </div>
                                            <button className={`${themeClasses.fontSize.subtitle} ${themeClasses.accentText} ${themeClasses.accentHover} flex items-center`}>
                                                <Download className={`${themeClasses.iconSizeSmall} mr-1`} />
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Important Notice */}
                        <div className={`mt-6 ${themeClasses.paddingSmall} bg-yellow-50 border border-yellow-200 rounded-lg`}>
                            <h4 className={`${themeClasses.fontSize.text} font-medium text-yellow-800 mb-1`}>Important Notice</h4>
                            <p className={`${themeClasses.fontSize.subtitle} text-yellow-700`}>
                                Please bring your tickets (printed or on mobile) and a valid ID to the event.
                                QR codes will be scanned at entry.
                            </p>
                        </div>
                    </div>

                    {/* Next Steps */}
                    <div className={`text-center ${themeClasses.spacing}`}>
                        <div className={`flex flex-col sm:flex-row ${themeClasses.gap} justify-center`}>
                            <Link
                                href="/mytickets"
                                className={`inline-flex items-center justify-center ${themeClasses.accent} bg-opacity-90 ${themeClasses.accentHover} text-white ${themeClasses.buttonPadding} rounded-lg font-semibold transition-colors backdrop-blur-sm ${themeClasses.shadow} ${themeClasses.fontSize.button}`}
                            >
                                <Ticket className={`${themeClasses.iconSize} mr-2`} />
                                View My Tickets
                            </Link>

                            <Link
                                href="/events"
                                className={`inline-flex items-center justify-center ${themeClasses.backgroundCard} ${themeClasses.hover} ${themeClasses.text} ${themeClasses.buttonPadding} rounded-lg font-semibold transition-colors backdrop-blur-sm border ${themeClasses.borderCard} ${themeClasses.shadow} ${themeClasses.fontSize.button}`}
                            >
                                Browse More Events
                            </Link>
                        </div>

                        <p className={`${themeClasses.fontSize.text} ${themeClasses.textLight} drop-shadow`}>
                            Check your email for detailed tickets and event information.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}