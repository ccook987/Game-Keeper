import React from "react";
import { connect } from "react-redux";
import { fetchSelectedGame, selectGame } from './../actions';
import * as types from './../constants/ActionTypes';
import constants from './../constants';
import GameItem from './GameItem';



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
    console.log(typeof(gameArray));
    console.log(this.props.gameArray);
    if (error) {
      return <div>Error! {error.message}</div>
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    if(!loading) {
    return (
      <div onClick={this.handleChange}>
        {gameArray.gameArray.map(game => {
          return <GameItem
          key={game.id}
          min-players={game.min_players}
          max-players={game.max_players}
          name={game.name}
          description={game.description}
           />
        })}
      </div>
    );

  }
    



  }
}

const mapStateToProps = state => ({
  gameArray: state.gameArray,
  loading: state.loading,
  error: state.error,
  selectedGame: state.selectedGame
});

export default connect(mapStateToProps)(GameList);
