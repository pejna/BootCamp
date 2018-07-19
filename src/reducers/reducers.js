import { combineReducers } from 'redux';
import { ActionTypes } from '../actions';

const initialState = {
  articles: [],
  page: 0,
  isLoading: false,
  valid: false,
};

function articles(state = initialState.articles, action) {
  switch (action.type) {
    case ActionTypes.FETCH_NEWS_SUCCESS:
      if (action.payload.page === 0) {
        return action.payload.articles;
      }
      return [...state, ...action.payload.articles];
    default:
      return state;
  }
}

function page(state = initialState.page, action) {
  switch (action.type) {
    case ActionTypes.FETCH_NEWS_SUCCESS:
      return action.payload.page;
    default:
      return state;
  }
}

function isLoading(state = initialState.isLoading, action) {
  switch (action.type) {
    case ActionTypes.FETCH_NEWS_BEGIN:
      return true;
    case ActionTypes.FETCH_NEWS_SUCCESS:
    case ActionTypes.FETCH_NEWS_ERROR:
      return false;
    default:
      return state;
  }
}

function valid(state = initialState.valid, action) {
  switch (action.type) {
    case ActionTypes.INVALIDATE_NEWS:
      return false;
    case ActionTypes.FETCH_NEWS_SUCCESS:
      return true;
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  articles,
  page,
  isLoading,
  valid,
});
