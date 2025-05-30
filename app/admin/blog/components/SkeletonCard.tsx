// components/SkeletonCard.tsx
export default function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl p-4 space-y-3 shadow-md">
      <div className="h-5 w-1/2 bg-gray-400/40 rounded" />
      <div className="h-4 w-1/3 bg-gray-400/40 rounded" />
      <div className="h-40 w-full bg-gray-400/30 rounded" />
    </div>
  );
}
