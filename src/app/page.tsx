import Image from "next/image";
import SwapBox from "@/components/SwapBox";
import logo from "../../public/images/redtail-logo.svg";
import { SITE } from "@/lib/constants";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="flex flex-col gap-16 items-center">
        <Image src={logo} alt={`${SITE.name} logo`} style={{ width: "100px", height: "auto" }} />
        <SwapBox />
      </div>
    </main>
  );
}
