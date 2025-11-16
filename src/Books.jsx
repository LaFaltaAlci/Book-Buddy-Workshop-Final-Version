import useQuery from "./api/useQuery";
import { Link } from "react-router";

export default function Books() {
  const { data: books, loading, error } = useQuery("/books, books");

  if (loading || !books) return <p>loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <ul>
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </ul>
  );
}

function Book({ book }) {
  return (
    <li>
      <img src={book.coverImage} alt={book.title} />
      <Link to={`/books/${book.id}`}>
        <h2>{book.title}</h2>
      </Link>
      <p>{book.author}</p>
      <p>{book.description}</p>
    </li>
  );
}
