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


export function fetchGameTitle(title) {
  return dispatch => {
    const localGameId = v4();
    dispatch(fetchGamesBegin(title));
    title = title.replace(' ', '_');
    return fetch('https://api.geekdo.com/api/geekitems?search='+ title + '&showcount=10&nosession=1&ajax=1&objecttype=thing')
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(json => {
      console.log('Api results:', json)
      dispatch(fetchGamesSuccess(json));
      console.log(json);
      return json
    })
    .catch(error => dispatch(fetchGamesFailure(error)));
  };
}
