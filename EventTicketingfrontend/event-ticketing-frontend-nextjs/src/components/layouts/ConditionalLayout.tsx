// components/layouts/ConditionalLayout.tsx
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import OrganizerClientLayout from '@/app/organizer/OrganizerClientLayout';

interface ConditionalLayoutProps {
    children: React.ReactNode;
}

const ConditionalLayout: React.FC<ConditionalLayoutProps> = ({ children }) => {
    const pathname = usePathname();

    // Check if we're in the organizer section
    const isOrganizerRoute = pathname?.startsWith('/organizer');

    if (isOrganizerRoute) {
        // For organizer routes, use the organizer layout which includes its own sidebar
        return (
            <OrganizerClientLayout>
                {children}
            </OrganizerClientLayout>
        );
    }

    // For non-organizer routes, render children without any layout wrapper
    // This prevents the global layout from adding another sidebar
    return <>{children}</>;
};

export default ConditionalLayout;