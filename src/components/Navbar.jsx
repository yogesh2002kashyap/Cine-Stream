import { Link } from 'react-router-dom';

const Navbar = ({ favoritesCount }) => {
  return (
    <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-yellow-400 font-bold text-xl">🎬 Cine-Stream</h1>
      <div className="flex gap-6">
        <Link to="/" className="text-white hover:text-yellow-400">Home</Link>
        <Link to="/favorites" className="text-white hover:text-yellow-400">
          Favorites ❤️ {favoritesCount > 0 && `(${favoritesCount})`}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;