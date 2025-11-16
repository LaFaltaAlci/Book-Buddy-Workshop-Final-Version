import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <header>
      <Link to="/">
        <img src="/books.png" alt="books" />
      </Link>
      <nav>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/login">Log in</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
