/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
    Calendar,
    MapPin,
    Users,
    Globe,
    Phone,
    Mail,
    Star,
    Clock,
    Building,
    ArrowLeft,
    ExternalLink,
    Share,
    Heart,
    Camera,
    Navigation,
    Info,
    CheckCircle,
    Award,
    Zap,
    Image as ImageIcon
} from 'lucide-react';
import Link from 'next/link';

// Interfaces based on your database structure
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

interface VenueEvent {
    eventId: number;
    title: string;
    startDateTime: string;
    endDateTime: string;
    basePrice: number;
    imageUrl?: string;
    categoryName: string;
    organizerName: string;
    ticketsSold: number;
    availableTickets: number;
    isPublished: boolean;
}

export default function VenueDetailPage() {
    const params = useParams();
    const router = useRouter();
    const venueId = params.id as string;

    const [venue, setVenue] = useState<Venue | null>(null);
    const [events, setEvents] = useState<VenueEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [imageError, setImageError] = useState(false);
    const [activeTab, setActiveTab] = useState<'overview' | 'events' | 'location'>('overview');

    useEffect(() => {
        if (venueId) {
            fetchVenueDetails();
            fetchVenueEvents();
        }
    }, [venueId]);

    const fetchVenueDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5251/api/venues/${venueId}`);
            if (response.ok) {
                const data = await response.json();
                setVenue(data);
            } else {
                console.error('Failed to fetch venue details');
            }
        } catch (error) {
            console.error('Failed to fetch venue details:', error);
        } finally {
            setLoading(false);
        }
    };

    // Replace your fetchVenueEvents function with this improved version:

    // Add this enhanced debugging to your fetchVenueEvents function:

    // Replace your fetchVenueEvents function with this venue name matching version:

    const fetchVenueEvents = async () => {
        try {
            const response = await fetch(`http://localhost:5251/api/venues/${venueId}/events`);
            if (response.ok) {
                const venueEvents = await response.json();
                setEvents(venueEvents);
            }
        } catch (error) {
            console.error('Failed to fetch venue events:', error);
        }
    };

    // Also add this debug function to check what data you're getting:
    const debugVenueData = () => {
        console.log('🏢 Current venue data:', venue);
        console.log('🎫 Current events data:', events);
        console.log('🎯 Venue ID from params:', venueId);
        console.log('🎯 Venue ID type:', typeof venueId);
        console.log('🔢 Parsed venue ID:', parseInt(venueId));
    };

    // Add this useEffect to debug when data changes:
    useEffect(() => {
        if (venue && events) {
            debugVenueData();
        }
    }, [venue, events, venueId]);

    const getImageUrl = (imageUrl?: string) => {
        console.log('🖼️ DEBUG - Original imageUrl from API:', imageUrl); // Debug log

        if (!imageUrl) {
            console.log('🖼️ DEBUG - No imageUrl provided, returning null');
            return null;
        }

        let finalUrl: string;

        // Handle full URLs
        if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
            finalUrl = imageUrl;
            console.log('🖼️ DEBUG - Using full URL:', finalUrl);
            return finalUrl;
        }

        // Handle relative paths from your LocalImageStorageService
        if (imageUrl.startsWith('/')) {
            finalUrl = `http://localhost:5251${imageUrl}`;
            console.log('🖼️ DEBUG - Using relative path with leading slash:', finalUrl);
            return finalUrl;
        }

        // Handle paths without leading slash
        finalUrl = `http://localhost:5251/${imageUrl}`;
        console.log('🖼️ DEBUG - Using path without leading slash:', finalUrl);
        return finalUrl;
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

    const shareVenue = async () => {
        if (navigator.share && venue) {
            try {
                await navigator.share({
                    title: venue.name,
                    text: venue.description,
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else if (venue) {
            navigator.clipboard.writeText(window.location.href);
            alert('Venue link copied to clipboard!');
        }
    };

    const openMap = () => {
        if (venue?.latitude && venue?.longitude) {
            window.open(`https://maps.google.com/?q=${venue.latitude},${venue.longitude}`, '_blank');
        } else {
            const address = `${venue?.address}, ${venue?.city}, ${venue?.state} ${venue?.zipCode}`;
            window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, '_blank');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-6"></div>
                    <p className="text-gray-600 text-xl">Loading venue details...</p>
                </div>
            </div>
        );
    }

    if (!venue) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Venue Not Found</h1>
                    <p className="text-gray-600 mb-6">The venue you're looking for doesn't exist.</p>
                    <Link
                        href="/"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                        Back to Events
                    </Link>
                </div>
            </div>
        );
    }

    const imageUrl = getImageUrl(venue.imageUrl);
    const upcomingEvents = events.filter(event => new Date(event.startDateTime) > new Date());
    const pastEvents = events.filter(event => new Date(event.startDateTime) <= new Date());

    return (
        <div className="min-h-screen" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
    `
            }}>

            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            Back
                        </button>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={shareVenue}
                                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <Share className="h-5 w-5 mr-2" />
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative">
                <div className="relative h-96 bg-gradient-to-r from-purple-400 to-pink-500">
                    {imageUrl && !imageError ? (
                        <img
                            src={imageUrl}
                            alt={venue.name}
                            className="absolute inset-0 w-full h-full object-cover z-10"
                            loading="lazy"
                            onLoad={(e) => {
                                console.log('✅ IMAGE LOADED SUCCESSFULLY:', e.currentTarget.src);
                            }}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                console.error('❌ IMAGE LOAD FAILED:', target.src);
                                console.error('❌ ERROR EVENT:', e);

                                // Test if the image URL is accessible
                                fetch(target.src)
                                    .then(response => {
                                        console.log('🔍 FETCH TEST - Status:', response.status);
                                        console.log('🔍 FETCH TEST - OK:', response.ok);
                                        console.log('🔍 FETCH TEST - Headers:', [...response.headers.entries()]);
                                    })
                                    .catch(error => {
                                        console.error('🔍 FETCH TEST - Failed:', error);
                                    });

                                target.style.display = 'none';
                                setImageError(true);
                            }}
                        />
                    ) : (
                        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10">
                            <Building className="h-24 w-24 text-white opacity-50" />
                        </div>
                    )}

                    {/* ONLY the bottom gradient for text readability - much more transparent */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-20"></div>
                </div>

                {/* Venue Info Overlay - positioned ABOVE everything with z-30 */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-end justify-between">
                            <div className="text-white">
                                <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">{venue.name}</h1>
                                <div className="flex items-center space-x-4 text-lg">
                                    <div className="flex items-center">
                                        <MapPin className="h-5 w-5 mr-1" />
                                        {venue.city}, {venue.state}
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="h-5 w-5 mr-1" />
                                        {venue.capacity.toLocaleString()} capacity
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar className="h-5 w-5 mr-1" />
                                        {venue.eventCount} events hosted
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="hidden md:flex space-x-6">
                                <div className="text-center text-white">
                                    <div className="text-2xl font-bold drop-shadow-lg">{upcomingEvents.length}</div>
                                    <div className="text-sm opacity-80">Upcoming Events</div>
                                </div>
                                <div className="text-center text-white">
                                    <div className="text-2xl font-bold drop-shadow-lg">{venue.eventCount}</div>
                                    <div className="text-sm opacity-80">Total Events</div>
                                </div>
                                <div className="text-center text-white">
                                    <div className="text-2xl font-bold drop-shadow-lg">
                                        {(venue.capacity / 1000).toFixed(0)}K
                                    </div>
                                    <div className="text-sm opacity-80">Capacity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <nav className="flex space-x-8">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'overview'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab('events')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'events'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Events ({upcomingEvents.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('location')}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'location'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Location & Contact
                        </button>
                    </nav>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Description */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Venue</h2>
                                <p className="text-gray-700 leading-relaxed">{venue.description}</p>
                            </div>

                            {/* Key Features */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Venue Features</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                                        <Users className="h-8 w-8 text-blue-600 mr-3" />
                                        <div>
                                            <div className="font-semibold text-gray-900">Capacity</div>
                                            <div className="text-gray-600">{venue.capacity.toLocaleString()} people</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-4 bg-green-50 rounded-lg">
                                        <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                                        <div>
                                            <div className="font-semibold text-gray-900">Status</div>
                                            <div className="text-gray-600">
                                                {venue.isActive ? 'Active & Available' : 'Currently Inactive'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                                        <Award className="h-8 w-8 text-purple-600 mr-3" />
                                        <div>
                                            <div className="font-semibold text-gray-900">Experience</div>
                                            <div className="text-gray-600">{venue.eventCount} events hosted</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                                        <Zap className="h-8 w-8 text-orange-600 mr-3" />
                                        <div>
                                            <div className="font-semibold text-gray-900">Rating</div>
                                            <div className="text-gray-600">
                                                {venue.eventCount > 10 ? 'Premier Venue' : 'Popular Choice'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Contact Card */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <Mail className="h-5 w-5 text-gray-400 mr-3" />
                                        <a
                                            href={`mailto:${venue.contactEmail}`}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            {venue.contactEmail}
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="h-5 w-5 text-gray-400 mr-3" />
                                        <a
                                            href={`tel:${venue.contactPhone}`}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            {venue.contactPhone}
                                        </a>
                                    </div>
                                    {venue.website && (
                                        <div className="flex items-center">
                                            <Globe className="h-5 w-5 text-gray-400 mr-3" />
                                            <a
                                                href={venue.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 flex items-center"
                                            >
                                                Visit Website
                                                <ExternalLink className="h-4 w-4 ml-1" />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
                                <div className="space-y-2 mb-4">
                                    <div className="text-gray-700">{venue.address}</div>
                                    <div className="text-gray-700">
                                        {venue.city}, {venue.state} {venue.zipCode}
                                    </div>
                                    <div className="text-gray-700">{venue.country}</div>
                                </div>
                                <button
                                    onClick={openMap}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center transition-colors"
                                >
                                    <Navigation className="h-4 w-4 mr-2" />
                                    View on Map
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'events' && (
                    <div className="space-y-8">
                        {/* Events Summary - Simplified */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Events at {venue.name}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="text-center p-4 bg-blue-50 rounded-lg">
                                    <div className="text-3xl font-bold text-blue-600">{upcomingEvents.length}</div>
                                    <div className="text-gray-600">Upcoming Events</div>
                                </div>
                                <div className="text-center p-4 bg-green-50 rounded-lg">
                                    <div className="text-3xl font-bold text-green-600">{pastEvents.length}</div>
                                    <div className="text-gray-600">Past Events</div>
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Events */}
                        {upcomingEvents.length > 0 ? (
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Upcoming Events ({upcomingEvents.length})
                                    </h2>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                                        Available Now
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {upcomingEvents
                                        .sort((a, b) => new Date(a.startDateTime).getTime() - new Date(b.startDateTime).getTime())
                                        .map((event) => (
                                            <EnhancedEventCard key={event.eventId} event={event} isUpcoming={true} />
                                        ))}
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                                <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Upcoming Events</h3>
                                <p className="text-gray-600">This venue doesn't have any scheduled upcoming events.</p>
                            </div>
                        )}

                        {/* Past Events */}
                        {pastEvents.length > 0 && (
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Past Events ({pastEvents.length})
                                    </h2>
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                                        Event History
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {pastEvents
                                        .sort((a, b) => new Date(b.startDateTime).getTime() - new Date(a.startDateTime).getTime())
                                        .slice(0, 6)
                                        .map((event) => (
                                            <EnhancedEventCard key={event.eventId} event={event} isUpcoming={false} />
                                        ))}
                                </div>
                                {pastEvents.length > 6 && (
                                    <div className="text-center mt-6">
                                        <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                                            View All {pastEvents.length} Past Events
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* No Events At All */}
                        {events.length === 0 && (
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-12 border border-white/20 text-center">
                                <Building className="h-20 w-20 text-gray-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Events Yet</h3>
                                <p className="text-gray-600 text-lg mb-6">
                                    This venue hasn't hosted any events yet, but that could change soon!
                                </p>
                                <div className="space-y-2 text-sm text-gray-500">
                                    <p>• Check back later for upcoming events</p>
                                    <p>• Contact the venue for booking information</p>
                                    <p>• Follow our updates for new announcements</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'location' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Address & Directions</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Full Address</h3>
                                    <div className="text-gray-700">
                                        <div>{venue.address}</div>
                                        <div>{venue.city}, {venue.state} {venue.zipCode}</div>
                                        <div>{venue.country}</div>
                                    </div>
                                </div>

                                {venue.latitude && venue.longitude && (
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Coordinates</h3>
                                        <div className="text-gray-700">
                                            Lat: {venue.latitude}, Lng: {venue.longitude}
                                        </div>
                                    </div>
                                )}

                                <button
                                    onClick={openMap}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors"
                                >
                                    <Navigation className="h-5 w-5 mr-2" />
                                    Get Directions
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-3">Get in Touch</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                            <Mail className="h-5 w-5 text-gray-400 mr-3" />
                                            <div>
                                                <div className="text-sm text-gray-500">Email</div>
                                                <a
                                                    href={`mailto:${venue.contactEmail}`}
                                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                                >
                                                    {venue.contactEmail}
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                            <Phone className="h-5 w-5 text-gray-400 mr-3" />
                                            <div>
                                                <div className="text-sm text-gray-500">Phone</div>
                                                <a
                                                    href={`tel:${venue.contactPhone}`}
                                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                                >
                                                    {venue.contactPhone}
                                                </a>
                                            </div>
                                        </div>

                                        {venue.website && (
                                            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                                <Globe className="h-5 w-5 text-gray-400 mr-3" />
                                                <div>
                                                    <div className="text-sm text-gray-500">Website</div>
                                                    <a
                                                        href={venue.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                                                    >
                                                        Visit Website
                                                        <ExternalLink className="h-4 w-4 ml-1" />
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


function EnhancedEventCard({ event, isUpcoming }: { event: VenueEvent; isUpcoming: boolean }) {
    const getImageUrl = (imageUrl?: string) => {
        if (!imageUrl) return null;
        if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
            return imageUrl;
        }
        if (imageUrl.startsWith('/')) {
            return `http://localhost:5251${imageUrl}`;
        }
        return `http://localhost:5251/${imageUrl}`;
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

    const getDaysUntil = (dateString: string) => {
        const eventDate = new Date(dateString);
        const today = new Date();
        const diffTime = eventDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const getDaysAgo = (dateString: string) => {
        const eventDate = new Date(dateString);
        const today = new Date();
        const diffTime = today.getTime() - eventDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const imageUrl = getImageUrl(event.imageUrl);
    const daysUntil = getDaysUntil(event.startDateTime);
    const daysAgo = getDaysAgo(event.startDateTime);

    return (
        <Link
            href={`/events/${event.eventId}`}
            className={`block bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-gray-100 ${!isUpcoming ? 'opacity-90 hover:opacity-100' : ''
                }`}
        >
            <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500">
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
                        <Calendar className="h-12 w-12 text-white opacity-50" />
                    </div>
                )}

                {/* Event Status Badge */}
                <div className="absolute top-3 left-3">
                    {isUpcoming ? (
                        daysUntil <= 7 ? (
                            <span className="px-3 py-1 bg-red-500/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                                {daysUntil === 0 ? 'Today!' : daysUntil === 1 ? 'Tomorrow' : `${daysUntil} days left`}
                            </span>
                        ) : (
                            <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                                Upcoming
                            </span>
                        )
                    ) : (
                        <span className="px-3 py-1 bg-gray-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                            {daysAgo === 0 ? 'Today' : daysAgo === 1 ? 'Yesterday' : `${daysAgo} days ago`}
                        </span>
                    )}
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-3 left-3">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className="text-lg font-bold text-gray-900">
                            {formatDate(event.startDateTime)}
                        </div>
                        <div className="text-sm text-gray-600">
                            {formatTime(event.startDateTime)}
                        </div>
                    </div>
                </div>

                {/* Ticket Status */}
                {isUpcoming && (
                    <div className="absolute top-3 right-3">
                        {event.availableTickets === 0 ? (
                            <span className="px-2 py-1 bg-red-500/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                                Sold Out
                            </span>
                        ) : event.availableTickets < 50 ? (
                            <span className="px-2 py-1 bg-orange-500/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                                Almost Full
                            </span>
                        ) : (
                            <span className="px-2 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                                Available
                            </span>
                        )}
                    </div>
                )}
            </div>

            <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {event.categoryName}
                    </span>
                    {isUpcoming && (
                        <span className="text-xs text-gray-500">
                            {event.ticketsSold} sold
                        </span>
                    )}
                </div>

                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-lg">
                    {event.title}
                </h3>

                <div className="text-sm text-gray-600 mb-3">
                    By {event.organizerName}
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">
                        From ${event.basePrice}
                    </span>
                    {isUpcoming ? (
                        <span className="text-green-600 text-sm font-medium">
                            {event.availableTickets} tickets left
                        </span>
                    ) : (
                        <span className="text-gray-500 text-sm">
                            {event.ticketsSold} attendees
                        </span>
                    )}
                </div>

            </div>
        </Link>
    );
}

// Event Card Component
function EventCard({ event, isPast = false }: { event: VenueEvent; isPast?: boolean }) {
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


    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    const formatTime = (dateString: string) => {
        return new Date(dateString).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit'
        });
    };

    const imageUrl = getImageUrl(event.imageUrl);

    return (
        <Link
            href={`/events/${event.eventId}`}
            className={`block bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-1 ${isPast ? 'opacity-75' : ''
                }`}
        >
            <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500">
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
                        <Calendar className="h-12 w-12 text-white opacity-50" />
                    </div>
                )}

                {isPast && (
                    <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-gray-500 text-white text-xs font-medium rounded-full">
                            Past Event
                        </span>
                    </div>
                )}

                <div className="absolute bottom-3 left-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className="text-lg font-bold text-gray-900">
                            {formatDate(event.startDateTime)}
                        </div>
                        <div className="text-sm text-gray-600">
                            {formatTime(event.startDateTime)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <div className="mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {event.categoryName}
                    </span>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {event.title}
                </h3>

                <div className="text-sm text-gray-600 mb-2">
                    By {event.organizerName}
                </div>

                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                        From ${event.basePrice}
                    </span>
                    <span className="text-gray-500">
                        {event.availableTickets} tickets left
                    </span>
                </div>
            </div>
        </Link>
    );
}