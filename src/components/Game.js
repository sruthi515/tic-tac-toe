import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Board from './Board';
import Dot from './Dot';
import x_icon from '../assets/close_x.svg';
import { OnStepChange, 
         updateRoundStatus, 
         resetGameHistory, 
         resetRoundHistory, 
         setWinnerDetails 
        } from '../actions';

class Game extends Component {

  handleButtonClick(i){
    const gameHistory = this.props.gameHistory.slice(0,this.props.stepNumber+1);
    const current = gameHistory[gameHistory.length-1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if(winner.winnerSign || squares[i]){
      return;
    }
    squares[i] = this.props.xIsNext ? "X" : "O";
    this.props.OnStepChange(squares);
  }

  render() {
    const gameHistory = this.props.gameHistory;
    const current = gameHistory[this.props.stepNumber];
    const {isDraw, winnerSign} = calculateWinner(current.squares);
    let status,playerOneStatus,playerTwoStatus,winner;
    if(this.props.gameCompleted){
      this.props.setWinnerDetails();
      this.props.history.push("/winner");
      this.props.resetGameHistory();
    }
    if( isDraw || winnerSign ){
      if ( !isDraw){
        if ( winnerSign === 'X' ){
          playerOneStatus = 'Winner'
          winner = 'playerA'
        } 
        else
        {
          playerTwoStatus = 'Winner'
          winner = 'playerB'
        }
      }
      this.props.updateRoundStatus(isDraw, winner);
      this.props.resetRoundHistory();
    }
    else{
      status = "Next player is "+ ( this.props.xIsNext ? "X" : "O");
      playerOneStatus = ( this.props.xIsNext ? "Your Turn" : ""  );
      playerTwoStatus = ( !this.props.xIsNext ? "Your Turn" : "" );
    }

    return (
      <div className='container'>
        <div className='player-1-status'>
          <div className='player-status'>
            { playerOneStatus }
          </div>
          <div className='player-1-container'>
            <p className='text-orange'>
              player 1
            </p>
            <p>
              { this.props.playerA.name }
            </p>
            <p><img src={ x_icon } alt='img'/></p>
          </div>
          <Dot player ={ this.props['playerA']["noOfWins"] }/>
          <div className='game-info'>
            {status}
          </div>
        </div>
        <div className='welcome-container'>
          <div className='game-container'>
            <Board onClick={ (i)=>this.handleButtonClick(i) } squares={ current.squares }/>
          </div>
        </div>
        <div className='player-2-status'>
          <div className='player-status'>
            { playerTwoStatus }
          </div>
          <div className='player-2-container'>
            <p className='text-orange'>
              player 2
            </p>
            <p>
              { this.props.playerB.name }
            </p>
            <p className='circle_x'>O</p>
          </div>
          <Dot player ={ this.props['playerB']["noOfWins"] }/>
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
  for (var i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
      return { isDraw: false, winnerSign: squares[a]};
    }
  }
  return {
    isDraw: squares.length === lines.length,
    winnerSign: null
  };
}

const mapStateToProps = state => {
  return {
    gameHistory: state.game_info.gameHistory,
    xIsNext:state.game_info.xIsNext,
    stepNumber:state.game_info.stepNumber,
    playerA:state.player_info.players.playerA,
    playerB:state.player_info.players.playerB,
    gameCompleted: state.player_info.gameCompleted,
    isGameDraw: state.player_info.isGameDraw,
    gameWinner: state.player_info.gameWinner
  }
}
const mapDispatchToProps = dispatch => {
  return {
    OnStepChange:(squares) => { dispatch(OnStepChange(squares)) },
    updateRoundStatus:(isDraw,winner) => { dispatch(updateRoundStatus(isDraw,winner))},
    resetRoundHistory:() => { dispatch(resetRoundHistory()) },
    resetGameHistory:() => { dispatch(resetGameHistory()) },
    setWinnerDetails: () => { dispatch(setWinnerDetails()) }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Game));
