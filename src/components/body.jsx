import React, { Component } from "react";
import Keypad from "./keypad.jsx";
import Display from "./display.jsx";

class Body extends Component {
  state = {
    displayText: ""
  };

  handleOnAppend = (event) => {
    let currentText = this.state.displayText + event.target.innerHTML;
    currentText.length < 13
      ? this.setState({
          displayText: this.state.displayText + event.target.innerHTML
        })
      : alert("Exceeding limit");
  };

  render() {
    return (
      <div className="card" id="calculator">
        <Display displayText={this.state.displayText} />
        <p className="mx-auto p-2">Made by Alok</p>
        <Keypad onAppend={(event) => this.handleOnAppend(event)} />
      </div>
    );
  }
}

export default Body;
