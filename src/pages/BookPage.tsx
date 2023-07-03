import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BooksDetails } from "./BooksDetails";
import { Header } from "../features/Header";
import { BooksList } from "./BooksList";

interface BooksPageProps {
  path: string | number;
}

export const BooksPage = (): any => {
  return (
    <Routes>
      <Route path="/" element={<BooksList />} />
      <Route path="/books/:id" element={<BooksDetails />} />
    </Routes>
  );
};
