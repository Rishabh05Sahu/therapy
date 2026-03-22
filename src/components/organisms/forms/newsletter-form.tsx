"use client";

import { useState } from "react";

type NewsletterFormProps = {
  dark?: boolean;
};

export function NewsletterForm({ dark = true }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message);

      if (data.success) {
        setEmail("");
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="mt-5 space-y-3" onSubmit={handleSubscribe}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`w-full border px-4 py-3 text-sm outline-none ${
          dark
            ? "border-white/15 bg-transparent text-white placeholder:text-white/35"
            : "border-[var(--text-dark)]/15 bg-white text-[var(--text-dark)] placeholder:text-[var(--text-dark)]/35"
        }`}
      />
      <button
        disabled={loading}
        className="w-full border border-[var(--yellow)] bg-[var(--yellow)] px-4 py-3 text-sm font-medium text-black disabled:opacity-70"
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
      {message ? (
        <p className={dark ? "text-sm text-white/75" : "text-sm text-[var(--text-dark)]/75"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}