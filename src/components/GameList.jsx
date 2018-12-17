import React from "react";
import { connect } from "react-redux";
import { fetchSelectedGame, selectGame } from './../actions';
import * as types from './../constants/ActionTypes';
import constants from './../constants';



class GameList extends React.Component {
  constructor(props, { state, dispatch }) {
    super(props, { state });
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    let gameTitle = e.target.value;
    let action = {
      type: types.SELECT_GAME,
      gameTitle
    }
    console.log(action);
    this.props.dispatch(action);
     console.log(this.state);
   }



  render() {
    const { error, loading, gameArray } = this.props;
    console.log(gameArray);
    console.log(this.props.gameArray);
    if (error) {
      return <div>Error! {error.message}</div>
    }
    if (loading) {
      return <div>Loading...</div>;
    }
      return (
        <ul>
          {gameArray.gameArray.map(game =>
             <li onClick={() => {this.handleAddingGame(game.name)}} key={game.id}>{game.name}</li>
          )}
          </ul>
      );
    



  }
}

const mapStateToProps = state => ({
  gameArray: state.gameArray,
  loading: state.loading,
  error: state.error,
  selectedGame: state.selectedGame
});

export default connect(mapStateToProps)(GameList);
