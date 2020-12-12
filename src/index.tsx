import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

import store from './store';

import Loader from './components/shared-components/Loader';

ReactDOM.render(<Loader />, document.getElementById('root'));
setTimeout(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}, 1000);
serviceWorker.unregister();
