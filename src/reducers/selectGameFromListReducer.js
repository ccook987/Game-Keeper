import constants from './../constants';
const { initialState, types } = constants;


const selectGameFromListReducer = (state = initialState.selectedGame, action) => {
  let selectedGame;
  let yearPublished;
  let newSelectedGameStateSlice;
  switch (action.type) {
    case types.SELECT_GAME:
      return {
        selectedGame: action.gameTitle,
        yearPublished: action.yearPublished

      }
    console.log(selectedGame);
    console.log(action.gameTitle);
    console.log(typeof(selectedGame));
    newSelectedGameStateSlice = Object.assign({}, state, {"gameTitle" : selectedGame, "yearPublished" : yearPublished});
    console.log(newSelectedGameStateSlice);
    return newSelectedGameStateSlice;
  default:
    return state;

  }
}

export default selectGameFromListReducer;
