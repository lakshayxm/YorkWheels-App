import React from 'react';

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 py-12 px-4 md:px-12 font-sans">
    <div className="max-w-3xl mx-auto text-center mb-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4 tracking-tight drop-shadow">Contact YorkWheels</h2>
      <p className="text-lg text-pink-800 max-w-xl mx-auto">
        Reach out to our team for support, partnership opportunities, or any inquiries about our luxury vehicle marketplace.
      </p>
    </div>
    <div className="max-w-xl mx-auto bg-white/95 rounded-2xl shadow-xl border border-pink-100 p-8 flex flex-col gap-4 items-start">
      <div className="flex items-center gap-3 text-pink-700 text-lg">
        <span className="text-2xl">📧</span>
        <span className="font-semibold">Email:</span>
        <a href="mailto:info@yorkwheels.com" className="text-pink-700 hover:underline">info@yorkwheels.com</a>
      </div>
      <div className="flex items-center gap-3 text-pink-700 text-lg">
        <span className="text-2xl">📞</span>
        <span className="font-semibold">Phone:</span>
        <span>(555) 987-6543</span>
      </div>
      <div className="flex items-center gap-3 text-pink-700 text-lg">
        <span className="text-2xl">📍</span>
        <span className="font-semibold">Address:</span>
        <span>123 Luxury Drive, Toronto, ON</span>
      </div>
    </div>
  </div>
);

export default Contact;
