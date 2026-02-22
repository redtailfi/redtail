import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-7xl font-bold text-primary">404</span>
        <h1 className="text-xl font-semibold text-foreground">Page not found</h1>
        <p className="max-w-sm text-sm text-muted">This page doesn't exist or has been moved.</p>
        <Link href="/" className="mt-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover">Go home</Link>
      </div>
    </main>
  );
}
