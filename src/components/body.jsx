import React, { Component } from "react";
import Keypad from "./keypad.jsx";
import Display from "./display.jsx";

class Body extends Component {
  state = {
    displayText: ""
  };

  handleOnAppend = (event) => {
    let currentElement = event.target.innerHTML;
    let numberKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    if (numberKeys.includes(currentElement)) {
      let currentText = this.state.displayText + currentElement;
      currentText.length < 13
        ? this.setState({
            displayText: currentText
          })
        : alert("Exceeding limit");
    } else if (currentElement === "&lt;=") {
      this.setState({
        displayText: this.state.displayText.slice(0, -1)
      });
    }
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
