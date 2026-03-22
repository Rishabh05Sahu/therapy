import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group min-h-[220px] border border-white/15 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--yellow)]",
        className
      )}
    >
      <div className="mb-6 h-20 w-full border border-dashed border-white/20 bg-white/5" />
      <h3 className="text-xl font-medium text-[var(--cream)]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
    </div>
  );
}