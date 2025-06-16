import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    differby: (state,action) =>{
      state.value += action.payload;
    }
}});

export const { increment, decrement,reset,differby } = counterSlice.actions;
export default counterSlice.reducer;

// slices are the features and reducers are the functions that handle the state changes
   