import { Route, Routes } from "react-router";
import Books from "./Books";
import Layout from "./Layout";
import BookDetails from "./BooksDetails";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Books />} />
      <Route path="/books" element={<Books />} />
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="*" element={<h1>404</h1>} />
        </Route>
    </Routes>
  );
}
