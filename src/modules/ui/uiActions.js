import types from './uiConstants';

const changeLayout = layout => ({
  type: types.CHANGE_LAYOUT,
  payload: {
    layout,
  },
});

export default { changeLayout };
