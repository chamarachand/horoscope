import { Link } from "react-router-dom";

export const AdminNavBar = () => {
  return (
    <nav className="">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/horoscopes">Hosroscopes</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
        >
          Logout
        </button>
      </ul>
    </nav>
  );
};
