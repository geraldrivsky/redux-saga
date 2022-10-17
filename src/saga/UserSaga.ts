import { call, put, takeEvery } from 'redux-saga/effects';
import { IUser } from '../models/IUser';
import { UsersSlice } from '../store/UsersSlice';

const { fetchUsers, setUsers, throwError } = UsersSlice.actions;
const fetchUsersFromApi = () =>
  fetch('https://jsonplaceholder.typicode.com/users?_limit=10');

function* fetchUsersWorker() {
  try {
    const data: Response = yield call(fetchUsersFromApi);
    const json: IUser[] = yield call(() => Promise.resolve(data.json()));
    yield put(setUsers(json));
  } catch (e) {
    yield put(throwError('Error has thrown while fetching users'));
  }
}

export function* fetchUsersWatcher() {
  yield takeEvery(fetchUsers.type, fetchUsersWorker);
}
