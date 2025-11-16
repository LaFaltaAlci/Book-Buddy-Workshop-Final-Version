import useQuery from "./api/useQuery";
import { useParams } from "react-router";

function BookDetails() {
    const {id} = useParams();

  const { data: book, loading, error } = useQuery(`/books/${id}`, "book");
  if (loading || !book) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;
  return (
    <article>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <img src={book.coverimage} alt={book.title} />
    </article>
  );
}

export default BookDetails;
