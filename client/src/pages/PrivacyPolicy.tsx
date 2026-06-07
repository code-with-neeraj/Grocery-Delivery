import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Privacy Policy
      </h1>

      <p className="text-gray-600 mb-8">
        Last Updated: June 2026
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Information We Collect
          </h2>
          <p className="text-gray-700">
            SwiftCart collects information such as your name, email address,
            phone number, delivery addresses, order history, and payment-related
            information to provide grocery delivery services efficiently.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Process and deliver your orders.</li>
            <li>Provide customer support.</li>
            <li>Improve our platform and user experience.</li>
            <li>Send important service notifications.</li>
            <li>Prevent fraud and ensure platform security.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Data Security
          </h2>
          <p className="text-gray-700">
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, disclosure, or misuse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Third-Party Services
          </h2>
          <p className="text-gray-700">
            SwiftCart may use trusted third-party services such as payment
            gateways, cloud storage providers, and analytics platforms to
            enhance service quality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Your Rights
          </h2>
          <p className="text-gray-700">
            You may request access, correction, or deletion of your personal
            information by contacting our support team.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Contact Us
          </h2>
          <p className="text-gray-700">
            For privacy-related concerns, contact us at:
          </p>

          <div className="mt-3 p-4 bg-green-50 rounded-lg">
            <p>Email: support@swiftcart.com</p>
            <p>Phone: +91 7277959834</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;