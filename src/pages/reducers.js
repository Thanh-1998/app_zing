import { combineReducers } from "redux";

import homeReducer from './HomePage/reducer'

const reducers = combineReducers({
  homeReducer,
});

export default reducers;