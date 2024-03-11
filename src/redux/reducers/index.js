import { combineReducers } from 'redux';
import newSpotReducer from './newSpotReducer';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({
    newSpot: newSpotReducer,
    review: reviewReducer
});

export default rootReducer;
