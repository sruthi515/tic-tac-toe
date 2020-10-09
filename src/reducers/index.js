import { combineReducers } from 'redux'
import { UPDATE_TASK_DETAILS  } from '../actions'

let initialState = {
    roundNumber:0,
    playerA:[
        { 
            name:'', 
            noOfWins:[false,false,false,false,false,false]
        },
    ],
    playerB:[
        { 
            name:'', 
            noOfWins:[false,false,false,false,false,false]
        },
    ]
}

function playerHandler(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TASK_DETAILS:
            return [{
                name: action.name,
                noOfWins:action.noOfWins
            }, ...state]

        default: return state;
    }
}

const playerReducer = combineReducers({ player_info: playerHandler })
export default playerReducer;