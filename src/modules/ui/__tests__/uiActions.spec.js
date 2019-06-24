import { changeLayout } from '../uiActions';
import actions from '../uiConstants';

describe('Change layout works correctly', () => {
  it('Change layout to grid', () => {
    const layout = 'grid';
    const expectedAction = {
      type: actions.CHANGE_LAYOUT,
      layout,
    };
    expect(changeLayout(layout)).toEqual(expectedAction);
  });
});
