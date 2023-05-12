import * as constains from './constains';
import * as services from './services';

const actions = {
  doLists: (search) => async (dispath) => {
    try {
      dispath({ type: constains.GET_DATA_RELEASE_START })
      const { data } = await services.getList(search);

      dispath({
        type: constains.GET_DATA_RELEASE_SUCSSES,
        payload: data.data.items
      });
    } catch (error) {
      dispath({ type: constains.GET_DATA_RELEASE_ERROR })
      console.log(error);
    }
  }
}

export default actions;