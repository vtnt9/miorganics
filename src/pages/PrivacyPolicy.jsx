import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-2">1. Information Collection</h2>
        <p>We collect personal information that you voluntarily provide to us when you use our services, such as name, email address, and contact information.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">2. Use of Information</h2>
        <p>We use the collected information to provide and improve our services, communicate with you, and comply with legal obligations.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">3. Data Protection</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">4. Data Sharing</h2>
        <p>We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our business, subject to confidentiality agreements.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Cookies</h2>
        <p>We use cookies to enhance your experience on our website. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      </section>

      <p className="mt-8 text-sm text-gray-600">Last updated: May 1, 2024</p>
    </div>
  );
};

export default PrivacyPolicy;