import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-slate-900/70 backdrop-blur-md border-b border-slate-700/40 fixed top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        <Link to="/" className="text-xl font-bold text-cyan-300 tracking-wide">
          MailRun
        </Link>

        <div className="flex items-center gap-6 text-gray-200">
          <Link to="/" className="hover:text-cyan-300 transition">Home</Link>
          <Link to="/reviews" className="hover:text-cyan-300 transition">Reviews</Link>
          <a href="/#pricing" className="hover:text-cyan-300 transition">Pricing</a>
          <Link to="/terms-and-conditions" className="hover:text-cyan-300 transition">
            Terms
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

