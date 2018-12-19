import constants from './../constants';
const { initialState, types } = constants;


const addGameToFirebaseReducer = (state = initialState.selectedGame, action) => {
  let selectedGame;
  let newSelectedGameStateSlice;
  switch (action.type) {
case types.PUSH_GAME:
selectedGame = Object.assign({}, state[action.gameTitle], {
  gameTitle: action.gameTitle,
  gameArray: action.profileGames,
  id: action.id
});
newSelectedGameStateSlice = Object.assign({}, state, {
  [action.gameTitle]: selectedGame
});
return newSelectedGameStateSlice;

default:
  return state;

}
}

export default addGameToFirebaseReducer;
