import { mapDispatchToProps } from '../SearchResultsPageContainer';

describe('mapDispatchToProps works correctly', () => {
  it('Fetch data works correctly', () => {
    const dispatch = jest.fn();
    const mockFetchData = jest.fn(mapDispatchToProps(dispatch).fetchData);
    const mockChangeFilter = jest.fn(mapDispatchToProps(dispatch).changeFilter);
    const mockChangeLayout = jest.fn(mapDispatchToProps(dispatch).changeLayout);

    mockFetchData();
    mockChangeFilter();
    mockChangeLayout();
    expect(mockFetchData).toHaveBeenCalled();
    expect(mockChangeFilter).toHaveBeenCalled();
    expect(mockChangeLayout).toHaveBeenCalled();
  });
});
