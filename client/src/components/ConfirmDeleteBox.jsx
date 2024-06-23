import styles from "../styles/ConfirmDeleteBox.module.css";

export const ConfirmDeleteBox = ({ setShowConfirmDeleteBox }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popupContainer}>
        {/* <button
          className={styles.crossBtn}
          onClick={() => setShowConfirmDeleteBox(false)}
        >
          <img src="cross.png" alt="" />
        </button> */}
        <img src="cross.png" alt="" />
        <div>
          <div className={styles.inputContent}>
            <label htmlFor="textarea">
              Please enter the reason for rejecting the review
            </label>
            <textarea className={styles.textarea} id="textarea"></textarea>
          </div>
          <div className={styles.btnContainer}>
            <button
              className={styles.cancelBtn}
              onClick={() => setShowConfirmDeleteBox(false)}
            >
              Cancel
            </button>
            <button className={styles.continueBtn}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};
