import React from 'react';
//import MainContent from './components/MainContent';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xNext: true
    };
  }
  renderSquare(i) {
    return (<Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)} />
    );
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (squares[i] === null) {
      squares[i] = this.state.xNext ? 'X' : 'O';
      //if (this.state.xNext) {
      //	squares[i] = 'X';
      //} else {
      //	squares[i] = 'O';
      //}
      this.setState({ squares: squares, xNext: !this.state.xNext });
    }
    //this.setState({squares: squares, xNext: !this.state.xNext});

  }

  render() {
    //const status = null;
    let status;
    const w = calWinner(this.state.squares);
    if (w) {
      status = 'winner: ' + w;
    } else {
      status = 'Next player: ' + (this.state.xNext ? 'X' : 'O');
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {// <Square value={0}/>
          }
          {/* <Square value={0}/> */}
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function calWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

//class Square extends React.Component {
//    //constructor(props){
//    //    super(props);
//    //    this.state = {
//    //        value: this.props.value,
//    //    };
//    //}
//    render(){
//        return (
//            <button
//              className="square"
//              onClick={() => this.props.onClick()}
//            >
//            {this.props.value}
//            </button>
//        );
//    }
//}

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="Shopping-list">
        <h1>shopping list</h1>
        <ul>
          <li>insta</li>
          <li>watsapp</li>
          <li>wkfej</li>
        </ul>
      </div>
    );
  }
}

function MyInfo() {
  return (
    <div>
      <h1>
        my name is
      </h1>
      <p> my paragraph about myself</p>
      <ol>
        <li> list obj 1</li>
        <li> list obj 2</li>
        <li> list obj 3</li>
        <li> list obj 4</li>
        <li> list obj 5</li>
      </ol>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav>
        nav
      </nav>
      <header>
        header
      </header>
    </div>
  );
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


export { Game, Board, App, ShoppingList, MyInfo };
