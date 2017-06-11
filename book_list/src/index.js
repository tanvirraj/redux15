import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/index';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware,createStore } from 'redux';
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import rootReducers from './reducers/index'





ReactDOM.render(
    <Provider store={createStore(rootReducers, applyMiddleware(logger))}>
        <App />
    </Provider>,

    document.getElementById('root')
);

registerServiceWorker();

