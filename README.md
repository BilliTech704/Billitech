# BilliTech Portfolio Website

A modern, responsive company portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dark Theme**: Professional dark theme with purple and blue accents
- **Smooth Animations**: Engaging transitions and animations throughout
- **Multiple Pages**: Home, About, Services, and Contact pages
- **Component-Based Architecture**: Reusable and maintainable components
- **Modern Tech Stack**: Next.js App Router, TypeScript, Tailwind CSS

## Pages

### Home
- Hero section with call-to-action
- Services overview
- About preview
- Testimonials section
- Featured projects preview

### About
- Company story and mission
- Team information
- Why choose us
- Company statistics

### Services
- Detailed service descriptions
- Web Development
- Business Branding
- Social Media Management
- Digital Marketing

### Contact
- Contact form
- Contact information
- Location details
- Social media links

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React 19
- **Build Tool**: Next.js Built-in

## Getting Started

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
billitech/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ServiceCard.tsx
│   │   └── TestimonialCard.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Customization

### Colors
Edit the theme colors in `tailwind.config.ts`:
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Violet)
- Dark: `#0f172a` (Navy)

### Content
Update content in individual page files:
- Homepage: `app/page.tsx`
- About: `app/about/page.tsx`
- Services: `app/services/page.tsx`
- Contact: `app/contact/page.tsx`

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS optimization with Tailwind CSS
- Fast refresh during development

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 BilliTech. All rights reserved.

## Contact

For inquiries, contact us at info@billitech.com or +1 (555) 123-4567
