import { useEffect, useState } from "react";

const SearchBar = ({ query, setQuery, setPage  }) => {
  
  const [localQuery, setLocalQuery] = useState(query);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setQuery(localQuery);  // ← only updates App's query after 500ms
      setPage(1);
    }, 500);

    return () => clearTimeout(timeout);
  }, [localQuery]);


  return (
    <div className='w-full bg-gray-800 shadow-md p-4 sticky top-0 z-10'>
      <input
        type="text"
        value={localQuery}
        onChange={(e) => {
          setLocalQuery(e.target.value); 
        }}
        placeholder="Enter movie name"
        className="w-full max-w-md mx-auto block p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-yellow-400"
        />
    </div>
  );
};

export default SearchBar;