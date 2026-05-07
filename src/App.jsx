import  {  useEffect, useState } from 'react'
import SearchBar from './components/SearchBar';
import MoviesGrid from './components/MovieGrid'
import LoadingSpinner from './components/LoadingSpinner';
import Navbar from './components/Navbar'
import Error from './components/Error';
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from './components/FavoritesPage';
import { useFavorites } from './hooks/useFavorites';
import MoodMatcher from "./components/MoodMatcher";
import { useRef } from 'react';
const App = () => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const sentinelRef = useRef(null);
  const isLoadingRef = useRef(false);

  const { favorites, toggleFavorite, isFavorite } = useFavorites();

useEffect(() => {
  async function fetchMovies() {
    try {
      setIsLoading(true);
      isLoadingRef.current = true;
      setError(null);

      let url = query.trim() === ''
        ? `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=${page}`
        : `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}&page=${page}`;

      const res = await fetch(url);
      const data = await res.json();

      if (page === 1) {
        setMovies(data.results);                          // replace
      } else {
        setMovies(prev => [...prev, ...data.results]);    // append
      }

      setHasMore(page < data.total_pages);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      isLoadingRef.current = false;
    }
  }

  fetchMovies();
}, [page, query]);

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && hasMore && !isLoadingRef.current) {
      setPage(prev => prev + 1);  // triggers Effect 2 → fetches next page
    }
  }, { threshold:0.1  });

  if(sentinelRef.current){
    observer.observe(sentinelRef.current);
  }

  return () => observer.disconnect();
}, [hasMore]);
  

  return ( 
   <div className="bg-gray-900 text-white min-h-screen">

    <Navbar favoritesCount={favorites.length} />
    <Routes>
      <Route path="/" element={
        <>
          <SearchBar query={query} setQuery={setQuery} setPage={setPage} />
          <MoodMatcher toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
    {isLoading && page === 1 ? (  
      <LoadingSpinner />
    ) : error ? (
      <Error error={error} />
    ) : (
      <MoviesGrid movies={movies} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
    )}

    {/* sentinel always stays in DOM */}
    <div ref={sentinelRef} className="h-10" />
    
    {isLoading && page > 1 && <LoadingSpinner />} 
    
    {!hasMore && (
      <p className="text-center text-gray-500 py-6">You've reached the end!</p>
    )}        </>
      } />
      <Route path="/favorites" element={<FavoritesPage favorites={favorites} onToggleFavorite={toggleFavorite} isFavorite={isFavorite} />} />
    </Routes>
    
  </div>
  )
}

export default App