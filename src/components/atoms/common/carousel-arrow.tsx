import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselArrowProps = {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
  dark?: boolean;
};

export function CarouselArrow({
  direction,
  onClick,
  className,
  dark = false,
}: CarouselArrowProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex h-10 w-10 items-center justify-center border transition",
        dark
          ? "border-[var(--text-dark)]/20 bg-white/50 text-[var(--text-dark)] hover:bg-white"
          : "border-white/15 bg-white/5 text-white hover:bg-white hover:text-[var(--text-dark)]",
        className
      )}
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      {direction === "left" ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
    </button>
  );
}