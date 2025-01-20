import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello, User!",
    };

    // Binding inside the constructor
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ message: "Button Clicked!" });
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default ClassComponent;
