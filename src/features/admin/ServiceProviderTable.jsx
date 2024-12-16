// src/features/admin/ServiceProviderTable.jsx

import { useDispatch, useSelector } from "react-redux";
import {
  getServiceProviders,
  removeServiceProvider,
  editServiceProvider,
  createNewServiceProvider,
} from "../../app/slices/serviceProviderSlice";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const ServiceProviderTable = () => {
  const dispatch = useDispatch();
  const { serviceProviders, isLoading, error } = useSelector(
    (state) => state.serviceProvider
  );
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    dispatch(getServiceProviders());
  }, [dispatch]);

  console.log(serviceProviders);

  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure you want to delete this service provider?")
    ) {
      dispatch(removeServiceProvider(id));
    }
  };

  const handleEdit = (provider) => {
    setSelectedProvider(provider);
    reset({
      name: provider.name,
      description: provider.description,
    });
    setIsEditModalOpen(true);
  };

  const handleCreate = () => {
    setIsCreateModalOpen(true);
  };

  const onSubmitEdit = (data) => {
    dispatch(
      editServiceProvider({ id: selectedProvider.id, providerData: data })
    );
    setIsEditModalOpen(false);
  };

  const onSubmitCreate = (data) => {
    dispatch(createNewServiceProvider(data)); // Handle creation
    setIsCreateModalOpen(false);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Service Provider Dashboard</h1>
      <button
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleCreate}
      >
        Create New Service Provider
      </button>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Akun Pengguna</th>
            <th className="px-4 py-2 border">Nama Perusahaan</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {serviceProviders.map((provider) => (
            <tr key={provider.id}>
              <td className="px-4 py-2 border">{provider.id}</td>
              <td className="px-4 py-2 border">{provider.user.username}</td>
              <td className="px-4 py-2 border">{provider.company_name}</td>
              <td className="px-4 py-2 border">
                {provider.company_description?.[0]?.children?.[0]?.text ||
                  "No description available"}
              </td>
              <td className="px-4 py-2 border">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => handleEdit(provider)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={() => handleDelete(provider.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Components (Edit and Create) */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-2xl font-semibold mb-4">
              Edit Service Provider
            </h2>
            <form onSubmit={handleSubmit(onSubmitEdit)}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("name")}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("description")}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-2xl font-semibold mb-4">
              Create New Service Provider
            </h2>
            <form onSubmit={handleSubmit(onSubmitCreate)}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("name")}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("description")}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Create Service Provider
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceProviderTable;
