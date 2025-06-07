'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Calendar } from 'lucide-react';

export default function Home() {
    const router = useRouter();
    const { user, isLoading, isOrganizer } = useAuth();
    const [isRedirecting, setIsRedirecting] = useState(false);

    useEffect(() => {
        console.log('Auth state:', { user, isLoading, isOrganizer });

        if (isLoading) {
            console.log('Still loading auth...');
            return;
        }

        setIsRedirecting(true);

        if (!user) {
            console.log('No user, redirecting to login');
            router.replace('/login');
        } else {
            if (isOrganizer) {
                console.log('User is organizer, redirecting to dashboard');
                router.replace('/organizer/dashboard');
            } else {
                console.log('User is customer, redirecting to events');
                router.replace('/events');
            }
        }
    }, [user, isLoading, isOrganizer, router]);

    // Add timeout to prevent infinite loading
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isLoading) {
                console.warn('Auth loading timeout, redirecting to login');
                router.replace('/login');
            }
        }, 5000); // 5 second timeout

        return () => clearTimeout(timeout);
    }, [isLoading, router]);

    // Show loading state while checking auth and redirecting
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <div className="flex justify-center mb-4">
                    <Calendar className="h-12 w-12 text-blue-600" />
                </div>
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">
                    {isLoading ? 'Loading...' : isRedirecting ? 'Redirecting...' : 'Please wait...'}
                </p>
            </div>
        </div>
    );
}