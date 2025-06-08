/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState, useEffect } from 'react';
import { userApi } from '@/lib/api';
import { useTheme, useThemeClasses } from '@/hooks/useTheme';
import {
    User,
    Mail,
    Phone,
    MapPin,
    Building2,
    CreditCard,
    Bell,
    Shield,
    Palette,
    Calendar,
    DollarSign,
    Globe,
    Settings,
    Save,
    Eye,
    EyeOff,
    Clock,
    Languages,
    Smartphone,
    Key,
    Download,
    Upload,
    RefreshCw,
    AlertCircle,
    CheckCircle,
    Lock,
    Unlock,
    Zap,
    FileText,
    Monitor,
    Sun,
    Moon,
    Check,
    X
} from 'lucide-react';

// Type definitions matching your backend DTOs exactly
interface UserPreferences {
    // Notification preferences
    emailNotifications: boolean;
    smsNotifications: boolean;
    newBookingNotifications: boolean;
    cancellationNotifications: boolean;
    lowInventoryNotifications: boolean;
    dailyReports: boolean;
    weeklyReports: boolean;
    monthlyReports: boolean;

    // Security preferences
    twoFactorEnabled: boolean;
    sessionTimeout: number;
    loginNotifications: boolean;

    // Event defaults
    defaultTimeZone?: string;
    defaultEventDuration: number;
    defaultTicketSaleStart: number;
    defaultRefundPolicy?: string;
    requireApproval: boolean;
    autoPublish: boolean;

    // Appearance preferences
    // Enhanced appearance preferences 
    theme: 'light' | 'dark' | 'auto'; 
    language: string;
    dateFormat: string;
    timeFormat: '12h' | '24h';  
    currency: string;
    accentColor: string;        
    fontSize: 'small' | 'medium' | 'large';  
    compactMode: boolean;    
}

interface UserProfileData {
    companyName?: string;
    businessLicense?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    // Additional fields from UserProfile entity for UI
    bio?: string;
    website?: string;
    timeZone?: string;
    isOrganizer?: boolean;
}

interface UserData {
    userId?: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    dateOfBirth?: string;
    profileImageUrl?: string;
    isEmailVerified?: boolean;
    isPhoneVerified?: boolean;
    createdAt?: string;
    lastLoginAt?: string;
    status?: string;
    bio?: string;
    website?: string;
    timeZone?: string;
    isOrganizer?: boolean;
    roles?: string[];
}

const themes = [
    {
        id: 'light',
        name: 'Light',
        icon: Sun,
        description: 'Clean and bright interface',
        preview: { bg: 'bg-white', text: 'text-gray-900', border: 'border-gray-200' }
    },
    {
        id: 'dark',
        name: 'Dark',
        icon: Moon,
        description: 'Easy on the eyes',
        preview: { bg: 'bg-gray-900', text: 'text-white', border: 'border-gray-700' }
    },
    {
        id: 'auto',
        name: 'Auto',
        icon: Monitor,
        description: 'Follows system preference',
        preview: { bg: 'bg-gradient-to-r from-white to-gray-900', text: 'text-gray-600', border: 'border-gray-400' }
    }
];

const accentColors = [
    { id: 'blue', name: 'Blue', class: 'bg-blue-500', rgb: 'rgb(59, 130, 246)' },
    { id: 'purple', name: 'Purple', class: 'bg-purple-500', rgb: 'rgb(168, 85, 247)' },
    { id: 'green', name: 'Green', class: 'bg-green-500', rgb: 'rgb(34, 197, 94)' },
    { id: 'red', name: 'Red', class: 'bg-red-500', rgb: 'rgb(239, 68, 68)' },
    { id: 'orange', name: 'Orange', class: 'bg-orange-500', rgb: 'rgb(249, 115, 22)' },
    { id: 'pink', name: 'Pink', class: 'bg-pink-500', rgb: 'rgb(236, 72, 153)' }
];

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' }
];

const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' }
];



const OrganizerSettings: React.FC = () => {
    // State declarations
    const [activeTab, setActiveTab] = useState('profile');
    const [loading, setLoading] = useState(false);
    const [profileLoading, setProfileLoading] = useState(true);
    const [saved, setSaved] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [authStatus, setAuthStatus] = useState<'checking' | 'authenticated' | 'unauthenticated'>('checking');
    const [error, setError] = useState<string | null>(null);
    const { updateTheme } = useTheme();
    const themeClasses = useThemeClasses();

    // User basic data (from User entity)
    const [userData, setUserData] = useState<UserData>({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        profileImageUrl: ''
    });

    // User profile data (from UserProfile entity)
    const [userProfile, setUserProfile] = useState<UserProfileData>({
        bio: '',
        website: '',
        companyName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'United States',
        timeZone: 'America/New_York',
        isOrganizer: false,
        businessLicense: ''
    });

    // User preferences (from UserPreferences entity)
    const [userPreferences, setUserPreferences] = useState<UserPreferences>({
        // Notification preferences
        emailNotifications: true,
        smsNotifications: false,
        newBookingNotifications: true,
        cancellationNotifications: true,
        lowInventoryNotifications: true,
        dailyReports: false,
        weeklyReports: true,
        monthlyReports: true,

        // Security preferences
        twoFactorEnabled: false,
        sessionTimeout: 30,
        loginNotifications: true,

        // Event defaults
        defaultTimeZone: 'America/New_York',
        defaultEventDuration: 120,
        defaultTicketSaleStart: 30,
        defaultRefundPolicy: 'flexible',
        requireApproval: false,
        autoPublish: false,

        accentColor: 'blue',
        fontSize: 'medium',
        compactMode: false,

        // Appearance preferences
        theme: 'light',
        language: 'en',
        dateFormat: 'MM/dd/yyyy',
        timeFormat: '12h',
        currency: 'USD'
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    // Authentication check
    const checkAuth = (): boolean => {
        const token = localStorage.getItem('authToken');

        console.log('🔍 Checking auth status:', { hasToken: !!token });

        if (!token) {
            setAuthStatus('unauthenticated');
            return false;
        }

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const currentTime = Math.floor(Date.now() / 1000);

            if (payload.exp && payload.exp < currentTime) {
                localStorage.removeItem('authToken');
                localStorage.removeItem('user');
                setAuthStatus('unauthenticated');
                return false;
            }

            setAuthStatus('authenticated');
            console.log('✅ Authentication successful');
            return true;
        } catch (error) {
            console.error('Invalid token format:', error);
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
            setAuthStatus('unauthenticated');
            return false;
        }
    };

    // Fetch user data
    const fetchUserData = async (): Promise<void> => {
        if (!checkAuth()) return;

        setProfileLoading(true);
        setError(null);

        try {
            // Fetch user basic info using existing userApi
            const userResponse = await userApi.getProfile();
            setUserData({
                userId: userResponse.userId,
                firstName: userResponse.firstName || '',
                lastName: userResponse.lastName || '',
                email: userResponse.email || '',
                phoneNumber: userResponse.phoneNumber || '',
                dateOfBirth: userResponse.dateOfBirth || '',
                profileImageUrl: userResponse.profileImageUrl || '',
                isEmailVerified: userResponse.isEmailVerified || false,
                isPhoneVerified: userResponse.isPhoneVerified || false,
                createdAt: userResponse.createdAt || '',
                lastLoginAt: userResponse.lastLoginAt || '',
                status: userResponse.status || '',
                bio: userResponse.bio || '',
                website: userResponse.website || '',
                timeZone: userResponse.timeZone || '',
                isOrganizer: userResponse.isOrganizer || false,
                roles: userResponse.roles || []
            });

            // Fetch user organization using existing userApi
            try {
                const organizationData = await userApi.getOrganization();
                setUserProfile({
                    companyName: organizationData.companyName || '',
                    businessLicense: organizationData.businessLicense || '',
                    address: organizationData.address || '',
                    city: organizationData.city || '',
                    state: organizationData.state || '',
                    zipCode: organizationData.zipCode || '',
                    country: organizationData.country || 'United States',
                    // These come from user profile response
                    bio: userResponse.bio || '',
                    website: userResponse.website || '',
                    timeZone: userResponse.timeZone || 'America/New_York',
                    isOrganizer: userResponse.isOrganizer || false
                });
            } catch (orgError) {
                console.log('No organization data found, using defaults');
                setUserProfile({
                    companyName: '',
                    businessLicense: '',
                    address: '',
                    city: '',
                    state: '',
                    zipCode: '',
                    country: 'United States',
                    // These come from user profile response  
                    bio: userResponse.bio || '',
                    website: userResponse.website || '',
                    timeZone: userResponse.timeZone || 'America/New_York',
                    isOrganizer: userResponse.isOrganizer || false
                });
            }

            // Fetch user preferences using existing userApi
            try {
                const preferencesData = await userApi.getPreferences();
                setUserPreferences({
                    // Notification preferences
                    emailNotifications: preferencesData.emailNotifications ?? true,
                    smsNotifications: preferencesData.smsNotifications ?? false,
                    newBookingNotifications: preferencesData.newBookingNotifications ?? true,
                    cancellationNotifications: preferencesData.cancellationNotifications ?? true,
                    lowInventoryNotifications: preferencesData.lowInventoryNotifications ?? true,
                    dailyReports: preferencesData.dailyReports ?? false,
                    weeklyReports: preferencesData.weeklyReports ?? true,
                    monthlyReports: preferencesData.monthlyReports ?? true,

                    // Security preferences
                    twoFactorEnabled: preferencesData.twoFactorEnabled ?? false,
                    sessionTimeout: preferencesData.sessionTimeout ?? 30,
                    loginNotifications: preferencesData.loginNotifications ?? true,

                    // Event defaults
                    defaultTimeZone: preferencesData.defaultTimeZone ?? 'America/New_York',
                    defaultEventDuration: preferencesData.defaultEventDuration ?? 120,
                    defaultTicketSaleStart: preferencesData.defaultTicketSaleStart ?? 30,
                    defaultRefundPolicy: preferencesData.defaultRefundPolicy ?? 'flexible',
                    requireApproval: preferencesData.requireApproval ?? false,
                    autoPublish: preferencesData.autoPublish ?? false,

                    // Appearance preferences

                    theme: (['light', 'dark', 'auto'].includes(preferencesData.theme) ? preferencesData.theme : 'light') as 'light' | 'dark' | 'auto',
                    language: preferencesData.language ?? 'en',
                    dateFormat: preferencesData.dateFormat ?? 'MM/dd/yyyy',
                    timeFormat: (['12h', '24h'].includes(preferencesData.timeFormat) ? preferencesData.timeFormat : '12h') as '12h' | '24h',
                    currency: preferencesData.currency ?? 'USD',
                    accentColor: preferencesData.accentColor ?? 'blue',
                    fontSize: (['small', 'medium', 'large'].includes(preferencesData.fontSize) ? preferencesData.fontSize : 'medium') as 'small' | 'medium' | 'large',
                    compactMode: preferencesData.compactMode ?? false

                });
            } catch (prefError) {
                console.log('No preferences found, using defaults');
                // Keep existing default preferences
            }

        } catch (error: any) {
            console.error('Error fetching user data:', error);
            setError(error.message || 'Failed to load user data');

            // Fallback to localStorage
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                try {
                    const userData = JSON.parse(storedUser);
                    setUserData({
                        firstName: userData.firstName || '',
                        lastName: userData.lastName || '',
                        email: userData.email || '',
                        phoneNumber: userData.phoneNumber || '',
                        profileImageUrl: userData.profileImageUrl || '',
                        bio: userData.bio || '',
                        website: userData.website || '',
                        timeZone: userData.timeZone || '',
                        isOrganizer: userData.isOrganizer || false,
                        roles: userData.roles || []
                    });
                } catch (parseError) {
                    console.error('Error parsing stored user data:', parseError);
                }
            }
        } finally {
            setProfileLoading(false);
        }
    };

    // Update user profile
    const updateUserProfile = async (): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            // Update basic user info
            await userApi.updateProfile({
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                phoneNumber: userData.phoneNumber
            });

            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (error: any) {
            console.error('Error updating profile:', error);
            setError(error.message || 'Failed to update profile');
        } finally {
            setLoading(false);
        }
    };

    // Update user profile (organization info)
    const updateUserProfileInfo = async (): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            await userApi.updateOrganization({
                companyName: userProfile.companyName,
                businessLicense: userProfile.businessLicense,
                address: userProfile.address,
                city: userProfile.city,
                state: userProfile.state,
                zipCode: userProfile.zipCode,
                country: userProfile.country
            });

            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (error: any) {
            console.error('Error updating profile info:', error);
            setError(error.message || 'Failed to update profile information');
        } finally {
            setLoading(false);
        }
    };

    // Update user preferences
    const updateUserPreferences = async (): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            await userApi.updatePreferences({
                emailNotifications: userPreferences.emailNotifications,
                smsNotifications: userPreferences.smsNotifications,
                newBookingNotifications: userPreferences.newBookingNotifications,
                cancellationNotifications: userPreferences.cancellationNotifications,
                lowInventoryNotifications: userPreferences.lowInventoryNotifications,
                dailyReports: userPreferences.dailyReports,
                weeklyReports: userPreferences.weeklyReports,
                monthlyReports: userPreferences.monthlyReports,
                twoFactorEnabled: userPreferences.twoFactorEnabled,
                sessionTimeout: userPreferences.sessionTimeout,
                loginNotifications: userPreferences.loginNotifications,
                defaultTimeZone: userPreferences.defaultTimeZone,
                defaultEventDuration: userPreferences.defaultEventDuration,
                defaultTicketSaleStart: userPreferences.defaultTicketSaleStart,
                defaultRefundPolicy: userPreferences.defaultRefundPolicy,
                requireApproval: userPreferences.requireApproval,
                autoPublish: userPreferences.autoPublish,
                theme: userPreferences.theme,
                language: userPreferences.language,
                dateFormat: userPreferences.dateFormat,
                timeFormat: userPreferences.timeFormat,
                currency: userPreferences.currency,
                // ADD THESE NEW FIELDS:
                accentColor: userPreferences.accentColor,
                fontSize: userPreferences.fontSize,
                compactMode: userPreferences.compactMode
            });

            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (error: any) {
            console.error('Error updating preferences:', error);
            setError(error.message || 'Failed to update preferences');
        } finally {
            setLoading(false);
        }
    };

    // Change password
    const changePassword = async (): Promise<void> => {
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setError('New passwords do not match');
            return;
        }

        if (passwordData.newPassword.length < 6) {
            setError('New password must be at least 6 characters long');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            await userApi.changePassword({
                currentPassword: passwordData.currentPassword,
                newPassword: passwordData.newPassword
            });

            setPasswordData({
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            });

            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (error: any) {
            console.error('Error changing password:', error);
            setError(error.message || 'Failed to change password');
        } finally {
            setLoading(false);
        }
    };

    // Handle save based on active tab
    const handleSave = async (section: string) => {
        setError(null);

        switch (section) {
            case 'profile':
                await updateUserProfile();
                break;
            case 'organization':
                await updateUserProfileInfo();
                break;
            case 'notifications':
            case 'security':
            case 'events':
            case 'appearance':
                await updateUserPreferences();
                break;
            default:
                await updateUserProfile();
        }
    };

    // Helper function for updating preferences
    const updatePreference = <K extends keyof UserPreferences>(
        key: K,
        value: UserPreferences[K]
    ) => {
        setUserPreferences(prev => ({
            ...prev,
            [key]: value
        }));

        // Update global theme immediately
        if (key === 'theme' || key === 'accentColor' || key === 'fontSize' || key === 'compactMode') {
            updateTheme({ [key]: value });
        }
    };

    // Effects
    useEffect(() => {
        checkAuth();
    }, []);

    useEffect(() => {
        if (authStatus === 'authenticated') {
            fetchUserData();
        }
    }, [authStatus]);


    // Tab configuration
    const tabs = [
        { id: 'profile', name: 'Profile', icon: User },
        { id: 'organization', name: 'Organization', icon: Building2 },
        { id: 'notifications', name: 'Notifications', icon: Bell },
        { id: 'security', name: 'Security', icon: Shield },
        { id: 'events', name: 'Event Defaults', icon: Calendar },
        { id: 'appearance', name: 'Appearance', icon: Palette }
    ];

    // Toggle component for switches
    const Toggle: React.FC<{ enabled: boolean; onChange: (enabled: boolean) => void; disabled?: boolean }> = ({ enabled, onChange, disabled = false }) => (
        <button
            type="button"
            onClick={() => !disabled && onChange(!enabled)}
            disabled={disabled}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled ? 'bg-blue-600' : 'bg-gray-200'
                } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
            />
        </button>
    );

    // Render functions
    const renderProfileTab = () => (
        <div className="space-y-6">
            {profileLoading && (
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <div className="flex items-center justify-center h-32">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                        <span className="ml-3 text-black">Loading profile...</span>
                    </div>
                </div>
            )}

            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                        <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                        <span className="text-sm text-red-800">{error}</span>
                    </div>
                </div>
            )}

            {!profileLoading && (
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <h3 className="text-lg font-semibold text-black mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">First Name</label>
                            <input
                                type="text"
                                value={userData.firstName}
                                onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">Last Name</label>
                            <input
                                type="text"
                                value={userData.lastName}
                                onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">Email</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={userData.email}
                                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                                    disabled={loading}
                                />
                                {userData.isEmailVerified && (
                                    <CheckCircle className="absolute right-3 top-2.5 w-5 h-5 text-green-500" />
                                )}
                            </div>
                            {!userData.isEmailVerified && (
                                <p className="text-xs text-amber-600 mt-1">Email address not verified</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">Phone Number</label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    value={userData.phoneNumber || ''}
                                    onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                                    disabled={loading}
                                    placeholder="Optional"
                                />
                                {userData.isPhoneVerified && (
                                    <CheckCircle className="absolute right-3 top-2.5 w-5 h-5 text-green-500" />
                                )}
                            </div>
                            {userData.phoneNumber && !userData.isPhoneVerified && (
                                <p className="text-xs text-amber-600 mt-1">Phone number not verified</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {!profileLoading && (
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <h3 className="text-lg font-semibold text-black mb-4">Change Password</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">Current Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={passwordData.currentPassword}
                                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black pr-10"
                                    disabled={loading}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-2.5 text-gray-500"
                                    disabled={loading}
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">New Password</label>
                            <input
                                type="password"
                                value={passwordData.newPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                                disabled={loading}
                                placeholder="Minimum 6 characters"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">Confirm New Password</label>
                            <input
                                type="password"
                                value={passwordData.confirmPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                                disabled={loading}
                            />
                        </div>
                        <div className="pt-2">
                            <button
                                onClick={changePassword}
                                disabled={loading || !passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Changing...' : 'Change Password'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    const renderOrganizationTab = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Organization Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Company Name</label>
                        <input
                            type="text"
                            value={userProfile.companyName || ''}
                            onChange={(e) => setUserProfile({ ...userProfile, companyName: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Website</label>
                        <input
                            type="url"
                            value={userProfile.website || ''}
                            onChange={(e) => setUserProfile({ ...userProfile, website: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            disabled={loading}
                            placeholder="https://example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Business License</label>
                        <input
                            type="text"
                            value={userProfile.businessLicense || ''}
                            onChange={(e) => setUserProfile({ ...userProfile, businessLicense: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            disabled={loading}
                            placeholder="Business license number"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Time Zone</label>
                        <select
                            value={userProfile.timeZone || 'America/New_York'}
                            onChange={(e) => setUserProfile({ ...userProfile, timeZone: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            disabled={loading}
                        >
                            <option value="America/New_York">Eastern Time</option>
                            <option value="America/Chicago">Central Time</option>
                            <option value="America/Denver">Mountain Time</option>
                            <option value="America/Los_Angeles">Pacific Time</option>
                            <option value="UTC">UTC</option>
                        </select>
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-black mb-2">Address</label>
                    <input
                        type="text"
                        value={userProfile.address || ''}
                        onChange={(e) => setUserProfile({ ...userProfile, address: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        disabled={loading}
                        placeholder="Street address"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">City</label>
                        <input
                            type="text"
                            value={userProfile.city || ''}
                            onChange={(e) => setUserProfile({ ...userProfile, city: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">State</label>
                        <input
                            type="text"
                            value={userProfile.state || ''}
                            onChange={(e) => setUserProfile({ ...userProfile, state: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">ZIP Code</label>
                        <input
                            type="text"
                            value={userProfile.zipCode || ''}
                            onChange={(e) => setUserProfile({ ...userProfile, zipCode: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Country</label>
                        <input
                            type="text"
                            value={userProfile.country || ''}
                            onChange={(e) => setUserProfile({ ...userProfile, country: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            disabled={loading}
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-black mb-2">Bio</label>
                    <textarea
                        value={userProfile.bio || ''}
                        onChange={(e) => setUserProfile({ ...userProfile, bio: e.target.value })}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        placeholder="Describe your organization and what types of events you organize..."
                        disabled={loading}
                    />
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium text-black">Event Organizer</h4>
                            <p className="text-xs text-gray-600">Enable organizer features for this account</p>
                        </div>
                        <Toggle
                            enabled={userData.isOrganizer || false}
                            onChange={(enabled) => setUserData({ ...userData, isOrganizer: enabled })}
                            disabled={loading}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    const renderNotificationsTab = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Communication Preferences</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium text-black">Email Notifications</h4>
                            <p className="text-xs text-gray-600">Receive notifications via email</p>
                        </div>
                        <Toggle
                            enabled={userPreferences.emailNotifications}
                            onChange={(enabled) => updatePreference('emailNotifications', enabled)}
                            disabled={loading}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium text-black">SMS Notifications</h4>
                            <p className="text-xs text-gray-600">Receive notifications via text message</p>
                        </div>
                        <Toggle
                            enabled={userPreferences.smsNotifications}
                            onChange={(enabled) => updatePreference('smsNotifications', enabled)}
                            disabled={loading}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Event Notifications</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium text-black">New Bookings</h4>
                            <p className="text-xs text-gray-600">Get notified when someone books your event</p>
                        </div>
                        <Toggle
                            enabled={userPreferences.newBookingNotifications}
                            onChange={(enabled) => updatePreference('newBookingNotifications', enabled)}
                            disabled={loading}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium text-black">Cancellations</h4>
                            <p className="text-xs text-gray-600">Get notified when bookings are cancelled</p>
                        </div>
                        <Toggle
                            enabled={userPreferences.cancellationNotifications}
                            onChange={(enabled) => updatePreference('cancellationNotifications', enabled)}
                            disabled={loading}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium text-black">Low Inventory</h4>
                            <p className="text-xs text-gray-600">Get notified when ticket inventory is low</p>
                        </div>
                        <Toggle
                            enabled={userPreferences.lowInventoryNotifications}
                            onChange={(enabled) => updatePreference('lowInventoryNotifications', enabled)}
                            disabled={loading}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Report Notifications</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium text-black">Daily Reports</h4>
                            <p className="text-xs text-gray-600">Receive daily sales and booking reports</p>
                        </div>
                        <Toggle
                            enabled={userPreferences.dailyReports}
                            onChange={(enabled) => updatePreference('dailyReports', enabled)}
                            disabled={loading}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium text-black">Weekly Reports</h4>
                            <p className="text-xs text-gray-600">Receive weekly summary reports</p>
                        </div>
                        <Toggle
                            enabled={userPreferences.weeklyReports}
                            onChange={(enabled) => updatePreference('weeklyReports', enabled)}
                            disabled={loading}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium text-black">Monthly Reports</h4>
                            <p className="text-xs text-gray-600">Receive monthly analytics reports</p>
                        </div>
                        <Toggle
                            enabled={userPreferences.monthlyReports}
                            onChange={(enabled) => updatePreference('monthlyReports', enabled)}
                            disabled={loading}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSecurityTab = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Account Security</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium text-black">Two-Factor Authentication</h4>
                            <p className="text-xs text-gray-600">Add an extra layer of security to your account</p>
                        </div>
                        <Toggle
                            enabled={userPreferences.twoFactorEnabled}
                            onChange={(enabled) => updatePreference('twoFactorEnabled', enabled)}
                            disabled={loading}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium text-black">Login Notifications</h4>
                            <p className="text-xs text-gray-600">Get notified when someone logs into your account</p>
                        </div>
                        <Toggle
                            enabled={userPreferences.loginNotifications}
                            onChange={(enabled) => updatePreference('loginNotifications', enabled)}
                            disabled={loading}
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <label className="block text-sm font-medium text-black mb-2">Session Timeout (minutes)</label>
                    <select
                        value={userPreferences.sessionTimeout}
                        onChange={(e) => updatePreference('sessionTimeout', parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        disabled={loading}
                    >
                        <option value={15}>15 minutes</option>
                        <option value={30}>30 minutes</option>
                        <option value={60}>1 hour</option>
                        <option value={120}>2 hours</option>
                        <option value={480}>8 hours</option>
                    </select>
                </div>
            </div>
        </div>
    );

    const renderEventsTab = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Default Event Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Default Time Zone</label>
                        <select
                            value={userPreferences.defaultTimeZone}
                            onChange={(e) => updatePreference('defaultTimeZone', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            disabled={loading}
                        >
                            <option value="America/New_York">Eastern Time</option>
                            <option value="America/Chicago">Central Time</option>
                            <option value="America/Denver">Mountain Time</option>
                            <option value="America/Los_Angeles">Pacific Time</option>
                            <option value="UTC">UTC</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Default Duration (minutes)</label>
                        <input
                            type="number"
                            min="15"
                            step="15"
                            value={userPreferences.defaultEventDuration}
                            onChange={(e) => updatePreference('defaultEventDuration', parseInt(e.target.value))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Ticket Sale Start (days before)</label>
                        <input
                            type="number"
                            min="0"
                            value={userPreferences.defaultTicketSaleStart}
                            onChange={(e) => updatePreference('defaultTicketSaleStart', parseInt(e.target.value))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Default Refund Policy</label>
                        <select
                            value={userPreferences.defaultRefundPolicy}
                            onChange={(e) => updatePreference('defaultRefundPolicy', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            disabled={loading}
                        >
                            <option value="flexible">Flexible - Full refund until 24h before</option>
                            <option value="moderate">Moderate - Full refund until 7 days before</option>
                            <option value="strict">Strict - No refunds</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium text-black">Require Approval for Events</h4>
                            <p className="text-xs text-gray-600">Events need admin approval before going live</p>
                        </div>
                        <Toggle
                            enabled={userPreferences.requireApproval}
                            onChange={(enabled) => updatePreference('requireApproval', enabled)}
                            disabled={loading}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium text-black">Auto-Publish Events</h4>
                            <p className="text-xs text-gray-600">Automatically publish events when created</p>
                        </div>
                        <Toggle
                            enabled={userPreferences.autoPublish}
                            onChange={(enabled) => updatePreference('autoPublish', enabled)}
                            disabled={loading}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    const renderAppearanceTab = () => (
        <div className="space-y-6">
            {/* Theme Selection */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center space-x-2 mb-4">
                    <Palette className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-black">Theme</h3>
                </div>
                <p className="text-sm text-gray-600 mb-6">Choose your preferred interface theme</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {themes.map((theme) => {
                        const Icon = theme.icon;
                        const isSelected = userPreferences.theme === theme.id;

                        return (
                            <button
                                key={theme.id}
                                onClick={() => updatePreference('theme', theme.id as any)}
                                className={`relative p-4 rounded-lg border-2 transition-all ${isSelected
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                {isSelected && (
                                    <div className="absolute top-2 right-2">
                                        <Check className="w-4 h-4 text-blue-600" />
                                    </div>
                                )}

                                <div className="flex items-center space-x-3 mb-3">
                                    <Icon className="w-5 h-5 text-gray-600" />
                                    <span className="font-medium text-black">{theme.name}</span>
                                </div>

                                <p className="text-xs text-gray-500 mb-3">{theme.description}</p>

                                <div className={`${theme.preview.bg} ${theme.preview.border} border rounded p-2 space-y-1`}>
                                    <div className={`h-2 bg-blue-500 rounded`}></div>
                                    <div className={`h-1 ${theme.preview.text} bg-current opacity-50 rounded`}></div>
                                    <div className={`h-1 ${theme.preview.text} bg-current opacity-30 rounded w-3/4`}></div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Accent Color */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Accent Color</h3>
                <p className="text-sm text-gray-600 mb-6">Choose your preferred accent color</p>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    {accentColors.map((color) => (
                        <button
                            key={color.id}
                            onClick={() => updatePreference('accentColor', color.id)}
                            className={`relative p-3 rounded-lg border-2 transition-all ${userPreferences.accentColor === color.id
                                    ? 'border-gray-400'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <div className={`w-8 h-8 ${color.class} rounded-full mx-auto mb-2`}></div>
                            <span className="text-xs text-gray-600">{color.name}</span>
                            {userPreferences.accentColor === color.id && (
                                <div className="absolute top-1 right-1">
                                    <Check className="w-3 h-3 text-gray-600" />
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Display Settings */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Display Settings</h3>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-black mb-3">Font Size</label>
                        <div className="grid grid-cols-3 gap-3">
                            {(['small', 'medium', 'large'] as const).map((size) => (
                                <button
                                    key={size}
                                    onClick={() => updatePreference('fontSize', size)}
                                    className={`p-3 rounded-lg border-2 transition-all ${userPreferences.fontSize === size
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <div className={`${size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base'} text-black font-medium capitalize`}>
                                        {size}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium text-black">Compact Mode</h4>
                            <p className="text-xs text-gray-500">Reduce spacing between elements</p>
                        </div>
                        <Toggle
                            enabled={userPreferences.compactMode}
                            onChange={(enabled) => updatePreference('compactMode', enabled)}
                            disabled={loading}
                        />
                    </div>
                </div>
            </div>

            {/* Localization */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center space-x-2 mb-4">
                    <Globe className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-black">Localization</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Language</label>
                        <select
                            value={userPreferences.language}
                            onChange={(e) => updatePreference('language', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            disabled={loading}
                        >
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>
                                    {lang.flag} {lang.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Date Format</label>
                        <select
                            value={userPreferences.dateFormat}
                            onChange={(e) => updatePreference('dateFormat', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            disabled={loading}
                        >
                            <option value="MM/dd/yyyy">12/25/2024 (US)</option>
                            <option value="dd/MM/yyyy">25/12/2024 (UK)</option>
                            <option value="yyyy-MM-dd">2024-12-25 (ISO)</option>
                            <option value="dd.MM.yyyy">25.12.2024 (German)</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Currency</label>
                        <select
                            value={userPreferences.currency}
                            onChange={(e) => updatePreference('currency', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            disabled={loading}
                        >
                            {currencies.map((curr) => (
                                <option key={curr.code} value={curr.code}>
                                    {curr.symbol} {curr.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-black mb-2">Time Format</label>
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            onClick={() => updatePreference('timeFormat', '12h')}
                            className={`p-2 rounded-lg border-2 transition-all ${userPreferences.timeFormat === '12h'
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <div className="text-sm font-medium text-black">12-hour</div>
                            <div className="text-xs text-gray-500">2:30 PM</div>
                        </button>
                        <button
                            onClick={() => updatePreference('timeFormat', '24h')}
                            className={`p-2 rounded-lg border-2 transition-all ${userPreferences.timeFormat === '24h'
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <div className="text-sm font-medium text-black">24-hour</div>
                            <div className="text-xs text-gray-500">14:30</div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Live Preview */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Live Preview</h3>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-black">Sample Dashboard</h4>
                            <button
                                className="px-4 py-2 rounded-lg text-white"
                                style={{ backgroundColor: accentColors.find(c => c.id === userPreferences.accentColor)?.rgb }}
                            >
                                Create Event
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <div className="text-sm text-gray-500">Revenue</div>
                                <div className="text-2xl font-bold text-black">
                                    {currencies.find(c => c.code === userPreferences.currency)?.symbol}12,345
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <div className="text-sm text-gray-500">Next Event</div>
                                <div className="text-sm font-medium text-black">
                                    Dec 25, 2024 at {userPreferences.timeFormat === '12h' ? '2:30 PM' : '14:30'}
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <div className="text-sm text-gray-500">Language</div>
                                <div className="text-sm font-medium text-black">
                                    {languages.find(l => l.code === userPreferences.language)?.name}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile': return renderProfileTab();
            case 'organization': return renderOrganizationTab();
            case 'notifications': return renderNotificationsTab();
            case 'security': return renderSecurityTab();
            case 'events': return renderEventsTab();
            case 'appearance': return renderAppearanceTab();
            default: return renderProfileTab();
        }
    };

    // Main render
    return (
        <div className={`max-w-7xl mx-auto p-6 ${themeClasses.background} min-h-screen`}>
            {/* Authentication checking state */}
            {authStatus === 'checking' && (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                        <p className="text-black">Checking authentication...</p>
                    </div>
                </div>
            )}

            {/* Unauthenticated state */}
            {authStatus === 'unauthenticated' && (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center bg-white p-8 rounded-lg shadow-md">
                        <User className="w-16 h-16 text-red-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-black mb-2">Authentication Required</h2>
                        <p className="text-black mb-4">Please log in to access your settings.</p>
                        <button
                            onClick={() => window.location.href = '/login'}
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Go to Login
                        </button>
                    </div>
                </div>
            )}

            {/* Authenticated content */}
            {authStatus === 'authenticated' && (
                <>
                    <div className="mb-8">
                        <h1 className={`text-3xl font-bold ${themeClasses.text} mb-2`}>Settings</h1>
                        <p className={themeClasses.text}>Manage your account and event preferences</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Navigation */}
                        <div className="lg:w-64">
                            <div className={`${themeClasses.card} rounded-lg shadow-sm border ${themeClasses.border} p-4`}>
                                <nav className="space-y-2">
                                    {tabs.map((tab) => {
                                        const Icon = tab.icon;
                                        return (
                                            <button
                                                key={tab.id}
                                                onClick={() => {
                                                    setActiveTab(tab.id);
                                                    setError(null);
                                                }}
                                                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${activeTab === tab.id
                                                    ? 'bg-blue-50 text-blue-600 border border-blue-200'
                                                    : `${themeClasses.text} ${themeClasses.hover}`
                                                    }`}
                                            >
                                                <Icon className="w-4 h-4" />
                                                <span className="text-sm font-medium">{tab.name}</span>
                                            </button>
                                        );
                                    })}
                                </nav>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1">
                            {renderTabContent()}

                            {/* Save Button */}
                            <div className="mt-8 flex justify-end">
                                <button
                                    onClick={() => handleSave(activeTab)}
                                    disabled={loading || profileLoading}
                                    className="flex items-center px-6 py-3 text-white rounded-lg hover:opacity-90 disabled:opacity-50"
                                    style={{ backgroundColor: accentColors.find(c => c.id === userPreferences.accentColor)?.rgb || '#3B82F6' }}
                                >
                                    {loading ? (
                                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                                    ) : saved ? (
                                        <CheckCircle className="w-4 h-4 mr-2" />
                                    ) : (
                                        <Save className="w-4 h-4 mr-2" />
                                    )}
                                    {loading ? 'Saving...' : saved ? 'Saved!' : 'Save Changes'}
                                </button>
                            </div>

                            {/* Success message */}
                            {saved && (
                                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <div className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                                        <span className="text-sm text-green-800">Settings saved successfully!</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default OrganizerSettings;