import { useNavigate } from "react-router-dom";
import CategoryTable from "./Table Admin/CategoryTable";
import ServiceProviderTable from "./ServiceProviderTable";
import UserTable from "./Table Admin/UserTable";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ServiceTable from "./Table Admin/ServiceTable";
import TransactionTable from "./Table Admin/TransactionTable";
import RequestProviderTable from "./Table Admin/RequestProviderTable";

const DashboardAdmin = () => {
  const token = useSelector((state) => state.auth.token); // Ambil token dari Redux
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      const storedToken = localStorage.getItem("jwt");
      if (!storedToken) {
        navigate("/login"); // Jika tidak ada token, arahkan ke login
      }
    }
  }, [token, navigate]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tabel User */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">User Table</h2>
          <UserTable />
        </div>

        {/* Tabel Category */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Category Table</h2>
          <CategoryTable />
        </div>

        {/* Tabel Service Provider */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Service Provider Table</h2>
          <ServiceProviderTable />
        </div>

        {/* Tabel Service */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Service Table</h2>
          <ServiceTable />
        </div>

        {/* Tabel Transaction */}
        <div className="bg-white p-4 rounded-lg shadow-lg md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Transaction Table</h2>
          <TransactionTable />
        </div>
        {/* Tabel Request Provider */}
        <div className="bg-white p-4 rounded-lg shadow-lg md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Request Provider Table</h2>
          <RequestProviderTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;