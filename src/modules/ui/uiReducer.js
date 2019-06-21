import CHANGE_LAYOUT from './uiConstants';

const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_LAYOUT:
      return {
        ...state,
        layout: action.layout,
      };
    default:
      return state;
  }
};

export default uiReducer;
