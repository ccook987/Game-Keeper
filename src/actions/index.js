import v4 from 'uuid/v4';
import * as types from './../constants/ActionTypes';
import constants from './../../src/constants';

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

export const selectGame = name =>
({
  type: types.SELECT_GAME,
  name
});


export function addGameToProfileList(selectedGame) {
  const gameToAdd = firebase.database().ref('gameToAdd');
  return () => gameToAdd.push({
    selectedGame: selectedGame
  });
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
