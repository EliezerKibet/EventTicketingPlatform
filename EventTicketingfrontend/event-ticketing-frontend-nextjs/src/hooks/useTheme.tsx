import { useState, useEffect, useCallback, useRef } from 'react';

interface ThemeSettings {
    theme: 'light' | 'dark' | 'auto';
    accentColor: string;
    fontSize: 'small' | 'medium' | 'large';
    compactMode: boolean;
}

const accentColors: { [key: string]: string } = {
    blue: 'rgb(59, 130, 246)',
    purple: 'rgb(168, 85, 247)',
    green: 'rgb(34, 197, 94)',
    red: 'rgb(239, 68, 68)',
    orange: 'rgb(249, 115, 22)',
    pink: 'rgb(236, 72, 153)'
};

const defaultSettings: ThemeSettings = {
    theme: 'light',
    accentColor: 'blue',
    fontSize: 'medium',
    compactMode: false
};

export const useTheme = () => {
    const [themeSettings, setThemeSettings] = useState<ThemeSettings>(defaultSettings);
    const [isDark, setIsDark] = useState(false);
    const isInitialized = useRef(false);

    // Memoized function to apply theme to DOM
    const applyTheme = useCallback((settings: ThemeSettings) => {
        if (typeof window === 'undefined') return;

        const root = document.documentElement;
        let shouldBeDark = false;

        // Determine if dark mode should be active
        if (settings.theme === 'dark') {
            shouldBeDark = true;
        } else if (settings.theme === 'light') {
            shouldBeDark = false;
        } else {
            // Auto mode - check system preference
            shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        // Apply dark/light mode
        if (shouldBeDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        // Only update isDark state if it actually changed
        setIsDark(prevIsDark => {
            if (prevIsDark !== shouldBeDark) {
                return shouldBeDark;
            }
            return prevIsDark;
        });

        // Apply accent color
        root.style.setProperty('--color-primary', accentColors[settings.accentColor] || accentColors.blue);

        // Apply font size
        root.classList.remove('text-size-small', 'text-size-medium', 'text-size-large');
        root.classList.add(`text-size-${settings.fontSize}`);

        // Apply compact mode
        if (settings.compactMode) {
            root.classList.add('compact');
        } else {
            root.classList.remove('compact');
        }
    }, []); // No dependencies since we only use the passed settings

    // Function to update theme settings
    const updateTheme = useCallback((newSettings: Partial<ThemeSettings>) => {
        setThemeSettings(prevSettings => {
            const updated = { ...prevSettings, ...newSettings };

            // Apply theme immediately
            applyTheme(updated);

            // Save to localStorage
            try {
                localStorage.setItem('themeSettings', JSON.stringify(updated));
            } catch (error) {
                console.error('Error saving theme settings:', error);
            }

            // Emit event for other components
            window.dispatchEvent(new CustomEvent('themeChange', { detail: updated }));

            return updated;
        });
    }, [applyTheme]);

    // Initialize theme on first load
    useEffect(() => {
        if (isInitialized.current) return;
        isInitialized.current = true;

        let initialSettings = defaultSettings;

        // Load from localStorage
        try {
            const saved = localStorage.getItem('themeSettings');
            if (saved) {
                const parsed = JSON.parse(saved);
                initialSettings = { ...defaultSettings, ...parsed };
            }
        } catch (error) {
            console.error('Error loading theme settings:', error);
        }

        // Set state and apply theme
        setThemeSettings(initialSettings);
        applyTheme(initialSettings);
    }, []); // Empty dependency array - only run once

    // Listen for system theme changes (only in auto mode)
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = () => {
            // Only react to system changes if in auto mode
            if (themeSettings.theme === 'auto') {
                applyTheme(themeSettings);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [themeSettings.theme, applyTheme]); // Only depend on theme mode, not all settings

    // Public function to manually initialize theme (for compatibility)
    const initializeTheme = useCallback(() => {
        // This is now mostly handled by the useEffect, but keeping for compatibility
        if (typeof window !== 'undefined') {
            const currentSettings = themeSettings;
            applyTheme(currentSettings);
        }
    }, [themeSettings, applyTheme]);

    return {
        ...themeSettings,
        isDark,
        updateTheme,
        initializeTheme, // Keep for compatibility with existing code
        applyTheme // Expose for manual calls if needed
    };
};

// Helper hook for getting theme-aware classes
export const useThemeClasses = () => {
    const [isDark, setIsDark] = useState(false);
    const observerRef = useRef<MutationObserver | null>(null);
    const updateTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const updateDarkMode = () => {
            const currentIsDark = document.documentElement.classList.contains('dark');

            // Clear any pending update
            if (updateTimeoutRef.current) {
                clearTimeout(updateTimeoutRef.current);
            }

            // Defer the state update to avoid React warning
            updateTimeoutRef.current = setTimeout(() => {
                setIsDark(prevIsDark => {
                    // Only update if the value actually changed
                    if (prevIsDark !== currentIsDark) {
                        return currentIsDark;
                    }
                    return prevIsDark;
                });
            }, 0);
        };

        // Initial check
        updateDarkMode();

        // Clean up previous observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        // Create new observer
        observerRef.current = new MutationObserver((mutations) => {
            // Only update if class attribute actually changed
            for (const mutation of mutations) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    updateDarkMode();
                    break; // Only need to update once
                }
            }
        });

        observerRef.current.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        // Listen for custom theme change events
        const handleThemeChange = () => updateDarkMode();
        window.addEventListener('themeChange', handleThemeChange);

        return () => {
            // Clean up timeout
            if (updateTimeoutRef.current) {
                clearTimeout(updateTimeoutRef.current);
            }

            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            window.removeEventListener('themeChange', handleThemeChange);
        };
    }, []); // Empty dependency array - set up once

    // Return theme-aware classes
    return {
        isDark,
        background: isDark ? 'bg-gray-900' : 'bg-gray-50',
        card: isDark ? 'bg-gray-800' : 'bg-white',
        text: isDark ? 'text-white' : 'text-gray-900',
        textMuted: isDark ? 'text-gray-400' : 'text-gray-600',
        border: isDark ? 'border-gray-700' : 'border-gray-200',
        hover: isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50',
        // Theme utility classes
        themeBg: 'theme-bg',
        themeCard: 'theme-card',
        themeFg: 'theme-fg',
        themeCardFg: 'theme-card-fg',
        themeMuted: 'theme-muted',
        themeMutedFg: 'theme-muted-fg',
        themeBorder: 'theme-border',
        themePrimary: 'theme-primary',
        themePrimaryFg: 'theme-primary-fg'
    };
};