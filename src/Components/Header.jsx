import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="bg-gradient-to-r from-pink-900 to-pink-600 shadow-md p-4 flex items-center justify-between">
    <h1 className="text-2xl ml-2 font-bold text-white">YorkWheels</h1>
    <nav className="space-x-12">
      {/* Dashboard */}
      <NavLink to="/" className={({ isActive }) => isActive ? 'text-white font-semibold' : 'text-white'}>Models</NavLink> 
      
      <NavLink to="/services" className={({ isActive }) => isActive ? 'text-white font-semibold' : 'text-white'}>Services</NavLink>
      
      {/* SystemStatus */}
      <NavLink to="/status" className={({ isActive }) => isActive ? 'text-white font-semibold' : 'text-white'}>Prices</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-white font-semibold' : 'text-white'}>Contact</NavLink>
    </nav>
  </header>
);

export default Header;

