export function SkeletonCard() {
  return (
    <div className="animate-pulse border border-white/10 bg-white/5 p-5">
      <div className="h-52 w-full bg-white/10" />
      <div className="mt-4 h-4 w-24 bg-white/10" />
      <div className="mt-3 h-6 w-4/5 bg-white/10" />
      <div className="mt-2 h-6 w-3/5 bg-white/10" />
    </div>
  );
}