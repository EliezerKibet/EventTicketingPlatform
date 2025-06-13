/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Calendar, Users, Ticket, ArrowRight, Sparkles, Music, MapPin } from 'lucide-react';

export default function Home() {
    const router = useRouter();
    const { user, isLoading } = useAuth();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Show content after a brief delay for smooth loading
        const timer = setTimeout(() => setShowContent(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const handleOrganizerClick = () => {
        router.push('/login?type=organizer');
    };

    const handleCustomerClick = () => {
        router.push('/login?type=customer');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen theme-bg flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #f8fafc, #e0e7ff)' }}>
                <div className="text-center">
                    <div className="flex justify-center compact-space-y">
                        <Calendar className="h-12 w-12 accent-text animate-pulse" />
                    </div>
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 accent-border mx-auto compact-space-y"></div>
                    <p className="theme-muted-fg">Loading EventHub...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen theme-bg theme-transition transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`} style={{ background: 'linear-gradient(to bottom right, #f8fafc, #e0e7ff)' }}>
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <Calendar className="h-8 w-8 text-blue-600 mr-3" />
                            <h1 className="text-2xl font-bold text-gray-900">EventTicketing</h1>
                        </div>

                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto compact-card compact-space-y">
                {/* Hero Section */}
                <div className="text-center compact-space-y" style={{ marginBottom: 'calc(var(--spacing-unit) * 4)' }}>
                    <div className="flex justify-center" style={{ marginBottom: 'calc(var(--spacing-unit) * 1.5)' }}>
                        <div className="relative">
                            <Calendar className="h-20 w-20 accent-text" />
                            <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
                        </div>
                    </div>
                    <h2 className="text-responsive-3xl font-bold theme-fg compact-space-y">
                        Welcome to <span className="accent-text">EventHub</span>
                    </h2>
                    <p className="text-responsive-xl theme-muted-fg max-w-3xl mx-auto compact-space-y">
                        Your all-in-one platform for creating, managing, and discovering amazing events.
                        Whether you&apos;re organizing the next big concert or looking for exciting events to attend.
                    </p>
                </div>

                {/* User Type Selection */}
                <div className="grid md:grid-cols-2 compact-gap max-w-4xl mx-auto" style={{ marginBottom: 'calc(var(--spacing-unit) * 4)' }}>
                    {/* Organizer Card */}
                    <div className="theme-card theme-border border rounded-2xl compact-card hover:shadow-2xl theme-transition transform hover:scale-105">
                        <div className="text-center">
                            <div className="accent-bg rounded-full w-16 h-16 flex items-center justify-center mx-auto" style={{ marginBottom: 'calc(var(--spacing-unit) * 1.5)' }}>
                                <Users className="h-8 w-8 theme-primary-fg" />
                            </div>
                            <h3 className="text-responsive-2xl font-bold theme-fg compact-space-y">Event Organizer</h3>
                            <p className="theme-muted-fg compact-space-y">
                                Create and manage events, sell tickets, track analytics, and build your audience.
                            </p>

                            {/* Features List */}
                            <div className="compact-space-y text-left" style={{ marginBottom: 'calc(var(--spacing-unit) * 2)' }}>
                                <div className="flex items-center text-responsive-sm theme-muted-fg">
                                    <div className="w-2 h-2 accent-bg rounded-full mr-3"></div>
                                    Create unlimited events
                                </div>
                                <div className="flex items-center text-responsive-sm theme-muted-fg">
                                    <div className="w-2 h-2 accent-bg rounded-full mr-3"></div>
                                    Sell tickets & manage bookings
                                </div>
                                <div className="flex items-center text-responsive-sm theme-muted-fg">
                                    <div className="w-2 h-2 accent-bg rounded-full mr-3"></div>
                                    Real-time analytics & insights
                                </div>
                                <div className="flex items-center text-responsive-sm theme-muted-fg">
                                    <div className="w-2 h-2 accent-bg rounded-full mr-3"></div>
                                    QR code ticket validation
                                </div>
                            </div>

                            <button
                                onClick={handleOrganizerClick}
                                className="btn-accent w-full compact-button font-semibold rounded-lg flex items-center justify-center group focus-accent"
                            >
                                Get Started as Organizer
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 theme-transition" />
                            </button>
                        </div>
                    </div>

                    {/* Customer Card */}
                    <div className="theme-card theme-border border rounded-2xl compact-card hover:shadow-2xl theme-transition transform hover:scale-105">
                        <div className="text-center">
                            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto" style={{ marginBottom: 'calc(var(--spacing-unit) * 1.5)' }}>
                                <Ticket className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-responsive-2xl font-bold theme-fg compact-space-y">Event Attendee</h3>
                            <p className="theme-muted-fg compact-space-y">
                                Discover exciting events, purchase tickets, and enjoy seamless check-in experiences.
                            </p>

                            {/* Features List */}
                            <div className="compact-space-y text-left" style={{ marginBottom: 'calc(var(--spacing-unit) * 2)' }}>
                                <div className="flex items-center text-responsive-sm theme-muted-fg">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    Browse events by category
                                </div>
                                <div className="flex items-center text-responsive-sm theme-muted-fg">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    Secure ticket purchasing
                                </div>
                                <div className="flex items-center text-responsive-sm theme-muted-fg">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    Digital tickets on your phone
                                </div>
                                <div className="flex items-center text-responsive-sm theme-muted-fg">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    Quick QR code entry
                                </div>
                            </div>

                            <button
                                onClick={handleCustomerClick}
                                className="w-full bg-green-600 text-white compact-button font-semibold rounded-lg hover:bg-green-700 theme-transition flex items-center justify-center group focus-accent"
                            >
                                Get Started as Customer
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 theme-transition" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Feature Highlights */}
                <div className="theme-card theme-border border rounded-2xl compact-card" style={{ marginBottom: 'calc(var(--spacing-unit) * 4)' }}>
                    <div className="text-center compact-space-y">
                        <h3 className="text-responsive-3xl font-bold theme-fg compact-space-y">Why Choose EventHub?</h3>
                        <p className="theme-muted-fg">Everything you need for successful events in one platform</p>
                    </div>

                    <div className="grid md:grid-cols-3 compact-gap">
                        <div className="text-center">
                            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto compact-space-y">
                                <Music className="h-6 w-6 text-purple-600" />
                            </div>
                            <h4 className="font-semibold theme-fg compact-space-y">All Event Types</h4>
                            <p className="text-responsive-sm theme-muted-fg">Concerts, conferences, workshops, festivals - we support them all</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto compact-space-y">
                                <MapPin className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h4 className="font-semibold theme-fg compact-space-y">Venue Management</h4>
                            <p className="text-responsive-sm theme-muted-fg">Comprehensive venue database with detailed information</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto compact-space-y">
                                <Sparkles className="h-6 w-6 text-pink-600" />
                            </div>
                            <h4 className="font-semibold theme-fg compact-space-y">Easy to Use</h4>
                            <p className="text-responsive-sm theme-muted-fg">Intuitive interface designed for both organizers and attendees</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <p className="text-gray-600 mb-4">Ready to get started?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleOrganizerClick}
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Create Your First Event
                        </button>
                        <button
                            onClick={handleCustomerClick}
                            className="px-8 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                        >
                            Explore Events
                        </button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="theme-card theme-border border-t">
                <div className="max-w-7xl mx-auto compact-card">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center compact-gap">
                            <Calendar className="h-6 w-6 accent-text" />
                            <span className="theme-muted-fg text-responsive-sm">© 2025 EventHub. All rights reserved.</span>
                        </div>
                        <div className="text-responsive-sm theme-muted-fg">
                            Built with ❤️ for amazing events
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}