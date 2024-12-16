import React from "react";

const ServiceTable = () => {
  // Data statis untuk Service Table
  const services = [
    {
      id: 1,
      serviceName: "Website Development",
      serviceCategory: "IT Services",
      providerName: "Tech Solutions Inc.",
    },
    {
      id: 2,
      serviceName: "Plumbing Maintenance",
      serviceCategory: "Home Services",
      providerName: "Fix-It Fast Co.",
    },
    {
      id: 3,
      serviceName: "Graphic Design",
      serviceCategory: "Creative Services",
      providerName: "DesignPro Studio",
    },
    {
      id: 4,
      serviceName: "Digital Marketing",
      serviceCategory: "Marketing Services",
      providerName: "AdvertiseHub",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Service Dashboard</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Service Name</th>
            <th className="px-4 py-2 border">Service Category</th>
            <th className="px-4 py-2 border">Provider Name</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td className="px-4 py-2 border">{service.id}</td>
              <td className="px-4 py-2 border">{service.serviceName}</td>
              <td className="px-4 py-2 border">{service.serviceCategory}</td>
              <td className="px-4 py-2 border">{service.providerName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;