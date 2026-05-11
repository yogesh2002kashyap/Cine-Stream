import noPoster from '../assets/no_poster.png';

function MovieCard({ movie, onToggleFavorite, isFavorite }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/70">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : noPoster
          }
          alt={movie.title}
          loading="lazy"
          className="w-full aspect-2/3 object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

      <button
        onClick={() => onToggleFavorite(movie)}
        className="absolute top-3 right-3 z-20 text-xl bg-black/50 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-bold text-lg line-clamp-1">
          {movie.title}
        </h3>

        <div className="flex justify-between items-center mt-2 text-sm">
          <span className="text-gray-300">
            {movie.release_date?.split('-')[0]}
          </span>

          <span className="text-yellow-400 font-bold">
            ⭐ {movie.vote_average?.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
