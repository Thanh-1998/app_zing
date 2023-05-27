import * as constains from './constaints'

const initialState = {
  open: false,
  title: '',
  component: ''
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constains.OPEN_MODAL:
      return {
        ...state,
        open: true,
        title: payload.title,
        component: payload.component
      };
    case constains.CLOSE_MODAL:
      return {
        ...state,
        open: false,
        title: '',
        component: ''
      }

    default:
      return state
  }
}

export default reducer;