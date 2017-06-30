import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootreducer from './reducers/rootreducer';
import {BrowserRouter as Router} from 'react-router-dom';


import './index.css';


const store = createStore(
    rootreducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);




ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
