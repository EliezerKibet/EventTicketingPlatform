/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useI18n } from '@/components/providers/I18nProvider';
import { DollarSign } from 'lucide-react';
import { useI18nContext } from '@/components/providers/I18nProvider';

interface TicketData {
    ticketId: number;
    eventId: number;
    eventTitle: string;
    ticketTypeId: number;
    ticketTypeName: string;
    ticketNumber: string;
    qrCode: string;
    pricePaid: number;
    currency?: string; 
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
        // Fallback: Simple symbol mapping
        const symbols: { [key: string]: string } = {
            'USD': '$',
            'EUR': '€',
            'GBP': '£',
            'JPY': '¥'
        };

        const symbol = symbols[currency] || '$';

        // For JPY, don't show decimal places
        if (currency === 'JPY') {
            const wholeAmount = Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return `${symbol}${wholeAmount}`;
        }

        // For other currencies, show 2 decimal places
        const formattedAmount = amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return `${symbol}${formattedAmount}`;
    }
};

const convertAndFormatCurrency = (amount: number, fromCurrency: string, preferences: UserPreferences | null, currentLangData: any) => {
    const userCurrency = (preferences?.currency && ['USD', 'EUR', 'GBP', 'JPY'].includes(preferences.currency))
        ? preferences.currency
        : 'USD';

    if (fromCurrency === userCurrency) {
        return formatCurrencyWithUserPreference(amount, {
            ...preferences,
            currency: userCurrency
        } as UserPreferences, currentLangData);
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

    return formatCurrencyWithUserPreference(convertedAmount, {
        ...preferences,
        currency: userCurrency
    } as UserPreferences, currentLangData);
};

const getCurrencySymbol = (currency: string) => {
    const symbols: { [key: string]: string } = {
        'USD': '$',  // US Dollar
        'EUR': '€',  // Euro
        'GBP': '£',  // British Pound
        'JPY': '¥'   // Japanese Yen
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

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthShort = monthNames[zonedDate.getMonth()];

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekday = weekdays[zonedDate.getDay()];

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

    const timeZoneAbbr = getTimeZoneAbbreviation(userTimeZone);
    formattedTime += ` ${timeZoneAbbr}`;

    const result = `${formattedDate} ${t('at')} ${formattedTime}`;

    return result;
};

const formatEventDateOnly = (dateTimeString: string, preferences: UserPreferences | null) => {
    const eventDate = new Date(dateTimeString);
    const userTimeZone = preferences?.defaultTimeZone || 'UTC';
    const dateFormat = preferences?.dateFormat || 'MM/dd/yyyy';

    const zonedDate = new Date(eventDate.toLocaleString("en-US", { timeZone: userTimeZone }));

    const year = zonedDate.getFullYear();
    const month = String(zonedDate.getMonth() + 1).padStart(2, '0');
    const day = String(zonedDate.getDate()).padStart(2, '0');

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthShort = monthNames[zonedDate.getMonth()];

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekday = weekdays[zonedDate.getDay()];

    switch (dateFormat) {
        case 'dd/MM/yyyy':
            return `${weekday}, ${day}/${month}/${year}`;
        case 'yyyy-MM-dd':
            return `${weekday}, ${year}-${month}-${day}`;
        case 'MMM dd, yyyy':
            return `${weekday}, ${monthShort} ${parseInt(day)}, ${year}`;
        case 'dd MMM yyyy':
            return `${weekday}, ${parseInt(day)} ${monthShort} ${year}`;
        default: // MM/dd/yyyy
            return `${weekday}, ${month}/${day}/${year}`;
    }
};

const formatEventTimeOnly = (dateTimeString: string, preferences: UserPreferences | null) => {
    const eventDate = new Date(dateTimeString);
    const userTimeZone = preferences?.defaultTimeZone || 'UTC';
    const timeFormat = preferences?.timeFormat || '12h';

    const zonedDate = new Date(eventDate.toLocaleString("en-US", { timeZone: userTimeZone }));

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

    const timeZoneAbbr = getTimeZoneAbbreviation(userTimeZone);
    return `${formattedTime} ${timeZoneAbbr}`;
};

export default function MyTicketsPage() {
    const router = useRouter();
    const { t } = useI18nContext();
    const [tickets, setTickets] = useState<TicketData[]>([]);
    const { formatCurrency, currentLangData } = useI18n();
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
                emailNotifications: prefsData.emailNotifications ?? true,
                sessionTimeout: prefsData.sessionTimeout ?? 30,
                theme: prefsData.theme ?? 'light',
                language: prefsData.language ?? 'en',
                dateFormat: prefsData.dateFormat ?? 'MM/dd/yyyy',
                timeFormat: prefsData.timeFormat ?? '12h',
                defaultTimeZone: prefsData.defaultTimeZone ?? 'UTC',
                accentColor: prefsData.accentColor ?? 'blue',
                fontSize: prefsData.fontSize ?? 'medium',
                compactMode: prefsData.compactMode ?? false,
                currency: (prefsData.currency && ['USD', 'EUR', 'GBP', 'JPY'].includes(prefsData.currency))
                    ? prefsData.currency as 'USD' | 'EUR' | 'GBP' | 'JPY'
                    : 'USD'
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
                compactMode: false,
                currency: 'USD'
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
                setTickets(data);
            } else {
            }
        } catch (error) {
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

    const formatDate = (dateString: string): string => {
        if (preferences) {
            return formatEventDateOnly(dateString, preferences);
        }
        // Fallback for when preferences aren't loaded yet
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US');
    };

    const formatTime = (dateString: string): string => {
        if (preferences) {
            return formatEventTimeOnly(dateString, preferences);
        }
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
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
                        <p className={`${themeClasses?.fontSize?.text || 'text-base'} ${themeClasses?.textSecondary || 'text-gray-600'}`}>{t('loading')}</p>
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
                            {t('back')}
                        </button>
                        <h1 className={`${themeClasses.fontSize.display} font-bold ${themeClasses.text} ${themeClasses.marginSmall}`}>{t('myTickets')}</h1>
                        <p className={`${themeClasses.fontSize.text} ${themeClasses.textSecondary}`}>{t('manageTickets')}</p>
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
                                        placeholder={t('searchEvents')}
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
                                <option value="all">{t('allStatus')}</option>
                                <option value="valid">{t('valid')}</option>
                                <option value="used">{t('used')}</option>
                                <option value="cancelled">{t('cancelled')}</option>
                            </select>

                            {/* Date Filter */}
                            <select
                                value={dateFilter}
                                onChange={(e) => setDateFilter(e.target.value)}
                                className={`${themeClasses.buttonPadding} border ${themeClasses.border} rounded-lg ${themeClasses.accentRing} ${themeClasses.backgroundInput} backdrop-blur-sm ${themeClasses.text} ${themeClasses.fontSize.text}`}
                            >
                                <option value="all">{t('allEvents')}</option>
                                <option value="upcoming">{t('upcoming')}</option>
                                <option value="past">{t('pastEvents')}</option>
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
                                    <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>{t('totalEvents')}</p>
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
                                    <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>{t('upcomingEvents')}</p>
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
                                    <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>{t('attended')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tickets List */}
                    {filteredTickets.length === 0 ? (
                        <div className={`text-center py-12 ${themeClasses.backgroundCard} backdrop-blur-xl rounded-2xl ${themeClasses.shadow} border ${themeClasses.borderCard}`}>
                            <Ticket className={`h-12 w-12 ${themeClasses.textMuted} mx-auto mb-4`} />
                            <h3 className={`${themeClasses.fontSize.heading} font-semibold ${themeClasses.text} mb-2`}>
                                {t('noEventsYet')}
                            </h3>
                            <p className={`${themeClasses.fontSize.text} ${themeClasses.textSecondary} mb-4`}>
                                {tickets.length === 0
                                    ? t('noEventsYet')
                                    : t('noEventsMatchSearch')
                                }
                            </p>
                            <Link
                                href="/events"
                                className={`inline-flex items-center ${themeClasses.accent} ${themeClasses.accentHover} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
                            >
                                {t('browseEvents')}
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
                                                    <h3 className={`${themeClasses.fontSize.heading} font-bold ${themeClasses.text}`}>
                                                        {ticket.eventTitle}
                                                    </h3>
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                                                        {getStatusIcon(ticket.status)}
                                                        <span className="ml-1">{ticket.status}</span>
                                                    </span>
                                                    {isEventUpcoming(ticket.eventStartDateTime) && (
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                            {t('upcoming')}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 ${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>
                                                    <div className="flex items-center">
                                                        <Calendar className={`${themeClasses.iconSizeSmall} mr-2 ${themeClasses.accentText}`} />
                                                        <span className={`${themeClasses.text} font-medium`}>
                                                            {formatDate(ticket.eventStartDateTime)}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Clock className={`${themeClasses.iconSizeSmall} mr-2 ${themeClasses.accentText}`} />
                                                        <span className={`${themeClasses.text} font-medium`}>
                                                            {formatTime(ticket.eventStartDateTime)}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <MapPin className={`${themeClasses.iconSizeSmall} mr-2 ${themeClasses.accentText}`} />
                                                        <span className={`${themeClasses.text} font-medium`}>
                                                            {ticket.venueName}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className={`mt-3 flex items-center space-x-4 ${themeClasses.fontSize.text}`}>
                                                    <span className={`font-medium ${themeClasses.text}`}>
                                                        {ticket.ticketTypeName}
                                                    </span>
                                                    <span className={`${themeClasses.textSecondary} font-semibold`}>
                                                        {ticket.currency ?
                                                            convertAndFormatCurrency(ticket.pricePaid, ticket.currency, preferences, currentLangData) :
                                                            formatCurrencyWithUserPreference(ticket.pricePaid, preferences, currentLangData)
                                                        }
                                                    </span>
                                                    <span className={`${themeClasses.textMuted} font-mono ${themeClasses.fontSize.subtitle}`}>
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
                                                        {t('download')}
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
                                                        {t('details')}
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
                                                        {t('attendeeInformation')}
                                                    </h4>
                                                    <div className="space-y-2 text-sm">
                                                        <div>
                                                            <span className={themeClasses.textSecondary}>{t('firstName')}:</span>
                                                            <span className={`ml-2 font-medium ${themeClasses.text}`}>
                                                                {ticket.attendeeFirstName} {ticket.attendeeLastName}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Mail className={`h-4 w-4 ${themeClasses.textMuted} mr-1`} />
                                                            <span className={themeClasses.textSecondary}>{t('email')}:</span>
                                                            <span className={`ml-2 ${themeClasses.text}`}>{ticket.attendeeEmail}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Event Information */}
                                                <div>
                                                    <h4 className={`font-medium ${themeClasses.text} mb-3 flex items-center`}>
                                                        <MapPin className="h-4 w-4 mr-2" />
                                                        {t('eventLocation')}
                                                    </h4>
                                                    <div className="space-y-2 text-sm">
                                                        <div>
                                                            <span className={themeClasses.textSecondary}>{t('venue')}:</span>
                                                            <span className={`ml-2 font-medium ${themeClasses.text}`}>{ticket.venueName}</span>
                                                        </div>
                                                        <div>
                                                            <span className={themeClasses.textSecondary}>{t('address')}:</span>
                                                            <span className={`ml-2 ${themeClasses.text}`}>{ticket.venueAddress}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Purchase Information */}
                                                <div>
                                                    <h4 className={`font-medium ${themeClasses.text} mb-3`}>{t('purchaseDetails')}</h4>
                                                    <div className="space-y-2 text-sm">
                                                        <div>
                                                            <span className={themeClasses.textSecondary}>{t('purchaseDate')}:</span>
                                                            <span className={`ml-2 ${themeClasses.text}`}>{formatDate(ticket.purchaseDate)}</span>
                                                        </div>
                                                        <div>
                                                            <span className={themeClasses.textSecondary}>{t('ticketPrice')}:</span>
                                                            <span className={`ml-2 font-medium ${themeClasses.text}`}>
                                                                {ticket.currency ?
                                                                    convertAndFormatCurrency(ticket.pricePaid, ticket.currency, preferences, currentLangData) :
                                                                    formatCurrencyWithUserPreference(ticket.pricePaid, preferences, currentLangData)
                                                                }
                                                            </span>
                                                        </div>
                                                        {ticket.checkInDate && (
                                                            <div>
                                                                <span className={themeClasses.textSecondary}>{t('checkInDate')}:</span>
                                                                <span className={`ml-2 ${themeClasses.text}`}>{formatDate(ticket.checkInDate)}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Actions */}
                                                <div>
                                                    <h4 className={`font-medium ${themeClasses.text} mb-3`}>{t('actions')}</h4>
                                                    <div className="space-y-2">
                                                        <Link
                                                            href={`/events/${ticket.eventId}`}
                                                            className={`inline-flex items-center text-sm ${themeClasses.accentText} ${themeClasses.accentHover}`}
                                                        >
                                                            <ExternalLink className="h-4 w-4 mr-1" />
                                                            {t('viewEventDetails')}
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