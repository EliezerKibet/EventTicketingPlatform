/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { userApi } from '@/lib/api';
import {
    Calendar,
    Search,
    MapPin,
    Clock,
    Filter,
    Star,
    Users,
    Ticket,
    Heart,
    Share,
    Music,
    Briefcase,
    X,
    TrendingUp,
    Award,
    Zap,
    Target,
    Building,
    MapIcon,
    CheckCircle,
    Timer,
    DollarSign,
    Eye,
    ArrowRight,
    Flame,
    Trophy,
    Globe,
    Camera,
    ChevronLeft,
    ChevronRight,
    Play,
    Pause,
    ZoomIn,
    Image
} from 'lucide-react';
import Link from 'next/link';

// Your existing interfaces
interface Event {
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
    bannerImageUrl?: string;
    status: string;
    isPublished: boolean;
    isFeatured: boolean;
    createdAt: string;
    tags?: string;
    maxAttendees: number;
    basePrice: number;
    currency: string;
    isOnline: boolean;
    onlineUrl?: string;
    ticketsSold: number;
    availableTickets: number;
}

interface Category {
    categoryId: number;
    name: string;
    description: string;
    iconUrl?: string;
    isActive: boolean;
    eventCount: number;
}

interface Venue {
    venueId: number;
    name: string;
    description: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    latitude?: number;
    longitude?: number;
    capacity: number;
    imageUrl?: string;
    contactEmail: string;
    contactPhone: string;
    website?: string;
    isActive: boolean;
    eventCount: number;
}

interface SlideshowImage {
    id: string;
    url: string;
    title: string;
    subtitle: string;
    description?: string;
    type: 'featured-banner' | 'event-image' | 'venue' | 'upcoming';
    eventId?: number;
    venueId?: number;
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

// Helper component for category icons
const CategoryIcon = ({ categoryName }: { categoryName: string }) => {
    const name = categoryName.toLowerCase();
    const iconClass = "h-6 w-6 text-white";

    if (name.includes('music')) {
        return <Music className={iconClass} />;
    } else if (name.includes('business') || name.includes('conference') || name.includes('corporate')) {
        return <Briefcase className={iconClass} />;
    } else if (name.includes('sport') || name.includes('fitness')) {
        return <Trophy className={iconClass} />;
    } else if (name.includes('art') || name.includes('culture')) {
        return <Award className={iconClass} />;
    } else {
        return <Calendar className={iconClass} />;
    }
};


// Enhanced Image Slideshow Component with theming
const EventGallerySlideshow = ({ images, autoPlay = true, themeClasses }: {
    images: SlideshowImage[],
    autoPlay?: boolean,
    themeClasses: any
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [showModal, setShowModal] = useState(false);
    const [imageError, setImageError] = useState<Set<number>>(new Set());

    useEffect(() => {
        if (!isPlaying || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPlaying, images.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
    };

    const goToNext = () => {
        setCurrentIndex(prev => (prev + 1) % images.length);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleImageError = (index: number) => {
        setImageError(prev => new Set([...prev, index]));
    };

    if (images.length === 0) {
        return (
            <div className={`w-full ${themeClasses.compactMode ? 'h-80' : 'h-96'} ${themeClasses.accentGradient} bg-gradient-to-r rounded-2xl flex items-center justify-center`}>
                <div className="text-center text-white">
                    <Camera className={`${themeClasses.compactMode ? 'h-12 w-12' : 'h-16 w-16'} mx-auto mb-4 opacity-50`} />
                    <p className={`${themeClasses.fontSize.heading}`}>No images available</p>
                </div>
            </div>
        );
    }

    const currentImage = images[currentIndex];

    return (
        <>
            <div className={`relative w-full ${themeClasses.compactMode ? 'h-80' : 'h-96'} rounded-2xl overflow-hidden ${themeClasses.shadow} group ${themeClasses.backgroundCard}`}>
                {/* Main Image */}
                <div className="relative w-full h-full">
                    {!imageError.has(currentIndex) ? (
                        <img
                            src={currentImage.url}
                            alt={currentImage.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                            onError={() => handleImageError(currentIndex)}
                        />
                    ) : (
                        <div className={`w-full h-full ${themeClasses.accentGradient} bg-gradient-to-r flex items-center justify-center`}>
                            <div className="text-center text-white">
                                <Image className={`${themeClasses.iconSizeLarge} mx-auto mb-2 opacity-50`} />
                                <p className={themeClasses.fontSize.text}>Image not available</p>
                            </div>
                        </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Image Info */}
                    <div className={`absolute ${themeClasses.compactMode ? 'bottom-4 left-4' : 'bottom-6 left-6'} text-white max-w-lg`}>
                        <div className={`flex items-center ${themeClasses.compactMode ? 'mb-2' : 'mb-3'}`}>
                            <span className={`${themeClasses.buttonPaddingSmall} rounded-full ${themeClasses.fontSize.subtitle} font-medium mr-4 ${currentImage.type === 'featured-banner' ? 'bg-yellow-500' :
                                    currentImage.type === 'event-image' ? 'bg-blue-500' :
                                        currentImage.type === 'venue' ? 'bg-green-500' : 'bg-orange-500'
                                }`}>
                                {currentImage.type === 'featured-banner' ? 'Featured' :
                                    currentImage.type === 'event-image' ? 'Event' :
                                        currentImage.type === 'venue' ? 'Venue' : 'This Week'}
                            </span>
                            <span className={`${themeClasses.fontSize.subtitle} opacity-75`}>
                                {currentIndex + 1} of {images.length}
                            </span>
                        </div>
                        <h3 className={`${themeClasses.fontSize.title} font-bold ${themeClasses.compactMode ? 'mb-1' : 'mb-2'} line-clamp-2`}>{currentImage.title}</h3>
                        <p className={`${themeClasses.fontSize.heading} opacity-90 line-clamp-2`}>{currentImage.subtitle}</p>
                        {currentImage.description && (
                            <p className={`${themeClasses.fontSize.text} opacity-75 ${themeClasses.compactMode ? 'mt-1' : 'mt-2'} line-clamp-2`}>{currentImage.description}</p>
                        )}
                    </div>

                    {/* Controls */}
                    <div className={`absolute ${themeClasses.compactMode ? 'top-4 right-4' : 'top-6 right-6'} flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity`}>
                        <button
                            onClick={togglePlayPause}
                            className={`${themeClasses.paddingSmall} bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors`}
                            title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                        >
                            {isPlaying ? <Pause className={themeClasses.iconSize} /> : <Play className={themeClasses.iconSize} />}
                        </button>
                        <button
                            onClick={() => setShowModal(true)}
                            className={`${themeClasses.paddingSmall} bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors`}
                            title="View full size"
                        >
                            <ZoomIn className={themeClasses.iconSize} />
                        </button>
                    </div>

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={goToPrevious}
                                className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${themeClasses.paddingSmall} bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all`}
                                title="Previous image"
                            >
                                <ChevronLeft className={themeClasses.iconSizeLarge} />
                            </button>
                            <button
                                onClick={goToNext}
                                className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${themeClasses.paddingSmall} bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all`}
                                title="Next image"
                            >
                                <ChevronRight className={themeClasses.iconSizeLarge} />
                            </button>
                        </>
                    )}

                    {/* Dot Indicators */}
                    {images.length > 1 && (
                        <div className={`absolute ${themeClasses.compactMode ? 'bottom-4 right-4' : 'bottom-6 right-6'} flex space-x-2`}>
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`${themeClasses.compactMode ? 'w-2 h-2' : 'w-3 h-3'} rounded-full transition-all ${index === currentIndex
                                            ? 'bg-white scale-125'
                                            : 'bg-white/50 hover:bg-white/75'
                                        }`}
                                    title={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
                <div className={`flex space-x-4 ${themeClasses.compactMode ? 'mt-4' : 'mt-6'} overflow-x-auto pb-2`}>
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`flex-shrink-0 ${themeClasses.compactMode ? 'w-20 h-12' : 'w-24 h-16'} rounded-lg overflow-hidden border-2 transition-all ${index === currentIndex
                                    ? `${themeClasses.accentBorder} scale-110 ${themeClasses.shadow}`
                                    : `${themeClasses.border} hover:${themeClasses.accentBorder} opacity-75 hover:opacity-100`
                                }`}
                            title={image.title}
                        >
                            {!imageError.has(index) ? (
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-full object-cover"
                                    onError={() => handleImageError(index)}
                                />
                            ) : (
                                <div className={`w-full h-full ${themeClasses.backgroundCard} flex items-center justify-center`}>
                                    <Image className={`${themeClasses.iconSizeSmall} ${themeClasses.textMuted}`} />
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            )}

            {/* Modal for Full Size View */}
            {showModal && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-7xl max-h-full">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10"
                            title="Close"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {!imageError.has(currentIndex) ? (
                            <img
                                src={currentImage.url}
                                alt={currentImage.title}
                                className="max-w-full max-h-full object-contain rounded-lg"
                            />
                        ) : (
                            <div className={`w-96 h-64 ${themeClasses.backgroundCard} rounded-lg flex items-center justify-center`}>
                                <div className={`text-center ${themeClasses.text}`}>
                                    <Image className={`${themeClasses.iconSizeLarge} mx-auto mb-2 opacity-50`} />
                                    <p>Image not available</p>
                                </div>
                            </div>
                        )}

                        <div className="absolute bottom-4 left-4 text-white bg-black/50 rounded-lg p-4 max-w-md backdrop-blur-sm">
                            <h3 className={`${themeClasses.fontSize.heading} font-bold`}>{currentImage.title}</h3>
                            <p className="opacity-90">{currentImage.subtitle}</p>
                            {currentImage.description && (
                                <p className={`${themeClasses.fontSize.text} opacity-75 mt-1`}>{currentImage.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


// Enhanced theming system from profile page
const getThemeClasses = (preferences: UserPreferences | null) => {
    const isDarkMode = preferences?.theme === 'dark' ||
        (preferences?.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

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
            ring: 'focus:ring-blue-500 focus:border-blue-500',
            gradient: 'from-blue-600 to-blue-700'
        },
        purple: {
            primary: 'bg-purple-600',
            hover: 'hover:bg-purple-700',
            light: isDarkMode ? 'bg-purple-900/20' : 'bg-purple-50',
            text: isDarkMode ? 'text-purple-400' : 'text-purple-600',
            border: isDarkMode ? 'border-purple-700' : 'border-purple-200',
            ring: 'focus:ring-purple-500 focus:border-purple-500',
            gradient: 'from-purple-600 to-purple-700'
        },
        green: {
            primary: 'bg-green-600',
            hover: 'hover:bg-green-700',
            light: isDarkMode ? 'bg-green-900/20' : 'bg-green-50',
            text: isDarkMode ? 'text-green-400' : 'text-green-600',
            border: isDarkMode ? 'border-green-700' : 'border-green-200',
            ring: 'focus:ring-green-500 focus:border-green-500',
            gradient: 'from-green-600 to-green-700'
        },
        orange: {
            primary: 'bg-orange-600',
            hover: 'hover:bg-orange-700',
            light: isDarkMode ? 'bg-orange-900/20' : 'bg-orange-50',
            text: isDarkMode ? 'text-orange-400' : 'text-orange-600',
            border: isDarkMode ? 'border-orange-700' : 'border-orange-200',
            ring: 'focus:ring-orange-500 focus:border-orange-500',
            gradient: 'from-orange-600 to-orange-700'
        },
        pink: {
            primary: 'bg-pink-600',
            hover: 'hover:bg-pink-700',
            light: isDarkMode ? 'bg-pink-900/20' : 'bg-pink-50',
            text: isDarkMode ? 'text-pink-400' : 'text-pink-600',
            border: isDarkMode ? 'border-pink-700' : 'border-pink-200',
            ring: 'focus:ring-pink-500 focus:border-pink-500',
            gradient: 'from-pink-600 to-pink-700'
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
            label: 'text-xs',
            hero: 'text-4xl md:text-5xl',
            section: 'text-2xl md:text-3xl'
        },
        medium: {
            text: 'text-base',
            heading: 'text-xl',
            title: 'text-2xl',
            subtitle: 'text-sm',
            button: 'text-base',
            label: 'text-sm',
            hero: 'text-5xl md:text-6xl',
            section: 'text-3xl md:text-4xl'
        },
        large: {
            text: 'text-lg',
            heading: 'text-2xl',
            title: 'text-3xl',
            subtitle: 'text-base',
            button: 'text-lg',
            label: 'text-base',
            hero: 'text-6xl md:text-7xl',
            section: 'text-4xl md:text-5xl'
        }
    };

    const currentFont = fontSizes[fontSize as keyof typeof fontSizes] || fontSizes.medium;

    return {
        // Basic colors
        background: isDarkMode ? 'bg-gray-900' : 'bg-white',
        backgroundCard: isDarkMode ? 'bg-gray-800/90' : 'bg-white/90',
        backgroundSidebar: isDarkMode ? 'bg-gray-800/80' : 'bg-white/80',
        backgroundInput: isDarkMode ? 'bg-gray-700/90' : 'bg-white/90',
        backgroundHeader: isDarkMode ? 'bg-gray-800/80' : 'bg-white/80',
        backgroundFooter: isDarkMode ? 'bg-gray-900' : 'bg-white',

        // Text colors
        text: isDarkMode ? 'text-gray-100' : 'text-gray-900',
        textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
        textMuted: isDarkMode ? 'text-gray-400' : 'text-gray-500',
        textHero: isDarkMode ? 'text-white' : 'text-white',

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
        paddingSection: compactMode ? 'py-8' : 'py-16',

        // Margins
        margin: compactMode ? 'mb-3' : 'mb-6',
        marginSmall: compactMode ? 'mb-2' : 'mb-4',
        marginLarge: compactMode ? 'mb-4' : 'mb-8',
        marginSection: compactMode ? 'mb-12' : 'mb-20',

        // Spacing
        spacing: compactMode ? 'space-y-2' : 'space-y-4',
        spacingLarge: compactMode ? 'space-y-3' : 'space-y-6',

        // Grid gaps
        gap: compactMode ? 'gap-3' : 'gap-6',

        // Button sizes
        buttonPadding: compactMode ? 'px-4 py-2' : 'px-6 py-3',
        buttonPaddingSmall: compactMode ? 'px-2 py-1' : 'px-3 py-2',

        // Input heights
        inputHeight: compactMode ? 'h-9' : 'h-11',
        searchHeight: compactMode ? 'py-3' : 'py-4',

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
        accentGradient: currentAccent.gradient,

        // State info
        isDarkMode,
        accentColor,
        fontSizeValue: fontSize,
        compactMode
    };
};

export default function EventsHomepage() {
    const router = useRouter();
    const { user, isLoading } = useAuth();

    // State management
    const [events, setEvents] = useState<Event[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [venues, setVenues] = useState<Venue[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [likedEvents, setLikedEvents] = useState<Set<number>>(new Set());
    const [slideshowImages, setSlideshowImages] = useState<SlideshowImage[]>([]);
    const [myTicketCount, setMyTicketCount] = useState<number>(0);

    const [preferences, setPreferences] = useState<UserPreferences | null>(null);
    const themeClasses = getThemeClasses(preferences);

    // 2. SECOND: Add this useEffect with your other useEffects (around line 355-365)
    useEffect(() => {
        if (user) {
            fetchMyTicketCount();
        }
    }, [user]);

    useEffect(() => {
        fetchEvents();
        fetchCategories();
        fetchVenues();
        loadLikedEvents();
    }, []);

    useEffect(() => {
        // Generate slideshow images when data is loaded
        if (events.length > 0 && venues.length > 0) {
            generateSlideshowImages();
        }
    }, [events, venues]);

    useEffect(() => {
        if (user) {
            fetchMyTicketCount();
            loadUserPreferences();
        } else {
            // Set default preferences for non-logged in users
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
    }, [user]);

    // Apply theme to document body
    useEffect(() => {
        if (themeClasses.isDarkMode) {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark');
        }
    }, [themeClasses.isDarkMode]);


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

    const getFullImageUrl = (imageUrl: string | undefined) => {
        if (!imageUrl) return '';

        // If it's already a full URL, return as is
        if (imageUrl.startsWith('http')) {
            return imageUrl;
        }

        // Construct full URL with your backend domain
        const backendUrl = 'http://localhost:5251'; // Your backend URL
        return backendUrl + imageUrl;
    };

    const fetchMyTicketCount = async () => {
        try {
            const response = await fetch('http://localhost:5251/api/tickets/my-tickets/count', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setMyTicketCount(data.count || 0);
            }
        } catch (error) {
            console.error('Error fetching ticket count:', error);
        }
    };

    const generateSlideshowImages = () => {
        const images: SlideshowImage[] = [];

        // Add featured event banners first (highest priority)
        const featuredEvents = events.filter(event =>
            event.isFeatured &&
            event.isPublished &&
            (event.bannerImageUrl || event.imageUrl)
        );

        featuredEvents.slice(0, 5).forEach(event => {
            const imageUrl = getImageUrl(event.bannerImageUrl || event.imageUrl);
            if (imageUrl) {
                images.push({
                    id: `featured-${event.eventId}`,
                    url: imageUrl,
                    title: event.title,
                    subtitle: `${formatDate(event.startDateTime)} • ${event.venueName}`,
                    description: `${event.shortDescription || event.description.substring(0, 100)}... • From $${event.basePrice}`,
                    type: 'featured-banner',
                    eventId: event.eventId
                });
            }
        });

        // Add upcoming events happening this week
        const upcomingEvents = events.filter(event => {
            const daysUntil = getDaysUntilEvent(event.startDateTime);
            return daysUntil <= 7 && daysUntil >= 0 && event.isPublished && (event.bannerImageUrl || event.imageUrl);
        });

        upcomingEvents.slice(0, 4).forEach(event => {
            const daysUntil = getDaysUntilEvent(event.startDateTime);
            const imageUrl = getImageUrl(event.bannerImageUrl || event.imageUrl);
            if (imageUrl) {
                images.push({
                    id: `upcoming-${event.eventId}`,
                    url: imageUrl,
                    title: event.title,
                    subtitle: daysUntil === 0 ? 'Today!' : daysUntil === 1 ? 'Tomorrow' : `In ${daysUntil} days`,
                    description: `${event.isOnline ? 'Online Event' : event.venueName} • ${event.ticketsSold} tickets sold`,
                    type: 'upcoming',
                    eventId: event.eventId
                });
            }
        });

        // Add regular published events
        const regularEvents = events.filter(event =>
            !event.isFeatured &&
            event.isPublished &&
            (event.bannerImageUrl || event.imageUrl) &&
            !upcomingEvents.some(ue => ue.eventId === event.eventId)
        );

        regularEvents.slice(0, 6).forEach(event => {
            const imageUrl = getImageUrl(event.bannerImageUrl || event.imageUrl);
            if (imageUrl) {
                images.push({
                    id: `event-${event.eventId}`,
                    url: imageUrl,
                    title: event.title,
                    subtitle: `${event.categoryName} • By ${event.organizerName}`,
                    description: `${event.availableTickets} tickets available • ${event.venueCity}`,
                    type: 'event-image',
                    eventId: event.eventId
                });
            }
        });

        // Add popular venues
        const venuesWithImages = venues
            .filter(venue => venue.imageUrl && venue.isActive)
            .sort((a, b) => (b.eventCount || 0) - (a.eventCount || 0));

        venuesWithImages.slice(0, 4).forEach(venue => {
            const imageUrl = getImageUrl(venue.imageUrl);
            if (imageUrl) {
                images.push({
                    id: `venue-${venue.venueId}`,
                    url: imageUrl,
                    title: venue.name,
                    subtitle: `${venue.city}, ${venue.state}`,
                    description: `Capacity: ${venue.capacity.toLocaleString()} • ${venue.eventCount || 0} events hosted`,
                    type: 'venue',
                    venueId: venue.venueId
                });
            }
        });

        setSlideshowImages(images);
    };

    const filteredEvents = events.filter(event => {
        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch = (
                (event.title || '').toLowerCase().includes(searchLower) ||
                (event.description || '').toLowerCase().includes(searchLower) ||
                (event.tags || '').toLowerCase().includes(searchLower) ||
                (event.organizerName || '').toLowerCase().includes(searchLower) ||
                (event.venueName || '').toLowerCase().includes(searchLower)
            );
            if (!matchesSearch) return false;
        }
        return event.isPublished; // Only show published events
    });

    const loadLikedEvents = () => {
        const saved = localStorage.getItem('likedEvents');
        if (saved) {
            setLikedEvents(new Set(JSON.parse(saved)));
        }
    };

    const toggleLike = (eventId: number) => {
        const newLikedEvents = new Set(likedEvents);
        if (newLikedEvents.has(eventId)) {
            newLikedEvents.delete(eventId);
        } else {
            newLikedEvents.add(eventId);
        }
        setLikedEvents(newLikedEvents);
        localStorage.setItem('likedEvents', JSON.stringify([...newLikedEvents]));
    };

    const fetchEvents = async () => {
        try {
            const response = await fetch('http://localhost:5251/api/events');
            if (response.ok) {
                const data = await response.json();
                setEvents(data);
            }
        } catch (error) {
            console.error('Failed to fetch events:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:5251/api/categories');
            if (response.ok) {
                const data = await response.json();
                setCategories(data);
            }
        } catch (error) {
            console.error('Failed to fetch categories:', error);
        }
    };

    const fetchVenues = async () => {
        try {
            const response = await fetch('http://localhost:5251/api/venues');
            if (response.ok) {
                const data = await response.json();
                setVenues(data);
            }
        } catch (error) {
            console.error('Failed to fetch venues:', error);
        }
    };

    const clearFilters = () => {
        setSearchTerm('');
        setShowFilters(false);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const formatTime = (dateString: string) => {
        return new Date(dateString).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit'
        });
    };

    const getDaysUntilEvent = (dateString: string) => {
        const eventDate = new Date(dateString);
        const today = new Date();
        const diffTime = eventDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const getVenueInfo = (venueId: number) => {
        return venues.find(v => v.venueId === venueId);
    };

    const getImageUrl = (imageUrl?: string) => {
        if (!imageUrl) return null;

        // Handle full URLs
        if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
            return imageUrl;
        }

        // Handle relative paths from your LocalImageStorageService
        if (imageUrl.startsWith('/')) {
            return `http://localhost:5251${imageUrl}`;
        }

        // Handle paths without leading slash
        return `http://localhost:5251/${imageUrl}`;
    };

    const shareEvent = async (event: Event) => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: event.title,
                    text: event.shortDescription || event.description,
                    url: `${window.location.origin}/events/${event.eventId}`,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            navigator.clipboard.writeText(`${window.location.origin}/events/${event.eventId}`);
            alert('Event link copied to clipboard!');
        }
    };

    if (isLoading || loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-6"></div>
                    <p className="text-gray-600 text-xl">Loading events...</p>
                </div>
            </div>
        );
    }

    const featuredEvents = filteredEvents.filter(event => event.isFeatured);
    const upcomingEvents = filteredEvents.filter(event =>
        getDaysUntilEvent(event.startDateTime) <= 7 &&
        getDaysUntilEvent(event.startDateTime) >= 0
    );
    const popularVenues = venues
        .filter(venue => venue.isActive)
        .sort((a, b) => (b.eventCount || 0) - (a.eventCount || 0))
        .slice(0, 6);

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundImage: 'url("/images/bg/background.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Header - Enhanced with theming */}
            <div className={`${themeClasses.backgroundHeader} backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b ${themeClasses.borderCard}`}>
                <div className="max-w-full mx-auto px-6 lg:px-8">
                    <div className={`flex justify-between items-center ${themeClasses.searchHeight}`}>
                        <div className="flex items-center">
                            <Calendar className={`${themeClasses.iconSizeLarge} ${themeClasses.accentText} mr-3`} />
                            <h1 className={`${themeClasses.fontSize.title} font-bold ${themeClasses.text}`}>EventHub</h1>
                        </div>
                        <div className="flex items-center space-x-6">
                            {/* User welcome message */}
                            <div className={`${themeClasses.fontSize.text} ${themeClasses.textSecondary}`}>
                                Welcome, {user?.firstName || 'Guest'}
                            </div>

                            {/* Event count */}
                            <div className={`flex items-center space-x-2 ${themeClasses.fontSize.text} ${themeClasses.textMuted}`}>
                                <Eye className={themeClasses.iconSizeSmall} />
                                <span>{events.length} events</span>
                            </div>

                            {/* My Tickets Button */}
                            {user && (
                                <button
                                    onClick={() => router.push('/mytickets')}
                                    className={`flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-lg ${themeClasses.buttonPadding} transition-colors duration-200 font-medium relative hidden sm:flex ${themeClasses.fontSize.button}`}
                                >
                                    <Ticket className={`${themeClasses.iconSizeSmall} mr-2`} />
                                    My Tickets
                                    {myTicketCount > 0 && (
                                        <span className={`ml-2 bg-white/20 text-white ${themeClasses.fontSize.subtitle} px-2 py-1 rounded-full`}>
                                            {myTicketCount}
                                        </span>
                                    )}
                                </button>
                            )}

                            {/* Profile/Login Button */}
                            <div className="flex items-center space-x-2">
                                {user ? (
                                    <div className="flex items-center space-x-3">
                                        <div className={`${themeClasses.iconSizeLarge} ${themeClasses.accent} rounded-full flex items-center justify-center text-white ${themeClasses.fontSize.text} font-medium overflow-hidden border-2 ${themeClasses.accentBorder}`}>
                                            {user.profileImageUrl ? (
                                                <img
                                                    src={getFullImageUrl(user.profileImageUrl)}
                                                    alt={`${user.firstName} ${user.lastName}`}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        const fallback = target.nextElementSibling as HTMLSpanElement;
                                                        if (fallback) {
                                                            fallback.style.display = 'block';
                                                        }
                                                    }}
                                                />
                                            ) : null}
                                            <span
                                                className={user.profileImageUrl ? 'hidden' : 'block'}
                                                style={{ display: user.profileImageUrl ? 'none' : 'block' }}
                                            >
                                                {user.firstName?.charAt(0) || 'U'}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => router.push('/profile')}
                                            className={`${themeClasses.fontSize.text} ${themeClasses.text} hover:${themeClasses.accentText} hidden md:block transition-colors`}
                                        >
                                            Profile
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => router.push('/login')}
                                        className={`${themeClasses.accent} ${themeClasses.accentHover} text-white ${themeClasses.buttonPadding} rounded-lg ${themeClasses.fontSize.text} transition-colors`}
                                    >
                                        Sign In
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Mobile My Tickets Button */}
                    {user && (
                        <div className={`sm:hidden ${themeClasses.paddingSmall}`}>
                            <button
                                onClick={() => router.push('/mytickets')}
                                className={`w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-lg ${themeClasses.buttonPadding} transition-colors duration-200 font-medium ${themeClasses.fontSize.button}`}
                            >
                                <Ticket className={`${themeClasses.iconSizeSmall} mr-2`} />
                                My Tickets
                                {myTicketCount > 0 && (
                                    <span className={`ml-2 bg-white/20 text-white ${themeClasses.fontSize.subtitle} px-2 py-1 rounded-full`}>
                                        {myTicketCount}
                                    </span>
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Hero Section - Clean with proper spacing */}
            <div className="text-gray-900">
                <div className={`max-w-full mx-auto px-6 lg:px-8 ${themeClasses.compactMode ? 'py-12' : 'py-16'}`}>
                    <div className="text-center">
                        <h2 className={`${themeClasses.fontSize.hero} font-bold text-white ${themeClasses.compactMode ? 'mb-3' : 'mb-4'} drop-shadow-lg`}>
                            Discover Events
                        </h2>
                        <p className={`${themeClasses.fontSize.heading} text-white/90 ${themeClasses.compactMode ? 'mb-8' : 'mb-12'} max-w-2xl mx-auto drop-shadow`}>
                            {filteredEvents.length} events across {categories.length} categories
                        </p>

                        {/* Search Bar - Floating with theming */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${themeClasses.iconSize} text-gray-400`} />
                                <input
                                    type="text"
                                    placeholder="Search events, venues, organizers..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className={`w-full pl-14 pr-20 ${themeClasses.compactMode ? 'py-3' : 'py-4'} text-gray-900 ${themeClasses.backgroundInput} backdrop-blur-sm border ${themeClasses.borderCard} rounded-2xl ${themeClasses.accentRing} ${themeClasses.shadow} ${themeClasses.fontSize.heading}`}
                                />
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${themeClasses.buttonPadding} ${themeClasses.accent} ${themeClasses.accentHover} text-white rounded-xl flex items-center space-x-2 transition-colors backdrop-blur-sm`}
                                >
                                    <Filter className={themeClasses.iconSizeSmall} />
                                    <span>Filters</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Stats Bar with proper spacing */}
                    <div className={`max-w-4xl mx-auto ${themeClasses.compactMode ? 'mt-8' : 'mt-12'}`}>
                        <div className={`grid grid-cols-1 md:grid-cols-3 ${themeClasses.gap}`}>
                            <div className={`text-center ${themeClasses.backgroundCard} backdrop-blur-sm rounded-2xl ${themeClasses.compactMode ? 'p-4' : 'p-6'} border ${themeClasses.borderCard}`}>
                                <div className={`${themeClasses.fontSize.section} font-bold text-white ${themeClasses.compactMode ? 'mb-1' : 'mb-2'}`}>{events.length}</div>
                                <div className={`text-white/80 ${themeClasses.fontSize.text}`}>Total Events</div>
                            </div>
                            <div className={`text-center ${themeClasses.backgroundCard} backdrop-blur-sm rounded-2xl ${themeClasses.compactMode ? 'p-4' : 'p-6'} border ${themeClasses.borderCard}`}>
                                <div className={`${themeClasses.fontSize.section} font-bold text-white ${themeClasses.compactMode ? 'mb-1' : 'mb-2'}`}>{categories.length}</div>
                                <div className={`text-white/80 ${themeClasses.fontSize.text}`}>Categories</div>
                            </div>
                            <div className={`text-center ${themeClasses.backgroundCard} backdrop-blur-sm rounded-2xl ${themeClasses.compactMode ? 'p-4' : 'p-6'} border ${themeClasses.borderCard}`}>
                                <div className={`${themeClasses.fontSize.section} font-bold text-white ${themeClasses.compactMode ? 'mb-1' : 'mb-2'}`}>{venues.length}</div>
                                <div className={`text-white/80 ${themeClasses.fontSize.text}`}>Venues</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-full mx-auto px-6 lg:px-8 py-8">
                {/* Image Gallery Slideshow Section */}
                {slideshowImages.length > 0 && (
                    <div className={themeClasses.marginSection}>
                        <div className={`text-center ${themeClasses.marginLarge}`}>
                            <h2 className={`${themeClasses.fontSize.section} font-bold text-white ${themeClasses.marginSmall} drop-shadow-lg`}>
                                Gallery Showcase
                            </h2>
                            <p className={`text-white/80 ${themeClasses.fontSize.heading} drop-shadow`}>Featured events and venues</p>
                        </div>

                        <div className={`${themeClasses.backgroundCard} backdrop-blur-sm rounded-3xl ${themeClasses.paddingLarge} border ${themeClasses.borderCard} ${themeClasses.shadow}`}>
                            <EventGallerySlideshow images={slideshowImages} autoPlay={true} themeClasses={themeClasses} />
                        </div>
                    </div>
                )}


                {/* All Events Grid */}
                <div className={themeClasses.marginSection}>
                    <div className={`text-center ${themeClasses.marginLarge}`}>
                        <h2 className={`${themeClasses.fontSize.section} font-bold text-white ${themeClasses.marginSmall} drop-shadow-lg`}>
                            {searchTerm ? `Search Results (${filteredEvents.length})` : `All Events (${filteredEvents.length})`}
                        </h2>
                        <p className={`text-white/80 ${themeClasses.fontSize.heading} drop-shadow`}>
                            {searchTerm ? `Results for "${searchTerm}"` : 'Explore all events'}
                        </p>
                    </div>

                    {filteredEvents.length === 0 ? (
                        <div className={`text-center ${themeClasses.paddingSection} ${themeClasses.backgroundCard} backdrop-blur-sm rounded-3xl border ${themeClasses.borderCard} ${themeClasses.shadow}`}>
                            <Calendar className={`${themeClasses.iconSizeLarge} text-white/50 mx-auto ${themeClasses.marginLarge}`} />
                            <h3 className={`${themeClasses.fontSize.title} font-semibold text-white ${themeClasses.marginSmall} drop-shadow`}>
                                {searchTerm ? 'No events found' : 'No events available'}
                            </h3>
                            <p className={`text-white/80 ${themeClasses.marginLarge} ${themeClasses.fontSize.heading} drop-shadow`}>
                                {searchTerm ? 'Try adjusting your search' : 'Events will appear here soon'}
                            </p>
                            {searchTerm && (
                                <button
                                    onClick={clearFilters}
                                    className={`${themeClasses.backgroundCard} ${themeClasses.hover} text-white ${themeClasses.buttonPadding} rounded-2xl transition-colors backdrop-blur-sm border ${themeClasses.borderCard}`}
                                >
                                    Clear Search
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${themeClasses.gap}`}>
                            {filteredEvents.map((event: Event, index: number) => {
                                const venue = getVenueInfo(event.venueId);
                                const daysUntil = getDaysUntilEvent(event.startDateTime);
                                const imageUrl = getImageUrl(event.bannerImageUrl || event.imageUrl);

                                return (
                                    <div key={event.eventId} className={`${themeClasses.backgroundCard} backdrop-blur-sm ${themeClasses.hover} rounded-2xl ${themeClasses.shadow} border ${themeClasses.borderCard} overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:${themeClasses.backgroundCard}`}>
                                        <div className="relative">
                                            <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500">
                                                {imageUrl ? (
                                                    <img
                                                        src={imageUrl}
                                                        alt={event.title}
                                                        className="w-full h-full object-cover"
                                                        loading="lazy"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.style.display = 'none';
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <Calendar className={`${themeClasses.iconSizeLarge} text-white opacity-50`} />
                                                    </div>
                                                )}
                                            </div>

                                            {daysUntil <= 3 && daysUntil >= 0 && (
                                                <div className="absolute top-3 left-3">
                                                    <span className={`${themeClasses.buttonPaddingSmall} bg-red-500/90 text-white ${themeClasses.fontSize.subtitle} font-bold rounded-full backdrop-blur-sm`}>
                                                        {daysUntil === 0 ? 'Today!' : daysUntil === 1 ? 'Tomorrow' : 'Soon!'}
                                                    </span>
                                                </div>
                                            )}

                                            <div className="absolute top-3 right-3 flex space-x-2">
                                                <button
                                                    onClick={() => toggleLike(event.eventId)}
                                                    className={`${themeClasses.paddingSmall} rounded-full ${likedEvents.has(event.eventId) ? 'text-red-500 bg-white/90' : 'text-white hover:text-red-500'} bg-black/20 hover:bg-white/90 transition-all backdrop-blur-sm`}
                                                >
                                                    <Heart className={`${themeClasses.iconSizeSmall} ${likedEvents.has(event.eventId) ? 'fill-current' : ''}`} />
                                                </button>
                                                <button
                                                    onClick={() => shareEvent(event)}
                                                    className={`${themeClasses.paddingSmall} rounded-full text-white hover:text-blue-400 bg-black/20 hover:bg-white/90 transition-all backdrop-blur-sm`}
                                                >
                                                    <Share className={themeClasses.iconSizeSmall} />
                                                </button>
                                            </div>

                                            {event.isFeatured && (
                                                <div className="absolute bottom-3 left-3">
                                                    <Star className={`${themeClasses.iconSize} text-yellow-400 fill-current`} />
                                                </div>
                                            )}
                                        </div>

                                        <div className={themeClasses.padding}>
                                            <div className={`flex items-center space-x-2 ${themeClasses.marginSmall}`}>
                                                <span className={`${themeClasses.buttonPaddingSmall} ${themeClasses.accentLight} ${themeClasses.accentText} ${themeClasses.fontSize.subtitle} font-medium rounded-full`}>
                                                    {event.categoryName}
                                                </span>
                                                {event.isOnline && (
                                                    <span className={`${themeClasses.buttonPaddingSmall} bg-green-100/80 text-green-800 ${themeClasses.fontSize.subtitle} font-medium rounded-full flex items-center space-x-1`}>
                                                        <Globe className={themeClasses.iconSizeSmall} />
                                                        <span>Online</span>
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className={`${themeClasses.fontSize.heading} font-semibold ${themeClasses.text} ${themeClasses.marginSmall} line-clamp-2`}>
                                                {event.title}
                                            </h3>

                                            <p className={`${themeClasses.textSecondary} ${themeClasses.fontSize.subtitle} ${themeClasses.marginSmall} line-clamp-2`}>
                                                {event.shortDescription || event.description}
                                            </p>

                                            <div className={`${themeClasses.spacing} ${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary} ${themeClasses.marginSmall}`}>
                                                <div className="flex items-center space-x-2">
                                                    <Calendar className={themeClasses.iconSizeSmall} />
                                                    <span>{formatDate(event.startDateTime)} at {formatTime(event.startDateTime)}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <MapPin className={themeClasses.iconSizeSmall} />
                                                    <span className="line-clamp-1">{event.isOnline ? 'Online Event' : `${event.venueName}, ${event.venueCity}`}</span>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-2">
                                                        <DollarSign className={themeClasses.iconSizeSmall} />
                                                        <span>From ${event.basePrice}</span>
                                                    </div>
                                                    {event.availableTickets < 50 && event.availableTickets > 0 && (
                                                        <span className={`text-orange-600 ${themeClasses.fontSize.subtitle} font-medium`}>
                                                            Limited!
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <Link
                                                href={`/events/${event.eventId}`}
                                                className={`block w-full bg-gradient-to-r ${themeClasses.accentGradient} hover:from-blue-700 hover:to-purple-700 text-white font-semibold ${themeClasses.buttonPadding} rounded-xl text-center transition-all duration-200 transform hover:scale-105 ${themeClasses.fontSize.text}`}
                                            >
                                                View & Book
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Popular Venues Section */}
                {popularVenues.length > 0 && (
                    <div className={`${themeClasses.marginSection} ${themeClasses.marginSection}`}>
                        <div className={`text-center ${themeClasses.marginLarge}`}>
                            <h2 className={`${themeClasses.fontSize.section} font-bold text-white ${themeClasses.marginSmall} drop-shadow-lg`}>
                                Premier Venues
                            </h2>
                            <p className={`text-white/80 ${themeClasses.fontSize.heading} drop-shadow`}>Top event locations</p>
                        </div>

                        <div className="overflow-x-auto pb-4">
                            <div className="flex space-x-6" style={{ width: `${popularVenues.length * 280}px` }}>
                                {popularVenues.map((venue: Venue, index: number) => {
                                    const venueImageUrl = getImageUrl(venue.imageUrl);

                                    return (
                                        <Link
                                            key={venue.venueId}
                                            href={`/venues/${venue.venueId}`}
                                            className={`block w-64 ${themeClasses.backgroundCard} backdrop-blur-sm ${themeClasses.hover} rounded-2xl ${themeClasses.shadow} border ${themeClasses.borderCard} overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:${themeClasses.backgroundCard} cursor-pointer group`}
                                        >
                                            <div className="relative">
                                                <div className="h-36 bg-gradient-to-r from-purple-400 to-pink-500">
                                                    {venueImageUrl ? (
                                                        <img
                                                            src={venueImageUrl}
                                                            alt={venue.name}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            loading="lazy"
                                                            onError={(e) => {
                                                                const target = e.target as HTMLImageElement;
                                                                target.style.display = 'none';
                                                            }}
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center">
                                                            <Building className={`${themeClasses.iconSizeLarge} text-white opacity-50`} />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="absolute top-3 right-3">
                                                    <span className={`${themeClasses.buttonPaddingSmall} ${themeClasses.backgroundCard} ${themeClasses.accentText} ${themeClasses.fontSize.subtitle} font-medium rounded-full backdrop-blur-sm`}>
                                                        {(venue.eventCount || 0) > 10 ? 'Hot' : 'Popular'}
                                                    </span>
                                                </div>
                                                {/* Hover overlay */}
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <div className={`${themeClasses.backgroundCard} backdrop-blur-sm rounded-full ${themeClasses.paddingSmall}`}>
                                                        <ArrowRight className={`${themeClasses.iconSize} ${themeClasses.accentText}`} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={themeClasses.paddingSmall}>
                                                <h3 className={`font-semibold ${themeClasses.text} ${themeClasses.marginSmall} line-clamp-1 group-hover:${themeClasses.accentText} transition-colors ${themeClasses.fontSize.text}`}>
                                                    {venue.name}
                                                </h3>
                                                <p className={`${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary} ${themeClasses.marginSmall} flex items-center space-x-1`}>
                                                    <MapPin className={themeClasses.iconSizeSmall} />
                                                    <span>{venue.city}, {venue.state}</span>
                                                </p>
                                                <div className={`${themeClasses.fontSize.subtitle} ${themeClasses.textMuted} ${themeClasses.marginSmall} flex items-center space-x-1`}>
                                                    <Users className={themeClasses.iconSizeSmall} />
                                                    <span>{venue.capacity.toLocaleString()} capacity</span>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* Footer */}
            <footer className={`${themeClasses.backgroundFooter} ${themeClasses.text} ${themeClasses.marginSection} ${themeClasses.shadow} border-t ${themeClasses.border}`} style={{ backgroundColor: themeClasses.isDarkMode ? undefined : 'white' }}>
                <div className={`max-w-7xl mx-auto px-6 lg:px-8 ${themeClasses.paddingLarge}`}>
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${themeClasses.gap}`}>
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className={`flex items-center ${themeClasses.marginSmall}`}>
                                <Calendar className={`${themeClasses.iconSizeLarge} ${themeClasses.accentText} mr-3`} />
                                <h3 className={`${themeClasses.fontSize.title} font-bold ${themeClasses.text}`}>EventHub</h3>
                            </div>
                            <p className={`${themeClasses.textSecondary} ${themeClasses.marginLarge} ${themeClasses.fontSize.text}`}>
                                Your premier destination for discovering and booking amazing events.
                                Connect with experiences that matter to you.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className={`${themeClasses.textSecondary} hover:${themeClasses.accentText} transition-colors`}>
                                    <svg className={`${themeClasses.iconSize}`} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a href="#" className={`${themeClasses.textSecondary} hover:${themeClasses.accentText} transition-colors`}>
                                    <svg className={`${themeClasses.iconSize}`} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                    </svg>
                                </a>
                                <a href="#" className={`${themeClasses.textSecondary} hover:${themeClasses.accentText} transition-colors`}>
                                    <svg className={`${themeClasses.iconSize}`} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                                    </svg>
                                </a>
                                <a href="#" className={`${themeClasses.textSecondary} hover:${themeClasses.accentText} transition-colors`}>
                                    <svg className={`${themeClasses.iconSize}`} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.002 2.005c2.405 0 2.688.009 3.637.052.877.04 1.354.187 1.671.31.42.163.72.358 1.035.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.949.052 1.232.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.671-.163.42-.358.72-.673 1.035-.315.315-.615.51-1.035.673-.317.123-.794.27-1.671.31-.949.043-1.232.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.671-.31-.42-.163-.72-.358-1.035-.673-.315-.315-.51-.615-.673-1.035-.123-.317-.27-.794-.31-1.671-.043-.949-.052-1.232-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.671.163-.42.358-.72.673-1.035.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.949-.043 1.232-.052 3.637-.052zm0-2.003c-2.444 0-2.751.01-3.712.054s-1.614.196-2.185.418c-.592.23-1.094.538-1.594 1.040-.502.502-.81 1.002-1.040 1.594-.222.571-.374 1.224-.418 2.185C3.012 7.254 3.002 7.561 3.002 10.005s.01 2.751.054 3.712.196 1.614.418 2.185c.23.592.538 1.094 1.040 1.594.502.502 1.002.81 1.594 1.040.571.222 1.224.374 2.185.418.961.044 1.268.054 3.712.054s2.751-.01 3.712-.054 1.614-.196 2.185-.418c.592-.23 1.094-.538 1.594-1.040.502-.502.81-1.002 1.040-1.594.222-.571.374-1.224.418-2.185.044-.961.054-1.268.054-3.712s-.01-2.751-.054-3.712-.196-1.614-.418-2.185c-.23-.592-.538-1.094-1.040-1.594-.502-.502-1.002-.81-1.594-1.040-.571-.222-1.224-.374-2.185-.418C14.753.015 14.446.005 12.002.005z" />
                                        <path d="M12.002 7.338a2.667 2.667 0 1 0 0 5.334 2.667 2.667 0 0 0 0-5.334zm0 4.394a1.727 1.727 0 1 1 0-3.454 1.727 1.727 0 0 1 0 3.454z" />
                                        <circle cx="14.692" cy="7.338" r=".533" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className={`${themeClasses.fontSize.heading} font-semibold ${themeClasses.marginSmall} ${themeClasses.text}`}>Quick Links</h4>
                            <ul className={themeClasses.spacing}>
                                <li><a href="/" className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors ${themeClasses.fontSize.text}`}>Home</a></li>
                                <li><a href="/events" className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors ${themeClasses.fontSize.text}`}>Browse Events</a></li>
                                <li><a href="/categories" className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors ${themeClasses.fontSize.text}`}>Categories</a></li>
                                <li><a href="/venues" className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors ${themeClasses.fontSize.text}`}>Venues</a></li>
                                <li><a href="/organizer" className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors ${themeClasses.fontSize.text}`}>Become an Organizer</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className={`${themeClasses.fontSize.heading} font-semibold ${themeClasses.marginSmall} ${themeClasses.text}`}>Contact Us</h4>
                            <div className={themeClasses.spacing}>
                                <div className="flex items-start space-x-3">
                                    <MapPin className={`${themeClasses.iconSize} ${themeClasses.accentText} flex-shrink-0 mt-0.5`} />
                                    <span className={`${themeClasses.textSecondary} ${themeClasses.fontSize.text}`}>
                                        123 Event Street<br />
                                        Shah Alam, Selangor 40150<br />
                                        Malaysia
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className={`${themeClasses.iconSize} ${themeClasses.accentText} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a href="tel:+60123456789" className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors ${themeClasses.fontSize.text}`}>
                                        +60 12-345 6789
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className={`${themeClasses.iconSize} ${themeClasses.accentText} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:info@eventhub.com" className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors ${themeClasses.fontSize.text}`}>
                                        info@eventhub.com
                                    </a>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Clock className={`${themeClasses.iconSize} ${themeClasses.accentText} flex-shrink-0 mt-0.5`} />
                                    <span className={`${themeClasses.textSecondary} ${themeClasses.fontSize.text}`}>
                                        Mon - Fri: 9:00 AM - 6:00 PM<br />
                                        Sat - Sun: 10:00 AM - 4:00 PM
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className={`${themeClasses.fontSize.heading} font-semibold ${themeClasses.marginSmall} ${themeClasses.text}`}>Support</h4>
                            <ul className={themeClasses.spacing}>
                                <li><a href="/help" className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors ${themeClasses.fontSize.text}`}>Help Center</a></li>
                                <li><a href="/faq" className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors ${themeClasses.fontSize.text}`}>FAQ</a></li>
                                <li><a href="/contact" className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors ${themeClasses.fontSize.text}`}>Contact Support</a></li>
                                <li><a href="/privacy" className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors ${themeClasses.fontSize.text}`}>Privacy Policy</a></li>
                                <li><a href="/terms" className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors ${themeClasses.fontSize.text}`}>Terms of Service</a></li>
                            </ul>

                            {/* Newsletter Signup */}
                            <div className={themeClasses.marginLarge}>
                                <h5 className={`${themeClasses.fontSize.subtitle} font-semibold ${themeClasses.marginSmall} ${themeClasses.text}`}>Stay Updated</h5>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className={`flex-1 ${themeClasses.buttonPaddingSmall} ${themeClasses.backgroundInput} border ${themeClasses.border} rounded-l-lg ${themeClasses.text} ${themeClasses.fontSize.subtitle} ${themeClasses.accentRing}`}
                                    />
                                    <button className={`${themeClasses.buttonPaddingSmall} ${themeClasses.accent} ${themeClasses.accentHover} text-white rounded-r-lg transition-colors`}>
                                        <svg className={themeClasses.iconSizeSmall} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className={`border-t ${themeClasses.border} ${themeClasses.marginLarge} ${themeClasses.paddingLarge}`}>
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className={`${themeClasses.textSecondary} ${themeClasses.fontSize.subtitle} mb-4 md:mb-0`}>
                                © {new Date().getFullYear()} EventHub. All rights reserved.
                            </div>
                            <div className={`flex items-center space-x-6 ${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>
                                <div className="flex items-center space-x-2">
                                    <Globe className={themeClasses.iconSizeSmall} />
                                    <span>Available Worldwide</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}