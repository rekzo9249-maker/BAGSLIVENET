"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, Check, AlertCircle, Loader2, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StreamKeyDisplay } from "@/components/creator/StreamKeyDisplay";
import { OBSInstructions } from "@/components/creator/OBSInstructions";
import { validateTokenAddress } from "@/data/mockStreams";
import { useWallet } from "@/context/WalletContext";

type ValidationState = "idle" | "validating" | "valid" | "invalid";

export default function CreateStreamPage() {
  const { wallet, isConnecting, connect } = useWallet();
  const [tokenAddress, setTokenAddress] = React.useState("");
  const [streamTitle, setStreamTitle] = React.useState("");
  const [validationState, setValidationState] = React.useState<ValidationState>("idle");
  const [isVerified, setIsVerified] = React.useState(false);

  const handleValidate = async () => {
    if (!tokenAddress.trim()) return;

    setValidationState("validating");
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (validateTokenAddress(tokenAddress)) {
      setValidationState("valid");
      setIsVerified(true);
    } else {
      setValidationState("invalid");
    }
  };

  const shortenAddress = (addr: string) => `${addr.slice(0, 4)}...${addr.slice(-4)}`;

  return (
    <div className="container px-4 py-8 mx-auto max-w-7xl min-h-[80vh]">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-gradient-green">Start Streaming</span>
        </h1>
        <p className="text-muted-foreground">
          Connect your wallet and verify your token to start streaming
        </p>
      </motion.div>

      {/* Step 1: Connect Wallet */}
      {!wallet ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-md mx-auto"
        >
          <Card className="p-8 bg-card/50 backdrop-blur border-green-500/20 text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <Wallet className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Connect Your Wallet</h2>
            <p className="text-muted-foreground mb-6">
              Connect your Phantom wallet to verify token ownership and start streaming.
            </p>
            <Button
              size="lg"
              className="w-full h-14 text-lg bg-green-600 hover:bg-green-500 text-white gap-2"
              onClick={connect}
              disabled={isConnecting}
            >
              {isConnecting ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Connecting...
                </>
              ) : (
                <>
                  <Wallet className="w-5 h-5" />
                  Connect Phantom Wallet
                </>
              )}
            </Button>
          </Card>
        </motion.div>
      ) : (
        /* Step 2 & 3: CA Input & Stream Setup */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Settings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Connected Wallet Badge */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Connected: <span className="font-mono text-green-400">{shortenAddress(wallet)}</span>
            </div>

            {/* Token Verification */}
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <h3 className="font-semibold mb-4">Paste Contract Address</h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Token Contract Address (CA)
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Paste token CA here..."
                      value={tokenAddress}
                      onChange={(e) => {
                        setTokenAddress(e.target.value);
                        if (validationState !== "idle") {
                          setValidationState("idle");
                          setIsVerified(false);
                        }
                      }}
                      className="pl-9 font-mono text-sm"
                      disabled={isVerified}
                    />
                  </div>

                  {validationState === "valid" && (
                    <div className="flex items-center gap-2 text-green-500 mt-2">
                      <Check className="h-4 w-4" />
                      <span className="text-sm">Token verified successfully</span>
                    </div>
                  )}

                  {validationState === "invalid" && (
                    <div className="flex items-center gap-2 text-destructive mt-2">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">Invalid token address</span>
                    </div>
                  )}
                </div>

                {!isVerified && (
                  <Button
                    className="w-full bg-green-600 hover:bg-green-500"
                    onClick={handleValidate}
                    disabled={!tokenAddress.trim() || validationState === "validating"}
                  >
                    {validationState === "validating" ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      "Verify Token"
                    )}
                  </Button>
                )}
              </div>
            </Card>

            {/* Stream Settings */}
            {isVerified && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                  <h3 className="font-semibold mb-4">Stream Settings</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">
                        Stream Title
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your stream title..."
                        value={streamTitle}
                        onChange={(e) => setStreamTitle(e.target.value)}
                      />
                    </div>

                    <Button
                      className="w-full bg-green-600 hover:bg-green-500"
                      disabled={!streamTitle.trim()}
                    >
                      Create Stream
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Stream Key & Instructions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {isVerified ? (
              <>
                <StreamKeyDisplay />
                <OBSInstructions />
              </>
            ) : (
              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Verify Your Token</h3>
                  <p className="text-sm text-muted-foreground">
                    Paste your token contract address to get your stream key and setup instructions.
                  </p>
                </div>
              </Card>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
