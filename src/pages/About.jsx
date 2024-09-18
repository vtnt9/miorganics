import React from 'react';

const teamMembers = [
  { name: 'John Doe', role: 'CEO & Founder', bio: 'John has over 20 years of experience in software development and business management.' },
  { name: 'Jane Smith', role: 'CTO', bio: 'Jane is a tech visionary with a passion for creating innovative software solutions.' },
  { name: 'Mike Johnson', role: 'Lead Developer', bio: 'Mike is an expert in full-stack development and has led numerous successful projects.' },
];

const About = () => {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">About MiOrganics</h1>
        <p className="mb-4">MiOrganics is a custom software development company dedicated to creating innovative solutions that drive business growth and efficiency. Founded in 2010, we have been at the forefront of technological advancements, consistently delivering high-quality software products to our clients.</p>
        <p className="mb-4">Our mission is to empower businesses through cutting-edge technology, providing tailored solutions that address unique challenges and unlock new opportunities.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Our Core Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Innovation: We constantly push the boundaries of what's possible in software development.</li>
          <li>Quality: We are committed to delivering robust, scalable, and user-friendly solutions.</li>
          <li>Collaboration: We work closely with our clients to ensure their vision is realized in every project.</li>
          <li>Integrity: We maintain the highest standards of professionalism and ethical conduct.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;