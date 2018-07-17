import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers();

const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));
