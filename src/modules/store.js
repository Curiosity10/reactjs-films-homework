import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddlware from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import uiReducer from './ui/uiReducer';
import appReducer from './app/appReducer';

const initialState = {
  app: {
    movies: [],
    genres: [],
    isLoading: true,
    currentPage: 1,
    error: false,
    filter: 'Trending',
    currentGenre: null,
    currentSearchQuery: '',
    src: '',
    pagesCount: 1,
  },
  ui: {
    layout: 'grid',
  },
};

const rootReducer = combineReducers({ app: appReducer, ui: uiReducer });
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddlware, logger)),
);
export default store;
