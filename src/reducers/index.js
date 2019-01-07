import { combineReducers } from 'redux';
import fetchGameResultsReducer from './fetchGameResultsReducer';
import retrieveGamesFromFirebaseReducer from './retrieveGamesFromFirebaseReducer';

const rootReducer = combineReducers({
  gameArray: fetchGameResultsReducer,
  game: retrieveGamesFromFirebaseReducer
});

export default rootReducer;
