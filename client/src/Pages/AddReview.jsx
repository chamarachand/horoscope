import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./AddReview.module.css";

export const AddReview = ({ toggleAddReview }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(null);

  return (
    <div className={styles.addReviewContainer}>
      <div className={styles.addReviewContent}>
        <h1>Add your review</h1>
        <div className={styles.ratingContent}>
          <p>Rating</p>
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;

            return (
              <FaStar
                key={index}
                size={25}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setRating(
                    currentRating === rating ? rating - 1 : currentRating
                  );
                }}
                color={currentRating <= rating ? "orange" : "grey"}
              />
            );
          })}
        </div>
        <textarea
          className={styles.textarea}
          value={review}
          onChange={(event) => setReview(event.target.value)}
          maxLength={250}
          placeholder="Write your review here.."
        />
        <div className={styles.btnContainer}>
          <button onClick={toggleAddReview} className={styles.btn}>
            Exit
          </button>
          <button className={styles.btn}>Submit</button>
        </div>
      </div>
    </div>
  );
};
