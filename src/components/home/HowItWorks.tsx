"use client";

import { motion } from "framer-motion";
import { Wallet, Coins, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import { HOW_IT_WORKS } from "@/lib/constants";

const iconMap = {
  Wallet,
  Coins,
  Video,
};

export function HowItWorks() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to start streaming your token journey to the world.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />

          {HOW_IT_WORKS.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <Card className="h-full p-8 bg-background/50 backdrop-blur-md border-border hover:border-primary/30 transition-colors duration-300 text-center flex flex-col items-center group">
                  
                  {/* Step Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-background border-4 border-background flex items-center justify-center relative z-10 shadow-lg">
                      <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                         {step.step}
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6 w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary/80 group-hover:text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}