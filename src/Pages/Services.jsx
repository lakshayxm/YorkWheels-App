const Services = () => (
   <div className="space-y-6">
    <h2 className="text-2xl font-bold text-blue-900">Cloud-Powered Healthcare Services</h2>
    <p className="text-gray-600">Our robust platform ensures operational excellence, patient data security, and rapid recovery during disruptions.</p>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <li className="bg-white shadow-sm p-4 rounded-lg hover:shadow-md border-l-4 border-blue-500">
        <h3 className="font-semibold text-lg">Secure Health Records</h3>
        <p className="text-sm text-gray-600">Encrypted storage with regular automated backups and access control.</p>
      </li>
      <li className="bg-white shadow-sm p-4 rounded-lg hover:shadow-md border-l-4 border-blue-500">
        <h3 className="font-semibold text-lg">Real-Time System Monitoring</h3>
        <p className="text-sm text-gray-600">Visibility into all critical services with proactive alerts and dashboards.</p>
      </li>
      <li className="bg-white shadow-sm p-4 rounded-lg hover:shadow-md border-l-4 border-blue-500">
        <h3 className="font-semibold text-lg">Automated Failover</h3>
        <p className="text-sm text-gray-600">Minimize downtime with seamless system recovery strategies.</p>
      </li>
      <li className="bg-white shadow-sm p-4 rounded-lg hover:shadow-md border-l-4 border-blue-500">
        <h3 className="font-semibold text-lg">HIPAA/GDPR Compliance</h3>
        <p className="text-sm text-gray-600">Stay audit-ready with integrated compliance support.</p>
      </li>
    </ul>
  </div>
);


export default Services;
