// ./src/sagas/index.js

import { LOAD_TODO_LIST, RENDER_TODO_LIST } from "../actions/index";

import { all, call, put, takeEvery } from "redux-saga/effects";

export function* fetchMessageList() {
  const endpoint =
    "https://raw.githubusercontent.com/maxtonsc/jsonHolder/master/ifps.json";
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, MessageList: data });
}

export function* loadMessageList() {
  yield takeEvery(LOAD_TODO_LIST, fetchMessageList);
}

export default function* rootSaga() {
  yield all([loadMessageList()]);
}
