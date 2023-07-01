import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ALL_BOOKS, API_BASE_URL, API_KEY } from "./booksAPI";

// export const loadBooks: any = createAsyncThunk(
//   "@@books/load-books",
//   async (_, { extra: { client, api } }: any) => {
//     return client.get(api.ALL_BOOKS);
//   }
// );
export const searchBooks = createAsyncThunk(
  "@@books/search-books",
  async (searchQuery, { extra: { client } }) => {
    const url = `${API_BASE_URL}q=${encodeURIComponent(
      searchQuery
    )}&key=${API_KEY}`;
    const response = await client.get(url);
    return response.data.items;
  }
);
// export const loadBooks = createAsyncThunk(
//   "@@books/load-books",
//   async (searchQuery: any, { extra: { client } }: any) => {
//     const url = `${API_BASE_URL}q=${encodeURIComponent(
//       searchQuery
//     )}&key=${API_KEY}`;
//     return client.get(url);
//   }
// );

interface BooksState {
  status: boolean | string;
  error: boolean | string | null;
  list: [];
}
// interface Book {
//   id: number;
// }

const initialState: any = {
  status: "idle",
  error: null,
  list: [],
};

export const booksSlice = createSlice({
  name: "@@books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(loadBooks.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(loadBooks.rejected, (state) => {
      //   state.status = "rejected";
      //   state.error = true;
      // })
      // .addCase(loadBooks.fulfilled, (state, action) => {
      //   state.list = action.payload;
      //   state.status = "received";
      // })
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
      });
  },
});
export const booksReducer = booksSlice.reducer;

// selectors
export const selectBooksList = (state: any) => {
  // status: state.books.status,
  // error: state.books.error,
  // qty: state.books.list.length,
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
export const selectSearchQuery = (state: any) => state.books.list;

// export const searchBooksLoading = (state: any) => state.books.status;
export const searchBooksRejected = (state: any) => state.books.error;
