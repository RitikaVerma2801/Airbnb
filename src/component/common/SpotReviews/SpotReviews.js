import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./SpotReviews.css";
import PostReviewModal from "../../modal/PostReviewModal";
import DeleteReviewModal from "../../modal/DeleteReviewModal";
import ModalPopup from "../../modal/ModalPopup";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addReview, updateReview } from "../../../redux/actions/reviewActions";

const SpotReviews = ({ cityName }) => {
  const [isPostReviewModalOpen, setPostReviewModalOpen] = useState(false);
  const [isDeleteReviewModalOpen, setDeleteReviewModalOpen] = useState(false);
  const [averageStarRating, setAverageStarRating] = useState(0);
  const [selectedReviewID, setSelectedReviewID] = useState(null);
  const [selectedReviewData, setSelectedReviewData] = useState(null);
  // const [hasExistingReview, setHasExistingReview] = useState(false);

  const reviewFormData = useSelector((state) => state?.review?.reviews);
  console.log(reviewFormData, "reviewFormData");

  const dispatch = useDispatch();
  const { id } = useParams();
  const reviewsForCurrentSpot = reviewFormData.filter(
    (review) => review.spotID === id
  );
  console.log(reviewsForCurrentSpot, "reviewsForCurrentSpot");
  const numberOfReviews = reviewsForCurrentSpot.length;

  // const numberOfReviews = reviewFormData.filter(
  //   (review) => review.spotID === id
  // ).length;

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

  const openPostReviewModal = (reviewData) => {
    setPostReviewModalOpen(true);
    setSelectedReviewData(reviewData);
  };

  const openDeleteReviewModal = (reviewID) => {
    setSelectedReviewID(reviewID);
    setDeleteReviewModalOpen(true);
  };

  const closeModal = () => {
    setPostReviewModalOpen(false);
    setDeleteReviewModalOpen(false);
    setSelectedReviewData(null);
  };

  const handlePostReview = (reviewData) => {
    if (selectedReviewData) {
      dispatch(updateReview(reviewData));
    } else {
      dispatch(addReview(reviewData));
    }
    closeModal();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  // const checkExistingReview = () => {
  //   const existingReview = reviewFormData.find(
  //     (review) =>
  //       review.spotID === id && review.username === "ritikaverma@gmail.com"
  //   );
  //   setHasExistingReview(!!existingReview);
  // };

  // useEffect(() => {
  //   checkExistingReview();
  // }, [reviewFormData]);

  return (
    <>
      <div className="spotReview">
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

        {numberOfReviews > 0 ? (
          reviewsForCurrentSpot.map((review, index) => (
            <div key={index} className="addNewSpot">
              <div className="spotData">
                <div>
                  <strong>{review.username}</strong>
                </div>
                <span>{formatDate(review.createdAt)}</span>
                <p>{review.comment}</p>
              </div>
              <button
                className="update-btn"
                onClick={() => openPostReviewModal(review)}
              >
                Update
              </button>
              <button
                className="delete-btn"
                onClick={() => openDeleteReviewModal(review.reviewID)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div className="addNewSpot">
            <div className="newSpot">
              <FaStar size={25} />
              <span>New</span>
            </div>
            <button onClick={() => openPostReviewModal(null)}>
              Post your Review
            </button>
            <div>
              <strong>Be the first to post a review!</strong>
            </div>
          </div>
        )}

        {/* {hasExistingReview ? (
          <div className="addNewSpot">
            <div className="newSpot">
              <FaStar size={25} />
              <span>
                {parseFloat(reviewFormData[0]?.starRating).toFixed(1)}
              </span>
              <span>.</span>
              <span>{numberOfReviews} Review</span>
            </div>
            <div className="spotData">
              <div>
                <strong>{reviewFormData[0]?.username}</strong>
              </div>
              <span>{reviewFormData[0]?.createdAt}</span>
              <p>{reviewFormData[0]?.comment}</p>
            </div>
            <button onClick={openDeleteReviewModal}>Delete</button>
          </div>
        ) : (
          <div className="addNewSpot">
            <div className="newSpot">
              <FaStar size={25} />
              <span>New</span>
            </div>
            <button onClick={openPostReviewModal}>Post your Review </button>
            <div>
              <strong>Be the first to post a review!</strong>
            </div>
          </div>
        )} */}

        {(isPostReviewModalOpen || isDeleteReviewModalOpen) && (
          <ModalPopup
            onClose={closeModal}
            width="540px"
            title={
              isPostReviewModalOpen
                ? selectedReviewData
                  ? `How was your stay at ${cityName}`
                  : "How was your stay"
                : "Confirm Delete"
            }
          >
            {isPostReviewModalOpen ? (
              <PostReviewModal
                onClose={closeModal}
                reviewData={selectedReviewData}
                onPostReview={handlePostReview}
              />
            ) : (
              <DeleteReviewModal
                onClose={closeModal}
                reviewID={selectedReviewID}
              />
            )}
          </ModalPopup>
        )}
      </div>
    </>
  );
};

export default SpotReviews;
