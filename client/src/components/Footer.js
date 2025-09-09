// client/src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-400 py-8 border-t border-yellow-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mary Justus Mannaby</h3>
            <p className="mb-4">DCP Candidate for Bahati Constituency</p>
            <p>"Progress Through Unity and Action"</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/vision" className="hover:underline">Vision & Manifesto</Link></li>
              <li><Link to="/news" className="hover:underline">News & Updates</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: mary@mannabyforbahati.com</li>
              <li>Phone: +254 700 123 456</li>
              <li>Address: Bahati Constituency Office, Nakuru</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-yellow-200">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="hover:text-yellow-200">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="hover:text-yellow-200">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-yellow-400 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Mary Justus Mannaby for Bahati. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;