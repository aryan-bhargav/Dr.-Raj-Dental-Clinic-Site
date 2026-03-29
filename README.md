# Dentora – Dental Care Website

A fully responsive Next.js + Tailwind CSS website built from the Dentora UI design.

## Folder Structure

```
dentora/
├── app/
│   ├── globals.css          # Global styles, CSS variables, animations
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Main page assembling all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky navbar with mobile menu
│   │   └── Footer.tsx       # Footer with links, social icons, email
│   └── sections/
│       ├── Hero.tsx         # Dark hero with image, service pills, CTA
│       ├── StepsBar.tsx     # Animated progress steps bar
│       ├── About.tsx        # About us with team photos & stat cards
│       ├── Features.tsx     # Feature treatment with doctor card
│       ├── WhyChoose.tsx    # Why choose + testimonials + rewards
│       ├── Blog.tsx         # Blog article grid
│       ├── Newsletter.tsx   # Subscribe form + CTA
├── public/                  # Static assets
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Features

- ✅ **Hero Section** – Dark overlay with dental image, service pills, video card, rating
- ✅ **Animated Steps Bar** – Progress bars that animate on scroll
- ✅ **About Section** – Team photos, stat cards with hover animations
- ✅ **Features Section** – Doctor profile, clinic image, appointment stats
- ✅ **Why Choose** – Testimonial carousel, diagnostics bar chart, rewards card
- ✅ **Blog** – Article cards with author info, category tags
- ✅ **Newsletter** – Email subscription with success state
- ✅ **Footer** – 4-column with email, social links, nav links
- ✅ **Scroll reveal animations** on all sections
- ✅ **Fully responsive** – mobile, tablet, desktop
- ✅ **Sticky navbar** with transparent-to-white scroll transition

## Theme

- **Primary color**: `#2BBCD4` (teal)
- **Light variant**: `#7AD8E8`
- **Font**: DM Sans (Google Fonts)
- **Background**: White `#ffffff`
- **Dark text**: `#1a1a1a`
