import v4 from 'uuid/v4';
import * as types from './../constants/ActionTypes';
/* eslint-disable */
// import firebase from 'firebase/app';
import constants from './../../src/constants';
const { firebaseConfig } = constants;
require('firebase/database');
const firebase = require('firebase/app');

firebase.initializeApp(firebaseConfig);
const gameToAdd = firebase.database().ref('profileGames');
/* eslint-enable */

export function addGameToProfileList(selectedGame) {
    gameToAdd.push({
    gameTitle: selectedGame
});
    }

export const fetchGamesBegin = (title, id) => ({
  type: types.FETCH_GAMES_BEGIN,
  title,
  id
});

export const fetchGamesSuccess = games => ({
  type: types.FETCH_GAMES_SUCCESS,
  payload: { games }
});

export const fetchGamesFailure = error => ({
  type: types.FETCH_GAMES_FAILURE,
  payload: { error }
});

export const selectGame = gameTitle =>
({
  type: types.SELECT_GAME,
  gameTitle: gameTitle
});

// export const receiveGame = name =>
// ({
//     type: types.RECEIVE_GAME,
//     gameTitle: name
//   });



export function receiveGame(gameFromFirebase) {
  return {
    type: types.RECEIVE_GAME,
    game: gameFromFirebase
  };
}


export function watchFirebaseGamesRef() {
  return function(dispatch) {
    gameToAdd.on('child_added', data => {
      console.log(data.val());
    });
  };
}


export function fetchGameTitle(title) {
  return dispatch => {
    const localGameId = v4();
    dispatch(fetchGamesBegin(title));
    title = title.replace(' ', '%20');
    return fetch('https://www.5colorcombo.com/api/search?name=' + title + '&limit=10&order-by=popularity')
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(json => {
      console.log('Api results:', json)
      dispatch(fetchGamesSuccess(json));
        return json

    })
    .catch(error => dispatch(fetchGamesFailure(error)));
  };
}
