import { BarChart3 } from "lucide-react";

export default function StatsPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="rounded-2xl bg-muted-bg p-5">
          <BarChart3 size={32} className="text-muted" />
        </div>
        <h1 className="text-xl font-semibold text-foreground">Stats coming soon</h1>
        <p className="max-w-sm text-sm text-muted">
          On-chain analytics, volume, fees, and liquidity data will appear here once the protocol launches.
        </p>
      </div>
    </main>
  );
}
