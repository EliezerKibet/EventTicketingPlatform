'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Calendar, User, LogOut, Settings, Ticket } from 'lucide-react';

const Navbar: React.FC = () => {
    const { user, logout, isAuthenticated, isOrganizer } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="bg-white shadow-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <Calendar className="h-8 w-8 text-blue-600" />
                            <span className="text-xl font-bold text-gray-900">EventHub</span>
                        </Link>

                        <div className="hidden md:flex items-center space-x-8 ml-10">
                            <Link href="/events" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                Events
                            </Link>
                            {isOrganizer && (
                                <Link href="/organizer" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                    Organize
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {isAuthenticated ? (
                            <div className="flex items-center space-x-4">
                                <Link href="/tickets" className="flex items-center text-gray-700 hover:text-blue-600">
                                    <Ticket className="h-5 w-5 mr-1" />
                                    My Tickets
                                </Link>

                                <div className="relative group">
                                    <button className="flex items-center text-gray-700 hover:text-blue-600">
                                        <User className="h-5 w-5 mr-1" />
                                        {user?.firstName}
                                    </button>

                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                        <div className="py-1">
                                            <Link href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                <Settings className="h-4 w-4 mr-2" />
                                                Profile Settings
                                            </Link>
                                            <Link href="/orders" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                <Ticket className="h-4 w-4 mr-2" />
                                                My Orders
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                <LogOut className="h-4 w-4 mr-2" />
                                                Sign Out
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link href="/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                    Sign In
                                </Link>
                                <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;