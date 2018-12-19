import constants from './../constants';
const { initialState, types } = constants;


const retrieveGamesFromFirebaseReducer = (state = [], action) => {
  // let selectedGame;
  // let newSelectedGameStateSlice;
  switch (action.type) {
    case types.RETRIEVE_GAMES:
      return action.games


  default:
    return state;

  }
}

export default retrieveGamesFromFirebaseReducer;
