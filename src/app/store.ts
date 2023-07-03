import { configureStore, createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

// import * as api from "../features/books/booksAPI";
import axios from "axios";
import { booksReducer } from "../features/books/booksSlice";

export const store = configureStore({
  reducer: {
    booksArr: booksReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {
          client: axios,
        },
      },
      serializableCheck: false,
    }),
});
