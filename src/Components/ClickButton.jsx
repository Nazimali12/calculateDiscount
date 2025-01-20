import React from 'react';

const ClickButton = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default ClickButton;
