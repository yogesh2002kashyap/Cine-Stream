import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { useDebounce } from '../hooks/useDebounce';

const SearchBar = ({ query, setQuery, setPage }) => {
  const [localQuery, setLocalQuery] = useState(query);

  const debouncedQuery = useDebounce(localQuery, 500);

  useEffect(() => {
    setQuery(debouncedQuery);
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  return (
    <div className="w-full px-6 md:px-10">
      <div className="max-w-3xl mx-auto relative">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

        <input
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="Search movies, genres, actors..."
          className="w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-full py-4 pl-14 pr-6 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default SearchBar;
