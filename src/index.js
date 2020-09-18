import React from "react";
import ReactDOM from "react-dom";
import Body from "./components/body.jsx";
import "./styles.css";

// here we put the display and buttons
// class Body extends React.Component {
//   render() {
//     return <div className="row mx-auto"></div>;
//   }
// }

// ReactDOM.render(<Display/>, document.getElementById("container"))
ReactDOM.render(<Body />, document.getElementById("container"));
