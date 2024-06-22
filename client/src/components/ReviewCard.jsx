import styles from "../styles/ReviewCard.module.css";

export const ReviewCard = () => {
  return (
    <div className={styles.cardContainer}>
      <h2>Wimukthi Perera</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        similique asperiores, ipsa consequuntur nobis laborum ea placeat nisi
        vel sunt dicta recusandae sed aperiam animi!
      </p>
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
