import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import App from './App';
import store from './modules/store';
import ErrorBoundryContainer from './components/ErrorBoundry';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundryContainer>
      <App />
    </ErrorBoundryContainer>
  </Provider>,
  document.getElementById('app'),
);
export default hot(App);
