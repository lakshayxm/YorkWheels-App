import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Services from '../Pages/Services';
import SystemStatus from '../Pages/SystemStatus';
import Contact from '../Pages/Contact';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/services" element={<Services />} />
    <Route path="/status" element={<SystemStatus />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
