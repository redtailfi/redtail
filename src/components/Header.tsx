import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "@/components/ThemeSwitch";
import { Wallet } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-card-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/redtail-logo.svg"
            alt={`${SITE.name} logo`}
            width="512"
            height="427"
            className="h-auto w-12"
            preload
          />
          <span className="text-lg font-semibold tracking-tight text-foreground">{SITE.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
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
        </nav>
        <div className="flex items-center gap-3">
          <ThemeSwitch />
          <button className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover">
            <div className="flex items-center gap-2">
              <Wallet size={16} /> Connect Wallet
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
