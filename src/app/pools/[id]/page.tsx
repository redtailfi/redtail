import Link from "next/link";
import { ArrowLeft, Clock, Droplets, TrendingUp } from "lucide-react";
import TokenIcon from "@/components/ui/TokenIcon";
import { mockPools, formatUSD } from "@/lib/mockPools";

export default async function PoolPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pool = mockPools.find((p) => p.id === id);

  if (!pool) {
    return (
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
        <div className="text-center">
          <p className="text-lg font-medium text-foreground">Pool not found</p>
          <Link href="/pools" className="mt-2 text-sm text-primary hover:underline">
            Back to pools
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-4rem)] mx-auto max-w-5xl px-4 py-12 sm:px-6">
      {/* Back */}
      <Link
        href="/pools"
        className="mb-6 flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft size={14} />
        Back to pools
      </Link>
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="flex -space-x-3">
          <div className="rounded-full overflow-hidden ring-2 ring-card">
            <TokenIcon symbol={pool.token0.symbol} className="w-10 h-10" />
          </div>
          <div className="rounded-full overflow-hidden ring-2 ring-card">
            <TokenIcon symbol={pool.token1.symbol} className="w-10 h-10" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            {pool.token0.symbol}/{pool.token1.symbol}
          </h1>
          <span className="text-sm text-muted">{pool.fee}% fee tier</span>
        </div>
      </div>
      {/* Stats grid */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { label: "Total Value Locked", value: formatUSD(pool.tvl), icon: Droplets },
          { label: "24h Volume", value: formatUSD(pool.volume24h), icon: TrendingUp },
          { label: "APR", value: `${pool.apr}%`, icon: Clock },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-card-border bg-card p-5">
            <div className="mb-3 flex items-center gap-2 text-muted">
              <Icon size={14} />
              <span className="text-xs font-medium">{label}</span>
            </div>
            <span className="text-2xl font-semibold text-foreground">{value}</span>
          </div>
        ))}
      </div>
      {/* Actions */}
      <div className="rounded-2xl border border-card-border bg-card p-6">
        <h2 className="mb-4 text-base font-semibold text-foreground">Your position</h2>
        <div className="flex flex-col items-center gap-3 py-6 text-center">
          <p className="text-sm text-muted">Connect your wallet to view or manage your position.</p>
          <button className="rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover">
            Connect Wallet
          </button>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-muted-bg px-4 py-3">
          <p className="text-xs text-muted">Full position management including range selection coming at launch.</p>
        </div>
      </div>
    </main>
  );
}
