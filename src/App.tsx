import { FC } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { CountSlice } from './store/CountSlice';

const App: FC = () => {
  const { count } = useAppSelector(state => state.countReducer);
  const dispatch = useAppDispatch();
  const { asyncIncrementCount, asyncDecrementCount } = CountSlice.actions;

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
    </div>
  );
};

export default App;
