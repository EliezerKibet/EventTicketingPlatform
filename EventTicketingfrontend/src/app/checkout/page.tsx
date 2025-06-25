/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useI18n } from '@/components/providers/I18nProvider';
import { ArrowLeft, CreditCard, User, Mail, Phone, Lock, ShoppingCart, Check, X, AlertCircle } from 'lucide-react';
import { promoCodesApi, userApi } from '@/lib/api'; 

interface TicketType {
    ticketTypeId: number;
    name: string;
    price: number;
    quantityRemaining: number;
    maxQuantityPerOrder: number;
}

interface CartItem {
    ticketTypeId: number;
    name: string;
    price: number;
    quantity: number;
}

interface Event {
    eventId: number;
    title: string;
    startDateTime: string;
    venueName: string;
    venueCity: string;
    isOnline: boolean;
    bannerImageUrl?: string;
    currency?: string;
}

interface PromoCodeValidation {
    isValid: boolean;
    message: string;
    discountAmount: number;
    formattedDiscount: string;
    promoCode?: any;
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
        (preferences?.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const accentColor = preferences?.accentColor || 'blue';
    const fontSize = preferences?.fontSize || 'medium';
    const compactMode = preferences?.compactMode || false;

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
        backgroundCard: isDarkMode ? 'bg-gray-800/90' : 'bg-white/90',
        backgroundSidebar: isDarkMode ? 'bg-gray-800/80' : 'bg-white/80',
        backgroundInput: isDarkMode ? 'bg-gray-700/90' : 'bg-white/90',
        backgroundDisabled: isDarkMode ? 'bg-gray-600' : 'bg-gray-50',
        backgroundSuccess: isDarkMode ? 'bg-green-900/90' : 'bg-green-50/90',
        backgroundError: isDarkMode ? 'bg-red-900/90' : 'bg-red-50/90',
        backgroundSecure: isDarkMode ? 'bg-green-900/80' : 'bg-green-50/80',

        // Text colors
        text: isDarkMode ? 'text-gray-100' : 'text-gray-900',
        textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
        textDisabled: isDarkMode ? 'text-gray-400' : 'text-gray-500',
        textSuccess: isDarkMode ? 'text-green-300' : 'text-green-600',
        textError: isDarkMode ? 'text-red-300' : 'text-red-600',
        textSecure: isDarkMode ? 'text-green-300' : 'text-green-900',

        // Borders
        border: isDarkMode ? 'border-gray-600' : 'border-gray-300',
        borderCard: isDarkMode ? 'border-gray-600/30' : 'border-white/30',
        borderSuccess: isDarkMode ? 'border-green-700' : 'border-green-200',
        borderError: isDarkMode ? 'border-red-700' : 'border-red-200',
        borderSecure: isDarkMode ? 'border-green-700' : 'border-green-200',

        // Effects
        shadow: isDarkMode ? 'shadow-2xl shadow-black/50' : 'shadow-2xl',
        hover: isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-white/50',
        hoverRed: isDarkMode ? 'hover:bg-red-900/50' : 'hover:bg-red-50',

        // Form elements
        label: isDarkMode ? 'text-gray-300' : 'text-gray-700',
        placeholder: isDarkMode ? 'placeholder-gray-400' : 'placeholder-gray-500',

        // Typography & Layout - Enhanced for all elements
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
        spacingLarge: compactMode ? 'space-y-3' : 'space-y-6',

        // Grid gaps
        gap: compactMode ? 'gap-2' : 'gap-4',
        gapLarge: compactMode ? 'gap-3' : 'gap-6',

        // Button sizes
        buttonPadding: compactMode ? 'px-4 py-2' : 'px-6 py-3',
        buttonPaddingSmall: compactMode ? 'px-2 py-1' : 'px-3 py-2',

        // Input heights
        inputHeight: compactMode ? 'h-9' : 'h-11',

        // Icon sizes
        iconSize: compactMode ? 'h-4 w-4' : 'h-5 w-5',
        iconSizeSmall: compactMode ? 'h-3 w-3' : 'h-4 w-4',
        iconSizeLarge: compactMode ? 'h-6 w-6' : 'h-8 w-8',

        // Accent colors (dynamic and complete)
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

export default function CheckoutPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { user, isAuthenticated } = useAuth();
    const { t, formatCurrency, formatDate, formatTime, currentLangData } = useI18n();

    const eventId = searchParams.get('eventId');

    const [event, setEvent] = useState<Event | null>(null);
    const [ticketTypes, setTicketTypes] = useState<TicketType[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState('');
    const [preferences, setPreferences] = useState<UserPreferences | null>(null);

    const [promoCodeInput, setPromoCodeInput] = useState('');
    const [appliedPromoCode, setAppliedPromoCode] = useState<PromoCodeValidation | null>(null);
    const [promoCodeValidating, setPromoCodeValidating] = useState(false);
    const [promoCodeError, setPromoCodeError] = useState('');

    const [formData, setFormData] = useState({
        billingFirstName: user?.firstName || '',
        billingLastName: user?.lastName || '',
        billingEmail: user?.email || '',
        billingAddress: '',
        billingCity: '',
        billingState: '',
        billingZipCode: '',
        promoCode: '',
        attendees: [] as Array<{ firstName: string, lastName: string, email: string }>
    });

    const themeClasses = getThemeClasses(preferences);

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

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }

        if (!eventId) {
            router.push('/events');
            return;
        }

        loadUserPreferences();
        fetchEventData();
    }, [eventId, isAuthenticated]);

    useEffect(() => {
        if (preferences) {
            const isDarkMode = preferences.theme === 'dark' ||
                (preferences.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

            if (isDarkMode) {
                document.documentElement.classList.add('dark');
                document.body.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
                document.body.classList.remove('dark');
            }
        }
    }, [preferences]);

    const loadUserPreferences = async () => {
        try {
            const prefsData = await userApi.getPreferences();


            // Validate and set preferences with fallbacks
            const validatedPrefs: UserPreferences = {
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
            };

            setPreferences(validatedPrefs);

        } catch (error) {
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

    const fetchEventData = async () => {
        try {
            // Fetch event details
            const eventResponse = await fetch(`http://localhost:5251/api/events/${eventId}`);
            if (eventResponse.ok) {
                const eventData = await eventResponse.json();
                console.log('🖼️ Event data received:', eventData);
                console.log('🖼️ Banner URL from API:', eventData.bannerImageUrl);
                setEvent(eventData);
            }

            // Fetch ticket types
            const ticketsResponse = await fetch(`http://localhost:5251/api/tickets/event/${eventId}/ticket-types`);
            if (ticketsResponse.ok) {
                const ticketsData = await ticketsResponse.json();
                setTicketTypes(ticketsData);
            }

            // Initialize cart from localStorage or URL params
            const savedCart = localStorage.getItem('eventCart');
            if (savedCart) {
                const cartData = JSON.parse(savedCart);
                setCart(cartData);
                setupAttendees(cartData);
            }
        } catch (error) {
            setError(t('loadError'));
        } finally {
            setLoading(false);
        }
    };

    const setupAttendees = (cartData: CartItem[]) => {
        const totalTickets = cartData.reduce((sum, item) => sum + item.quantity, 0);
        const attendees = Array.from({ length: totalTickets }, (_, index) => ({
            firstName: index === 0 ? (user?.firstName || '') : '',
            lastName: index === 0 ? (user?.lastName || '') : '',
            email: index === 0 ? (user?.email || '') : ''
        }));

        setFormData(prev => ({ ...prev, attendees }));
    };

    const updateAttendee = (index: number, field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            attendees: prev.attendees.map((attendee, i) =>
                i === index ? { ...attendee, [field]: value } : attendee
            )
        }));
    };

    const updateBillingInfo = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const validatePromoCode = async (code: string) => {
        if (!code.trim() || !event) return;

        setPromoCodeValidating(true);
        setPromoCodeError('');

        try {
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);


            const requestPayload = {
                code: code.trim(),
                eventId: parseInt(eventId!),
                orderSubtotal: subtotal
            };

            const validation = await promoCodesApi.validatePromoCode(requestPayload);

            if (validation.isValid && validation.discountAmount) {
                const convertedDiscount = convertAndFormatCurrency(
                    Number(validation.discountAmount),
                    event?.currency || 'USD',
                    preferences,
                    currentLangData
                );
                validation.formattedDiscount = convertedDiscount;
            } 


            if (validation.promoCode) {
            }

            if (validation.isValid) {
                setAppliedPromoCode(validation);
                setFormData(prev => ({ ...prev, promoCode: code.trim() }));
                setPromoCodeInput('');
                setPromoCodeError('');

            } else {
                setPromoCodeError(validation.message);
                setAppliedPromoCode(null);
            }

        } catch (error: any) {
            setPromoCodeError(error.message || t('failedToLoadPromoCodes'));
            setAppliedPromoCode(null);
        } finally {
            setPromoCodeValidating(false);
        }
    };

    const handleApplyPromoCode = () => {
        validatePromoCode(promoCodeInput);
    };

    const handleRemovePromoCode = () => {
        setAppliedPromoCode(null);
        setFormData(prev => ({ ...prev, promoCode: '' }));
        setPromoCodeInput('');
        setPromoCodeError('');
    };

    const calculateOrderSummary = () => {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const serviceFee = subtotal * 0.05; // 5% service fee
        const tax = subtotal * 0.08; // 8% tax


        let discount = 0;
        if (appliedPromoCode?.isValid) {
            discount = Number(appliedPromoCode.discountAmount) || 0;
        } 

        const total = subtotal + serviceFee + tax - discount;

        const summary = { subtotal, serviceFee, tax, discount, total };

        return summary;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setProcessing(true);
        setError('');

        try {
            const token = localStorage.getItem('authToken');
            const orderSummary = calculateOrderSummary();

            const purchaseData = {
                eventId: parseInt(eventId!),
                ticketItems: cart.map(item => ({
                    ticketTypeId: item.ticketTypeId,
                    quantity: item.quantity
                })),
                billingEmail: formData.billingEmail,
                billingFirstName: formData.billingFirstName,
                billingLastName: formData.billingLastName,
                billingAddress: formData.billingAddress,
                billingCity: formData.billingCity,
                billingState: formData.billingState,
                billingZipCode: formData.billingZipCode,
                promoCode: formData.promoCode || undefined,
                attendees: formData.attendees
            };

            const response = await fetch('http://localhost:5251/api/tickets/purchase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(purchaseData)
            });

            if (response.ok) {
                const order = await response.json();
                // Clear cart
                localStorage.removeItem('eventCart');
                // Redirect to success page
                router.push(`/order-confirmation/${order.orderId}`);
            } else {
                const errorData = await response.json();
                setError(errorData.message || t('failedToCreateEvent'));
            }
        } catch (error) {
            setError(t('failedToCreateEvent'));
        } finally {
            setProcessing(false);
        }
    };

    if (loading) {
        return (
            <div className={`min-h-screen ${themeClasses.background} flex items-center justify-center`}>
                <div className={`animate-spin rounded-full ${themeClasses.iconSizeLarge} border-b-2 ${themeClasses.accentText.replace('text-', 'border-')}`}></div>
            </div>
        );
    }

    if (!event || cart.length === 0) {
        return (
            <div className={`min-h-screen ${themeClasses.background} flex items-center justify-center`}>
                <div className="text-center">
                    <ShoppingCart className={`${themeClasses.iconSizeLarge} ${themeClasses.textSecondary} mx-auto ${themeClasses.marginSmall}`} />
                    <h1 className={`${themeClasses.fontSize.title} font-bold ${themeClasses.text} ${themeClasses.marginSmall}`}>
                        {t('inYourCart')} {t('noEventsYet').toLowerCase()}
                    </h1>
                    <button
                        onClick={() => router.push('/events')}
                        className={`${themeClasses.accent} ${themeClasses.accentHover} text-white ${themeClasses.buttonPadding} rounded-lg ${themeClasses.fontSize.button}`}
                    >
                        {t('browseEvents')}
                    </button>
                </div>
            </div>
        );
    }

    const orderSummary = calculateOrderSummary();

    return (
        <div
            className="min-h-screen relative"
            style={{
                backgroundImage: event.bannerImageUrl
                    ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${getImageUrl(event.bannerImageUrl)})`
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                transform: 'scaleX(-1)'
            }}
        >

            {/* Content */}
            <div className="relative z-10" style={{ transform: 'scaleX(-1)' }}>
                {/* Header */}
                <div className={`${themeClasses.backgroundCard} backdrop-blur-sm shadow-sm border-b ${themeClasses.borderCard}`}>
                    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${themeClasses.paddingSmall}`}>
                        <button
                            onClick={() => router.back()}
                            className={`flex items-center ${themeClasses.textSecondary} hover:${themeClasses.text} ${themeClasses.marginSmall} transition-colors ${themeClasses.fontSize.text}`}
                        >
                            <ArrowLeft className={`${themeClasses.iconSize} mr-2`} />
                            {t('backToEvents')}
                        </button>
                        <h1 className={`${themeClasses.fontSize.title} font-bold ${themeClasses.text}`}>
                            {t('proceedToCheckout')}
                        </h1>
                        <p className={`${themeClasses.textSecondary} ${themeClasses.fontSize.text}`}>{event.title}</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${themeClasses.paddingLarge}`}>
                    <div className={`grid grid-cols-1 lg:grid-cols-3 ${themeClasses.gapLarge}`}>
                        {/* Main Form */}
                        <div className={`lg:col-span-2 ${themeClasses.spacingLarge}`}>
                            {error && (
                                <div className={`${themeClasses.backgroundError} border ${themeClasses.borderError} ${themeClasses.textError} ${themeClasses.paddingSmall} rounded-md ${themeClasses.fontSize.text}`}>
                                    {error}
                                </div>
                            )}

                            {/* Billing Information */}
                            <div className={`${themeClasses.backgroundCard} backdrop-blur-sm rounded-lg shadow-lg border ${themeClasses.borderCard} ${themeClasses.padding}`}>
                                <h2 className={`${themeClasses.fontSize.heading} font-semibold ${themeClasses.text} ${themeClasses.marginSmall} flex items-center`}>
                                    <User className={`${themeClasses.iconSize} mr-2`} />
                                    {t('personalInformation')}
                                </h2>

                                <div className={`grid grid-cols-1 md:grid-cols-2 ${themeClasses.gap}`}>
                                    <div>
                                        <label className={`block ${themeClasses.fontSize.label} font-medium ${themeClasses.label} ${themeClasses.marginSmall}`}>
                                            {t('firstName')}
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.billingFirstName}
                                            onChange={(e) => updateBillingInfo('billingFirstName', e.target.value)}
                                            className={`w-full border ${themeClasses.border} rounded-md px-3 py-2 ${themeClasses.accentRing} ${themeClasses.backgroundInput} ${themeClasses.text} ${themeClasses.fontSize.text} ${themeClasses.inputHeight}`}
                                        />
                                    </div>

                                    <div>
                                        <label className={`block ${themeClasses.fontSize.label} font-medium ${themeClasses.label} ${themeClasses.marginSmall}`}>
                                            {t('lastName')}
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.billingLastName}
                                            onChange={(e) => updateBillingInfo('billingLastName', e.target.value)}
                                            className={`w-full border ${themeClasses.border} rounded-md px-3 py-2 ${themeClasses.accentRing} ${themeClasses.backgroundInput} ${themeClasses.text} ${themeClasses.fontSize.text} ${themeClasses.inputHeight}`}
                                        />
                                    </div>

                                    <div>
                                        <label className={`block ${themeClasses.fontSize.label} font-medium ${themeClasses.label} ${themeClasses.marginSmall}`}>
                                            {t('email')}
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.billingEmail}
                                            onChange={(e) => updateBillingInfo('billingEmail', e.target.value)}
                                            className={`w-full border ${themeClasses.border} rounded-md px-3 py-2 ${themeClasses.accentRing} ${themeClasses.backgroundInput} ${themeClasses.text} ${themeClasses.fontSize.text} ${themeClasses.inputHeight}`}
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className={`block ${themeClasses.fontSize.label} font-medium ${themeClasses.label} ${themeClasses.marginSmall}`}>
                                            {t('address')} ({t('optional')})
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.billingAddress}
                                            onChange={(e) => updateBillingInfo('billingAddress', e.target.value)}
                                            className={`w-full border ${themeClasses.border} rounded-md px-3 py-2 ${themeClasses.accentRing} ${themeClasses.backgroundInput} ${themeClasses.text} ${themeClasses.fontSize.text} ${themeClasses.inputHeight}`}
                                        />
                                    </div>

                                    <div>
                                        <label className={`block ${themeClasses.fontSize.label} font-medium ${themeClasses.label} ${themeClasses.marginSmall}`}>
                                            {t('city')} ({t('optional')})
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.billingCity}
                                            onChange={(e) => updateBillingInfo('billingCity', e.target.value)}
                                            className={`w-full border ${themeClasses.border} rounded-md px-3 py-2 ${themeClasses.accentRing} ${themeClasses.backgroundInput} ${themeClasses.text} ${themeClasses.fontSize.text} ${themeClasses.inputHeight}`}
                                        />
                                    </div>

                                    <div>
                                        <label className={`block ${themeClasses.fontSize.label} font-medium ${themeClasses.label} ${themeClasses.marginSmall}`}>
                                            {t('state')} ({t('optional')})
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.billingState}
                                            onChange={(e) => updateBillingInfo('billingState', e.target.value)}
                                            className={`w-full border ${themeClasses.border} rounded-md px-3 py-2 ${themeClasses.accentRing} ${themeClasses.backgroundInput} ${themeClasses.text} ${themeClasses.fontSize.text} ${themeClasses.inputHeight}`}
                                        />
                                    </div>

                                    <div>
                                        <label className={`block ${themeClasses.fontSize.label} font-medium ${themeClasses.label} ${themeClasses.marginSmall}`}>
                                            {t('zipCode')} ({t('optional')})
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.billingZipCode}
                                            onChange={(e) => updateBillingInfo('billingZipCode', e.target.value)}
                                            className={`w-full border ${themeClasses.border} rounded-md px-3 py-2 ${themeClasses.accentRing} ${themeClasses.backgroundInput} ${themeClasses.text} ${themeClasses.fontSize.text} ${themeClasses.inputHeight}`}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Attendee Information */}
                            <div className={`${themeClasses.backgroundCard} backdrop-blur-sm rounded-lg shadow-lg border ${themeClasses.borderCard} ${themeClasses.padding}`}>
                                <h2 className={`${themeClasses.fontSize.heading} font-semibold ${themeClasses.text} ${themeClasses.marginSmall}`}>
                                    {t('attendeeInformation')}
                                </h2>

                                <div className={themeClasses.spacing}>
                                    {formData.attendees.map((attendee, index) => (
                                        <div key={index} className={`border ${themeClasses.border} rounded-lg ${themeClasses.paddingSmall} ${themeClasses.backgroundInput}`}>
                                            <h3 className={`font-medium ${themeClasses.text} ${themeClasses.marginSmall} ${themeClasses.fontSize.text}`}>
                                                {t('attendeeInformation')} {index + 1}
                                            </h3>
                                            <div className={`grid grid-cols-1 md:grid-cols-3 ${themeClasses.gap}`}>
                                                <div>
                                                    <label className={`block ${themeClasses.fontSize.label} font-medium ${themeClasses.label} ${themeClasses.marginSmall}`}>
                                                        {t('firstName')}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={attendee.firstName}
                                                        onChange={(e) => updateAttendee(index, 'firstName', e.target.value)}
                                                        className={`w-full border ${themeClasses.border} rounded-md px-3 py-2 ${themeClasses.accentRing} ${themeClasses.backgroundInput} ${themeClasses.text} ${themeClasses.fontSize.text} ${themeClasses.inputHeight}`}
                                                    />
                                                </div>

                                                <div>
                                                    <label className={`block ${themeClasses.fontSize.label} font-medium ${themeClasses.label} ${themeClasses.marginSmall}`}>
                                                        {t('lastName')}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={attendee.lastName}
                                                        onChange={(e) => updateAttendee(index, 'lastName', e.target.value)}
                                                        className={`w-full border ${themeClasses.border} rounded-md px-3 py-2 ${themeClasses.accentRing} ${themeClasses.backgroundInput} ${themeClasses.text} ${themeClasses.fontSize.text} ${themeClasses.inputHeight}`}
                                                    />
                                                </div>

                                                <div>
                                                    <label className={`block ${themeClasses.fontSize.label} font-medium ${themeClasses.label} ${themeClasses.marginSmall}`}>
                                                        {t('email')}
                                                    </label>
                                                    <input
                                                        type="email"
                                                        required
                                                        value={attendee.email}
                                                        onChange={(e) => updateAttendee(index, 'email', e.target.value)}
                                                        className={`w-full border ${themeClasses.border} rounded-md px-3 py-2 ${themeClasses.accentRing} ${themeClasses.backgroundInput} ${themeClasses.text} ${themeClasses.fontSize.text} ${themeClasses.inputHeight}`}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Enhanced Promo Code Section */}
                            <div className={`${themeClasses.backgroundCard} backdrop-blur-sm rounded-lg shadow-lg border ${themeClasses.borderCard} ${themeClasses.padding}`}>
                                <h2 className={`${themeClasses.fontSize.heading} font-semibold ${themeClasses.text} ${themeClasses.marginSmall}`}>
                                    {t('promoCodes')}
                                </h2>

                                {/* Applied Promo Code Display */}
                                {appliedPromoCode?.isValid && (
                                    <div className={`${themeClasses.marginSmall} ${themeClasses.paddingSmall} ${themeClasses.backgroundSuccess} border ${themeClasses.borderSuccess} rounded-lg`}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <Check className={`${themeClasses.iconSize} ${themeClasses.textSuccess} mr-2`} />
                                                <div>
                                                    <p className={`${themeClasses.fontSize.text} font-medium ${themeClasses.textSuccess}`}>
                                                        {t('promoCodeCreatedSuccessfully')}: <span className="font-mono">{formData.promoCode}</span>
                                                    </p>
                                                    <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSuccess}`}>
                                                        {t('totalSavings')} {convertAndFormatCurrency(Number(appliedPromoCode.discountAmount), event?.currency || 'USD', preferences, currentLangData)}!
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={handleRemovePromoCode}
                                                className={`${themeClasses.textSuccess} ${themeClasses.hover} transition-colors`}
                                            >
                                                <X className={`${themeClasses.iconSize}`} />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Promo Code Input */}
                                {!appliedPromoCode?.isValid && (
                                    <div className={themeClasses.spacing}>
                                        <div className={`flex ${themeClasses.gap}`}>
                                            <input
                                                type="text"
                                                placeholder={t('searchPromoCodes')}
                                                value={promoCodeInput}
                                                onChange={(e) => setPromoCodeInput(e.target.value.toUpperCase())}
                                                className={`flex-1 border ${themeClasses.border} rounded-md px-3 py-2 ${themeClasses.accentRing} ${themeClasses.backgroundInput} ${themeClasses.text} ${themeClasses.fontSize.text} ${themeClasses.inputHeight} font-mono`}
                                                onKeyPress={(e) => {
                                                    if (e.key === 'Enter') {
                                                        e.preventDefault();
                                                        handleApplyPromoCode();
                                                    }
                                                }}
                                            />
                                            <button
                                                type="button"
                                                onClick={handleApplyPromoCode}
                                                disabled={!promoCodeInput.trim() || promoCodeValidating}
                                                className={`${themeClasses.buttonPadding} ${themeClasses.accent} ${themeClasses.accentHover} text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${themeClasses.fontSize.button}`}
                                            >
                                                {promoCodeValidating ? (
                                                    <div className={`animate-spin rounded-full ${themeClasses.iconSizeSmall} border-b-2 border-white`}></div>
                                                ) : (
                                                    t('validate')
                                                )}
                                            </button>
                                        </div>

                                        {/* Error Message */}
                                        {promoCodeError && (
                                            <div className={`flex items-center ${themeClasses.textError} ${themeClasses.fontSize.text}`}>
                                                <AlertCircle className={`${themeClasses.iconSizeSmall} mr-2`} />
                                                {promoCodeError}
                                            </div>
                                        )}

                                        {/* Help Text */}
                                        <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>
                                            {t('createFirstPromoCodeDescription')}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className={`${themeClasses.backgroundCard} backdrop-blur-sm rounded-lg shadow-lg border ${themeClasses.borderCard} ${themeClasses.padding} sticky top-4`}>
                                <h2 className={`${themeClasses.fontSize.heading} font-semibold ${themeClasses.text} ${themeClasses.marginSmall}`}>
                                    {t('orderDetails')}
                                </h2>

                                {/* Event Info */}
                                <div className={`${themeClasses.marginSmall} ${themeClasses.paddingSmall} border-b ${themeClasses.border}`}>
                                    <h3 className={`font-medium ${themeClasses.text} ${themeClasses.fontSize.text}`}>{event.title}</h3>
                                    <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>
                                        {formatEventDateTime(event.startDateTime, preferences, currentLangData, t)}
                                    </p>
                                    {/* Add timezone indicator */}
                                    <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary} text-xs mt-1`}>
                                        📍 {event.isOnline ? t('onlineEvent') : `${event.venueName}, ${event.venueCity}`}
                                        {preferences?.defaultTimeZone && preferences.defaultTimeZone !== 'UTC' && (
                                            <span className="ml-2">🕐 {preferences.defaultTimeZone.replace('_', ' ')}</span>
                                        )}
                                    </p>
                                </div>

                                {/* Cart Items */}
                                <div className={`${themeClasses.spacing} ${themeClasses.marginSmall}`}>
                                    {cart.map((item) => (
                                        <div key={item.ticketTypeId} className="flex justify-between">
                                            <div>
                                                <p className={`font-medium ${themeClasses.text} ${themeClasses.fontSize.text}`}>{item.name}</p>
                                                <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>
                                                    {t('quantity')}: {item.quantity}
                                                </p>
                                            </div>
                                            <p className={`font-medium ${themeClasses.text} ${themeClasses.fontSize.text}`}>
                                                {convertAndFormatCurrency(item.price * item.quantity, event?.currency || 'USD', preferences, currentLangData)}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Price Breakdown */}
                                <div className={`border-t ${themeClasses.border} ${themeClasses.paddingSmall} ${themeClasses.spacing}`}>
                                    <div className="flex justify-between">
                                        <span className={`${themeClasses.textSecondary} ${themeClasses.fontSize.text}`}>
                                            {t('subtotal')}
                                        </span>
                                        <span className={`${themeClasses.text} ${themeClasses.fontSize.text}`}>
                                            {convertAndFormatCurrency(orderSummary.subtotal, event?.currency || 'USD', preferences, currentLangData)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className={`${themeClasses.textSecondary} ${themeClasses.fontSize.text}`}>
                                            {t('serviceFee')}
                                        </span>
                                        <span className={`${themeClasses.text} ${themeClasses.fontSize.text}`}>
                                            {convertAndFormatCurrency(orderSummary.serviceFee, event?.currency || 'USD', preferences, currentLangData)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className={`${themeClasses.textSecondary} ${themeClasses.fontSize.text}`}>
                                            {t('tax')}
                                        </span>
                                        <span className={`${themeClasses.text} ${themeClasses.fontSize.text}`}>
                                            {convertAndFormatCurrency(orderSummary.tax, event?.currency || 'USD', preferences, currentLangData)}
                                        </span>
                                    </div>
                                    {orderSummary.discount > 0 && (
                                        <div className={`flex justify-between ${themeClasses.textSuccess} font-medium`}>
                                            <span className="flex items-center">
                                                <Check className={`${themeClasses.iconSizeSmall} mr-1`} />
                                                {t('discount')}
                                            </span>
                                            <span>-{convertAndFormatCurrency(orderSummary.discount, event?.currency || 'USD', preferences, currentLangData)}</span>
                                        </div>
                                    )}
                                    <div className={`border-t ${themeClasses.border} pt-2 flex justify-between font-bold ${themeClasses.fontSize.heading}`}>
                                        <span className={themeClasses.text}>{t('total')}</span>
                                        <span className={themeClasses.text}>{convertAndFormatCurrency(orderSummary.total, event?.currency || 'USD', preferences, currentLangData)}</span>
                                    </div>

                                    {/* Enhanced user preference indicators */}
                                    <div className={`text-center ${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary} mt-3 space-y-1`}>
                                        {preferences?.currency && (
                                            <div className="flex items-center justify-center">
                                                <span className="mr-1">{getCurrencySymbol(preferences.currency)}</span>
                                                {t('currency')}: {preferences.currency === 'USD' ? 'US Dollar' :
                                                    preferences.currency === 'EUR' ? 'Euro' :
                                                        preferences.currency === 'GBP' ? 'British Pound' :
                                                            preferences.currency === 'JPY' ? 'Japanese Yen' : preferences.currency}
                                            </div>
                                        )}
                                        {preferences?.defaultTimeZone && preferences.defaultTimeZone !== 'UTC' && (
                                            <div className="flex items-center justify-center">
                                                <span className="mr-1">🌍</span>
                                                {t('timezone')}: {preferences.defaultTimeZone.replace('_', ' ').replace('/', ', ')}
                                            </div>
                                        )}
                                        {preferences?.dateFormat && (
                                            <div className="flex items-center justify-center">
                                                <span className="mr-1">📅</span>
                                                {t('dateFormat')}: {preferences.dateFormat}
                                            </div>
                                        )}
                                        {preferences?.timeFormat && (
                                            <div className="flex items-center justify-center">
                                                <span className="mr-1">🕒</span>
                                                {t('timeFormat')}: {preferences.timeFormat === '12h' ? '12-hour' : '24-hour'}
                                            </div>
                                        )}
                                    </div>

                                    {/* Savings Display */}
                                    {orderSummary.discount > 0 && (
                                        <div className={`text-center ${themeClasses.textSuccess} ${themeClasses.fontSize.text} font-medium mt-3`}>
                                            🎉 {t('totalSavings')} {convertAndFormatCurrency(orderSummary.discount, event?.currency || 'USD', preferences, currentLangData)}!
                                        </div>
                                    )}
                                </div>

                                {/* Purchase Button */}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className={`w-full mt-6 ${themeClasses.accent} ${themeClasses.accentHover} disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold ${themeClasses.buttonPadding} rounded-lg transition-colors duration-200 flex items-center justify-center ${themeClasses.shadow} ${themeClasses.fontSize.button}`}
                                >
                                    {processing ? (
                                        <>
                                            <div className={`animate-spin rounded-full ${themeClasses.iconSizeSmall} border-b-2 border-white mr-2`}></div>
                                            {t('loading')}...
                                        </>
                                    ) : (
                                        <>
                                            <CreditCard className={`${themeClasses.iconSize} mr-2`} />
                                            {t('completePurchase')}
                                        </>
                                    )}
                                </button>

                                <div className={`mt-4 flex items-center justify-center ${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>
                                    <Lock className={`${themeClasses.iconSizeSmall} mr-1`} />
                                    {t('securitySettings')} EventHub
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}                           