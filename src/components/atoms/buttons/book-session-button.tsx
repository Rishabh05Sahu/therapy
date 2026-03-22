import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants/site";

type BookSessionButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export function BookSessionButton({
  className = "",
  children = "Book a Session",
}: BookSessionButtonProps) {
  const isExternal = SITE_CONFIG.bookingUrl.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={SITE_CONFIG.bookingUrl}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={SITE_CONFIG.bookingUrl} className={className}>
      {children}
    </Link>
  );
}