
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4 text-orange-600">About MiOrganics</h1>
        <p className="mb-4 text-gray-800">MiOrganics is a custom software development company dedicated to creating innovative solutions that drive business growth and efficiency. Founded in 2010, we have been at the forefront of technological advancements, consistently delivering high-quality software products to our clients.</p>
        <p className="mb-4 text-gray-800">Our mission is to empower businesses through cutting-edge technology, providing tailored solutions that address unique challenges and unlock new opportunities.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Our Core Values</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Innovation: We constantly push the boundaries of what's possible in software development.</li>
          <li>Quality: We are committed to delivering robust, scalable, and user-friendly solutions.</li>
          <li>Collaboration: We work closely with our clients to ensure their vision is realized in every project.</li>
          <li>Integrity: We maintain the highest standards of professionalism and ethical conduct.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
