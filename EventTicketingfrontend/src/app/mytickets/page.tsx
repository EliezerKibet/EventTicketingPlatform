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

export default function MyTicketsPage() {
    const router = useRouter();
    const [tickets, setTickets] = useState<TicketData[]>([]);
    const [filteredTickets, setFilteredTickets] = useState<TicketData[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [dateFilter, setDateFilter] = useState('all');
    const [expandedTicket, setExpandedTicket] = useState<number | null>(null);

    useEffect(() => {
        fetchTickets();
    }, []);

    useEffect(() => {
        filterTickets();
    }, [tickets, searchQuery, statusFilter, dateFilter]);

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
                return <CheckCircle className="h-4 w-4 text-green-500" />;
            case 'used':
                return <CheckCircle className="h-4 w-4 text-blue-500" />;
            case 'cancelled':
                return <XCircle className="h-4 w-4 text-red-500" />;
            default:
                return <AlertCircle className="h-4 w-4 text-yellow-500" />;
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
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
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
        // In a real app, this would generate a proper QR code
        // For now, we'll just show a placeholder
        return (
            <div className="w-16 h-16 bg-gray-100 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                <QrCode className="h-8 w-8 text-gray-400" />
            </div>
        );
    };

    if (loading) {
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
                {/* Glass overlay for loading */}
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading your tickets...</p>
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
            {/* Glass overlay for the entire page */}
            <div className="min-h-screen bg-black/20 backdrop-blur-[2px]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Header with glass effect */}
                    <div className="mb-8 bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Events
                        </button>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Tickets</h1>
                        <p className="text-gray-600">View and manage all your event tickets</p>
                    </div>

                    {/* Filters with glass effect */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6 mb-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Search */}
                            <div className="flex-1">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search tickets..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
                                    />
                                </div>
                            </div>

                            {/* Status Filter */}
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
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
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
                            >
                                <option value="all">All Events</option>
                                <option value="upcoming">Upcoming</option>
                                <option value="past">Past Events</option>
                            </select>
                        </div>
                    </div>

                    {/* Tickets Summary with glass effect */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6">
                            <div className="flex items-center">
                                <Ticket className="h-8 w-8 text-blue-500 mr-3" />
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">{tickets.length}</p>
                                    <p className="text-sm text-gray-600">Total Tickets</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6">
                            <div className="flex items-center">
                                <Calendar className="h-8 w-8 text-green-500 mr-3" />
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {tickets.filter(t => isEventUpcoming(t.eventStartDateTime)).length}
                                    </p>
                                    <p className="text-sm text-gray-600">Upcoming Events</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6">
                            <div className="flex items-center">
                                <CheckCircle className="h-8 w-8 text-purple-500 mr-3" />
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {tickets.filter(t => t.status.toLowerCase() === 'used').length}
                                    </p>
                                    <p className="text-sm text-gray-600">Events Attended</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tickets List */}
                    {filteredTickets.length === 0 ? (
                        <div className="text-center py-12 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30">
                            <Ticket className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No tickets found</h3>
                            <p className="text-gray-600 mb-4">
                                {tickets.length === 0
                                    ? "You haven't purchased any tickets yet."
                                    : "No tickets match your current filters."
                                }
                            </p>
                            <Link
                                href="/events"
                                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Browse Events
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filteredTickets.map((ticket) => (
                                <div
                                    key={ticket.ticketId}
                                    className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 overflow-hidden hover:shadow-xl transition-all duration-300"
                                >
                                    {/* Ticket Header */}
                                    <div className="p-6">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <h3 className="text-lg font-semibold text-gray-900">
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

                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
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
                                                    <span className="font-medium text-gray-900">
                                                        {ticket.ticketTypeName}
                                                    </span>
                                                    <span className="text-gray-600">
                                                        ${ticket.pricePaid.toFixed(2)}
                                                    </span>
                                                    <span className="text-gray-500 font-mono text-xs">
                                                        {ticket.ticketNumber}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-2 ml-4">
                                                {generateQRCode(ticket)}
                                                <div className="flex flex-col space-y-2">
                                                    <button
                                                        onClick={() => downloadTicket(ticket.ticketId)}
                                                        className="flex items-center px-3 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                                    >
                                                        <Download className="h-4 w-4 mr-1" />
                                                        Download
                                                    </button>
                                                    <button
                                                        onClick={() => setExpandedTicket(
                                                            expandedTicket === ticket.ticketId ? null : ticket.ticketId
                                                        )}
                                                        className="flex items-center px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
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
                                        <div className="border-t border-gray-200 bg-gray-50/80 backdrop-blur-xl p-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {/* Attendee Information */}
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                                                        <User className="h-4 w-4 mr-2" />
                                                        Attendee Information
                                                    </h4>
                                                    <div className="space-y-2 text-sm">
                                                        <div>
                                                            <span className="text-gray-600">Name:</span>
                                                            <span className="ml-2 font-medium">
                                                                {ticket.attendeeFirstName} {ticket.attendeeLastName}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Mail className="h-4 w-4 text-gray-400 mr-1" />
                                                            <span className="text-gray-600">Email:</span>
                                                            <span className="ml-2">{ticket.attendeeEmail}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Event Information */}
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                                                        <MapPin className="h-4 w-4 mr-2" />
                                                        Event Location
                                                    </h4>
                                                    <div className="space-y-2 text-sm">
                                                        <div>
                                                            <span className="text-gray-600">Venue:</span>
                                                            <span className="ml-2 font-medium">{ticket.venueName}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-gray-600">Address:</span>
                                                            <span className="ml-2">{ticket.venueAddress}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Purchase Information */}
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-3">Purchase Details</h4>
                                                    <div className="space-y-2 text-sm">
                                                        <div>
                                                            <span className="text-gray-600">Purchase Date:</span>
                                                            <span className="ml-2">{formatDate(ticket.purchaseDate)}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-gray-600">Price Paid:</span>
                                                            <span className="ml-2 font-medium">${ticket.pricePaid.toFixed(2)}</span>
                                                        </div>
                                                        {ticket.checkInDate && (
                                                            <div>
                                                                <span className="text-gray-600">Check-in Date:</span>
                                                                <span className="ml-2">{formatDate(ticket.checkInDate)}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Actions */}
                                                <div>
                                                    <h4 className="font-medium text-gray-900 mb-3">Actions</h4>
                                                    <div className="space-y-2">
                                                        <Link
                                                            href={`/events/${ticket.eventId}`}
                                                            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
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