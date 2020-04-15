import 'babel-polyfill';
import 'es6-promise';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import store from "./store";
import './index.scss';
import App from './components/App';

/*-----------------------------------------------------------*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
