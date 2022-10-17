import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../models/IUser';

interface UsersState {
  users: IUser[];
  error: string;
}

const initialState: UsersState = {
  users: [],
  error: '',
};

export const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, { payload }: PayloadAction<IUser[]>) {
      state.users = payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    fetchUsers() {},
    throwError(state, { payload }: PayloadAction<string>) {
      state.error = payload;
    },
  },
});

export default UsersSlice.reducer;
