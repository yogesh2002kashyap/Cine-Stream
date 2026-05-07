
import MovieCard from './MovieCard'
const MovieGrid = ({movies, toggleFavorite, isFavorite}) => {
  return (
    
    <div className="grid gap-6 p-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
    {movies.map(movie => <MovieCard key={movie.id} movie={movie} onToggleFavorite={toggleFavorite} isFavorite={isFavorite(movie.id)} />)}
    </div>
  )
}

export default MovieGrid