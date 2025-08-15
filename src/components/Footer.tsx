export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-gray-900 text-white py-8'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col md:flex-row justify-between items-center'>
					<div className='mb-4 md:mb-0'>
						<p className='text-gray-400'>
							© {currentYear} Vlad Apostol. All rights reserved.
						</p>
					</div>

					<div className='flex space-x-6'>
						<a
							href='https://github.com/VladAVG07'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-green-400 transition-colors duration-300'>
							GitHub
						</a>
						<a
							href='https://www.linkedin.com/in/vlad-apostol-1901a8222/'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-400 hover:text-green-400 transition-colors duration-300'>
							LinkedIn
						</a>
						<a
							href='mailto:vladgabrielapostol@gmail.com'
							className='text-gray-400 hover:text-green-400 transition-colors duration-300'>
							Email
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
