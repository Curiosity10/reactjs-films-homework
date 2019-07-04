import actions from '../uiActions';
import types from '../uiConstants';

describe('Change layout works correctly', () => {
  it('Change layout to grid', () => {
    const layout = 'grid';
    const expectedAction = {
      type: types.CHANGE_LAYOUT,
      payload: {
        layout,
      },
    };
    expect(actions.changeLayout(layout)).toEqual(expectedAction);
  });
});
