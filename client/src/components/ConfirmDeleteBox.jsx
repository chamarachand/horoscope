import { useState } from "react";
import Axios from "axios";
import styles from "../styles/ConfirmDeleteBox.module.css";

export const ConfirmDeleteBox = ({
  reviewId,
  setShowConfirmDeleteBox,
  refetch,
}) => {
  const [rejectReason, setRejectReason] = useState(null);
  const [error, setError] = useState(null);

  const handleContinueBtnClick = () => {
    if (!rejectReason)
      return setError("Please provide a reason for rejecting the review");

    if (rejectReason?.length < 5)
      return setError("Please provide a valid and descriptive reason");

    Axios.patch(`http://localhost:3000/reviews/reject/id/${reviewId}`, {
      reason: rejectReason,
    })
      .then(() => {
        console.log("Rejected success");
        setShowConfirmDeleteBox(false);
        refetch();
      })
      .catch((error) => console.log("Error", error));
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popupContainer}>
        <div className={styles.crossBtnContainer}>
          <button
            className={styles.crossBtn}
            onClick={() => setShowConfirmDeleteBox(false)}
          >
            <img src="/cross.png" alt="" />
          </button>
        </div>

        <div>
          <div className={styles.inputContent}>
            <label htmlFor="textarea">
              Please enter the reason for rejecting the review
            </label>
            <textarea
              className={styles.textarea}
              id="textarea"
              onChange={(event) => setRejectReason(event.target.value.trim())}
            ></textarea>
            <p className={styles.error}>{error}</p>
          </div>
          <div className={styles.btnContainer}>
            <button
              className={styles.cancelBtn}
              onClick={() => setShowConfirmDeleteBox(false)}
            >
              Cancel
            </button>
            <button
              className={styles.continueBtn}
              onClick={handleContinueBtnClick}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
