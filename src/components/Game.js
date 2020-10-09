import React, { Component } from 'react';
import x_icon from '../assets/close_x.svg';
import Board from './Board';

import { updateTaskDetails } from '../actions';

class Game extends Component {

  constructor(props){
    super(props);
    this.state = {
      xIsNext :true,
      stepNumber : 0,
      history: [
        { squares: Array(9).fill(null) }
      ],
      // round : 0
    }
  }

  handleClick(i){
    const history = this.state.history.slice(0,this.state.stepNumber+1);
    const current = history[history.length-1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if(winner || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat({
        squares:squares
      }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status,playerOneStatus,playerTwoStatus;
    if(winner){
      // status = "Winner is " + winner;
      winner === 'X' ? (playerOneStatus = 'Winner'):(playerTwoStatus = 'Winner')
    }
    else{
      status = "Next player is "+ (this.state.xIsNext ? "X" : "O");
      playerOneStatus = (this.state.xIsNext ? "Your Turn" : "");
      playerTwoStatus = (!this.state.xIsNext ? "Your Turn" : "");
    }

    return (
      <div className='container'>
        <div className='player-status-1'>
          <p>{playerOneStatus}</p>
          <div className='player-container-1'>
            <p className='text-orange'>player 1</p>
            {/* <p>{this.props.playerOne}---</p> */}
            <p>John Deo</p>

            <p><img src={x_icon} alt='img'/></p>
          </div>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          
          <div className='game-info'>
            {status}
          </div>
        </div>
        <div className='welcome-container'>
          <div className='game-container'>
            <Board onClick={(i)=>this.handleClick(i)} squares={current.squares}/>
          </div>
        </div>
        <div className='player-status-2'>
          <p>{playerTwoStatus}</p>
          <div className='player-container-2'>
            <p className='text-orange'>player 2</p>
            <p>Doe John</p>
            <p className='cirxle_x'>O</p>
          </div>

          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot-grey"></span>
          <span className="dot-grey"></span>
        </div>
      </div>
    );
  }
}
function calculateWinner(squares){
  const lines= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

export default Game;
