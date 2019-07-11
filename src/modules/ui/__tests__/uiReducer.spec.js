import reducer from '../uiReducer';
import actions from '../uiConstants';

describe('Ui reducer works correctly', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it('should handle change layout', () => {
    expect(reducer({}, {
      type: actions.CHANGE_LAYOUT,
      payload: {
        layout: 'grid',
      },
    })).toEqual({
      layout: 'grid',
    });
  });
});
