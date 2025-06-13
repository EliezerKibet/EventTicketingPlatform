/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
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

// Enhanced Image Slideshow Component
const EventGallerySlideshow = ({ images, autoPlay = true }: {
    images: SlideshowImage[],
    autoPlay?: boolean
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
            <div className="w-full h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                    <Camera className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-xl">No images available</p>
                </div>
            </div>
        );
    }

    const currentImage = images[currentIndex];

    return (
        <>
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl group bg-gray-100">
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
                        <div className="w-full h-full bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
                            <div className="text-center text-white">
                                <Image className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                <p className="text-sm">Image not available</p>
                            </div>
                        </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Image Info */}
                    <div className="absolute bottom-6 left-6 text-white max-w-lg">
                        <div className="flex items-center mb-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium mr-4 ${currentImage.type === 'featured-banner' ? 'bg-yellow-500' :
                                currentImage.type === 'event-image' ? 'bg-blue-500' :
                                    currentImage.type === 'venue' ? 'bg-green-500' : 'bg-orange-500'
                                }`}>
                                {currentImage.type === 'featured-banner' ? 'Featured' :
                                    currentImage.type === 'event-image' ? 'Event' :
                                        currentImage.type === 'venue' ? 'Venue' : 'This Week'}
                            </span>
                            <span className="text-sm opacity-75">
                                {currentIndex + 1} of {images.length}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 line-clamp-2">{currentImage.title}</h3>
                        <p className="text-lg opacity-90 line-clamp-2">{currentImage.subtitle}</p>
                        {currentImage.description && (
                            <p className="text-sm opacity-75 mt-2 line-clamp-2">{currentImage.description}</p>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="absolute top-6 right-6 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={togglePlayPause}
                            className="p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                            title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                        >
                            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                        </button>
                        <button
                            onClick={() => setShowModal(true)}
                            className="p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                            title="View full size"
                        >
                            <ZoomIn className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={goToPrevious}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all"
                                title="Previous image"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                            <button
                                onClick={goToNext}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all"
                                title="Next image"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>
                        </>
                    )}

                    {/* Dot Indicators */}
                    {images.length > 1 && (
                        <div className="absolute bottom-6 right-6 flex space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
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
                <div className="flex space-x-4 mt-6 overflow-x-auto pb-2">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${index === currentIndex
                                ? 'border-blue-500 scale-110 shadow-lg'
                                : 'border-gray-200 hover:border-gray-400 opacity-75 hover:opacity-100'
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
                                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                    <Image className="h-4 w-4 text-gray-500" />
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
                            <div className="w-96 h-64 bg-gray-600 rounded-lg flex items-center justify-center">
                                <div className="text-center text-white">
                                    <Image className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                    <p>Image not available</p>
                                </div>
                            </div>
                        )}

                        <div className="absolute bottom-4 left-4 text-white bg-black/50 rounded-lg p-4 max-w-md backdrop-blur-sm">
                            <h3 className="text-xl font-bold">{currentImage.title}</h3>
                            <p className="opacity-90">{currentImage.subtitle}</p>
                            {currentImage.description && (
                                <p className="text-sm opacity-75 mt-1">{currentImage.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
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
            {/* Header - Glass effect */}
            <div className="bg-white/80 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-white/20">
                <div className="max-w-full mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <Calendar className="h-8 w-8 text-blue-600 mr-3" />
                            <h1 className="text-2xl font-bold text-gray-900">EventHub</h1>
                        </div>
                        <div className="flex items-center space-x-6">
                            <div className="text-sm text-gray-600">
                                Welcome, {user?.firstName || 'Guest'}
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <Eye className="h-4 w-4" />
                                <span>{events.length} events</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section - Clean */}
            <div className="text-gray-900">
                <div className="max-w-full mx-auto px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                            Discover Events
                        </h2>
                        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow">
                            {filteredEvents.length} events across {categories.length} categories
                        </p>

                        {/* Search Bar - Floating */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search events, venues, organizers..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-14 pr-20 py-4 text-gray-900 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white shadow-2xl text-lg"
                                />
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-600/90 hover:bg-blue-700 text-white rounded-xl flex items-center space-x-2 transition-colors backdrop-blur-sm"
                                >
                                    <Filter className="h-4 w-4" />
                                    <span>Filters</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-full mx-auto px-6 lg:px-8 py-8">
                {/* Image Gallery Slideshow Section */}
                {slideshowImages.length > 0 && (
                    <div className="mb-20">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                                Gallery Showcase
                            </h2>
                            <p className="text-white/80 text-lg drop-shadow">Featured events and venues</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                            <EventGallerySlideshow images={slideshowImages} autoPlay={true} />
                        </div>
                    </div>
                )}

                {/* All Events Grid */}
                <div className="mb-20">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                            {searchTerm ? `Search Results (${filteredEvents.length})` : `All Events (${filteredEvents.length})`}
                        </h2>
                        <p className="text-white/80 text-lg drop-shadow">
                            {searchTerm ? `Results for "${searchTerm}"` : 'Explore all events'}
                        </p>
                    </div>

                    {filteredEvents.length === 0 ? (
                        <div className="text-center py-20 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl">
                            <Calendar className="h-16 w-16 text-white/50 mx-auto mb-6" />
                            <h3 className="text-2xl font-semibold text-white mb-4 drop-shadow">
                                {searchTerm ? 'No events found' : 'No events available'}
                            </h3>
                            <p className="text-white/80 mb-6 text-lg drop-shadow">
                                {searchTerm ? 'Try adjusting your search' : 'Events will appear here soon'}
                            </p>
                            {searchTerm && (
                                <button
                                    onClick={clearFilters}
                                    className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-2xl transition-colors backdrop-blur-sm border border-white/30"
                                >
                                    Clear Search
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredEvents.map((event: Event, index: number) => {
                                const venue = getVenueInfo(event.venueId);
                                const daysUntil = getDaysUntilEvent(event.startDateTime);
                                const imageUrl = getImageUrl(event.bannerImageUrl || event.imageUrl);

                                return (
                                    <div key={event.eventId} className="bg-white/90 backdrop-blur-sm hover:shadow-2xl rounded-2xl shadow-lg border border-white/30 overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/95">
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
                                                        <Calendar className="h-8 w-8 text-white opacity-50" />
                                                    </div>
                                                )}
                                            </div>

                                            {daysUntil <= 3 && daysUntil >= 0 && (
                                                <div className="absolute top-3 left-3">
                                                    <span className="px-3 py-1 bg-red-500/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                                                        {daysUntil === 0 ? 'Today!' : daysUntil === 1 ? 'Tomorrow' : 'Soon!'}
                                                    </span>
                                                </div>
                                            )}

                                            <div className="absolute top-3 right-3 flex space-x-2">
                                                <button
                                                    onClick={() => toggleLike(event.eventId)}
                                                    className={`p-2 rounded-full ${likedEvents.has(event.eventId) ? 'text-red-500 bg-white/90' : 'text-white hover:text-red-500'} bg-black/20 hover:bg-white/90 transition-all backdrop-blur-sm`}
                                                >
                                                    <Heart className={`h-4 w-4 ${likedEvents.has(event.eventId) ? 'fill-current' : ''}`} />
                                                </button>
                                                <button
                                                    onClick={() => shareEvent(event)}
                                                    className="p-2 rounded-full text-white hover:text-blue-400 bg-black/20 hover:bg-white/90 transition-all backdrop-blur-sm"
                                                >
                                                    <Share className="h-4 w-4" />
                                                </button>
                                            </div>

                                            {event.isFeatured && (
                                                <div className="absolute bottom-3 left-3">
                                                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-5">
                                            <div className="flex items-center space-x-2 mb-3">
                                                <span className="px-3 py-1 bg-blue-100/80 text-blue-800 text-xs font-medium rounded-full">
                                                    {event.categoryName}
                                                </span>
                                                {event.isOnline && (
                                                    <span className="px-3 py-1 bg-green-100/80 text-green-800 text-xs font-medium rounded-full flex items-center space-x-1">
                                                        <Globe className="h-3 w-3" />
                                                        <span>Online</span>
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                                {event.title}
                                            </h3>

                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                {event.shortDescription || event.description}
                                            </p>

                                            <div className="space-y-2 text-sm text-gray-600 mb-4">
                                                <div className="flex items-center space-x-2">
                                                    <Calendar className="h-3 w-3" />
                                                    <span>{formatDate(event.startDateTime)} at {formatTime(event.startDateTime)}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <MapPin className="h-3 w-3" />
                                                    <span className="line-clamp-1">{event.isOnline ? 'Online Event' : `${event.venueName}, ${event.venueCity}`}</span>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-2">
                                                        <DollarSign className="h-3 w-3" />
                                                        <span>From ${event.basePrice}</span>
                                                    </div>
                                                    {event.availableTickets < 50 && event.availableTickets > 0 && (
                                                        <span className="text-orange-600 text-xs font-medium">
                                                            Limited!
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <Link
                                                href={`/events/${event.eventId}`}
                                                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl text-center transition-all duration-200 transform hover:scale-105"
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
                    <div className="mt-20 mb-20">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                                Premier Venues
                            </h2>
                            <p className="text-white/80 text-lg drop-shadow">Top event locations</p>
                        </div>

                        <div className="overflow-x-auto pb-4">
                            <div className="flex space-x-6" style={{ width: `${popularVenues.length * 280}px` }}>
                                {popularVenues.map((venue: Venue, index: number) => {
                                    const venueImageUrl = getImageUrl(venue.imageUrl);

                                    return (
                                        <div key={venue.venueId} className="w-64 bg-white/90 backdrop-blur-sm hover:shadow-2xl rounded-2xl shadow-lg border border-white/30 overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/95">
                                            <div className="relative">
                                                <div className="h-36 bg-gradient-to-r from-purple-400 to-pink-500">
                                                    {venueImageUrl ? (
                                                        <img
                                                            src={venueImageUrl}
                                                            alt={venue.name}
                                                            className="w-full h-full object-cover"
                                                            loading="lazy"
                                                            onError={(e) => {
                                                                const target = e.target as HTMLImageElement;
                                                                target.style.display = 'none';
                                                            }}
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center">
                                                            <Building className="h-8 w-8 text-white opacity-50" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="absolute top-3 right-3">
                                                    <span className="px-2 py-1 bg-white/90 text-purple-600 text-xs font-medium rounded-full backdrop-blur-sm">
                                                        {(venue.eventCount || 0) > 10 ? 'Hot' : 'Popular'}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="p-4">
                                                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{venue.name}</h3>
                                                <p className="text-sm text-gray-600 mb-2 flex items-center space-x-1">
                                                    <MapPin className="h-3 w-3" />
                                                    <span>{venue.city}, {venue.state}</span>
                                                </p>
                                                <div className="text-xs text-gray-500 mb-3 flex items-center space-x-1">
                                                    <Users className="h-3 w-3" />
                                                    <span>{venue.capacity.toLocaleString()} capacity</span>
                                                </div>
                                                {venue.website && (
                                                    <div className="text-sm text-blue-600 hover:text-blue-800">
                                                        <a href={venue.website} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                                            <Globe className="h-3 w-3" />
                                                            <span>Visit</span>
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}