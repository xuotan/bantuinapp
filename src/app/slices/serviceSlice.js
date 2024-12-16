import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
  loading: false,
  error: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    fetchServicesStart(state) {
      state.loading = true;
    },
    fetchServicesSuccess(state, action) {
      state.loading = false;
      state.services = action.payload;
    },
    fetchServicesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchServicesStart,
  fetchServicesSuccess,
  fetchServicesFailure,
} = serviceSlice.actions;
export default serviceSlice.reducer;
