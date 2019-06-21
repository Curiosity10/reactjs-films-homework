import * as ACTIONS from './appConstants';

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_GENRES_FAILURE:
    case ACTIONS.FETCH_LATEST_MOVIES_FAILURE:
    case ACTIONS.FETCH_MOVIES_BY_GENRE_FAILURE:
    case ACTIONS.FETCH_SEARCH_MOVIES_FAILURE:
    case ACTIONS.FETCH_TOPRATED_MOVIES_FAILURE:
    case ACTIONS.FETCH_UPCOMING_MOVIES_FAILURE:
    case ACTIONS.FETCH_VIDEO_KEY_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case ACTIONS.FETCH_GENRES_REQUEST:
    case ACTIONS.FETCH_LATEST_MOVIES_REQUEST:
    case ACTIONS.FETCH_MOVIES_BY_GENRE_REQUEST:
    case ACTIONS.FETCH_SEARCH_MOVIES_REQUEST:
    case ACTIONS.FETCH_TOPRATED_MOVIES_REQUEST:
    case ACTIONS.FETCH_UPCOMING_MOVIES_REQUEST:
    case ACTIONS.FETCH_VIDEO_KEY_REQUEST:
      return {
        ...state,
        isLoading: true,
        videoKey: '',
        currentGenre: '',
        currentSearchQuery: '',
      };
    case ACTIONS.FETCH_LATEST_MOVIES_SUCCESS:
    case ACTIONS.FETCH_TOPRATED_MOVIES_SUCCESS:
    case ACTIONS.FETCH_UPCOMING_MOVIES_SUCCESS: {
      const movies = {};
      for (let i = 0; i < action.movies.length; i += 1) {
        movies[action.movies[i].id] = action.movies[i];
      }
      return {
        ...state,
        isLoading: false,
        currentPage: action.currentPage,
        movies: action.currentPage === 1 ? movies : { ...state.movies, ...movies },
        currentTotalPages: action.currentTotalPages,
      };
    }
    case ACTIONS.FETCH_MOVIES_BY_GENRE_SUCCESS: {
      const movies = {};
      for (let i = 0; i < action.movies.length; i += 1) {
        movies[action.movies[i].id] = action.movies[i];
      }
      return {
        ...state,
        isLoading: false,
        currentPage: action.currentPage,
        currentGenre: action.currentGenre,
        movies: action.currentPage === 1 ? movies : { ...state.movies, ...movies },
        currentTotalPages: action.currentTotalPages,
      };
    }
    case ACTIONS.FETCH_SEARCH_MOVIES_SUCCESS: {
      const movies = {};
      for (let i = 0; i < action.movies.length; i += 1) {
        movies[action.movies[i].id] = action.movies[i];
      }
      return {
        ...state,
        isLoading: false,
        currentPage: action.currentPage,
        currentSearchQuery: action.currentSearchQuery,
        movies: action.currentPage === 1 ? movies : { ...state.movies, ...movies },
        currentTotalPages: action.currentTotalPages,
      };
    }
    case ACTIONS.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        genres: action.genres,
      };
    case ACTIONS.FETCH_VIDEO_KEY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        videoKey: action.videoKey,
      };
    case ACTIONS.CHANGE_FILTER:
      return {
        ...state,
        filter: action.filter,
        currentSearchQuery: '',
        currentTotalPages: 1,
        currentPage: 1,
        currentGenre: '',
      };
    default:
      return state;
  }
};

export default appReducer;
