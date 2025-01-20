import React, { useState } from 'react';
import './App.css'; 
import Greeting from './Components/Greeting';
import UserProfile from './Components/UserProfile';
import Car from './Components/Car';
import Product from './Components/Product';
import Counter from './Components/Counter';
import Child from './Components/Child';
import StatusMessage from './Components/StatusMessage';
import ClickButton from './Components/ClickButton';
import Form from './Components/Form';
import ClassComponent from './Components/ClassComponent';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">🌟 React Props & Events Showcase 🎨</h1>

      {}
      <div className="component-card greeting-card">
        <Greeting name="Nazim" />
      </div>

      {}
      <div className="component-card profile-card">
        <UserProfile firstName="Nazim" lastName="Khan" age={25} />
      </div>

      {}
      <div className="component-card car-card">
        <Car brand="Honda" />
        <Car /> {}
      </div>

      {}
      <div className="component-card product-card">
        <Product name="Laptop" price={999} isAvailable={true} />
        <Product name="Phone" price={499} isAvailable={false} />
      </div>

      {}
      <div className="component-card counter-card">
        <h2>Count: {count}</h2>
        <Counter onIncrement={handleIncrement} />
      </div>

      {}
      <div className="component-card child-card">
        <Child message="Hello from Parent Component!" />
      </div>

      {}
      <div className="component-card status-card">
        <StatusMessage status="success" />
        <StatusMessage status="error" />
        <StatusMessage status="loading" />
      </div>

      {}
      <div className="component-card button-card">
        <ClickButton />
      </div>

      {}
      <div className="component-card form-card">
        <Form />
      </div>

      {}
      <div className="component-card class-card">
        <ClassComponent />
      </div>
    </div>
  );
};

export default App;
