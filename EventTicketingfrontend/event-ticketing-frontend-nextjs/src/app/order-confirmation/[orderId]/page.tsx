/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Download, Calendar, MapPin, Clock, Ticket } from 'lucide-react';

interface Order {
    orderId: number;
    orderNumber: string;
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

export default function OrderConfirmationPage() {
    const params = useParams();
    const orderId = params.orderId as string;
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrder();
    }, [orderId]);

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
                setOrder(data);
            }
        } catch (error) {
            console.error('Failed to fetch order:', error);
        } finally {
            setLoading(false);
        }
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
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Success Header */}
                <div className="text-center mb-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Purchase Successful!
                    </h1>
                    <p className="text-lg text-gray-600">
                        Your tickets have been confirmed and sent to your email.
                    </p>
                </div>

                {/* Order Details */}
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-6">
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

                    <div>
                        <p className="text-sm text-gray-600">Event</p>
                        <p className="font-semibold text-lg">{order.eventTitle}</p>
                    </div>
                </div>

                {/* Tickets */}
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Tickets</h2>

                    <div className="space-y-4">
                        {order.tickets.map((ticket) => (
                            <div key={ticket.ticketId} className="border border-gray-200 rounded-lg p-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{ticket.ticketTypeName}</h3>
                                        <p className="text-gray-600">
                                            {ticket.attendeeFirstName} {ticket.attendeeLastName}
                                        </p>
                                        <p className="text-sm text-gray-500">{ticket.attendeeEmail}</p>
                                        <p className="text-sm text-gray-500 mt-2">
                                            Ticket: {ticket.ticketNumber}
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gray-100 border-2 border-dashed border-gray-300 rounded flex items-center justify-center mb-2">
                                            <span className="text-xs text-gray-500">QR Code</span>
                                        </div>
                                        <button className="text-xs text-blue-600 hover:text-blue-800">
                                            Download
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Steps */}
                <div className="mt-8 text-center space-y-4">
                    <Link
                        href="/tickets"
                        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 mr-4"
                    >
                        <Ticket className="h-5 w-5 mr-2" />
                        View My Tickets
                    </Link>

                    <Link
                        href="/events"
                        className="inline-flex items-center bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300"
                    >
                        Browse More Events
                    </Link>
                </div>
            </div>
        </div>
    );
}