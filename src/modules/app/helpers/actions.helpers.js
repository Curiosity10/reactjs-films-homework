import store from '../../store';
import * as ACTIONS from '../appConstants';

export const createRequestAction = requestName => ({
  type: requestName,
});

export const createFailureAction = (requestName, error) => ({
  type: requestName,
  payload: {
    error: error.message,
  },
});

export const createReceiveMoviesAction = ({
  type, data, page, genre = null, query = '',
}) => ({
  type,
  payload: {
    movies: data.results,
    currentPage: page,
    pagesCount: data.total_pages,
    genreId: genre,
    searchQuery: query,
  },
});

export const increasePageAction = page => ({
  type: ACTIONS.INCREASE_PAGE,
  payload: {
    currentPage: page + 1,
  },
});

export const createAsyncReceiveMoviesAction = ({
  type,
  asyncFn,
  genre,
  query,
}) => (dispatch) => {
  dispatch(createRequestAction(`${type}_REQUEST`));
  const {
    currentPage: page,
    filter,
  } = store.getState().app;
  return asyncFn({ page, genre, query }, filter)
    .then(response => response.json())
    .then(data => dispatch(
      createReceiveMoviesAction({
        type: `${type}_SUCCESS`,
        data,
        page,
        genre,
        query,
      }),
    ))
    .then(() => dispatch(increasePageAction(page)))
    .catch(error => dispatch(createFailureAction(`${type}_FAILURE`, error)));
};
