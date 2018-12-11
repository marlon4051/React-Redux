import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers'
const initiaState = {
    city: "Cartago,cr"
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(reducers, initiaState, composeEnhancers(applyMiddleware(thunk)));
