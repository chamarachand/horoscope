import { AdminNavBar } from "./AdminNavbar";
import { ReviewCard } from "../components/ReviewCard";
import styles from "../styles/ReviewSubmissions.module.css";

export const ReviewSubmissions = () => {
  return (
    <div>
      <AdminNavBar />

      <div className={styles.content}>
        <h1>Reviews to be Accepted</h1>
        <div className={styles.reviewsContainer}>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};
