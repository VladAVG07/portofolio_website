'use client';

import { useState } from 'react';

export default function Skills() {
	const [activeCategory, setActiveCategory] = useState('backend');

	const skills = {
		backend: [
			{ name: 'Java', level: 85, color: 'bg-green-500' },
			{ name: 'Python', level: 80, color: 'bg-emerald-500' },
			{ name: 'JavaScript', level: 82, color: 'bg-green-600' },
			{ name: 'SQL', level: 75, color: 'bg-teal-500' },
			{ name: 'C++', level: 70, color: 'bg-emerald-600' },
		],
		tools: [
			{ name: 'Git', level: 90, color: 'bg-green-600' },
			{ name: 'Docker', level: 70, color: 'bg-emerald-500' },
			{ name: 'AWS', level: 65, color: 'bg-green-700' },
			{ name: 'JetBrains IDEs', level: 75, color: 'bg-teal-500' },
			{ name: 'VS Code', level: 95, color: 'bg-green-500' },
			{ name: 'Postman', level: 80, color: 'bg-emerald-600' },
		],
	};

	const categories = [
		{ id: 'backend', name: 'Programming Languages', icon: '⚙️' },
		{ id: 'tools', name: 'Tools', icon: '🛠️' },
	];

	return (
		<section id='skills' className='py-20 bg-gray-50 dark:bg-gray-900'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
						Skills & Technologies
					</h2>
					<div className='w-24 h-1 bg-green-600 mx-auto'></div>
				</div>

				{/* Category Tabs */}
				<div className='flex flex-wrap justify-center gap-4 mb-12'>
					{categories.map((category) => (
						<button
							key={category.id}
							onClick={() => setActiveCategory(category.id)}
							className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
								activeCategory === category.id
									? 'bg-green-600 text-white shadow-lg'
									: 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-700'
							}`}>
							<span>{category.icon}</span>
							{category.name}
						</button>
					))}
				</div>

				{/* Skills Grid */}
				<div className='grid md:grid-cols-2 gap-8'>
					{skills[activeCategory as keyof typeof skills].map(
						(skill) => {
							const maxStars = 5;
							const filledStars = Math.round(
								(skill.level / 100) * maxStars
							);
							const emptyStars = maxStars - filledStars;
							return (
								<div
									key={skill.name}
									className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
									<div className='flex justify-between items-center mb-2'>
										<h3 className='font-semibold text-gray-900 dark:text-white'>
											{skill.name}
										</h3>
										<div className='flex items-center'>
											{[...Array(filledStars)].map(
												(_, i) => (
													<span
														key={i}
														className='text-yellow-400 text-lg'>
														★
													</span>
												)
											)}
											{[...Array(emptyStars)].map(
												(_, i) => (
													<span
														key={i}
														className='text-gray-300 dark:text-gray-600 text-lg'>
														★
													</span>
												)
											)}
										</div>
									</div>
								</div>
							);
						}
					)}
				</div>

				{/* Additional Info */}
				<div className='mt-16 text-center'>
					<h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>
						Always Learning
					</h3>
					<p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed'>
						I&apos;m constantly expanding my skill set and staying
						up-to-date with the latest technologies. Currently
						exploring advanced React patterns, cloud architecture,
						and emerging web technologies.
					</p>
				</div>
			</div>
		</section>
	);
}
