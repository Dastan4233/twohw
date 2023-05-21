import React from "react";

class Red extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'red',
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    this.setState({
      backgroundColor: this.state.xIsNext ? 'red': 'blue',
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
    <button className="square" onClick={props.onClick} style={{backgroundColor: props.color}}></button>
    
  );
}




export default Red

