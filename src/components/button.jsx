import React, { Component } from "react";

class Button extends Component {
  state = {
    butttonText: this.props.buttonText
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
