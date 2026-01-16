"use client";

import { TrendingUp, TrendingDown, Copy, ExternalLink, Activity, DollarSign, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Token } from "@/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TokenStatsProps {
  token: Token;
}

function formatNumber(num: number): string {
  if (num >= 1e9) return (num / 1e9).toFixed(2) + "B";
  if (num >= 1e6) return (num / 1e6).toFixed(2) + "M";
  if (num >= 1e3) return (num / 1e3).toFixed(2) + "K";
  return num.toFixed(2);
}

function formatPrice(price: number): string {
  if (price < 0.0001) return price.toExponential(4);
  if (price < 1) return price.toFixed(6);
  return price.toFixed(2);
}

export function TokenStats({ token }: TokenStatsProps) {
  const isPositive = token.priceChange24h >= 0;

  const handleCopy = () => {
    navigator.clipboard.writeText(token.address);
  };

  const solscanUrl = "https://solscan.io/token/" + token.address;

  return (
    <Card className="glass overflow-hidden relative">
        {/* Decorative Background Mesh */}
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl" />
        
        <div className="p-6 relative z-10">
            {/* Header Section */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-green flex items-center justify-center shadow-lg shadow-green-500/20">
                        <span className="font-bold text-white text-lg">{token.symbol[0]}</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl leading-none">{token.name}</h3>
                        <p className="text-sm text-green-400 font-mono mt-1">${token.symbol}</p>
                    </div>
                </div>
                
                <div className="text-right">
                    <motion.p 
                        key={token.price}
                        initial={{ scale: 1.1, color: "#fff" }}
                        animate={{ scale: 1, color: "var(--foreground)" }}
                        className="font-mono text-2xl font-bold tracking-tight"
                    >
                        ${formatPrice(token.price)}
                    </motion.p>
                    <div className={cn(
                        "flex items-center justify-end gap-1 text-sm font-medium",
                        isPositive ? "text-green-400" : "text-red-400"
                    )}>
                        {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        <span>{isPositive ? "+" : ""}{token.priceChange24h.toFixed(2)}%</span>
                    </div>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-green-500/30 transition-colors">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <DollarSign className="w-3 h-3" />
                        <span className="text-xs uppercase tracking-wider">Market Cap</span>
                    </div>
                    <p className="font-bold text-lg">${formatNumber(token.marketCap)}</p>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-green-500/30 transition-colors">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <BarChart3 className="w-3 h-3" />
                        <span className="text-xs uppercase tracking-wider">24h Volume</span>
                    </div>
                    <p className="font-bold text-lg">${formatNumber(token.volume24h)}</p>
                </div>
            </div>

            {/* Contract Address */}
            <div className="space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                    <Activity className="w-3 h-3" /> Contract Address
                </p>
                <div className="flex items-center gap-2 p-1 rounded-lg bg-black/20 border border-white/5">
                    <code className="flex-1 text-xs font-mono text-muted-foreground px-2 truncate">
                        {token.address}
                    </code>
                    <div className="flex gap-1 pr-1">
                        <Button 
                            variant="ghost" 
                            size="icon-sm" 
                            className="h-7 w-7 hover:text-green-400 hover:bg-green-500/10" 
                            onClick={handleCopy}
                            title="Copy Address"
                        >
                            <Copy className="w-3.5 h-3.5" />
                        </Button>
                        <Button 
                            variant="ghost" 
                            size="icon-sm" 
                            className="h-7 w-7 hover:text-green-400 hover:bg-green-500/10" 
                            asChild
                            title="View on Solscan"
                        >
                            <a href={solscanUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </Card>
  );
}
