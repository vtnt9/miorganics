import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">MiOrganics</Link>
            <ul className="flex space-x-4">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-blue-200">{item.title}</Link>
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
          <div className="flex justify-between items-center">
            <p>&copy; 2024 MiOrganics. All rights reserved.</p>
            <ul className="flex space-x-4">
              {navItems.slice(5).map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-gray-300">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;