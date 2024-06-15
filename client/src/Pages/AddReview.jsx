import { useState } from "react";
import "./AddReview.css";
import { FaStar } from "react-icons/fa";

export const AddReview = ({ toggleAddReview }) => {
  const [rating, setRating] = useState(0);
  const [ratingColor, setRatingColor] = useState(null);

  return (
    <div className="add-review-container">
      <div className="add-review-content">
        <p>Hello</p>
        <div>
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;

            return (
              <label htmlFor="">
                <input
                  type="radio"
                  name="rate"
                  value={currentRating}
                  onClick={() => setRatingColor(currentRating)}
                />
                <FaStar
                  size={50}
                  color={
                    currentRating <= (ratingColor || rating) ? "yellow" : "grey"
                  }
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};
