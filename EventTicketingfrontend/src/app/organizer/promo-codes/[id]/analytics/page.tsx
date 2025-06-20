/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState, useEffect } from 'react';
import { useThemeClasses } from '@/hooks/useTheme';
import { useI18n } from '@/components/providers/I18nProvider';
import { useAuth } from '@/hooks/useAuth';
import { useRouter, useParams } from 'next/navigation';
import { promoCodesApi, type PromoCode } from '@/lib/api';
import {
    ArrowLeft,
    TrendingUp,
    DollarSign,
    Users,
    Calendar,
    Eye,
    Download,
    RefreshCcw,
    AlertCircle,
    BarChart3,
    PieChart,
    Activity,
    Clock,
    Target,
    Percent,
    Tag,
    MapPin,
    Globe,
    CheckCircle,
    XCircle,
    Info,
    Loader2
} from 'lucide-react';

// Define analytics interfaces
interface PromoCodeAnalytics {
    promoCodeId: number;
    code: string;
    totalUsages: number;
    maxUsages: number;
    remainingUsages: number;
    totalDiscountGiven: number;
    averageDiscountAmount: number;
    totalOrderValue: number;
    conversionRate: number;
    usageByDay: Array<{
        date: string;
        usages: number;
        totalDiscount: number;
        totalOrderValue: number;
    }>;
    usageByEvent: Array<{
        eventId: number;
        eventTitle: string;
        usages: number;
        totalDiscount: number;
        totalOrderValue: number;
    }>;
}

interface PromoCodeUsage {
    promoCodeUsageId: number;
    promoCode: string;
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    eventTitle: string;
    discountAmount: number;
    orderSubtotal: number;
    usedAt: string;
}

const PromoCodeAnalyticsPage: React.FC = () => {
    const themeClasses = useThemeClasses();
    const { t } = useI18n();
    const { user, isOrganizer } = useAuth();
    const router = useRouter();
    const params = useParams();
    const promoCodeId = Number(params.id);

    // State management
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState('');
    const [promoCode, setPromoCode] = useState<PromoCode | null>(null);
    const [analytics, setAnalytics] = useState<PromoCodeAnalytics | null>(null);
    const [usageHistory, setUsageHistory] = useState<PromoCodeUsage[]>([]);
    const [activeTab, setActiveTab] = useState<'overview' | 'usage' | 'timeline'>('overview');

    // Load data on component mount
    useEffect(() => {
        if (user && isOrganizer) {
            loadData();
        } else if (user && !isOrganizer) {
            router.push('/');
        }
    }, [user, isOrganizer, router, promoCodeId]);

    const loadData = async () => {
        try {
            setLoading(true);
            setError('');

            // Load promo code, analytics, and usage history in parallel
            const [promoCodeData, analyticsData, usageData] = await Promise.all([
                promoCodesApi.getPromoCode(promoCodeId),
                promoCodesApi.getAnalytics(promoCodeId),
                promoCodesApi.getUsageHistory(promoCodeId)
            ]);

            setPromoCode(promoCodeData);
            setAnalytics(analyticsData);
            setUsageHistory(usageData);

        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to load analytics';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const handleRefresh = async () => {
        setRefreshing(true);
        await loadData();
        setRefreshing(false);
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const formatDateTime = (dateString: string) => {
        return new Date(dateString).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getUsagePercentage = () => {
        if (!analytics) return 0;
        return analytics.maxUsages > 0 ? (analytics.totalUsages / analytics.maxUsages) * 100 : 0;
    };

    const getStatusColor = () => {
        if (!promoCode) return 'gray';
        if (!promoCode.isActive) return 'red';
        if (new Date(promoCode.endDate) < new Date()) return 'yellow';
        if (analytics && analytics.totalUsages >= analytics.maxUsages) return 'red';
        return 'green';
    };

    const getStatusText = () => {
        if (!promoCode) return 'Unknown';
        if (!promoCode.isActive) return 'Inactive';
        if (new Date(promoCode.endDate) < new Date()) return 'Expired';
        if (analytics && analytics.totalUsages >= analytics.maxUsages) return 'Used Up';
        return 'Active';
    };

    // Loading states
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

    if (loading) {
        return (
            <div className={`min-h-screen ${themeClasses.themeBg} theme-transition`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex items-center justify-center py-12">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 accent-border mx-auto"></div>
                            <p className={`mt-4 ${themeClasses.themeMutedFg}`}>Loading analytics...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !promoCode || !analytics) {
        return (
            <div className={`min-h-screen ${themeClasses.themeBg} theme-transition`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center py-12">
                        <AlertCircle className={`h-12 w-12 ${themeClasses.themeMutedFg} mx-auto mb-4`} />
                        <h3 className={`text-lg font-medium ${themeClasses.themeFg} mb-2`}>
                            {error || 'Analytics not found'}
                        </h3>
                        <p className={`${themeClasses.themeMutedFg} mb-6`}>
                            {t('unableToLoadAnalytics')})
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => router.push('/organizer/promo-codes')}
                                className="btn-accent"
                            >
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                {t('backToPromoCodes')})
                            </button>
                            <button
                                onClick={loadData}
                                className={`px-4 py-2 border ${themeClasses.themeBorder} ${themeClasses.themeFg} rounded-lg hover:${themeClasses.themeMuted} transition-colors`}
                            >
                                <RefreshCcw className="h-4 w-4 mr-2" />
                                {t('retry')})
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const statusColor = getStatusColor();
    const statusText = getStatusText();
    const usagePercentage = getUsagePercentage();

    return (
        <div className={`min-h-screen ${themeClasses.themeBg} theme-transition`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => router.push('/organizer/promo-codes')}
                                className={`p-2 rounded-lg ${themeClasses.hover} transition-colors`}
                            >
                                <ArrowLeft className={`h-5 w-5 ${themeClasses.themeMutedFg}`} />
                            </button>
                            <div>
                                <h1 className={`text-3xl font-bold ${themeClasses.themeFg}`}>
                                    {t('promoCodeAnalytics')}
                                </h1>
                                <p className={`${themeClasses.themeMutedFg} mt-1`}>
                                    {t('detailedPerformanceMetrics')} {promoCode.code}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <button
                                onClick={handleRefresh}
                                disabled={refreshing}
                                className={`px-4 py-2 border ${themeClasses.themeBorder} ${themeClasses.themeFg} rounded-lg hover:${themeClasses.themeMuted} transition-colors flex items-center`}
                            >
                                <RefreshCcw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                                {t('refresh')}
                            </button>
                            <button
                                onClick={() => router.push(`/organizer/promo-codes/${promoCodeId}/edit`)}
                                className="btn-accent"
                            >
                                {t('editPromoCode')}
                            </button>
                        </div>
                    </div>

                    {/* Promo Code Overview Card */}
                    <div className={`${themeClasses.themeCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} p-6 theme-transition`}>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {/* Basic Info */}
                            <div className="md:col-span-2">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className={`p-3 rounded-lg ${promoCode.type === 'Percentage' ? 'bg-blue-100 dark:bg-blue-900/20' : 'bg-green-100 dark:bg-green-900/20'
                                        }`}>
                                        {promoCode.type === 'Percentage' ? (
                                            <Percent className={`h-6 w-6 ${promoCode.type === 'Percentage' ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'
                                                }`} />
                                        ) : (
                                            <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                                        )}
                                    </div>
                                    <div>
                                        <h2 className={`text-xl font-bold ${themeClasses.themeFg} font-mono`}>
                                            {promoCode.code}
                                        </h2>
                                        <p className={`text-sm ${themeClasses.themeMutedFg}`}>
                                            {promoCode.formattedValue}
                                        </p>
                                    </div>
                                </div>
                                {promoCode.description && (
                                    <p className={`${themeClasses.themeMutedFg} mb-4`}>
                                        {promoCode.description}
                                    </p>
                                )}
                                <div className="flex items-center space-x-4 text-sm">
                                    <div className="flex items-center space-x-1">
                                        <div className={`w-2 h-2 rounded-full ${statusColor === 'green' ? 'bg-green-500' :
                                            statusColor === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                                            }`}></div>
                                        <span className={themeClasses.themeMutedFg}>{t('statustext')}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Calendar className="h-3 w-3" />
                                        <span className={themeClasses.themeMutedFg}>
                                            {formatDate(promoCode.startDate)} - {formatDate(promoCode.endDate)}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        {promoCode.scope === 'EventSpecific' ? (
                                            <>
                                                <MapPin className="h-3 w-3" />
                                                <span className={themeClasses.themeMutedFg}>
                                                    {promoCode.eventTitle || t('eventSpecific')}
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <Globe className="h-3 w-3" />
                                                <span className={themeClasses.themeMutedFg}>{t('organizerWide')}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Usage Progress */}
                            <div className="text-center">
                                <div className="relative w-20 h-20 mx-auto mb-3">
                                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                                        <path
                                            className="text-gray-200 dark:text-gray-700"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            fill="none"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <path
                                            className={`${usagePercentage >= 90 ? 'text-red-500' :
                                                    usagePercentage >= 70 ? 'text-yellow-500' : 'text-blue-500'
                                                }`}
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            fill="none"
                                            strokeDasharray={`${usagePercentage}, 100`}
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className={`text-lg font-bold ${themeClasses.themeFg}`}>
                                            {Math.round(usagePercentage)}%
                                        </span>
                                    </div>
                                </div>
                                <p className={`text-sm font-medium ${themeClasses.themeFg}`}>{t('usageRate')}</p>
                                <p className={`text-xs ${themeClasses.themeMutedFg}`}>
                                    {analytics.totalUsages} / {analytics.maxUsages} {t('used')}
                                </p>
                            </div>

                            {/* Key Metrics */}
                            <div className="space-y-3">
                                <div>
                                    <p className={`text-sm ${themeClasses.themeMutedFg}`}>{t('totalDiscountsGiven')}</p>
                                    <p className={`text-lg font-bold ${themeClasses.themeFg}`}>
                                        {formatCurrency(analytics.totalDiscountGiven)}
                                    </p>
                                </div>
                                <div>
                                    <p className={`text-sm ${themeClasses.themeMutedFg}`}>{t('totalOrderValue')}</p>
                                    <p className={`text-lg font-bold ${themeClasses.themeFg}`}>
                                        {formatCurrency(analytics.totalOrderValue)}
                                    </p>
                                </div>
                                <div>
                                    <p className={`text-sm ${themeClasses.themeMutedFg}`}>{t('averageDiscount')}</p>
                                    <p className={`text-lg font-bold ${themeClasses.themeFg}`}>
                                        {formatCurrency(analytics.averageDiscountAmount)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mb-6">
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <nav className="-mb-px flex space-x-8">
                            {[
                                { id: 'overview', label: t('overview'), icon: BarChart3 },
                                { id: 'usage', label: t('usagehistory'), icon: Activity },
                                { id: 'timeline', label: t('timeline'), icon: Clock }
                            ].map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as any)}
                                        className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${activeTab === tab.id
                                                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                                                : `border-transparent ${themeClasses.themeMutedFg} hover:${themeClasses.themeFg} hover:border-gray-300 dark:hover:border-gray-600`
                                            }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        <span>{tab.label}</span>
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                    <div className="space-y-6">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className={`${themeClasses.themeCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} p-6 theme-transition`}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className={`text-sm font-medium ${themeClasses.themeMutedFg}`}>{t('totalUses')}</p>
                                        <p className={`text-2xl font-bold ${themeClasses.themeFg}`}>
                                            {analytics.totalUsages}
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                                        <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <p className={`text-xs ${themeClasses.themeMutedFg} mt-2`}>
                                    {analytics.remainingUsages} {t('remaining')}
                                </p>
                            </div>

                            <div className={`${themeClasses.themeCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} p-6 theme-transition`}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className={`text-sm font-medium ${themeClasses.themeMutedFg}`}>{t('conversionRate')}</p>
                                        <p className={`text-2xl font-bold ${themeClasses.themeFg}`}>
                                            {analytics.conversionRate.toFixed(1)}%
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                                        <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                                    </div>
                                </div>
                                <p className={`text-xs ${themeClasses.themeMutedFg} mt-2`}>
                                    {t('maximumusage')}
                                </p>
                            </div>

                            <div className={`${themeClasses.themeCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} p-6 theme-transition`}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className={`text-sm font-medium ${themeClasses.themeMutedFg}`}>{t('totalSavings')}</p>
                                        <p className={`text-2xl font-bold ${themeClasses.themeFg}`}>
                                            {formatCurrency(analytics.totalDiscountGiven)}
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                                        <DollarSign className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                </div>
                                <p className={`text-xs ${themeClasses.themeMutedFg} mt-2`}>
                                    {t('customersavings')}
                                </p>
                            </div>

                            <div className={`${themeClasses.themeCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} p-6 theme-transition`}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className={`text-sm font-medium ${themeClasses.themeMutedFg}`}>{t('orderValue')}</p>
                                        <p className={`text-2xl font-bold ${themeClasses.themeFg}`}>
                                            {formatCurrency(analytics.totalOrderValue)}
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                                        <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                    </div>
                                </div>
                                <p className={`text-xs ${themeClasses.themeMutedFg} mt-2`}>
                                    {t('totalrevenueimpact')}
                                </p>
                            </div>
                        </div>

                        {/* Usage by Event */}
                        {analytics.usageByEvent.length > 0 && (
                            <div className={`${themeClasses.themeCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} p-6 theme-transition`}>
                                <h3 className={`text-lg font-semibold ${themeClasses.themeFg} mb-4 flex items-center`}>
                                    <PieChart className="h-5 w-5 mr-2 text-indigo-500" />
                                    Usage by Event
                                </h3>
                                <div className="space-y-3">
                                    {analytics.usageByEvent.map((event) => (
                                        <div key={event.eventId} className="flex items-center justify-between">
                                            <div className="flex-1">
                                                <p className={`font-medium ${themeClasses.themeFg}`}>
                                                    {event.eventTitle}
                                                </p>
                                                <p className={`text-sm ${themeClasses.themeMutedFg}`}>
                                                    {event.usages} uses • {formatCurrency(event.totalDiscount)} discount
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className={`font-medium ${themeClasses.themeFg}`}>
                                                    {formatCurrency(event.totalOrderValue)}
                                                </p>
                                                <p className={`text-sm ${themeClasses.themeMutedFg}`}>
                                                    {((event.usages / analytics.totalUsages) * 100).toFixed(1)}%
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'usage' && (
                    <div className="space-y-6">
                        {/* Usage History Table */}
                        <div className={`${themeClasses.themeCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} overflow-hidden theme-transition`}>
                            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                                <h3 className={`text-lg font-semibold ${themeClasses.themeFg} flex items-center`}>
                                    <Activity className="h-5 w-5 mr-2 text-blue-500" />
                                    {t('usagehistory')} ({usageHistory.length})
                                </h3>
                            </div>

                            {usageHistory.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className={`${themeClasses.themeMuted}`}>
                                            <tr>
                                                <th className={`px-6 py-3 text-left text-xs font-medium ${themeClasses.themeMutedFg} uppercase tracking-wider`}>
                                                    {t('customer')}
                                                </th>
                                                <th className={`px-6 py-3 text-left text-xs font-medium ${themeClasses.themeMutedFg} uppercase tracking-wider`}>
                                                    {t('event')}
                                                </th>
                                                <th className={`px-6 py-3 text-left text-xs font-medium ${themeClasses.themeMutedFg} uppercase tracking-wider`}>
                                                    {t('order')}
                                                </th>
                                                <th className={`px-6 py-3 text-left text-xs font-medium ${themeClasses.themeMutedFg} uppercase tracking-wider`}>
                                                    {t('discount')}
                                                </th>
                                                <th className={`px-6 py-3 text-left text-xs font-medium ${themeClasses.themeMutedFg} uppercase tracking-wider`}>
                                                    {t('subtotal')}
                                                </th>
                                                <th className={`px-6 py-3 text-left text-xs font-medium ${themeClasses.themeMutedFg} uppercase tracking-wider`}>
                                                    {t('date')}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className={`${themeClasses.themeCard} divide-y divide-gray-200 dark:divide-gray-700`}>
                                            {usageHistory.map((usage) => (
                                                <tr key={usage.promoCodeUsageId} className={`hover:${themeClasses.themeMuted} transition-colors`}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div>
                                                            <div className={`text-sm font-medium ${themeClasses.themeFg}`}>
                                                                {usage.customerName}
                                                            </div>
                                                            <div className={`text-sm ${themeClasses.themeMutedFg}`}>
                                                                {usage.customerEmail}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${themeClasses.themeFg}`}>
                                                        {usage.eventTitle}
                                                    </td>
                                                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-mono ${themeClasses.themeFg}`}>
                                                        {usage.orderNumber}
                                                    </td>
                                                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${themeClasses.themeFg}`}>
                                                        {formatCurrency(usage.orderSubtotal)}
                                                    </td>
                                                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${themeClasses.themeMutedFg}`}>
                                                        {formatDateTime(usage.usedAt)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="px-6 py-12 text-center">
                                    <Users className={`h-12 w-12 ${themeClasses.themeMutedFg} mx-auto mb-4`} />
                                        <h3 className={`text-lg font-medium ${themeClasses.themeFg} mb-2`}>{t('nousageyet')}</h3>
                                    <p className={`${themeClasses.themeMutedFg}`}>
                                            {t('thispromohasntbeenused')}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'timeline' && (
                    <div className="space-y-6">
                        {/* Daily Usage Chart */}
                        {analytics.usageByDay.length > 0 ? (
                            <div className={`${themeClasses.themeCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} p-6 theme-transition`}>
                                <h3 className={`text-lg font-semibold ${themeClasses.themeFg} mb-4 flex items-center`}>
                                    <Clock className="h-5 w-5 mr-2 text-green-500" />
                                    Daily Usage Timeline
                                </h3>

                                <div className="space-y-4">
                                    {analytics.usageByDay.map((day, index) => {
                                        const maxUsages = Math.max(...analytics.usageByDay.map(d => d.usages));
                                        const widthPercentage = maxUsages > 0 ? (day.usages / maxUsages) * 100 : 0;

                                        return (
                                            <div key={day.date} className="flex items-center space-x-4">
                                                <div className="w-20 text-sm text-right">
                                                    <span className={themeClasses.themeMutedFg}>
                                                        {formatDate(day.date)}
                                                    </span>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-4 relative">
                                                            <div
                                                                className="bg-blue-500 h-4 rounded-full transition-all duration-500 ease-out"
                                                                style={{ width: `${widthPercentage}%` }}
                                                            ></div>
                                                            <div className="absolute inset-0 flex items-center justify-start pl-2">
                                                                <span className="text-xs font-medium text-white">
                                                                    {day.usages > 0 ? day.usages : ''}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="w-24 text-right">
                                                            <span className={`text-sm font-medium ${themeClasses.themeFg}`}>
                                                                {day.usages} uses
                                                            </span>
                                                        </div>
                                                        <div className="w-20 text-right">
                                                            <span className={`text-sm ${themeClasses.themeMutedFg}`}>
                                                                {formatCurrency(day.totalDiscount)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Timeline Summary */}
                                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                        <div>
                                            <p className={`text-sm ${themeClasses.themeMutedFg}`}>{t('peakDay')}</p>
                                            <p className={`font-medium ${themeClasses.themeFg}`}>
                                                {analytics.usageByDay.reduce((prev, current) =>
                                                    (prev.usages > current.usages) ? prev : current
                                                ).usages} uses
                                            </p>
                                        </div>
                                        <div>
                                            <p className={`text-sm ${themeClasses.themeMutedFg}`}>{t('averageDaily')}</p>
                                            <p className={`font-medium ${themeClasses.themeFg}`}>
                                                {(analytics.totalUsages / analytics.usageByDay.length).toFixed(1)} uses
                                            </p>
                                        </div>
                                        <div>
                                            <p className={`text-sm ${themeClasses.themeMutedFg}`}>{t('activeDays')}</p>
                                            <p className={`font-medium ${themeClasses.themeFg}`}>
                                                {analytics.usageByDay.filter(d => d.usages > 0).length} / {analytics.usageByDay.length}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className={`${themeClasses.themeCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} p-12 text-center theme-transition`}>
                                <Clock className={`h-12 w-12 ${themeClasses.themeMutedFg} mx-auto mb-4`} />
                                    <h3 className={`text-lg font-medium ${themeClasses.themeFg} mb-2`}>{t('notimelinedata')}</h3>
                                <p className={`${themeClasses.themeMutedFg}`}>
                                        {t('usageTimelineMessage')}
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {/* Additional Info Panel */}
                <div className={`${themeClasses.themeCard} rounded-lg shadow-sm border ${themeClasses.themeBorder} p-6 theme-transition`}>
                    <div className="flex items-start">
                        <Info className={`h-5 w-5 ${themeClasses.themeMutedFg} mr-2 mt-0.5 flex-shrink-0`} />
                        <div className={`text-sm ${themeClasses.themeMutedFg}`}>
                            <p className="font-medium mb-2">{t('analyticsInformation')}:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="font-medium text-blue-600 dark:text-blue-400 mb-1">{t('metricsIncluded')}</p>
                                    <ul className="list-disc list-inside space-y-1 text-xs">
                                        <li>{t('realTimeUsageTracking')}</li>
                                        <li>{t('revenueImpactAnalysis')}</li>
                                        <li>{t('customerBehaviorInsights')}</li>
                                        <li>{t('eventSpecificPerformance')}</li>
                                        
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-medium text-green-600 dark:text-green-400 mb-1">{t('dataUpdates')}</p>
                                    <ul className="list-disc list-inside space-y-1 text-xs">
                                        <li>{t('analyticsUpdateRealTime')}</li>
                                        <li>{t('usageHistoryShowsAll')}</li>
                                        <li>{t('timelineDataAggregated')}</li>
                                        <li>{t('conversionRatesCalculated')}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-xs">
                                    <strong>Note:</strong> {t('allMonetaryValuesUSD')}
                                    {t('analyticsDataUpdatedImmediately')}
                                    {t('historicalDataPreserved')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoCodeAnalyticsPage;