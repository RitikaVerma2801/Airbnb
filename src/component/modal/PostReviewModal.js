import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./PostReviewModal.css";
import StarReview from "../atoms/StarReview";
import Button from "../common/Button/Button";

const PostReviewModal = ({ onClose, onPostReview, reviewData }) => {
  const [commentValue, setCommentValue] = useState(
    reviewData ? reviewData.comment : ""
  );
  const [starValue, setStarValue] = useState(
    reviewData ? reviewData.starRating : 0
  );

  const { id } = useParams();

  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };

  const handleStarChange = (stars) => {
    setStarValue(stars);
  };

  const getCurrentDateTime = () => {
    const currentDateTime = new Date().toLocaleString();
    return currentDateTime;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewID = reviewData ? reviewData.reviewID : Date.now();
    const reviewDataToUpdate = {
      comment: commentValue,
      starRating: starValue,
      createdAt: reviewData ? reviewData.createdAt : getCurrentDateTime(),
      updatedAt: getCurrentDateTime(),
      spotID: id,
      reviewID: reviewID,
      username: "ritikaverma@gmail.com",
    };
    console.log(reviewDataToUpdate, "reviewDataToUpdate");
    onPostReview(reviewDataToUpdate);
    onClose();
  };

  // console.log("Comment length:", commentValue.length);
  // console.log("Star rating:", starValue);

  const isSubmitDisabled = commentValue.length < 10 || starValue === 0;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="review-container">
          <div className="write-review">
            <textarea
              placeholder="Leave your review here..."
              value={commentValue}
              onChange={handleCommentChange}
            ></textarea>
          </div>
          <StarReview onStarClick={handleStarChange} value={starValue} />
          <div>
            <Button
              type="submit"
              className="submit-btn"
              disabled={isSubmitDisabled}
              label={reviewData ? "Update Review" : "Submit Your Review"}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default PostReviewModal;
