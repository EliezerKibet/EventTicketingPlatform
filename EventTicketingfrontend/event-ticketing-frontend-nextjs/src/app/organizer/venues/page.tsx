/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useI18n } from '@/components/providers/I18nProvider'; // Add this import
import { useTheme, useThemeClasses } from '@/hooks/useTheme';

import {
    MapPin,
    Plus,
    Search,
    Users,
    Building,
    ArrowLeft,
    Save,
    X,
    AlertCircle,
    CheckCircle
} from 'lucide-react';

// Interfaces
interface Venue {
    venueId: number;
    name: string;
    address: string;
    city: string;
    state?: string;
    country?: string;
    zipCode?: string;
    capacity: number;
    description?: string;
    contactEmail?: string;
    contactPhone?: string;
    website?: string;
    isActive: boolean;
    eventCount: number;
}

interface VenueFormData {
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    capacity: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
    website: string;
    latitude: string;
    longitude: string;
}

const VenuesPage = () => {
    const router = useRouter();
    const { user, isOrganizer } = useAuth();
    const { t } = useI18n(); // Add this hook
    const themeClasses = useThemeClasses();
    const { isDark } = useTheme();

    const [venues, setVenues] = useState<Venue[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [formLoading, setFormLoading] = useState(false);

    const [formData, setFormData] = useState<VenueFormData>({
        name: '',
        address: '',
        city: '',
        state: '',
        country: 'Malaysia',
        zipCode: '',
        capacity: '',
        description: '',
        contactEmail: '',
        contactPhone: '',
        website: '',
        latitude: '',
        longitude: ''
    });

    const [formErrors, setFormErrors] = useState<Record<string, string>>({});

    // Check if user is authorized
    useEffect(() => {
        if (user && !isOrganizer) {
            router.push('/');
        }
    }, [user, isOrganizer, router]);

    // Fetch venues
    useEffect(() => {
        if (user && isOrganizer) {
            fetchVenues();
        }
    }, [user, isOrganizer]);

    const fetchVenues = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:5251/api/venues', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setVenues(data);
            } else {
                setError(t('failedToFetchVenues'));
            }
        } catch (error) {
            console.error('Error fetching venues:', error);
            setError(t('failedToFetchVenues'));
        } finally {
            setLoading(false);
        }
    };

    // Filter venues
    const filteredVenues = venues.filter(venue => {
        const matchesSearch = venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            venue.address.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCity = !selectedCity || venue.city === selectedCity;
        return matchesSearch && matchesCity;
    });

    // Get unique cities for filter
    const cities = [...new Set(venues.map(venue => venue.city))].sort();

    // Form handling
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when field is updated
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors: Record<string, string> = {};

        if (!formData.name.trim()) {
            errors.name = t('venueNameRequired');
        }

        if (!formData.address.trim()) {
            errors.address = t('addressRequired');
        }

        if (!formData.city.trim()) {
            errors.city = t('categoryRequired'); // Reusing city validation message
        }

        if (!formData.country.trim()) {
            errors.country = t('countryRequired');
        }

        if (!formData.capacity || parseInt(formData.capacity) <= 0) {
            errors.capacity = t('capacityRequired');
        }

        if (formData.contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
            errors.contactEmail = t('validEmailRequired');
        }

        // Validate latitude and longitude only if provided
        if (formData.latitude) {
            const lat = parseFloat(formData.latitude);
            if (isNaN(lat) || lat < -90 || lat > 90) {
                errors.latitude = t('latitudeBetween');
            }
        }

        if (formData.longitude) {
            const lng = parseFloat(formData.longitude);
            if (isNaN(lng) || lng < -180 || lng > 180) {
                errors.longitude = t('longitudeBetween');
            }
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const resetForm = () => {
        setFormData({
            name: '',
            address: '',
            city: '',
            state: '',
            country: 'Malaysia',
            zipCode: '',
            capacity: '',
            description: '',
            contactEmail: '',
            contactPhone: '',
            website: '',
            latitude: '',
            longitude: ''
        });
        setFormErrors({});
        setShowCreateForm(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setFormLoading(true);
        setError('');
        setSuccess('');

        try {
            const payload = {
                name: formData.name.trim(),
                description: formData.description.trim() || null,
                address: formData.address.trim(),
                city: formData.city.trim(),
                state: formData.state.trim() || null,
                zipCode: formData.zipCode.trim() || null,
                country: formData.country.trim(),
                latitude: formData.latitude ? parseFloat(formData.latitude) : null,
                longitude: formData.longitude ? parseFloat(formData.longitude) : null,
                capacity: parseInt(formData.capacity),
                contactEmail: formData.contactEmail.trim() || null,
                contactPhone: formData.contactPhone.trim() || null,
                website: formData.website.trim() || null
            };

            console.log('Creating venue with payload:', payload);

            const response = await fetch('http://localhost:5251/api/venues', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setSuccess(t('venueCreatedSuccessfully'));
                await fetchVenues();
                resetForm();

                setTimeout(() => setSuccess(''), 3000);
            } else {
                const errorData = await response.json();
                console.error('Venue creation error:', errorData);
                setError(errorData.message || t('failedToCreateVenue'));
            }
        } catch (error) {
            console.error('Error creating venue:', error);
            setError(t('failedToCreateVenue'));
        } finally {
            setFormLoading(false);
        }
    };

    // Get theme-aware input styles
    const getInputStyles = (hasError = false) => {
        const baseStyles = `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-opacity-60`;
        const themeStyles = isDark
            ? `${themeClasses.card} ${themeClasses.text} ${themeClasses.border} placeholder-gray-400`
            : `bg-white text-gray-900 border-gray-300 placeholder-gray-600`;
        const errorStyles = hasError ? 'border-red-500' : '';
        return `${baseStyles} ${themeStyles} ${errorStyles}`;
    };

    if (!user || !isOrganizer) {
        return (
            <div className={`min-h-screen ${themeClasses.background} flex items-center justify-center`}>
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className={`mt-4 ${themeClasses.textMuted}`}>{t('loading')}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${themeClasses.background}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => router.back()}
                        className={`flex items-center ${themeClasses.textMuted} hover:${themeClasses.text} mb-4 transition-colors`}
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        {t('back')}
                    </button>
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className={`text-3xl font-bold ${themeClasses.text}`}>{t('venues')}</h1>
                            <p className={`${themeClasses.textMuted} mt-1`}>{t('viewAvailableVenues')}</p>
                        </div>
                        <button
                            onClick={() => setShowCreateForm(true)}
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Plus className="h-4 w-4 mr-2" />
                            {t('createVenue')}
                        </button>
                    </div>
                </div>

                {/* Success/Error Messages */}
                {success && (
                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                            <p className="text-green-700 dark:text-green-300">{success}</p>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <div className="flex items-center">
                            <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
                            <p className="text-red-700 dark:text-red-300">{error}</p>
                        </div>
                    </div>
                )}

                {/* Create Form Modal */}
                {showCreateForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className={`${themeClasses.card} rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl`}>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className={`text-xl font-semibold ${themeClasses.text}`}>
                                        {t('createNewVenue')}
                                    </h2>
                                    <button
                                        onClick={resetForm}
                                        className={`${themeClasses.textMuted} hover:${themeClasses.text} transition-colors`}
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Venue Name */}
                                        <div className="md:col-span-2">
                                            <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                {t('venueName')} *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className={getInputStyles(!!formErrors.name)}
                                                placeholder={t('enterVenueName')}
                                            />
                                            {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                                        </div>

                                        {/* Address */}
                                        <div className="md:col-span-2">
                                            <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                {t('address')} *
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className={getInputStyles(!!formErrors.address)}
                                                placeholder={t('enterVenueAddress')}
                                            />
                                            {formErrors.address && <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>}
                                        </div>

                                        {/* City */}
                                        <div>
                                            <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                {t('city')} *
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className={getInputStyles(!!formErrors.city)}
                                                placeholder={t('city')}
                                            />
                                            {formErrors.city && <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>}
                                        </div>

                                        {/* State */}
                                        <div>
                                            <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                {t('state')}
                                            </label>
                                            <input
                                                type="text"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                className={getInputStyles()}
                                                placeholder={t('enterStateOptional')}
                                            />
                                        </div>

                                        {/* Country */}
                                        <div>
                                            <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                {t('country')} *
                                            </label>
                                            <input
                                                type="text"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                className={getInputStyles(!!formErrors.country)}
                                                placeholder={t('enterCountry')}
                                            />
                                            {formErrors.country && <p className="text-red-500 text-sm mt-1">{formErrors.country}</p>}
                                        </div>

                                        {/* ZIP Code */}
                                        <div>
                                            <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                {t('zipCode')}
                                            </label>
                                            <input
                                                type="text"
                                                name="zipCode"
                                                value={formData.zipCode}
                                                onChange={handleInputChange}
                                                className={getInputStyles()}
                                                placeholder={t('enterZipCodeOptional')}
                                            />
                                        </div>

                                        {/* Capacity */}
                                        <div>
                                            <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                {t('capacity')} *
                                            </label>
                                            <input
                                                type="number"
                                                name="capacity"
                                                value={formData.capacity}
                                                onChange={handleInputChange}
                                                min="1"
                                                className={getInputStyles(!!formErrors.capacity)}
                                                placeholder={t('maximumCapacity')}
                                            />
                                            {formErrors.capacity && <p className="text-red-500 text-sm mt-1">{formErrors.capacity}</p>}
                                        </div>

                                        {/* Contact Email */}
                                        <div>
                                            <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                {t('contactEmail')}
                                            </label>
                                            <input
                                                type="email"
                                                name="contactEmail"
                                                value={formData.contactEmail}
                                                onChange={handleInputChange}
                                                className={getInputStyles(!!formErrors.contactEmail)}
                                                placeholder="venue@example.com"
                                            />
                                            {formErrors.contactEmail && <p className="text-red-500 text-sm mt-1">{formErrors.contactEmail}</p>}
                                        </div>

                                        {/* Contact Phone */}
                                        <div>
                                            <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                {t('contactPhone')}
                                            </label>
                                            <input
                                                type="tel"
                                                name="contactPhone"
                                                value={formData.contactPhone}
                                                onChange={handleInputChange}
                                                className={getInputStyles()}
                                                placeholder="+60 12-345 6789"
                                            />
                                        </div>

                                        {/* Website */}
                                        <div>
                                            <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                {t('website')}
                                            </label>
                                            <input
                                                type="url"
                                                name="website"
                                                value={formData.website}
                                                onChange={handleInputChange}
                                                className={getInputStyles()}
                                                placeholder="https://venue-website.com"
                                            />
                                        </div>

                                        {/* Latitude */}
                                        <div>
                                            <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                {t('latitude')}
                                            </label>
                                            <input
                                                type="number"
                                                name="latitude"
                                                value={formData.latitude}
                                                onChange={handleInputChange}
                                                step="0.000001"
                                                min="-90"
                                                max="90"
                                                className={getInputStyles(!!formErrors.latitude)}
                                                placeholder="3.1390 (optional)"
                                            />
                                            {formErrors.latitude && <p className="text-red-500 text-sm mt-1">{formErrors.latitude}</p>}
                                            <p className={`text-xs ${themeClasses.textMuted} mt-1`}>{t('optionalMapIntegration')}</p>
                                        </div>

                                        {/* Longitude */}
                                        <div>
                                            <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                {t('longitude')}
                                            </label>
                                            <input
                                                type="number"
                                                name="longitude"
                                                value={formData.longitude}
                                                onChange={handleInputChange}
                                                step="0.000001"
                                                min="-180"
                                                max="180"
                                                className={getInputStyles(!!formErrors.longitude)}
                                                placeholder="101.6869 (optional)"
                                            />
                                            {formErrors.longitude && <p className="text-red-500 text-sm mt-1">{formErrors.longitude}</p>}
                                            <p className={`text-xs ${themeClasses.textMuted} mt-1`}>{t('optionalMapIntegration')}</p>
                                        </div>

                                        {/* Description */}
                                        <div className="md:col-span-2">
                                            <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                                                {t('description')}
                                            </label>
                                            <textarea
                                                name="description"
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                rows={4}
                                                className={getInputStyles()}
                                                placeholder={t('describeVenue')}
                                            />
                                        </div>
                                    </div>

                                    {/* Form Actions */}
                                    <div className={`flex justify-end space-x-4 pt-6 border-t ${themeClasses.border}`}>
                                        <button
                                            type="button"
                                            onClick={resetForm}
                                            className={`px-6 py-2 border ${themeClasses.border} ${themeClasses.textMuted} rounded-lg ${themeClasses.hover} transition-colors`}
                                        >
                                            {t('cancel')}
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={formLoading}
                                            className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            {formLoading ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                    {t('creatingVenue')}
                                                </>
                                            ) : (
                                                <>
                                                    <Save className="h-4 w-4 mr-2" />
                                                    {t('createVenue')}
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                {/* Filters */}
                <div className={`${themeClasses.card} rounded-lg shadow-sm border ${themeClasses.border} p-6 mb-6`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <Search className={`h-5 w-5 ${themeClasses.textMuted} absolute left-3 top-1/2 transform -translate-y-1/2`} />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder={t('searchVenues')}
                                className={`w-full pl-10 pr-4 py-2 border ${themeClasses.border} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.card} ${themeClasses.text} placeholder-opacity-60 ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-600'}`}
                            />
                        </div>
                        <div>
                            <select
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                className={`w-full px-4 py-2 border ${themeClasses.border} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.card} ${themeClasses.text}`}
                            >
                                <option value="">{t('allCities')}</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Venues List */}
                <div className={`${themeClasses.card} rounded-lg shadow-sm border ${themeClasses.border}`}>
                    {loading ? (
                        <div className="flex items-center justify-center py-12">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <span className={`ml-2 ${themeClasses.textMuted}`}>{t('loadingVenues')}</span>
                        </div>
                    ) : filteredVenues.length === 0 ? (
                        <div className="text-center py-12">
                            <Building className={`h-12 w-12 ${themeClasses.textMuted} mx-auto mb-4`} />
                            <h3 className={`text-lg font-medium ${themeClasses.text} mb-2`}>{t('noVenuesFound')}</h3>
                            <p className={themeClasses.textMuted}>
                                {searchTerm || selectedCity ? t('adjustFilters') : t('getStartedFirstVenue')}
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} border-b ${themeClasses.border}`}>
                                    <tr>
                                        <th className={`px-6 py-3 text-left text-xs font-medium ${themeClasses.textMuted} uppercase tracking-wider`}>
                                            {t('venue')}
                                        </th>
                                        <th className={`px-6 py-3 text-left text-xs font-medium ${themeClasses.textMuted} uppercase tracking-wider`}>
                                            {t('venueLocation')}
                                        </th>
                                        <th className={`px-6 py-3 text-left text-xs font-medium ${themeClasses.textMuted} uppercase tracking-wider`}>
                                            {t('venueCapacity')}
                                        </th>
                                        <th className={`px-6 py-3 text-left text-xs font-medium ${themeClasses.textMuted} uppercase tracking-wider`}>
                                            {t('venueEvents')}
                                        </th>
                                        <th className={`px-6 py-3 text-left text-xs font-medium ${themeClasses.textMuted} uppercase tracking-wider`}>
                                            {t('venueStatus')}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className={`${themeClasses.card} divide-y ${themeClasses.border}`}>
                                    {filteredVenues.map((venue) => (
                                        <tr key={venue.venueId} className={themeClasses.hover}>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <div className={`text-sm font-medium ${themeClasses.text}`}>{venue.name}</div>
                                                    {venue.description && (
                                                        <div className={`text-sm ${themeClasses.textMuted} truncate max-w-xs`}>{venue.description}</div>
                                                    )}
                                                    {venue.contactEmail && (
                                                        <div className="text-xs text-blue-600 dark:text-blue-400">{venue.contactEmail}</div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className={`flex items-start text-sm ${themeClasses.text}`}>
                                                    <MapPin className={`h-4 w-4 ${themeClasses.textMuted} mr-1 mt-0.5 flex-shrink-0`} />
                                                    <div>
                                                        <div>{venue.address}</div>
                                                        <div className={themeClasses.textMuted}>
                                                            {venue.city}
                                                            {venue.state && `, ${venue.state}`}
                                                        </div>
                                                        <div className={themeClasses.textMuted}>
                                                            {venue.country}
                                                            {venue.zipCode && ` ${venue.zipCode}`}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className={`flex items-center text-sm ${themeClasses.text}`}>
                                                    <Users className={`h-4 w-4 ${themeClasses.textMuted} mr-1`} />
                                                    {venue.capacity.toLocaleString()}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className={`text-sm ${themeClasses.text}`}>
                                                    {t('eventsCount', { count: venue.eventCount })}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${venue.isActive
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                                    }`}>
                                                    {venue.isActive ? t('active') : t('inactive')}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VenuesPage;