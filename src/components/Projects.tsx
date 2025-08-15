'use client';

import { useState } from 'react';

export default function Projects() {
	const [activeFilter, setActiveFilter] = useState('all');

	const projects = [
		{
			id: 1,
			title: 'Restaurant Mobile',
			description:
				'Cross-platform food delivery app using React Native and Expo.',
			image: '/api/placeholder/400/250',
			category: 'frontend',
			technologies: ['React Native', 'JavaScript', 'Axios', 'Expo'],
			liveUrl: '#',
			githubUrl: 'https://github.com/VladAVG07/RestaurantMobile',
			featured: true,
		},
		{
			id: 2,
			title: 'Supply Chain Management App',
			description:
				'Developed a full-stack Django application to streamline supply chain operations',
			image: '/api/placeholder/400/250',
			category: 'fullstack',
			technologies: ['Django', 'Python', 'Kafka', 'Postgres'],
			liveUrl: '#',
			githubUrl: 'https://github.com/VladAVG07/SupplyChainManagement',
			featured: true,
		},
		{
			id: 3,
			title: 'Transport Company Management App',
			description:
				'Built a desktop application for trucking company operations using Java',
			image: '/api/placeholder/400/250',
			category: 'fullstack',
			technologies: [
				'Java',
				'Swing',
				'Derby',
				'Observer, MVC, Service Repository',
				'Jasper Reports',
			],
			liveUrl: '#',
			githubUrl: 'https://github.com/McFan66/programarisoferi',
			featured: false,
		},
		{
			id: 4,
			title: 'ARP Spoofer',
			description:
				'This Python project performs ARP spoofing to intercept traffic between a target server and router. It also includes a packet sniffer that monitors TCP port 80 traffic',
			image: '/api/placeholder/400/250',
			category: 'fullstack',
			technologies: ['Python', 'Sockets', 'Docker', 'Networking'],
			liveUrl: '#',
			githubUrl: 'https://github.com/VladAVG07/ARP_Spoofer',
			featured: false,
		},
		{
			id: 5,
			title: 'This Website',
			description:
				'A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.',
			image: '/api/placeholder/400/250',
			category: 'frontend',
			technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
			liveUrl: '#',
			githubUrl: 'https://github.com/VladAVG07/PortofolioWebsite',
			featured: false,
		},
	];

	const filters = [
		{ id: 'all', name: 'All Projects' },
		{ id: 'frontend', name: 'Frontend' },
		{ id: 'backend', name: 'Backend' },
		{ id: 'fullstack', name: 'Mixed' },
	];

	const filteredProjects =
		activeFilter === 'all'
			? projects
			: projects.filter((project) => project.category === activeFilter);

	return (
		<section id='projects' className='py-20 bg-white dark:bg-gray-800'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
						My Projects
					</h2>
					<div className='w-24 h-1 bg-green-600 mx-auto'></div>
				</div>

				{/* Filter Buttons */}
				<div className='flex flex-wrap justify-center gap-4 mb-12'>
					{filters.map((filter) => (
						<button
							key={filter.id}
							onClick={() => setActiveFilter(filter.id)}
							className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
								activeFilter === filter.id
									? 'bg-green-600 text-white shadow-lg'
									: 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-600'
							}`}>
							{filter.name}
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{filteredProjects.map((project) => (
						<div
							key={project.id}
							className='bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group'>
							{/* Project Image */}
							<div className='relative h-48 bg-gradient-to-br from-green-400 to-emerald-600 overflow-hidden'>
								<div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300'></div>
								<div className='absolute inset-0 flex items-center justify-center'>
									<span className='text-6xl text-white opacity-80'>
										📱
									</span>
								</div>
								{project.featured && (
									<div className='absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
										Featured
									</div>
								)}
							</div>

							{/* Project Content */}
							<div className='p-6'>
								<h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
									{project.title}
								</h3>
								<p className='text-gray-600 dark:text-gray-300 mb-4 leading-relaxed'>
									{project.description}
								</p>

								{/* Technologies */}
								<div className='flex flex-wrap gap-2 mb-4'>
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className='bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-medium'>
											{tech}
										</span>
									))}
								</div>

								{/* Project Links */}
								<div className='flex gap-3'>
									<a
										href={project.githubUrl}
										className='flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300'>
										GitHub
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Call to Action */}
				<div className='text-center mt-16'>
					<p className='text-gray-600 dark:text-gray-300 mb-6'>
						Want to see more of my work?
					</p>
					<a
						href='https://github.com/VladAVG07'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105'>
						<svg
							className='w-5 h-5'
							fill='currentColor'
							viewBox='0 0 24 24'>
							<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
						</svg>
						View on GitHub
					</a>
				</div>
			</div>
		</section>
	);
}
