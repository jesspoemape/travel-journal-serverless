import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
, document.getElementById('root'));
registerServiceWorker();
