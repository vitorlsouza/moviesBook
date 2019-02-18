import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import {
  getAllSuccess,
  searchSuccess,
  searchIdSuccess,
} from '../actions/films';

export function* getAll() {
  const { data } = yield call(api.get, '/?s=series&apikey=15525a6');

  const filmData = data.Search;

  yield put(getAllSuccess(filmData));
}

export function* search(action) {
  const { data } = yield call(
    api.get,
    `/?s=${action.payload.query}&apikey=15525a6`,
  );

  const queryData = {
    error: data.Response,
    films: data.Search,
  };

  yield put(searchSuccess(queryData, action.payload.query));
}

export function* searchId(action) {
  const { data } = yield call(
    api.get,
    `/?i=${action.payload.id}&apikey=15525a6`,
  );

  yield put(searchIdSuccess(data));
}
