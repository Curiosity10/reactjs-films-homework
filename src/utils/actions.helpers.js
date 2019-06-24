export const createAsyncFnRequest = requestName => ({
  type: requestName,
});

export const createAsyncFnFailure = (requestName, error) => ({
  type: requestName,
  payload: {
    error: error.message,
  },
});

const createReceiveMovies = (type, data, page) => ({
  type,
  payload: {
    movies: data.results,
    currentPage: page,
    pagesCount: data.total_pages,
  },
});

export const createAsyncFnSuccess = (type, asyncFn, page = 1) => (dispatch) => {
  dispatch(createAsyncFnRequest(`${type}_REQUEST`));
  return asyncFn({ page })
    .then(response => response.json())
    .then(data => dispatch(createReceiveMovies(`${type}_SUCCESS`, data, page)))
    .catch(error => dispatch(createAsyncFnFailure(`${type}_FAILURE`, error)));
};
