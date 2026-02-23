import Link from "next/link";
import { SiGithub, SiDiscord, SiX } from "@icons-pack/react-simple-icons";
import { LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full border-t border-card-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="text-base font-semibold text-foreground">{SITE.name}</span>
            <p className="text-sm text-muted leading-relaxed">
              {SITE.tagline}
              <br />
              Trade and provide liquidity with low fees and no bullshit.
            </p>
          </div>
          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-foreground">Protocol</span>
            <div className="flex flex-col gap-2">
              <Link href="/swap" className="text-sm text-muted transition-colors hover:text-foreground">
                Swap
              </Link>
              <Link href="/pools" className="text-sm text-muted transition-colors hover:text-foreground">
                Pools
              </Link>
              <Link href="/stats" className="text-sm text-muted transition-colors hover:text-foreground">
                Stats
              </Link>
              <Link href="/docs" className="text-sm text-muted transition-colors hover:text-foreground">
                Docs
              </Link>
            </div>
          </div>
          {/* Community */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-foreground">Community</span>
            <div className="flex gap-5">
              <Link
                href={LINKS.discord}
                target="_blank"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <SiDiscord size={16} />
              </Link>
              <Link
                href={LINKS.github}
                target="_blank"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <SiGithub size={16} />
              </Link>
              <Link
                href={LINKS.x}
                target="_blank"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <SiX size={16} />
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-card-border pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {SITE.name}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-xs text-muted transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs text-muted transition-colors hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
