import {
  createRequestAction,
  createFailureAction,
  createReceiveMoviesAction,
} from '../actions.helpers';

describe('Action helpers work correctly', () => {
  it('createRequestAction works correctly', () => {
    expect(createRequestAction('GET_DATA_REQUEST')).toEqual({ type: 'GET_DATA_REQUEST' });
  });
  it('createFailureAction works correctly', () => {
    expect(createFailureAction(
      'GET_DATA_FAILURE',
      { message: 'error' },
    )).toEqual({ type: 'GET_DATA_FAILURE', payload: { error: 'error' } });
  });
  it('createReceiveMoviesAction works correctly', () => {
    expect(createReceiveMoviesAction(
      {
        type: 'GET_DATA_SUCCESS',
        data: { results: [], total_pages: 1 },
        page: 1,
      },
    )).toEqual({
      type: 'GET_DATA_SUCCESS',
      payload: {
        movies: [],
        currentPage: 1,
        pagesCount: 1,
        currentGenre: null,
        currentSearchQuery: '',
      },
    });
  });
});
