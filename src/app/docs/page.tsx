import Link from "next/link";
import { BookOpen, Code, Droplets, Shield } from "lucide-react";
import { LINKS } from "@/lib/constants";

const topics = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn how to connect your wallet, swap tokens, and navigate the protocol.",
    status: "coming soon"
  },
  {
    icon: Droplets,
    title: "Liquidity Provision",
    description: "Understand fee tiers, price ranges, and how to manage your positions.",
    status: "coming soon"
  },
  {
    icon: Shield,
    title: "Security",
    description: "Audits, smart contract addresses, and how to stay safe.",
    status: "coming soon"
  },
  {
    icon: Code,
    title: "Smart Contracts",
    description: "Technical reference for developers integrating with RedTail.",
    status: "coming soon"
  }
];

export default function DocsPage() {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-semibold text-foreground">Documentation</h1>
      <p className="mb-8 text-sm text-muted">
        Everything you need to know about using and building on RedTail.<br />
        Full documentation will be available at launch.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {topics.map(({ icon: Icon, title, description, status }) => (
          <div key={title} className="rounded-2xl border border-card-border bg-card p-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="rounded-xl bg-muted-bg p-2">
                <Icon size={16} className="text-muted" />
              </div>
              <span className="rounded-md bg-muted-bg px-2 py-0.5 text-xs text-muted">{status}</span>
            </div>
            <h2 className="mb-1 text-sm font-semibold text-foreground">{title}</h2>
            <p className="text-xs text-muted leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-card-border bg-muted-bg p-5">
        <p className="text-sm text-muted">
          Have a question? Join the community on{" "}
          <Link href={LINKS.discord} className="text-primary hover:underline">Discord</Link>
          {" "}or reach out on{" "}
          <Link href={LINKS.x} className="text-primary hover:underline">X</Link>.
        </p>
      </div>
    </div>
  );
}
