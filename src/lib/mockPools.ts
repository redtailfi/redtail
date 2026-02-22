export type Pool = {
  id: string;
  token0: { symbol: string; name: string; };
  token1: { symbol: string; name: string; };
  fee: number;
  tvl: number;
  volume24h: number;
  apr: number;
};

export const mockPools: Pool[] = [
  {
    id: "0x1234567890abcdef1234567890abcdef12345678",
    token0: { symbol: "ETH", name: "Ethereum" },
    token1: { symbol: "USDC", name: "USD Coin" },
    fee: 0.05,
    tvl: 284000,
    volume24h: 42000,
    apr: 12.4
  },
  {
    id: "0xabcdef1234567890abcdef1234567890abcdef12",
    token0: { symbol: "WBTC", name: "Wrapped Bitcoin" },
    token1: { symbol: "ETH", name: "Ethereum" },
    fee: 0.3,
    tvl: 156000,
    volume24h: 18500,
    apr: 8.7
  },
  {
    id: "0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    token0: { symbol: "USDC", name: "USD Coin" },
    token1: { symbol: "USDT", name: "Tether" },
    fee: 0.01,
    tvl: 98000,
    volume24h: 31000,
    apr: 4.2
  }
];

export function formatUSD(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`;
  return `$${value.toFixed(2)}`;
}
