import React from 'react';

const StatusCard = ({ title, status, color }) => (
  <div className={`bg-white rounded-lg shadow p-4 border-l-4 border-${color}-500`}>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className={`text-${color}-600 font-medium`}>{status}</p>
  </div>
);

export default StatusCard;
