import { combineReducers } from "@reduxjs/toolkit";
import booksSlice from "../features/books/booksSlice";

export const rootReducer = combineReducers({
  books: booksSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
