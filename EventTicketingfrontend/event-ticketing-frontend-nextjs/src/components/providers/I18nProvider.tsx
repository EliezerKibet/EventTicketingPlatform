/* eslint-disable @typescript-eslint/no-explicit-any */
// components/providers/I18nProvider.tsx
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useI18n, TranslationKeys } from '@/hooks/useSafeI18n';

interface I18nContextType {
    currentLanguage: string;
    currentLangData: any;
    isRTL: boolean;
    t: (key: keyof TranslationKeys, params?: Record<string, any>) => string;
    formatCurrency: (amount: number, currency?: string) => string;
    formatDate: (date: Date, format?: string) => string;
    formatTime: (date: Date, format?: '12h' | '24h') => string;
    changeLanguage: (languageCode: string) => void;
    supportedLanguages: any[];
    availableLanguages: any[];
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18nContext = () => {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error('useI18nContext must be used within an I18nProvider');
    }
    return context;
};

interface I18nProviderProps {
    children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
    const i18nData = useI18n();

    // Type-safe context value that matches the interface
    const contextValue: I18nContextType = {
        currentLanguage: i18nData.currentLanguage,
        currentLangData: i18nData.currentLangData,
        isRTL: i18nData.isRTL,
        t: i18nData.t,
        formatCurrency: i18nData.formatCurrency,
        formatDate: i18nData.formatDate,
        formatTime: i18nData.formatTime,
        changeLanguage: i18nData.changeLanguage,
        supportedLanguages: i18nData.supportedLanguages,
        availableLanguages: i18nData.availableLanguages
    };

    return (
        <I18nContext.Provider value={contextValue}>
            {children}
        </I18nContext.Provider>
    );
};