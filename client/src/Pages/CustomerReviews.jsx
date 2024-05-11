import React from 'react';
import './CustomerReviews.css';

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
  // Example customer data
  const customers = [
    {
      name: "Customer 1",
      image: "RashiChakraya.png",
      rating: 5,
      review: "Amazing service! Highly recommend."
    },
    {
      name: "Customer 2",
      image: "RashiChakraya.png",
      rating: 4,
      review: "Great experience overall."
    },
    {
      name: "Customer 3",
      image: "RashiChakraya.png",
      rating: 3,
      review: "Good service, but room for improvement."
    },
    {
      name: "Customer 4",
      image: "RashiChakraya.png",
      rating: 3,
      review: "Good service, but room for improvement."
    }
  ];

  return (
    <div className="customerReviewsContainer">
      {customers.map((customer, index) => (
        <CustomerCard
          key={index}
          name={customer.name}
          image={customer.image}
          rating={customer.rating}
          review={customer.review}
        />
      ))}
    </div>
  );
};

export default CustomerReviewsContainer;
