import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';
import { Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <header className="bg-gray-800 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-orange-500">MiOrganics</Link>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle menu">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            <ul className={`md:flex md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 right-0 bg-gray-800 md:bg-transparent p-4 md:p-0 z-50 md:z-auto transition-all duration-300 ease-in-out`}>
              {navItems.slice(0, 5).map((item) => (
                <li key={item.to} className="mb-2 md:mb-0">
                  <Link 
                    to={item.to} 
                    className="hover:text-orange-400 block py-2 md:py-0 transition-colors duration-200" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 text-lg leading-relaxed">
        {children}
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; 2024 MiOrganics. All rights reserved.</p>
            <ul className="flex flex-wrap justify-center space-x-4">
              {navItems.slice(5).map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-orange-400 transition-colors duration-200">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 text-center">
            <p>Contact: <a href="mailto:official@xpmaps.com" className="hover:text-orange-400 transition-colors duration-200">official@xpmaps.com</a></p>
            <p>Support: <a href="mailto:support@xpmaps.com" className="hover:text-orange-400 transition-colors duration-200">support@xpmaps.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;