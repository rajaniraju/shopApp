import React, { Component } from "react";

export class Home extends Component {
  static displayName = Home.name;
  state = {
    userText:"", 
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
    const propertyName = e.target.name;
    const value = e.target.value;
    this.setState({ [propertyName]: value });
    console.log(e.target.name, e.target.value);
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
  setUserText() {
    const personal = {userText: "this.state.userText" };
    
    console.log(personal);
    fetch("https://localhost:44353/WeatherForecast/SetUserText", {
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
        <div>
          <p>Your Details</p>
          <form>
            <div className="form-group">
              <label htmlFor="FirstName">First Name</label>
              <input
                name="firstName"
                className="form-control"
                onChange={this.handleTextOnChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="LastName">Last Name</label>
              <input
                name="lastName"
                className="form-control"
                onChange={this.handleTextOnChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="Age">Age</label>
              <input
                name="age"
                className="form-control"
                onChange={this.handleOnChange}
              ></input>
            </div>
          </form>
          <button onClick={this.passObject}>Add</button>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="EnterSomething">Enter Something</label>
            <input
              name="userText"
              className="form-control"
              placeholder="enter"
              onChange={this.handleTextOnChange}
            ></input>
          </div>
          <div>
            <button onClick={this.setUserText}>Set</button>
            <button>Get</button>
          </div>
        </form>

        <div>
          <p>To check current weather click here</p>
          <button onClick={this.getWeatherForecastControl}>
            Weather Forcast
          </button>
        </div>
      </div>
    );
  }
}
