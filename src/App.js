import React from 'react'
import ReactDOM from 'react-dom' 
class Display extends React.Component{
  render(){
    return (
      <div id="display" className="row my-row">
  </div>
    )
  }
}

class Button extends React.Component{
  state= {
    numbers: [1,2,3,4,5,6,7,8,9,0],
    currentValue: 0
  }
  printNum = (event) => {
    this.setState(
      {
      currentValue : event.target.innerHTML
    });
    console.log("Number clicked "+ this.state.currentValue);
  }
  
  
  render(){
    return (
      <div className="row m-2">
        {this.state.numbers.map(number=> <span key={"key"+number} className="badge badge-primary p-4 col" onClick={(event) => this.printNum(event)}>{number}</span>)}
      </div>
    )
  }
}

// here we put the display and buttons
class Body extends React.Component {
  render(){
    return (
      <div className="row mx-auto">
      </div>
    )
  }
}

// ReactDOM.render(<Display/>, document.getElementById("container"))
ReactDOM.render(<Button/>, document.getElementById("container"));