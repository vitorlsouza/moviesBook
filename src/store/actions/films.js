export const getAllRequest = () => ({
  type: 'GET_ALL_REQUEST',
});

export const getAllSuccess = data => ({
  type: 'GET_ALL_SUCCESS',
  payload: { data },
});

export const searchRequest = query => ({
  type: 'SEARCH_REQUEST',
  payload: { query },
});

export const searchSuccess = (searchData, query) => ({
  type: 'SEARCH_SUCCESS',
  payload: { searchData, query },
});

export const searchIdRequest = id => ({
  type: 'SEARCH_ID_REQUEST',
  payload: { id },
});

export const searchIdSuccess = data => ({
  type: 'SEARCH_ID_SUCCESS',
  payload: { data },
});
