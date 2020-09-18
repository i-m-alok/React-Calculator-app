import React, { Component } from "react";
import Keypad from "./keypad.jsx";
import Display from "./display.jsx";

class Body extends Component {
  render() {
    return (
      <div className="card" id="calculator">
        <Display />
        <p className="mx-auto p-2">Made by Alok</p>
        <Keypad />
      </div>
    );
  }
}

export default Body;
