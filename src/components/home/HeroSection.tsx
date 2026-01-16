"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Radio, Zap, Shield, Users, Sparkles, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG, ROUTES } from "@/lib/constants";
import { getLiveStreams } from "@/data/mockStreams";
import { useWallet } from "@/context/WalletContext";

export function HeroSection() {
  const router = useRouter();
  const liveStreams = getLiveStreams();
  const liveCount = liveStreams.length;

  const { wallet, isConnecting, connect } = useWallet();

  const handleStartStreaming = async () => {
    if (wallet) {
      router.push(ROUTES.create);
      return;
    }

    await connect();
    // After connecting, go to create page
    router.push(ROUTES.create);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-500/20 rounded-full blur-[150px] transform-gpu"
        />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] opacity-50 transform-gpu" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-green-400/10 rounded-full blur-[80px] opacity-40 transform-gpu" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container px-4 mx-auto max-w-6xl relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Live Badge */}
            {liveCount > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link href={ROUTES.streams}>
                  <Badge className="gap-2 px-4 py-2.5 bg-green-500/10 hover:bg-green-500/20 text-green-400 border-green-500/30 cursor-pointer transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    {liveCount} Stream{liveCount > 1 ? "s" : ""} Live Now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Badge>
                </Link>
              </motion.div>
            )}

            {/* Title */}
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-[200%_auto] animate-gradient drop-shadow-[0_0_30px_rgba(74,222,128,0.3)]">
                    {SITE_CONFIG.name}
                  </span>
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-muted-foreground font-medium"
              >
                {SITE_CONFIG.tagline}
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-lg"
            >
              The premier livestreaming platform for crypto. Stream your analysis, connect with holders, and build your community.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-semibold bg-green-600 hover:bg-green-500 text-white shadow-xl shadow-green-600/30 gap-2 group transition-all hover:scale-[1.02] hover:shadow-green-600/40"
                onClick={handleStartStreaming}
                disabled={isConnecting}
              >
                {isConnecting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Connecting...
                  </>
                ) : wallet ? (
                  <>
                    <Radio className="w-5 h-5 group-hover:animate-pulse" />
                    Start Streaming
                    <Sparkles className="w-4 h-4 ml-1 opacity-70" />
                  </>
                ) : (
                  <>
                    <Wallet className="w-5 h-5" />
                    Connect & Stream
                  </>
                )}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg border-green-500/30 hover:bg-green-500/10 hover:border-green-500/50 gap-2 transition-all"
                asChild
              >
                <Link href={ROUTES.streams}>
                  Watch Streams
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Radio, title: "Live Streaming", desc: "HD quality broadcasts" },
              { icon: Shield, title: "Verified", desc: "Wallet authentication" },
              { icon: Users, title: "Community", desc: "Live chat & tips" },
              { icon: Zap, title: "Instant", desc: "Go live in seconds" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="p-5 h-full bg-white/5 backdrop-blur-md border-white/10 hover:border-green-500/30 transition-all duration-300 group hover:bg-white/[0.08]">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}