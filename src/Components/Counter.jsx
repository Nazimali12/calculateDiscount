import React from 'react';

const Counter = ({ onIncrement }) => {
  return <button onClick={onIncrement}>Increment</button>;
};

export default Counter;
