import types from './uiConstants';

const changeLayout = layout => ({
  type: types.CHANGE_LAYOUT,
  layout,
});

export default { changeLayout };
