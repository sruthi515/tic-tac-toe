
export const START_GAME = 'START_GAME'
export const SET_USER_NAMES = 'SET_USER_NAMES'
export const ON_STEP_CHANGE = 'ON_STEP_CHANGE'
export const UPDATE_ROUND_STATUS = 'UPDATE_ROUND_STATUS'
export const RESET_ROUND_HISTORY = 'RESET_ROUND_HISTORY'
export const RESET_GAME_HISTORY = 'RESET_GAME_HISTORY'
export const SET_WINNER_DETAILS = 'SET_WINNER_DETAILS'

export function startGame(){
   return {
      type: START_GAME
   }
}

export function setUserNames(playerA, playerB) {
   return {
      type: SET_USER_NAMES,
      playerA,
      playerB
   }
}

export function OnStepChange(squares) {
   return {
      type: ON_STEP_CHANGE,
      squares
   };
}

export function updateRoundStatus(isDraw, winner){
   return{
      type:UPDATE_ROUND_STATUS,
      isDraw,
      winner
   }
}

export function resetRoundHistory(){
   return{
      type:RESET_ROUND_HISTORY
   }
}

export function resetGameHistory(){
   return{
      type:RESET_GAME_HISTORY
   }
}

export function setWinnerDetails(){
   return{
      type:SET_WINNER_DETAILS
   }
}
