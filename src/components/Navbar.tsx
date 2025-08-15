'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// Prevent hydration mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	const navItems = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Contact', href: '#contact' },
	];

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setIsMenuOpen(false);
	};

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<nav className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					{/* Logo */}
					<div className='flex-shrink-0'>
						<h1 className='text-xl font-bold text-gray-900 dark:text-white'>
							Vlad Apostol
						</h1>
					</div>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center ml-8 space-x-8'>
						{navItems.map((item) => (
							<button
								key={item.name}
								onClick={() => scrollToSection(item.href)}
								className='text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200'>
								{item.name}
							</button>
						))}
					</div>

					{/* Theme Toggle and Mobile menu button */}
					<div className='flex items-center space-x-4'>
						{/* Theme Toggle Button */}
						<button
							onClick={toggleTheme}
							className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900 hover:text-green-600 dark:hover:text-green-400 transition-all duration-200'>
							{mounted && theme === 'dark' ? (
								<svg
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 20 20'>
									<path
										fillRule='evenodd'
										d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
										clipRule='evenodd'
									/>
								</svg>
							) : (
								<svg
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 20 20'>
									<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
								</svg>
							)}
						</button>

						{/* Mobile menu button */}
						<div className='md:hidden'>
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className='text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 focus:outline-none focus:text-green-600 dark:focus:text-green-400'>
								<svg
									className='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									{isMenuOpen ? (
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M6 18L18 6M6 6l12 12'
										/>
									) : (
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M4 6h16M4 12h16M4 18h16'
										/>
									)}
								</svg>
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className='md:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700'>
							{navItems.map((item) => (
								<button
									key={item.name}
									onClick={() => scrollToSection(item.href)}
									className='text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200'>
									{item.name}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
