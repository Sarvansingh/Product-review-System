import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full bg-neutral-50 px-16 py-4 border-b border-neutral-200">
      <div className="flex justify-between items-center">
        
        <Link to="/" className="text-2xl text-teal-600 font-bold">
          Besi Reviews
        </Link>

        <div className="flex items-center gap-10">
          <ul className="flex gap-6 text-neutral-600 font-medium">
            <li><Link to="/" className="hover:text-teal-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-teal-600">About</Link></li>
            <li><Link to="/contact" className="hover:text-teal-600">Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
