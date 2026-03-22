import Link from "next/link";
import { Container } from "@/components/atoms/common/container";
import { SITE_CONFIG } from "@/lib/constants/site";

export function SiteFooter() {
  return (
    <footer className="section-dark border-t border-white/10 py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="text-lg font-semibold text-white">
              THERAPY
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
              Compassionate therapy and counselling support designed for real
              life, emotional clarity, and sustainable healing.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Navigation
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {SITE_CONFIG.navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Contact
            </h3>
            <div className="mt-4 space-y-3 text-sm text-white/65">
              <p>hello@therapy.com</p>
              <p>+91 98765 43210</p>
              <p>Mon - Sat • 9:00 AM to 7:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/45">
          © 2026 Therapy and Counselling. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}