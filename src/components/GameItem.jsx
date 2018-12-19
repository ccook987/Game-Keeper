import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../actions';
import constants from './../constants';
import * as types from '../constants/actionTypes';
import firebase from 'firebase';
import { addGameToFirebase, removeGameFromFirebase } from '../constants/firebaseConfig';
import '../sass/main.scss';


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
    this.props.dispatch(action);
    addGameToFirebase(gameTitle);
  }
  
  render() {
    const { error, loading, gameArray } = this.props;
    const gameInformation =
    <div className='gameItem-container' onClick={() => {this.handleSelectGame(this.props.name)}}>
    <div className='gameItem-inner-container'>
      <h4 className='gameItem-name'>{this.props.name}</h4>
      <img className='gameItem-image' src={this.props.imageurl} alt='boardgame'/>
      <div className='players-playtime-container'>
      {this.props.minplayers !== null &&
      <p className='gameItem-players'>{this.props.minplayers} - {this.props.maxplayers} players </p> }
      {this.props.minplaytime !== null &&
      <p className='gameItem-playtime'>{this.props.minplaytime} - {this.props.maxplaytime} min </p> }
      </div>
      <p className='gameItem-description'>{this.props.descriptionpreview}</p>
      </div>
    </div>;
    return (
      <div className='gameInfo'>
      
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