import { _ } from 'lodash';
import { fetchNews } from './api';

export function getNextPage(state) {
  const { valid, page } = state;

  return valid ? page + 1 : 0;
}

export function getArticle(state, url) {
  const { articles } = state;
  return _.find(articles, { web_url: url });
}

function createNewArticles(state, payload) {
  if (payload.page !== 0) {
    return [...state.articles, ...payload.articles];
  }

  return [...payload.articles];
}

export const ACTION_TYPES = {
  NEWS_FETCH_BEGIN: 'NEWS_FETCH_BEGIN',
  NEWS_FETCH_SUCCESS: 'NEWS_FETCH_SUCCESS',
  NEWS_FETCH_ERROR: 'NEWS_FETCH_ERROR',
  NEWS_INVALIDATE: 'NEWS_INVALIDATE',
};

export function invalidateArticles() {
  return {
    type: ACTION_TYPES.NEWS_INVALIDATE,
    payload: {},
  };
}

export function fetchNewsBegin() {
  return {
    type: ACTION_TYPES.NEWS_FETCH_BEGIN,
    payload: {},
  };
}

export function fetchNewsSuccess(articles, page) {
  return {
    type: ACTION_TYPES.NEWS_FETCH_SUCCESS,
    payload: {
      articles,
      page,
    },
  };
}

export function fetchNewsError(error) {
  return {
    type: ACTION_TYPES.NEWS_FETCH_ERROR,
    payload: {
      error,
    },
    error: true,
  };
}

export function loadArticles() {
  return (dispatch, getState) => {
    try {
      dispatch(fetchNewsBegin());

      const state = getState();
      const nextPage = getNextPage(state);
      fetchNews(nextPage).then(articles => {
        dispatch(fetchNewsSuccess(articles, nextPage));
      });
    } catch (error) {
      dispatch(fetchNewsError(error));
    }
  };
}

const initialState = {
  articles: [],
  page: 0,
  isLoading: false,
  valid: true,
};

export function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.NEWS_FETCH_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPES.NEWS_FETCH_SUCCESS:
      return {
        ...state,
        articles: createNewArticles(state, payload),
        page: payload.page,
        valid: true,
        isLoading: false,
      };
    case ACTION_TYPES.NEWS_FETCH_ERROR:
      return {
        ...state,
        valid: true,
        isLoading: false,
      };
    case ACTION_TYPES.NEWS_INVALIDATE:
      return { ...state, valid: false };
    default:
      return state;
  }
}
