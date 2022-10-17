import { put, takeEvery } from 'redux-saga/effects';
import { CountSlice } from '../store/CountSlice';

const {
  incrementCount,
  decrementCount,
  asyncIncrementCount,
  asyncDecrementCount,
} = CountSlice.actions;

const delay = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

function* incrementWorker() {
  yield delay(500);
  yield put(incrementCount());
}

function* decrementWorker() {
  yield delay(500);
  yield put(decrementCount());
}

export function* countWatcher() {
  yield takeEvery(asyncIncrementCount.type, incrementWorker);
  yield takeEvery(asyncDecrementCount.type, decrementWorker);
}
