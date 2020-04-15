import { createStore, applyMiddleware, combineReducers, } from 'redux';
import thunk from 'redux-thunk';
import { createLogger, } from 'redux-logger';
import { appReducer } from '../reducers';

const reducer = combineReducers({
    app: appReducer,
});

const store = createStore(
    reducer,
    applyMiddleware(createLogger(), thunk),
);

export default store;