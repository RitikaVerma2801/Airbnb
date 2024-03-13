import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import StarRating from "../../atoms/StarRating";

const Card = ({data}) => {
  const { id, imageSrc, city, state, rating, price } = data;
  return (
    <>
      <Link to={`/spots/${id}`} className="t-decor">
        <div className="card" title={city}>
          <img src={imageSrc} className="card-image" alt="cardImage"/>
          <div className="card-details">
            <div className="location">
              <span className="city">
                {city}, {state}
              </span>
              <span className="rating">
                <StarRating rating={parseFloat(rating)} maxRating={5} />
              </span>
            </div>
            <div className="price">{price}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
