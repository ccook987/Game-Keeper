import React from "react";
import { connect } from "react-redux";
import { fetchSelectedGame, selectGame } from './../actions';
import * as types from './../constants/ActionTypes';
import constants from './../constants';



function ProfileGames(props, state) {
  
  // handleChange(e) {
  //   this.setState({
  //      [e.target.name]: e.target.value
  //    });
  //    console.log(this.state);
  //  }

    return (
      <div>
      hi
      <p>{props.selectedGame.selectedGame}</p>
      </div>
    );
  }

const mapStateToProps = state => ({
  state: state,
  selectedGame: state.selectedGame
});

export default connect(mapStateToProps)(ProfileGames);
