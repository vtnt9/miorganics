import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to MiOrganics</h1>
        <p className="text-xl mb-6">Custom Software Solutions for Your Business</p>
        <div className="flex justify-center space-x-4">
          <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Contact Us</Link>
          <Link to="/services" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Our Services</Link>
          <Link to="/portfolio" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">Portfolio</Link>
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">About MiOrganics</h2>
        <p className="mb-4">MiOrganics is a leading custom software development company specializing in creating innovative solutions for businesses across various industries. Our team of expert developers and project managers work tirelessly to deliver high-quality, tailored software that meets your unique needs.</p>
        <Link to="/about" className="text-blue-600 hover:underline">Learn more about us</Link>
      </section>

      <section className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Spotlight: XP Maps</h2>
        <p className="mb-4">We're proud to showcase XP Maps, one of our most successful projects. XP Maps is a cutting-edge mapping solution that has revolutionized the way businesses visualize and analyze geographical data.</p>
        <a href="https://www.xpmaps.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Visit XP Maps</a>
      </section>
    </div>
  );
};

export default Home;