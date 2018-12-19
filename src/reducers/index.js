import { combineReducers } from 'redux';
import fetchGameResultsReducer from './fetchGameResultsReducer';
// import selectGameFromListReducer from './selectGameFromListReducer';
import retrieveGamesFromFirebaseReducer from './retrieveGamesFromFirebaseReducer';

const rootReducer = combineReducers({
  gameArray: fetchGameResultsReducer,
  // selectedGame: selectGameFromListReducer,
  game: retrieveGamesFromFirebaseReducer
});

export default rootReducer;
