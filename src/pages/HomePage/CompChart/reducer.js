import * as constains from './constains';

const initialState = {
  isLoadingPage: false,
  data: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constains.GET_DATA_RANK_NEW_START:
      return {
        ...state,
        isLoadingPage: true
      };
    case constains.GET_DATA_RANK_NEW_SUCSSES:
      return {
        ...state,
        isLoadingPage: false,
        data: payload
      };
    case constains.GET_DATA_RANK_NEW_ERROR:
      return state
    default:
      return state;
  }
  return state;
};

export default reducer;