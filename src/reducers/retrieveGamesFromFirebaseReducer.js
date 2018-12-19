import constants from './../constants';
const { initialState, types } = constants;


const retrieveGamesFromFirebaseReducer = (state = [], action) => {
  // let selectedGame;
  // let newSelectedGameStateSlice;
  switch (action.type) {
    case types.RETRIEVE_GAMES:
      return action.games
      case types.ADD_GAME:
         return [...state, action.game]
        case types.REMOVE_GAME:
         return state.filter(game => game.id !== action.game.id)
  default:
    return state;

  }
}

export default retrieveGamesFromFirebaseReducer;
