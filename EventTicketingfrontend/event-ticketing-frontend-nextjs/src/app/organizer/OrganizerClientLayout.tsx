/* eslint-disable @typescript-eslint/no-unused-vars */
// app/organizer/OrganizerClientLayout.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useTheme, useThemeClasses } from '@/hooks/useTheme';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import {
    Calendar,
    Users,
    DollarSign,
    BarChart3,
    Settings,
    Plus,
    Menu,
    X,
    Home,
    MapPin,
    Ticket,
    LogOut
} from 'lucide-react';

interface OrganizerClientLayoutProps {
    children: React.ReactNode;
}

const OrganizerClientLayout: React.FC<OrganizerClientLayoutProps> = ({ children }) => {
    const { user, logout, isOrganizer, isLoading } = useAuth();
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Theme hooks
    const { initializeTheme } = useTheme();
    const themeClasses = useThemeClasses();

    // Initialize theme on component mount
    useEffect(() => {
        initializeTheme();
    }, [initializeTheme]);

    // Handle authentication and authorization
    useEffect(() => {
        if (!isLoading) {
            if (!user) {
                router.push('/login');
                return;
            }

            if (!isOrganizer) {
                router.push('/');
                return;
            }
        }
    }, [user, isOrganizer, isLoading, router]);

    const navigation = [
        {
            name: 'Dashboard',
            href: '/organizer/dashboard',
            icon: Home,
        },
        {
            name: 'My Events',
            href: '/organizer/events',
            icon: Calendar,
        },
        {
            name: 'Create Event',
            href: '/organizer/events/create',
            icon: Plus,
        },
        {
            name: 'Venues',
            href: '/organizer/venues',
            icon: MapPin,
        },
        {
            name: 'Ticket Management',
            href: '/organizer/tickets',
            icon: Ticket,
        },
        {
            name: 'Analytics',
            href: '/organizer/analytics',
            icon: BarChart3,
        },
        {
            name: 'Settings',
            href: '/organizer/settings',
            icon: Settings,
        }
    ];

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    // Show loading state with theme support
    if (isLoading) {
        return (
            <div className={`min-h-screen ${themeClasses.background} flex items-center justify-center`}>
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className={`mt-4 ${themeClasses.textMuted}`}>Loading...</p>
                </div>
            </div>
        );
    }

    // Don't render anything if user is not authenticated or not an organizer
    if (!user || !isOrganizer) {
        return null;
    }

    return (
        <div className={`h-screen flex overflow-hidden ${themeClasses.background}`}>
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div
                        className="fixed inset-0 bg-gray-600 bg-opacity-75"
                        onClick={() => setSidebarOpen(false)}
                    />
                </div>
            )}

            {/* Sidebar with theme support */}
            <div className={`fixed inset-y-0 left-0 z-50 w-64 ${themeClasses.card} shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col`}>

                {/* Sidebar header with theme support */}
                <div className={`flex items-center justify-between h-16 px-6 border-b ${themeClasses.border} flex-shrink-0`}>
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Calendar className="h-8 w-8" style={{ color: 'var(--color-primary)' }} />
                        </div>
                        <div className="ml-3">
                            <h1 className={`text-lg font-semibold ${themeClasses.text}`}>EventPro</h1>
                            <p className={`text-xs ${themeClasses.textMuted}`}>Organizer</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className={`lg:hidden p-2 rounded-md ${themeClasses.textMuted} hover:${themeClasses.text} ${themeClasses.hover} transition-colors`}
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Navigation with theme support */}
                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                    {navigation.map((item) => {
                        const Icon = item.icon;

                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${themeClasses.textMuted} hover:${themeClasses.text} ${themeClasses.hover}`}
                            >
                                <Icon className={`h-5 w-5 mr-3 ${themeClasses.textMuted}`} />
                                {item.name}
                            </a>
                        );
                    })}
                </nav>

                {/* User profile section with theme support */}
                <div className={`border-t ${themeClasses.border} p-4 flex-shrink-0`}>
                    <div className="flex items-center space-x-3 mb-3">
                        <div className="flex-shrink-0">
                            <div
                                className="h-10 w-10 rounded-full flex items-center justify-center"
                                style={{
                                    backgroundColor: 'var(--color-primary)',
                                    opacity: 0.1
                                }}
                            >
                                <Users className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium ${themeClasses.text} truncate`}>
                                {user.firstName} {user.lastName}
                            </p>
                            <p className={`text-xs ${themeClasses.textMuted} truncate`}>{user.email}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className={`flex items-center w-full px-3 py-2 text-sm ${themeClasses.textMuted} hover:${themeClasses.text} ${themeClasses.hover} rounded-lg transition-colors`}
                    >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign out
                    </button>
                </div>
            </div>

            {/* Main content area with theme support */}
            <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
                {/* Top bar with theme support */}
                <div className={`${themeClasses.card} shadow-sm border-b ${themeClasses.border} flex-shrink-0`}>
                    <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className={`lg:hidden p-2 rounded-md ${themeClasses.textMuted} hover:${themeClasses.text} ${themeClasses.hover} transition-colors`}
                        >
                            <Menu className="h-5 w-5" />
                        </button>

                        <div className="flex items-center space-x-4">
                            <div className="hidden sm:block">
                                <p className={`text-sm ${themeClasses.textMuted}`}>
                                    Welcome back, <span className={`font-medium ${themeClasses.text}`}>{user.firstName}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page content with theme support */}
                <main className={`flex-1 overflow-y-auto ${themeClasses.background}`}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default OrganizerClientLayout;