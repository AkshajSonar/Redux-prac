import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,reset,differby } from '../redux/counterSlice.js';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center'}}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: '10px' }}>-</button>
      <button onClick={() => dispatch(reset())} style={{ marginLeft: '10px' }}>Reset</button>
      <input
        type="number"
        placeholder="Enter a number"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const value = parseInt(e.target.value, 10);
            if (!isNaN(value)) {
              dispatch(differby(value));
            }
            e.target.value = ''; // Clear the input field
          }
        }}
        style={{ marginLeft: '10px', width: '100px' }}
      />
      
    </div>
  );
};

export default Counter;
