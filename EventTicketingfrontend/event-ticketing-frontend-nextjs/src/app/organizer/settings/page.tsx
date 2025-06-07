/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState, useEffect } from 'react';
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

// Type definitions for better TypeScript support
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
    const [activeTab, setActiveTab] = useState('profile');
    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Form states
    const [profileData, setProfileData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        bio: 'Event organizer with 5+ years experience'
    });

    const [organizationData, setOrganizationData] = useState({
        companyName: 'Event Pro LLC',
        businessType: 'LLC',
        taxId: '12-3456789',
        address: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'United States'
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

    const handleSave = async (section: string) => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSaved(true);
        setLoading(false);
        setTimeout(() => setSaved(false), 3000);
    };

    // Helper function to update notification preferences with proper typing
    const updateNotificationPreference = (key: keyof NotificationPreferences, value: boolean) => {
        setNotificationPreferences(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const tabs = [
        { id: 'profile', name: 'Profile', icon: User },
        { id: 'organization', name: 'Organization', icon: Building2 },
        { id: 'payments', name: 'Payments', icon: CreditCard },
        { id: 'notifications', name: 'Notifications', icon: Bell },
        { id: 'security', name: 'Security', icon: Shield },
        { id: 'events', name: 'Event Defaults', icon: Calendar },
        { id: 'appearance', name: 'Appearance', icon: Palette }
    ];

    const renderProfileTab = () => (
        <div className="space-y-6">
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
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Last Name</label>
                        <input
                            type="text"
                            value={profileData.lastName}
                            onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Email</label>
                        <input
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Phone</label>
                        <input
                            type="tel"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
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
                    />
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Change Password</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Current Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2.5 text-gray-500"
                            >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">New Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Confirm New Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    const renderOrganizationTab = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Business Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-black mb-2">Company Name</label>
                        <input
                            type="text"
                            value={organizationData.companyName}
                            onChange={(e) => setOrganizationData({ ...organizationData, companyName: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Business Type</label>
                        <select
                            value={organizationData.businessType}
                            onChange={(e) => setOrganizationData({ ...organizationData, businessType: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        >
                            <option value="LLC">LLC</option>
                            <option value="Corporation">Corporation</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Sole Proprietorship">Sole Proprietorship</option>
                            <option value="Non-Profit">Non-Profit</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Tax ID/EIN</label>
                        <input
                            type="text"
                            value={organizationData.taxId}
                            onChange={(e) => setOrganizationData({ ...organizationData, taxId: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Business Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-black mb-2">Street Address</label>
                        <input
                            type="text"
                            value={organizationData.address}
                            onChange={(e) => setOrganizationData({ ...organizationData, address: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">City</label>
                        <input
                            type="text"
                            value={organizationData.city}
                            onChange={(e) => setOrganizationData({ ...organizationData, city: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">State/Province</label>
                        <input
                            type="text"
                            value={organizationData.state}
                            onChange={(e) => setOrganizationData({ ...organizationData, state: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">ZIP/Postal Code</label>
                        <input
                            type="text"
                            value={organizationData.zipCode}
                            onChange={(e) => setOrganizationData({ ...organizationData, zipCode: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Country</label>
                        <input
                            type="text"
                            value={organizationData.country}
                            onChange={(e) => setOrganizationData({ ...organizationData, country: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPaymentsTab = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Payment Gateway Settings</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Preferred Payment Gateway</label>
                        <select
                            value={paymentSettings.preferredGateway}
                            onChange={(e) => setPaymentSettings({ ...paymentSettings, preferredGateway: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        >
                            <option value="stripe">Stripe</option>
                            <option value="paypal">PayPal</option>
                            <option value="square">Square</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Stripe Publishable Key</label>
                        <input
                            type="password"
                            value={paymentSettings.stripePublishableKey}
                            onChange={(e) => setPaymentSettings({ ...paymentSettings, stripePublishableKey: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            placeholder="pk_live_..."
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">Processing Fee (%)</label>
                            <input
                                type="number"
                                step="0.1"
                                value={paymentSettings.processingFee}
                                onChange={(e) => setPaymentSettings({ ...paymentSettings, processingFee: parseFloat(e.target.value) })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">Currency</label>
                            <select
                                value={paymentSettings.currency}
                                onChange={(e) => setPaymentSettings({ ...paymentSettings, currency: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                            >
                                <option value="USD">USD - US Dollar</option>
                                <option value="EUR">EUR - Euro</option>
                                <option value="GBP">GBP - British Pound</option>
                                <option value="CAD">CAD - Canadian Dollar</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Payout Settings</h3>
                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            id="autoPayouts"
                            checked={paymentSettings.autoPayouts}
                            onChange={(e) => setPaymentSettings({ ...paymentSettings, autoPayouts: e.target.checked })}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="autoPayouts" className="text-sm font-medium text-black">
                            Enable automatic payouts
                        </label>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Payout Schedule</label>
                        <select
                            value={paymentSettings.payoutSchedule}
                            onChange={(e) => setPaymentSettings({ ...paymentSettings, payoutSchedule: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderNotificationsTab = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Notification Channels</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-gray-500" />
                            <span className="text-sm font-medium text-black">Email Notifications</span>
                        </div>
                        <input
                            type="checkbox"
                            checked={notificationPreferences.emailNotifications}
                            onChange={(e) => updateNotificationPreference('emailNotifications', e.target.checked)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Smartphone className="w-5 h-5 text-gray-500" />
                            <span className="text-sm font-medium text-black">SMS Notifications</span>
                        </div>
                        <input
                            type="checkbox"
                            checked={notificationPreferences.smsNotifications}
                            onChange={(e) => updateNotificationPreference('smsNotifications', e.target.checked)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Event Notifications</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-black">New ticket bookings</span>
                        <input
                            type="checkbox"
                            checked={notificationPreferences.newBookings}
                            onChange={(e) => updateNotificationPreference('newBookings', e.target.checked)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-black">Booking cancellations</span>
                        <input
                            type="checkbox"
                            checked={notificationPreferences.cancellations}
                            onChange={(e) => updateNotificationPreference('cancellations', e.target.checked)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-black">Low ticket inventory alerts</span>
                        <input
                            type="checkbox"
                            checked={notificationPreferences.lowInventory}
                            onChange={(e) => updateNotificationPreference('lowInventory', e.target.checked)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Report Notifications</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-black">Daily sales reports</span>
                        <input
                            type="checkbox"
                            checked={notificationPreferences.dailyReports}
                            onChange={(e) => updateNotificationPreference('dailyReports', e.target.checked)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-black">Weekly analytics summary</span>
                        <input
                            type="checkbox"
                            checked={notificationPreferences.weeklyReports}
                            onChange={(e) => updateNotificationPreference('weeklyReports', e.target.checked)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-black">Monthly performance report</span>
                        <input
                            type="checkbox"
                            checked={notificationPreferences.monthlyReports}
                            onChange={(e) => updateNotificationPreference('monthlyReports', e.target.checked)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSecurityTab = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Two-Factor Authentication</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-sm font-medium text-black">Enable 2FA</span>
                            <p className="text-xs text-gray-600">Add an extra layer of security to your account</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={securitySettings.twoFactorEnabled}
                            onChange={(e) => setSecuritySettings({ ...securitySettings, twoFactorEnabled: e.target.checked })}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                    </div>
                    {securitySettings.twoFactorEnabled && (
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-sm text-black">
                                <strong>Setup Required:</strong> Download an authenticator app and scan the QR code to complete setup.
                            </p>
                            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">
                                Setup 2FA
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Session Management</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Session Timeout (minutes)</label>
                        <select
                            value={securitySettings.sessionTimeout}
                            onChange={(e) => setSecuritySettings({ ...securitySettings, sessionTimeout: parseInt(e.target.value) })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        >
                            <option value={15}>15 minutes</option>
                            <option value={30}>30 minutes</option>
                            <option value={60}>1 hour</option>
                            <option value={240}>4 hours</option>
                            <option value={480}>8 hours</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-black">Login notifications</span>
                        <input
                            type="checkbox"
                            checked={securitySettings.loginNotifications}
                            onChange={(e) => setSecuritySettings({ ...securitySettings, loginNotifications: e.target.checked })}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">API Keys</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-sm font-medium text-black">API Key</span>
                            <p className="text-xs text-gray-600">For third-party integrations</p>
                        </div>
                        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg text-sm">
                            Generate Key
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderEventsTab = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Event Creation Defaults</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Default Time Zone</label>
                        <select
                            value={eventDefaults.defaultTimeZone}
                            onChange={(e) => setEventDefaults({ ...eventDefaults, defaultTimeZone: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        >
                            <option value="America/New_York">Eastern Time</option>
                            <option value="America/Chicago">Central Time</option>
                            <option value="America/Denver">Mountain Time</option>
                            <option value="America/Los_Angeles">Pacific Time</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Default Duration (minutes)</label>
                        <input
                            type="number"
                            value={eventDefaults.defaultEventDuration}
                            onChange={(e) => setEventDefaults({ ...eventDefaults, defaultEventDuration: parseInt(e.target.value) })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Ticket Sales Start (days before)</label>
                        <input
                            type="number"
                            value={eventDefaults.defaultTicketSaleStart}
                            onChange={(e) => setEventDefaults({ ...eventDefaults, defaultTicketSaleStart: parseInt(e.target.value) })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Default Refund Policy</label>
                        <select
                            value={eventDefaults.defaultRefundPolicy}
                            onChange={(e) => setEventDefaults({ ...eventDefaults, defaultRefundPolicy: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        >
                            <option value="strict">Strict - No refunds</option>
                            <option value="moderate">Moderate - 48h before event</option>
                            <option value="flexible">Flexible - 7 days before event</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Publishing Settings</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-sm font-medium text-black">Require approval for new events</span>
                            <p className="text-xs text-gray-600">Events must be reviewed before going live</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={eventDefaults.requireApproval}
                            onChange={(e) => setEventDefaults({ ...eventDefaults, requireApproval: e.target.checked })}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-sm font-medium text-black">Auto-publish events</span>
                            <p className="text-xs text-gray-600">Automatically publish events when created</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={eventDefaults.autoPublish}
                            onChange={(e) => setEventDefaults({ ...eventDefaults, autoPublish: e.target.checked })}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    const renderAppearanceTab = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Display Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Theme</label>
                        <select
                            value={appearanceSettings.theme}
                            onChange={(e) => setAppearanceSettings({ ...appearanceSettings, theme: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="auto">Auto (System)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Language</label>
                        <select
                            value={appearanceSettings.language}
                            onChange={(e) => setAppearanceSettings({ ...appearanceSettings, language: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        >
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Date Format</label>
                        <select
                            value={appearanceSettings.dateFormat}
                            onChange={(e) => setAppearanceSettings({ ...appearanceSettings, dateFormat: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        >
                            <option value="MM/dd/yyyy">MM/DD/YYYY</option>
                            <option value="dd/MM/yyyy">DD/MM/YYYY</option>
                            <option value="yyyy-MM-dd">YYYY-MM-DD</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Time Format</label>
                        <select
                            value={appearanceSettings.timeFormat}
                            onChange={(e) => setAppearanceSettings({ ...appearanceSettings, timeFormat: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                        >
                            <option value="12h">12 Hour (AM/PM)</option>
                            <option value="24h">24 Hour</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-black mb-4">Data Export</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-sm font-medium text-black">Export all data</span>
                            <p className="text-xs text-gray-600">Download all your event and user data</p>
                        </div>
                        <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg text-sm">
                            <Download className="w-4 h-4 mr-2" />
                            Export
                        </button>
                    </div>
                </div>
            </div>
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

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
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
                                        onClick={() => setActiveTab(tab.id)}
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
                            disabled={loading}
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
        </div>
    );
};

export default OrganizerSettings;