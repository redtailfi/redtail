import Link from "next/link";

const sections = [
  {
    title: "Getting Started",
    links: [
      { label: "Introduction", href: "/docs" },
      { label: "Supported Networks", href: "/docs/networks" },
      { label: "How To Swap", href: "/docs/how-to-swap" }
    ]
  },
  {
    title: "Liquidity",
    links: [
      { label: "Providing Liquidity", href: "/docs/liquidity" },
      { label: "Fee Tiers", href: "/docs/fee-tiers" },
      { label: "Price Ranges", href: "/docs/price-ranges" }
    ]
  },
  {
    title: "Protocol",
    links: [
      { label: "Smart Contracts", href: "/docs/contracts" },
      { label: "Security", href: "/docs/security" },
      { label: "Fees & Revenue", href: "/docs/fees" }
    ]
  }
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-[calc(100vh-4rem)] mx-auto flex max-w-5xl gap-8 px-4 py-12 sm:px-6">
      {/* Sidebar */}
      <aside className="hidden w-52 shrink-0 md:block">
        <nav className="flex flex-col gap-6">
          {sections.map(section => (
            <div key={section.title}>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">{section.title}</span>
              <div className="flex flex-col gap-1">
                {section.links.map(link => (
                  <Link key={link.href} href={link.href} className="rounded-lg px-3 py-1.5 text-sm text-muted transition-colors hover:bg-muted-bg hover:text-foreground">{link.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
      {/* Content */}
      <div className="min-w-0 flex-1">
        {children}
      </div>
    </main>
  );
}
