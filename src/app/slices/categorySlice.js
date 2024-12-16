// src/app/slices/categorySlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchCategories,
  deleteCategory,
  createCategory,
  updateCategory,
} from "../../api/categories"; // Make sure these imports are correct

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    const response = await fetchCategories();
    return response.data;
  }
);

export const removeCategory = createAsyncThunk(
  "category/removeCategory",
  async (id) => {
    await deleteCategory(id);
    return id;
  }
);

export const editCategory = createAsyncThunk(
  "category/editCategory",
  async ({ id, categoryData }) => {
    const response = await updateCategory(id, categoryData);
    return response.data;
  }
);

export const createNewCategory = createAsyncThunk(
  "category/createNewCategory",
  async (categoryData) => {
    const response = await createCategory(categoryData);
    return response.data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (category) => category.id !== action.payload
        );
      })
      .addCase(editCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex(
          (category) => category.id === action.payload.id
        );
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(createNewCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      });
  },
});

export default categorySlice.reducer;
