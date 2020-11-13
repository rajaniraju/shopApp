import React, { Component } from "react";

export class Home extends Component {
  static displayName = Home.name;
  state = {
    value: "",
  };
  handleOnChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  squareOnClick = () => {
    console.log(this.state.value);
  };
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <input name="text" onChange={this.handleOnChange}></input>
        <button onClick={this.squareOnClick}>Square</button>
        <button>Weather Forcast</button>
      </div>
    );
  }
}
