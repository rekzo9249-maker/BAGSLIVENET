# 🚀 Quick Setup Guide for Bags

Welcome to Bags! Follow these steps to get your project up and running.

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn
- Git

## 🔧 Installation Steps

### 1. Clone or Download the Repository

If you're uploading this to GitHub, clone it:
```bash
git clone https://github.com/yourusername/bags-live.git
cd bags-live
```

Or if you downloaded it as a ZIP, extract it and navigate to the folder.

### 2. Install Dependencies

```bash
npm install
```

This will install all the required packages listed in `package.json`.

### 3. Configure Contract Address

Open `src/components/shared/CABanner.tsx` and replace the placeholder with your actual contract address:

```typescript
// Line 7
const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE"
```

Change it to:
```typescript
const contractAddress = "YourActualTokenContractAddress123456789"
```

### 4. Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:3000`

## 🎨 Customization

### Update Social Links

Edit `src/lib/constants.ts`:
```typescript
export const SITE_CONFIG = {
  name: "Bags",
  title: "Bags - Livestreaming for Crypto Communities",
  description: "Stream, watch, and earn with your favorite tokens on Bags.",
  url: "https://bags.live", // Update to your domain
  links: {
    twitter: "https://twitter.com/bagslive", // Update to your Twitter
  },
}
```

### Change Theme Colors

If you want to adjust the green shades, edit `src/app/globals.css`:
- Primary green: `#22c55e`
- Light green: `#86efac`
- Dark green: `#16a34a`

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy"

## 🔐 Environment Variables (Optional)

Create a `.env.local` file for backend integration:

```env
# Supabase (when you add backend)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Contract Address
NEXT_PUBLIC_CONTRACT_ADDRESS=your_token_contract_address

# Streaming Server (optional)
NEXT_PUBLIC_STREAM_SERVER_URL=rtmp://your-stream-server.com/live

# Solana RPC (optional)
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
```

## 📱 Project Structure

```
bags-live/
├── src/
│   ├── app/                    # Pages (Next.js App Router)
│   ├── components/             # React components
│   ├── lib/                    # Utilities and constants
│   ├── data/                   # Mock data
│   └── types/                  # TypeScript types
├── public/                     # Static assets
├── package.json               # Dependencies
├── next.config.ts             # Next.js config
└── README.md                  # Documentation
```

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Module not found errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Check Node.js version
node --version  # Should be 18+

# Update dependencies
npm update
```

## 📚 Next Steps

1. ✅ Install dependencies
2. ✅ Update contract address in CABanner.tsx
3. ✅ Update social links in constants.ts
4. ✅ Test locally with `npm run dev`
5. ✅ Push to GitHub
6. ✅ Deploy to Vercel/Netlify
7. 🔄 Add backend integration (see backend.txt)
8. 🔄 Connect real wallet functionality
9. 🔄 Set up streaming server

## 💡 Tips

- The app uses dark mode by default
- All "Bonk" references have been changed to "Bags"
- Theme is black background with green accents
- CA banner appears at the top of every page

## 🆘 Need Help?

- Check the main README.md for detailed documentation
- Review MIGRATION_GUIDE.md for more customization options
- See backend.txt for backend integration guide

---

Happy streaming with Bags! 🎒💚
