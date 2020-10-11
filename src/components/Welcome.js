import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { setUserNames, startGame } from '../actions';
import '../App.css';

class Welcome extends Component {

    submitHandler(e) {
        e.preventDefault();
        this.props.startGame();
        this.props.history.push("game");
    }

    render(){
        return (
            <div className='welcome-container ml-28'>
                <div className='welcome-content'>
                    <form onSubmit={this.submitHandler.bind(this)}>
                        <h3>
                            <span 
                                className='welcome-text'>
                                Welcome to  &nbsp; 
                            </span>
                            <span 
                                className='tic-text'>
                                TIC TAC TOE
                            </span>
                        </h3>
                        <label 
                            className='form-label'>
                            PLAYER 1
                        </label>
                        <input 
                            type='text' 
                            placeholder='Enter Name' 
                            className='form-input'
                            value={this.props.playerA}
                            onChange={e => this.props.setUserNames(e.target.value, this.props.playerB)}
                            required
                        />
                        <label className='form-label'>PLAYER 2</label>
                        <input 
                            type='text' 
                            placeholder='Enter Name' 
                            className='form-input'
                            value={this.props.playerB}
                            onChange={e => this.props.setUserNames(this.props.playerA, e.target.value)}
                            required
                        />
                        <button 
                            className='continue'
                            type='submit'>
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        )
    };
  }

const mapStateToProps = state => {
    return {
        playerA:state.player_info.players.playerA.name,
        playerB:state.player_info.players.playerB.name
    }
}

const mapDispatchToprops = (dispatch) => {
    return{
        setUserNames:(playerA, playerB) => { dispatch(setUserNames(playerA, playerB)) },
        startGame:() => { dispatch(startGame()) }
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(withRouter(Welcome));