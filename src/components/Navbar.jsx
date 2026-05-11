import { Link } from 'react-router-dom';

const Navbar = ({ favoritesCount }) => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 px-6 md:px-10 py-5 flex items-center justify-between">
      <Link
        to="/"
        className="text-2xl font-black tracking-wide text-red-500"
      >
        CINESTREAM
      </Link>

      <div className="flex items-center gap-8 text-sm font-medium">
        <Link
          to="/"
          className="hover:text-red-400 transition-colors duration-300"
        >
          Home
        </Link>

        <Link
          to="/favorites"
          className="hover:text-red-400 transition-colors duration-300"
        >
          My List {favoritesCount > 0 && `(${favoritesCount})`}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
