import types from './uiConstants';

const changeLayout = layout => ({
  type: types.CHANGE_LAYOUT,
  layout,
});

// eslint-disable-next-line import/prefer-default-export
export { changeLayout };
