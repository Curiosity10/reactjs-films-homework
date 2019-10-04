import types from './uiConstants';

const changeLayout = (layout = 'grid') => ({
  type: types.CHANGE_LAYOUT,
  payload: {
    layout,
  },
});

export default { changeLayout };
