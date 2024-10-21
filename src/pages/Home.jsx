import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="space-y-12 bg-pattern">
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-6 text-orange-600">Welcome to MiOrganics</h1>
        <p className="text-2xl mb-8 text-gray-700">Custom Software Solutions for Your Business</p>
        <div className="flex justify-center space-x-4">
          <Button asChild className="bg-orange-500 text-white hover:bg-orange-600">
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-100 hover:text-orange-700">
            <Link to="/services">Our Services</Link>
          </Button>
        </div>
      </section>

      <section className="bg-gray-800 p-8 rounded-lg shadow-lg text-white">
        <h2 className="text-3xl font-bold mb-4 text-orange-400">About MiOrganics</h2>
        <p className="mb-4">MiOrganics is a leading custom software development company specializing in creating innovative solutions for businesses across various industries. Our team of expert developers and project managers work tirelessly to deliver high-quality, tailored software that meets your unique needs.</p>
        <Link to="/about" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">Learn more about us</Link>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-orange-600">Spotlight: XP Maps</h2>
        <p className="mb-4 text-gray-700">We're proud to showcase XP Maps, one of our most successful projects. XP Maps is a cutting-edge mapping solution that has revolutionized the way businesses visualize and analyze geographical data.</p>
        <a href="https://www.xpmaps.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 transition-colors duration-200">Visit XP Maps</a>
      </section>
    </div>
  );
};

export default Home;