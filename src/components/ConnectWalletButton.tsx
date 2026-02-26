"use client";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function ConnectWalletButton() {
  const { status } = useAccount();
  const isLoading = status === "reconnecting" || status === "connecting";

  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;

        if (!mounted) {
          return <div className="h-9 w-32 rounded-xl bg-muted-bg animate-pulse" />;
        }

        if (isLoading) {
          return <button className="rounded-xl bg-muted-bg px-4 py-2 text-sm text-muted cursor-wait">{status}</button>;
        }

        return (
          <div>
            {!connected ? (
              <button
                onClick={openConnectModal}
                className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
              >
                Connect Wallet
              </button>
            ) : chain.unsupported ? (
              <button
                onClick={openChainModal}
                className="rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
              >
                Wrong network
              </button>
            ) : (
              <button
                onClick={openAccountModal}
                className="flex items-center gap-2 rounded-xl bg-muted-bg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-card-border"
              >
                {account.displayName}
              </button>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
