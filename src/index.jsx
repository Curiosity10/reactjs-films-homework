import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import App from './App';
import store from './modules/store';
import ErrorBoundaryContainer from './components/ErrorBoundary';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundaryContainer>
      <App />
    </ErrorBoundaryContainer>
  </Provider>,
  document.getElementById('app'),
);
export default hot(App);
