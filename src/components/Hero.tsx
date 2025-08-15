'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const scrollToContact = () => {
		const element = document.querySelector('#contact');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section
			id='home'
			className='min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
				<div
					className={`transition-all duration-1000 ${
						isVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}>
					{/* Greeting */}
					<p className='text-3xl text-green-600 dark:text-green-400 font-medium mb-4 animate-pulse'>
						👋 Hello, I'm
					</p>

					{/* Name */}
					<h1 className='text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6'>
						Vlad Apostol
					</h1>

					{/* Title */}
					<h2 className='text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8'>
						Computer Engineering Student and Software Engineer
					</h2>

					{/* Description */}
					<p className='text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed'>
						I am a passionate computer engineering student with a
						strong interest in software development. I am currently
						pursuing a degree in computer engineering at the
						University of Bucharest and I am also a software
						engineer developing applications and internal tools for
						different clients.
					</p>

					{/* CTA Buttons */}
					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
						<button
							onClick={scrollToContact}
							className='bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
							Get In Touch
						</button>
						<button
							onClick={() =>
								document
									.querySelector('#projects')
									?.scrollIntoView({ behavior: 'smooth' })
							}
							className='border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105'>
							View My Work
						</button>
					</div>

					{/* Tech Stack Preview */}
					{/* <div className='mt-16'>
						<p className='text-gray-500 dark:text-gray-400 mb-6'>
							Technologies I work with:
						</p>
						<div className='flex flex-wrap justify-center gap-4'>
							{[
								'React',
								'Next.js',
								'TypeScript',
								'Tailwind CSS',
								'Node.js',
								'Python',
							].map((tech) => (
								<span
									key={tech}
									className='bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-300'>
									{tech}
								</span>
							))}
						</div>
					</div> */}
				</div>

				{/* Scroll Indicator */}
				<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
					<svg
						className='w-6 h-6 text-gray-400'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M19 14l-7 7m0 0l-7-7m7 7V3'
						/>
					</svg>
				</div>
			</div>
		</section>
	);
}
