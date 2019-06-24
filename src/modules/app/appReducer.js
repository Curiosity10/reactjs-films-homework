import * as ACTIONS from './appConstants';

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_GENRES_FAILURE:
    case ACTIONS.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
        src: '',
      };
    case ACTIONS.FETCH_VIDEO_KEY_FAILURE:
      return {
        ...state,
        error: '',
        isLoading: false,
        src: '',
      };
    case ACTIONS.FETCH_GENRES_REQUEST:
    case ACTIONS.FETCH_MOVIES_REQUEST:
    case ACTIONS.FETCH_VIDEO_KEY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
        src: '',
        currentGenre: '',
        currentSearchQuery: '',
      };
    case ACTIONS.FETCH_MOVIES_SUCCESS: {
      let { movies } = action.payload;
      const {
        currentGenre, currentPage,
        pagesCount, currentSearchQuery,
      } = action.payload;
      if (currentPage !== 1) {
        movies = movies.slice(0, 1)[0].id
        === state.movies.slice(-1)[0].id
          ? movies.slice(1) : movies;
      }
      return {
        ...state,
        isLoading: false,
        currentPage,
        currentGenre,
        currentSearchQuery,
        movies: currentPage === 1
          ? movies
          : state.movies.concat(movies),
        pagesCount,
      };
    }
    case ACTIONS.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        genres: action.payload.genres,
      };
    case ACTIONS.FETCH_VIDEO_KEY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        src: action.payload.src,
      };
    case ACTIONS.CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
        currentSearchQuery: '',
        pagesCount: 1,
        currentPage: 1,
        currentGenre: '',
      };
    default:
      return state;
  }
};

export default appReducer;
