import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { SITE_CONFIG, ROUTES } from "@/lib/constants";

const footerLinks = [
  { href: ROUTES.about, label: "About" },
  { href: ROUTES.streams, label: "Streams" },
  { href: ROUTES.create, label: "Start Streaming" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-green-500/20 bg-card/50 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 bg-green-500/10 blur-[100px] pointer-events-none" />

      <div className="container px-4 py-10 md:py-12 mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <Logo size="sm" />
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-green-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE_CONFIG.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-green-400 transition-colors flex items-center gap-1"
            >
              X
            </a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-green-500/10 text-center flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-green-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}