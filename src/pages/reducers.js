import { combineReducers } from "redux";

import releaseReducer from './HomePage/CompRelease/reducer';
import chartReducer from './HomePage/CompChart/reducer';

const reducers = combineReducers({
  releaseReducer,
  chartReducer
});

export default reducers;