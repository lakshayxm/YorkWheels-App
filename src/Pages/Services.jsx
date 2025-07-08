import React from 'react';

const services = [
  {
    title: 'Verified Listings',
    desc: 'All vehicles are thoroughly verified for authenticity and quality, ensuring you only see the best cars and bikes on YorkWheels.',
    icon: '✅',
  },
  {
    title: 'Instant Vehicle Valuation',
    desc: 'Get real-time, data-driven price estimates to help you buy or sell at the best market value.',
    icon: '💰',
  },
  {
    title: 'Secure Transactions',
    desc: 'Safe, encrypted payments and buyer/seller protection for every transaction.',
    icon: '🔒',
  },
  {
    title: 'Concierge Service',
    desc: 'Personalized assistance for test drives, paperwork, and delivery—enjoy a seamless luxury experience.',
    icon: '🤝',
  },
  {
    title: 'Premium Support',
    desc: 'Our dedicated team is available 24/7 to help with any questions or issues.',
    icon: '🎧',
  },
  {
    title: 'Elite Dealer Network',
    desc: 'Connect with trusted, top-rated dealers and private sellers across the country.',
    icon: '🏆',
  },
];

const Services = () => (
  <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 py-12 px-4 md:px-12 font-sans">
    <div className="max-w-5xl mx-auto text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4 tracking-tight drop-shadow">Our Premium Services</h2>
      <p className="text-lg text-pink-800 max-w-2xl mx-auto">
        YorkWheels offers a suite of luxury marketplace services to make buying and selling vehicles effortless, secure, and rewarding.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {services.map((s, idx) => (
        <div key={idx} className="bg-white/95 rounded-2xl shadow-xl hover:shadow-pink-200 transition border border-pink-100 p-7 flex flex-col items-center text-center">
          <div className="text-4xl mb-3">{s.icon}</div>
          <h3 className="font-bold text-xl text-pink-700 mb-2">{s.title}</h3>
          <p className="text-gray-700 text-base">{s.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
