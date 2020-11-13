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
     
   fetch("https://localhost:44353/WeatherForecast/GetSquare/"+this.state.value)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        })
  };
  getWeatherForecastControl = () => {
    fetch("https://localhost:44353/WeatherForecast/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        })
    }

  
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <input name="text" onChange={this.handleOnChange}></input>
        <button onClick={this.squareOnClick}>Square</button>
        <button onClick={this.getWeatherForecastControl}>Weather Forcast</button>
      </div>
    );
  }
}
