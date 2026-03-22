import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <h2
        className={cn(
          "text-2xl font-semibold md:text-4xl",
          light ? "text-[var(--cream)]" : "text-[var(--text-dark)]"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mx-auto mt-3 max-w-2xl text-sm md:text-base",
            light ? "text-white/70" : "text-[var(--text-dark)]/70"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}