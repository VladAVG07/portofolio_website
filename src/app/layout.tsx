import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Your Name - Portfolio',
	description:
		'Full-stack developer passionate about creating amazing web experiences',
	keywords: ['developer', 'portfolio', 'web development', 'react', 'next.js'],
	authors: [{ name: 'Your Name' }],
	creator: 'Your Name',
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
