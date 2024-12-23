import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
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
  componentDidMount() {
    console.log("component rendered.");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }
  render() {
    console.log("I'm rendering");
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
