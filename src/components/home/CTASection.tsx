"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Video, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ROUTES } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-20 md:py-32 relative z-10">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {/* Start Streaming CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <Card className="group relative overflow-hidden p-8 h-full bg-gradient-to-br from-green-500/10 dark:from-green-950/30 to-background border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-2xl shadow-black/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.1),transparent_50%)]" />
              
              <div className="relative flex flex-col h-full z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">Start Streaming</h3>
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                  Verify your token ownership and create a livestream for your community. Share charts, analysis, and updates in real-time.
                </p>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)]">
                  <Link href={ROUTES.create} className="flex items-center justify-center gap-2">
                    Create Stream <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Watch Streams CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <Card className="group relative overflow-hidden p-8 h-full bg-card border-border hover:border-primary/30 transition-all duration-300 shadow-lg">
              <div className="relative flex flex-col h-full z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">Watch Streams</h3>
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                  Discover and watch live streams from verified token creators. Join the conversation and engage with your favorite communities.
                </p>
                <Button variant="outline" asChild className="w-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                  <Link href={ROUTES.streams}>Browse Streams</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
