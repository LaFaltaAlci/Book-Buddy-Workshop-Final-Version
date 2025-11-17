import { Link, NavLink } from "react-router";
import { useAuth } from "./auth/AuthContext";

function Navbar() {
  const { token, logout } = useAuth();

  return (
    <header>
      <Link to="/">
        <img src="/books.png" alt="books" />
        <p>Book Buddy</p>
      </Link>
      <nav>
        <NavLink to="/books">Books</NavLink>
        {token ? (
          <a href="#" onClick={logout}>
            Log out
          </a>
        ) : (
          <NavLink to="/login">Log in</NavLink>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
