import "./AddReview.css";

export const AddReview = ({ toggleAddReview }) => {
  return (
    <div className="add-review-container">
      <div className="add-review-content">
        <h3>Hello</h3>
        <span className="close" onClick={toggleAddReview}>
          &times;
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          magnam, tempora id culpa nobis nesciunt quia autem laudantium laborum
          fuga rerum dolor consequatur ea sed.
        </p>
      </div>
    </div>
  );
};
