import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ["Fei", "Dewei", "Zaiquan", "Lianchen"]
    };
  }

  render() {
    let nameToDisplay = this.state.name.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{nameToDisplay}</div>;
  }
}

export default App;
