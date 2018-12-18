import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSelectedGame, selectGame, addGameToProfileList } from './../actions';
import constants from './../constants';
import * as types from './../constants/ActionTypes';


class GameItem extends React.Component {
  constructor(props, { state, dispatch }) {
    super(props, { state });
    this.handleSelectGame = this.handleSelectGame.bind(this);
  }
  // function handleSavingSelectedTicket(ticketId){
  //   const { dispatch } = props;
  //   const action = {
  //     type: c.SELECT_TICKET,
  //     ticketId: ticketId
  //   };
  //   dispatch(action);
  // }

  handleSelectGame(gameTitle) {
    // let gameTitle = e.target.value;
    console.log(gameTitle);
    let action = {
      type: types.SELECT_GAME,
      gameTitle: gameTitle
    }
    console.log(action);
    console.log(this.props.dispatch);
    this.props.dispatch(action);
   }
   
    handleAddingNewGame(selectedGame, props, event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(addGameToProfileList(selectedGame));
  }
   
render() {
  const { error, loading, gameArray } = this.props;

  const gameInformation =
    <div onClick={() => {this.handleSelectGame(this.props.name)}}>
      <h4>{this.props.name}</h4>
      <p>{this.props.minplayers} - {this.props.maxplayers} players </p>
      <p>{this.props.minplaytime} - {this.props.maxplaytime} minutes </p>
      <img src={this.props.thumburl}/>
      <p>{this.props.descriptionpreview}</p>
    </div>;
    return (
      <div >
        {gameInformation}
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

export default connect(mapStateToProps)(GameItem);