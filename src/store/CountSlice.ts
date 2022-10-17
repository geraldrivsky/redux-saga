import { createSlice } from '@reduxjs/toolkit';

interface CountState {
  count: number;
}

const initialState: CountState = {
  count: 0,
};

export const CountSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    incrementCount(state) {
      state.count += 1;
    },
    decrementCount(state) {
      state.count -= 1;
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    asyncIncrementCount() {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    asyncDecrementCount() {},
  },
});

export default CountSlice.reducer;
