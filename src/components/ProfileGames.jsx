import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSelectedGame, selectGame, getGamesThunk, watchGameAddedEvent, watchGameRemovedEvent } from './../actions';
import * as types from './../constants/ActionTypes';
import constants from './../constants';
import {addGameToFirebase, removeGameFromFirebase} from '../constants/firebaseConfig';
import '../sass/_profileGames.scss';

class ProfileGames extends Component {
  render () {
    return ( 
      <div>
      <ul>
      {this.props.games.game.map(item => 
        <li key={item.id}>{item.game}<button
        onClick={() => removeGameFromFirebase(item.id)}>X</button>
        </li>
      )} 
      </ul>
      </div>
    )}
  }
  
  // const mapStateToProps = state => ({
    //   state: state,
    //   selectedGame: state.selectedGame
    // });
    
    const mapState = state => ({
      games: state
    })
    const mapDispatch = dispatch => {
      dispatch(getGamesThunk())
      watchGameAddedEvent(dispatch)
      watchGameRemovedEvent(dispatch)
      return {
      }
    }
    
    export default connect(mapState, mapDispatch)(ProfileGames);