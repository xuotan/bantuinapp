// src/api/serviceProviders.js

import { axiosInstance } from "../lib/axios";

// Helper to get the auth token from localStorage
const getAuthHeader = () => {
  const token = localStorage.getItem("jwt");
  return {
    Authorization: `Bearer ${token}`, // Include token in Authorization header
  };
};

// Fetch all service providers
export const fetchServiceProviders = async () => {
  try {
    const response = await axiosInstance.get(
      "/service-providers?populate=user",
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching service providers:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Fetch service provider by ID
export const fetchServiceProviderById = async (id) => {
  try {
    const response = await axiosInstance.get(`/service-providers/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching service provider with ID ${id}:`,
      error.response?.data || error.message
    );
    throw error;
  }
};

// Create a new service provider
export const createServiceProvider = async (providerData) => {
  try {
    const response = await axiosInstance.post(
      "/service-providers",
      providerData,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating service provider:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Update service provider data
export const updateServiceProvider = async (id, providerData) => {
  try {
    const response = await axiosInstance.put(
      `/service-providers/${id}`,
      providerData,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error updating service provider with ID ${id}:`,
      error.response?.data || error.message
    );
    throw error;
  }
};

// Delete service provider
export const deleteServiceProvider = async (id) => {
  try {
    const response = await axiosInstance.delete(`/service-providers/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error(
      `Error deleting service provider with ID ${id}:`,
      error.response?.data || error.message
    );
    throw error;
  }
};
