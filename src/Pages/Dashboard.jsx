import React from 'react';
import StatusCard from '../Components/StatusCard';

const Dashboard = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-blue-800">Dashboard</h2>
    <p className="text-gray-700">Real-time monitoring of HealthLink Care cloud systems.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatusCard title="API Server" status="Operational" color="green" />
      <StatusCard title="Database" status="Online" color="green" />
      <StatusCard title="Backup System" status="Healthy" color="green" />
    </div>
  </div>
);

export default Dashboard;
