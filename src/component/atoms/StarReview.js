import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const StarReview = ({onStarClick, value}) => {

  const handleStarClick = (selected) => {
    onStarClick(selected);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= value) {
        stars.push(
          <FaStar
            key={i}
            size={25}
            onClick={() => handleStarClick(i)}
            style={{ cursor: "pointer", color: "black" }}
          />
        );
      } else {
        stars.push(
          <FaRegStar
            key={i}
            size={25}
            onClick={() => handleStarClick(i)}
            style={{ cursor: "pointer" }}
          />
        );
      }
    }
    return stars;
  };

  return (
    <div className="star">
      {renderStars()}
      <span className="star-text">Stars</span>
    </div>
  );
};

export default StarReview;
