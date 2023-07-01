import { combineReducers } from "@reduxjs/toolkit";
import { booksSlice } from "../features/books/booksSlice";
export const rootReducer = combineReducers({
  booksList: booksSlice.reducer,
});
