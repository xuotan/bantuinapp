// src/app/slices/serviceProviderSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchServiceProviders,
  deleteServiceProvider,
  createServiceProvider,
  updateServiceProvider,
} from "../../api/serviceProvider"; // Make sure these imports are correct

export const getServiceProviders = createAsyncThunk(
  "serviceProvider/getServiceProviders",
  async () => {
    const response = await fetchServiceProviders();
    return response.data;
  }
);

export const removeServiceProvider = createAsyncThunk(
  "serviceProvider/removeServiceProvider",
  async (id) => {
    await deleteServiceProvider(id);
    return id;
  }
);

export const editServiceProvider = createAsyncThunk(
  "serviceProvider/editServiceProvider",
  async ({ id, providerData }) => {
    const response = await updateServiceProvider(id, providerData);
    return response.data;
  }
);

export const createNewServiceProvider = createAsyncThunk(
  "serviceProvider/createNewServiceProvider",
  async (providerData) => {
    const response = await createServiceProvider(providerData);
    return response.data;
  }
);

const serviceProviderSlice = createSlice({
  name: "serviceProvider",
  initialState: {
    serviceProviders: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getServiceProviders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getServiceProviders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.serviceProviders = action.payload;
      })
      .addCase(getServiceProviders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeServiceProvider.fulfilled, (state, action) => {
        state.serviceProviders = state.serviceProviders.filter(
          (provider) => provider.id !== action.payload
        );
      })
      .addCase(editServiceProvider.fulfilled, (state, action) => {
        const index = state.serviceProviders.findIndex(
          (provider) => provider.id === action.payload.id
        );
        if (index !== -1) {
          state.serviceProviders[index] = action.payload;
        }
      })
      .addCase(createNewServiceProvider.fulfilled, (state, action) => {
        state.serviceProviders.push(action.payload);
      });
  },
});

export default serviceProviderSlice.reducer;
