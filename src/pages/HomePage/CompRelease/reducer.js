
import * as constains from './constains';

const initialState = {
  isLoadingPage: false,
  data: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constains.GET_DATA_RELEASE_START:
      return {
        ...state,
        isLoadingPage: true,
        data: []
      }
    case constains.GET_DATA_RELEASE_SUCSSES:
      return {
        ...state,
        isLoadingPage: false,
        data: payload
      }
    case constains.GET_DATA_RELEASE_ERROR:
      return state
    default:
      return state
  }
};

export default reducer;