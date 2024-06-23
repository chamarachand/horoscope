import { useState } from "react";
import Axios from "axios";
import { ConfirmDeleteBox } from "./ConfirmDeleteBox";
import styles from "../styles/ReviewCard.module.css";

export const ReviewCard = ({ reviewId, name, comment, refetch }) => {
  const [showConfirmDeleteBox, setShowConfirmDeleteBox] = useState(false);

  const handleAcceptBtnClick = () => {
    Axios.patch(`http://localhost:3000/reviews/accept/id/${reviewId}`)
      .then(() => {
        console.log("Accepted");
        refetch();
      })
      .catch((error) => console.log("Error", error));
  };

  const handleRejectBtnClick = () => {
    setShowConfirmDeleteBox(true);
  };

  return (
    <div className={styles.cardContainer}>
      <h2>{name}</h2>
      <p className={styles.comment}>{comment}</p>
      <div className={styles.btnContainer}>
        <button
          className={`${styles.btn} ${styles.acceptBtn}`}
          onClick={handleAcceptBtnClick}
        >
          Accept
        </button>
        <button
          className={`${styles.btn} ${styles.rejectBtn}`}
          onClick={handleRejectBtnClick}
        >
          Reject
        </button>
      </div>
      {showConfirmDeleteBox && (
        <ConfirmDeleteBox
          reviewId={reviewId}
          setShowConfirmDeleteBox={setShowConfirmDeleteBox}
          refetch={refetch}
        />
      )}
    </div>
  );
};
