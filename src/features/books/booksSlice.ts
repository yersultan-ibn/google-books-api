import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE_URL, API_KEY, BOOKS_DETAILS, BOOKS_SORT } from "./booksAPI";

export const searchBooks = createAsyncThunk(
  "@@books/search-books",
  async (searchQuery: string, { extra: { client } }: any) => {
    let url = `${API_BASE_URL}q=${encodeURIComponent(
      searchQuery
    )}&key=${API_KEY}`;

    const response = await client.get(url);
    return response.data.items;
  }
);

export const loadBooksDetails = createAsyncThunk(
  "@@books/load-books-details",
  async (id: any, { extra: { client } }: any) => {
    const url = BOOKS_DETAILS(id);
    const response = await client.get(url);
    return response.data;
  }
);

export const sortBooks = createAsyncThunk(
  "@@books/sort-books",
  async (sort: any, { extra: { client } }: any) => {
    const url = BOOKS_SORT(sort);
    const response = await client.get(url);
    return response.data;
  }
);

interface BooksState {
  status: boolean | string;
  error: boolean | string | null;
  list: [];
  selectedBook: [];
}

const initialState: any = {
  status: "idle",
  error: null,
  list: "",
  selectedBook: [],
  sortBooks: "",
};

export const booksSlice = createSlice({
  name: "@@books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchBooks.rejected, (state) => {
        state.status = "rejected";
        state.error = true;
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "received";
      })
      .addCase(loadBooksDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadBooksDetails.rejected, (state) => {
        state.status = "rejected";
        state.error = true;
      })
      .addCase(loadBooksDetails.fulfilled, (state, action) => {
        state.selectedBook = action.payload;
        state.status = "received";
      })
      .addCase(sortBooks.fulfilled, (state, action) => {
        state.selectedBook = action.payload;
        state.status = "received";
      });
  },
});
export const booksReducer = booksSlice.reducer;

// selectors
export const selectBooksList = (state: any) => {
  if (state.books) {
    return {
      status: state.books.status,
      error: state.books.error,
      qty: state.books.list.length,
    };
  } else {
    return {
      status: "idle",
      error: null,
      qty: 0,
    };
  }
};

export const selectAllBooks = (state: any) => state.books.list;
export const sortAllBooks = (state: any) => state.books.sortBooks;
console.log(selectAllBooks);
export const selectSearchQuery = (state: any) => {
  if (state.books && state.books.list) {
    return state.books.list;
  } else {
    return ""; // или другое значение по умолчанию
  }
};

export const searchBooksRejected = (state: any) => state.books.error;
export const selectedBookDetails = (state: any) => {
  if (state.books && state.books.selectedBook) {
    return state.books.selectedBook;
  } else {
    return null; // or any other default value
  }
};
