import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md z-40 border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Pritha Adhikari
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'education', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`capitalize transition-all duration-300 hover:text-purple-300 ${
                  activeSection === item ? 'text-purple-300 font-semibold' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {['home', 'about', 'education', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => {setActiveSection(item); setIsMenuOpen(false);}}
                className={`block w-full text-left capitalize transition-all duration-300 hover:text-purple-300 py-2 px-4 rounded ${
                  activeSection === item ? 'text-purple-300 font-semibold bg-white/10' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;