import { createStore } from 'redux';
import rootReducer from './reducer/index';

var mystore = createStore(rootReducer);

if (process.env.NODE_ENV === 'development') {
  mystore = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export default mystore;
