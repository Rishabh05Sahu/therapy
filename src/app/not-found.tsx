import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="section-dark flex min-h-screen items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.22em] text-white/50">
          404 Error
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          The page you’re looking for does not exist
        </h1>
        <p className="mt-5 text-sm leading-7 text-white/70 md:text-base">
          It may have been moved, removed, or the link might be incorrect.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex border border-[var(--yellow)] bg-[var(--yellow)] px-5 py-3 text-sm font-medium text-black"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}