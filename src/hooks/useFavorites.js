import { useState } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    // Read from localStorage on first load
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  const toggleFavorite = (movie) => {
    setFavorites(prev => {
      const exists = prev.find(m => m.id === movie.id);
      const updated = exists
        ? prev.filter(m => m.id !== movie.id)  // remove if already favorited
        : [...prev, movie];                     // add if not favorited

      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  const isFavorite = (movieId) => favorites.some(m => m.id === movieId);

  return { favorites, toggleFavorite, isFavorite };
}