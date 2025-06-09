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
    pink: 'rgb(236, 72, 153)',
    teal: 'rgb(20, 184, 166)',
    indigo: 'rgb(99, 102, 241)',
    yellow: 'rgb(234, 179, 8)',
    slate: 'rgb(100, 116, 139)'
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

    // Enhanced theme application
    const applyTheme = useCallback((settings: ThemeSettings) => {
        if (typeof window === 'undefined') return;

        const root = document.documentElement;
        const body = document.body;
        let shouldBeDark = false;

        // Determine if dark mode should be active
        if (settings.theme === 'dark') {
            shouldBeDark = true;
        } else if (settings.theme === 'light') {
            shouldBeDark = false;
        } else {
            shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        // Apply dark/light mode
        if (shouldBeDark) {
            root.classList.add('dark');
            body.classList.add('dark');
        } else {
            root.classList.remove('dark');
            body.classList.remove('dark');
        }

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
            body.classList.add('compact');
        } else {
            root.classList.remove('compact');
            body.classList.remove('compact');
        }

        // Emit custom event for components to react to theme changes
        window.dispatchEvent(new CustomEvent('themeChanged', {
            detail: { ...settings, isDark: shouldBeDark }
        }));

    }, []);

    // Function to update theme settings
    const updateTheme = useCallback((newSettings: Partial<ThemeSettings>) => {
        setThemeSettings(prevSettings => {
            const updated = { ...prevSettings, ...newSettings };

            // Apply theme in next tick to avoid render-phase updates
            setTimeout(() => {
                applyTheme(updated);
            }, 0);

            // Save to localStorage
            try {
                localStorage.setItem('themeSettings', JSON.stringify(updated));
            } catch (error) {
                console.error('Error saving theme settings:', error);
            }

            // Emit event for other components in next tick
            setTimeout(() => {
                window.dispatchEvent(new CustomEvent('themeChange', { detail: updated }));
            }, 0);

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
        applyTheme, // Expose for manual calls if needed
        accentColors,
        getAccentColor: () => accentColors[themeSettings.accentColor] || accentColors.blue,
        isCompact: themeSettings.compactMode,
        getCurrentFontSize: () => themeSettings.fontSize
    };
};

// Helper hook for getting theme-aware classes
export const useThemeClasses = () => {
    const [isDark, setIsDark] = useState(false);
    const [isCompact, setIsCompact] = useState(false);
    const observerRef = useRef<MutationObserver | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const updateThemeState = () => {
            const currentIsDark = document.documentElement.classList.contains('dark');
            const currentIsCompact = document.documentElement.classList.contains('compact');

            // Use functional updates to avoid stale closures
            setIsDark(prev => prev !== currentIsDark ? currentIsDark : prev);
            setIsCompact(prev => prev !== currentIsCompact ? currentIsCompact : prev);
        };

        // Initial state update - defer to avoid render-phase updates
        setTimeout(updateThemeState, 0);

        // Observe class changes
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    // Defer state update to avoid render-phase conflicts
                    setTimeout(updateThemeState, 0);
                    break;
                }
            }
        });

        observerRef.current.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        // Listen for theme change events
        const handleThemeChange = () => {
            // Defer state update to avoid render-phase conflicts
            setTimeout(updateThemeState, 0);
        };

        window.addEventListener('themeChanged', handleThemeChange);

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            window.removeEventListener('themeChanged', handleThemeChange);
        };
    }, []);

    return {
        isDark,
        isCompact,
        // Base theme classes
        background: isDark ? 'bg-gray-900' : 'bg-gray-50',
        card: isDark ? 'bg-gray-800' : 'bg-white',
        text: isDark ? 'text-white' : 'text-gray-900',
        textMuted: isDark ? 'text-gray-400' : 'text-gray-600',
        border: isDark ? 'border-gray-700' : 'border-gray-200',
        hover: isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50',

        // Enhanced theme utility classes
        themeBg: 'theme-bg',
        themeCard: 'theme-card',
        themeFg: 'theme-fg',
        themeCardFg: 'theme-card-fg',
        themeMuted: 'theme-muted',
        themeMutedFg: 'theme-muted-fg',
        themeBorder: 'theme-border',
        themePrimary: 'theme-primary',
        themePrimaryFg: 'theme-primary-fg',

        // Responsive classes
        textSm: 'text-responsive-sm',
        textBase: 'text-responsive-base',
        textLg: 'text-responsive-lg',
        textXl: 'text-responsive-xl',
        text2Xl: 'text-responsive-2xl',
        text3Xl: 'text-responsive-3xl',

        // Compact classes
        compactCard: 'compact-card',
        compactButton: 'compact-button',
        compactInput: 'compact-input',
        compactGap: 'compact-gap',
        compactSpaceY: 'compact-space-y',
        compactSpaceX: 'compact-space-x',

        // Accent classes
        accentBg: 'accent-bg',
        accentText: 'accent-text',
        accentBorder: 'accent-border',
        accentHover: 'accent-hover',
        accentFocus: 'accent-focus',
        btnAccent: 'btn-accent',
        btnAccentOutline: 'btn-accent-outline'
    };
};