import { useState } from "react";
import { assets } from "../assets/assets";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom"; 

const Menubar = () => {
  const [menuOpen, setMenOpen] = useState(false);

  return (
    <nav className="relative bg-white px-8 py-4 flex justify-between items-center shadow-sm">
      {/* Left side: logo + text */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={assets.logo}
          alt="logo"
          className="h-8 w-8 object-contain cursor-pointer"
        />
        <span className="text-2xl font-semibold text-indigo-700 flex cursor-pointer">
          remove.<span className="text-gray-400">bg</span>
        </span>
      </Link>

      {/* Right side: desktop actions */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-gray-700 hover:text-blue-500 font-medium">
          Login
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full transition-all">
          Sign Up
        </button>
      </div>

      {/* Mobile hamburger icon */}
      <div className="flex md:hidden">
        <button onClick={() => setMenOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-8 bg-white shadow-md rounded-md flex flex-col space-y-4 w-40 p-4 z-50">
          <button className="text-gray-700 hover:text-blue-500 font-medium">
            Login
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full text-center">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Menubar;
