import noPoster from '../assets/no_poster.png'

function MovieCard({ movie, onToggleFavorite, isFavorite }) {
  return (
    <div className=" relative bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
      <button
        onClick={() => onToggleFavorite(movie)}
        className="absolute top-2 right-2 text-xl"
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: noPoster}
        alt={movie.title}
        className="w-full object-cover"
      />
      <div className="p-3">
        <h3 className="text-white font-semibold text-sm truncate">{movie.title}</h3>
        <div className="flex justify-between mt-1">
          <span className="text-gray-400 text-xs">{movie.release_date?.split('-')[0]}</span>
          <span className="text-yellow-400 text-xs font-bold">⭐ {movie.vote_average?.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}

    export default MovieCard