# Muck Savage – Website

Contemporary & Traditional Irish Music band website built with **Next.js 14**, **Tailwind CSS**, and **Sanity.io** CMS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom Irish-inspired theme
- **CMS:** Sanity.io (schemas included, optional — works with static data out of the box)
- **Hosting:** Vercel
- **Language:** TypeScript

---

## Quick Start (Local Development)

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/muck-savage.git
cd muck-savage

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> The site works immediately with **static data** from `lib/data.ts`. No Sanity setup required to see the site.

---

## Adding Your Images

Place your images in the `/public/images/` folder:

| File              | Description                           |
| ----------------- | ------------------------------------- |
| `hero.jpg`        | Hero background on the home page      |
| `anthony.jpg`     | Anthony O'Connor photo                |
| `matt.jpg`        | Matt Hedgpeth photo                   |
| `patrick.jpg`     | Patrick Becker photo                  |
| `timothy.jpg`     | Timothy O'Connor photo                |
| `xavier.jpg`      | Xavier O'Luaine photo                 |

You can download your current photos from the WordPress site before it goes offline.

---

## Setting Up Sanity.io (Optional)

Sanity lets you update content (members, shows, recordings) without touching code.

### 1. Create a Sanity Project

```bash
# Install Sanity CLI
npm install -g @sanity/cli

# Initialize a new Sanity project (do this in a separate folder)
mkdir sanity-studio && cd sanity-studio
sanity init

# Choose:
#   - Create new project → "Muck Savage"
#   - Use default dataset → "production"
#   - Project template → "Clean project with no predefined schemas"
```

### 2. Copy Schemas

Copy the schema files from this repo's `sanity/schemas/` folder into your Sanity studio's `schemas/` folder, then import them in the studio's schema index.

### 3. Configure Environment

```bash
# Copy the example env file
cp .env.local.example .env.local

# Edit with your Sanity project ID (found at sanity.io/manage)
```

### 4. Populate Content

Run your Sanity Studio (`sanity dev`) and add your band members, shows, and home page content through the visual editor.

### 5. Switch from Static to CMS Data

In each page file, uncomment the Sanity fetch calls and replace the static data imports. The GROQ queries are already defined in `lib/sanity.ts`.

---

## Contact Form Setup

The contact form currently simulates submission. To make it functional, choose one of these options:

### Option A: Formspree (Easiest)

1. Go to [formspree.io](https://formspree.io) and create a free form
2. Replace the submit handler in `app/contact/page.tsx` with your Formspree endpoint

### Option B: Vercel Serverless Function

Create `app/api/contact/route.ts` with a handler that sends emails via SendGrid, Resend, or similar.

### Option C: Sanity

Store form submissions as Sanity documents and set up email notifications.

---

## Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Muck Savage website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/muck-savage.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `muck-savage` repository
4. Vercel auto-detects Next.js — no config changes needed
5. Add environment variables if using Sanity:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
6. Click **Deploy**

### 3. Custom Domain

In your Vercel project dashboard → Settings → Domains → Add `muck-savage.com` and update your DNS records.

---

## Project Structure

```
muck-savage/
├── app/
│   ├── layout.tsx          # Root layout (header, footer, fonts)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind + custom styles
│   ├── about/
│   │   └── page.tsx        # Band member bios
│   ├── past-shows/
│   │   └── page.tsx        # Shows timeline
│   └── contact/
│       └── page.tsx        # Contact form
├── components/
│   ├── Header.tsx          # Navigation bar
│   └── Footer.tsx          # Footer
├── lib/
│   ├── data.ts             # Static fallback data
│   └── sanity.ts           # Sanity client + GROQ queries
├── sanity/
│   └── schemas/            # Sanity CMS schemas
│       ├── index.ts
│       ├── member.ts
│       ├── show.ts
│       └── homePage.ts
├── public/
│   └── images/             # Place your photos here
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## Customization

- **Colors:** Edit `tailwind.config.js` → `theme.extend.colors` (peat, moss, copper, ink, cream)
- **Fonts:** Change Google Fonts imports in `globals.css` and update `tailwind.config.js` → `fontFamily`
- **Content:** Edit `lib/data.ts` for static content, or use Sanity Studio for CMS-managed content
