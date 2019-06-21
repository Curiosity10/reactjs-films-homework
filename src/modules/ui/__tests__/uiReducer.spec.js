import reducer from '../uiReducer';
import CHANGE_LAYOUT from '../uiConstants';

describe('Ui reducer works correctly', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it('should handle change layout', () => {
    expect(reducer({}, {
      type: CHANGE_LAYOUT,
      layout: 'grid',
    })).toEqual({
      layout: 'grid',
    });
  });
});
