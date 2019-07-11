import layoutSelector from '../uiSelectors';

const state = {
  ui: {
    layout: 'grid',
  },
};

describe('Selectors work correctly', () => {
  it('Should return genres', () => {
    expect(layoutSelector(state)).toEqual(state.ui.layout);
  });
});
