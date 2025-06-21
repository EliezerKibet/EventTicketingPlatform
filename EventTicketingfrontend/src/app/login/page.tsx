/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Eye, EyeOff, Calendar, Users, Star } from 'lucide-react';

interface UserPreferences {
    emailNotifications: boolean;
    sessionTimeout: number;
    theme: string;
    language: string;
    dateFormat: string;
    timeFormat: string;
    defaultTimeZone?: string;
    accentColor?: string;
    fontSize?: string;
    compactMode?: boolean;
}

// Enhanced theming system - UNIFIED across all pages
const getThemeClasses = (preferences: UserPreferences | null) => {
    const isDarkMode = preferences?.theme === 'dark' ||
        (preferences?.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const accentColor = preferences?.accentColor || 'blue';
    const fontSize = preferences?.fontSize || 'medium';
    const compactMode = preferences?.compactMode || false;

    // Accent color configurations
    const accentColors = {
        blue: {
            primary: 'bg-blue-600',
            hover: 'hover:bg-blue-700',
            light: isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50',
            text: isDarkMode ? 'text-blue-400' : 'text-blue-600',
            border: isDarkMode ? 'border-blue-700' : 'border-blue-200',
            ring: 'focus:ring-blue-500 focus:border-blue-500',
            gradient: 'from-blue-600 to-blue-700'
        },
        purple: {
            primary: 'bg-purple-600',
            hover: 'hover:bg-purple-700',
            light: isDarkMode ? 'bg-purple-900/20' : 'bg-purple-50',
            text: isDarkMode ? 'text-purple-400' : 'text-purple-600',
            border: isDarkMode ? 'border-purple-700' : 'border-purple-200',
            ring: 'focus:ring-purple-500 focus:border-purple-500',
            gradient: 'from-purple-600 to-purple-700'
        },
        green: {
            primary: 'bg-green-600',
            hover: 'hover:bg-green-700',
            light: isDarkMode ? 'bg-green-900/20' : 'bg-green-50',
            text: isDarkMode ? 'text-green-400' : 'text-green-600',
            border: isDarkMode ? 'border-green-700' : 'border-green-200',
            ring: 'focus:ring-green-500 focus:border-green-500',
            gradient: 'from-green-600 to-green-700'
        },
        orange: {
            primary: 'bg-orange-600',
            hover: 'hover:bg-orange-700',
            light: isDarkMode ? 'bg-orange-900/20' : 'bg-orange-50',
            text: isDarkMode ? 'text-orange-400' : 'text-orange-600',
            border: isDarkMode ? 'border-orange-700' : 'border-orange-200',
            ring: 'focus:ring-orange-500 focus:border-orange-500',
            gradient: 'from-orange-600 to-orange-700'
        },
        pink: {
            primary: 'bg-pink-600',
            hover: 'hover:bg-pink-700',
            light: isDarkMode ? 'bg-pink-900/20' : 'bg-pink-50',
            text: isDarkMode ? 'text-pink-400' : 'text-pink-600',
            border: isDarkMode ? 'border-pink-700' : 'border-pink-200',
            ring: 'focus:ring-pink-500 focus:border-pink-500',
            gradient: 'from-pink-600 to-pink-700'
        }
    };

    const currentAccent = accentColors[accentColor as keyof typeof accentColors] || accentColors.blue;

    // Font size configurations
    const fontSizes = {
        small: {
            text: 'text-sm',
            heading: 'text-lg',
            title: 'text-xl',
            subtitle: 'text-xs',
            button: 'text-sm',
            label: 'text-xs',
            hero: 'text-4xl md:text-5xl',
            section: 'text-2xl md:text-3xl'
        },
        medium: {
            text: 'text-base',
            heading: 'text-xl',
            title: 'text-2xl',
            subtitle: 'text-sm',
            button: 'text-base',
            label: 'text-sm',
            hero: 'text-5xl md:text-6xl',
            section: 'text-3xl md:text-4xl'
        },
        large: {
            text: 'text-lg',
            heading: 'text-2xl',
            title: 'text-3xl',
            subtitle: 'text-base',
            button: 'text-lg',
            label: 'text-base',
            hero: 'text-6xl md:text-7xl',
            section: 'text-4xl md:text-5xl'
        }
    };

    const currentFont = fontSizes[fontSize as keyof typeof fontSizes] || fontSizes.medium;

    return {
        // Basic colors
        background: isDarkMode ? 'bg-gray-900' : 'bg-white',
        backgroundCard: isDarkMode ? 'bg-gray-800' : 'bg-white',
        backgroundPage: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',

        // Text colors
        text: isDarkMode ? 'text-gray-100' : 'text-gray-900',
        textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
        textMuted: isDarkMode ? 'text-gray-400' : 'text-gray-400',

        // Borders
        border: isDarkMode ? 'border-gray-600' : 'border-gray-300',

        // Effects
        shadow: isDarkMode ? 'shadow' : 'shadow',

        // Typography & Layout
        fontSize: currentFont,

        // Padding/spacing based on compact mode
        padding: compactMode ? 'py-6 px-3' : 'py-8 px-4',
        paddingSmall: compactMode ? 'px-2 py-1' : 'px-3 py-2',
        buttonPadding: compactMode ? 'py-1 px-3' : 'py-2 px-4',

        // Margins
        marginTop: compactMode ? 'mt-4' : 'mt-6',
        marginTopSmall: compactMode ? 'mt-1' : 'mt-2',
        marginTopLarge: compactMode ? 'mt-6' : 'mt-8',
        marginBottom: compactMode ? 'mb-4' : 'mb-6',

        // Spacing
        spacing: compactMode ? 'space-y-4' : 'space-y-6',

        // Icon sizes
        iconSize: compactMode ? 'h-4 w-4' : 'h-5 w-5',
        iconSizeLarge: compactMode ? 'h-10 w-10' : 'h-12 w-12',

        // Accent colors
        accent: currentAccent.primary,
        accentHover: currentAccent.hover,
        accentText: currentAccent.text,
        accentRing: currentAccent.ring,

        // State info
        isDarkMode,
        compactMode
    };
};

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [preferences, setPreferences] = useState<UserPreferences | null>(null);

    const { login } = useAuth();
    const router = useRouter();

    const themeClasses = getThemeClasses(preferences);

    useEffect(() => {
        // Set default preferences for login page (no user logged in yet)
        setPreferences({
            emailNotifications: true,
            sessionTimeout: 30,
            theme: 'light',
            language: 'en',
            dateFormat: 'MM/dd/yyyy',
            timeFormat: '12h',
            defaultTimeZone: 'UTC',
            accentColor: 'blue',
            fontSize: 'medium',
            compactMode: false
        });
    }, []);

    // Apply theme to document body
    useEffect(() => {
        if (themeClasses.isDarkMode) {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark');
        }
    }, [themeClasses.isDarkMode]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            await login({ email, password });
            // Redirect will be handled by useAuth based on user role
        } catch (error) {
            setError('Invalid email or password');
        } finally {
            setIsLoading(false);
        }
    };

    const fillCredentials = (userType: 'customer' | 'organizer') => {
        if (userType === 'organizer') {
            setEmail('organizer@events.com');
            setPassword('password123');
        } else {
            setEmail('user@events.com');
            setPassword('password123');
        }
    };

    return (
        <div className={`min-h-screen ${themeClasses.backgroundPage} flex flex-col justify-center py-12 sm:px-6 lg:px-8`}>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <Calendar className={`${themeClasses.iconSizeLarge} ${themeClasses.accentText}`} />
                </div>
                <h2 className={`${themeClasses.marginTop} text-center ${themeClasses.fontSize.section} font-bold ${themeClasses.text}`}>
                    Sign in to EventHub
                </h2>
                <p className={`${themeClasses.marginTopSmall} text-center ${themeClasses.fontSize.subtitle} ${themeClasses.textSecondary}`}>
                    Or{' '}
                    <Link href="/register" className={`font-medium ${themeClasses.accentText} ${themeClasses.accentHover}`}>
                        create a new account
                    </Link>
                </p>
            </div>

            <div className={`${themeClasses.marginTopLarge} sm:mx-auto sm:w-full sm:max-w-md`}>
                <div className={`${themeClasses.backgroundCard} ${themeClasses.padding} ${themeClasses.shadow} sm:rounded-lg sm:px-10`}>
                    <form className={themeClasses.spacing} onSubmit={handleSubmit}>
                        {error && (
                            <div className={`bg-red-50 border border-red-200 text-red-600 ${themeClasses.paddingSmall} rounded-md`}>
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className={`block ${themeClasses.fontSize.label} font-medium ${themeClasses.text}`}>
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`appearance-none block w-full ${themeClasses.paddingSmall} border ${themeClasses.border} rounded-md ${themeClasses.shadow} placeholder-gray-400 ${themeClasses.accentRing}`}
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className={`block ${themeClasses.fontSize.label} font-medium ${themeClasses.text}`}>
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`appearance-none block w-full ${themeClasses.paddingSmall} border ${themeClasses.border} rounded-md ${themeClasses.shadow} placeholder-gray-400 ${themeClasses.accentRing} pr-10`}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className={`${themeClasses.iconSize} ${themeClasses.textMuted}`} />
                                    ) : (
                                        <Eye className={`${themeClasses.iconSize} ${themeClasses.textMuted}`} />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full flex justify-center ${themeClasses.buttonPadding} border border-transparent rounded-md ${themeClasses.shadow} ${themeClasses.fontSize.button} font-medium text-white ${themeClasses.accent} ${themeClasses.accentHover} focus:outline-none focus:ring-2 focus:ring-offset-2 ${themeClasses.accentRing} disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                {isLoading ? 'Signing in...' : 'Sign in'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}