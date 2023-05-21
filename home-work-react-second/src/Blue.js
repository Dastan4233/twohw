import React from "react";
import "./index.css"

class Blue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'blue',
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    this.setState({
      backgroundColor: this.state.xIsNext ? 'blue': 'red',
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });

   
  }

  renderSquare(i) {
    return (
      <Square
        color={this.state.backgroundColor}
        onClick={() => this.handleClick(i)}
      />
      
    );
    }
   
      
    render () {
      return (
        <div>
          {this.renderSquare(0)}
        </div>
      );
    }
  }

   

function Square(props) {
  return (
    <button className="blue" onClick={props.onClick} style={{backgroundColor: props.color}}></button>
    
  );
}




export default Blue

