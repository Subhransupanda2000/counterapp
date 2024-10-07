import React, { Component } from "react";
import count from "./Count.css";
export default class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  dec = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div id="div1">
        <h1>{this.state.count}</h1>
        <div id="div2">
          <button onClick={this.inc} id="btn1">
            +
          </button>
          <button onClick={this.dec} id="btn2">
            -
          </button>
          <button onClick={this.reset} id="btn3">
            reset
          </button>
        </div>
      </div>
    );
  }
}
