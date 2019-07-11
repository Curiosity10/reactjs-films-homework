import types from './uiConstants';

const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CHANGE_LAYOUT:
      return {
        ...state,
        layout: action.payload.layout,
      };
    default:
      return state;
  }
};

export default uiReducer;
