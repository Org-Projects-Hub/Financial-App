import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

import store from './store';

import Loader from './components/shared-components/Loader';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<Loader />, document.getElementById('root'));
setTimeout(() => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}, 1000);
serviceWorker.unregister();
