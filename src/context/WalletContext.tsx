"use client";

import * as React from "react";

declare global {
    interface Window {
        solana?: {
            isPhantom?: boolean;
            connect: (opts?: { onlyIfTrusted?: boolean }) => Promise<{ publicKey: { toString: () => string } }>;
            disconnect: () => Promise<void>;
            on?: (event: string, handler: () => void) => void;
            off?: (event: string, handler: () => void) => void;
        };
    }
}

/* -------------------------------
   CONFIG
-------------------------------- */
const RPC_URL = "https://lurleen-mzv5vx-fast-mainnet.helius-rpc.com";
const TOKEN_MINT = "14bchn2mRCzMpQeD6zF3XqNYmdm2oMbFLARoqMNBpump";

type Role = "none" | "client" | "dev" | "boosted dev";

function getRoleFromBalance(balance: number): Role {
    if (balance >= 50_000) return "boosted dev";
    if (balance >= 10_000) return "dev";
    if (balance >= 1_000) return "client";
    return "none";
}

interface WalletContextType {
    wallet: string | null;
    role: Role;
    isConnecting: boolean;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
}

const WalletContext = React.createContext<WalletContextType | null>(null);

export function WalletProvider({ children }: { children: React.ReactNode }) {
    const [wallet, setWallet] = React.useState<string | null>(null);
    const [role, setRole] = React.useState<Role>("none");
    const [isConnecting, setIsConnecting] = React.useState(false);

    // Check token balance
    const checkTokenBalance = async (walletAddress: string) => {
        try {
            const res = await fetch(RPC_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    jsonrpc: "2.0",
                    id: 1,
                    method: "getTokenAccountsByOwner",
                    params: [
                        walletAddress,
                        { mint: TOKEN_MINT },
                        { encoding: "jsonParsed" },
                    ],
                }),
            });

            const json = await res.json();
            let total = 0;

            for (const acc of json.result?.value || []) {
                const tokenAmount = acc.account.data.parsed.info.tokenAmount;
                const amount = tokenAmount.uiAmount ?? Number(tokenAmount.uiAmountString);
                total += amount;
            }

            console.log("MAINNET TOKEN BALANCE:", total);
            setRole(getRoleFromBalance(total));
        } catch (err) {
            console.error("Token balance check failed", err);
        }
    };

    // Auto reconnect on mount
    React.useEffect(() => {
        if (typeof window !== "undefined" && window.solana?.isPhantom) {
            window.solana
                .connect({ onlyIfTrusted: true })
                .then((res) => {
                    const address = res.publicKey.toString();
                    setWallet(address);
                    checkTokenBalance(address);
                })
                .catch(() => { });
        }
    }, []);

    // Connect wallet
    const connect = async () => {
        if (!window.solana?.isPhantom) {
            alert("Phantom wallet not found");
            window.open("https://phantom.app", "_blank");
            return;
        }

        try {
            setIsConnecting(true);
            const res = await window.solana.connect();
            const address = res.publicKey.toString();
            setWallet(address);
            await checkTokenBalance(address);
        } catch (err) {
            console.error("Wallet connect failed", err);
        } finally {
            setIsConnecting(false);
        }
    };

    // Disconnect wallet
    const disconnect = async () => {
        try {
            await window.solana?.disconnect();
        } catch { }
        setWallet(null);
        setRole("none");
    };

    return (
        <WalletContext.Provider value={{ wallet, role, isConnecting, connect, disconnect }}>
            {children}
        </WalletContext.Provider>
    );
}

export function useWallet() {
    const context = React.useContext(WalletContext);
    if (!context) {
        throw new Error("useWallet must be used within a WalletProvider");
    }
    return context;
}
