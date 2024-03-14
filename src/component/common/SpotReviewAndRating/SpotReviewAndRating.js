import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const SpotReviewAndRating = () => {
  const [averageStarRating, setAverageStarRating] = useState(0);

  const reviewFormData = useSelector((state) => state?.review?.reviews);

  const { id } = useParams();
  const reviewsForCurrentSpot = reviewFormData.filter(
    (review) => review.spotID === id
  );
  const numberOfReviews = reviewsForCurrentSpot.length;

  useEffect(() => {
    if (numberOfReviews > 0) {
      const sumStarRating = reviewsForCurrentSpot.reduce(
        (total, review) => total + review.starRating,
        0
      );
      const averageRating = sumStarRating / numberOfReviews;
      setAverageStarRating(averageRating);
    }
  }, [reviewsForCurrentSpot, numberOfReviews]);

  return (
    <>
      {numberOfReviews > 0 && (
        <div className="newSpot">
          <FaStar size={25} />
          <span>{averageStarRating.toFixed(1)}</span>
          <span>.</span>
          <span>
            {numberOfReviews} {numberOfReviews > 1 ? "Reviews" : "Review"}
          </span>
        </div>
      )}
    </>
  );
};

export default SpotReviewAndRating;
