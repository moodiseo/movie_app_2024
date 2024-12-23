import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => {
      current.count += 1;
      return current.count;
    });
  };
  minuts = () => {
    this.setState((current) => {
      current.count -= 1;
      return current.count;
    });
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minuts}>Minus</button>
      </div>
    );
  }
}

export default App;
