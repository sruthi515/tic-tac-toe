import React  from 'react';
import { connect } from 'react-redux';
import xx_icon from '../assets/close_xx.svg';
import '../App.css';

export function Winner (props){
    return (
        <div className='welcome-container ml-28'>
            <div className='welcome-content'>
                <h3>
                    <span 
                        className='winner-text'>
                        WINNER!
                    </span>
                </h3>
                <div className='winner border-orange'>
                    <p className='text-orange'>{ props.gameWinner === props.playerA ? "PLAYER 1" : "PLAYER 2" } </p>
                    <p className='winner-name'>{ props.gameWinner }</p>
                    <p className='winner-symbol'> { props.gameWinner === props.playerA ? <img src={xx_icon} alt='img'/> : "O" } </p>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
      gameWinner: state.player_info.gameWinner,
      playerA:state.player_info.players.playerA.name,
      playerB:state.player_info.players.playerB.name,

    }
}

export default connect(mapStateToProps)(Winner);
