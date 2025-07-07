import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="bg-gradient-to-r from-blue-900 to-blue-600 shadow-md p-4 flex items-center justify-between">
    <h1 className="text-2xl ml-2 font-bold text-white">HealthLink Care</h1>
    <nav className="space-x-12">
      <NavLink to="/" className={({ isActive }) => isActive ? 'text-white font-semibold' : 'text-white'}>Dashboard</NavLink>
      <NavLink to="/services" className={({ isActive }) => isActive ? 'text-white font-semibold' : 'text-white'}>Services</NavLink>
      <NavLink to="/status" className={({ isActive }) => isActive ? 'text-white font-semibold' : 'text-white'}>System Status</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-white font-semibold' : 'text-white'}>Contact</NavLink>
    </nav>
  </header>
);

export default Header;

