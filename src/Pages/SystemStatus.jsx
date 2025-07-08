const SystemStatus = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-blue-900">Prices</h2>
    <p className="text-gray-600">Status dashboard displaying all critical healthcare cloud services.</p>
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <p className="text-green-600 font-medium">✅ All systems are fully operational.</p>
      <p className="text-xs text-gray-400 mt-1">Last updated: 2 mins ago</p>
    </div>
  </div>
);

export default SystemStatus;
