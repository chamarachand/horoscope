import { useState } from "react";
import "./AddReview.css";
import { FaStar } from "react-icons/fa";

export const AddReview = ({ toggleAddReview }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(null);

  return (
    <div className="add-review-container">
      <div className="add-review-content">
        <h1>Add your review</h1>
        <div className="rating-content">
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
          value={review}
          onChange={(event) => setReview(event.target.value)}
          maxLength={250}
          placeholder="Write your review here.."
        />
        <button>Submit</button>
        <button onClick={toggleAddReview}>Exit</button>
      </div>
    </div>
  );
};
