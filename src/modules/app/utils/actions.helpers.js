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

export const createAsyncAction = ({
  type, asyncFn, page = 1, genre = null, query = '', filterType = '',
}) => (dispatch) => {
  dispatch(createRequestAction(`${type}_REQUEST`));
  return asyncFn({ page, genre, query }, filterType)
    .then(response => response.json())
    .then(data => dispatch(createReceiveMoviesAction({
      type: `${type}_SUCCESS`, data, page, genre, query,
    })))
    .catch(error => dispatch(createFailureAction(`${type}_FAILURE`, error)));
};
