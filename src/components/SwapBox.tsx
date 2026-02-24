"use client";

import { useState } from "react";
import { ArrowDownUp, ChevronDown, Settings2 } from "lucide-react";
import TokenIcon from "@/components/ui/TokenIcon";
import TokenSelectorModal from "@/components/TokenSelectorModal";
import type { Token } from "@/lib/tokenList";

interface SwapBoxProps {
  tokens: Token[];
}

const DEFAULT_FROM = {
  chainId: 8453,
  address: "0x4200000000000000000000000000000000000006",
  symbol: "WETH",
  name: "Wrapped Ether",
  decimals: 18,
};

export default function SwapBox({ tokens }: SwapBoxProps) {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [fromToken, setFromToken] = useState<Token>(DEFAULT_FROM);
  const [toToken, setToToken] = useState<Token | null>(null);
  const [selectorOpen, setSelectorOpen] = useState<"from" | "to" | null>(null);

  const handleSwapDirection = () => {
    if (!toToken) return;
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <>
      <div className="w-full max-w-md rounded-2xl border border-card-border bg-card p-4 shadow-sm">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-base font-semibold text-foreground">Swap</span>
          <button className="rounded-lg p-1.5 text-muted transition-colors hover:bg-muted-bg hover:text-foreground">
            <Settings2 size={16} />
          </button>
        </div>
        {/* From */}
        <div className="rounded-xl bg-muted-bg p-3">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-xs text-muted">You pay</span>
            <span className="text-xs text-muted">Balance 0.00</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="0"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="w-full bg-transparent text-2xl font-medium text-foreground outline-none placeholder:text-muted"
            />
            <button
              onClick={() => setSelectorOpen("from")}
              className="flex items-center gap-1.5 rounded-xl bg-card px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-card-border"
            >
              <div className="rounded-full overflow-hidden ring-2 ring-card">
                <TokenIcon symbol={fromToken.symbol} className="w-4 h-4" />
              </div>
              {fromToken.symbol}
              <ChevronDown size={14} className="text-muted" />
            </button>
          </div>
        </div>
        {/* Swap direction */}
        <div className="relative my-1 flex justify-center">
          <button
            onClick={handleSwapDirection}
            disabled={!toToken}
            className="rounded-xl border border-card-border bg-card p-2 text-muted transition-colors hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-muted"
          >
            <ArrowDownUp size={14} />
          </button>
        </div>
        {/* To */}
        <div className="rounded-xl bg-muted-bg p-3">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-xs text-muted">You receive</span>
            <span className="text-xs text-muted">Balance 0.00</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="0"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              className="w-full bg-transparent text-2xl font-medium text-foreground outline-none placeholder:text-muted"
            />
            <button
              onClick={() => setSelectorOpen("to")}
              className="flex items-center gap-1.5 rounded-xl bg-primary px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-hover"
            >
              {toToken ? (
                <>
                  <div className="rounded-full overflow-hidden ring-2 ring-card">
                    <TokenIcon symbol={toToken.symbol} className="w-4 h-4" />
                  </div>
                  {toToken.symbol}
                </>
              ) : (
                "Select token"
              )}
              <ChevronDown size={14} />
            </button>
          </div>
        </div>
        {/* Button */}
        <button className="mt-3 w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">
          Connect Wallet
        </button>
      </div>

      {/* Token selector modal */}
      {selectorOpen && (
        <TokenSelectorModal
          tokens={tokens}
          onSelect={(token) => {
            if (selectorOpen === "from") setFromToken(token);
            else setToToken(token);
            setSelectorOpen(null);
          }}
          onClose={() => setSelectorOpen(null)}
          excludeAddress={selectorOpen === "from" ? toToken?.address : fromToken.address}
        />
      )}
    </>
  );
}
