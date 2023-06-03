import { combineReducers } from "redux";

import releaseReducer from './HomePage/CompRelease/reducer';
import chartReducer from './HomePage/CompChart/reducer';
import modalDialog from '~/components/ModalDialog/reducer';

const reducers = combineReducers({
  releaseReducer,
  chartReducer,
  modalDialog
});

export default reducers;