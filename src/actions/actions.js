export const ActionTypes = {
  REFRESH: 'REFRESH',
  LOAD_MORE: 'LOAD_MORE',
  CHANGE_LOADING_STATE: 'CHANGE_LOADING_STATE',
};

export const refreshArticles = articles => ({
  type: ActionTypes.REFRESH,
  payload: { articles },
});

export const loadMoreArticles = articles => ({
  type: ActionTypes.LOAD_MORE,
  payload: { articles },
});

export const setRefreshing = refreshing => ({
  type: ActionTypes.CHANGE_LOADING_STATE,
  payload: { refreshing },
});
