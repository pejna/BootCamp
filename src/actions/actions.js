import { fetchNews } from '../api';

export const ActionTypes = {
  FETCH_NEWS_BEGIN: 'FETCH_NEWS_BEGIN',
  FETCH_NEWS_SUCCESS: 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_ERROR: 'FETCH_NEWS_ERROR',
  INVALIDATE_NEWS: 'INVALIDATE',
};

export function invalidateNews() {
  return {
    type: ActionTypes.INVALIDATE_NEWS,
  };
}

export function fetchNewsBegin() {
  return {
    type: ActionTypes.FETCH_NEWS_BEGIN,
  };
}

export function fetchNewsSuccess(articles, page) {
  return {
    type: ActionTypes.FETCH_NEWS_SUCCESS,
    payload: {
      articles,
      page,
    },
  };
}

export function fetchNewsError(error) {
  return {
    type: ActionTypes.FETCH_NEWS_ERROR,
    payload: {
      error,
    },
    error: true,
  };
}

export function loadArticles() {
  return (dispatch, getState) => {
    const page = getState().valid ? getState().page + 1 : 0;
    fetchNews(page)
      .then(articles => {
        dispatch(fetchNewsSuccess(articles, page));
      })
      .catch(error => dispatch(fetchNewsError(error)));
  };
}
