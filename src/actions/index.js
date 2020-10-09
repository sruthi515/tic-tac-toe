export const UPDATE_TASK_DETAILS = 'UPDATE_TASK_DETAILS'


export function updateTaskDetails(player) {
   return {
      type: UPDATE_TASK_DETAILS,
      name:player.name,
      noOfWins:player.noOfWins
   };
}
