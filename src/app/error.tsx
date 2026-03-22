"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="section-dark flex min-h-screen items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.22em] text-white/50">
          Something went wrong
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          We hit an unexpected error
        </h1>
        <p className="mt-5 text-sm leading-7 text-white/70 md:text-base">
          Please try again. If the issue continues, check the console or API
          response for debugging.
        </p>
        <button
          onClick={reset}
          className="mt-8 inline-flex border border-[var(--yellow)] bg-[var(--yellow)] px-5 py-3 text-sm font-medium text-black"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}