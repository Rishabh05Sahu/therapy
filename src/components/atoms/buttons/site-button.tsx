import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

type SiteButtonProps = {
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  external?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function SiteButton({
  href,
  variant = "primary",
  className = "",
  children,
  external = false,
  ...props
}: SiteButtonProps) {
  const base =
    "inline-flex items-center justify-center px-5 py-3 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "border border-[var(--yellow)] bg-[var(--yellow)] text-black hover:opacity-90"
      : "border border-white/20 bg-transparent text-white hover:bg-white/5";

  const finalClassName = `${base} ${styles} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={finalClassName}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={finalClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}