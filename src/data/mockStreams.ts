import { Stream, Token, ChatMessage } from "@/types";

// Helper to get consistent avatar colors
const getAvatarColor = (name: string) => {
  const colors = [
    "bg-red-500", "bg-orange-500", "bg-amber-500", "bg-green-500",
    "bg-emerald-500", "bg-teal-500", "bg-green-500", "bg-sky-500",
    "bg-blue-500", "bg-indigo-500", "bg-violet-500", "bg-purple-500",
    "bg-fuchsia-500", "bg-pink-500", "bg-rose-500"
  ];
  return colors[name.length % colors.length];
};

export const mockStreams: Stream[] = [
  {
    id: "1",
    title: "Launch Time",
    creator: {
      address: "7xKX...3mNp",
      displayName: "SolanaAlpha",
      avatar: "", // Image URL here if needed
    },
    token: {
      address: "So11111111111111111111111111111111111111112",
      symbol: "SOL",
      name: "Solana",
    },
    thumbnail: "", // Image URL here if needed
    viewerCount: 34,
    peakViewers: 34,
    isLive: true,
    startedAt: new Date(Date.now() - 60000), // 1 minute ago
  },
];

export const mockTokens: Token[] = [
  {
    address: "So11111111111111111111111111111111111111112",
    symbol: "SOL",
    name: "Solana",
    price: 178.45,
    priceChange24h: 5.4,
    marketCap: 65000000000,
    volume24h: 2500000000,
  },
  {
    address: "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
    symbol: "JUP",
    name: "Jupiter",
    price: 1.24,
    priceChange24h: 8.9,
    marketCap: 1700000000,
    volume24h: 180000000,
  },
  {
    address: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
    symbol: "WIF",
    name: "dogwifhat",
    price: 2.85,
    priceChange24h: -2.1,
    marketCap: 2800000000,
    volume24h: 420000000,
  },
  {
    address: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
    symbol: "BONK",
    name: "Bonk",
    price: 0.00002345,
    priceChange24h: 12.5,
    marketCap: 1500000000,
    volume24h: 125000000,
  },
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: "1",
    user: "SolTrader",
    userAddress: "7xKX...3mNp",
    message: "Great analysis! 🔥",
    timestamp: new Date(Date.now() - 60000),
    avatarColor: getAvatarColor("SolTrader"),
  },
  {
    id: "2",
    user: "CryptoNinja",
    userAddress: "9aBC...xYz2",
    message: "What's your take on the current market?",
    timestamp: new Date(Date.now() - 45000),
    avatarColor: getAvatarColor("CryptoNinja"),
  },
  {
    id: "3",
    user: "DeFiMaxi",
    userAddress: "4dEF...kLm9",
    message: "This is why I love this platform",
    timestamp: new Date(Date.now() - 30000),
    avatarColor: getAvatarColor("DeFiMaxi"),
  },
  {
    id: "4",
    user: "ChainExplorer",
    userAddress: "2gHI...nOp5",
    message: "Can you show the 4H chart?",
    timestamp: new Date(Date.now() - 15000),
    avatarColor: getAvatarColor("ChainExplorer"),
  },
];

// Helper Functions
export const getLiveStreams = () => mockStreams.filter((s) => s.isLive);
export const getEndedStreams = () => mockStreams.filter((s) => !s.isLive);
export const getStreamById = (id: string) => mockStreams.find((s) => s.id === id);
export const getTokenByAddress = (address: string) =>
  mockTokens.find((t) => t.address === address);

export function validateTokenAddress(address: string): boolean {
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
  return base58Regex.test(address);
}

export function generateStreamKey(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "live_";
  for (let i = 0; i < 32; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}