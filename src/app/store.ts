import { createAsyncThunk } from "@reduxjs/toolkit";

import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "../features/books/booksSlice";
import {
  fetchBooksByAuthor,
  fetchBooksByKeywords,
  fetchBooksByTitle,
} from "../features/books/booksAPI";

// Создание асинхронных санок с использованием createAsyncThunk
export const searchBooksByAuthor = createAsyncThunk(
  "books/searchByAuthor",
  async (author: string) => {
    const response = await fetchBooksByAuthor(author);
    return response;
  }
);

export const searchBooksByKeywords = createAsyncThunk(
  "books/searchByKeywords",
  async (keywords: string) => {
    const response = await fetchBooksByKeywords(keywords);
    return response;
  }
);

export const searchBooksByTitle = createAsyncThunk(
  "books/searchByTitle",
  async (title: string) => {
    const response = await fetchBooksByTitle(title);
    return response;
  }
);

// Создание хранилища
const store = configureStore({
  reducer: {
    books: booksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
