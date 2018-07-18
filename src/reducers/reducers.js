import { combineReducers } from 'redux';

function articles(state = [], action) {
  switch (action.type) {
    case ActionTypes.REFRESH:
      return action.payload.articles;
    case ActionTypes.LOAD_MORE:
      return [...state, ...action.payload.articles];
    default:
      return state;
  }
}

function refreshing(state = false, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_LOADING_STATE:
      return action.payload.refreshing;
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  articles,
  refreshing,
});
