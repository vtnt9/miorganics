import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  { name: 'John Doe', role: 'CEO & Founder', bio: 'John has over 20 years of experience in software development and business management.' },
  { name: 'Jane Smith', role: 'CTO', bio: 'Jane is a tech visionary with a passion for creating innovative software solutions.' },
  { name: 'Mike Johnson', role: 'Lead Developer', bio: 'Mike is an expert in full-stack development and has led numerous successful projects.' },
];

const About = () => {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4 text-orange-500">About MiOrganics</h1>
        <p className="mb-4 text-gray-300">MiOrganics is a custom software development company dedicated to creating innovative solutions that drive business growth and efficiency. Founded in 2010, we have been at the forefront of technological advancements, consistently delivering high-quality software products to our clients.</p>
        <p className="mb-4 text-gray-300">Our mission is to empower businesses through cutting-edge technology, providing tailored solutions that address unique challenges and unlock new opportunities.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-orange-400">Our Core Values</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Innovation: We constantly push the boundaries of what's possible in software development.</li>
          <li>Quality: We are committed to delivering robust, scalable, and user-friendly solutions.</li>
          <li>Collaboration: We work closely with our clients to ensure their vision is realized in every project.</li>
          <li>Integrity: We maintain the highest standards of professionalism and ethical conduct.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-orange-400">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-dark-800 text-white">
              <CardHeader>
                <CardTitle className="text-orange-400">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-2">{member.role}</p>
                <p className="text-gray-300">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;