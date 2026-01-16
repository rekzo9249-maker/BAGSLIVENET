"use client";

import * as React from "react";
import { Eye, EyeOff, Copy, RefreshCw, ShieldAlert, Check, Server } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateStreamKey } from "@/data/mockStreams";
import { motion, AnimatePresence } from "framer-motion";

export function StreamKeyDisplay() {
    const [streamKey, setStreamKey] = React.useState("");
    const [showKey, setShowKey] = React.useState(false);
    const [copiedKey, setCopiedKey] = React.useState(false);
    const [copiedUrl, setCopiedUrl] = React.useState(false);
    const [isRegenerating, setIsRegenerating] = React.useState(false);

    const serverUrl = "rtmp://stream.bagslive.io/live";

    React.useEffect(() => {
        setStreamKey(generateStreamKey());
    }, []);

    const copyToClipboard = async (text: string, isUrl: boolean) => {
        await navigator.clipboard.writeText(text);
        if (isUrl) {
            setCopiedUrl(true);
            setTimeout(() => setCopiedUrl(false), 2000);
        } else {
            setCopiedKey(true);
            setTimeout(() => setCopiedKey(false), 2000);
        }
    };

    const handleRegenerate = () => {
        setIsRegenerating(true);
        // Simulate API call
        setTimeout(() => {
            setStreamKey(generateStreamKey());
            setShowKey(false);
            setIsRegenerating(false);
        }, 800);
    };

    return (
        <Card className="p-6 md:p-8 bg-card/80 backdrop-blur-xl border-border shadow-2xl relative overflow-hidden">
            {/* Top Warning Banner */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-50" />

            <div className="flex items-start gap-3 mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                    <h3 className="font-bold text-red-100 text-sm">Security Warning</h3>
                    <p className="text-xs text-red-200/70 mt-1">
                        Never share your stream key. Anyone with this key can stream content to your channel immediately.
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Server URL Section */}
                <div className="space-y-2">
                    <Label className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Server URL</Label>
                    <div className="flex gap-2">
                        <div className="relative flex-1 group">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                <Server className="w-4 h-4" />
                            </div>
                            <Input
                                readOnly
                                value={serverUrl}
                                className="pl-10 font-mono text-sm bg-background border-border focus-visible:ring-primary/50"
                            />
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => copyToClipboard(serverUrl, true)}
                            className="border-border hover:bg-muted hover:text-primary transition-colors"
                        >
                            <AnimatePresence mode="wait">
                                {copiedUrl ? (
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                        <Check className="w-4 h-4 text-green-500" />
                                    </motion.div>
                                ) : (
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                        <Copy className="w-4 h-4" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Button>
                    </div>
                </div>

                {/* Stream Key Section */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Stream Key</Label>
                        {copiedKey && <span className="text-xs text-green-500 font-medium animate-pulse">Copied!</span>}
                    </div>
                    <div className="flex gap-2">
                        <div className="relative flex-1">
                            <Input
                                type={showKey ? "text" : "password"}
                                value={streamKey}
                                readOnly
                                className={`pr-10 font-mono text-sm bg-background border-border focus-visible:ring-primary/50 ${!showKey ? 'tracking-widest' : ''}`}
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:text-primary"
                                onClick={() => setShowKey(!showKey)}
                            >
                                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </Button>
                        </div>
                        <Button
                            variant="default"
                            size="icon"
                            onClick={() => copyToClipboard(streamKey, false)}
                            className="bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-500/20"
                        >
                            <AnimatePresence mode="wait">
                                {copiedKey ? (
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                        <Check className="w-4 h-4" />
                                    </motion.div>
                                ) : (
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                        <Copy className="w-4 h-4" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Button>
                    </div>
                </div>

                <Button
                    variant="ghost"
                    className={`w-full gap-2 text-muted-foreground hover:text-red-400 hover:bg-red-500/5 border border-transparent hover:border-red-500/20 transition-all ${isRegenerating ? 'opacity-50 pointer-events-none' : ''}`}
                    onClick={handleRegenerate}
                >
                    <RefreshCw className={`w-4 h-4 ${isRegenerating ? 'animate-spin' : ''}`} />
                    {isRegenerating ? 'Regenerating...' : 'Regenerate Stream Key'}
                </Button>
            </div>
        </Card>
    );
}
