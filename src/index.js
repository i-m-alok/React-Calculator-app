import React from "react";
import ReactDOM from "react-dom";
import Keypad from "./components/keypad.jsx";

class Display extends React.Component {
  render() {
    return <div id="display" className="row my-row"></div>;
  }
}

// here we put the display and buttons
class Body extends React.Component {
  render() {
    return <div className="row mx-auto"></div>;
  }
}

// ReactDOM.render(<Display/>, document.getElementById("container"))
ReactDOM.render(<Keypad />, document.getElementById("container"));
