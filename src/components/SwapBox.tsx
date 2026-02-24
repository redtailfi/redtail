"use client";

import { useState } from "react";
import { ArrowDownUp, ChevronDown, Settings2 } from "lucide-react";
import TokenIcon from "@/components/ui/TokenIcon";

export default function SwapBox() {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  return (
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
          <button className="flex items-center gap-1.5 rounded-xl bg-card px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-card-border">
            <div className="rounded-full overflow-hidden ring-2 ring-card">
              <TokenIcon symbol="ETH" className="w-4 h-4" />
            </div>
            ETH
            <ChevronDown size={14} className="text-muted" />
          </button>
        </div>
      </div>
      {/* Swap direction */}
      <div className="relative my-1 flex justify-center">
        <button className="rounded-xl border border-card-border bg-card p-2 text-muted transition-colors hover:text-primary">
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
          <button className="flex items-center gap-1.5 rounded-xl bg-primary px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-hover">
            Select token
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
      {/* Button */}
      <button className="mt-3 w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">
        Connect Wallet
      </button>
    </div>
  );
}
