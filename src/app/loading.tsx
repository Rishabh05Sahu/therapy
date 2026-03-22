import { SkeletonCard } from "@/components/atoms/common/skeleton-card";

export default function Loading() {
  return (
    <main className="section-dark min-h-screen pt-32">
      <div className="container-custom">
        <div className="mb-10 h-10 w-72 animate-pulse bg-white/10" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}