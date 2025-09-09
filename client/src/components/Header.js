// client/src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-yellow-400 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="h-12 w-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">MJM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Mary Justus Mannaby</h1>
              <p className="text-sm">For Bahati Constituency</p>
            </div>
          </Link>
          
          <nav className="flex space-x-6">
            <Link to="/" className="hover:text-yellow-200 transition">Home</Link>
            <Link to="/about" className="hover:text-yellow-200 transition">About</Link>
            <Link to="/vision" className="hover:text-yellow-200 transition">Vision</Link>
            <Link to="/news" className="hover:text-yellow-200 transition">News</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;