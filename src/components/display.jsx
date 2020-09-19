import React, { component } from "react";

class Display extends React.Component {
  state = {
    displayText: ""
  };
  render() {
    return (
      <div id="display" className="my-row bg-dark">
        <span id="displayText">{this.props.displayText}</span>
      </div>
    );
  }
}

export default Display;
