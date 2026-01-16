import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ size = "md", showText = true }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-14 w-14",
  };

  const imageSizes = {
    sm: 32,
    md: 40,
    lg: 56,
  };

  const textClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  };

  return (
    <Link href="/" className="group flex items-center gap-3 w-fit">
      <div
        className={`${sizeClasses[size]} relative group-hover:scale-105 transition-all duration-300`}
      >
        <Image
          src="/assets/logo.svg"
          alt={SITE_CONFIG.name}
          width={imageSizes[size]}
          height={imageSizes[size]}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      {showText && (
        <span className={`font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 group-hover:to-green-400 transition-all duration-300 ${textClasses[size]}`}>
          {SITE_CONFIG.name}
        </span>
      )}
    </Link>
  );
}
