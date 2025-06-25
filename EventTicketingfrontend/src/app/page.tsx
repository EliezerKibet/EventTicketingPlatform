/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth'; 
import { Calendar, Users, Ticket, ArrowRight, Sparkles, Music, MapPin } from 'lucide-react';

export default function Home() {
    const router = useRouter();
    const { user, isLoading, isOrganizer } = useAuth();
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

                        {/* Debug info - remove this later */}
                        {user && (
                            <div className="text-sm text-gray-500">
                                User: {user.firstName} | Roles: {user.roles?.join(', ') || 'None'} | isOrganizer: {String(isOrganizer)}
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Rest of your component stays the same... */}
            <main className="max-w-7xl mx-auto compact-card compact-space-y">
                {/* Your existing content */}
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

                            <button
                                type="button"
                                onClick={handleOrganizerClick}
                                className="btn-accent w-full compact-button font-semibold rounded-lg flex items-center justify-center group focus-accent mt-4"
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

                            <button
                                type="button"
                                onClick={handleCustomerClick}
                                className="w-full bg-green-600 text-white compact-button font-semibold rounded-lg hover:bg-green-700 theme-transition flex items-center justify-center group focus-accent mt-4"
                            >
                                Get Started as Customer
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 theme-transition" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}