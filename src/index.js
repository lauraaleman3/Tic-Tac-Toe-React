// // ATTEMPT WITH 'X' AND 'O' WITH REACT

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';


 class Flowers extends Component {
  render() {
    return (
      <div>
        <h1>Flowers</h1>
        <img src="https://uploads-ssl.webflow.com/5f3579657fc55ba0f865b027/5f3579657fc55b369465b8f7_pink-flowers-700x371.jpg" />
      </div>
    );
  }
}

class Rocks extends Component {
  render() {
    return (
      <div>
          <h1>Rocks</h1>
        <img src="https://www.sandatlas.org/wp-content/uploads/Igneous-rocks-gabbro-andesite-pegmatite-basalt-pumice-porphyry-obsidian-granite-tuff.jpg" />
      </div>
    );
  }
}

class Navbar extends Component {
  render(){
    return(
      <div className="nav">
        <Link to="/">Game</Link> | 
        <Link to="Flowers">Flowers</Link> | 
        <Link to="Rocks">Rocks</Link>
      </div>
    );
  }
}

class Routes extends Component {
  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <hr />
          <Route name="Game" exact path="/" component={Game}/>
          <Route name="Flowers" path="/Flowers" component={Flowers}/>
          <Route name="Rocks" path="/Rocks" component={Rocks} />
        </div>
      </Router>
    );
  }
}


// import React from 'react';
// import ReactDOM from 'react-dom';

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
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
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
  
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
  
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  ReactDOM.render(<Routes />,document.getElementById('root'));
  // ReactDOM.render(<Game />, document.getElementById("root"));
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  






// // ATTEMPTING WITH ICONS INSTEAD OF 'X' AND 'O' on board
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { FaKiwiBird } from 'react-icons/fa';
// import { FaDove } from 'react-icons/fa';

// function Square(props) {    
//       return (
//         <button className="square" onClick={props.onClick}>
//           {props.value}
//         </button>
//       );
//     }
  
//   class Board extends React.Component {
//     renderSquare(i) {
//       return (
//      <Square
//       value={this.props.squares[i]}
//       onClick={() => this.props.onClick(i)} />);
//     }

//     render() {
//       return (
//         <div>
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }
  
//   class Game extends React.Component {
//       constructor(props) {
//           super(props);
//           this.state = {
//               history: [{
//                   squares: Array(9).fill(null),
//               }],
//               stepNumber: 0,
//               xIsNext: true,
//           };
//       }

//       handleClick(i) {
//         const history = this.state.history.slice(0, this.state.stepNumber + 1);
//         const current = history[history.length - 1];
//         const squares = current.squares.slice();
//         if (calculateWinner(squares) || squares[i]) {
//           return;
//         }
//         squares[i] = this.state.xIsNext ? <FaKiwiBird /> : <FaDove />;
//         this.setState({
//           history: history.concat([{
//             squares: squares
//           }]),
//           stepNumber: history.length,
//           xIsNext: !this.state.xIsNext,
//         });
//       }
//       jumpTo(step) {
//           this.setState({
//               stepNumber: step,
//               xIsNext: (step % 2) === 0,
//           });
//       }

//     render() {
//         const history = this.state.history;
//         const current = history[this.state.stepNumber];
//         const winner = calculateWinner(current.squares);

//         const moves = history.map((step, move) => {
//             const desc = move ?
//               'Go to move #' + move :
//               'Go to game start';
//             return (
//               <li key={move}>
//                 <button onClick={() => this.jumpTo(move)}>{desc}</button>
//               </li>
//             );
//           });

//         let status;
//         if (winner) {
//           status = 'Winner: ' + winner;
//         } else {
//           status = 'Next player: ' + (this.state.xIsNext ? <FaKiwiBird /> : <FaDove />);
//         }

//         return (
//             <div className="game">
//               <div className="game-board">
//                 <Board
//                   squares={current.squares}
//                   onClick={(i) => this.handleClick(i)}
//                 />
//               </div>
//               <div className="game-info">
//                 <div>{status}</div>
//                 <ol>{moves}</ol>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   // ========================================
  
//   ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );
  

//   function calculateWinner(squares) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
//   }