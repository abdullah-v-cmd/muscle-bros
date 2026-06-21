# Muscle Bros UK — Charity Website

> "Built in the Gym. Shaped for Life."

Muscle Bros UK is a registered charity providing **free gym memberships**, **free supplements**, and **mentorship** to young men aged 14–25 across the UK — keeping them off the streets, reducing crime, and building a more disciplined society through weight training.

---

## 🌐 Live Site

| Environment | URL |
|---|---|
| Development | http://localhost:3000 |
| Production | *(deploy to Cloudflare Pages)* |

---

## 📄 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, mission, offer preview, stats, testimonials, CTA |
| About Us | `/about` | Founding story, problem statement, values |
| What We Offer | `/what-we-offer` | 3 pillars: Gym, Supplements, Mentorship |
| Impact | `/impact` | Stats, 6 member testimonials, press recognition |
| Get Involved | `/get-involved` | Programme application, donation tiers, volunteering |
| Contact | `/contact` | Contact form, location details, 6-city map |

---

## 🎨 Design System

- **Palette**: Black `#0a0a0a` / Charcoal `#111` + Gold accent `#C9A84C`
- **Typography**: Bebas Neue (display) + Inter (body)
- **Style**: Premium cinematic dark — no stock-looking templates
- **Mobile**: Fully responsive, mobile-first, hamburger nav

---

## ⚙️ Tech Stack

- **Framework**: [Hono](https://hono.dev/) on Cloudflare Workers/Pages
- **Build**: Vite + `@hono/vite-build`
- **Styling**: Pure CSS (no frameworks — handcrafted)
- **Deployment**: Cloudflare Pages

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Build
npm run build

# Run locally
npm run dev:sandbox  # wrangler pages dev

# Or via PM2
pm2 start ecosystem.config.cjs
```

---

## 📦 Deploy to Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy dist --project-name muscle-bros
```

---

## 🏗️ Project Structure

```
src/
├── index.tsx              # Hono router + API endpoints
├── components/
│   └── layout.ts          # Shared nav, head, footer
└── pages/
    ├── home.ts            # Home page
    ├── about.ts           # About Us
    ├── offer.ts           # What We Offer
    ├── impact.ts          # Impact & Stories
    ├── get-involved.ts    # Get Involved
    └── contact.ts         # Contact

public/static/
├── style.css              # Full CSS (dark theme, animations, responsive)
└── app.js                 # JS: nav, scroll reveal, count-up, form handling
```

---

## 🇬🇧 Cities Active

Birmingham · Manchester · London · Leeds · Bristol · Sheffield

---

## 📊 Programme Stats (Placeholder)

- **1,200+** young men supported
- **47** partner gyms
- **94%** crime-free in their first year
- **6** UK cities

---

## 📜 Charity Details

- **Registered UK Charity** No. 1234567
- **HQ**: Birmingham, B1 1AA, United Kingdom
- **Email**: info@musclebros.org.uk

---

*Built with purpose. Deployed on the edge.*
