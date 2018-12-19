import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../actions';
import constants from './../constants';
import * as types from '../constants/actionTypes';
import firebase from 'firebase';
import { addGameToFirebase, removeGameFromFirebase } from '../constants/firebaseConfig';

class GameItem extends React.Component {
  constructor(props, { state, dispatch }) {
    super(props, { state });
    this.handleSelectGame = this.handleSelectGame.bind(this);
  }
  
  handleSelectGame(gameTitle) {
    console.log(gameTitle);
    let action = {
      type: types.SELECT_GAME,
      gameTitle: gameTitle
    }
    console.log(this.props.dispatch);
    this.props.dispatch(action);
    addGameToFirebase(gameTitle);
  }
  
  render() {
    const { error, loading, gameArray } = this.props;
    const gameInformation =
    <div onClick={() => {this.handleSelectGame(this.props.name)}}>
      <h4>{this.props.name}</h4>
      <p>{this.props.minplayers} - {this.props.maxplayers} players </p>
      <p>{this.props.minplaytime} - {this.props.maxplaytime} minutes </p>
      <img src={this.props.thumburl}/>
      <p>{this.props.descriptionpreview}</p>
    </div>;
    return (
      <div >
        {gameInformation}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameArray: state.gameArray,
  loading: state.loading,
  error: state.error,
  selectedGame: state.selectedGame
});

export default connect(mapStateToProps)(GameItem);