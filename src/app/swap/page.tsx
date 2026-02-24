import SwapBox from "@/components/SwapBox";
import { getTokenList } from "@/lib/tokenList";

export default async function SwapPage() {
  const tokens = await getTokenList();

  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <SwapBox tokens={tokens} />
    </main>
  );
}
