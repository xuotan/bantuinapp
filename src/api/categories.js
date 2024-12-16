// src/api/categories.js

import { axiosInstance } from "../lib/axios";

// Helper to get the auth token from localStorage
const getAuthHeader = () => {
  const token = localStorage.getItem("jwt");
  return {
    Authorization: `Bearer ${token}`, // Include token in Authorization header
  };
};

// Fetch all categories
export const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get("/categories", {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching categories:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Fetch category by ID
export const fetchCategoryById = async (id) => {
  try {
    const response = await axiosInstance.get(`/categories/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching category with ID ${id}:`,
      error.response?.data || error.message
    );
    throw error;
  }
};

// Create a new category
export const createCategory = async (categoryData) => {
  try {
    const response = await axiosInstance.post("/categories", categoryData, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error creating category:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Update category data
export const updateCategory = async (id, categoryData) => {
  try {
    const response = await axiosInstance.put(
      `/categories/${id}`,
      categoryData,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error updating category with ID ${id}:`,
      error.response?.data || error.message
    );
    throw error;
  }
};

// Delete category
export const deleteCategory = async (id) => {
  try {
    const response = await axiosInstance.delete(`/categories/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error(
      `Error deleting category with ID ${id}:`,
      error.response?.data || error.message
    );
    throw error;
  }
};
