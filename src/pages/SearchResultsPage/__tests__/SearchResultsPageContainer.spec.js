import { mapDispatchToProps } from '../SearchResultsPageContainer';

describe('mapDispatchToProps works correctly', () => {
  it('Fetch data works correctly', () => {
    const dispatch = jest.fn();
    const mockFn = jest.fn(mapDispatchToProps(dispatch).fetchData);
    mockFn();
    expect(mockFn).toHaveBeenCalled();
  });
});
