import React, { Component } from "react";

export class Home extends Component {
  static displayName = Home.name;
  state = {
    value: "",
    text1: "",
    text2: "",
  };
  handleOnChange = (e) => {
    const target = e.target;
    console.log(target.name, target.value);
    const propertyName = target.name;
    const value = parseFloat(target.value);
    this.setState({ [propertyName]: value });
  };

  sumOnClick = () => {
    fetch(
      "https://localhost:44353/WeatherForecast/GetSum/" +
        this.state.text1 +
        "/" +
        this.state.text2
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  squareOnClick = () => {
    console.log(this.state.value);
    fetch(
      "https://localhost:44353/WeatherForecast/GetSquare/" + this.state.value
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  getWeatherForecastControl = () => {
    fetch("https://localhost:44353/WeatherForecast/")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <input name="text1" onChange={this.handleOnChange}></input>
        <input name="text2" onChange={this.handleOnChange}></input>
        <button onClick={this.sumOnClick}>Sum</button>
        <button onClick={this.squareOnClick}>Square</button>
        <button onClick={this.getWeatherForecastControl}>
          Weather Forcast
        </button>
      </div>
    );
  }
}
