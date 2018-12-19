import React from "react";
import { connect } from "react-redux";
import { fetchSelectedGame, selectGame } from './../actions';
import * as types from './../constants/ActionTypes';
import constants from './../constants';
import GameItem from './GameItem';

class GameList extends React.Component {
  constructor(props, { state, dispatch }) {
    super(props, { state });
  }
  
  render() {
    const { error, loading, gameArray } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    if(!loading) {
      return (
        <div>
        {gameArray.gameArray.map(game => {
          return <GameItem
          key={game.id}
          minplayers={game.min_players}
          maxplayers={game.max_players}
          minplaytime={game.min_playtime}
          maxplaytime={game.max_playtime}
          thumburl={game.thumb_url}
          name={game.name}
          descriptionpreview={game.description_preview}
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