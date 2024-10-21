import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">Welcome to MiOrganics</h1>
        <p className="text-xl mb-6 text-gray-300">Custom Software Solutions for Your Business</p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link to="/contact" className="bg-orange-600 text-white hover:bg-orange-700">Contact Us</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/services" className="text-orange-500 border-orange-500 hover:bg-orange-100 hover:text-orange-600">Our Services</Link>
          </Button>
        </div>
      </section>

      <section className="bg-dark-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">About MiOrganics</h2>
        <p className="mb-4 text-gray-300">MiOrganics is a leading custom software development company specializing in creating innovative solutions for businesses across various industries. Our team of expert developers and project managers work tirelessly to deliver high-quality, tailored software that meets your unique needs.</p>
        <Link to="/about" className="text-orange-400 hover:underline">Learn more about us</Link>
      </section>

      <section className="bg-orange-100 p-8 rounded-lg text-dark-800">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Spotlight: XP Maps</h2>
        <p className="mb-4">We're proud to showcase XP Maps, one of our most successful projects. XP Maps is a cutting-edge mapping solution that has revolutionized the way businesses visualize and analyze geographical data.</p>
        <a href="https://www.xpmaps.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Visit XP Maps</a>
      </section>
    </div>
  );
};

export default Home;