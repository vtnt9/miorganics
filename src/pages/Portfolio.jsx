import React, { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';

const projects = [
  {
    title: 'XP Maps',
    description: 'A cutting-edge geospatial data visualization platform.',
    image: '/placeholder.svg',
    details: 'XP Maps is our flagship project, revolutionizing how businesses interact with geographical data. It offers real-time visualization, advanced analysis tools, and seamless integration capabilities.',
  },
  {
    title: 'E-commerce Platform',
    description: 'A scalable and customizable e-commerce solution for a major retail client.',
    image: '/placeholder.svg',
    details: 'We developed a robust e-commerce platform that handles millions of transactions daily, featuring advanced inventory management and personalized recommendation systems.',
  },
  {
    title: 'Healthcare Management System',
    description: 'An integrated solution for managing patient records and hospital operations.',
    image: '/placeholder.svg',
    details: 'This comprehensive system streamlines patient care, improves data accuracy, and enhances overall hospital efficiency through intuitive interfaces and powerful backend processing.',
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Our Portfolio</h1>
      <p className="mb-4">Explore some of our most impactful projects that showcase our expertise in custom software development.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md cursor-pointer" onClick={() => setSelectedProject(project)}>
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover mb-4 rounded" />
            <p className="mb-4">{selectedProject.details}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default Portfolio;