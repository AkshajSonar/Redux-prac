import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.js';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;

// visual repreantation of the store
/*{
  counter: {
    value: 0
  }
} 
Thats why in component i can use:

useSelector((state) => state.counter.value) */