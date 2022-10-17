import { FC } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { CountSlice } from './store/CountSlice';
import { UsersSlice } from './store/UsersSlice';

const App: FC = () => {
  const { fetchUsers } = UsersSlice.actions;
  const { asyncIncrementCount, asyncDecrementCount } = CountSlice.actions;
  const dispatch = useAppDispatch();
  const { count } = useAppSelector(state => state.countReducer);
  const { users, error } = useAppSelector(state => state.usersReducer);

  return (
    <div>
      <h1>{count}</h1>
      <button
        type='button'
        onClick={() => {
          dispatch(asyncIncrementCount());
        }}
      >
        Async Increment
      </button>
      <button
        type='button'
        onClick={() => {
          dispatch(asyncDecrementCount());
        }}
      >
        Async Decrement
      </button>
      <div>
        <button
          onClick={() => {
            dispatch(fetchUsers());
          }}
          type='button'
        >
          Fetch users
        </button>

        {users.map(({ id, name }) => (
          <p key={id}>{name}</p>
        ))}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default App;
