"use client";

import * as React from "react";
import { Stream } from "@/types";
import { StreamCard } from "./StreamCard";
import { Radio } from "lucide-react";

interface StreamGridProps {
  streams: Stream[];
  title?: string;
  emptyMessage?: React.ReactNode;
}

export function StreamGrid({
  streams,
  title,
  emptyMessage = "No streams found",
}: StreamGridProps) {
  return (
    <div className="space-y-6">
      {/* Optional Title Section */}
      {title && (
        <div className="flex items-end justify-between border-b border-white/5 pb-2">
          <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
            {title}
            {title.includes("Live") && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
            )}
          </h2>
          <span className="text-sm font-mono text-muted-foreground bg-white/5 px-2 py-0.5 rounded">
            {streams.length}
          </span>
        </div>
      )}

      {/* Grid Content */}
      {streams.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white/5 border border-white/5 rounded-2xl border-dashed">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <Radio className="w-6 h-6 text-muted-foreground/50" />
            </div>
            {typeof emptyMessage === "string" ? (
                <p className="text-muted-foreground">{emptyMessage}</p>
            ) : (
                emptyMessage
            )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {streams.map((stream, index) => (
            <StreamCard key={stream.id} stream={stream} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}