import React from "react";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../redux/actions/reviewActions";
import "./DeleteReviewModal.css";

const DeleteReviewModal = ({ onClose, reviewID }) => {
  const dispatch = useDispatch();
  
  const handleDeleteReview = () => {
    dispatch(deleteReview(reviewID));
    onClose(); 
  };
  console.log(handleDeleteReview, "handleDeleteReview");

  return (
    <>
      <div className="review-text">
        <strong>Are you sure you want to delete this review?</strong>
      </div>
      <div>
        <button className="yes-btn" onClick={handleDeleteReview}>Yes(Delete Review)</button>
      </div>
      <div>
        <button className="no-btn" onClick={onClose}>
          No(Keep Review)
        </button>
      </div>
    </>
  );
};

export default DeleteReviewModal;
