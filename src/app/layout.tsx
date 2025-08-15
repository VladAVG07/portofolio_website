import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Vlad Apostol - Portfolio',
	description:
		'Developer passionate about creating amazing software solutions',
	keywords: [
		'developer',
		'portfolio',
		'web development',
		'react',
		'next.js',
		'software',
		'mobile',
		'desktopd',
	],
	authors: [{ name: 'Vlad Apostol' }],
	creator: 'Vlad Apostol',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='scroll-smooth' suppressHydrationWarning>
			<body
				className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
				<ThemeProvider defaultTheme='dark' enableSystem={true}>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
