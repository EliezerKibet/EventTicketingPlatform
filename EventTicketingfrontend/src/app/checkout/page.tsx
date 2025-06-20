/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { ArrowLeft, CreditCard, User, Mail, Phone, Lock, ShoppingCart, Check, X, AlertCircle } from 'lucide-react';
import { promoCodesApi } from '@/lib/api'; // Import your promo codes API

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
}

interface PromoCodeValidation {
    isValid: boolean;
    message: string;
    discountAmount: number;
    formattedDiscount: string;
    promoCode?: any;
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

    // Promo code state
    const [promoCodeInput, setPromoCodeInput] = useState('');
    const [appliedPromoCode, setAppliedPromoCode] = useState<PromoCodeValidation | null>(null);
    const [promoCodeValidating, setPromoCodeValidating] = useState(false);
    const [promoCodeError, setPromoCodeError] = useState('');

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

    const validatePromoCode = async (code: string) => {
        if (!code.trim() || !event) return;

        setPromoCodeValidating(true);
        setPromoCodeError('');

        try {
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            console.log('🔍 === PROMO CODE VALIDATION DEBUG START ===');
            console.log('🔍 Sending validation request:');
            console.log('🔍 Code:', code.trim());
            console.log('🔍 EventId:', parseInt(eventId!));
            console.log('🔍 Order Subtotal:', subtotal);
            console.log('🔍 Cart items:', cart);

            const requestPayload = {
                code: code.trim(),
                eventId: parseInt(eventId!),
                orderSubtotal: subtotal
            };

            console.log('🔍 Request payload:', requestPayload);

            const validation = await promoCodesApi.validatePromoCode(requestPayload);

            console.log('🔍 === VALIDATION RESPONSE RECEIVED ===');
            console.log('🔍 Raw validation response:', validation);
            console.log('🔍 IsValid:', validation.isValid);
            console.log('🔍 Discount Amount (raw):', validation.discountAmount);
            console.log('🔍 Discount Amount (type):', typeof validation.discountAmount);
            console.log('🔍 Formatted Discount:', validation.formattedDiscount);
            console.log('🔍 Message:', validation.message);

            // Check if discountAmount is actually a number
            const discountAsNumber = Number(validation.discountAmount);
            console.log('🔍 Discount as Number:', discountAsNumber);
            console.log('🔍 Is discount NaN?', isNaN(discountAsNumber));
            console.log('🔍 Is discount 0?', discountAsNumber === 0);

            if (validation.promoCode) {
                console.log('🔍 PromoCode object:', validation.promoCode);
                console.log('🔍 PromoCode Type:', validation.promoCode.type);
                console.log('🔍 PromoCode Value:', validation.promoCode.value);
            }

            if (validation.isValid) {
                console.log('🔍 ✅ Promo code is valid, applying...');
                setAppliedPromoCode(validation);
                setFormData(prev => ({ ...prev, promoCode: code.trim() }));
                setPromoCodeInput('');
                setPromoCodeError('');

                // Debug the applied promo code state
                console.log('🔍 Applied promo code state will be:', validation);
            } else {
                console.log('🔍 ❌ Promo code is invalid:', validation.message);
                setPromoCodeError(validation.message);
                setAppliedPromoCode(null);
            }

            console.log('🔍 === PROMO CODE VALIDATION DEBUG END ===');

        } catch (error: any) {
            console.error('🔍 === VALIDATION ERROR ===');
            console.error('🔍 Error object:', error);
            console.error('🔍 Error message:', error.message);
            console.error('🔍 Error stack:', error.stack);
            setPromoCodeError(error.message || 'Failed to validate promo code');
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

        console.log('🔍 === ORDER SUMMARY CALCULATION ===');
        console.log('🔍 Subtotal:', subtotal);
        console.log('🔍 Service Fee:', serviceFee);
        console.log('🔍 Tax:', tax);
        console.log('🔍 Applied Promo Code:', appliedPromoCode);

        let discount = 0;
        if (appliedPromoCode?.isValid) {
            discount = Number(appliedPromoCode.discountAmount) || 0;
            console.log('🔍 Discount from promo code:', discount);
            console.log('🔍 Discount type:', typeof discount);
            console.log('🔍 Original discountAmount:', appliedPromoCode.discountAmount);
            console.log('🔍 Original discountAmount type:', typeof appliedPromoCode.discountAmount);
        } else {
            console.log('🔍 No valid promo code applied');
        }

        const total = subtotal + serviceFee + tax - discount;

        const summary = { subtotal, serviceFee, tax, discount, total };
        console.log('🔍 Final order summary:', summary);

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
                <div className="bg-white bg-opacity-95 backdrop-blur-sm shadow-sm border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
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
                            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-6">
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
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
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
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
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
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
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
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
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
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
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
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Attendee Information */}
                            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                    Attendee Information
                                </h2>

                                <div className="space-y-4">
                                    {formData.attendees.map((attendee, index) => (
                                        <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white bg-opacity-50">
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
                                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
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
                                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
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
                                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Enhanced Promo Code Section */}
                            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                    Promo Code
                                </h2>

                                {/* Applied Promo Code Display */}
                                {appliedPromoCode?.isValid && (
                                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <Check className="h-5 w-5 text-green-600 mr-2" />
                                                <div>
                                                    <p className="text-sm font-medium text-green-800">
                                                        Promo code applied: <span className="font-mono">{formData.promoCode}</span>
                                                    </p>
                                                    <p className="text-sm text-green-600">
                                                        You save {appliedPromoCode.formattedDiscount}!
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={handleRemovePromoCode}
                                                className="text-green-600 hover:text-green-800 transition-colors"
                                            >
                                                <X className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Promo Code Input */}
                                {!appliedPromoCode?.isValid && (
                                    <div className="space-y-3">
                                        <div className="flex gap-4">
                                            <input
                                                type="text"
                                                placeholder="Enter promo code"
                                                value={promoCodeInput}
                                                onChange={(e) => setPromoCodeInput(e.target.value.toUpperCase())}
                                                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white font-mono"
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
                                                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            >
                                                {promoCodeValidating ? (
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                                ) : (
                                                    'Apply'
                                                )}
                                            </button>
                                        </div>

                                        {/* Error Message */}
                                        {promoCodeError && (
                                            <div className="flex items-center text-red-600 text-sm">
                                                <AlertCircle className="h-4 w-4 mr-2" />
                                                {promoCodeError}
                                            </div>
                                        )}

                                        {/* Help Text */}
                                        <p className="text-sm text-gray-600">
                                            Have a promo code? Enter it above to apply your discount.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-6 sticky top-4">
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
                                        <div className="flex justify-between text-green-600 font-medium">
                                            <span className="flex items-center">
                                                <Check className="h-4 w-4 mr-1" />
                                                Promo Discount
                                            </span>
                                            <span>-${orderSummary.discount.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-lg">
                                        <span>Total</span>
                                        <span>${orderSummary.total.toFixed(2)}</span>
                                    </div>

                                    {/* Savings Display */}
                                    {orderSummary.discount > 0 && (
                                        <div className="text-center text-green-600 text-sm font-medium">
                                            🎉 You saved ${orderSummary.discount.toFixed(2)}!
                                        </div>
                                    )}
                                </div>

                                {/* Purchase Button */}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center shadow-lg"
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
        </div>
    );
}