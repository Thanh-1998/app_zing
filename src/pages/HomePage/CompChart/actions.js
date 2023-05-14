import * as constains from './constains';
import * as services from './services';

const actions = {
  doList: (search) => async (dispatch) => {
    try {
      dispatch({ type: constains.GET_DATA_RANK_NEW_START })
      const { data } = await services.getList(search);
      dispatch({
        type: constains.GET_DATA_RANK_NEW_SUCSSES,
        payload: data.data.items
      })
    } catch (error) {
      dispatch({ type: constains.GET_DATA_RANK_NEW_ERROR })
      console.log(error);
    }
  }
}

export default actions;