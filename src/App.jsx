import React from 'react';
import { Provider } from 'react-redux';
import { SearchResultsPageContainer } from './pages/SearchResultsPage';
import store from './modules/store';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/App.scss';

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <SearchResultsPageContainer />
    </ErrorBoundary>
  </Provider>
);

export default App;
