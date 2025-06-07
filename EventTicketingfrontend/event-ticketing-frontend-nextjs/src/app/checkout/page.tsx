/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { ArrowLeft, CreditCard, User, Mail, Phone, Lock, ShoppingCart } from 'lucide-react';

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
}

export default function CheckoutPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { user, isAuthenticated } = useAuth();

    const eventId = searchParams.get('eventId');

    const [event, setEvent] = useState<Event | null>(null);
    const [ticketTypes, setTicketTypes] = useState<TicketType[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState('');

    // Form state
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

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }

        if (!eventId) {
            router.push('/events');
            return;
        }

        fetchEventData();
    }, [eventId, isAuthenticated]);

    const fetchEventData = async () => {
        try {
            // Fetch event details
            const eventResponse = await fetch(`http://localhost:5251/api/events/${eventId}`);
            if (eventResponse.ok) {
                const eventData = await eventResponse.json();
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
            setError('Failed to load checkout data');
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

    const calculateOrderSummary = () => {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const serviceFee = subtotal * 0.05; // 5% service fee
        const tax = subtotal * 0.08; // 8% tax
        const discount = formData.promoCode === 'EARLY10' ? subtotal * 0.1 : 0;
        const total = subtotal + serviceFee + tax - discount;

        return { subtotal, serviceFee, tax, discount, total };
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
                setError(errorData.message || 'Purchase failed');
            }
        } catch (error) {
            setError('Purchase failed. Please try again.');
        } finally {
            setProcessing(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!event || cart.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
                    <button
                        onClick={() => router.push('/events')}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Browse Events
                    </button>
                </div>
            </div>
        );
    }

    const orderSummary = calculateOrderSummary();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
                    >
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Back to Event
                    </button>
                    <h1 className="text-2xl font-bold text-gray-900">Complete Your Purchase</h1>
                    <p className="text-gray-600">{event.title}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                                {error}
                            </div>
                        )}

                        {/* Billing Information */}
                        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                <User className="h-5 w-5 mr-2" />
                                Billing Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.billingFirstName}
                                        onChange={(e) => updateBillingInfo('billingFirstName', e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.billingLastName}
                                        onChange={(e) => updateBillingInfo('billingLastName', e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.billingEmail}
                                        onChange={(e) => updateBillingInfo('billingEmail', e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Address (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.billingAddress}
                                        onChange={(e) => updateBillingInfo('billingAddress', e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        City (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.billingCity}
                                        onChange={(e) => updateBillingInfo('billingCity', e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Zip Code (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.billingZipCode}
                                        onChange={(e) => updateBillingInfo('billingZipCode', e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Attendee Information */}
                        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                Attendee Information
                            </h2>

                            <div className="space-y-4">
                                {formData.attendees.map((attendee, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                                        <h3 className="font-medium text-gray-900 mb-3">Attendee {index + 1}</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={attendee.firstName}
                                                    onChange={(e) => updateAttendee(index, 'firstName', e.target.value)}
                                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={attendee.lastName}
                                                    onChange={(e) => updateAttendee(index, 'lastName', e.target.value)}
                                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={attendee.email}
                                                    onChange={(e) => updateAttendee(index, 'email', e.target.value)}
                                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Promo Code */}
                        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                Promo Code
                            </h2>
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Enter promo code"
                                    value={formData.promoCode}
                                    onChange={(e) => updateBillingInfo('promoCode', e.target.value)}
                                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                                >
                                    Apply
                                </button>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">
                                Try "EARLY10" for 10% off!
                            </p>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 sticky top-4">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>

                            {/* Event Info */}
                            <div className="mb-4 pb-4 border-b border-gray-200">
                                <h3 className="font-medium text-gray-900">{event.title}</h3>
                                <p className="text-sm text-gray-600">
                                    {new Date(event.startDateTime).toLocaleDateString('en-US', {
                                        weekday: 'short',
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>

                            {/* Cart Items */}
                            <div className="space-y-3 mb-4">
                                {cart.map((item) => (
                                    <div key={item.ticketTypeId} className="flex justify-between">
                                        <div>
                                            <p className="font-medium text-gray-900">{item.name}</p>
                                            <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="font-medium text-gray-900">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Price Breakdown */}
                            <div className="border-t border-gray-200 pt-4 space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="text-gray-900">${orderSummary.subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Service Fee</span>
                                    <span className="text-gray-900">${orderSummary.serviceFee.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Tax</span>
                                    <span className="text-gray-900">${orderSummary.tax.toFixed(2)}</span>
                                </div>
                                {orderSummary.discount > 0 && (
                                    <div className="flex justify-between text-green-600">
                                        <span>Discount</span>
                                        <span>-${orderSummary.discount.toFixed(2)}</span>
                                    </div>
                                )}
                                <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span>${orderSummary.total.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Purchase Button */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                            >
                                {processing ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <CreditCard className="h-5 w-5 mr-2" />
                                        Complete Purchase
                                    </>
                                )}
                            </button>

                            <div className="mt-4 flex items-center justify-center text-sm text-gray-600">
                                <Lock className="h-4 w-4 mr-1" />
                                Secure checkout powered by EventHub
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}