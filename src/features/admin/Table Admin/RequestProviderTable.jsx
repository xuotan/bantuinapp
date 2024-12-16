import React from "react";

const RequestProviderTable = () => {
  // Contoh data statis untuk table "Request menjadi Provider"
  const requests = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main Street, Jakarta",
      dateOfBirth: "1990-01-15",
      skills: "Plumbing",
      category: "Home Services",
      ktpImage: "https://via.placeholder.com/100",
      skckImage: "https://via.placeholder.com/100",
      email: "johndoe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Oak Avenue, Bandung",
      dateOfBirth: "1985-06-20",
      skills: "Electrical Repairs",
      category: "Technical Services",
      ktpImage: "https://via.placeholder.com/100",
      skckImage: "https://via.placeholder.com/100",
      email: "janesmith@example.com",
    },
  ];

  const handleAccept = (id) => {
    alert(`Request with ID ${id} has been accepted.`);
  };

  const handleReject = (id) => {
    alert(`Request with ID ${id} has been rejected.`);
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Request Menjadi Provider</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border">No</th>
            <th className="px-4 py-2 border">Nama</th>
            <th className="px-4 py-2 border">Alamat</th>
            <th className="px-4 py-2 border">Tanggal Lahir</th>
            <th className="px-4 py-2 border">Keahlian</th>
            <th className="px-4 py-2 border">Kategori</th>
            <th className="px-4 py-2 border">KTP</th>
            <th className="px-4 py-2 border">SKCK</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={request.id}>
              <td className="px-4 py-2 border text-center">{index + 1}</td>
              <td className="px-4 py-2 border">{request.name}</td>
              <td className="px-4 py-2 border">{request.address}</td>
              <td className="px-4 py-2 border">{request.dateOfBirth}</td>
              <td className="px-4 py-2 border">{request.skills}</td>
              <td className="px-4 py-2 border">{request.category}</td>
              <td className="px-4 py-2 border text-center">
                <img
                  src={request.ktpImage}
                  alt="KTP"
                  className="w-16 h-16 object-cover mx-auto"
                />
              </td>
              <td className="px-4 py-2 border text-center">
                <img
                  src={request.skckImage}
                  alt="SKCK"
                  className="w-16 h-16 object-cover mx-auto"
                />
              </td>
              <td className="px-4 py-2 border">{request.email}</td>
              <td className="px-4 py-2 border text-center">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => handleAccept(request.id)}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={() => handleReject(request.id)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestProviderTable;