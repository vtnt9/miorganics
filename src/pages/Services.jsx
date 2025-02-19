import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs and challenges.',
  },
  {
    title: 'Web Application Development',
    description: 'Responsive and scalable web applications built with the latest technologies and best practices.',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
  },
  {
    title: 'Project Management',
    description: 'Expert project management to ensure timely delivery and seamless integration of your software solutions.',
  },
  {
    title: 'IT Consultation',
    description: 'Strategic technology consulting to help you make informed decisions and optimize your IT infrastructure.',
  },
];

const Services = () => {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4 text-orange-600">Our Services</h1>
        <p className="mb-4 text-gray-800">At MiOrganics, we offer a comprehensive range of software development and IT services to help businesses thrive in the digital age. Our team of experts is committed to delivering high-quality solutions tailored to your unique needs.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="bg-white">
            <CardHeader>
              <CardTitle className="text-orange-600">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-gray-800 p-8 rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">Spotlight: XP Maps</h2>
        <p className="mb-4">XP Maps is one of our flagship projects, showcasing our expertise in custom software development and geospatial technology. This innovative mapping solution has transformed the way businesses interact with and analyze geographical data.</p>
        <h3 className="text-xl font-semibold mb-2 text-orange-300">Key Features:</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Interactive and customizable maps</li>
          <li>Real-time data visualization</li>
          <li>Advanced geospatial analysis tools</li>
          <li>Seamless integration with existing systems</li>
          <li>Cross-platform compatibility</li>
        </ul>
        <p className="mb-4">XP Maps is built using a modern technology stack, including React for the frontend, Node.js for the backend, and PostgreSQL with PostGIS for efficient geospatial data storage and querying.</p>
        <a href="https://www.xpmaps.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Learn more about XP Maps</a>
      </section>
    </div>
  );
};

export default Services;