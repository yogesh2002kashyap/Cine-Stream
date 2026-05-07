


const SearchBar = ({ query, setQuery, setPage  }) => {
  
  return (
    <div className='w-full bg-gray-800 shadow-md p-4 sticky top-0 z-10'>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);  
        }}
        placeholder="Enter movie name"
        className="w-full max-w-md mx-auto block p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-yellow-400"
        />
    </div>
  );
};

export default SearchBar;