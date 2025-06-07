// app/organizer/layout.tsx
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    // This layout doesn't need to do anything special
    // The ConditionalLayout component handles the organizer layout logic
    return <>{children}</>;
}