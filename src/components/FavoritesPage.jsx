import MovieGrid from "./MovieGrid";

const FavoritesPage = ({ favorites, onToggleFavorite, isFavorite }) => {
  if (favorites.length === 0) {
    return <p className="text-center text-gray-400 mt-20">No favorites yet!</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Favorites ❤️</h2>
      <MovieGrid
        movies={favorites}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
};

export default FavoritesPage;