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

Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal).

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
d:/Bags/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── layout.tsx           # Root layout with ThemeProvider, CA Banner, Navbar, Footer
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles with Green/Black theme
│   │   ├── about/
│   │   │   └── page.tsx         # About page
│   │   ├── streams/
│   │   │   ├── page.tsx         # Streams listing page
│   │   │   └── [id]/
│   │   │       └── page.tsx     # Individual stream viewer (dynamic route)
│   │   └── create/
│   │       └── page.tsx         # Create stream page
│   │
│   ├── components/              # React components
│   │   ├── ui/                  # shadcn/ui base components (auto-generated)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── skeleton.tsx
│   │   │   └── tabs.tsx
│   │   │
│   │   ├── layout/              # Layout components
│   │   │   ├── Navbar.tsx       # Main navigation with theme toggle
│   │   │   └── Footer.tsx       # Site footer
│   │   │
│   │   ├── home/                # Home page components
│   │   │   ├── HeroSection.tsx  # Hero with branding & CTA
│   │   │   ├── HowItWorks.tsx   # 3-step explanation
│   │   │   ├── TokenInput.tsx   # Token address input with validation
│   │   │   └── CTASection.tsx   # Call-to-action cards
│   │   │
│   │   ├── streams/             # Streams page components
│   │   │   ├── StreamCard.tsx   # Individual stream card
│   │   │   ├── StreamGrid.tsx   # Responsive grid layout
│   │   │   └── StreamFilters.tsx # Search & filter controls
│   │   │
│   │   ├── viewer/              # Stream viewer components
│   │   │   ├── VideoPlayer.tsx  # Video player (placeholder)
│   │   │   ├── ChatSection.tsx  # Live chat (mock messages)
│   │   │   └── TokenStats.tsx   # Token info & stats
│   │   │
│   │   ├── creator/             # Stream creation components
│   │   │   ├── StreamKeyDisplay.tsx # Stream key with copy
│   │   │   └── OBSInstructions.tsx  # OBS setup guide
│   │   │
│   │   ├── shared/              # Shared components
│   │   │   ├── Logo.tsx         # Bags logo
│   │   │   ├── ThemeToggle.tsx  # Dark/light mode switcher
│   │   │   ├── WalletButton.tsx # Connect wallet button (UI only)
│   │   │   └── CABanner.tsx     # Contract address banner (NEW)
│   │   │
│   │   └── providers/
│   │       └── theme-provider.tsx # next-themes wrapper
│   │
│   ├── lib/
│   │   ├── utils.ts             # Utility functions (cn helper)
│   │   └── constants.ts         # Site config, routes, features
│   │
│   ├── data/
│   │   └── mockStreams.ts       # Mock data for development
│   │
│   └── types/
│       └── index.ts             # TypeScript type definitions
│
├── public/                      # Static assets (images, icons)
├── components.json              # shadcn/ui configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

---

## 🔑 Key Files Explained

### Core Configuration Files

**`src/app/layout.tsx`**
- Root layout component
- Wraps entire app with ThemeProvider for dark/light mode
- Includes CA Banner, Navbar and Footer on all pages
- Sets up fonts and metadata

**`src/app/globals.css`**
- Global CSS with Tailwind imports
- Defines color palette for light and dark modes
- Light Green/Black accent colors
- Custom utility classes (glow effects, gradients)

**`tailwind.config.ts`**
- Tailwind CSS configuration (auto-generated by shadcn/ui)

**`components.json`**
- shadcn/ui configuration
- Defines where components are installed

### Data Layer

**`src/data/mockStreams.ts`**
- Mock stream data for development
- Mock token data
- Mock chat messages
- Helper functions: `getLiveStreams()`, `getStreamById()`, etc.
- **Replace with Supabase queries when backend is ready**

**`src/types/index.ts`**
- TypeScript interfaces for Stream, Token, ChatMessage
- StreamFilter type for filtering

### Layout Components

**`src/components/shared/CABanner.tsx`** (NEW)
- Contract address display at top of page
- Copy to clipboard functionality
- Sticky positioning

**`src/components/layout/Navbar.tsx`**
- Sticky navigation bar
- Logo, nav links (About, Streams)
- X (Twitter) link
- Theme toggle button
- Connect Wallet button
- Mobile hamburger menu

**`src/components/layout/Footer.tsx`**
- Footer with links and copyright
- Uses site constants

### Shared Components

**`src/components/shared/WalletButton.tsx`**
- Connect wallet button with dropdown
- States: disconnected, connecting, connected
- Mock functionality (ready for Solana wallet integration)

**`src/components/shared/ThemeToggle.tsx`**
- Sun/Moon icon button
- Switches between dark and light mode
- Uses next-themes

**`src/components/shared/Logo.tsx`**
- Bags logo with SVG icon
- Configurable size (sm, md, lg)

---

## 🎨 Design System

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

### Custom Utility Classes

Defined in `src/app/globals.css`:
- `glow-green` - Large green glow effect
- `glow-green-sm` - Small green glow effect
- `text-gradient-green` - Green gradient text
- `bg-gradient-green` - Green gradient background
- `bg-gradient-green-subtle` - Subtle green gradient background

---

## 🛠️ Development Workflow

### Adding a New Component

```bash
# Use shadcn/ui CLI to add components
npx shadcn@latest add [component-name]

# Example:
npx shadcn@latest add select
```

### File Naming Conventions

- **Pages**: `page.tsx` (Next.js App Router convention)
- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Types**: `index.ts` in types folder

### Code Organization

- **Server Components**: Default in App Router
- **Client Components**: Add `"use client"` directive
- **Shared logic**: Extract to `src/lib/`
- **Constants**: Keep in `src/lib/constants.ts`

---

## 📌 Backend Integration Guide

The frontend is ready for backend integration. Here's what needs to be connected:

### 1. Set Up Supabase

```bash
# Install Supabase client
npm install @supabase/supabase-js

# Install Supabase Auth helpers for Next.js (optional)
npm install @supabase/auth-helpers-nextjs
```

### 2. Environment Variables

Create `.env.local` in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_CONTRACT_ADDRESS=your_token_contract_address
```

### 3. Create Supabase Client

Create `src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### 4. Database Schema

Recommended Supabase tables:

**`streams` table:**
```sql
create table streams (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  creator_address text not null,
  creator_display_name text,
  token_address text not null,
  token_symbol text not null,
  token_name text not null,
  stream_key text not null,
  is_live boolean default false,
  viewer_count integer default 0,
  peak_viewers integer default 0,
  started_at timestamp with time zone default now(),
  ended_at timestamp with time zone,
  created_at timestamp with time zone default now()
);
```

**`chat_messages` table:**
```sql
create table chat_messages (
  id uuid primary key default uuid_generate_v4(),
  stream_id uuid references streams(id),
  user_address text not null,
  user_display_name text,
  message text not null,
  created_at timestamp with time zone default now()
);
```

**`tokens` table:**
```sql
create table tokens (
  address text primary key,
  symbol text not null,
  name text not null,
  logo_url text,
  price numeric,
  price_change_24h numeric,
  market_cap numeric,
  volume_24h numeric,
  updated_at timestamp with time zone default now()
);
```

---

## 📝 Environment Variables

When adding backend, create `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Contract Address (for CA banner)
NEXT_PUBLIC_CONTRACT_ADDRESS=your_token_contract_address

# Optional: HLS streaming server
NEXT_PUBLIC_STREAM_SERVER_URL=rtmp://your-stream-server.com/live

# Optional: Solana RPC endpoint
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
```

---

Built with Next.js, TypeScript, and Tailwind CSS

Stream, watch, and earn with your favorite tokens on Bags 🎒💚
