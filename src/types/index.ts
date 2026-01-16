export interface Stream {
  id: string;
  title: string;
  creator: {
    address: string;
    displayName?: string;
    avatar?: string;
  };
  token: {
    address: string;
    symbol: string;
    name: string;
    logo?: string;
  };
  thumbnail?: string;
  viewerCount: number;
  peakViewers: number;
  isLive: boolean;
  startedAt: Date;
  endedAt?: Date;
  duration?: number;
}

export interface Token {
  address: string;
  symbol: string;
  name: string;
  logo?: string;
  price: number;
  priceChange24h: number;
  marketCap: number;
  volume24h: number;
}

export interface ChatMessage {
  id: string;
  user: string;
  userAddress: string;
  message: string;
  timestamp: Date;
  isCreator?: boolean;
  avatarColor?: string;
}

export type StreamFilter = "all" | "live" | "ended";
