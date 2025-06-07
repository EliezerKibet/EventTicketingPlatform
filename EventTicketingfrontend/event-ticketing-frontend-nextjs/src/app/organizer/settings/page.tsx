/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState, useEffect } from 'react';
import { userApi } from '@/lib/api';
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
    CheckCircle
} from 'lucide-react';

// Type definitions
interface NotificationPreferences {
    emailNotifications: boolean;
    smsNotifications: boolean;
    newBookings: boolean;
    cancellations: boolean;
    lowInventory: boolean;
    dailyReports: boolean;
    weeklyReports: boolean;
    monthlyReports: boolean;
}

const OrganizerSettings: React.FC = () => {
    // State declarations - make sure all are properly defined
    const [activeTab, setActiveTab] = useState('profile');
    const [loading, setLoading] = useState(false);
    const [profileLoading, setProfileLoading] = useState(true);
    const [saved, setSaved] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [authStatus, setAuthStatus] = useState<'checking' | 'authenticated' | 'unauthenticated'>('checking');
    const [error, setError] = useState<string | null>(null);

    const [profileData, setProfileData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        bio: ''
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [organizationData, setOrganizationData] = useState({
        companyName: '',
        businessType: 'LLC',
        taxId: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    });

    const [paymentSettings, setPaymentSettings] = useState({
        preferredGateway: 'stripe',
        stripePublishableKey: '',
        processingFee: 2.9,
        currency: 'USD',
        autoPayouts: true,
        payoutSchedule: 'weekly'
    });

    const [notificationPreferences, setNotificationPreferences] = useState<NotificationPreferences>({
        emailNotifications: true,
        smsNotifications: false,
        newBookings: true,
        cancellations: true,
        lowInventory: true,
        dailyReports: false,
        weeklyReports: true,
        monthlyReports: true
    });

    const [securitySettings, setSecuritySettings] = useState({
        twoFactorEnabled: false,
        sessionTimeout: 30,
        loginNotifications: true,
        passwordChangeRequired: false
    });

    const [eventDefaults, setEventDefaults] = useState({
        defaultTimeZone: 'America/New_York',
        defaultEventDuration: 120,
        defaultTicketSaleStart: 30,
        defaultRefundPolicy: 'flexible',
        requireApproval: false,
        autoPublish: false
    });

    const [appearanceSettings, setAppearanceSettings] = useState({
        theme: 'light',
        language: 'en',
        dateFormat: 'MM/dd/yyyy',
        timeFormat: '12h',
        currency: 'USD'
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

    // Fetch user profile
    const fetchUserProfile = async (): Promise<void> => {
        if (!checkAuth()) return;

        setProfileLoading(true);
        setError(null);

        try {
            const profile = await userApi.getProfile();

            setProfileData({
                firstName: profile.firstName ?? '',
                lastName: profile.lastName ?? '',
                email: profile.email ?? '',
                phone: profile.phoneNumber ?? '',
                bio: profile.bio ?? ''
            });
        } catch (error: any) {
            console.error('Error fetching profile:', error);
            setError(error.message || 'Failed to load profile data');

            // Fallback to localStorage
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                try {
                    const userData = JSON.parse(storedUser);
                    setProfileData({
                        firstName: userData.firstName ?? '',
                        lastName: userData.lastName ?? '',
                        email: userData.email ?? '',
                        phone: userData.phoneNumber ?? userData.phone ?? '',
                        bio: userData.bio ?? ''
                    });
                } catch (parseError) {
                    console.error('Error parsing stored user data:', parseError);
                }
            }
        } finally {
            setProfileLoading(false);
        }
    };

    // Update profile
    const updateUserProfile = async (): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            await userApi.updateProfile({
                firstName: profileData.firstName,
                lastName: profileData.lastName,
                email: profileData.email,
                phoneNumber: profileData.phone,
                bio: profileData.bio
            });

            // Update localStorage
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                try {
                    const userData = JSON.parse(storedUser);
                    const updatedUserData = {
                        ...userData,
                        firstName: profileData.firstName,
                        lastName: profileData.lastName,
                        email: profileData.email,
                        phoneNumber: profileData.phone,
                        bio: profileData.bio
                    };
                    localStorage.setItem('user', JSON.stringify(updatedUserData));
                } catch (parseError) {
                    console.error('Error updating stored user data:', parseError);
                }
            }

            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (error: any) {
            console.error('Error updating profile:', error);
            setError(error.message || 'Failed to update profile');
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

    // Handle save
    const handleSave = async (section: string) => {
        setError(null);

        if (section === 'profile') {
            await updateUserProfile();
        } else {
            // Simulate API call for other sections
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSaved(true);
            setLoading(false);
            setTimeout(() => setSaved(false), 3000);
        }
    };

    // Helper function for notifications
    const updateNotificationPreference = (key: keyof NotificationPreferences, value: boolean) => {
        setNotificationPreferences(prev => ({
            ...prev,
            [key]: value
        }));
    };

    // Effects
    useEffect(() => {
        checkAuth();
    }, []);

    useEffect(() => {
        if (authStatus === 'authenticated') {
            fetchUserProfile();
        }
    }, [authStatus]);

    // Tab configuration
    const tabs = [
        { id: 'profile', name: 'Profile', icon: User },
        { id: 'organization', name: 'Organization', icon: Building2 },
        { id: 'payments', name: 'Payments', icon: CreditCard },
        { id: 'notifications', name: 'Notifications', icon: Bell },
        { id: 'security', name: 'Security', icon: Shield },
        { id: 'events', name: 'Event Defaults', icon: Calendar },
        { id: 'appearance', name: 'Appearance', icon: Palette }
    ];

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
                                value={profileData.firstName}
                                onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">Last Name</label>
                            <input
                                type="text"
                                value={profileData.lastName}
                                onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">Email</label>
                            <input
                                type="email"
                                value={profileData.email}
                                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">Phone</label>
                            <input
                                type="tel"
                                value={profileData.phone}
                                onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                                disabled={loading}
                                placeholder="Optional"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-black mb-2">Bio</label>
                        <textarea
                            value={profileData.bio}
                            onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            placeholder="Tell us about yourself and your organizing experience..."
                            disabled={loading}
                        />
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
        <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-black mb-4">Organization Settings</h3>
            <p className="text-black">Organization settings coming soon...</p>
        </div>
    );

    const renderPaymentsTab = () => (
        <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-black mb-4">Payment Settings</h3>
            <p className="text-black">Payment settings coming soon...</p>
        </div>
    );

    const renderNotificationsTab = () => (
        <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-black mb-4">Notification Settings</h3>
            <p className="text-black">Notification settings coming soon...</p>
        </div>
    );

    const renderSecurityTab = () => (
        <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-black mb-4">Security Settings</h3>
            <p className="text-black">Security settings coming soon...</p>
        </div>
    );

    const renderEventsTab = () => (
        <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-black mb-4">Event Default Settings</h3>
            <p className="text-black">Event default settings coming soon...</p>
        </div>
    );

    const renderAppearanceTab = () => (
        <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-black mb-4">Appearance Settings</h3>
            <p className="text-black">Appearance settings coming soon...</p>
        </div>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile': return renderProfileTab();
            case 'organization': return renderOrganizationTab();
            case 'payments': return renderPaymentsTab();
            case 'notifications': return renderNotificationsTab();
            case 'security': return renderSecurityTab();
            case 'events': return renderEventsTab();
            case 'appearance': return renderAppearanceTab();
            default: return renderProfileTab();
        }
    };

    // Main render
    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
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
                        <h1 className="text-3xl font-bold text-black mb-2">Settings</h1>
                        <p className="text-black">Manage your account and event preferences</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Navigation */}
                        <div className="lg:w-64">
                            <div className="bg-white rounded-lg shadow-sm border p-4">
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
                                                        : 'text-black hover:bg-gray-50'
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
                                    className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
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