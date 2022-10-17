import { all } from 'redux-saga/effects';
import { countWatcher } from './CountSaga';
import { fetchUsersWatcher } from './UserSaga';

export function* rootWatcher() {
  yield all([countWatcher(), fetchUsersWatcher()]);
}
