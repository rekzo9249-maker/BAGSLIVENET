"use client";

import * as React from "react";
import { Wallet, ChevronDown, Copy, LogOut, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useWallet } from "@/context/WalletContext";

function shortenAddress(addr: string) {
  return `${addr.slice(0, 4)}…${addr.slice(-4)}`;
}

interface WalletButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export function WalletButton({
  variant = "default",
  size = "default",
  className,
}: WalletButtonProps) {
  const { wallet, role, isConnecting, connect, disconnect } = useWallet();

  const copyAddress = () => {
    if (wallet) navigator.clipboard.writeText(wallet);
  };

  /* Connected UI */
  if (wallet) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size={size}
            className={cn("gap-2 font-mono", className)}
          >
            <div className="w-2 h-2 rounded-full bg-green-500" />
            {shortenAddress(wallet)}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={copyAddress}
            className="gap-2 cursor-pointer"
          >
            <Copy className="h-4 w-4" />
            Copy Address
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={disconnect}
            className="gap-2 cursor-pointer text-destructive"
          >
            <LogOut className="h-4 w-4" />
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  /* Disconnected UI */
  return (
    <Button
      variant={variant}
      size={size}
      onClick={connect}
      disabled={isConnecting}
      className={cn("gap-2", className)}
    >
      {isConnecting ? (
        <>
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Connecting…
        </>
      ) : (
        <>
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </>
      )}
    </Button>
  );
}
