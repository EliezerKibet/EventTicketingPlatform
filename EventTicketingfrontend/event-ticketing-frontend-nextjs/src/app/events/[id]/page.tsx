/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
// app/events/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
    Calendar,
    MapPin,
    Clock,
    Users,
    ArrowLeft,
    ShoppingCart,
    Plus,
    Minus,
    Star,
    Share,
    Heart,
    ChevronLeft,
    ChevronRight,
    Play,
    Pause,
    ZoomIn,
    X,
    Image,
    Building,
    Globe
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

// Types
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

interface TicketType {
    ticketTypeId: number;
    eventId: number;
    eventTitle: string;
    name: string;
    description?: string;
    price: number;
    quantityAvailable: number;
    quantitySold: number;
    quantityRemaining: number;
    saleStartDate?: string;
    saleEndDate?: string;
    minQuantityPerOrder: number;
    maxQuantityPerOrder: number;
    isActive: boolean;
    isOnSale: boolean;
    sortOrder: number;
}

interface CartItem {
    ticketTypeId: number;
    name: string;
    price: number;
    quantity: number;
    maxQuantity: number;
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

interface SlideImage {
    id: string;
    url: string;
    title: string;
    subtitle: string;
    type: 'event-banner' | 'event-image' | 'venue';
}

// Hero Slideshow Component
const EventHeroSlideshow = ({ images, autoPlay = true }: {
    images: SlideImage[],
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
        }, 4000);

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
            <div className="h-64 md:h-96 bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center">
                <Calendar className="h-24 w-24 text-white opacity-50" />
            </div>
        );
    }

    const currentImage = images[currentIndex];

    return (
        <>
            <div className="relative h-64 md:h-96 overflow-hidden group">
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
                        <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center">
                            <div className="text-center text-white">
                                <Image className="h-16 w-16 mx-auto mb-2 opacity-50" />
                                <p className="text-lg">Image not available</p>
                            </div>
                        </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Image Type Badge */}
                    <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${currentImage.type === 'event-banner' ? 'bg-yellow-500' :
                            currentImage.type === 'event-image' ? 'bg-blue-500' : 'bg-green-500'
                            } text-white`}>
                            {currentImage.type === 'event-banner' ? 'Event Banner' :
                                currentImage.type === 'event-image' ? 'Event Gallery' : 'Venue'}
                        </span>
                    </div>

                    {/* Controls */}
                    {images.length > 1 && (
                        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={togglePlayPause}
                                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm"
                                title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                            >
                                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                            </button>
                            <button
                                onClick={() => setShowModal(true)}
                                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm"
                                title="View full size"
                            >
                                <ZoomIn className="h-4 w-4" />
                            </button>
                        </div>
                    )}

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={goToPrevious}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
                                title="Previous image"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={goToNext}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
                                title="Next image"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </>
                    )}

                    {/* Dot Indicators */}
                    {images.length > 1 && (
                        <div className="absolute bottom-4 right-4 flex space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
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

            {/* Modal for Full Size View */}
            {showModal && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-6xl max-h-full">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10"
                            title="Close"
                        >
                            <X className="h-5 w-5" />
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

                        <div className="absolute bottom-4 left-4 text-white bg-black/50 rounded-lg p-3 max-w-md backdrop-blur-sm">
                            <h3 className="text-lg font-bold">{currentImage.title}</h3>
                            <p className="opacity-90 text-sm">{currentImage.subtitle}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default function EventDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const { isAuthenticated } = useAuth();
    const eventId = params.id as string;

    const [event, setEvent] = useState<Event | null>(null);
    const [venue, setVenue] = useState<Venue | null>(null);
    const [ticketTypes, setTicketTypes] = useState<TicketType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [cart, setCart] = useState<CartItem[]>([]);
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
    const [isLiked, setIsLiked] = useState(false);
    const [slideImages, setSlideImages] = useState<SlideImage[]>([]);

    useEffect(() => {
        if (eventId) {
            fetchEventDetails();
            fetchTicketTypes();
            loadCartFromStorage();
        }
    }, [eventId]);

    useEffect(() => {
        if (event) {
            fetchVenueDetails();
            generateSlideImages();
        }
    }, [event]);

    useEffect(() => {
        if (venue && event) {
            generateSlideImages();
        }
    }, [venue, event]);

    const generateSlideImages = () => {
        if (!event) return;

        const images: SlideImage[] = [];

        // Add event banner if available and not NULL
        if (event.bannerImageUrl && event.bannerImageUrl !== 'NULL' && event.bannerImageUrl.trim() !== '') {
            const imageUrl = getImageUrl(event.bannerImageUrl);
            if (imageUrl) {
                images.push({
                    id: 'event-banner',
                    url: imageUrl,
                    title: event.title,
                    subtitle: 'Event Banner',
                    type: 'event-banner'
                });
            }
        }

        // Add event image if different from banner and not NULL
        if (event.imageUrl &&
            event.imageUrl !== 'NULL' &&
            event.imageUrl.trim() !== '' &&
            event.imageUrl !== event.bannerImageUrl) {
            const imageUrl = getImageUrl(event.imageUrl);
            if (imageUrl) {
                images.push({
                    id: 'event-image',
                    url: imageUrl,
                    title: event.title,
                    subtitle: 'Event Image',
                    type: 'event-image'
                });
            }
        }

        // Add venue image if available, not online event, and not NULL
        if (venue &&
            venue.imageUrl &&
            venue.imageUrl !== 'NULL' &&
            venue.imageUrl.trim() !== '' &&
            !event.isOnline) {
            const imageUrl = getImageUrl(venue.imageUrl);
            if (imageUrl) {
                images.push({
                    id: 'venue-image',
                    url: imageUrl,
                    title: venue.name,
                    subtitle: `${venue.city}, ${venue.state}`,
                    type: 'venue'
                });
            }
        }

        setSlideImages(images);
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

    const fetchVenueDetails = async () => {
        if (!event) return;

        try {
            const response = await fetch(`http://localhost:5251/api/venues/${event.venueId}`);
            if (response.ok) {
                const data = await response.json();
                setVenue(data);
            }
        } catch (error) {
            console.error('Failed to fetch venue details:', error);
        }
    };

    const loadCartFromStorage = () => {
        const saved = localStorage.getItem('eventCart');
        if (saved) {
            try {
                const cartData = JSON.parse(saved);
                setCart(cartData);
            } catch (error) {
                console.error('Failed to load cart from storage:', error);
            }
        }
    };

    const saveCartToStorage = (cartData: CartItem[]) => {
        localStorage.setItem('eventCart', JSON.stringify(cartData));
    };

    const fetchEventDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5251/api/events/${eventId}`);
            if (response.ok) {
                const data = await response.json();
                setEvent(data);
            } else {
                setError('Event not found');
            }
        } catch (error) {
            setError('Failed to load event details');
        } finally {
            setLoading(false);
        }
    };

    const fetchTicketTypes = async () => {
        try {
            const response = await fetch(`http://localhost:5251/api/tickets/event/${eventId}/ticket-types`);
            if (response.ok) {
                const data = await response.json();
                setTicketTypes(data);
                const initialQuantities: { [key: number]: number } = {};
                data.forEach((ticket: TicketType) => {
                    initialQuantities[ticket.ticketTypeId] = 0;
                });
                setQuantities(initialQuantities);
            }
        } catch (error) {
            console.error('Failed to fetch ticket types:', error);
        }
    };

    const updateQuantity = (ticketTypeId: number, change: number) => {
        const ticketType = ticketTypes.find(t => t.ticketTypeId === ticketTypeId);
        if (!ticketType) return;

        setQuantities(prev => {
            const currentQuantity = prev[ticketTypeId] || 0;
            const newQuantity = Math.max(0, Math.min(
                currentQuantity + change,
                Math.min(ticketType.maxQuantityPerOrder, ticketType.quantityRemaining)
            ));
            return { ...prev, [ticketTypeId]: newQuantity };
        });
    };

    const addToCart = (ticketType: TicketType) => {
        const quantity = quantities[ticketType.ticketTypeId] || 0;
        if (quantity === 0) return;

        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.ticketTypeId === ticketType.ticketTypeId);
            let newCart;

            if (existingItem) {
                newCart = prevCart.map(item =>
                    item.ticketTypeId === ticketType.ticketTypeId
                        ? { ...item, quantity: Math.min(item.quantity + quantity, item.maxQuantity) }
                        : item
                );
            } else {
                newCart = [...prevCart, {
                    ticketTypeId: ticketType.ticketTypeId,
                    name: ticketType.name,
                    price: ticketType.price,
                    quantity,
                    maxQuantity: ticketType.maxQuantityPerOrder
                }];
            }

            saveCartToStorage(newCart);
            return newCart;
        });

        setQuantities(prev => ({ ...prev, [ticketType.ticketTypeId]: 0 }));
    };

    const updateCartQuantity = (ticketTypeId: number, newQuantity: number) => {
        if (newQuantity === 0) {
            setCart(prevCart => {
                const newCart = prevCart.filter(item => item.ticketTypeId !== ticketTypeId);
                saveCartToStorage(newCart);
                return newCart;
            });
        } else {
            setCart(prevCart => {
                const newCart = prevCart.map(item =>
                    item.ticketTypeId === ticketTypeId ? { ...item, quantity: newQuantity } : item
                );
                saveCartToStorage(newCart);
                return newCart;
            });
        }
    };

    const removeFromCart = (ticketTypeId: number) => {
        setCart(prevCart => {
            const newCart = prevCart.filter(item => item.ticketTypeId !== ticketTypeId);
            saveCartToStorage(newCart);
            return newCart;
        });
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const handlePurchase = () => {
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }
        if (cart.length === 0) {
            alert('Please add tickets to your cart first');
            return;
        }
        router.push(`/checkout?eventId=${eventId}`);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatTime = (dateString: string) => {
        return new Date(dateString).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit'
        });
    };

    const shareEvent = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: event?.title,
                    text: event?.description,
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Event link copied to clipboard!');
        }
    };

    if (loading) {
        return (
            <div
                className="min-h-screen flex items-center justify-center"
                style={{
                    backgroundImage: 'url("/images/bg/background.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-2xl">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 text-xl">Loading event...</p>
                </div>
            </div>
        );
    }

    if (error || !event) {
        return (
            <div
                className="min-h-screen flex items-center justify-center"
                style={{
                    backgroundImage: 'url("/images/bg/background.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-2xl">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
                    <p className="text-gray-600 mb-8">{error}</p>
                    <button
                        onClick={() => router.push('/events')}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Back to Events
                    </button>
                </div>
            </div>
        );
    }

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
            {/* Back Button */}
            <div className="bg-white/80 backdrop-blur-xl border-b border-white/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            Back to Events
                        </button>

                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setIsLiked(!isLiked)}
                                className={`p-2 rounded-full transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                            >
                                <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
                            </button>
                            <button
                                onClick={shareEvent}
                                className="p-2 rounded-full text-gray-400 hover:text-blue-500 transition-colors"
                            >
                                <Share className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section with Slideshow */}
            <div className="relative">
                {slideImages.length > 0 ? (
                    <EventHeroSlideshow images={slideImages} autoPlay={true} />
                ) : (
                    // Fallback hero section when no images are available
                    <div className="h-64 md:h-96 bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center">
                        <Calendar className="h-24 w-24 text-white opacity-50" />
                    </div>
                )}

                {/* Event Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="text-white">
                            <div className="flex items-center mb-2">
                                <span className="px-3 py-1 bg-blue-600/90 text-white text-sm font-medium rounded-full mr-4 backdrop-blur-sm">
                                    {event.categoryName}
                                </span>
                                {event.isFeatured && (
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 mr-1 fill-current text-yellow-400" />
                                        <span className="text-sm">Featured</span>
                                    </div>
                                )}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{event.title}</h1>
                            <div className="flex flex-wrap items-center gap-4 text-lg drop-shadow">
                                <div className="flex items-center">
                                    <Calendar className="h-5 w-5 mr-2" />
                                    <span>{formatDate(event.startDateTime)}</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="h-5 w-5 mr-2" />
                                    <span>{formatTime(event.startDateTime)}</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="h-5 w-5 mr-2" />
                                    <span>{event.isOnline ? 'Online Event' : `${event.venueName}, ${event.venueCity}`}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Event Details */}
                    <div className="lg:col-span-2">
                        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6 mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
                            <div className="prose max-w-none">
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{event.description}</p>
                            </div>

                            {event.isOnline && event.onlineUrl && (
                                <div className="mt-6 p-4 bg-blue-50/60 border border-blue-200/40 rounded-xl backdrop-blur-sm">
                                    <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                                        <Globe className="h-5 w-5 mr-2" />
                                        Online Event
                                    </h3>
                                    <p className="text-blue-800">This event will be held online. Access details will be provided after purchase.</p>
                                </div>
                            )}

                            {event.tags && (
                                <div className="mt-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {event.tags.split(',').map((tag, index) => (
                                            <span key={index} className="px-3 py-1 bg-gray-100/60 text-gray-800 rounded-full text-sm backdrop-blur-sm border border-gray-200/30">
                                                {tag.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Organizer Info */}
                        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6 mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Organizer</h3>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-blue-100/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <Users className="h-6 w-6 text-blue-600" />
                                </div>
                                <div className="ml-4">
                                    <p className="font-medium text-gray-900">{event.organizerName}</p>
                                    <p className="text-gray-700">Event Organizer</p>
                                </div>
                            </div>
                        </div>

                        {/* Venue Info */}
                        {venue && !event.isOnline && (
                            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Venue Information</h3>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-purple-100/80 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                                        <Building className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div className="ml-4 flex-1">
                                        <p className="font-medium text-gray-900">{venue.name}</p>
                                        <p className="text-gray-700 mb-2">{venue.address}</p>
                                        <p className="text-gray-700 mb-2">{venue.city}, {venue.state} {venue.zipCode}</p>
                                        <div className="flex items-center text-sm text-gray-600 mb-2">
                                            <Users className="h-4 w-4 mr-1" />
                                            <span>Capacity: {venue.capacity.toLocaleString()}</span>
                                        </div>
                                        {venue.website && (
                                            <a
                                                href={venue.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                                            >
                                                <Globe className="h-4 w-4 mr-1" />
                                                Visit Website
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Ticket Purchase Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/75 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6 sticky top-4">
                            {/* Cart Summary at top if items exist */}
                            {cart.length > 0 && (
                                <div className="mb-6 p-4 bg-green-50/70 border border-green-200/40 rounded-xl backdrop-blur-sm">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-semibold text-green-900 flex items-center">
                                            <ShoppingCart className="h-4 w-4 mr-2" />
                                            In Your Cart
                                        </h4>
                                        <span className="text-sm text-green-800">{getTotalItems()} items</span>
                                    </div>
                                    <div className="space-y-2">
                                        {cart.map((item) => (
                                            <div key={item.ticketTypeId} className="flex justify-between items-center text-sm">
                                                <span className="text-green-800">{item.name} x{item.quantity}</span>
                                                <div className="flex items-center space-x-2">
                                                    <span className="font-semibold text-green-900">${(item.price * item.quantity).toFixed(2)}</span>
                                                    <button
                                                        onClick={() => removeFromCart(item.ticketTypeId)}
                                                        className="text-red-500 hover:text-red-700 text-xs"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-t border-green-200/50 pt-2 mt-2">
                                        <div className="flex justify-between font-bold text-green-900">
                                            <span>Total: ${getTotalPrice().toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-gray-900 mb-4">Get Tickets</h3>

                            {/* Event Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="text-center p-3 bg-blue-50/70 rounded-xl backdrop-blur-sm border border-blue-100/40">
                                    <p className="text-2xl font-bold text-blue-600">{event.ticketsSold}</p>
                                    <p className="text-sm text-gray-700">Tickets Sold</p>
                                </div>
                                <div className="text-center p-3 bg-green-50/70 rounded-xl backdrop-blur-sm border border-green-100/40">
                                    <p className="text-2xl font-bold text-green-600">{event.availableTickets}</p>
                                    <p className="text-sm text-gray-700">Available</p>
                                </div>
                            </div>

                            {/* Ticket Types */}
                            <div className="space-y-4">
                                {ticketTypes.length === 0 ? (
                                    <div className="text-center py-8">
                                        <p className="text-gray-700">No tickets available yet</p>
                                    </div>
                                ) : (
                                    ticketTypes.map((ticketType) => (
                                        <div key={ticketType.ticketTypeId} className="border border-gray-200/40 rounded-xl p-4 bg-white/40 backdrop-blur-sm">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-gray-900">{ticketType.name}</h4>
                                                    {ticketType.description && (
                                                        <p className="text-sm text-gray-700 mt-1">{ticketType.description}</p>
                                                    )}
                                                </div>
                                                <p className="text-lg font-bold text-gray-900 ml-4">
                                                    ${ticketType.price.toFixed(2)}
                                                </p>
                                            </div>

                                            <div className="flex justify-between items-center text-sm text-gray-700 mb-3">
                                                <span>{ticketType.quantityRemaining} remaining</span>
                                                <span>Max {ticketType.maxQuantityPerOrder} per order</span>
                                            </div>

                                            {ticketType.isOnSale && ticketType.quantityRemaining > 0 ? (
                                                <div className="space-y-3">
                                                    {/* Quantity Selector */}
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-sm font-medium text-gray-800">Quantity:</span>
                                                        <div className="flex items-center space-x-2">
                                                            <button
                                                                onClick={() => updateQuantity(ticketType.ticketTypeId, -1)}
                                                                disabled={quantities[ticketType.ticketTypeId] === 0}
                                                                className="w-8 h-8 border border-gray-300/60 rounded flex items-center justify-center text-gray-600 hover:bg-gray-50/80 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                                                            >
                                                                <Minus className="h-4 w-4" />
                                                            </button>
                                                            <span className="w-8 text-center font-medium text-gray-900">
                                                                {quantities[ticketType.ticketTypeId] || 0}
                                                            </span>
                                                            <button
                                                                onClick={() => updateQuantity(ticketType.ticketTypeId, 1)}
                                                                disabled={quantities[ticketType.ticketTypeId] >= Math.min(ticketType.maxQuantityPerOrder, ticketType.quantityRemaining)}
                                                                className="w-8 h-8 border border-gray-300/60 rounded flex items-center justify-center text-gray-600 hover:bg-gray-50/80 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                                                            >
                                                                <Plus className="h-4 w-4" />
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {/* Add to Cart Button */}
                                                    <button
                                                        onClick={() => addToCart(ticketType)}
                                                        disabled={quantities[ticketType.ticketTypeId] === 0}
                                                        className="w-full bg-blue-600/90 hover:bg-blue-700 disabled:bg-gray-300/70 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center backdrop-blur-sm"
                                                    >
                                                        <ShoppingCart className="h-4 w-4 mr-2" />
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    disabled
                                                    className="w-full bg-gray-300/70 text-gray-500 py-2 px-4 rounded-lg cursor-not-allowed backdrop-blur-sm"
                                                >
                                                    {ticketType.quantityRemaining === 0 ? 'Sold Out' : 'Not Available'}
                                                </button>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Purchase Button */}
                            {cart.length > 0 && (
                                <div className="mt-6 pt-6 border-t border-gray-200/40">
                                    <button
                                        onClick={handlePurchase}
                                        className="w-full bg-gradient-to-r from-green-600/90 to-green-700/90 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center text-lg transform hover:scale-105 backdrop-blur-sm"
                                    >
                                        <ShoppingCart className="h-5 w-5 mr-2" />
                                        Proceed to Checkout
                                    </button>
                                    <p className="text-sm text-gray-700 text-center mt-2">
                                        Total: ${getTotalPrice().toFixed(2)} ({getTotalItems()} tickets)
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}