import * as ACTIONS from './appConstants';

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_GENRES_FAILURE:
    case ACTIONS.FETCH_MOVIES_FAILURE:
    case ACTIONS.FETCH_MOVIE_DETAILS_FAILURE:

      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
        videoKey: '',
      };

    case ACTIONS.FETCH_VIDEO_KEY_FAILURE:

      return {
        ...state,
        error: '',
        isLoading: false,
        videoKey: '',
      };

    case ACTIONS.FETCH_GENRES_REQUEST:
    case ACTIONS.FETCH_MOVIES_REQUEST:
    case ACTIONS.FETCH_VIDEO_KEY_REQUEST:
    case ACTIONS.FETCH_MOVIE_DETAILS_REQUEST:

      return {
        ...state,
        isLoading: true,
        error: '',
        videoKey: '',
      };

    case ACTIONS.FETCH_MOVIES_SUCCESS: {
      let { movies } = action.payload;
      const {
        genreId,
        currentPage,
        pagesCount,
        searchQuery,
      } = action.payload;

      if (currentPage !== 1) {
        movies = movies.slice(0, 1)[0].id === state.movies.slice(-1)[0].id
          ? movies.slice(1) : movies;
      }

      return {
        ...state,
        isLoading: false,
        currentPage,
        genreId,
        searchQuery,
        movies: currentPage === 1 ? movies : state.movies.concat(movies),
        pagesCount,
      };
    }

    case ACTIONS.FETCH_GENRES_SUCCESS:

      return {
        ...state,
        genres: action.payload.genres,
      };

    case ACTIONS.FETCH_VIDEO_KEY_SUCCESS:

      return {
        ...state,
        isLoading: false,
        videoKey: action.payload.videoKey,
      };

    case ACTIONS.FETCH_MOVIE_DETAILS_SUCCESS:

      return {
        ...state,
        isLoading: false,
        movie: action.payload.movie,
      };
    case ACTIONS.CHANGE_FILTER:

      return {
        ...state,
        filter: action.payload.filter,
        searchQuery: '',
        pagesCount: 1,
        currentPage: 1,
        genreId: null,
      };

    case ACTIONS.INCREASE_PAGE:

      return {
        ...state,
        currentPage: action.payload.currentPage,
      };

    default:
      return state;
  }
};

export default appReducer;
