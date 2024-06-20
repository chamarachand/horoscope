import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./AdminNavbar.module.css";

export const AdminNavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/admin">Home</Link>
        </li>
        <li>
          <Link to="/admin/horoscopes">Hosroscopes</Link>
        </li>
        <li>
          <Link to="/admin/reviews">Reviews</Link>
        </li>
        <button
          className={styles.btn}
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/admin");
            window.location.reload();
          }}
        >
          Logout
        </button>
      </ul>
    </nav>
  );
};
