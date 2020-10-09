import React, { useState }  from 'react';
import { connect } from 'react-redux';
import { updateTaskDetails } from '../actions';
import '../App.css';


export function Welcome (props){
    
    // const [palyerA, setpalyerA] = useState('')
    // const [palyerB, setpalyerB] = useState('')
    const submitHandler= (e) => {
    e.preventDefault();
    // console.log("values::",palyerA,palyerB);
    // const players = [
    //         { 
    //             name:palyerA, 
    //             noOfWins:[false,false,false,false,false,false]
    //         },
    //         { 
    //             name:palyerB, 
    //             noOfWins:[false,false,false,false,false,false]
    //         },

    //     ]
    // props.dispatch(updateTaskDetails(players));

    
    window.location.href = "/game"; 
    }

    return (
        <div className='welcome-container ml-28'>
            <div className='welcome-content'>
                <form onSubmit={submitHandler}>  
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
                        onChange={event => setpalyerA(event.target.value)}
                        required
                    />
                    <label className='form-label'>PLAYER 2</label>
                    <input 
                        type='text' 
                        placeholder='Enter Name' 
                        className='form-input'
                        onChange={event => setpalyerB(event.target.value)}
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
    );
  }

    function mapStateToProps(state) {
        return {
            updateTaskDetails: state.updateTaskDetails
        }
    }

export default connect(mapStateToProps)(Welcome);