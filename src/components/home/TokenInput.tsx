"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Check, AlertCircle, ArrowRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { validateTokenAddress } from "@/data/mockStreams";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility, otherwise omit

type ValidationState = "idle" | "validating" | "valid" | "invalid";

export function TokenInput() {
  const router = useRouter();
  const [tokenAddress, setTokenAddress] = React.useState("");
  const [validationState, setValidationState] = React.useState<ValidationState>("idle");

  const handleCheck = async () => {
    if (!tokenAddress.trim()) return;

    setValidationState("validating");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (validateTokenAddress(tokenAddress)) {
      setValidationState("valid");
    } else {
      setValidationState("invalid");
    }
  };

  const handleGoLive = () => {
    router.push(ROUTES.create);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && validationState !== "validating") {
      if (validationState === "valid") {
        handleGoLive();
      } else {
        handleCheck();
      }
    }
  };

  // Determine border color based on state
  const getBorderColor = () => {
    if (validationState === "valid") return "border-green-500/50 focus-visible:ring-green-500/30";
    if (validationState === "invalid") return "border-red-500/50 focus-visible:ring-red-500/30";
    return "border-border focus-visible:ring-primary/30";
  };

  return (
    <section className="py-24 relative overflow-hidden">
        {/* Subtle background highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 dark:via-green-950/5 to-transparent pointer-events-none" />
      
      <div className="container px-4 mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-3xl mx-auto p-8 md:p-12 bg-card/80 backdrop-blur-xl border-border shadow-2xl">
            
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Streaming Now
              </h2>
              <p className="text-muted-foreground text-lg">
                Enter your token&apos;s contract address to verify ownership and go live.
              </p>
            </div>

            <div className="max-w-xl mx-auto space-y-6">
              <div className="relative group">
                <Search className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors ${
                    validationState === "valid" ? "text-green-500" : "text-muted-foreground"
                }`} />
                
                <Input
                  type="text"
                  placeholder="0x..."
                  value={tokenAddress}
                  disabled={validationState === "validating"}
                  onChange={(e) => {
                    setTokenAddress(e.target.value);
                    if (validationState !== "idle") setValidationState("idle");
                  }}
                  onKeyDown={handleKeyDown}
                  className={`pl-12 h-14 text-lg font-mono bg-background transition-all duration-300 ${getBorderColor()}`}
                />
                
                {/* Validation Status Indicator inside Input */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                   {validationState === "validating" && <Loader2 className="h-5 w-5 animate-spin text-primary" />}
                </div>
              </div>

              {/* Animated Validation Message */}
              <div className="h-6 overflow-hidden">
                <AnimatePresence mode="wait">
                    {validationState === "valid" && (
                    <motion.div
                        key="valid"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="flex items-center justify-center gap-2 text-green-500 font-medium"
                    >
                        <Check className="h-4 w-4" />
                        <span>Token verified successfully</span>
                    </motion.div>
                    )}

                    {validationState === "invalid" && (
                    <motion.div
                        key="invalid"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="flex items-center justify-center gap-2 text-red-400 font-medium"
                    >
                        <AlertCircle className="h-4 w-4" />
                        <span>Invalid contract address. Please try again.</span>
                    </motion.div>
                    )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-border hover:bg-muted h-12 text-base"
                  onClick={handleCheck}
                  disabled={!tokenAddress.trim() || validationState === "validating" || validationState === "valid"}
                >
                   Check Token
                </Button>

                <Button
                  size="lg"
                  className={`flex-1 gap-2 h-12 text-base transition-all duration-300 ${
                      validationState === "valid" 
                      ? "bg-green-600 hover:bg-green-500 text-white shadow-[0_0_20px_-5px_rgba(34,197,94,0.4)]" 
                      : "bg-green-600 hover:bg-green-500 text-white opacity-50 cursor-not-allowed"
                  }`}
                  onClick={handleGoLive}
                  disabled={validationState !== "valid"}
                >
                  Go Live
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
