import React from 'react';

const TermsOfService = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>By accessing and using the services provided by MiOrganics, you agree to comply with and be bound by these Terms of Service.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">2. Description of Services</h2>
        <p>MiOrganics provides custom software development services, including but not limited to web and mobile application development, IT consultation, and project management.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">3. User Responsibilities</h2>
        <p>Users are responsible for providing accurate information, maintaining the confidentiality of their account information, and using our services in compliance with applicable laws and regulations.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
        <p>All intellectual property rights related to our services and products remain the property of MiOrganics unless explicitly stated otherwise in a separate agreement.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
        <p>MiOrganics shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use of our services.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Modifications to Terms</h2>
        <p>MiOrganics reserves the right to modify these Terms of Service at any time. Users will be notified of significant changes.</p>
      </section>

      <p className="mt-8 text-sm text-gray-600">Last updated: May 1, 2024</p>
    </div>
  );
};

export default TermsOfService;