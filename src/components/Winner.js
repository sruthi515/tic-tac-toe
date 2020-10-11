import React  from 'react';
import xx_icon from '../assets/close_xx.svg';
import '../App.css';

export default function Winner (){

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
                    <p className='text-orange'>PLAYER 1</p>
                    {/* <p>{this.props.playerA}</p> */}
                    <p className='winner-name'>John Deo</p>
                    <p><img src={xx_icon} alt='img'/></p>
                </div>
            </div>
        </div>
    );
  }
