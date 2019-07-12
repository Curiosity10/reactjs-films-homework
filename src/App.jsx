import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SearchResultsPageContainer } from './pages/SearchResultsPage';
import { MovieDetailsPageContainer } from './pages/MovieDetailsPage';
import store from './modules/store';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/App.scss';

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SearchResultsPageContainer} />
          <Route
            path="/movie/:id"
            render={({ match }) => {
              const id = match.params.id.slice(1);
              return <MovieDetailsPageContainer id={id} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>
);

export default App;
