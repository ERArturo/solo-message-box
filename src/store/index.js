import {createStore, compose} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const state = ['user'];

createStore([], state, composeEnhancers);