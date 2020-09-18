import React, { Component } from "react";
import Button from "./button.jsx";

class Keypad extends Component {
  state = {
    numbers: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [0, "+", "x"]
    ],
    currentValue: 0
  };
  addButtons = (numberSet) => {
    return (
      <div className="btn-group">
        {numberSet.map((number) => (
          <Button key={number.toString()} buttonText={number} />
        ))}
      </div>
    );
  };
  render() {
    return (
      <div className="btn-group-vertical mx-auto">
        {this.state.numbers.map((numberSet) => this.addButtons(numberSet))}
      </div>
    );
  }
}
export default Keypad;
