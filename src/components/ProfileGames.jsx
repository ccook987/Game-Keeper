import React, { Component } from "react";
import { connect } from "react-redux";
import { getGamesThunk, watchGameAddedEvent, watchGameRemovedEvent } from './../actions';
import * as types from '../constants/actionTypes';
import constants from './../constants';
import {addGameToFirebase, removeGameFromFirebase} from '../constants/firebaseConfig';
import '../sass/main.scss';
import wizard from '../assets/images/wizard.svg';


class ProfileGames extends Component {
  render () {
    return (
      <div className='profilegames-wrapper'>
        <div className='profilegames-outer-container'>
          <div className='profilegames-inner-container'>
            <div className='profilegames-image-container'>
              <img className='profilegames-image' src={wizard}/>
            </div>
            <div className='profilegames-bio-container'>
              <p>"Casual gamer. Big fan of RPGs and Co-op games. Always down for a game night!"</p>
            </div>
            <div className='profilegames-favorite-container'>
              <h4>Favorite Game: </h4>
              <select>{this.props.games.game.map(item => 
                <option key={item.id}>{item.game}
                </option>
                )}
                </select>
            </div>
            <div className='profilegames-currently-playing-container'>
            <h4>Currently Playing: </h4>
            <select>{this.props.games.game.map(item => 
              <option key={item.id}>{item.game}
              </option>
              )}
              </select>
            </div>
            <div className='profilegames-list-container'>
            <h4 className='collection'>Games in Collection: {this.props.games.game.length}</h4>
              <ul className='profilegames-unordered-list' >
              {this.props.games.game.map(item => 
                <li className='profilegames-list-item' key={item.id}>{item.game}<button className='remove-button'
                onClick={() => removeGameFromFirebase(item.id)}>X</button>
                </li>
                )} 
              </ul>
            </div>
          </div>
        </div>
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