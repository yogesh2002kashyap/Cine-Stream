import { useState } from "react";
import { getMoodMovie } from "../services/geminiService";
import MovieCard from "./MovieCard";
import LoadingSpinner from "./LoadingSpinner";
import Error from "./Error";

const MoodMatcher = ({ toggleFavorite, isFavorite }) => {
  const [mood, setMood] = useState("");
  const [movie, setMovie] = useState(null);
  const [loadingMood, setLoadingMood] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!mood.trim()) return;

    try {
      setLoadingMood(true);
      setError(null);

      // 1️⃣ Get movie name from Gemini
      const movieTitle = await getMoodMovie(mood);

      // 2️⃣ Fetch movie from TMDB
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${movieTitle}`
      );
      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        setError("No movie found for this mood 😔");
        setMovie(null);
        return;
      }

      // 3️⃣ Take first result
      setMovie(data.results[0]);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingMood(false);
    }
  };

  return (
    <div className="bg-gray-800 p-6 text-center border-b border-gray-700">
      <h2 className="text-yellow-400 font-bold text-lg mb-4">🎭 Mood Matcher</h2>
      {/* 🔹 Input + Button */}
      <div className="flex justify-center gap-2 mb-6">
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="What's your mood? 😊"
          className="w-72 bg-white p-2 border rounded-md text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSearch}
          className="bg-yellow-400 px-4 py-2 text-gray-900 font-bold rounded-md hover:bg-yellow-500"
        >
          Match
        </button>
      </div>

      {/* 🔥 Loading */}
      {loadingMood && <LoadingSpinner />}

      {/* ❌ Error */}
      {error && <Error error={error} />}

      {/* 🎬 Movie Card */}
      {!loadingMood && !error && movie && (
        <div className="flex justify-center">
          <div className="w-64">
            <MovieCard
              movie={movie}
              onToggleFavorite={toggleFavorite}
              isFavorite={isFavorite(movie.id)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodMatcher;