import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Loader from './components/Loader';

ReactDOM.render(<Loader />, document.getElementById('root'));
setTimeout(()=>{ReactDOM.render(<App />, document.getElementById('root'))}, 500);
serviceWorker.unregister();
