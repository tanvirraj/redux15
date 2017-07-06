import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer  from './reducers/rootreducers';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(
        rootReducer,
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
