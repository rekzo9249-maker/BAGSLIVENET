export const SITE_CONFIG = {
  name: "Bags Live",
  description: "The premier crypto livestreaming platform for token communities",
  tagline: "Stream Your Bags",
  domain: "bagslive.io",
  twitter: "https://x.com/BagsLiveSOL",
};

export const ROUTES = {
  home: "/",
  about: "/about",
  streams: "/streams",
  stream: (id: string) => `/streams/${id}`,
  create: "/create",
};

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Connect Wallet",
    description: "Link your Solana wallet to get started",
    icon: "Wallet",
  },
  {
    step: 2,
    title: "Enter Token",
    description: "Paste your token contract address",
    icon: "Coins",
  },
  {
    step: 3,
    title: "Go Live",
    description: "Start streaming to your community",
    icon: "Video",
  },
];

export const FEATURES = [
  {
    title: "Live Token Streaming",
    description: "Stream your token charts, trades, and analysis in real-time",
    icon: "TrendingUp",
  },
  {
    title: "Community Chat",
    description: "Engage with your audience through live chat",
    icon: "MessageSquare",
  },
  {
    title: "Wallet Integration",
    description: "Seamless Solana wallet connection for creators and viewers",
    icon: "Wallet",
  },
  {
    title: "Token Verification",
    description: "Verify token ownership to start streaming",
    icon: "ShieldCheck",
  },
  {
    title: "Mobile Friendly",
    description: "Watch streams anywhere on any device",
    icon: "Smartphone",
  },
  {
    title: "Real-time Stats",
    description: "Track viewer counts and engagement metrics",
    icon: "BarChart3",
  },
];
