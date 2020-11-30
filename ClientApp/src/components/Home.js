import React, { Component } from "react";

export class Home extends Component {
  static displayName = Home.name;
  state = {
    personalInformation: {
      FirstName: "",
      LastName: "",
      Age: "",
    },
    text1: "",
    text2: "",
  };
  handleOnChange = (e) => {
    console.log(e.target.name, e.target.value);
    const propertyName = e.target.name;
    const value = parseFloat(e.target.value);
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
    fetch(
      "https://localhost:44353/WeatherForecast/GetObject/{PersonalInformation}"+this.state.personalInformation,
      {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(),
      }
    )
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
                  FirstName: <input name="firstname"></input>
                </td>
              </tr>
              <tr>
                <td>
                  LastName:<input name="Lastname"></input>
                </td>
              </tr>
              <tr>
                <td>
                  Age:<input name="age"></input>
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
