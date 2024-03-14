import React from "react";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../redux/actions/reviewActions";
import "./DeleteReviewModal.css";
import Button from "../common/Button/Button";

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
        <Button onClick={handleDeleteReview} label="Yes(Delete Review)"/>
      </div>
      <div>
        <Button onClick={onClose} label="No(Keep Review)" className="no-btn" />
      </div>
    </>
  );
};

export default DeleteReviewModal;
