# GRHIIT - Grit High-Intensity Interval Training

![GRHIIT Moodboard](.claude/images/mood.png)

**GRHIIT (Grit High-Intensity Interval Training)** is a training system built on real HIIT protocols—not trends. It uses **time-based**, **bodyweight-only** intervals to push you into real oxygen debt, safely and progressively. No equipment. No fluff. **Intensity, discipline, consistency**—anywhere, anytime.

> **All it takes is all you've got.**

## 🎯 Purpose & Mission

GRHIIT is **Kevin Jordan's escape-velocity project**—a way to help people build **mental grit, personal discipline, and physical resilience** using the simplest tools possible: their body and a timer.

### What GRHIIT Is
- A structured HIIT method refined over decades of coaching
- Built around short, brutal intervals (20:10 / 6:3 / 60:20) with **progressive overload**
- **Bodyweight-only** movements for safety, speed, and universal accessibility
- Laser-focused on **mental toughness** and **repeatable effort**, not gimmicks

### What GRHIIT Is Not
- It's not an AI-assembled, influencer routine
- It's not equipment-dependent or space-dependent
- It's not random "sweat for the sake of sweat." Every interval has intent

## 🏋️ Core Principles

- **Intensity** over duration
- **Discipline** over motivation  
- **Consistency** over perfection
- **Progressive overload** over novelty
- **Safety** over ego

## 💪 Who It's For

- Busy professionals who need **high return** in **low time**
- Ex-athletes craving a **real edge** without a barbell
- Beginners who want **simple, safe progression**
- Anyone who wants to **do hard things on purpose**

## 🛠️ Tech Stack

This website is built with modern web technologies for performance and scalability:

- **Framework**: [Nuxt 3.19.0](https://nuxt.com/) with TypeScript
- **Styling**: [Tailwind CSS 3.4.17](https://tailwindcss.com/)
- **UI Components**: [Headless UI](https://headlessui.com/) for Vue
- **Content Management**: [Nuxt Content 3.6.3](https://content.nuxt.com/) with SQLite
- **Typography**: Google Fonts (Oswald + Inter)
- **Deployment**: AWS Amplify with static generation

### Key Features
- 🎨 **Brand-first design** with custom component library
- 📱 **Fully responsive** mobile-optimized experience
- ♿ **Accessible** UI components with focus management
- 📝 **Content management** system for articles and program updates
- 📧 **Waitlist capture** system ready for backend integration
- ⚡ **Performance optimized** with static site generation
- 🚀 **AWS Amplify deployment** with automated CI/CD

## 🚀 Development Setup

### Prerequisites
- Node.js 18+ 
- npm (converted from pnpm workspaces)

### Installation

```bash
# Clone the repository
git clone https://github.com/kdjordan/grhiit-web.git
cd grhiit-web

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000`

### Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production  
npm run preview      # Preview production build
npm run generate     # Generate static site (for Amplify)
npm run typecheck    # Run TypeScript checks
```

## 📁 Project Structure

```
grhiit-web/ (standalone)
├── app/                   # Nuxt 3 app directory
│   ├── layouts/           # Layout components
│   ├── pages/             # Route pages
│   ├── components/        # Vue components
│   └── app.vue            # Root app component
├── content/               # Markdown content & articles
│   └── articles/          # Training methodology articles
├── public/                # Static assets (images, favicon)
├── amplify.yml            # AWS Amplify deployment config
├── nuxt.config.ts         # Nuxt configuration
├── content.config.ts      # Content management config
└── package.json           # Dependencies and scripts
```

## 🎨 Brand Identity

GRHIIT's visual identity reflects the intensity and focus of the training method:

- **Colors**: Bold red (`#F20D0D`), deep black (`#202124`), clean whites
- **Typography**: Oswald (display), Inter (body) for maximum impact and readability
- **Aesthetic**: High-contrast, minimal, powerful—like the workouts themselves

## 📖 Content Management

Articles and program information are managed through Nuxt Content v3.6.3 with SQLite:

- **Articles**: Training methodology and technique guides stored in `/content/articles/`
- **Static Pages**: About, Program overview, and other content
- **SEO Optimized**: Articles configured for content marketing strategy

## 🚀 Deployment

The site is deployed on **AWS Amplify** with automated CI/CD:

- **Platform**: AWS Amplify (production)
- **Build Process**: Static site generation (`npm run generate`)
- **Auto Deploy**: Pushes to main branch trigger deployment
- **Output Directory**: `.output/public/`

### Manual Deployment
```bash
# Generate static site
npm run generate

# Build output will be in .output/public/
```

### AWS Amplify Configuration
The `amplify.yml` file handles the build process with Node.js 22 and optimized memory allocation.

## 🤝 Contributing

This is a founder-led project focused on delivering Kevin Jordan's specific vision for GRHIIT. The codebase emphasizes:

- **TypeScript** for type safety
- **Component reusability** with consistent styling
- **Accessibility** best practices
- **Performance optimization**

## 📧 Contact

For questions about GRHIIT training methodology or business inquiries, reach out through the website's waitlist system.

---

**Built with intensity. Powered by discipline. Driven by grit.**

*Do hard things. On purpose.*