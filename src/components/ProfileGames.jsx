import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSelectedGame, selectGame, getGamesThunk, watchGameAddedEvent, watchGameRemovedEvent } from './../actions';
import * as types from './../constants/ActionTypes';
import constants from './../constants';
import {addGameToFirebase, removeGameFromFirebase} from '../constants/firebaseConfig';



class ProfileGames extends Component {


  render () {
    
                  return ( 
                    <div>
                     <h2> Todo:</h2>
                     <ul>
                      {this.props.games.game.map(item => <li key={item.id}>{item.game}<button
                      onClick={() => removeGameFromFirebase(item.id)}>x</button></li>)}  </ul>
                    </div>                  )

  }
}
// <div>
//  <h2> Todo:</h2>
//  <ul>
//   {this.props.profileGames.map(profileGames => <li key={this.props.selectedGame.id}>{this.props.selectedGame.name}
  //     </li>
  //   )}
  //       </ul>
  // </div>

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
