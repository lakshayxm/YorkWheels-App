import React, { useState } from 'react';

// Remove the hardcoded vehicles array

// Reusable card component
const VehicleCard = ({ name, price, image, type, city }) => (
  <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-pink-200 transition duration-300 border border-pink-100 group relative">
    <div className="relative">
      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300 bg-gray-100"
        onError={e => { e.target.src = '/logo192.png'; }}
      />
      <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${type === 'Car' ? 'bg-pink-600 text-white' : 'bg-blue-100 text-blue-700'}`}>{type}</span>
      <span className="absolute top-3 right-3 px-2 py-1 rounded bg-white text-pink-700 text-xs border border-pink-200 shadow-sm">{city}</span>
    </div>
    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-800 mb-1 truncate">{name}</h3>
      <p className="mt-2 text-lg font-bold text-pink-600">{price}</p>
    </div>
  </div>
);

const priceRanges = [
  { label: 'Price Range', value: '' },
  { label: 'Under $20,000', value: 'under-20000' },
  { label: '$20,000 - $50,000', value: '20000-50000' },
  { label: '$50,000 - $100,000', value: '50000-100000' },
  { label: 'Over $100,000', value: 'over-100000' },
];

const cities = ['All Cities', 'Toronto', 'Montreal', 'Calgary'];

const Dashboard = () => {
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [allVehicles, setAllVehicles] = useState([]);
  const [searchTouched, setSearchTouched] = useState(false);

  // Fetch vehicles from backend API
  const getAllVehicles = async () => {
    try {
      const response = await fetch('http://localhost:5001/vehicles');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch vehicles:', error);
      return [];
    }
  };

  React.useEffect(() => {
    getAllVehicles().then((data) => {
      setAllVehicles(data);
      setFilteredVehicles(data);
    });
  }, []);

  const handleSearch = () => {
    setSearchTouched(true);
    let results = allVehicles.filter((v) => {
      // Search by name or type
      const matchesSearch =
        search.trim() === '' ||
        v.name.toLowerCase().includes(search.toLowerCase()) ||
        v.type.toLowerCase().includes(search.toLowerCase());
      // Filter by city
      const matchesCity =
        selectedCity === 'All Cities' || v.city === selectedCity;
      // Filter by price
      let matchesPrice = true;
      const priceNum = Number(v.price.replace(/[^\d]/g, ''));
      if (selectedPrice === 'under-20000') matchesPrice = priceNum < 20000;
      else if (selectedPrice === '20000-50000') matchesPrice = priceNum >= 20000 && priceNum <= 50000;
      else if (selectedPrice === '50000-100000') matchesPrice = priceNum > 50000 && priceNum <= 100000;
      else if (selectedPrice === 'over-100000') matchesPrice = priceNum > 100000;
      return matchesSearch && matchesCity && matchesPrice;
    });
    setFilteredVehicles(results);
  };

  React.useEffect(() => {
    if (!searchTouched) setFilteredVehicles(allVehicles);
  }, [searchTouched, allVehicles]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 pb-10 font-sans">
      {/* Hero Search Section */}
      <div className="text-pink-900 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow">Find Premium Vehicles</h1>
        <p className="text-lg md:text-xl mb-8 text-pink-700">
          Discover luxury cars and superbikes – find your dream ride today!
        </p>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto bg-white rounded-full overflow-hidden shadow-xl border border-pink-200 focus-within:ring-2 focus-within:ring-pink-400">
          <input
            type="text"
            placeholder="Car/Bike Make or Model"
            className="flex-1 p-4 text-pink-900 focus:outline-none rounded-full"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select
            className="p-4 border-t md:border-t-0 md:border-l text-pink-900 bg-white focus:outline-none"
            value={selectedCity}
            onChange={e => setSelectedCity(e.target.value)}
          >
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          <select
            className="p-4 border-t md:border-t-0 md:border-l text-pink-900 bg-white focus:outline-none"
            value={selectedPrice}
            onChange={e => setSelectedPrice(e.target.value)}
          >
            {priceRanges.map(pr => (
              <option key={pr.value} value={pr.value}>{pr.label}</option>
            ))}
          </select>
          <button
            className="bg-gradient-to-r from-pink-600 to-pink-400 hover:from-pink-700 hover:to-pink-500 px-8 text-white font-bold transition rounded-none md:rounded-r-full shadow"
            onClick={handleSearch}
          >
            🔍
          </button>
        </div>

        {/* Reset Filters Button */}
        <button
          className="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-pink-50 hover:bg-pink-100 text-pink-700 font-semibold rounded-full shadow border border-pink-200 transition focus:outline-none focus:ring-2 focus:ring-pink-300 group"
          onClick={async () => {
            setSearch('');
            setSelectedCity('All Cities');
            setSelectedPrice('');
            const data = await getAllVehicles();
            setAllVehicles(data);
            setFilteredVehicles(data);
            setSearchTouched(false);
          }}
        >
          {/* Animated Reload Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 transition-transform duration-200 group-hover:scale-110 group-hover:animate-spin"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.93 4.93a10 10 0 0114.14 0m0 0V1m0 3.93h-3.93M19.07 19.07a10 10 0 01-14.14 0m0 0v3.93m0-3.93h3.93"
            />
          </svg>
          Reset Filters
        </button>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-b border-pink-200 mb-10"></div>

      {/* Vehicle Cards Section */}
      <div className="px-4 md:px-12">
        <h2 className="text-3xl font-bold text-pink-800 mb-8">Available Vehicles</h2>
        {filteredVehicles.length === 0 ? (
          <div className="text-center text-pink-500 text-lg font-semibold py-12">
            No vehicles found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredVehicles.map((vehicle, index) => (
              <VehicleCard key={index} {...vehicle} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
