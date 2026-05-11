function MoviesGridSkeleton() {
  return (
    <div
      className="grid gap-6 p-6"
      style={{
        gridTemplateColumns:
          "repeat(auto-fill, minmax(180px, 1fr))",
      }}
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-xl overflow-hidden animate-pulse"
        >
          {/* Poster */}
          <div className="w-full aspect-2/3 bg-gray-700"></div>

          {/* Content */}
          <div className="p-3">
            {/* Title */}
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>

            {/* Bottom row */}
            <div className="flex justify-between mt-3">
              <div className="h-3 bg-gray-700 rounded w-10"></div>

              <div className="h-3 bg-gray-700 rounded w-12"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesGridSkeleton;