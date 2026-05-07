


const SearchBar = ({ query, setQuery, setPage  }) => {
  
  return (
    <div className='w-full bg-white shadow-md p-4 sticky top-0 '>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);  
        }}
        placeholder="Enter movie name"
        className="w-full max-w-md mx-auto block p-2 border rounded-md placeholder-gray-400 focus:ring-2 focus:ring-blue-500 text-gray-900"
        />
    </div>
  );
};

export default SearchBar;