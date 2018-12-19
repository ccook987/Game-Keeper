import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSelectedGame, selectGame } from './../actions';
import * as types from './../constants/ActionTypes';
import constants from './../constants';



class ProfileGames extends Component {
  constructor(props, { state }) {
    super(props, { state });

  }  

  render () {
    
                  return ( 
                    <div>ProfileGames Component</div>
                  )

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

const mapStateToProps = state => ({
  state: state,
  selectedGame: state.selectedGame
});

export default connect(mapStateToProps)(ProfileGames);
