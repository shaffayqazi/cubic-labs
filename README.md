# Cubic Labs 🚀

[![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.14-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A modern, AI-focused agency website showcasing AI products, automation services, and analytics solutions. Built with Next.js 15, featuring a stunning dark theme, interactive AI agent carousel, and live theme switching.

## ✨ Features

- 🎨 **8 Beautiful Color Themes** - Switch between themes in real-time
- 🤖 **AI Agent Showcase** - Horizontal scrollable carousel with 6+ AI agents
- 🌙 **Dark Mode Optimized** - Ultra-dark theme with vibrant accent colors
- 🎭 **Smooth Animations** - Framer Motion powered transitions
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Lightning Fast** - Built with Next.js 15 and Turbopack
- 🎯 **Theme Persistence** - Your color choice is saved automatically
- 🔄 **Interactive UI** - Scroll navigation, hover effects, and more

## 🎨 Available Color Themes

1. **Cyber Cyan** - Modern, Tech-Forward, AI-Focused (Default)
2. **Electric Purple** - Creative, Premium, Innovative
3. **Emerald AI** - Growth, Trust, Sustainability
4. **Sunset Orange** - Energetic, Creative, Approachable
5. **Royal Blue** - Professional, Corporate, Trustworthy
6. **Magenta Pink** - Modern, Bold, Eye-catching
7. **Neon Lime** - Fresh, Innovative, High-Energy
8. **Ice Blue** - Clean, Minimal, Sophisticated

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shaffayqazi/cubic-labs.git
cd cubic-labs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15.5.6](https://nextjs.org/) with Turbopack
- **UI Library:** [HeroUI](https://www.heroui.com/)
- **Styling:** [Tailwind CSS 4.1.14](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Font:** [Geist Sans & Mono](https://vercel.com/font)

## 📁 Project Structure

```
cubic-labs/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles & theme variables
│   │   ├── layout.tsx            # Root layout with providers
│   │   ├── page.tsx              # Home page
│   │   ├── providers.tsx         # HeroUI provider wrapper
│   │   └── themes/
│   │       └── page.tsx          # Theme preview page
│   └── components/
│       ├── Header.tsx            # Navigation header with blur effect
│       ├── AIAgentsCarousel.tsx  # Scrollable AI agents showcase
│       └── ThemeSwitcher.tsx     # Live theme switcher dropdown
├── public/                       # Static assets
├── color-schemes.md              # Documentation for all themes
└── package.json
```

## 🎯 Key Components

### Header
- Fixed navigation with blur-on-scroll effect
- Custom 3D Cubic Labs logo
- Responsive menu items
- Theme-aware styling

### AI Agents Carousel
- Horizontal scrollable cards
- 6 AI agent types with workflows
- Left/right navigation buttons
- Smooth scroll animations
- Category badges and hover effects

### Theme Switcher
- Fixed position dropdown
- 8 pre-configured themes
- Real-time color switching
- LocalStorage persistence
- Visual color previews

## 🎨 Customizing Themes

Edit `src/app/globals.css` to customize or create new themes:

```css
:root {
  --primary: #00d4ff;           /* Main brand color */
  --primary-light: #4de4ff;     /* Light variant */
  --primary-dark: #00a8cc;      /* Dark variant */
  
  --background: #030712;        /* Main background */
  --background-secondary: #0a0f1a; /* Secondary background */
  --background-accent: #111827; /* Accent background */
}
```

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shaffayqazi/cubic-labs)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Other Platforms

- **Netlify:** Connect your GitHub repo
- **Railway:** Deploy with `railway up`
- **Docker:** Use the included Dockerfile (if created)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shaffay Qazi**
- GitHub: [@shaffayqazi](https://github.com/shaffayqazi)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [HeroUI](https://www.heroui.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Unsplash](https://unsplash.com/) for high-quality images

## 📧 Support

For support, email support@cubiclabs.com or open an issue in the repository.

---

<div align="center">
  <p>Built with ❤️ using Next.js and TypeScript</p>
  <p>⭐ Star this repo if you like it!</p>
</div>
