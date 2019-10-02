import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filterString: "",
      name: ["Fei", "Dewei", "Zaiquan", "Lianchen"]
    };
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    console.log(this.state);
    let nameToDisplay = this.state.name
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });
    console.log(nameToDisplay);
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {nameToDisplay}
      </div>
    );
  }
}

export default App;
