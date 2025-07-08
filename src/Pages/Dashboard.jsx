import React from 'react';

// Sample vehicle data
const vehicles = [
  {
    type: 'Car',
    name: 'Tesla Model S',
    price: '$89,990',
    image: 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg',
  },
  {
    type: 'Car',
    name: 'Ford Mustang',
    price: '$55,300',
    image: 'https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/cars/mustang/2022/collections/3-2/22_FRD_MST_wdmp_200623_03797_RT.jpg',
  },
  {
    type: 'Bike',
    name: 'Yamaha YZF R3',
    price: '$5,299',
    image: 'https://www.yamaha-motor.eu/content/dam/yamaha-motor-eu/gb/en/products/motorcycles/supersport/yzf-r3/2023/overview/2023-Yamaha-YZF-R3-EU-Icon_Blue-Static-001-03.jpg',
  },
  {
    type: 'Bike',
    name: 'Royal Enfield Classic 350',
    price: '$4,599',
    image: 'https://www.royalenfield.com/content/dam/royal-enfield/continental-gt/gallery/classic-dark-01.png',
  },
];

// Reusable card component
const VehicleCard = ({ name, price, image, type }) => (
  <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-500">{type}</p>
      <p className="mt-2 text-lg font-bold text-green-600">{price}</p>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Search Section */}
      <div className="text-gray-900 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Vehicles</h1>
        <p className="text-lg md:text-xl mb-8">
          Thousands of cars and bikes available – find your dream ride today
        </p>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto bg-gray-100 rounded-lg overflow-hidden shadow">
          <input
            type="text"
            placeholder="Car Make or Model"
            className="flex-1 p-3 text-gray-700 focus:outline-none"
          />
          <select className="p-3 border-t md:border-t-0 md:border-l text-gray-700 bg-white">
            <option>All Cities</option>
            <option>Toronto</option>
            <option>Montreal</option>
            <option>Calgary</option>
          </select>
          <select className="p-3 border-t md:border-t-0 md:border-l text-gray-700 bg-white">
            <option>Price Range</option>
            <option>Under $10,000</option>
            <option>$10,000 - $20,000</option>
            <option>$20,000 - $50,000</option>
          </select>
          <button className="bg-green-500 hover:bg-green-600 px-6 text-white font-bold">
            🔍
          </button>
        </div>

        <button className="mt-4 text-blue-600 underline hover:opacity-80">
          Advanced Filter →
        </button>
      </div>

      {/* Vehicle Cards Section */}
      <div className="px-4 md:px-12 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Available Vehicles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} {...vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
