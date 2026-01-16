"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Stream } from "@/types";
import { ROUTES } from "@/lib/constants";

interface StreamCardProps {
  stream: Stream;
  index?: number;
}

function formatDuration(ms: number): string {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff / 3600000);
  const minutes = Math.floor(diff / 60000);

  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  return `${minutes}m ago`;
}

export function StreamCard({ stream, index = 0 }: StreamCardProps) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.03 }}
    >
      <Link href={ROUTES.stream(stream.id)} className="block group">
        <div className="rounded-xl overflow-hidden bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-green-500/30 transition-all duration-200">
          {/* Thumbnail */}
          <div className="relative aspect-video bg-black/20">
            {stream.thumbnail && !imageError ? (
              <img
                src={stream.thumbnail}
                alt={stream.title}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-green-900/30 to-black/50" />
            )}

            {/* Live/Duration Badge */}
            <div className="absolute top-3 left-3">
              {stream.isLive ? (
                <Badge className="bg-red-500 text-white border-0 gap-1.5 px-2.5 py-1 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  LIVE
                </Badge>
              ) : (
                <Badge className="bg-black/70 text-white/80 border-0 backdrop-blur-sm gap-1 px-2 py-1 text-xs">
                  <Clock className="w-3 h-3" />
                  {stream.duration ? formatDuration(stream.duration) : "Ended"}
                </Badge>
              )}
            </div>

            {/* Viewers */}
            <div className="absolute bottom-3 right-3">
              <Badge className="bg-black/70 text-white border-0 backdrop-blur-sm gap-1.5 px-2 py-1 text-xs">
                <Users className="w-3 h-3 text-green-400" />
                {stream.isLive ? stream.viewerCount.toLocaleString() : stream.peakViewers.toLocaleString()}
              </Badge>
            </div>
          </div>

          {/* Info */}
          <div className="p-4">
            <div className="flex gap-3">
              <Avatar className="h-9 w-9 shrink-0">
                <AvatarImage src={stream.creator.avatar} />
                <AvatarFallback className="bg-green-600 text-white text-xs font-bold">
                  {stream.creator.displayName?.[0] || "U"}
                </AvatarFallback>
              </Avatar>

              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-sm leading-snug line-clamp-2 group-hover:text-green-400 transition-colors">
                  {stream.title}
                </h3>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs text-muted-foreground truncate">
                    {stream.creator.displayName || stream.creator.address}
                  </span>
                  <span className="text-muted-foreground/40">•</span>
                  <span className="text-xs text-muted-foreground/60 shrink-0">
                    {formatTimeAgo(stream.startedAt)}
                  </span>
                </div>
              </div>
            </div>

            {/* Token badge */}
            <div className="mt-3 pt-3 border-t border-white/5">
              <Badge variant="outline" className="text-xs font-mono bg-green-500/10 border-green-500/20 text-green-400 hover:bg-green-500/20">
                ${stream.token.symbol}
              </Badge>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}