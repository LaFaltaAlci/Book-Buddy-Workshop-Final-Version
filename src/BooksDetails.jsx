import useQuery from "./api/useQuery";
import { useParams } from "react-router";
import { useAuth } from "./auth/AuthContext";

function BookDetails() {
  const { token } = useAuth();
  const { id } = useParams();

  const { data: book, loading, error } = useQuery(`/books/${id}`, "book");
  if (loading || !book) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;
  return (
    <article>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <img src={book.coverimage} alt={book.title} />
      {token &&
        (book.available ? (
          <button>Reserve this book</button>
        ) : (
          <button disabled>This book is already reserved</button>
        ))}
    </article>
  );
}

export default BookDetails;
