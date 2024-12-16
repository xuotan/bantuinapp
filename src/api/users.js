import { axiosInstance } from "../lib/axios";

// Helper untuk mendapatkan token dari localStorage
const getAuthHeader = () => {
  const token = localStorage.getItem("jwt");
  return {
    Authorization: `Bearer ${token}`, // Sertakan token di header Authorization
  };
};

// Fetch all users (for Super Admin to manage users)
export const fetchUsers = async () => {
  try {
    const response = await axiosInstance.get("/users", {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching users:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Fetch user by ID
export const fetchUserById = async (id) => {
  try {
    const response = await axiosInstance.get(`/users/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching user with ID ${id}:`,
      error.response?.data || error.message
    );
    throw error;
  }
};

// Update user data
export const updateUser = async (id, userData) => {
  try {
    const response = await axiosInstance.put(`/users/${id}`, userData, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error(
      `Error updating user with ID ${id}:`,
      error.response?.data || error.message
    );
    throw error;
  }
};

// Delete user
export const deleteUser = async (id) => {
  try {
    const response = await axiosInstance.delete(`/users/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error(
      `Error deleting user with ID ${id}:`,
      error.response?.data || error.message
    );
    throw error;
  }
};
