import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddlware from 'redux-thunk';
import { uiReducer } from './ui';
import { appReducer } from './app';

const initialState = {
  app: {
    movies: {},
    genres: [],
    isLoading: true,
    currentPage: 1,
    error: false,
    filter: 'Trending',
    currentGenre: '',
    currentSearchQuery: '',
    videoKey: '',
    currentTotalPages: 1,
  },
  ui: {
    layout: 'grid',
  },
};

const rootReducer = combineReducers({ app: appReducer, ui: uiReducer });
const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddlware));
export default store;
