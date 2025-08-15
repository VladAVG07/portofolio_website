'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [notification, setNotification] = useState<{
		show: boolean;
		message: string;
		type: 'success' | 'error';
	}>({ show: false, message: '', type: 'success' });

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const showNotification = (message: string, type: 'success' | 'error') => {
		setNotification({ show: true, message, type });
		// Auto-hide after 3 seconds
		setTimeout(() => {
			setNotification({ show: false, message: '', type: 'success' });
		}, 3000);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Basic form validation
		if (
			!formData.name.trim() ||
			!formData.email.trim() ||
			!formData.subject.trim() ||
			!formData.message.trim()
		) {
			showNotification('Please fill in all fields.', 'error');
			setIsSubmitting(false);
			return;
		}

		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			showNotification('Please enter a valid email address.', 'error');
			setIsSubmitting(false);
			return;
		}

		try {
			// Make POST request to your API endpoint
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			// Check if the request was successful
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			// Parse the JSON response
			const result = await response.json();
			console.log(result);

			// Reset form on success
			setFormData({ name: '', email: '', subject: '', message: '' });

			// Show success notification
			showNotification(
				"Thank you for your message! I'll get back to you soon.",
				'success'
			);
		} catch (error) {
			console.error('Error submitting form:', error);

			// Show error notification
			showNotification(
				'Sorry, there was an error sending your message. Please try again.',
				'error'
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	const socialLinks = [
		{
			name: 'GitHub',
			url: 'https://github.com/VladAVG07',
			icon: (
				<svg
					className='w-6 h-6'
					fill='currentColor'
					viewBox='0 0 24 24'>
					<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
				</svg>
			),
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/vlad-apostol-1901a8222/',
			icon: (
				<svg
					className='w-6 h-6'
					fill='currentColor'
					viewBox='0 0 24 24'>
					<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
				</svg>
			),
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/vlad._.avg/',
			icon: (
				<svg
					className='w-6 h-6'
					fill='currentColor'
					viewBox='0 0 24 24'>
					<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
				</svg>
			),
		},
	];

	return (
		<>
			{/* Notification */}
			{notification.show && (
				<div
					className={`fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform ${
						notification.type === 'success'
							? 'bg-green-500 text-white'
							: 'bg-red-500 text-white'
					}`}>
					<div className='flex items-center space-x-2'>
						{notification.type === 'success' ? (
							<svg
								className='w-5 h-5'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path
									fillRule='evenodd'
									d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
									clipRule='evenodd'
								/>
							</svg>
						) : (
							<svg
								className='w-5 h-5'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path
									fillRule='evenodd'
									d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
									clipRule='evenodd'
								/>
							</svg>
						)}
						<span className='font-medium'>
							{notification.message}
						</span>
					</div>
				</div>
			)}

			<section id='contact' className='py-20 bg-gray-50 dark:bg-gray-900'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
							Get In Touch
						</h2>
						<div className='w-24 h-1 bg-green-600 mx-auto'></div>
						<p className='mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
							I'm always interested in hearing about new
							opportunities and exciting projects. Feel free to
							reach out if you'd like to collaborate or just want
							to say hello!
						</p>
					</div>

					<div className='grid lg:grid-cols-2 gap-12'>
						{/* Contact Form */}
						<div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
							<h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>
								Send me a message
							</h3>

							<form onSubmit={handleSubmit} className='space-y-6'>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<label
											htmlFor='name'
											className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
											Name
										</label>
										<input
											type='text'
											id='name'
											name='name'
											value={formData.name}
											onChange={handleChange}
											required
											className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white'
											placeholder='Your name'
										/>
									</div>

									<div>
										<label
											htmlFor='email'
											className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
											Email
										</label>
										<input
											type='email'
											id='email'
											name='email'
											value={formData.email}
											onChange={handleChange}
											required
											className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white'
											placeholder='your.email@example.com'
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor='subject'
										className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
										Subject
									</label>
									<input
										type='text'
										id='subject'
										name='subject'
										value={formData.subject}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white'
										placeholder="What's this about?"
									/>
								</div>

								<div>
									<label
										htmlFor='message'
										className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
										Message
									</label>
									<textarea
										id='message'
										name='message'
										value={formData.message}
										onChange={handleChange}
										required
										rows={6}
										className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none'
										placeholder='Tell me about your project or just say hello!'></textarea>
								</div>

								<button
									type='submit'
									disabled={isSubmitting}
									className='w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none'>
									{isSubmitting
										? 'Sending...'
										: 'Send Message'}
								</button>
							</form>
						</div>

						{/* Contact Information */}
						<div className='space-y-8'>
							<div>
								<h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>
									Let's connect
								</h3>
								<p className='text-gray-600 dark:text-gray-300 mb-8 leading-relaxed'>
									I'm currently available for freelance work
									and full-time opportunities. Whether you
									have a question or just want to say hi, I'll
									try my best to get back to you!
								</p>
							</div>

							{/* Contact Details */}
							<div className='space-y-4'>
								<div className='flex items-center'>
									<div className='w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4'>
										<svg
											className='w-6 h-6 text-green-600 dark:text-green-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
											/>
										</svg>
									</div>
									<div>
										<p className='font-medium text-gray-900 dark:text-white'>
											Email
										</p>
										<p className='text-gray-600 dark:text-gray-300'>
											vladgabrielapostol@gmail.com
										</p>
									</div>
								</div>

								<div className='flex items-center'>
									<div className='w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4'>
										<svg
											className='w-6 h-6 text-green-600 dark:text-green-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
											/>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
											/>
										</svg>
									</div>
									<div>
										<p className='font-medium text-gray-900 dark:text-white'>
											Location
										</p>
										<p className='text-gray-600 dark:text-gray-300'>
											Bucharest, Romania
										</p>
									</div>
								</div>
							</div>

							{/* Social Links */}
							<div>
								<h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
									Follow me
								</h4>
								<div className='flex space-x-4'>
									{socialLinks.map((link) => (
										<a
											key={link.name}
											href={link.url}
											target='_blank'
											rel='noopener noreferrer'
											className='w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300'>
											{link.icon}
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
