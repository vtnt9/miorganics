import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
      <h1 className="text-3xl font-bold mb-4 text-orange-600">Our Portfolio</h1>
      <p className="mb-4 text-gray-800">Explore some of our most impactful projects that showcase our expertise in custom software development.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white cursor-pointer hover:bg-gray-50 transition-colors duration-200">
            <CardHeader>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded" />
              <CardTitle className="text-orange-600">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{project.description}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="mt-4 text-orange-600 hover:underline" onClick={() => setSelectedProject(project)}>Learn More</button>
                </DialogTrigger>
                <DialogContent className="bg-white text-gray-800">
                  <DialogHeader>
                    <DialogTitle className="text-orange-600">{project.title}</DialogTitle>
                  </DialogHeader>
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover mb-4 rounded" />
                  <p className="text-gray-700">{project.details}</p>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;