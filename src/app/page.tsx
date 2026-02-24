import Image from "next/image";
import SwapBox from "@/components/SwapBox";
import { SITE } from "@/lib/constants";
import { getTokenList } from "@/lib/tokenList";

export default async function Home() {
  const tokens = await getTokenList();

  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="flex flex-col gap-16 items-center">
        <Image
          src="/images/redtail-logo.svg"
          alt={`${SITE.name} logo`}
          width={512}
          height={427}
          className="h-25 w-auto"
        />
        <SwapBox tokens={tokens} />
      </div>
    </main>
  );
}
