import React from "react";
import { connect } from "react-redux";
import { fetchSelectedGame, selectGame } from './../actions';
import * as types from './../constants/ActionTypes';
import constants from './../constants';



class ProfileGames extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      Profile Game List
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

export default connect(mapStateToProps)(ProfileGames);
