import type { ReactNode } from "react";
import { SiteFooter } from "@/components/sections/shared/site-footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <SiteFooter />
    </>
  );
}