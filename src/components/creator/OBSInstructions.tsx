"use client";

import { ExternalLink, Monitor, Settings, Play, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Monitor,
    title: "Download OBS Studio",
    description: "Download and install OBS Studio from the official website if you haven't already.",
    link: "https://obsproject.com/download",
    linkText: "Download OBS",
  },
  {
    icon: Settings,
    title: "Configure Stream Settings",
    description: "Go to Settings > Stream. Select 'Custom' as your service and enter the Server URL and Stream Key from above.",
  },
  {
    icon: Play,
    title: "Start Streaming",
    description: "Set up your scenes and sources, then click 'Start Streaming' to go live!",
  },
];

export function OBSInstructions() {
  return (
    <Card className="h-full flex flex-col p-6 md:p-8 bg-card/80 backdrop-blur-xl border-border shadow-2xl relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 dark:bg-green-500/5 rounded-bl-full blur-2xl pointer-events-none" />

      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Monitor className="w-5 h-5 text-primary" />
        Setup Instructions
      </h3>

      <div className="space-y-8 flex-1">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4 group">
            <div className="flex-shrink-0 relative">
              <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 font-bold text-sm z-10 relative group-hover:bg-green-500 group-hover:text-black transition-colors duration-300">
                {index + 1}
              </div>
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-full bg-border" />
              )}
            </div>
            <div className="flex-1 pb-2">
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {step.title}
              </h4>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                {step.description}
              </p>
              {step.link && (
                <Button variant="link" className="px-0 mt-1 h-auto text-primary hover:text-primary/80" asChild>
                  <a href={step.link} target="_blank" rel="noopener noreferrer">
                    {step.linkText}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 rounded-xl bg-muted/30 border border-border">
        <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            Recommended Settings
        </h4>
        <div className="grid grid-cols-2 gap-y-2 text-sm">
           <span className="text-muted-foreground">Resolution:</span>
           <span className="font-mono text-foreground">1920x1080</span>
           
           <span className="text-muted-foreground">Frame Rate:</span>
           <span className="font-mono text-foreground">30 or 60 FPS</span>
           
           <span className="text-muted-foreground">Bitrate:</span>
           <span className="font-mono text-foreground">4000 Kbps</span>
           
           <span className="text-muted-foreground">Encoder:</span>
           <span className="font-mono text-foreground">NVENC (GPU)</span>
        </div>
      </div>
    </Card>
  );
}
