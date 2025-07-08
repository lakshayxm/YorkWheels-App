import React from 'react';

const Services = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">Our Vehicle Marketplace Services</h2>
    <p className="text-gray-600">
      We provide a seamless experience for buying, selling, and managing vehicles online.
    </p>

    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <li className="bg-white shadow-sm p-4 rounded-lg hover:shadow-md border-l-4 border-green-500">
        <h3 className="font-semibold text-lg">Verified Listings</h3>
        <p className="text-sm text-gray-600">
          All vehicles go through a verification process to ensure authenticity and reliability.
        </p>
      </li>

      <li className="bg-white shadow-sm p-4 rounded-lg hover:shadow-md border-l-4 border-green-500">
        <h3 className="font-semibold text-lg">Instant Vehicle Valuation</h3>
        <p className="text-sm text-gray-600">
          Get real-time pricing insights to help you buy or sell at the best market value.
        </p>
      </li>

      <li className="bg-white shadow-sm p-4 rounded-lg hover:shadow-md border-l-4 border-green-500">
        <h3 className="font-semibold text-lg">Secure Transactions</h3>
        <p className="text-sm text-gray-600">
          Safe and encrypted payments with buyer/seller protection included.
        </p>
      </li>

      <li className="bg-white shadow-sm p-4 rounded-lg hover:shadow-md border-l-4 border-green-500">
        <h3 className="font-semibold text-lg">Doorstep Inspection</h3>
        <p className="text-sm text-gray-600">
          Schedule professional inspections at your location before buying or listing.
        </p>
      </li>
    </ul>
  </div>
);

export default Services;
