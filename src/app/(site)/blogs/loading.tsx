import { SkeletonCard } from "@/components/atoms/common/skeleton-card";

export default function BlogsLoading() {
  return (
    <main className="section-dark min-h-screen pt-32">
      <div className="container-custom">
        <div className="h-12 w-60 animate-pulse bg-white/10" />
        <div className="mt-10 flex gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-10 w-24 animate-pulse bg-white/10" />
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}