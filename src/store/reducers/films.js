const INITIAL_STATE = {
  films: [],
  query: '',
  error: 'True',
  filmDetails: {},
  loading: false,
};

export default function films(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_ALL_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_ALL_SUCCESS':
      return {
        ...state,
        films: action.payload.data,
        loading: false,
      };
    case 'SEARCH_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        films: action.payload.searchData.films,
        error: action.payload.searchData.error,
        query: action.payload.query,
        loading: false,
      };
    case 'SEARCH_ID_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SEARCH_ID_SUCCESS':
      return {
        ...state,
        filmDetails: action.payload.data,
        loading: false,
      };
    default:
      return state;
  }
}
