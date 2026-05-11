import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import MoviesGrid from './components/MovieGrid';
import MoviesGridSkeleton from './components/MoviesGridSkeleton';
import FavoritesPage from './components/FavoritesPage';
import MoodMatcher from './components/MoodMatcher';
import Error from './components/Error';

import { useFavorites } from './hooks/useFavorites';
import { useMovies } from './hooks/useMovies';

const App = () => {
  const [query, setQuery] = useState('');

  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const {
    movies,
    isLoading,
    error,
    hasMore,
    sentinelRef,
    page,
    setPage,
  } = useMovies(query);

  return (
    <div className="min-h-screen bg-linear-to-b from-black via-gray-900 to-black text-white overflow-x-hidden">
      <Navbar favoritesCount={favorites.length} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />

              <div className="relative z-20 -mt-8">
                <SearchBar
                  query={query}
                  setQuery={setQuery}
                  setPage={setPage}
                />
              </div>

              <div className="px-2 md:px-8 mt-10">
                <MoodMatcher
                  toggleFavorite={toggleFavorite}
                  isFavorite={isFavorite}
                />
              </div>

              <section className="mt-12">
                <div className="px-6 md:px-10 flex items-center justify-between">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Trending Movies
                  </h2>

                  <span className="text-gray-400 text-sm">
                    Updated Daily
                  </span>
                </div>

                {isLoading && page === 1 ? (
                  <MoviesGridSkeleton />
                ) : error ? (
                  <Error error={error} />
                ) : (
                  <MoviesGrid
                    movies={movies}
                    toggleFavorite={toggleFavorite}
                    isFavorite={isFavorite}
                  />
                )}
              </section>

              <div ref={sentinelRef} className="h-20" />

              {isLoading && page > 1 && (
                <div className="flex justify-center py-8">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  </div>
                </div>
              )}

              {!hasMore && (
                <p className="text-center text-gray-500 py-12">
                  You’ve reached the end of the catalog.
                </p>
              )}
            </>
          }
        />

        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
