export default function FaqSkeleton() {
  return (
    <div className="space-y-6">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="p-5 border border-gray-200 rounded-lg shadow-sm animate-pulse bg-white"
        >
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-full mb-1" />
          <div className="h-3 bg-gray-200 rounded w-5/6" />
        </div>
      ))}
    </div>
  );
}
