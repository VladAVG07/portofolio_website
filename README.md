# 🚀 Modern Portfolio Website

A beautiful, responsive portfolio website built with **Next.js**, **React**, and **Tailwind CSS**. This project serves as both a showcase of your work and a learning platform for modern web development technologies.

## ✨ Features

-   **Modern Design**: Clean, professional design with smooth animations
-   **Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
-   **Dark Mode Ready**: Built with dark mode support (easy to implement)
-   **Interactive Components**: Smooth scrolling navigation, form handling, and interactive elements
-   **SEO Optimized**: Proper meta tags and semantic HTML
-   **Performance**: Fast loading with Next.js optimization
-   **Accessible**: Built with accessibility best practices

## 🛠️ Technologies Used

-   **Next.js 14** - React framework with App Router
-   **React 18** - UI library with hooks
-   **TypeScript** - Type-safe JavaScript
-   **Tailwind CSS** - Utility-first CSS framework
-   **ESLint** - Code linting

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills section
│   ├── Projects.tsx       # Projects showcase
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
└── ...
```

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Installation

1. **Clone the repository**

    ```bash
    git clone <your-repo-url>
    cd portfolio-website
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start the development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

### 1. Personal Information

Update your personal information in these files:

**Layout (`src/app/layout.tsx`)**:

```typescript
export const metadata: Metadata = {
	title: 'Your Name - Portfolio',
	description: 'Your description here',
	// ... other metadata
};
```

**Navbar (`src/components/Navbar.tsx`)**:

```typescript
<h1 className='text-xl font-bold text-gray-900 dark:text-white'>Your Name</h1>
```

**Hero (`src/components/Hero.tsx`)**:

```typescript
<h1 className='text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6'>
	Your Name
</h1>
```

### 2. About Section

Edit `src/components/About.tsx` to update:

-   Your personal description
-   Experience details
-   Education information
-   Key achievements

### 3. Skills

Modify `src/components/Skills.tsx` to:

-   Add/remove skill categories
-   Update skill levels (0-100%)
-   Change skill names and colors

### 4. Projects

Update `src/components/Projects.tsx` to showcase your projects:

-   Add your real projects
-   Include project images
-   Update GitHub and live demo links
-   Modify project descriptions

### 5. Contact Information

Edit `src/components/Contact.tsx` to update:

-   Your email address
-   Social media links
-   Location information

### 6. Styling

The website uses Tailwind CSS. You can customize:

-   Colors in `tailwind.config.js`
-   Typography in `src/app/globals.css`
-   Component-specific styles in each component

## 📚 Learning Resources

### React Fundamentals

-   [React Official Documentation](https://react.dev/)
-   [React Hooks Guide](https://react.dev/reference/react)
-   [React Patterns](https://reactpatterns.com/)

### Next.js Learning Path

-   [Next.js Documentation](https://nextjs.org/docs)
-   [App Router Guide](https://nextjs.org/docs/app)
-   [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

### Tailwind CSS Mastery

-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [Tailwind UI Components](https://tailwindui.com/)
-   [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### TypeScript for React

-   [TypeScript Handbook](https://www.typescriptlang.org/docs/)
-   [React TypeScript Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/)

## 🎯 Key Concepts You'll Learn

### React Concepts

-   **Components**: Building reusable UI pieces
-   **Props**: Passing data between components
-   **State**: Managing component data with `useState`
-   **Effects**: Side effects with `useEffect`
-   **Event Handling**: User interactions
-   **Conditional Rendering**: Showing/hiding elements

### Next.js Features

-   **App Router**: New file-based routing system
-   **Server Components**: Default React components
-   **Client Components**: Interactive components with `'use client'`
-   **Layouts**: Shared UI across pages
-   **Metadata API**: SEO optimization

### Tailwind CSS Utilities

-   **Flexbox & Grid**: Layout systems
-   **Spacing**: Margins, padding, gaps
-   **Colors**: Background, text, border colors
-   **Typography**: Font sizes, weights, styles
-   **Responsive Design**: Mobile-first approach
-   **Transitions**: Smooth animations

## 🔧 Development Tips

### 1. Component Structure

```typescript
// Good component structure
export default function ComponentName() {
	// 1. State declarations
	const [state, setState] = useState(initialValue);

	// 2. Event handlers
	const handleClick = () => {
		// Handle click
	};

	// 3. Effects
	useEffect(() => {
		// Side effects
	}, []);

	// 4. Render
	return <div className='container'>{/* JSX */}</div>;
}
```

### 2. Tailwind CSS Best Practices

```typescript
// Responsive design
<div className="w-full md:w-1/2 lg:w-1/3">

// Hover states
<button className="bg-blue-500 hover:bg-blue-600 transition-colors">

// Dark mode
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

### 3. TypeScript with React

```typescript
// Props interface
interface ComponentProps {
	title: string;
	description?: string;
	onClick: () => void;
}

// Component with typed props
export default function Component({
	title,
	description,
	onClick,
}: ComponentProps) {
	return <div>{title}</div>;
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Build your project: `npm run build`
2. Upload the `out` folder to Netlify

### Other Platforms

-   **GitHub Pages**: Use `next export` for static hosting
-   **AWS S3**: Upload built files
-   **DigitalOcean App Platform**: Direct deployment

## 📝 Next Steps

1. **Add Real Content**: Replace placeholder content with your information
2. **Add Images**: Include your photo and project screenshots
3. **Implement Dark Mode**: Add dark mode toggle functionality
4. **Add Animations**: Implement Framer Motion for smooth animations
5. **Add Blog**: Create a blog section using MDX
6. **Add Analytics**: Integrate Google Analytics or Vercel Analytics
7. **Add SEO**: Optimize for search engines
8. **Add Tests**: Write unit tests with Jest and React Testing Library

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you find any bugs or have suggestions, please open an issue.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Coding! 🎉**

Build something amazing with React, Next.js, and Tailwind CSS!
