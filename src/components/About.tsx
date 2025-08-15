import Image from 'next/image';

export default function About() {
	return (
		<section id='about' className='py-20 bg-white dark:bg-gray-800'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
						About Me
					</h2>
					<div className='w-24 h-1 bg-green-600 mx-auto'></div>
				</div>

				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Image Section */}
					<div className='order-2 lg:order-1'>
						<div className='relative'>
							<div className='w-80 h-80 mx-auto bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center'>
								<div className='w-72 h-72 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden'>
									<Image
										src='/images/pozaCV.jpg'
										alt='Vlad Apostol - Developer'
										width={288}
										height={288}
										className='w-full h-full object-cover rounded-full'
									/>
								</div>
							</div>
							<div className='absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center'>
								<span className='text-2xl'>🚀</span>
							</div>
						</div>
					</div>

					{/* Content Section */}
					<div className='order-1 lg:order-2'>
						<h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>
							Passionate Developer & Problem Solver
						</h3>

						<p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'>
							I can't say that I am a full-stack developer, data
							scientist etc. I am just passionate in building
							every kind of software solutions which solve
							real-world problems.
						</p>

						<p className='text-gray-600 dark:text-gray-300 mb-8 leading-relaxed'>
							When I'm not coding, you can find me in the park
							running or in the gym =)
						</p>

						{/* Key Points */}
						<div className='space-y-4'>
							<div className='flex items-center'>
								<div className='w-2 h-2 bg-green-600 rounded-full mr-3'></div>
								<span className='text-gray-700 dark:text-gray-300'>
									<strong>3+ years</strong> of experience in
									software development
								</span>
							</div>
							<div className='flex items-center'>
								<div className='w-2 h-2 bg-green-600 rounded-full mr-3'></div>
								<span className='text-gray-700 dark:text-gray-300'>
									<strong>5+ projects</strong> completed
									successfully
								</span>
							</div>
							<div className='flex items-center'>
								<div className='w-2 h-2 bg-green-600 rounded-full mr-3'></div>
								<span className='text-gray-700 dark:text-gray-300'>
									<strong>Bachelor's degree</strong> in
									Computer Engineering
								</span>
							</div>
							<div className='flex items-center'>
								<div className='w-2 h-2 bg-green-600 rounded-full mr-3'></div>
								<span className='text-gray-700 dark:text-gray-300'>
									Passionate about{' '}
									<strong>problem solving</strong> and{' '}
									<strong>
										implementing innovative functionalities
									</strong>
								</span>
							</div>
						</div>

						{/* Download CV Button */}
						<div className='mt-8'>
							<button className='bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg'>
								<a href='/docs/CV.pdf' download>
									{' '}
									Download CV
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
