import { AdminNavBar } from "./AdminNavbar";
import { ReviewCard } from "../components/ReviewCard";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import styles from "../styles/ReviewSubmissions.module.css";

export const ReviewSubmissions = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["Review"],
    queryFn: () => {
      return Axios.get("http://localhost:3000/reviews/pending").then(
        (res) => res.data
      );
    },
  });

  if (isError) return <h1>Error loading reviews</h1>;
  if (isLoading) return <h1>Loading</h1>;

  return (
    <div>
      <AdminNavBar />

      <div className={styles.content}>
        <h1>Reviews to be Accepted</h1>
        <div className={styles.reviewsContainer}>
          {data.map((review, index) => {
            return (
              <ReviewCard
                key={index}
                name={review.name}
                comment={review.comment}
                refetch={refetch}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
