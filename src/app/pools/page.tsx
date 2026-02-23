import Link from "next/link";
import { Droplets, Plus } from "lucide-react";
import { mockPools, formatUSD } from "@/lib/mockPools";

export default function PoolsPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] mx-auto max-w-5xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Pools</h1>
          <p className="mt-1 text-sm text-muted">Provide liquidity and earn fees</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover">
          <Plus size={16} />
          New position
        </button>
      </div>
      {/* Table */}
      <div className="rounded-2xl border border-card-border bg-card overflow-hidden">
        <div className="grid grid-cols-5 border-b border-card-border px-6 py-3">
          <span className="col-span-2 text-xs font-medium text-muted">Pool</span>
          <span className="text-xs font-medium text-muted text-right">TVL</span>
          <span className="text-xs font-medium text-muted text-right">24h Volume</span>
          <span className="text-xs font-medium text-muted text-right">APR</span>
        </div>
        {mockPools.map((pool, index) => (
          <Link
            key={pool.id}
            href={`/pools/${pool.id}`}
            className={`grid grid-cols-5 px-6 py-4 transition-colors hover:bg-muted-bg ${index !== mockPools.length - 1 ? "border-b border-card-border" : ""}`}
          >
            <div className="col-span-2 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary ring-2 ring-card" />
                <div className="h-8 w-8 rounded-full bg-muted ring-2 ring-card" />
              </div>
              <div>
                <span className="text-sm font-medium text-foreground">
                  {pool.token0.symbol}/{pool.token1.symbol}
                </span>
                <span className="ml-2 rounded-md bg-muted-bg px-1.5 py-0.5 text-xs text-muted">{pool.fee}%</span>
              </div>
            </div>
            <span className="self-center text-right text-sm text-foreground">{formatUSD(pool.tvl)}</span>
            <span className="self-center text-right text-sm text-foreground">{formatUSD(pool.volume24h)}</span>
            <span className="self-center text-right text-sm font-medium text-primary">{pool.apr}%</span>
          </Link>
        ))}
      </div>
      {/* Coming soon note */}
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-muted-bg px-4 py-3">
        <Droplets size={14} className="text-muted" />
        <p className="text-xs text-muted">Live pool data and position management coming at launch.</p>
      </div>
    </main>
  );
}
