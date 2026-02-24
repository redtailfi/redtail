export type Token = {
  chainId: number;
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  logoURI?: string;
};

export type TokenList = {
  tokens: Token[];
};

const TOKEN_LIST_URL = "https://tokens.uniswap.org";
const BASE_CHAIN_ID = 8453;

const FALLBACK_TOKENS: Token[] = [
  {
    chainId: BASE_CHAIN_ID,
    address: "0x4200000000000000000000000000000000000006",
    symbol: "WETH",
    name: "Wrapped Ether",
    decimals: 18,
  },
  {
    chainId: BASE_CHAIN_ID,
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
  },
];

export async function getTokenList(): Promise<Token[]> {
  try {
    const res = await fetch(TOKEN_LIST_URL, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) throw new Error("Failed to fetch token list");
    const data: TokenList = await res.json();
    return data.tokens.filter((token) => token.chainId === BASE_CHAIN_ID);
  } catch {
    return FALLBACK_TOKENS;
  }
}
