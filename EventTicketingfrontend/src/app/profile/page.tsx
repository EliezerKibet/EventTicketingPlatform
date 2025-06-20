/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// app/profile/page.tsx - Enhanced version with full backend integration
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { userApi, imageApi } from '@/lib/api';
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
    EyeOff,
    Upload,
    X,
    CheckCircle,
    AlertCircle,
    Building2,
    Globe,
    Clock
} from 'lucide-react';

interface UserProfile {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    dateOfBirth?: string;
    profileImageUrl?: string;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    createdAt: string;
    lastLoginAt?: string;
    status: string;
    bio?: string;
    website?: string;
    timeZone?: string;
    isOrganizer: boolean;
    roles: string[];
}

interface UserOrganization {
    companyName?: string;
    businessLicense?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
}

interface UserPreferences {
    emailNotifications: boolean;
    smsNotifications: boolean;
    newBookingNotifications: boolean;
    cancellationNotifications: boolean;
    lowInventoryNotifications: boolean;
    dailyReports: boolean;
    weeklyReports: boolean;
    monthlyReports: boolean;
    twoFactorEnabled: boolean;
    sessionTimeout: number;
    loginNotifications: boolean;
    defaultTimeZone?: string;
    defaultEventDuration: number;
    defaultTicketSaleStart: number;
    defaultRefundPolicy?: string;
    requireApproval: boolean;
    autoPublish: boolean;
    theme: string;
    language: string;
    dateFormat: string;
    timeFormat: string;
    currency: string;
    accentColor: string;
    fontSize: string;
    compactMode: boolean;
}

interface PasswordChange {
    currentPassword: string;
    newPassword: string;
}

export default function ProfilePage() {
    const { user, logout, isAuthenticated } = useAuth();
    const router = useRouter();

    // State management
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [organization, setOrganization] = useState<UserOrganization>({});
    const [preferences, setPreferences] = useState<UserPreferences | null>(null);
    const [passwordData, setPasswordData] = useState<PasswordChange>({
        currentPassword: '',
        newPassword: ''
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Image upload states
    const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
    const [profileImagePreview, setProfileImagePreview] = useState<string>('');
    const [uploadingImage, setUploadingImage] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }
        loadUserData();
    }, [isAuthenticated]);

    const loadUserData = async () => {
        try {
            setLoading(true);

            // Load profile data
            const profileData = await userApi.getProfile();
            setProfile(profileData);

            // Load organization data if user is organizer
            if (profileData.isOrganizer) {
                try {
                    const orgData = await userApi.getOrganization();
                    setOrganization(orgData);
                } catch (orgError) {
                    console.log('No organization data found');
                }
            }

            // Load preferences
            try {
                const prefsData = await userApi.getPreferences();
                setPreferences(prefsData);
            } catch (prefsError) {
                console.log('No preferences found, using defaults');
                setPreferences({
                    emailNotifications: true,
                    smsNotifications: false,
                    newBookingNotifications: true,
                    cancellationNotifications: true,
                    lowInventoryNotifications: true,
                    dailyReports: false,
                    weeklyReports: true,
                    monthlyReports: true,
                    twoFactorEnabled: false,
                    sessionTimeout: 30,
                    loginNotifications: true,
                    defaultTimeZone: 'UTC',
                    defaultEventDuration: 120,
                    defaultTicketSaleStart: 30,
                    defaultRefundPolicy: 'flexible',
                    requireApproval: false,
                    autoPublish: false,
                    theme: 'light',
                    language: 'en',
                    dateFormat: 'MM/dd/yyyy',
                    timeFormat: '12h',
                    currency: 'USD',
                    accentColor: 'blue',
                    fontSize: 'medium',
                    compactMode: false
                });
            }
        } catch (error: any) {
            setError('Failed to load profile data: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const validation = imageApi.validateImageFile(file);
            if (!validation.isValid) {
                setError(validation.error || 'Invalid image file');
                return;
            }

            setProfileImageFile(file);

            // Create preview
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const uploadProfileImage = async () => {
        if (!profileImageFile) return;

        try {
            setUploadingImage(true);
            setError('');

            await imageApi.uploadUserProfileImage(profileImageFile);

            // Reload profile to get updated image URL
            const updatedProfile = await userApi.getProfile();
            setProfile(updatedProfile);

            setProfileImageFile(null);
            setProfileImagePreview('');
            setSuccess('Profile image updated successfully!');
            setTimeout(() => setSuccess(''), 3000);
        } catch (error: any) {
            setError('Failed to upload image: ' + error.message);
        } finally {
            setUploadingImage(false);
        }
    };

    const deleteProfileImage = async () => {
        try {
            setUploadingImage(true);
            setError('');

            await imageApi.deleteUserProfileImage();

            // Reload profile to get updated data
            const updatedProfile = await userApi.getProfile();
            setProfile(updatedProfile);

            setSuccess('Profile image deleted successfully!');
            setTimeout(() => setSuccess(''), 3000);
        } catch (error: any) {
            setError('Failed to delete image: ' + error.message);
        } finally {
            setUploadingImage(false);
        }
    };

    const updateProfile = async () => {
        if (!profile) return;

        try {
            setSaving(true);
            setError('');
            setSuccess('');

            const updateData = {
                firstName: profile.firstName,
                lastName: profile.lastName,
                email: profile.email,
                phoneNumber: profile.phoneNumber,
                dateOfBirth: profile.dateOfBirth,
                bio: profile.bio,
                website: profile.website,
                timeZone: profile.timeZone
            };

            const updatedProfile = await userApi.updateProfile(updateData);
            setProfile(updatedProfile);

            setSuccess('Profile updated successfully!');
            setTimeout(() => setSuccess(''), 3000);
        } catch (error: any) {
            setError('Failed to update profile: ' + error.message);
        } finally {
            setSaving(false);
        }
    };

    const updateOrganization = async () => {
        try {
            setSaving(true);
            setError('');
            setSuccess('');

            const updatedOrg = await userApi.updateOrganization(organization);
            setOrganization(updatedOrg);

            setSuccess('Organization details updated successfully!');
            setTimeout(() => setSuccess(''), 3000);
        } catch (error: any) {
            setError('Failed to update organization: ' + error.message);
        } finally {
            setSaving(false);
        }
    };

    const updatePassword = async () => {
        if (passwordData.newPassword !== confirmPassword) {
            setError('New passwords do not match');
            return;
        }

        if (passwordData.newPassword.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        try {
            setSaving(true);
            setError('');
            setSuccess('');

            await userApi.changePassword(passwordData);

            setPasswordData({ currentPassword: '', newPassword: '' });
            setConfirmPassword('');
            setSuccess('Password updated successfully!');
            setTimeout(() => setSuccess(''), 3000);
        } catch (error: any) {
            setError('Failed to update password: ' + error.message);
        } finally {
            setSaving(false);
        }
    };

    const updatePreferences = async () => {
        if (!preferences) return;

        try {
            setSaving(true);
            setError('');
            setSuccess('');

            const updatedPrefs = await userApi.updatePreferences(preferences);
            setPreferences(updatedPrefs);

            setSuccess('Preferences updated successfully!');
            setTimeout(() => setSuccess(''), 3000);
        } catch (error: any) {
            setError('Failed to update preferences: ' + error.message);
        } finally {
            setSaving(false);
        }
    };

    const deleteAccount = async () => {
        if (!confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            return;
        }

        const secondConfirm = prompt('Type "DELETE" to confirm account deletion:');
        if (secondConfirm !== 'DELETE') {
            setError('Account deletion cancelled');
            return;
        }

        try {
            setSaving(true);
            // Note: You'll need to add this endpoint to your backend
            // await userApi.deleteAccount();

            logout();
            router.push('/');
        } catch (error: any) {
            setError('Failed to delete account: ' + error.message);
        } finally {
            setSaving(false);
        }
    };

    const downloadData = async () => {
        try {
            const dataToExport = {
                profile: profile,
                organization: organization,
                preferences: preferences,
                downloadDate: new Date().toISOString()
            };

            const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `my-profile-data-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            setSuccess('Data downloaded successfully!');
            setTimeout(() => setSuccess(''), 3000);
        } catch (error: any) {
            setError('Failed to download data: ' + error.message);
        }
    };

    if (loading) {
        return (
            <div
                className="min-h-screen flex items-center justify-center"
                style={{
                    backgroundImage: 'url("/images/bg/background.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/30">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading Profile...</h1>
                    </div>
                </div>
            </div>
        );
    }

    if (!profile) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile not found</h1>
                    <button
                        onClick={() => router.push('/')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        );
    }

    const tabs = [
        { id: 'profile', label: 'Profile Info', icon: User },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'notifications', label: 'Preferences', icon: Bell }
    ];

    // Add organization tab for organizers
    if (profile.isOrganizer) {
        tabs.splice(1, 0, { id: 'organization', label: 'Organization', icon: Building2 });
    }

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundImage: 'url("/images/bg/background.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="min-h-screen bg-black/20 backdrop-blur-[2px]">
                {/* Header */}
                <div className="bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <button
                                    onClick={() => router.back()}
                                    className="flex items-center text-gray-600 hover:text-gray-900 mr-4 transition-colors"
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
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                                    {profile.profileImageUrl ? (
                                        <img
                                            src={profile.profileImageUrl}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <User className="h-4 w-4 text-blue-600" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-1">
                            <nav className="space-y-2 bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/30">
                                {tabs.map((tab) => {
                                    const Icon = tab.icon;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 ${activeTab === tab.id
                                                    ? 'bg-blue-600 text-white shadow-lg'
                                                    : 'text-gray-600 hover:bg-white/50'
                                                }`}
                                        >
                                            <Icon className="h-5 w-5 mr-3" />
                                            {tab.label}
                                        </button>
                                    );
                                })}

                                {/* Quick Actions */}
                                <div className="pt-4 border-t border-gray-200 mt-4">
                                    <button
                                        onClick={downloadData}
                                        className="w-full flex items-center px-4 py-3 text-left rounded-xl text-gray-600 hover:bg-white/50 transition-all duration-200"
                                    >
                                        <Download className="h-5 w-5 mr-3" />
                                        Download Data
                                    </button>
                                    <button
                                        onClick={deleteAccount}
                                        className="w-full flex items-center px-4 py-3 text-left rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200"
                                    >
                                        <Trash2 className="h-5 w-5 mr-3" />
                                        Delete Account
                                    </button>
                                </div>
                            </nav>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {/* Success/Error Messages */}
                            {success && (
                                <div className="mb-6 bg-green-50/90 backdrop-blur-sm border border-green-200 text-green-600 px-4 py-3 rounded-xl flex items-center">
                                    <CheckCircle className="h-5 w-5 mr-2" />
                                    {success}
                                </div>
                            )}
                            {error && (
                                <div className="mb-6 bg-red-50/90 backdrop-blur-sm border border-red-200 text-red-600 px-4 py-3 rounded-xl flex items-center">
                                    <AlertCircle className="h-5 w-5 mr-2" />
                                    {error}
                                </div>
                            )}

                            {/* Profile Info Tab */}
                            {activeTab === 'profile' && (
                                <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>

                                    {/* Profile Picture */}
                                    <div className="flex items-center mb-6">
                                        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                                            {profileImagePreview ? (
                                                <img
                                                    src={profileImagePreview}
                                                    alt="Preview"
                                                    className="w-20 h-20 rounded-full object-cover"
                                                />
                                            ) : profile.profileImageUrl ? (
                                                <img
                                                    src={profile.profileImageUrl}
                                                    alt="Profile"
                                                    className="w-20 h-20 rounded-full object-cover"
                                                />
                                            ) : (
                                                <User className="h-10 w-10 text-gray-400" />
                                            )}
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageSelect}
                                                className="hidden"
                                                id="profile-image-upload"
                                            />
                                            <label
                                                htmlFor="profile-image-upload"
                                                className="flex items-center text-blue-600 hover:text-blue-800 cursor-pointer"
                                            >
                                                <Camera className="h-4 w-4 mr-2" />
                                                Change Photo
                                            </label>

                                            {profileImageFile && (
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={uploadProfileImage}
                                                        disabled={uploadingImage}
                                                        className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded flex items-center"
                                                    >
                                                        {uploadingImage ? (
                                                            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-1"></div>
                                                        ) : (
                                                            <Upload className="h-3 w-3 mr-1" />
                                                        )}
                                                        Upload
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setProfileImageFile(null);
                                                            setProfileImagePreview('');
                                                        }}
                                                        className="text-sm bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded flex items-center"
                                                    >
                                                        <X className="h-3 w-3 mr-1" />
                                                        Cancel
                                                    </button>
                                                </div>
                                            )}

                                            {profile.profileImageUrl && !profileImageFile && (
                                                <button
                                                    onClick={deleteProfileImage}
                                                    disabled={uploadingImage}
                                                    className="flex items-center text-red-600 hover:text-red-800 text-sm"
                                                >
                                                    <Trash2 className="h-3 w-3 mr-1" />
                                                    Remove Photo
                                                </button>
                                            )}
                                        </div>
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
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
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
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
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
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                value={profile.phoneNumber || ''}
                                                onChange={(e) => setProfile({ ...profile, phoneNumber: e.target.value })}
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Date of Birth
                                            </label>
                                            <input
                                                type="date"
                                                value={profile.dateOfBirth || ''}
                                                onChange={(e) => setProfile({ ...profile, dateOfBirth: e.target.value })}
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Time Zone
                                            </label>
                                            <select
                                                value={profile.timeZone || 'UTC'}
                                                onChange={(e) => setProfile({ ...profile, timeZone: e.target.value })}
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                            >
                                                <option value="UTC">UTC</option>
                                                <option value="America/New_York">Eastern Time</option>
                                                <option value="America/Chicago">Central Time</option>
                                                <option value="America/Denver">Mountain Time</option>
                                                <option value="America/Los_Angeles">Pacific Time</option>
                                                <option value="Asia/Kuala_Lumpur">Malaysia Time</option>
                                            </select>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Website
                                            </label>
                                            <input
                                                type="url"
                                                value={profile.website || ''}
                                                onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                                placeholder="https://yourwebsite.com"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Bio
                                            </label>
                                            <textarea
                                                value={profile.bio || ''}
                                                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                                                rows={3}
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                                placeholder="Tell us about yourself..."
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
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 bg-gray-50 text-gray-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Account Status
                                            </label>
                                            <div className="flex items-center space-x-2">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${profile.status === 'Active'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                    {profile.status}
                                                </span>
                                                {profile.isEmailVerified && (
                                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                                        Email Verified
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex justify-end">
                                        <button
                                            onClick={updateProfile}
                                            disabled={saving}
                                            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 px-6 rounded-xl transition-colors duration-200 flex items-center"
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

                            {/* Organization Tab */}
                            {activeTab === 'organization' && profile.isOrganizer && (
                                <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Organization Details</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                value={organization.companyName || ''}
                                                onChange={(e) => setOrganization({ ...organization, companyName: e.target.value })}
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Business License
                                            </label>
                                            <input
                                                type="text"
                                                value={organization.businessLicense || ''}
                                                onChange={(e) => setOrganization({ ...organization, businessLicense: e.target.value })}
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                value={organization.address || ''}
                                                onChange={(e) => setOrganization({ ...organization, address: e.target.value })}
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                value={organization.city || ''}
                                                onChange={(e) => setOrganization({ ...organization, city: e.target.value })}
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                State/Province
                                            </label>
                                            <input
                                                type="text"
                                                value={organization.state || ''}
                                                onChange={(e) => setOrganization({ ...organization, state: e.target.value })}
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                ZIP/Postal Code
                                            </label>
                                            <input
                                                type="text"
                                                value={organization.zipCode || ''}
                                                onChange={(e) => setOrganization({ ...organization, zipCode: e.target.value })}
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Country
                                            </label>
                                            <select
                                                value={organization.country || ''}
                                                onChange={(e) => setOrganization({ ...organization, country: e.target.value })}
                                                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                            >
                                                <option value="">Select Country</option>
                                                <option value="US">United States</option>
                                                <option value="CA">Canada</option>
                                                <option value="MY">Malaysia</option>
                                                <option value="SG">Singapore</option>
                                                <option value="GB">United Kingdom</option>
                                                <option value="AU">Australia</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex justify-end">
                                        <button
                                            onClick={updateOrganization}
                                            disabled={saving}
                                            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 px-6 rounded-xl transition-colors duration-200 flex items-center"
                                        >
                                            {saving ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                    Saving...
                                                </>
                                            ) : (
                                                <>
                                                    <Save className="h-4 w-4 mr-2" />
                                                    Save Organization
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
                                    <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6">
                                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Change Password</h2>

                                        <div className="space-y-4 max-w-md">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Current Password
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type={showCurrentPassword ? 'text' : 'password'}
                                                        value={passwordData.currentPassword}
                                                        onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                                                        className="w-full border border-gray-300 rounded-xl px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
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
                                                        className="w-full border border-gray-300 rounded-xl px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
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
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                        className="w-full border border-gray-300 rounded-xl px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
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
                                                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 px-6 rounded-xl transition-colors duration-200 flex items-center"
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
                                    <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6">
                                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Security</h2>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-4 bg-green-50/80 border border-green-200 rounded-xl">
                                                <div className="flex items-center">
                                                    <Shield className="h-5 w-5 text-green-600 mr-3" />
                                                    <div>
                                                        <p className="font-medium text-green-900">Account Protected</p>
                                                        <p className="text-sm text-green-700">Your account is secured with password authentication</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                                                <div>
                                                    <p><strong>Account Created:</strong> {new Date(profile.createdAt).toLocaleDateString()}</p>
                                                </div>
                                                <div>
                                                    <p><strong>Last Login:</strong> {profile.lastLoginAt ? new Date(profile.lastLoginAt).toLocaleDateString() : 'Today'}</p>
                                                </div>
                                                <div>
                                                    <p><strong>Email Verified:</strong> {profile.isEmailVerified ? 'Yes' : 'No'}</p>
                                                </div>
                                                <div>
                                                    <p><strong>Phone Verified:</strong> {profile.isPhoneVerified ? 'Yes' : 'No'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Preferences Tab */}
                            {activeTab === 'notifications' && preferences && (
                                <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>

                                    <div className="space-y-6">
                                        {/* Email Notifications */}
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h4 className="font-medium text-gray-900">General Notifications</h4>
                                                        <p className="text-sm text-gray-600">Receive general email notifications</p>
                                                    </div>
                                                    <label className="relative inline-flex items-center cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={preferences.emailNotifications}
                                                            onChange={(e) => setPreferences({ ...preferences, emailNotifications: e.target.checked })}
                                                            className="sr-only peer"
                                                        />
                                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                                    </label>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h4 className="font-medium text-gray-900">Booking Notifications</h4>
                                                        <p className="text-sm text-gray-600">Get notified about new bookings</p>
                                                    </div>
                                                    <label className="relative inline-flex items-center cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={preferences.newBookingNotifications}
                                                            onChange={(e) => setPreferences({ ...preferences, newBookingNotifications: e.target.checked })}
                                                            className="sr-only peer"
                                                        />
                                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                                    </label>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h4 className="font-medium text-gray-900">Cancellation Alerts</h4>
                                                        <p className="text-sm text-gray-600">Be notified of cancellations</p>
                                                    </div>
                                                    <label className="relative inline-flex items-center cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={preferences.cancellationNotifications}
                                                            onChange={(e) => setPreferences({ ...preferences, cancellationNotifications: e.target.checked })}
                                                            className="sr-only peer"
                                                        />
                                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                                    </label>
                                                </div>

                                                {profile.isOrganizer && (
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <h4 className="font-medium text-gray-900">Low Inventory Alerts</h4>
                                                            <p className="text-sm text-gray-600">Get alerted when ticket inventory is low</p>
                                                        </div>
                                                        <label className="relative inline-flex items-center cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={preferences.lowInventoryNotifications}
                                                                onChange={(e) => setPreferences({ ...preferences, lowInventoryNotifications: e.target.checked })}
                                                                className="sr-only peer"
                                                            />
                                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                                        </label>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Report Preferences */}
                                        {profile.isOrganizer && (
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900 mb-4">Reports</h3>
                                                <div className="space-y-4">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <h4 className="font-medium text-gray-900">Weekly Reports</h4>
                                                            <p className="text-sm text-gray-600">Receive weekly sales and analytics reports</p>
                                                        </div>
                                                        <label className="relative inline-flex items-center cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={preferences.weeklyReports}
                                                                onChange={(e) => setPreferences({ ...preferences, weeklyReports: e.target.checked })}
                                                                className="sr-only peer"
                                                            />
                                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                                        </label>
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <h4 className="font-medium text-gray-900">Monthly Reports</h4>
                                                            <p className="text-sm text-gray-600">Receive comprehensive monthly reports</p>
                                                        </div>
                                                        <label className="relative inline-flex items-center cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={preferences.monthlyReports}
                                                                onChange={(e) => setPreferences({ ...preferences, monthlyReports: e.target.checked })}
                                                                className="sr-only peer"
                                                            />
                                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* App Preferences */}
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900 mb-4">Application Preferences</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Theme
                                                    </label>
                                                    <select
                                                        value={preferences.theme}
                                                        onChange={(e) => setPreferences({ ...preferences, theme: e.target.value })}
                                                        className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                                    >
                                                        <option value="light">Light</option>
                                                        <option value="dark">Dark</option>
                                                        <option value="auto">Auto</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Language
                                                    </label>
                                                    <select
                                                        value={preferences.language}
                                                        onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                                                        className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                                    >
                                                        <option value="en">English</option>
                                                        <option value="es">Spanish</option>
                                                        <option value="fr">French</option>
                                                        <option value="de">German</option>
                                                        <option value="ms">Bahasa Malaysia</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Currency
                                                    </label>
                                                    <select
                                                        value={preferences.currency}
                                                        onChange={(e) => setPreferences({ ...preferences, currency: e.target.value })}
                                                        className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                                    >
                                                        <option value="USD">USD - US Dollar</option>
                                                        <option value="EUR">EUR - Euro</option>
                                                        <option value="GBP">GBP - British Pound</option>
                                                        <option value="MYR">MYR - Malaysian Ringgit</option>
                                                        <option value="SGD">SGD - Singapore Dollar</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Time Format
                                                    </label>
                                                    <select
                                                        value={preferences.timeFormat}
                                                        onChange={(e) => setPreferences({ ...preferences, timeFormat: e.target.value })}
                                                        className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                                                    >
                                                        <option value="12h">12 Hour</option>
                                                        <option value="24h">24 Hour</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex justify-end">
                                        <button
                                            onClick={updatePreferences}
                                            disabled={saving}
                                            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 px-6 rounded-xl transition-colors duration-200 flex items-center"
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}