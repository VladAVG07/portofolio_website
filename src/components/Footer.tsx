export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-gray-900 text-white py-8'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col md:flex-row justify-between items-center'>
					<div className='mb-4 md:mb-0'>
						<p className='text-gray-400'>
							© {currentYear} Your Name. All rights reserved.
						</p>
					</div>

					<div className='flex space-x-6'>
						<a
							href='https://github.com/yourusername'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-green-400 transition-colors duration-300'>
							GitHub
						</a>
						<a
							href='https://linkedin.com/in/yourusername'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-green-400 transition-colors duration-300'>
							LinkedIn
						</a>
						<a
							href='mailto:your.email@example.com'
							className='text-gray-400 hover:text-green-400 transition-colors duration-300'>
							Email
						</a>
					</div>
				</div>

				<div className='mt-6 pt-6 border-t border-gray-800 text-center'>
					<p className='text-gray-500 text-sm'>
						Built with ❤️ using Next.js, React, and Tailwind CSS
					</p>
				</div>
			</div>
		</footer>
	);
}
