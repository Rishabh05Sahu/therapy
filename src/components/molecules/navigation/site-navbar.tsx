"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteButton } from "@/components/atoms/buttons/site-button";
import { SITE_CONFIG } from "@/lib/constants/site";

export function SiteNavbar() {
  const pathname = usePathname();

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="container-custom">
        <div className="mt-5 flex items-center justify-between border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-md md:px-6">
          <Link href="/" className="text-lg font-semibold text-white">
            {SITE_CONFIG.brandName}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {SITE_CONFIG.navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm transition ${
                    active ? "text-white" : "text-white/65 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <SiteButton
              href={SITE_CONFIG.bookingUrl}
              external={SITE_CONFIG.bookingUrl.startsWith("http")}
              variant="primary"
            >
              Book a Session
            </SiteButton>
            <SiteButton href={SITE_CONFIG.contactUrl} variant="secondary">
              Contact Us
            </SiteButton>
          </div>

          <div className="text-sm text-white md:hidden">Menu</div>
        </div>
      </div>
    </header>
  );
}