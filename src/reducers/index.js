import { combineReducers } from 'redux'
import { START_GAME, 
        ON_STEP_CHANGE, 
        SET_USER_NAMES, 
        UPDATE_ROUND_STATUS, 
        RESET_ROUND_HISTORY, 
        RESET_GAME_HISTORY,
        SET_WINNER_DETAILS 
    } from '../actions'

let playersInitialState = {
    roundNumber: 0,
    totalRounds: 6,
    gameCompleted: false,
    isGameDraw: false,
    gameWinner: null,
    players: {
        playerA: {
            name: '',
            noOfWins: Array(6).fill(false)
        },
        playerB: {
            name: '',
            noOfWins: Array(6).fill(false)
        }
    }
}

function playerHandler(state = playersInitialState, action) {

    switch (action.type) {
        case UPDATE_ROUND_STATUS:
            let gameCompleted = (state.roundNumber === state.totalRounds)
            var newState = { ...state, roundNumber: state.roundNumber + 1, gameCompleted }
            newState.players[action.winner]["noOfWins"][state.roundNumber - 1] = true
            if (gameCompleted) {
                let noOfWinsForA = newState.players.playerA.noOfWins.filter(Boolean).length
                let noOfWinsForB = newState.players.playerB.noOfWins.filter(Boolean).length
                let isGameDraw = noOfWinsForA === noOfWinsForB
                let gameWinner = isGameDraw ? null : (noOfWinsForA > noOfWinsForB ? state.players.playerA.name : state.players.playerB.name)
                newState = { ...newState, gameCompleted: true, isGameDraw, gameWinner }
            }
            return newState

        case START_GAME:
            return { ...state, roundNumber: state.roundNumber + 1 };

        case SET_USER_NAMES:
            let current_state = { ...state }
            current_state.players.playerA.name = action.playerA
            current_state.players.playerB.name = action.playerB
            return current_state;

        case RESET_GAME_HISTORY:
            var newState = {
                roundNumber: 0,
                totalRounds: 6,
                gameCompleted: false,
                isGameDraw: false,
                gameWinner: state.gameWinner,
                players: {
                    playerA: {
                        name: '',
                        noOfWins: Array(6).fill(false)
                    },
                    playerB: {
                        name: '',
                        noOfWins: Array(6).fill(false)
                    }
                }
            }
            newState.players.playerA.name = state.players.playerA.name
            newState.players.playerB.name = state.players.playerB.name
            return newState;
        case  SET_WINNER_DETAILS:
            let winner_state = { ...state }
            winner_state.gameWinner = state.gameWinner
            return winner_state;

        default: return state;
    }
}

let gameInitialState = {
    xIsNext: true,
    stepNumber: 0,
    gameHistory: [
        { squares: Array(9).fill(null) }
    ],
}
function gameHandler(state = gameInitialState, action) {
    switch (action.type) {
        case ON_STEP_CHANGE:
            return {
                xIsNext: !state.xIsNext,
                gameHistory: state.gameHistory.concat({
                    squares: action.squares
                }),
                stepNumber: state.gameHistory.length,
            }

        case RESET_ROUND_HISTORY:
            let newState = { ...state, ...gameInitialState }
            return newState;

        default: return state;
    }
}

const playerReducer = combineReducers({
    player_info: playerHandler,
    game_info: gameHandler
})
export default playerReducer;