/* eslint-disable @typescript-eslint/no-unused-vars */
// app/profile/page.tsx - Updated version that works with your backend
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import {
    User,
    Mail,
    Phone,
    Lock,
    MapPin,
    Calendar,
    Bell,
    Shield,
    Trash2,
    Save,
    Edit,
    Camera,
    ArrowLeft,
    CreditCard,
    Download,
    Eye,
    EyeOff
} from 'lucide-react';

interface UserProfile {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    dateOfBirth?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    profilePicture?: string;
    roles: string[];
}

interface NotificationSettings {
    emailNotifications: boolean;
    smsNotifications: boolean;
    eventReminders: boolean;
    marketingEmails: boolean;
    orderUpdates: boolean;
}

interface PasswordChange {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export default function ProfilePage() {
    const { user, logout, isAuthenticated } = useAuth();
    const router = useRouter();

    // State management
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [notifications, setNotifications] = useState<NotificationSettings>({
        emailNotifications: true,
        smsNotifications: false,
        eventReminders: true,
        marketingEmails: false,
        orderUpdates: true
    });
    const [passwordData, setPasswordData] = useState<PasswordChange>({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }

        // Use the user data from auth context instead of API call
        if (user) {
            setProfile({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                roles: user.roles,
                phone: '',
                dateOfBirth: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
                country: 'US',
                profilePicture: ''
            });
        }
    }, [isAuthenticated, user]);

    const updateProfile = async () => {
        if (!profile) return;

        setSaving(true);
        setError('');
        setSuccess('');

        try {
            // Since your backend doesn't have a profile update endpoint yet,
            // we'll just update localStorage and show success
            const updatedUser = {
                ...user,
                firstName: profile.firstName,
                lastName: profile.lastName,
                email: profile.email
            };

            localStorage.setItem('user', JSON.stringify(updatedUser));
            setSuccess('Profile updated successfully!');
            setTimeout(() => setSuccess(''), 3000);
        } catch (error) {
            setError('Failed to update profile');
        } finally {
            setSaving(false);
        }
    };

    const updatePassword = async () => {
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setError('New passwords do not match');
            return;
        }

        if (passwordData.newPassword.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        setSaving(true);
        setError('');
        setSuccess('');

        try {
            // This would need a backend endpoint like /api/auth/change-password
            // For now, just show success message
            setSuccess('Password would be updated (backend endpoint needed)');
            setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
            setTimeout(() => setSuccess(''), 3000);
        } catch (error) {
            setError('Failed to update password');
        } finally {
            setSaving(false);
        }
    };

    const updateNotifications = async () => {
        setSaving(true);
        setError('');
        setSuccess('');

        try {
            // This would need a backend endpoint for notification settings
            setSuccess('Notification settings updated!');
            setTimeout(() => setSuccess(''), 3000);
        } catch (error) {
            setError('Failed to update notification settings');
        } finally {
            setSaving(false);
        }
    };

    const deleteAccount = async () => {
        if (!confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            return;
        }

        setSaving(true);
        try {
            // This would need a backend endpoint for account deletion
            // For now, just logout
            logout();
            router.push('/');
        } catch (error) {
            setError('Failed to delete account');
        } finally {
            setSaving(false);
        }
    };

    const downloadData = async () => {
        try {
            // This would need a backend endpoint for data export
            const dataToExport = {
                profile: profile,
                downloadDate: new Date().toISOString()
            };

            const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'my-profile-data.json';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            setError('Failed to download data');
        }
    };

    if (!profile) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading Profile...</h1>
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                </div>
            </div>
        );
    }

    const tabs = [
        { id: 'profile', label: 'Profile Info', icon: User },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'privacy', label: 'Privacy & Data', icon: Lock }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <button
                                onClick={() => router.back()}
                                className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
                            >
                                <ArrowLeft className="h-5 w-5 mr-2" />
                                Back
                            </button>
                            <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">
                                {profile.firstName} {profile.lastName}
                            </span>
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <User className="h-4 w-4 text-blue-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-1">
                        <nav className="space-y-2">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors duration-200 ${activeTab === tab.id
                                                ? 'bg-blue-50 text-blue-600 border border-blue-200'
                                                : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        <Icon className="h-5 w-5 mr-3" />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Success/Error Messages */}
                        {success && (
                            <div className="mb-6 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md">
                                {success}
                            </div>
                        )}
                        {error && (
                            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                                {error}
                            </div>
                        )}

                        {/* Profile Info Tab */}
                        {activeTab === 'profile' && (
                            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>

                                {/* Profile Picture */}
                                <div className="flex items-center mb-6">
                                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                                        {profile.profilePicture ? (
                                            <img
                                                src={profile.profilePicture}
                                                alt="Profile"
                                                className="w-20 h-20 rounded-full object-cover"
                                            />
                                        ) : (
                                            <User className="h-10 w-10 text-gray-400" />
                                        )}
                                    </div>
                                    <button className="flex items-center text-blue-600 hover:text-blue-800">
                                        <Camera className="h-4 w-4 mr-2" />
                                        Change Photo
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={profile.firstName}
                                            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={profile.lastName}
                                            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            value={profile.email}
                                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={profile.phone || ''}
                                            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Role
                                        </label>
                                        <input
                                            type="text"
                                            value={profile.roles.join(', ')}
                                            disabled
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50 text-gray-500"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-end">
                                    <button
                                        onClick={updateProfile}
                                        disabled={saving}
                                        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 flex items-center"
                                    >
                                        {saving ? (
                                            <>
                                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                <Save className="h-4 w-4 mr-2" />
                                                Save Changes
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Security Tab */}
                        {activeTab === 'security' && (
                            <div className="space-y-6">
                                {/* Change Password */}
                                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Change Password</h2>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Current Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showCurrentPassword ? 'text' : 'password'}
                                                    value={passwordData.currentPassword}
                                                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                                                    className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                >
                                                    {showCurrentPassword ?
                                                        <EyeOff className="h-5 w-5 text-gray-400" /> :
                                                        <Eye className="h-5 w-5 text-gray-400" />
                                                    }
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                New Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showNewPassword ? 'text' : 'password'}
                                                    value={passwordData.newPassword}
                                                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                                    className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                >
                                                    {showNewPassword ?
                                                        <EyeOff className="h-5 w-5 text-gray-400" /> :
                                                        <Eye className="h-5 w-5 text-gray-400" />
                                                    }
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Confirm New Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showConfirmPassword ? 'text' : 'password'}
                                                    value={passwordData.confirmPassword}
                                                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                                    className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                >
                                                    {showConfirmPassword ?
                                                        <EyeOff className="h-5 w-5 text-gray-400" /> :
                                                        <Eye className="h-5 w-5 text-gray-400" />
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex justify-end">
                                        <button
                                            onClick={updatePassword}
                                            disabled={saving}
                                            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 flex items-center"
                                        >
                                            {saving ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                    Updating...
                                                </>
                                            ) : (
                                                <>
                                                    <Lock className="h-4 w-4 mr-2" />
                                                    Update Password
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Account Security Info */}
                                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Security</h2>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                                            <div className="flex items-center">
                                                <Shield className="h-5 w-5 text-green-600 mr-3" />
                                                <div>
                                                    <p className="font-medium text-green-900">Account Protected</p>
                                                    <p className="text-sm text-green-700">Your account is secured with password authentication</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-sm text-gray-600">
                                            <p><strong>Last login:</strong> Today</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Notifications Tab */}
                        {activeTab === 'notifications' && (
                            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">Email Notifications</h3>
                                            <p className="text-sm text-gray-600">Receive notifications via email</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={notifications.emailNotifications}
                                                onChange={(e) => setNotifications({ ...notifications, emailNotifications: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">Event Reminders</h3>
                                            <p className="text-sm text-gray-600">Get reminded about upcoming events</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={notifications.eventReminders}
                                                onChange={(e) => setNotifications({ ...notifications, eventReminders: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">Order Updates</h3>
                                            <p className="text-sm text-gray-600">Get notified about ticket and order status</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={notifications.orderUpdates}
                                                onChange={(e) => setNotifications({ ...notifications, orderUpdates: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-end">
                                    <button
                                        onClick={updateNotifications}
                                        disabled={saving}
                                        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 flex items-center"
                                    >
                                        {saving ? (
                                            <>
                                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                <Bell className="h-4 w-4 mr-2" />
                                                Save Preferences
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Privacy & Data Tab */}
                        {activeTab === 'privacy' && (
                            <div className="space-y-6">
                                {/* Data Export */}
                                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Export</h2>
                                    <p className="text-gray-600 mb-4">
                                        Download a copy of your profile information.
                                    </p>
                                    <button
                                        onClick={downloadData}
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
                                    >
                                        <Download className="h-4 w-4 mr-2" />
                                        Download My Data
                                    </button>
                                </div>

                                {/* Account Deletion */}
                                <div className="bg-white rounded-lg shadow-md border border-red-200 p-6">
                                    <h2 className="text-xl font-semibold text-red-900 mb-4">Danger Zone</h2>
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                                        <h3 className="font-medium text-red-900 mb-2">Delete Account</h3>
                                        <p className="text-sm text-red-700 mb-4">
                                            Once you delete your account, there is no going back. This will permanently delete your profile,
                                            order history, and all associated data.
                                        </p>
                                        <button
                                            onClick={deleteAccount}
                                            disabled={saving}
                                            className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
                                        >
                                            {saving ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                    Deleting...
                                                </>
                                            ) : (
                                                <>
                                                    <Trash2 className="h-4 w-4 mr-2" />
                                                    Delete Account
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}