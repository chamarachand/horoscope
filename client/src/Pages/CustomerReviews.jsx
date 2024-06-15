import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import "./CustomerReviews.css";

const CustomerCard = ({ name, image, rating, review }) => {
  // Function to generate star icons based on rating
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }
    return stars;
  };

  return (
    <div className="customerCard">
      <img src={image} alt={name} className="cardImage" />
      <div className="card-content">
        <h2>{name}</h2>
        <div className="star-rating">{generateStars()}</div>
        <p>{review}</p>
      </div>
    </div>
  );
};

const CustomerReviewsContainer = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["Review"],
    queryFn: () => {
      return Axios.get("http://localhost:3000/reviews/4").then(
        (res) => res.data
      );
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error Loading Reviews</div>;

  return (
    <div className="reviewContainer">
      <div className="customerReviews">
        <h1 className="reviews-title">Customer Reviews</h1>
        {data.map((review, index) => (
          <CustomerCard
            key={index}
            name={review.name}
            image="RashiChakraya.png"
            rating={review.rating}
            review={review.comment}
          />
        ))}
      </div>
      <div className="add-review-btn-container">
        <button>Add Your Review</button>
      </div>
    </div>
  );
};

export default CustomerReviewsContainer;
