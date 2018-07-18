import { fetchNews } from "../api";

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

function loadArticles(page = 0) { 
  return (dispatch, getState) => {
      page = getState().page;
     dispatch(REQUEST_FSAA)

     return fetchNews().then(arti => dispatch(SUCESS_ACTION_FSSA)).catch(ERROR)

     try
    cosnt art =  await fetch;
    SUCESS
    catch ERROR
  }
}

invalidateArticles()
