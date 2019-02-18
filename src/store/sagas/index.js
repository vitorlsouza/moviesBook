import { all, takeLatest } from 'redux-saga/effects';

import { getAll, search, searchId } from './films';

export default function* rootSaga() {
  yield all([
    takeLatest('GET_ALL_REQUEST', getAll),
    takeLatest('SEARCH_REQUEST', search),
    takeLatest('SEARCH_ID_REQUEST', searchId),
  ]);
}
