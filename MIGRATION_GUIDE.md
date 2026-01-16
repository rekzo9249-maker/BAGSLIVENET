# 🔄 Bonk Live → Bags Migration Guide

This guide contains all the changes needed to rebrand from "Bonk Live" to "Bags" with a black/light green theme.

---

## 📋 Quick Checklist

- [ ] Update `package.json` name
- [ ] Update `globals.css` color scheme
- [ ] Update `tailwind.config.ts` (if exists in src/)
- [ ] Add CA banner component
- [ ] Update all component files
- [ ] Update page files
- [ ] Update README.md
- [ ] Find and replace "Bonk"/"bonk" → "Bags"/"bags"

---

## 🎨 1. Color Theme Changes

### Update `src/app/globals.css`

Replace the entire CSS variables section with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Light green theme - Light Mode */
    --background: 0 0% 100%; /* white */
    --foreground: 120 100% 15%; /* dark green for text */

    --card: 0 0% 98%;
    --card-foreground: 120 100% 15%;

    --popover: 0 0% 100%;
    --popover-foreground: 120 100% 15%;

    --primary: 120 100% 35%; /* light green */
    --primary-foreground: 0 0% 0%;

    --secondary: 120 60% 90%;
    --secondary-foreground: 120 100% 15%;

    --muted: 120 30% 95%;
    --muted-foreground: 120 50% 35%;

    --accent: 120 100% 35%;
    --accent-foreground: 0 0% 0%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 120 30% 85%;
    --input: 120 30% 85%;
    --ring: 120 100% 35%;

    --radius: 0.5rem;
  }

  .dark {
    /* Black and light green theme - Dark Mode (default) */
    --background: 0 0% 0%; /* pure black */
    --foreground: 120 100% 80%; /* light green for text */

    --card: 0 0% 5%; /* near black */
    --card-foreground: 120 100% 80%;

    --popover: 0 0% 3%;
    --popover-foreground: 120 100% 80%;

    --primary: 120 100% 65%; /* bright light green */
    --primary-foreground: 0 0% 0%;

    --secondary: 120 50% 15%;
    --secondary-foreground: 120 100% 80%;

    --muted: 120 30% 10%;
    --muted-foreground: 120 50% 60%;

    --accent: 120 100% 65%;
    --accent-foreground: 0 0% 0%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 120 30% 15%;
    --input: 120 30% 15%;
    --ring: 120 100% 65%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* Custom utility classes for Bags theme */
@layer utilities {
  .glow-green {
    box-shadow: 0 0 40px rgba(34, 197, 94, 0.3);
  }
  
  .glow-green-sm {
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.2);
  }
  
  .text-gradient-green {
    background: linear-gradient(135deg, #22c55e 0%, #86efac 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .bg-gradient-green {
    background: linear-gradient(135deg, #22c55e 0%, #86efac 100%);
  }

  .bg-gradient-green-subtle {
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(134, 239, 172, 0.1) 100%);
  }
}
```

---

## 🏷️ 2. Add Contract Address Banner

### Create `src/components/shared/CABanner.tsx`

```typescript
"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

export function CABanner() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE" // Replace with actual CA

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full bg-black border-b border-green-500/20 py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-green-400 font-semibold">CA:</span>
          <code className="text-green-300 font-mono">{contractAddress}</code>
          <button
            onClick={copyToClipboard}
            className="ml-2 text-green-400 hover:text-green-300 transition-colors"
            aria-label="Copy contract address"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
```

### Update `src/app/layout.tsx`

Add the CA banner at the very top:

```typescript
import { CABanner } from "@/components/shared/CABanner"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CABanner />  {/* Add this line */}
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
```

---

## 📝 3. Update package.json

```json
{
  "name": "bags-live",
  "version": "0.1.0",
  "private": true,
  // ... rest remains the same
}
```

---

## 🔍 4. Find and Replace

Use your IDE's find and replace feature (usually Ctrl+Shift+H or Cmd+Shift+H):

### Case-sensitive replacements:

1. **"Bonk Live" → "Bags"**
   - In all `.tsx`, `.ts`, `.md` files

2. **"Bonk" → "Bags"** (standalone word)
   - Component names: `BonkLive` → `Bags`
   - Text content: "Bonk" → "Bags"

3. **"bonk-live" → "bags-live"** (kebab-case)
   - URLs, slugs, IDs

4. **"bonkLive" → "bagsLive"** (camelCase)
   - Variable names

5. **"BONK" → "BAGS"** (uppercase)
   - Constants

---

## 🎯 5. Specific File Updates

### `src/components/shared/Logo.tsx`

```typescript
export function Logo({ size = "md" }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
      <div className={cn("rounded-lg bg-gradient-green p-2", sizeClasses[size].icon)}>
        <Tv className={cn("text-black", sizeClasses[size].icon)} />
      </div>
      <span className={cn("font-bold text-gradient-green", sizeClasses[size].text)}>
        Bags
      </span>
    </Link>
  )
}
```

### `src/lib/constants.ts`

```typescript
export const SITE_CONFIG = {
  name: "Bags",
  title: "Bags - Livestreaming for Crypto Communities",
  description: "Stream, watch, and earn with your favorite tokens on Bags.",
  url: "https://bags.live", // Update to your actual domain
  links: {
    twitter: "https://twitter.com/bagslive", // Update to your Twitter
  },
}
```

### Update all component text content

Search for all instances of "Bonk" in:
- `src/components/home/HeroSection.tsx`
- `src/components/home/HowItWorks.tsx`
- `src/components/home/CTASection.tsx`
- All other component files

Example change in HeroSection:

```typescript
// Before
<h1>Stream with Bonk Live</h1>

// After
<h1>Stream with Bags</h1>
```

---

## 🎨 6. Update Button and Accent Colors

### Replace cyan/teal classes with green equivalents:

- `bg-cyan-500` → `bg-green-500`
- `text-cyan-400` → `text-green-400`
- `hover:bg-cyan-600` → `hover:bg-green-600`
- `border-cyan-500` → `border-green-500`
- `glow-cyan` → `glow-green`
- `text-gradient-cyan` → `text-gradient-green`

### Search and replace in all files:

```bash
# In your IDE or terminal:
# Replace cyan with green in class names
cyan → green (in className attributes)
```

---

## 📄 7. Update README.md

```markdown
# Bags

A crypto livestreaming platform for token communities built with Next.js 14+, TypeScript, and Tailwind CSS.

![Tech Stack](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-22c55e?style=flat-square&logo=tailwindcss)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Navigate to project directory
cd d:/Bags

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Color Palette

**Light Green Accent** (unique identity)
- Primary: `#22c55e` (oklch(0.7 0.15 145))
- Light: `#86efac` (for hover states)
- Dark: `#16a34a` (for active states)
- Glow: `rgba(34, 197, 94, 0.3)` (for effects)

**Dark Mode** (default)
- Background: `#000000` (pure black)
- Card: `#0D0D0D` (near black)
- Text: `#86efac` (light green)

**Light Mode**
- Background: `#FFFFFF` (white)
- Card: `#F5F5F5` (light gray)
- Text: `#166534` (dark green)
```

---

## 🧪 8. Testing Checklist

After making changes:

- [ ] Run `npm install` to ensure dependencies are up to date
- [ ] Start dev server: `npm run dev`
- [ ] Check homepage - logo, hero, all text
- [ ] Check navbar - all links and wallet button
- [ ] Check footer - copyright text
- [ ] Test CA banner copy functionality
- [ ] Check dark/light mode toggle
- [ ] Verify all "Bonk" references are changed to "Bags"
- [ ] Check all pages: Home, About, Streams, Create
- [ ] Verify green theme is applied everywhere
- [ ] Test responsive design on mobile

---

## 🚀 9. Deployment Updates

Update environment variables if needed:

```env
NEXT_PUBLIC_SITE_NAME=Bags
NEXT_PUBLIC_SITE_URL=https://bags.live
NEXT_PUBLIC_CONTRACT_ADDRESS=YOUR_CONTRACT_ADDRESS_HERE
```

---

## ⚠️ Important Notes

1. **Contract Address**: Replace `YOUR_CONTRACT_ADDRESS_HERE` in `CABanner.tsx` with your actual token contract address

2. **Domain URLs**: Update all URLs from `bonklive.com` to your actual domain

3. **Social Links**: Update Twitter/X link in constants and navbar

4. **Logo SVG**: If you have a custom logo, update the icon in `Logo.tsx`

5. **Favicon**: Replace favicon in `public/` directory

6. **Metadata**: Update metadata in `layout.tsx` with Bags branding

---

## 🎉 Final Steps

1. Commit changes to git:
```bash
git add .
git commit -m "Rebrand from Bonk Live to Bags with green/black theme"
```

2. Run build test:
```bash
npm run build
```

3. Deploy to production

---

Good luck with Bags! 🎒💚
