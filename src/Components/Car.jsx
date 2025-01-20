import React from 'react';

const Car = ({ brand = "Toyota" }) => {
  return <h2>Car Brand: {brand}</h2>;
};

export default Car;
