import changeLayout from '../uiActions';
import CHANGE_LAYOUT from '../uiConstants';

describe('Change layout works correctly', () => {
  it('Change layout to grid', () => {
    const layout = 'grid';
    const expectedAction = {
      type: CHANGE_LAYOUT,
      layout,
    };
    expect(changeLayout(layout)).toEqual(expectedAction);
  });
});
