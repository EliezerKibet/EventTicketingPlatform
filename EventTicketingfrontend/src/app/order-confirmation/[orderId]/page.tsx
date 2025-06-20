/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Download, Calendar, MapPin, Clock, Ticket } from 'lucide-react';

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

export default function OrderConfirmationPage() {
    const params = useParams();
    const orderId = params.orderId as string;
    const [order, setOrder] = useState<Order | null>(null);
    const [event, setEvent] = useState<Event | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrder();
    }, [orderId]);

    useEffect(() => {
        if (order && order.eventId) {
            fetchEventDetails();
        }
    }, [order]);

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

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!order) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Order not found</h1>
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
            <div className="relative z-10 py-12" style={{ transform: 'scaleX(-1)' }}>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Success Header */}
                    <div className="text-center mb-8">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 drop-shadow-lg" />
                        <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                            Purchase Successful!
                        </h1>
                        <p className="text-lg text-white drop-shadow">
                            Your tickets have been confirmed and sent to your email.
                        </p>
                    </div>

                    {/* Event Info Banner */}
                    {event && (
                        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-6 mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Details</h2>
                            <div className="flex items-start space-x-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            <span>{formatDate(event.startDateTime)}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-2" />
                                            <span>{formatTime(event.startDateTime)}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            <span>{event.isOnline ? 'Online Event' : `${event.venueName}, ${event.venueCity}`}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Order Details */}
                    <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-6 mb-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Details</h2>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-sm text-gray-600">Order Number</p>
                                <p className="font-semibold">{order.orderNumber}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Amount</p>
                                <p className="font-semibold">${order.totalAmount.toFixed(2)}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-600">Order Date</p>
                                <p className="font-semibold">{new Date(order.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Status</p>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    {order.status}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Tickets */}
                    <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-6 mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-gray-900">Your Tickets</h2>
                            <span className="text-sm text-gray-600">{order.tickets.length} ticket(s)</span>
                        </div>

                        <div className="space-y-4">
                            {order.tickets.map((ticket, index) => (
                                <div key={ticket.ticketId} className="border border-gray-200 rounded-lg p-4 bg-white bg-opacity-50">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                                    Ticket #{index + 1}
                                                </span>
                                                <span className="text-sm font-medium text-gray-900">{ticket.ticketTypeName}</span>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="font-medium text-gray-900">
                                                    {ticket.attendeeFirstName} {ticket.attendeeLastName}
                                                </p>
                                                <p className="text-sm text-gray-600">{ticket.attendeeEmail}</p>
                                                <p className="text-xs text-gray-500 font-mono">
                                                    {ticket.ticketNumber}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-center ml-4">
                                            <div className="w-16 h-16 bg-gray-100 border-2 border-dashed border-gray-300 rounded flex items-center justify-center mb-2">
                                                <span className="text-xs text-gray-500">QR Code</span>
                                            </div>
                                            <button className="text-xs text-blue-600 hover:text-blue-800 flex items-center">
                                                <Download className="h-3 w-3 mr-1" />
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Important Notice */}
                        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <h4 className="text-sm font-medium text-yellow-800 mb-1">Important Notice</h4>
                            <p className="text-xs text-yellow-700">
                                Please bring your tickets (printed or on mobile) and a valid ID to the event.
                                QR codes will be scanned at entry.
                            </p>
                        </div>
                    </div>

                    {/* Next Steps */}
                    <div className="text-center space-y-4">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/mytickets"
                                className="inline-flex items-center justify-center bg-blue-600 bg-opacity-90 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm shadow-lg"
                            >
                                <Ticket className="h-5 w-5 mr-2" />
                                View My Tickets
                            </Link>

                            <Link
                                href="/events"
                                className="inline-flex items-center justify-center bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm border border-gray-200 shadow-lg"
                            >
                                Browse More Events
                            </Link>
                        </div>

                        <p className="text-sm text-white drop-shadow">
                            Check your email for detailed tickets and event information.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}