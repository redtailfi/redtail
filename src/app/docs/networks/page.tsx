import Link from "next/link";
import { CheckCircle, Clock } from "lucide-react";

const networks = [
  {
    name: "Base",
    description: "Primary network. Full support at launch.",
    chainId: 8453,
    status: "launch",
    native: "ETH"
  },
  {
    name: "Optimism",
    description: "Planned post-launch expansion.",
    chainId: 10,
    status: "planned",
    native: "ETH"
  },
  {
    name: "Mode",
    description: "Planned post-launch expansion.",
    chainId: 34443,
    status: "planned",
    native: "ETH"
  },
  {
    name: "Arbitrum",
    description: "Planned post-launch expansion.",
    chainId: 42161,
    status: "planned",
    native: "ETH"
  }
];

export default function NetworksPage() {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-semibold text-foreground">Supported Networks</h1>
      <p className="mb-8 text-sm text-muted leading-relaxed">
        RedTail launches on Base, with additional networks planned based on liquidity and community demand.<br />
        All networks share the same interface — your wallet will prompt you to switch networks automatically.
      </p>
      <div className="flex flex-col gap-3">
        {networks.map(network => (
          <div key={network.chainId} className="flex items-center justify-between rounded-2xl border border-card-border bg-card px-5 py-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted-bg text-xs font-semibold text-muted">
                {network.name.slice(0, 2)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">{network.name}</span>
                  <span className="text-xs text-muted">{network.chainId}</span>
                </div>
                <p className="text-xs text-muted">{network.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              {network.status === "launch" ? (
                <>
                  <CheckCircle size={14} className="text-primary" />
                  <span className="text-xs font-medium text-primary">At launch</span>
                </>
              ) : (
                <>
                  <Clock size={14} className="text-muted" />
                  <span className="text-xs text-muted">Planned</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-card-border bg-muted-bg p-5">
        <p className="text-sm text-muted">
          Want to see RedTail on another network?{" "}
          <Link href="https://discord.com" className="text-primary hover:underline">Let us know on Discord</Link>.
        </p>
      </div>
    </div>
  );
}
