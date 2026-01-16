"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  MessageSquare,
  Search,
  Video,
  Smartphone,
  Coins,
  Zap,
  Radio,
  Wallet,
  Code2,
  ArrowRight,
  Users,
  Target,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SITE_CONFIG, ROUTES } from "@/lib/constants";

const keyFeatures = [
  {
    title: "Blockchain Verification",
    description: "On-chain proof of token creation and ownership before streaming is allowed",
    icon: ShieldCheck,
  },
  {
    title: "Real-time Chat",
    description: "Interactive chat functionality for immediate community engagement",
    icon: MessageSquare,
  },
  {
    title: "Stream Discovery",
    description: "Easy discovery of active and recently ended streams from verified creators",
    icon: Search,
  },
  {
    title: "High-Quality Streaming",
    description: "Professional-grade streaming infrastructure for crisp, reliable broadcasts",
    icon: Video,
  },
  {
    title: "Cross-Platform Access",
    description: "Stream and watch from any device with a modern web browser",
    icon: Smartphone,
  },
  {
    title: "Native Token Tipping",
    description: "Support your favorite creators by tipping them with our native token directly during streams",
    icon: Coins,
  },
];

const techStack = [
  {
    title: "Solana Blockchain",
    description: "Fast, low-cost verification of token ownership and transactions",
    icon: Zap,
  },
  {
    title: "WebRTC Streaming",
    description: "Low-latency, high-quality video streaming technology",
    icon: Radio,
  },
  {
    title: "Reown WalletConnect",
    description: "Secure wallet integration for seamless crypto authentication",
    icon: Wallet,
  },
  {
    title: "Modern Web Stack",
    description: "Next.js, TypeScript, and cloud infrastructure for reliability",
    icon: Code2,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-600/10 dark:bg-green-500/5 rounded-full blur-[120px] opacity-60 dark:opacity-40" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 dark:bg-emerald-600/5 rounded-full blur-[100px] opacity-50 dark:opacity-30" />
        </div>

        <div className="container px-4 mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center rounded-full border border-green-600/40 dark:border-green-500/30 bg-green-600/10 dark:bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-700 dark:text-green-400 mb-8">
              ABOUT
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight text-foreground">
              Revolutionizing crypto communication through{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
                verified livestreaming
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* What is Bags Live */}
      <section className="py-20 bg-muted/50 dark:bg-muted/20 border-y border-border">
        <div className="container px-4 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What is {SITE_CONFIG.name}?</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                {SITE_CONFIG.name} is a cutting-edge livestreaming platform for the Solana ecosystem, providing verified token creators
                with professional streaming tools. We address a critical problem in the crypto space: the proliferation of fake streams
                and impersonators who deceive communities by pretending to be legitimate token creators.
              </p>
              <p>
                Our platform provides a secure, verifiable environment where only authenticated token creators
                can broadcast to their communities. By leveraging blockchain technology and wallet verification,
                we ensure that every stream comes from a verified source, building trust and authenticity in
                crypto communications.
              </p>
              <p>
                Whether you&apos;re launching a new token, providing project updates, hosting community events, or
                engaging in real-time discussions about market developments, {SITE_CONFIG.name} provides the
                infrastructure for meaningful, verified interactions between creators and their communities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-card border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-500/15 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To eliminate fraud and impersonation in crypto communications by providing a trustworthy
                  platform where only verified token creators can engage with their communities through live streaming.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-card border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-500/15 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the premier livestreaming platform for authentic crypto communication on Solana. We envision fostering transparent and trustworthy
                  relationships between verified creators and their communities worldwide, driving growth and
                  adoption across the ecosystem.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/50 dark:bg-muted/20 border-y border-border">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Key Features</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-card border-border shadow-sm hover:shadow-md hover:border-green-500/50 dark:hover:border-green-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-500/15 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Built with Modern Technology</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-card border-border shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-500/15 dark:to-emerald-500/15 flex items-center justify-center shrink-0">
                    <tech.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-foreground">{tech.title}</h3>
                    <p className="text-muted-foreground text-sm">{tech.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Token */}
      <section className="py-20 bg-muted/50 dark:bg-muted/20 border-y border-border">
        <div className="container px-4 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10 border-green-200 dark:border-green-500/20 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Platform Token</h2>
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Contract Address:</p>
                <code className="text-sm md:text-base font-mono bg-white/80 dark:bg-background/50 px-4 py-3 rounded-lg border border-green-200 dark:border-border block overflow-x-auto text-muted-foreground italic">
                  Coming soon...
                </code>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The {SITE_CONFIG.name} token powers our ecosystem, providing utility for premium streaming features,
                governance participation, and community rewards. Token holders gain access to exclusive features
                and have a voice in the platform&apos;s future development.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-20">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Join Our Community</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {SITE_CONFIG.name} is more than just a platform—it&apos;s a community of crypto enthusiasts, token creators,
              and innovators working together to build the future of decentralized communication.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-card border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-500/15 flex items-center justify-center mb-6">
                  <Video className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">For Token Creators</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                    Build authentic relationships with your community
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                    Provide real-time project updates and announcements
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                    Host interactive Q&A sessions and AMAs
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                    Demonstrate transparency and credibility
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-card border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-500/15 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">For Community Members</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    Connect directly with verified token creators
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    Get firsthand information about your investments
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    Participate in live discussions and feedback
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    Discover new verified projects and opportunities
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container px-4 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden p-12 text-center bg-gradient-to-b from-green-50 to-white dark:from-green-500/10 dark:to-background border-green-200 dark:border-green-500/20 shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent" />

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                Join the revolution in crypto communication. Whether you&apos;re a creator or community member,
                {" "}{SITE_CONFIG.name} provides the tools you need for authentic, verified interactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500 text-white shadow-lg shadow-green-600/25"
                  asChild
                >
                  <Link href={ROUTES.create} className="gap-2">
                    Start Streaming <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-base border-border bg-white dark:bg-transparent hover:bg-muted"
                  asChild
                >
                  <Link href={ROUTES.streams}>Browse Streams</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
