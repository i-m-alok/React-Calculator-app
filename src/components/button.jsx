import React, { Component } from "react";

class Button extends React.Component {
  state = {
    butttonText: this.props.buttonText
  };

  printNum = (event) => {
    this.setState({
      currentValue: event.target.innerHTML
    });
    console.log("Number clicked " + this.state.currentValue);
  };

  render() {
    return (
      <button className="row btn btn-dark m-2 key">
        {this.state.butttonText}
      </button>
    );
  }
}

export default Button;
