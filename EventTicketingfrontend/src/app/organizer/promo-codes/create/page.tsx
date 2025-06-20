/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState, useEffect } from 'react';
import { useThemeClasses } from '@/hooks/useTheme';
import { useI18n } from '@/components/providers/I18nProvider';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { promoCodesApi, eventsApi, type CreatePromoCodeDto, type Event } from '@/lib/api';
import {
    ArrowLeft,
    Save,
    Calendar,
    DollarSign,
    Percent,
    Tag,
    AlertCircle,
    CheckCircle,
    Globe,
    MapPin
} from 'lucide-react';

const CreatePromoCodePage: React.FC = () => {
    const themeClasses = useThemeClasses();
    const { t } = useI18n();
    const { user, isOrganizer } = useAuth();
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [eventsLoading, setEventsLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [events, setEvents] = useState<Event[]>([]);

    // Form data
    const [formData, setFormData] = useState({
        code: '',
        description: '',
        type: 0, // 0 = Percentage, 1 = FixedAmount
        value: '',
        minimumOrderAmount: '',
        maximumDiscountAmount: '',
        scope: 1, // 0 = EventSpecific, 1 = OrganizerWide
        eventId: '',
        startDate: '',
        endDate: '',
        maxUsageCount: '100',
        maxUsagePerUser: '1'
    });

    // Validation errors
    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

    // Load events on component mount
    useEffect(() => {
        if (user && isOrganizer) {
            loadEvents();
        } else if (user && !isOrganizer) {
            router.push('/');
        }
    }, [user, isOrganizer, router]);

    const loadEvents = async () => {
        try {
            setEventsLoading(true);
            const userEvents = await eventsApi.getMyEvents();
            setEvents(userEvents);
        } catch (error) {
            console.error('Failed to load events:', error);
            setError('Failed to load events');
        } finally {
            setEventsLoading(false);
        }
    };

    // Form validation
    const validateForm = (): boolean => {
        const errors: Record<string, string> = {};

        // Required fields
        if (!formData.code.trim()) {
            errors.code = 'Promo code is required';
        } else if (!/^[A-Z0-9]+$/.test(formData.code.trim())) {
            errors.code = 'Promo code must contain only uppercase letters and numbers';
        }

        if (!formData.value.trim()) {
            errors.value = 'Discount value is required';
        } else {
            const value = parseFloat(formData.value);
            if (isNaN(value) || value <= 0) {
                errors.value = 'Discount value must be a positive number';
            } else if (formData.type === 0 && value > 100) {
                errors.value = 'Percentage value cannot exceed 100%';
            }
        }

        if (!formData.startDate) {
            errors.startDate = 'Start date is required';
        }

        if (!formData.endDate) {
            errors.endDate = 'End date is required';
        }

        if (formData.startDate && formData.endDate) {
            const startDate = new Date(formData.startDate);
            const endDate = new Date(formData.endDate);
            if (endDate <= startDate) {
                errors.endDate = 'End date must be after start date';
            }
            if (startDate < new Date(new Date().setHours(0, 0, 0, 0))) {
                errors.startDate = 'Start date cannot be in the past';
            }
        }

        if (!formData.maxUsageCount.trim()) {
            errors.maxUsageCount = 'Maximum usage count is required';
        } else {
            const count = parseInt(formData.maxUsageCount);
            if (isNaN(count) || count <= 0) {
                errors.maxUsageCount = 'Maximum usage count must be a positive number';
            }
        }

        if (formData.scope === 0 && !formData.eventId) {
            errors.eventId = 'Event selection is required for event-specific promo codes';
        }

        if (formData.minimumOrderAmount.trim()) {
            const minAmount = parseFloat(formData.minimumOrderAmount);
            if (isNaN(minAmount) || minAmount <= 0) {
                errors.minimumOrderAmount = 'Minimum order amount must be a positive number';
            }
        }

        if (formData.maximumDiscountAmount.trim()) {
            const maxAmount = parseFloat(formData.maximumDiscountAmount);
            if (isNaN(maxAmount) || maxAmount <= 0) {
                errors.maximumDiscountAmount = 'Maximum discount amount must be a positive number';
            }
        }

        if (formData.maxUsagePerUser.trim()) {
            const perUser = parseInt(formData.maxUsagePerUser);
            if (isNaN(perUser) || perUser <= 0) {
                errors.maxUsagePerUser = 'Maximum usage per user must be a positive number';
            }
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            setError('Please fix the validation errors');
            return;
        }

        try {
            setLoading(true);
            setError('');

            const createData: CreatePromoCodeDto = {
                code: formData.code.trim().toUpperCase(),
                description: formData.description.trim() || undefined,
                type: formData.type,
                value: parseFloat(formData.value),
                minimumOrderAmount: formData.minimumOrderAmount.trim() ? parseFloat(formData.minimumOrderAmount) : undefined,
                maximumDiscountAmount: formData.maximumDiscountAmount.trim() ? parseFloat(formData.maximumDiscountAmount) : undefined,
                scope: formData.scope,
                eventId: formData.scope === 0 ? parseInt(formData.eventId) : undefined,
                startDate: formData.startDate,
                endDate: formData.endDate,
                maxUsageCount: parseInt(formData.maxUsageCount),
                maxUsagePerUser: formData.maxUsagePerUser.trim() ? parseInt(formData.maxUsagePerUser) : undefined
            };

            const result = await promoCodesApi.createPromoCode(createData);
            setSuccess('Promo code created successfully!');

            // Redirect to promo codes list after a short delay
            setTimeout(() => {
                router.push('/organizer/promo-codes');
            }, 2000);

        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to create promo code';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Handle input changes
    const handleInputChange = (field: string, value: string | number) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // Clear validation error for this field
        if (validationErrors[field]) {
            setValidationErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    // Auto-generate today's date for start date default
    useEffect(() => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        setFormData(prev => ({
            ...prev,
            startDate: today.toISOString().split('T')[0],
            endDate: tomorrow.toISOString().split('T')[0]
        }));
    }, []);

    if (!user || !isOrganizer) {
        return (
            <div className={`min-h-screen ${themeClasses.themeBg} flex items-center justify-center theme-transition`}>
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 accent-border mx-auto"></div>
                    <p className={`mt-4 ${themeClasses.themeMutedFg}`}>Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${themeClasses.themeBg} theme-transition`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center space-x-4 mb-4">
                        <button
                            onClick={() => router.push('/organizer/promo-codes')}
                            className={`p-2 rounded-lg ${themeClasses.hover} transition-colors`}
                        >
                            <ArrowLeft className={`h-5 w-5 ${themeClasses.themeMutedFg}`} />
                        </button>
                        <div>
                            <h1 className={`text-3xl font-bold ${themeClasses.themeFg}`}>{t('createPromoCode')}</h1>
                            <p className={`${themeClasses.themeMutedFg} mt-1`}>
                                {t('createFirstPromoCodeDescription')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Success/Error Messages */}
                {success && (
                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                            <p className="text-green-700 dark:text-green-300">{success}</p>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <div className="flex items-center">
                            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                            <p className="text-red-700 dark:text-red-300">{error}</p>
                        </div>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Information */}
                    <div className={`${themeClasses.themeCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} p-6 theme-transition`}>
                        <h2 className={`text-lg font-semibold ${themeClasses.themeFg} mb-4 flex items-center`}>
                            <Tag className="h-5 w-5 mr-2 text-blue-500" />
                            {t('basicInformation')}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Promo Code */}
                            <div>
                                <label className={`block text-sm font-medium ${themeClasses.themeFg} mb-2`}>
                                    {t('promoCodes')} *
                                </label>
                                <input
                                    type="text"
                                    value={formData.code}
                                    onChange={(e) => handleInputChange('code', e.target.value.toUpperCase())}
                                    placeholder="SAVE20"
                                    className={`w-full px-3 py-2 ${themeClasses.themeCard} ${themeClasses.themeFg} ${themeClasses.themeBorder} border rounded-lg focus:ring-2 accent-focus focus:border-transparent theme-transition font-mono ${validationErrors.code ? 'border-red-500' : ''}`}
                                />
                                {validationErrors.code && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.code}</p>
                                )}
                            </div>

                            {/* Description */}
                            <div>
                                <label className={`block text-sm font-medium ${themeClasses.themeFg} mb-2`}>
                                    {t('description')}
                                </label>
                                <input
                                    type="text"
                                    value={formData.description}
                                    onChange={(e) => handleInputChange('description', e.target.value)}
                                    placeholder="20% off for new customers"
                                    className={`w-full px-3 py-2 ${themeClasses.themeCard} ${themeClasses.themeFg} ${themeClasses.themeBorder} border rounded-lg focus:ring-2 accent-focus focus:border-transparent theme-transition`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Discount Settings */}
                    <div className={`${themeClasses.themeCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} p-6 theme-transition`}>
                        <h2 className={`text-lg font-semibold ${themeClasses.themeFg} mb-4 flex items-center`}>
                            <DollarSign className="h-5 w-5 mr-2 text-green-500" />
                            {t('discountSettings')}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Discount Type */}
                            <div>
                                <label className={`block text-sm font-medium ${themeClasses.themeFg} mb-2`}>
                                    {t('discountType')} *
                                </label>
                                <div className="flex space-x-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            value={0}
                                            checked={formData.type === 0}
                                            onChange={(e) => handleInputChange('type', parseInt(e.target.value))}
                                            className="accent-radio mr-2"
                                        />
                                        <Percent className="h-4 w-4 mr-1" />
                                        <span className={themeClasses.themeFg}>{t('percentageOff')}</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            value={1}
                                            checked={formData.type === 1}
                                            onChange={(e) => handleInputChange('type', parseInt(e.target.value))}
                                            className="accent-radio mr-2"
                                        />
                                        <DollarSign className="h-4 w-4 mr-1" />
                                        <span className={themeClasses.themeFg}>{t('fixedAmountOff')}</span>
                                    </label>
                                </div>
                            </div>

                            {/* Discount Value */}
                            <div>
                                <label className={`block text-sm font-medium ${themeClasses.themeFg} mb-2`}>
                                    {t('discountSettings')} * {formData.type === 0 ? '(%)' : '($)'}
                                </label>
                                <input
                                    type="number"
                                    step={formData.type === 0 ? "0.01" : "0.01"}
                                    min="0"
                                    max={formData.type === 0 ? "100" : undefined}
                                    value={formData.value}
                                    onChange={(e) => handleInputChange('value', e.target.value)}
                                    placeholder={formData.type === 0 ? "20" : "50.00"}
                                    className={`w-full px-3 py-2 ${themeClasses.themeCard} ${themeClasses.themeFg} ${themeClasses.themeBorder} border rounded-lg focus:ring-2 accent-focus focus:border-transparent theme-transition ${validationErrors.value ? 'border-red-500' : ''}`}
                                />
                                {validationErrors.value && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.value}</p>
                                )}
                            </div>

                            {/* Minimum Order Amount */}
                            <div>
                                <label className={`block text-sm font-medium ${themeClasses.themeFg} mb-2`}>
                                    {t('minimumOrderAmount')} ($)
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    value={formData.minimumOrderAmount}
                                    onChange={(e) => handleInputChange('minimumOrderAmount', e.target.value)}
                                    placeholder="0.00"
                                    className={`w-full px-3 py-2 ${themeClasses.themeCard} ${themeClasses.themeFg} ${themeClasses.themeBorder} border rounded-lg focus:ring-2 accent-focus focus:border-transparent theme-transition ${validationErrors.minimumOrderAmount ? 'border-red-500' : ''}`}
                                />
                                {validationErrors.minimumOrderAmount && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.minimumOrderAmount}</p>
                                )}
                            </div>

                            {/* Maximum Discount Amount */}
                            <div>
                                <label className={`block text-sm font-medium ${themeClasses.themeFg} mb-2`}>
                                    {t('maximumDiscountAmount')} ($)
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    value={formData.maximumDiscountAmount}
                                    onChange={(e) => handleInputChange('maximumDiscountAmount', e.target.value)}
                                    placeholder="0.00"
                                    className={`w-full px-3 py-2 ${themeClasses.themeCard} ${themeClasses.themeFg} ${themeClasses.themeBorder} border rounded-lg focus:ring-2 accent-focus focus:border-transparent theme-transition ${validationErrors.maximumDiscountAmount ? 'border-red-500' : ''}`}
                                />
                                {validationErrors.maximumDiscountAmount && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.maximumDiscountAmount}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Scope Settings */}
                    <div className={`${themeClasses.themeCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} p-6 theme-transition`}>
                        <h2 className={`text-lg font-semibold ${themeClasses.themeFg} mb-4 flex items-center`}>
                            <Globe className="h-5 w-5 mr-2 text-purple-500" />
                            {t('scopeSettings')}
                        </h2>

                        <div className="space-y-4">
                            {/* Scope Selection */}
                            <div>
                                <label className={`block text-sm font-medium ${themeClasses.themeFg} mb-2`}>
                                    {t('promoCodeScope')} *
                                </label>
                                <div className="flex space-x-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            value={1}
                                            checked={formData.scope === 1}
                                            onChange={(e) => handleInputChange('scope', parseInt(e.target.value))}
                                            className="accent-radio mr-2"
                                        />
                                        <Globe className="h-4 w-4 mr-1" />
                                        <span className={themeClasses.themeFg}>{t('allEvents')}</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            value={0}
                                            checked={formData.scope === 0}
                                            onChange={(e) => handleInputChange('scope', parseInt(e.target.value))}
                                            className="accent-radio mr-2"
                                        />
                                        <MapPin className="h-4 w-4 mr-1" />
                                        <span className={themeClasses.themeFg}>{t('eventSpecific')}</span>
                                    </label>
                                </div>
                            </div>

                            {/* Event Selection (only show if event-specific) */}
                            {formData.scope === 0 && (
                                <div>
                                    <label className={`block text-sm font-medium ${themeClasses.themeFg} mb-2`}>
                                        Select Event *
                                    </label>
                                    {eventsLoading ? (
                                        <div className="flex items-center space-x-2">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 accent-border"></div>
                                            <span className={themeClasses.themeMutedFg}>Loading events...</span>
                                        </div>
                                    ) : (
                                        <select
                                            value={formData.eventId}
                                            onChange={(e) => handleInputChange('eventId', e.target.value)}
                                            className={`w-full px-3 py-2 ${themeClasses.themeCard} ${themeClasses.themeFg} ${themeClasses.themeBorder} border rounded-lg focus:ring-2 accent-focus focus:border-transparent theme-transition ${validationErrors.eventId ? 'border-red-500' : ''}`}
                                        >
                                            <option value="">Select an event</option>
                                            {events.map((event) => (
                                                <option key={event.eventId} value={event.eventId}>
                                                    {event.title} - {new Date(event.startDateTime).toLocaleDateString()}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                    {validationErrors.eventId && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.eventId}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Date and Usage Settings */}
                    <div className={`${themeClasses.themeCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} p-6 theme-transition`}>
                        <h2 className={`text-lg font-semibold ${themeClasses.themeFg} mb-4 flex items-center`}>
                            <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                            {t('dateandusagesettings')}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Start Date */}
                            <div>
                                <label className={`block text-sm font-medium ${themeClasses.themeFg} mb-2`}>
                                    {t('startDate')} *
                                </label>
                                <input
                                    type="date"
                                    value={formData.startDate}
                                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                                    className={`w-full px-3 py-2 ${themeClasses.themeCard} ${themeClasses.themeFg} ${themeClasses.themeBorder} border rounded-lg focus:ring-2 accent-focus focus:border-transparent theme-transition ${validationErrors.startDate ? 'border-red-500' : ''}`}
                                />
                                {validationErrors.startDate && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.startDate}</p>
                                )}
                            </div>

                            {/* End Date */}
                            <div>
                                <label className={`block text-sm font-medium ${themeClasses.themeFg} mb-2`}>
                                    {t('endDate')} *
                                </label>
                                <input
                                    type="date"
                                    value={formData.endDate}
                                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                                    className={`w-full px-3 py-2 ${themeClasses.themeCard} ${themeClasses.themeFg} ${themeClasses.themeBorder} border rounded-lg focus:ring-2 accent-focus focus:border-transparent theme-transition ${validationErrors.endDate ? 'border-red-500' : ''}`}
                                />
                                {validationErrors.endDate && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.endDate}</p>
                                )}
                            </div>

                            {/* Maximum Usage Count */}
                            <div>
                                <label className={`block text-sm font-medium ${themeClasses.themeFg} mb-2`}>
                                    {t('maximumusage')} *
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    value={formData.maxUsageCount}
                                    onChange={(e) => handleInputChange('maxUsageCount', e.target.value)}
                                    placeholder="100"
                                    className={`w-full px-3 py-2 ${themeClasses.themeCard} ${themeClasses.themeFg} ${themeClasses.themeBorder} border rounded-lg focus:ring-2 accent-focus focus:border-transparent theme-transition ${validationErrors.maxUsageCount ? 'border-red-500' : ''}`}
                                />
                                {validationErrors.maxUsageCount && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.maxUsageCount}</p>
                                )}
                            </div>

                            {/* Maximum Usage Per User */}
                            <div>
                                <label className={`block text-sm font-medium ${themeClasses.themeFg} mb-2`}>
                                    {t('maximumusageperusers')}
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    value={formData.maxUsagePerUser}
                                    onChange={(e) => handleInputChange('maxUsagePerUser', e.target.value)}
                                    placeholder="1"
                                    className={`w-full px-3 py-2 ${themeClasses.themeCard} ${themeClasses.themeFg} ${themeClasses.themeBorder} border rounded-lg focus:ring-2 accent-focus focus:border-transparent theme-transition ${validationErrors.maxUsagePerUser ? 'border-red-500' : ''}`}
                                />
                                {validationErrors.maxUsagePerUser && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{validationErrors.maxUsagePerUser}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex items-center justify-end space-x-4 pt-6">
                        <button
                            type="button"
                            onClick={() => router.push('/organizer/promo-codes')}
                            className={`px-6 py-2 ${themeClasses.themeMuted} ${themeClasses.themeMutedFg} rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors`}
                        >
                            {t('cancel')}
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-accent flex items-center"
                        >
                            {loading ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                    {t('create')}...
                                </>
                            ) : (
                                <>
                                    <Save className="h-4 w-4 mr-2" />
                                        {t('createPromoCode')}
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePromoCodePage;