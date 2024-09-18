import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">MiOrganics</Link>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <Menu className="h-6 w-6" />
              </button>
            </div>
            <ul className={`md:flex md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 right-0 bg-blue-600 md:bg-transparent p-4 md:p-0 z-50`}>
              {navItems.slice(0, 5).map((item) => (
                <li key={item.to} className="mb-2 md:mb-0">
                  <Link to={item.to} className="hover:text-blue-200 block" onClick={() => setIsMenuOpen(false)}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; 2024 MiOrganics. All rights reserved.</p>
            <ul className="flex flex-wrap justify-center space-x-4">
              {navItems.slice(5).map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-gray-300">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 text-center">
            <p>Contact: <a href="mailto:official@miorganics.com" className="hover:underline">official@miorganics.com</a></p>
            <p>Support: <a href="mailto:support@miorganics.com" className="hover:underline">support@miorganics.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
