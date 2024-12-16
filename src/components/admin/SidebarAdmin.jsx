import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../app/slices/authSlice"; // Path ke authSlice

const SidebarAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Hapus token dari Redux state dan localStorage
    dispatch(logout());
    localStorage.removeItem("jwt");
    navigate("/login"); // Arahkan ke halaman login
  };

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-semibold mb-6">Admin Panel</h2>
      <ul>
        <li className="mb-4">
          <Link to="/admin/settings" className="text-lg hover:text-blue-500">
            Settings
          </Link>
        </li>
        <li className="mb-4">
          <button
            className="text-lg hover:text-blue-500"
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;