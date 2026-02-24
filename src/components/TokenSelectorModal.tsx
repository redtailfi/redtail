"use client";

import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import TokenIcon from "@/components/ui/TokenIcon";
import type { Token } from "@/lib/tokenList";

const COMMON_SYMBOLS = ["WETH", "EURC", "USDC", "USDT"];

interface TokenSelectorModalProps {
  tokens: Token[];
  onSelect: (token: Token) => void;
  onClose: () => void;
  excludeAddress?: string;
}

export default function TokenSelectorModal({ tokens, onSelect, onClose, excludeAddress }: TokenSelectorModalProps) {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const filtered = tokens
    .filter((t) => t.address.toLowerCase() !== excludeAddress?.toLowerCase())
    .filter(
      (t) =>
        t.symbol.toLowerCase().includes(search.toLowerCase()) || t.name.toLowerCase().includes(search.toLowerCase()),
    )
    .slice(0, 50);

  const commonTokens = tokens.filter(
    (t) => COMMON_SYMBOLS.includes(t.symbol) && t.address.toLowerCase() !== excludeAddress?.toLowerCase(),
  );

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-card-border bg-card shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-card-border px-4 py-3">
          <span className="text-base font-semibold text-foreground">Select token</span>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted transition-colors hover:bg-muted-bg hover:text-foreground"
          >
            <X size={16} />
          </button>
        </div>
        {/* Search */}
        <div className="px-4 py-3">
          <div className="flex items-center gap-2 rounded-xl bg-muted-bg px-3 py-2">
            <Search size={14} className="shrink-0 text-muted" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search by name or symbol"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
            />
          </div>
        </div>
        {/* Common tokens */}
        {!search && (
          <div className="px-4 pb-3">
            <p className="mb-2 text-xs font-medium text-muted">Common tokens</p>
            <div className="flex flex-wrap gap-2">
              {commonTokens.map((token) => (
                <button
                  key={token.address}
                  onClick={() => onSelect(token)}
                  className="flex items-center gap-1.5 rounded-xl border border-card-border bg-muted-bg px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-card-border"
                >
                  <div className="rounded-full overflow-hidden ring-2 ring-card">
                    <TokenIcon symbol={token.symbol} className="w-4 h-4" />
                  </div>
                  {token.symbol}
                </button>
              ))}
            </div>
          </div>
        )}
        {/* Divider */}
        <div className="border-t border-card-border" />
        {/* Token list */}
        <div className="max-h-72 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-10 text-center">
              <p className="text-sm text-muted">No tokens found</p>
            </div>
          ) : (
            filtered.map((token) => (
              <button
                key={token.address}
                onClick={() => onSelect(token)}
                className="flex w-full items-center gap-3 px-4 py-3 transition-colors hover:bg-muted-bg"
              >
                <div className="rounded-full overflow-hidden ring-2 ring-card">
                  <TokenIcon symbol={token.symbol} className="w-8 h-8" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium text-foreground">{token.symbol}</span>
                  <span className="text-xs text-muted">{token.name}</span>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </>
  );
}
