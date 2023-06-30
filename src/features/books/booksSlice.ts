import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import {
  fetchBooksByAuthor,
  fetchBooksByKeywords,
  fetchBooksByTitle,
} from "./booksAPI";

interface BooksState {
  loading: boolean;
  error: string | null;
  books: Book[];
}

interface Book {
  id: string;
  title: string;
  author: string;
  keywords: string[];
}

const initialState: BooksState = {
  loading: false,
  error: null,
  books: [],
};

export const searchByAuthor = createAsyncThunk(
  "books/searchByAuthor",
  async (author: string) => {
    const response = await fetchBooksByAuthor(author);
    return response.data;
  }
);

export const searchByKeywords = createAsyncThunk(
  "books/searchByKeywords",
  async (keywords: string) => {
    const response = await fetchBooksByKeywords(keywords);
    return response.data;
  }
);

export const searchByTitle = createAsyncThunk(
  "books/searchByTitle",
  async (title: string) => {
    const response = await fetchBooksByTitle(title);
    return response.data;
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchByAuthor.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.books = [];
      })
      .addCase(searchByAuthor.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(searchByAuthor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch books by author";
      })
      .addCase(searchByKeywords.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.books = [];
      })
      .addCase(searchByKeywords.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(searchByKeywords.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to fetch books by keywords";
      })
      .addCase(searchByTitle.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.books = [];
      })
      .addCase(searchByTitle.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(searchByTitle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch books by title";
      });
  },
});

export const selectBooksLoading = (state: RootState) => state.books.loading;
export const selectBooksError = (state: RootState) => state.books.error;
export const selectBooks = (state: RootState) => state.books.books;

export default booksSlice.reducer;
