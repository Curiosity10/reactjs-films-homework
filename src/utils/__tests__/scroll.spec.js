import getScrollDownPercentage from '../scroll';

describe('Scroll function works correctly', () => {
  const coordinates = {
    scrollHeight: 1000,
    clientHeight: 500,
    scrollPos: 500,
  };
  it('getScrollDownPercentage return 2.5 percentage', () => {
    expect(getScrollDownPercentage(coordinates)).toEqual(1);
  });
});
