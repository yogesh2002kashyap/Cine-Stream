import { useState } from 'react';
import { Sparkles } from 'lucide-react';

import { getMoodMovie } from '../services/geminiService';

import MovieCard from './MovieCard';
import MoodMatcherLoader from './MoodMatcherLoader';
import Error from './Error';

const MoodMatcher = ({ toggleFavorite, isFavorite }) => {
  const [mood, setMood] = useState('');
  const [movie, setMovie] = useState(null);
  const [loadingMood, setLoadingMood] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!mood.trim()) return;

    try {
      setLoadingMood(true);
      setError(null);

      // Get movie title from Gemini
      const movieTitle = await getMoodMovie(mood);

      // Search movie on TMDB
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${movieTitle}`
      );

      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        setError('No movie found for this mood 😔');
        setMovie(null);
        return;
      }

      setMovie(data.results[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingMood(false);
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl shadow-black/40">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
            <Sparkles className="text-red-400 w-5 h-5" />
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-red-400 text-xs">
              AI Powered
            </p>

            <h2 className="text-2xl md:text-3xl font-black text-white">
              Mood Matcher
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl leading-relaxed mb-8">
          Tell CineStream how you feel and discover a movie
          that perfectly matches your current vibe.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="Happy, lonely, heartbroken, adventurous..."
            className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          />

          <button
            onClick={handleSearch}
            className="bg-red-600 hover:bg-red-500 px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-red-900/30"
          >
            Find My Movie
          </button>
        </div>

        {/* Loader */}
        {loadingMood && <MoodMatcherLoader />}

        {/* Error */}
        {error && <Error error={error} />}

        {/* Movie Result */}
        {!loadingMood && !error && movie && (
          <div className="flex justify-center md:justify-start animate-fadeIn">
            <div className="w-64 md:w-72">
              <MovieCard
                movie={movie}
                onToggleFavorite={toggleFavorite}
                isFavorite={isFavorite(movie.id)}
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default MoodMatcher;