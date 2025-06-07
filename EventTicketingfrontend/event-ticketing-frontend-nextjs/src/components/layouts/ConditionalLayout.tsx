// components/layouts/ConditionalLayout.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import OrganizerClientLayout from '@/app/organizer/OrganizerClientLayout';
import CustomerNavbar from '@/components/common/Navbar'; // Your existing customer navbar

interface ConditionalLayoutProps {
    children: React.ReactNode;
}

const ConditionalLayout: React.FC<ConditionalLayoutProps> = ({ children }) => {
    const pathname = usePathname();
    const { user, isOrganizer, isLoading } = useAuth();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Don't render anything until mounted (prevents hydration mismatch)
    if (!mounted) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    // Show loading state
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    // Determine which layout to use
    const isOrganizerRoute = pathname?.startsWith('/organizer');
    const isAuthRoute = pathname === '/login' || pathname === '/register';

    // For auth pages, don't show any navigation
    if (isAuthRoute) {
        return <>{children}</>;
    }

    // For organizer routes, use organizer layout
    if (isOrganizerRoute) {
        // Only show organizer layout if user is actually an organizer
        if (!user) {
            // Redirect to login will be handled by the organizer layout
            return <>{children}</>;
        }

        if (!isOrganizer) {
            // User is logged in but not an organizer, redirect to home
            window.location.href = '/';
            return null;
        }

        return (
            <OrganizerClientLayout>
                {children}
            </OrganizerClientLayout>
        );
    }

    // For all other routes, use customer layout
    return (
        <>
            <CustomerNavbar />
            {children}
        </>
    );
};

export default ConditionalLayout;