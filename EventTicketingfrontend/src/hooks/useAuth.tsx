/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

// Updated User interface to match your backend User entity
interface User {
    userId?: number;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    dateOfBirth?: string;
    profileImageUrl?: string; // Made optional to fix the error
    isEmailVerified?: boolean;
    isPhoneVerified?: boolean;
    createdAt?: string;
    lastLoginAt?: string;
    status?: string;
    roles: string[];
}

interface AuthResponse {
    token: string;
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];
    expiresAt?: string;
    user?: {
        userId: number;
        email: string;
        firstName: string;
        lastName: string;
        phoneNumber?: string;
        profileImageUrl?: string;
        isEmailVerified: boolean;
        isPhoneVerified: boolean;
        createdAt: string;
        lastLoginAt?: string;
        status: string;
    };
}

interface LoginRequest {
    email: string;
    password: string;
}

interface RegisterRequest {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
}

interface AuthContextType {
    user: User | null;
    login: (credentials: LoginRequest) => Promise<void>;
    register: (userData: RegisterRequest) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
    isAuthenticated: boolean;
    isOrganizer: boolean;
    isAdmin: boolean;
    refreshUser: () => Promise<void>; // Add this to refresh user data
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const userData = localStorage.getItem('user');

        if (token && userData) {
            try {
                const parsedUser = JSON.parse(userData);
                setUser(parsedUser);
                // Optionally refresh user data from backend to get latest profile info
                refreshUser();
            } catch (error) {
                console.error('Error parsing user data:', error);
                localStorage.removeItem('authToken');
                localStorage.removeItem('user');
            }
        }
        setIsLoading(false);
    }, []);

    // Add function to refresh user data from backend
    const refreshUser = async () => {
        try {
            const token = localStorage.getItem('authToken');
            if (!token) return;

            const response = await fetch('http://localhost:5251/api/user/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const userData = await response.json();

                // Create updated user object with profile image
                const updatedUser: User = {
                    userId: userData.userId,
                    email: userData.email,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    phoneNumber: userData.phoneNumber,
                    profileImageUrl: userData.profileImageUrl,
                    isEmailVerified: userData.isEmailVerified,
                    isPhoneVerified: userData.isPhoneVerified,
                    createdAt: userData.createdAt,
                    lastLoginAt: userData.lastLoginAt,
                    status: userData.status,
                    roles: user?.roles || [] // Keep existing roles
                };

                setUser(updatedUser);
                localStorage.setItem('user', JSON.stringify(updatedUser));
            }
        } catch (error) {
            console.error('Error refreshing user data:', error);
        }
    };

    const login = async (credentials: LoginRequest) => {
        try {
            const response = await fetch('http://localhost:5251/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const authData: AuthResponse = await response.json();

            // Create user object with profile image support
            const userData: User = {
                userId: authData.user?.userId,
                email: authData.email,
                firstName: authData.firstName,
                lastName: authData.lastName,
                phoneNumber: authData.user?.phoneNumber,
                profileImageUrl: authData.user?.profileImageUrl, // Now properly included
                isEmailVerified: authData.user?.isEmailVerified,
                isPhoneVerified: authData.user?.isPhoneVerified,
                createdAt: authData.user?.createdAt,
                lastLoginAt: authData.user?.lastLoginAt,
                status: authData.user?.status,
                roles: authData.roles
            };

            localStorage.setItem('authToken', authData.token);
            localStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);

            // Role-based redirect
            if (userData.roles.includes('Admin')) {
                router.push('/admin/dashboard');
            } else if (userData.roles.includes('Organizer')) {
                router.push('/organizer/dashboard');
            } else {
                router.push('/events');
            }

        } catch (error) {
            console.error('Login error:', error);
            throw new Error('Login failed');
        }
    };

    const register = async (userData: RegisterRequest) => {
        try {
            const response = await fetch('http://localhost:5251/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const authData: AuthResponse = await response.json();

            const user: User = {
                userId: authData.user?.userId,
                email: authData.email,
                firstName: authData.firstName,
                lastName: authData.lastName,
                phoneNumber: authData.user?.phoneNumber,
                profileImageUrl: authData.user?.profileImageUrl, // Now properly included
                isEmailVerified: authData.user?.isEmailVerified,
                isPhoneVerified: authData.user?.isPhoneVerified,
                createdAt: authData.user?.createdAt,
                lastLoginAt: authData.user?.lastLoginAt,
                status: authData.user?.status,
                roles: authData.roles
            };

            localStorage.setItem('authToken', authData.token);
            localStorage.setItem('user', JSON.stringify(user));
            setUser(user);

            // Role-based redirect after registration
            if (user.roles.includes('Admin')) {
                router.push('/admin/dashboard');
            } else if (user.roles.includes('Organizer')) {
                router.push('/organizer/dashboard');
            } else {
                router.push('/events');
            }

        } catch (error) {
            console.error('Registration error:', error);
            throw new Error('Registration failed');
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setUser(null);
        router.push('/');
    };

    const isAuthenticated = !!user;
    const isOrganizer = user?.roles.includes('Organizer') ?? false;
    const isAdmin = user?.roles.includes('Admin') ?? false;

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                register,
                logout,
                isLoading,
                isAuthenticated,
                isOrganizer,
                isAdmin,
                refreshUser, // Expose refresh function
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};