import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const StarRating = ({ rating, maxRating }) => {
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      stars.push(<AiFillStar key={i} size={15} fill="gold" />);
    } else {
      stars.push(<AiOutlineStar key={i} size={15} fill="grey" />);
    }
  }
  return <div>{stars}</div>;
};

export default StarRating;
