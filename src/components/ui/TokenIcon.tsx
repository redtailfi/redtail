"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { TokenETH, TokenUSDC, TokenUSDT, TokenWBTC } from "@web3icons/react";

const DynamicTokenIcon = dynamic(() => import("@web3icons/react/dynamic").then((mod) => ({ default: mod.TokenIcon })), {
  ssr: false,
});

function TokenFallback({ symbol, className }: { symbol: string; className: string }) {
  return (
    <div
      className={`${className} flex items-center justify-center rounded-full bg-muted-bg text-xs font-medium text-muted`}
    >
      {symbol.slice(0, 2).toUpperCase()}
    </div>
  );
}

const STATIC_ICONS: Record<string, React.FC<{ className?: string; variant?: "mono" | "branded" | "background" }>> = {
  ETH: TokenETH,
  WETH: TokenETH,
  USDC: TokenUSDC,
  USDT: TokenUSDT,
  WBTC: TokenWBTC,
};

interface TokenIconProps {
  symbol: string;
  className?: string;
  variant?: "mono" | "branded" | "background";
}

export default function TokenIcon({ symbol, className = "w-6 h-6", variant = "background" }: TokenIconProps) {
  const upper = symbol.toUpperCase();
  const StaticIcon = STATIC_ICONS[upper];

  if (StaticIcon) return <StaticIcon className={className} variant={variant} />;

  return (
    <Suspense fallback={<div className={`animate-pulse rounded-full bg-muted-bg ${className}`} />}>
      <DynamicTokenIcon
        symbol={upper}
        className={className}
        variant={variant}
        fallback={<TokenFallback symbol={symbol} className={className} />}
      />
    </Suspense>
  );
}
