import React, { Component } from "react";

class Button extends Component {
  state = {
    butttonText: this.props.buttonText
  };

  printNum = (event) => {
    this.setState({
      currentValue: event.target.innerHTML
    });
    console.log("Number clicked " + this.state.currentValue);
  };

  addToDisplay = (event) => {
    console.log(event.target, this.props);
  };

  render() {
    return (
      <button
        className="row btn m-2 key"
        onClick={(event) => this.props.onAppend(event)}
      >
        {this.state.butttonText}
      </button>
    );
  }
}

export default Button;
