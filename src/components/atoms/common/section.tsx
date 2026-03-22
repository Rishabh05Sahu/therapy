import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  cream?: boolean;
  dark?: boolean;
};

export function Section({
  children,
  className,
  cream = false,
  dark = false,
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        cream && "section-cream cream-grid-pattern",
        dark && "section-dark grid-pattern",
        className
      )}
    >
      {children}
    </section>
  );
}