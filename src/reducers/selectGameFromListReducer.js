import constants from './../constants';
const { initialState, types } = constants;


const selectGameFromListReducer = (state = initialState.selectedGame, action) => {
  let selectedGame;
  let newSelectedGameStateSlice;
  switch (action.type) {
    case types.SELECT_GAME:
      return {
        selectedGame: action.gameTitle
      }
    console.log(selectedGame);
    console.log(action.gameTitle);
    console.log(typeof(selectedGame));
    newSelectedGameStateSlice = Object.assign({}, state, {"gameTitle" : selectedGame});
    console.log(newSelectedGameStateSlice);
    return newSelectedGameStateSlice;
    case types.PUSH_GAME:
    selectedGame = Object.assign({}, state[action.gameTitle], {
      gameTitle: action.gameTitle,
      gameArray: action.profileGames
    });
    newSelectedGameStateSlice = Object.assign({}, state, {
      [action.gameTitle]: selectedGame
    });
    return newSelectedGameStateSlice;
    case types.RECEIVE_GAME:
      newSelectedGameStateSlice = Object.assign({}, state);
      newSelectedGameStateSlice[action.selectedGame.id] = action.gameTitle;
      return newSelectedGameStateSlice;

  default:
    return state;

  }
}

export default selectGameFromListReducer;
