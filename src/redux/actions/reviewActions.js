export const addReview = (review) => ({
  type: 'ADD_REVIEW',
  payload: review,
});

export const updateReview = (reviewData) => ({
  type: 'UPDATE_REVIEW',
  payload: reviewData,
});

export const deleteReview = (reviewID) => {
  return {
    type: 'DELETE_REVIEW',
    payload: reviewID,
  };
};