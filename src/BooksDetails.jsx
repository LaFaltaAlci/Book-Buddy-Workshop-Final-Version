import useQuery from "./api/useQuery";
import { useNavigate, useParams } from "react-router";
import { useAuth } from "../auth/AuthContext";
import useMutation from "./api/useMutation";

function BookDetails() {
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: book, loading, error } = useQuery(`/books/${id}`, "book");

  const { mutate: reserve } = useMutation("POST", "/reservations", [
    "books",
    "book",
  ]);

  const reserveBook = async () => {
    const success = await reserve({ bookId: id });
    if (success) navigate("/account");
  };

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
          <button onClick={reserveBook}>Reserve this book</button>
        ) : (
          <button disabled>This book is already reserved</button>
        ))}
    </article>
  );
}

export default BookDetails;
