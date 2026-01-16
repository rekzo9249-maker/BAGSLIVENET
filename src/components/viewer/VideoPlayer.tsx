"use client";

import { Play, Maximize2, Volume2, VolumeX, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Stream } from "@/types";
import { cn } from "@/lib/utils";
import * as React from "react";

interface VideoPlayerProps {
  stream: Stream;
}

export function VideoPlayer({ stream }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [showControls, setShowControls] = React.useState(false);

  return (
    <div
      className="group relative w-full h-full bg-black overflow-hidden"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Background / Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
        {/* Simulate Video Content */}
        <div className={cn(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-700",
          isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
        )}>
          <div className="absolute inset-0 bg-cover bg-center opacity-50 blur-sm" style={{ backgroundImage: `url(${stream.thumbnail})` }} />
          <div className="relative z-10 flex flex-col items-center">
            <Button
              size="icon"
              className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md hover:bg-green-500 hover:scale-110 transition-all border border-white/20 mb-4 group/play"
              onClick={() => setIsPlaying(true)}
            >
              <Play className="w-8 h-8 fill-white text-white ml-1 group-hover/play:fill-black group-hover/play:text-black transition-colors" />
            </Button>
            <p className="font-medium text-white tracking-wide">Watch Stream</p>
          </div>
        </div>
      </div>

      {/* Top Overlays */}
      <div className="absolute top-4 left-4 right-4 flex justify-between z-20 pointer-events-none">
        <div className="flex gap-2">
          {stream.isLive ? (
            <Badge className="bg-red-600 hover:bg-red-600 text-white border-0 gap-1.5 px-3 py-1 shadow-lg shadow-red-900/20">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              LIVE
            </Badge>
          ) : (
            <Badge variant="secondary" className="bg-black/60 backdrop-blur text-gray-300 border-white/10">
              OFFLINE
            </Badge>
          )}
        </div>

        <Badge variant="secondary" className="bg-black/60 backdrop-blur text-white border-white/10 px-3 font-mono">
          {stream.isLive
            ? stream.viewerCount.toLocaleString() + " watching"
            : "Peak: " + stream.peakViewers.toLocaleString()}
        </Badge>
      </div>

      {/* Bottom Controls (Appears on Hover) */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-transform duration-300 z-30",
        showControls || !isPlaying ? "translate-y-0" : "translate-y-full"
      )}>
        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/20 rounded-full mb-4 cursor-pointer hover:h-1.5 transition-all">
          <div className="w-[85%] h-full bg-green-500 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon-sm" className="text-white hover:text-green-400 hover:bg-white/10" onClick={() => setIsPlaying(!isPlaying)}>
              <Play className="w-5 h-5 fill-white" />
            </Button>

            <div className="flex items-center gap-2 group/vol">
              <Button variant="ghost" size="icon-sm" className="text-white hover:text-green-400 hover:bg-white/10" onClick={() => setIsMuted(!isMuted)}>
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </Button>
              <div className="w-0 overflow-hidden group-hover/vol:w-20 transition-all duration-300">
                <Slider defaultValue={[70]} max={100} className="w-20" />
              </div>
            </div>

            <span className="text-xs text-white/70 font-mono ml-2">LIVE</span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon-sm" className="text-white hover:text-green-400 hover:bg-white/10">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon-sm" className="text-white hover:text-green-400 hover:bg-white/10">
              <Maximize2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}