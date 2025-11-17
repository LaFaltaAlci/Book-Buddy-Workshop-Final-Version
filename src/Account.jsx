import Reservations from "./Reservations"
import useQuery from "./api/useQuery";

function Reservation() {
  const { data: account, loading, error } = useQuery("/users/me");

  if (loading || !account) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return <article>
    <h1>Welcome, {account.firstname} {account.lastname}</h1>
    <p>Your email on file is {account.email}.</p>
    <Reservations reservations={account.reservations} />
  </article>;
}

export default Reservation;
