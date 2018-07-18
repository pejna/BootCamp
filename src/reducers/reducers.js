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

function isLoading(state = false, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_LOADING_STATE:
      return action.payload.refreshing;
    default:
      return state;
  }
}

function page(state = 0, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  articles,
  isLoading,
  page,
});
