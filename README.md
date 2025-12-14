# Modern Portfolio Website

A professional, fully-featured portfolio website built with React, TypeScript, and modern web technologies. Features smooth animations, dark mode, project filtering, and responsive design.

## ✨ Features

- ⚡️ **Vite** - Lightning-fast HMR and build tooling
- ⚛️ **React 18** - Latest React features with concurrent rendering
- 🔷 **TypeScript** - Type-safe development experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔄 **React Router v7** - Client-side routing
- 🎭 **Framer Motion** - Production-ready animation library
- 🎯 **Lucide React** - Beautiful, consistent icons
- 🔍 **ESLint** - Code quality and consistency
- 📦 **SEO Ready** - React Helmet Async for meta management

### Core Features

- **Responsive Navigation** - Mobile-friendly navbar with smooth scrolling and active section highlighting
- **Dark/Light Theme Toggle** - Persistent theme preference using localStorage
- **Smooth Scroll Animations** - Framer Motion animations throughout the site
- **Project Filtering** - Filter projects by technology stack
- **Contact Form** - Fully validated contact form with loading states
- **SEO Optimized** - Meta tags, Open Graph, and Twitter Card support
- **Performance Optimized** - Code splitting with lazy loading

### Sections

1. **Hero Section** - Eye-catching introduction with name, title, and call-to-action buttons
2. **About Section** - Skills showcase organized by category with animated badges
3. **Projects Section** - Grid layout with filtering, hover effects, and project details
4. **Contact Section** - Contact form with validation and contact information
5. **Footer** - Social media links with icons

## Tech Stack

### Core Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling

### Key Dependencies

- **Framer Motion** - Advanced animations
- **React Helmet Async** - SEO management
- **Lucide React** - Icon library

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation with mobile menu
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── ProjectCard.tsx # Individual project card
│   ├── SkillBadge.tsx  # Animated skill badge
│   ├── Contact.tsx     # Contact section
│   ├── ContactForm.tsx # Form with validation
│   ├── Footer.tsx      # Footer with social links
│   ├── SEO.tsx         # SEO meta tags
│   ├── ScrollToTop.tsx # Scroll to top button
│   └── LoadingScreen.tsx # Loading screen
├── context/            # React context
│   └── ThemeContext.tsx # Theme management
├── hooks/              # Custom hooks
│   ├── useTheme.ts     # Theme hook
│   └── useScrollspy.ts # Active section detection
├── types/              # TypeScript types
│   └── index.ts        # Type definitions
├── data/               # Static data
│   └── portfolio.ts    # Projects, skills, social links
├── utils/              # Utility functions
│   └── smoothScroll.ts # Smooth scroll helper
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Design Philosophy

### Color Scheme

- **Primary Color**: Sky blue (professional yet creative)
- **Background**: White/Gray 50 (light mode), Gray 900/800 (dark mode)
- **Text**: Gray scale for optimal readability

### Typography

- **Display Font**: Space Grotesk - Modern, bold headings
- **Body Font**: Inter - Clean, readable body text
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Design Principles

- Clean, modern aesthetic
- Consistent 8px spacing system
- Smooth transitions and animations
- Mobile-first responsive design
- High contrast for accessibility

## Key Features Explained

### Theme Toggle

- Persists preference to localStorage
- Smooth transition between light and dark modes
- Uses Tailwind's dark mode classes

### Project Filtering

- Filter by technology stack
- Smooth animations when filtering
- Visual feedback for selected filter

### Contact Form Validation

- Real-time validation
- Clear error messages
- Loading states during submission
- Success/error feedback

### Performance Optimizations

- Lazy loading of major sections
- Code splitting for smaller bundles
- Optimized images with lazy loading
- Minimal re-renders with proper React patterns

### Smooth Scrolling

- Custom scroll behavior
- Active section tracking
- Scroll to top button
- Smooth navigation between sections

## Customization Guide

### Update Personal Information

Edit `src/data/portfolio.ts`:

- **Projects**: Add/edit project information
- **Skills**: Update your skill set
- **Social Links**: Update your social media profiles

### Update Hero Section

Edit `src/components/Hero.tsx`:

- Change name and title
- Update introduction text
- Modify button actions

### Update Contact Info

Edit `src/components/Contact.tsx`:

- Update email, phone, location
- Modify contact information

### Change Colors

Edit `tailwind.config.js`:

- Modify the primary color palette
- Add custom colors

### Add New Sections

1. Create component in `src/components/`
2. Import and add to `src/App.tsx`
3. Update navbar in `src/components/Navbar.tsx`

## Development

The dev server starts automatically. To build for production:

```bash
npm run build
```

## Best Practices Implemented

### React Patterns

- Functional components with hooks
- Context API for global state
- Custom hooks for reusable logic
- Lazy loading for code splitting
- Proper TypeScript typing

### Performance

- Lazy loading components
- Optimized re-renders
- Efficient state management
- Image lazy loading

### Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation support
- High contrast colors

### SEO

- Meta tags for all pages
- Open Graph support
- Twitter Card support
- Semantic HTML structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
