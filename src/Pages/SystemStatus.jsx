//Prices Page

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialForm = {
  type: 'Car',
  name: '',
  year: '',
  city: '',
  price: '',
  image: '',
  description: '',
  contact: '',
};

const cities = ['Toronto', 'Montreal', 'Calgary'];

const SellVehicle = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.year || !form.city || !form.price || !form.image || !form.contact) {
      alert('Please fill all required fields.');
      return;
    }
    const prev = JSON.parse(localStorage.getItem('yorkwheels_user_vehicles') || '[]');
    const newVehicle = { ...form };
    localStorage.setItem('yorkwheels_user_vehicles', JSON.stringify([newVehicle, ...prev]));
    setVehicles([newVehicle, ...vehicles]);
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => {
      setSubmitted(false);
      navigate('/'); // Redirect to Dashboard
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 py-12 px-4 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-2 tracking-tight drop-shadow">Sell Your Vehicle</h2>
          <p className="text-gray-700 mb-4 max-w-2xl mx-auto text-lg">
            List your car or bike for sale on <span className="font-bold text-pink-600">YorkWheels</span>. Fill in the details below and preview your luxury listing in real time!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Form Card */}
          <form onSubmit={handleSubmit} className="bg-white/95 rounded-2xl shadow-2xl p-8 space-y-6 border border-pink-100">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-pink-600 to-pink-400 text-white text-2xl shadow">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </span>
              <h3 className="text-2xl font-bold text-pink-700">Vehicle Details</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1 text-pink-700">Type</label>
                <select name="type" value={form.type} onChange={handleChange} className="w-full p-2 border rounded focus:ring-2 focus:ring-pink-300">
                  <option value="Car">Car</option>
                  <option value="Bike">Bike</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-pink-700">City</label>
                <select name="city" value={form.city} onChange={handleChange} className="w-full p-2 border rounded focus:ring-2 focus:ring-pink-300">
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-pink-700">Make & Model</label>
                <input name="name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded focus:ring-2 focus:ring-pink-300" placeholder="e.g. BMW 3 Series" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-pink-700">Year</label>
                <input name="year" value={form.year} onChange={handleChange} className="w-full p-2 border rounded focus:ring-2 focus:ring-pink-300" placeholder="e.g. 2022" type="number" min="1900" max="2099" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-pink-700">Price (USD)</label>
                <input name="price" value={form.price} onChange={handleChange} className="w-full p-2 border rounded focus:ring-2 focus:ring-pink-300" placeholder="e.g. 25000" type="number" min="1" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-pink-700">Image URL</label>
                <input name="image" value={form.image} onChange={handleChange} className="w-full p-2 border rounded focus:ring-2 focus:ring-pink-300" placeholder="Paste image link here" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-pink-700">Description</label>
              <textarea name="description" value={form.description} onChange={handleChange} className="w-full p-2 border rounded focus:ring-2 focus:ring-pink-300" placeholder="Add details about your vehicle (optional)" rows={2} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-pink-700">Contact Info</label>
              <input name="contact" value={form.contact} onChange={handleChange} className="w-full p-2 border rounded focus:ring-2 focus:ring-pink-300" placeholder="Email or phone" />
            </div>
            <button type="submit" className="w-full mt-2 bg-gradient-to-r from-pink-600 to-pink-400 hover:from-pink-700 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-full transition text-lg shadow-md">
              Put on Sale
            </button>
            {submitted && <div className="text-green-600 font-semibold mt-2 text-center">Your vehicle has been listed!</div>}
          </form>

          {/* Live Preview Card */}
          <div className="bg-white/95 rounded-2xl shadow-2xl p-8 border border-pink-100 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-pink-700">Live Preview</h3>
            <div className="w-full flex flex-col items-center">
              <img
                src={form.image || '/logo192.png'}
                alt={form.name || 'Preview'}
                className="w-48 h-36 object-cover rounded-xl border bg-gray-100 mb-4 shadow"
                onError={e => { e.target.src = '/logo192.png'; }}
              />
              <div className="font-bold text-2xl text-gray-800 mb-1">{form.name || 'Make & Model'}</div>
              <div className="text-gray-500 mb-1 flex items-center gap-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${form.type === 'Car' ? 'bg-pink-100 text-pink-700' : 'bg-blue-100 text-blue-700'}`}>{form.type}</span>
                {form.year && <span className="text-xs">• {form.year}</span>}
                {form.city && <span className="text-xs">• {form.city}</span>}
              </div>
              <div className="text-pink-600 font-bold text-2xl mb-1">{form.price ? `$${Number(form.price).toLocaleString()}` : '$0'}</div>
              <div className="text-gray-600 text-sm mb-1 text-center">{form.description}</div>
              <div className="text-pink-700 text-xs mt-1">{form.contact}</div>
            </div>
          </div>
        </div>

        {/* Listed Vehicles */}
        {vehicles.length > 0 && (
          <div className="max-w-6xl mx-auto mt-16">
            <h3 className="text-2xl font-bold mb-6 text-pink-700">Your Listings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {vehicles.map((v, idx) => (
                <div key={idx} className="bg-white/95 rounded-2xl shadow-2xl hover:shadow-pink-200 transition overflow-hidden border border-pink-100 flex flex-col">
                  <img src={v.image} alt={v.name} className="w-full h-44 object-cover rounded-t-2xl bg-gray-100" onError={e => { e.target.src = '/logo192.png'; }} />
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${v.type === 'Car' ? 'bg-pink-100 text-pink-700' : 'bg-blue-100 text-blue-700'}`}>{v.type}</span>
                      {v.year && <span className="text-xs text-gray-500">• {v.year}</span>}
                      {v.city && <span className="text-xs text-gray-500">• {v.city}</span>}
                    </div>
                    <div className="text-lg font-bold text-gray-800 mb-1">{v.name}</div>
                    <div className="text-pink-600 font-bold text-xl mb-1">${Number(v.price).toLocaleString()}</div>
                    <div className="text-gray-600 text-sm mb-1 flex-1">{v.description}</div>
                    <div className="text-pink-700 text-xs mt-1">{v.contact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellVehicle;
