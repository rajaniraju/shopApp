import React, { Component } from "react";

export class Home extends Component {
  static displayName = Home.name;
  state = {
    firstName: "",
    lastName: "",
    age: "",
    text1: "",
    text2: "",
  };
  handleOnChange = (e) => {
    console.log(e.target.name, e.target.value);
    const propertyName = e.target.name;
    const value = parseFloat(e.target.value);
    this.setState({ [propertyName]: value });
  };

  handleTextOnChange = (e) => {
    console.log(e.target.name, e.target.value);
    const propertyName = e.target.name;
    const value = e.target.value;
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
    console.log(this.state.text2);
    fetch(
      "https://localhost:44353/WeatherForecast/GetSquare/" + this.state.text2
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
  passObject = () => {
    const personal = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
    };
    console.log(personal);
    fetch("https://localhost:44353/WeatherForecast/GetObject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(personal),
    })
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
        <br></br>
        <br></br>
        <br></br>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  FirstName: <input name="firstName" onChange={this.handleTextOnChange}></input>
                </td>
              </tr>
              <tr>
                <td>
                  LastName:<input name="lastName" onChange={this.handleTextOnChange}></input>
                </td>
              </tr>
              <tr>
                <td>
                  Age:<input name="age" onChange={this.handleOnChange}></input>
                </td>
              </tr>
            </tbody>
          </table>

          <button onClick={this.passObject}>Submit</button>
        </div>
      </div>
    );
  }
}
