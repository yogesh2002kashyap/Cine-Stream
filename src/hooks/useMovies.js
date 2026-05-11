import { useEffect, useRef, useState } from "react";

export function useMovies(query){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    
    const sentinelRef = useRef(null);
    const isLoadingRef = useRef(false);

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
  const observer = new IntersectionObserver(
    (entries) => {
      if (
        entries[0].isIntersecting &&
        hasMore &&
        !isLoadingRef.current
      ) {
        setPage((prev) => prev + 1);
      }
    },
    {
      threshold: 0.1,
      rootMargin: "200px",
    }
  );

  const currentSentinel = sentinelRef.current;

  if (currentSentinel) {
    observer.observe(currentSentinel);
  }

  return () => {
    if (currentSentinel) {
      observer.unobserve(currentSentinel);
    }
  };
}, [hasMore]);

    return { movies, isLoading, error, hasMore, sentinelRef, page, setPage };
}