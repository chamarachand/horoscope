import Axios from "axios";
import styles from "../styles/ReviewCard.module.css";

export const ReviewCard = ({ name, comment, refetch }) => {
  const handleAcceptBtnClick = () => {};

  return (
    <div className={styles.cardContainer}>
      <h2>{name}</h2>
      <p className={styles.comment}>{comment}</p>
      <div className={styles.btnContainer}>
        <button className={`${styles.btn} ${styles.acceptBtn}`} id="acceptBtn">
          Accept
        </button>
        <button className={`${styles.btn} ${styles.rejectBtn}`} id="rejectBtn">
          Reject
        </button>
      </div>
    </div>
  );
};
