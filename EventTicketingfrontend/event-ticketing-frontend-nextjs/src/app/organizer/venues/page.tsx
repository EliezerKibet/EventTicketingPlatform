"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
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
                setError('Failed to fetch venues');
            }
        } catch (error) {
            console.error('Error fetching venues:', error);
            setError('Failed to fetch venues');
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
            errors.name = 'Venue name is required';
        }

        if (!formData.address.trim()) {
            errors.address = 'Address is required';
        }

        if (!formData.city.trim()) {
            errors.city = 'City is required';
        }

        if (!formData.country.trim()) {
            errors.country = 'Country is required';
        }

        if (!formData.capacity || parseInt(formData.capacity) <= 0) {
            errors.capacity = 'Capacity must be greater than 0';
        }

        if (formData.contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
            errors.contactEmail = 'Please enter a valid email address';
        }

        // Validate latitude and longitude only if provided
        if (formData.latitude) {
            const lat = parseFloat(formData.latitude);
            if (isNaN(lat) || lat < -90 || lat > 90) {
                errors.latitude = 'Latitude must be between -90 and 90';
            }
        }

        if (formData.longitude) {
            const lng = parseFloat(formData.longitude);
            if (isNaN(lng) || lng < -180 || lng > 180) {
                errors.longitude = 'Longitude must be between -180 and 180';
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
                setSuccess('Venue created successfully!');
                await fetchVenues();
                resetForm();

                setTimeout(() => setSuccess(''), 3000);
            } else {
                const errorData = await response.json();
                console.error('Venue creation error:', errorData);
                setError(errorData.message || 'Failed to create venue');
            }
        } catch (error) {
            console.error('Error creating venue:', error);
            setError('Failed to create venue. Please try again.');
        } finally {
            setFormLoading(false);
        }
    };

    if (!user || !isOrganizer) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back
                    </button>
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Venues</h1>
                            <p className="text-gray-600 mt-1">View available venues and create new ones</p>
                        </div>
                        <button
                            onClick={() => setShowCreateForm(true)}
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Plus className="h-4 w-4 mr-2" />
                            Create Venue
                        </button>
                    </div>
                </div>

                {/* Success/Error Messages */}
                {success && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                            <p className="text-green-700">{success}</p>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center">
                            <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
                            <p className="text-red-700">{error}</p>
                        </div>
                    </div>
                )}

                {/* Create Form Modal */}
                {showCreateForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        Create New Venue
                                    </h2>
                                    <button
                                        onClick={resetForm}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Venue Name */}
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Venue Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-600 ${formErrors.name ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Enter venue name"
                                            />
                                            {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                                        </div>

                                        {/* Address */}
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Address *
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-600 ${formErrors.address ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Enter venue address"
                                            />
                                            {formErrors.address && <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>}
                                        </div>

                                        {/* City */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                City *
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-600 ${formErrors.city ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Enter city"
                                            />
                                            {formErrors.city && <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>}
                                        </div>

                                        {/* State */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                State
                                            </label>
                                            <input
                                                type="text"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-600"
                                                placeholder="Enter state (optional)"
                                            />
                                        </div>

                                        {/* Country */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Country *
                                            </label>
                                            <input
                                                type="text"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-600 ${formErrors.country ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Enter country"
                                            />
                                            {formErrors.country && <p className="text-red-500 text-sm mt-1">{formErrors.country}</p>}
                                        </div>

                                        {/* ZIP Code */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                ZIP Code
                                            </label>
                                            <input
                                                type="text"
                                                name="zipCode"
                                                value={formData.zipCode}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-600"
                                                placeholder="Enter ZIP code (optional)"
                                            />
                                        </div>

                                        {/* Capacity */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Capacity *
                                            </label>
                                            <input
                                                type="number"
                                                name="capacity"
                                                value={formData.capacity}
                                                onChange={handleInputChange}
                                                min="1"
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-600 ${formErrors.capacity ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Maximum capacity"
                                            />
                                            {formErrors.capacity && <p className="text-red-500 text-sm mt-1">{formErrors.capacity}</p>}
                                        </div>

                                        {/* Contact Email */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Contact Email
                                            </label>
                                            <input
                                                type="email"
                                                name="contactEmail"
                                                value={formData.contactEmail}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-600 ${formErrors.contactEmail ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="venue@example.com"
                                            />
                                            {formErrors.contactEmail && <p className="text-red-500 text-sm mt-1">{formErrors.contactEmail}</p>}
                                        </div>

                                        {/* Contact Phone */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Contact Phone
                                            </label>
                                            <input
                                                type="tel"
                                                name="contactPhone"
                                                value={formData.contactPhone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-600"
                                                placeholder="+60 12-345 6789"
                                            />
                                        </div>

                                        {/* Website */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Website
                                            </label>
                                            <input
                                                type="url"
                                                name="website"
                                                value={formData.website}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-600"
                                                placeholder="https://venue-website.com"
                                            />
                                        </div>

                                        {/* Latitude */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Latitude
                                            </label>
                                            <input
                                                type="number"
                                                name="latitude"
                                                value={formData.latitude}
                                                onChange={handleInputChange}
                                                step="0.000001"
                                                min="-90"
                                                max="90"
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-600 ${formErrors.latitude ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="3.1390 (optional)"
                                            />
                                            {formErrors.latitude && <p className="text-red-500 text-sm mt-1">{formErrors.latitude}</p>}
                                            <p className="text-xs text-gray-500 mt-1">Optional: For map integration</p>
                                        </div>

                                        {/* Longitude */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Longitude
                                            </label>
                                            <input
                                                type="number"
                                                name="longitude"
                                                value={formData.longitude}
                                                onChange={handleInputChange}
                                                step="0.000001"
                                                min="-180"
                                                max="180"
                                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-600 ${formErrors.longitude ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="101.6869 (optional)"
                                            />
                                            {formErrors.longitude && <p className="text-red-500 text-sm mt-1">{formErrors.longitude}</p>}
                                            <p className="text-xs text-gray-500 mt-1">Optional: For map integration</p>
                                        </div>

                                        {/* Description */}
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Description
                                            </label>
                                            <textarea
                                                name="description"
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                rows={4}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-600"
                                                placeholder="Describe the venue, amenities, special features..."
                                            />
                                        </div>
                                    </div>

                                    {/* Form Actions */}
                                    <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                                        <button
                                            type="button"
                                            onClick={resetForm}
                                            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={formLoading}
                                            className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            {formLoading ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                    Creating...
                                                </>
                                            ) : (
                                                <>
                                                    <Save className="h-4 w-4 mr-2" />
                                                    Create Venue
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
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search venues..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <select
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="">All Cities</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Venues List */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    {loading ? (
                        <div className="flex items-center justify-center py-12">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                            <span className="ml-2 text-gray-600">Loading venues...</span>
                        </div>
                    ) : filteredVenues.length === 0 ? (
                        <div className="text-center py-12">
                            <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No venues found</h3>
                            <p className="text-gray-600">
                                {searchTerm || selectedCity ? 'Try adjusting your filters' : 'Get started by creating your first venue'}
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Venue
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Location
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Capacity
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Events
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredVenues.map((venue) => (
                                        <tr key={venue.venueId} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">{venue.name}</div>
                                                    {venue.description && (
                                                        <div className="text-sm text-gray-500 truncate max-w-xs">{venue.description}</div>
                                                    )}
                                                    {venue.contactEmail && (
                                                        <div className="text-xs text-blue-600">{venue.contactEmail}</div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-start text-sm text-gray-900">
                                                    <MapPin className="h-4 w-4 text-gray-400 mr-1 mt-0.5 flex-shrink-0" />
                                                    <div>
                                                        <div>{venue.address}</div>
                                                        <div className="text-gray-500">
                                                            {venue.city}
                                                            {venue.state && `, ${venue.state}`}
                                                        </div>
                                                        <div className="text-gray-500">
                                                            {venue.country}
                                                            {venue.zipCode && ` ${venue.zipCode}`}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center text-sm text-gray-900">
                                                    <Users className="h-4 w-4 text-gray-400 mr-1" />
                                                    {venue.capacity.toLocaleString()}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-900">
                                                    {venue.eventCount} events
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${venue.isActive
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                    }`}>
                                                    {venue.isActive ? 'Active' : 'Inactive'}
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