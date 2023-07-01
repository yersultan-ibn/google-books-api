import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "../features/books/Header";
import { BooksList } from "../features/books/BooksList";

function App() {
  return (
    <>
      <Header />
      <BooksList />
    </>
  );
}

export default App;
