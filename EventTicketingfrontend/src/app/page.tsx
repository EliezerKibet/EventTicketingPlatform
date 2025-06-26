/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Calendar, Users, Ticket, ArrowRight, Sparkles, Music, MapPin, LogOut, User } from 'lucide-react';

export default function Home() {
    const router = useRouter();
    const { user, isLoading, isOrganizer, logout } = useAuth();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const handleOrganizerClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();

        console.log('Organizer button clicked');
        console.log('User status:', { user, isLoading });
        console.log('User roles:', user?.roles);
        console.log('isOrganizer:', isOrganizer);

        try {
            if (user && !isLoading) {
                await router.push('/organizer/dashboard');
            } else {
                await router.push('/login?type=organizer');
            }
        } catch (error) {
        }
    };

    const handleCustomerClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();

        try {
            if (user && !isLoading) {
                await router.push('/events');
            } else {
                await router.push('/login?type=customer');
            }
        } catch (error) {
            console.error('Navigation error:', error);
        }
    };

    const handleLogout = async () => {
        try {
            // Call logout function from useAuth hook
            await logout();
            // Redirect to login page
            await router.push('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const handleLogin = async () => {
        try {
            await router.push('/login');
        } catch (error) {
            console.error('Login navigation error:', error);
        }
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

                        {/* User Actions */}
                        <div className="flex items-center space-x-4">
                            {user ? (
                                <>
                                    {/* User Info */}
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <User className="h-4 w-4" />
                                        <span className="hidden sm:inline">Welcome, {user.firstName}</span>
                                        <span className="sm:hidden">Hi, {user.firstName}</span>
                                    </div>

                                    {/* Logout Button */}
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        <LogOut className="h-4 w-4" />
                                        <span className="hidden sm:inline">Logout</span>
                                    </button>
                                </>
                            ) : (
                                <>
                                    {/* Login Button for non-authenticated users */}
                                    <button
                                        onClick={handleLogin}
                                        className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        <User className="h-4 w-4" />
                                        <span>Login</span>
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Debug info - remove this later */}
                        {user && process.env.NODE_ENV === 'development' && (
                            <div className="absolute top-20 right-4 text-xs text-gray-500 bg-yellow-100 p-2 rounded">
                                User: {user.firstName} | Roles: {user.roles?.join(', ') || 'None'} | isOrganizer: {String(isOrganizer)}
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto compact-card compact-space-y">
                {/* Hero Section */}
                <div className="text-center py-12">
                    <div className="flex justify-center mb-6">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4">
                            <Sparkles className="h-12 w-12 text-white" />
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EventTicketing</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        The ultimate platform for creating, managing, and attending events.
                        {user ? ` Welcome back, ${user.firstName}!` : ' Join thousands of event organizers and attendees.'}
                    </p>
                </div>

                {/* Role Selection Cards */}
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

                            <ul className="text-sm text-gray-600 mt-4 space-y-2">
                                <li className="flex items-center justify-center">
                                    <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                                    Event Management
                                </li>
                                <li className="flex items-center justify-center">
                                    <Ticket className="h-4 w-4 mr-2 text-blue-500" />
                                    Ticket Sales
                                </li>
                                <li className="flex items-center justify-center">
                                    <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                                    Analytics Dashboard
                                </li>
                            </ul>

                            <button
                                type="button"
                                onClick={handleOrganizerClick}
                                className="btn-accent w-full compact-button font-semibold rounded-lg flex items-center justify-center group focus-accent mt-6"
                            >
                                {user ? 'Go to Organizer Dashboard' : 'Get Started as Organizer'}
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

                            <ul className="text-sm text-gray-600 mt-4 space-y-2">
                                <li className="flex items-center justify-center">
                                    <Music className="h-4 w-4 mr-2 text-green-500" />
                                    Discover Events
                                </li>
                                <li className="flex items-center justify-center">
                                    <Ticket className="h-4 w-4 mr-2 text-green-500" />
                                    Easy Booking
                                </li>
                                <li className="flex items-center justify-center">
                                    <Sparkles className="h-4 w-4 mr-2 text-green-500" />
                                    Digital Tickets
                                </li>
                            </ul>

                            <button
                                type="button"
                                onClick={handleCustomerClick}
                                className="w-full bg-green-600 text-white compact-button font-semibold rounded-lg hover:bg-green-700 theme-transition flex items-center justify-center group focus-accent mt-6"
                            >
                                {user ? 'Browse Events' : 'Get Started as Customer'}
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 theme-transition" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EventTicketing?</h3>
                        <p className="text-gray-600">Built with enterprise-grade quality and comprehensive testing</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                                <Calendar className="h-6 w-6 text-blue-600" />
                            </div>
                            <h4 className="font-semibold mb-2">Real-time Booking</h4>
                            <p className="text-sm text-gray-600">Instant ticket reservations with live capacity management</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                                <Ticket className="h-6 w-6 text-green-600" />
                            </div>
                            <h4 className="font-semibold mb-2">QR Code Tickets</h4>
                            <p className="text-sm text-gray-600">Secure digital tickets with instant validation</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                                <Users className="h-6 w-6 text-purple-600" />
                            </div>
                            <h4 className="font-semibold mb-2">Analytics Dashboard</h4>
                            <p className="text-sm text-gray-600">Comprehensive insights and revenue tracking</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}