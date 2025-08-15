'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
	children,
	defaultTheme = 'dark',
	enableSystem = true,
}: {
	children: React.ReactNode;
	defaultTheme?: Theme;
	attribute?: string;
	enableSystem?: boolean;
}) {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	useEffect(() => {
		// Get theme from localStorage or system preference
		const savedTheme = localStorage.getItem('theme') as Theme;
		const systemTheme =
			enableSystem &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';
		const initialTheme = savedTheme || systemTheme || defaultTheme;

		setTheme(initialTheme);
	}, [defaultTheme, enableSystem]);

	useEffect(() => {
		// Apply theme to document
		const root = document.documentElement;
		root.classList.remove('light', 'dark');
		root.classList.add(theme);

		// Save to localStorage
		localStorage.setItem('theme', theme);
	}, [theme]);

	const value = {
		theme,
		setTheme: (newTheme: Theme) => {
			setTheme(newTheme);
		},
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
