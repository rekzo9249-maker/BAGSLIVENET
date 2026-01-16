"use client";

import * as React from "react";
import { Send, Users, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mockChatMessages } from "@/data/mockStreams";
import { ChatMessage } from "@/types";
import { cn } from "@/lib/utils";

interface ChatSectionProps {
  streamId: string;
  isLive: boolean;
  viewerCount: number;
}

export function ChatSection({ streamId, isLive, viewerCount }: ChatSectionProps) {
  const [messages, setMessages] = React.useState<ChatMessage[]>(mockChatMessages);
  const [inputValue, setInputValue] = React.useState("");
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat only (not the page)
  React.useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  // Simulate incoming messages
  React.useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      const randomMessages = [
        "This is great!", "LFG!", "Nice analysis", "Bullish 🚀", 
        "Thanks for streaming!", "First time here", "GM everyone", "To the moon! 🌕",
        "What's the contract?", "Based dev"
      ];
      const randomUsers = ["CryptoFan", "Trader123", "HODLer", "DiamondHands", "MoonBoy", "Whale"];

      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        user: randomUsers[Math.floor(Math.random() * randomUsers.length)],
        userAddress: Math.random().toString(36).substring(2, 8) + "...",
        message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev.slice(-50), newMessage]);
    }, 4000);

    return () => clearInterval(interval);
  }, [isLive]);

  const formatTime = (date: Date) => {
    // Use consistent formatting to avoid hydration mismatches
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${displayMinutes} ${ampm}`;
  };

  return (
    <Card className="flex flex-col h-[600px] lg:h-full bg-card/80 backdrop-blur-xl border-border shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="p-3 border-b border-border bg-muted/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-sm tracking-wide">Live Chat</h3>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-muted border border-border text-xs text-muted-foreground">
          <Users className="w-3 h-3" />
          <span className="font-mono">{viewerCount.toLocaleString()}</span>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4">
            {messages.map((msg) => (
            <div key={msg.id} className="group flex gap-3 text-sm animate-in slide-in-from-left-2 duration-300">
                <Avatar className="h-8 w-8 flex-shrink-0 border border-border ring-2 ring-transparent group-hover:ring-primary/20 transition-all">
                <AvatarFallback className="text-[10px] font-bold bg-gradient-to-br from-green-600 to-emerald-600 dark:from-green-900 dark:to-emerald-900 text-white dark:text-green-100">
                    {msg.user[0]}
                </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-0.5">
                        <span className="font-bold text-primary text-xs hover:underline cursor-pointer">
                            {msg.user}
                        </span>
                        <span className="text-[10px] text-muted-foreground/50">{formatTime(msg.timestamp)}</span>
                    </div>
                    <p className="text-foreground/90 dark:text-gray-300 leading-relaxed break-words">{msg.message}</p>
                </div>
            </div>
            ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t border-border bg-muted/30">
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                if (!inputValue.trim()) return;
                const newMsg = {
                    id: Date.now().toString(),
                    user: "You",
                    userAddress: "0x00...00",
                    message: inputValue,
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, newMsg]);
                setInputValue("");
            }}
            className="flex gap-2 relative"
        >
          <Input
            placeholder={isLive ? "Say something..." : "Stream ended"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={!isLive}
            className="flex-1 bg-background border-border focus-visible:ring-primary/50 pr-10"
          />
          <Button 
            type="submit" 
            size="icon" 
            disabled={!isLive || !inputValue.trim()}
            className={cn(
                "absolute right-1 top-1 h-7 w-7 transition-all",
                inputValue.trim() ? "bg-primary text-primary-foreground" : "bg-transparent text-muted-foreground hover:bg-muted"
            )}
          >
            <Send className="w-3.5 h-3.5" />
          </Button>
        </form>
        {!isLive && (
          <p className="text-[10px] text-red-400 mt-2 text-center">
            Chat disabled • Stream ended
          </p>
        )}
      </div>
    </Card>
  );
}
