const initialState = {
  reviews: [],
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
      case 'UPDATE_REVIEW':
        const updatedReviews = state.reviews.map((review) =>
          review.reviewID === action.payload.reviewID ? action.payload : review
        );
        return {
          ...state,
          reviews: updatedReviews,
        };
      case 'DELETE_REVIEW':
        const filteredReviews = state.reviews.filter(
          (review) => review.reviewID !== action.payload
        );
        return {
          ...state,
          reviews: filteredReviews,
        };
    default:
      return state;
  }
};

export default reviewReducer;