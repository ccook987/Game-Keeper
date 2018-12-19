import React, { Component } from "react";
import { connect } from "react-redux";
import { getGamesThunk, watchGameAddedEvent, watchGameRemovedEvent } from './../actions';
import * as types from '../constants/actionTypes';
import constants from './../constants';
import {addGameToFirebase, removeGameFromFirebase} from '../constants/firebaseConfig';
import '../sass/main.scss';

class ProfileGames extends Component {
  render () {
    return ( 
      <div className='profilegames-container'>
      <ul className='profilegames-unordered-list' >
      {this.props.games.game.map(item => 
        <li className='profilegames-list-item' key={item.id}>{item.game}<button className='remove-button'
        onClick={() => removeGameFromFirebase(item.id)}>X</button>
        </li>
      )} 
      </ul>
      </div>
    )}
  }
    
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