import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../actions';
import constants from './../constants';
import * as types from './../constants/ActionTypes';
import firebase from 'firebase';
import { addGameToProfileList } from './../actions';
import { addGameToFirebase, removeGameFromFirebase } from '../constants/firebaseConfig';


class GameItem extends React.Component {
  constructor(props, { state, dispatch }) {
    super(props, { state });
    this.handleSelectGame = this.handleSelectGame.bind(this);
    // this.addGameToProfileList = this.addGameToProfileList.bind(this);

  }
  
  // componentWillMount() {
  //     const { dispatch } = this.props;
  //     const { watchFirebaseGamesRef } = actions;
  //     dispatch(watchFirebaseGamesRef());
  //   }
  
  // componentDidMount() {
  //   const gameToAdd = firebase.database().ref('profileGames');
  //   gameToAdd.on('value', (snapshot) => {
  //     let profileGames = snapshot.val();
  //     let newState = [];
  //     for (let profileGame in profileGames) {
  //       newState.push({
  //         gameTitle: profileGames[profileGame].gameTitle
  //       })
  //     }
  //     console.log(newState);
  //     this.setState({
  //       profileGames: newState
  //     });
  //     console.log(this.state);
  // 
  //   });
  // }
  // function handleSavingSelectedTicket(ticketId){
  //   const { dispatch } = props;
  //   const action = {
  //     type: c.SELECT_TICKET,
  //     ticketId: ticketId
  //   };
  //   dispatch(action);
  // }


  // handleAddingNewGame(e) {
  //     e.preventDefault();
  //     console.log(this.props);
  //     const gameToAdd = firebase.database().ref('profileGames');
  //     const profileGame = {
  //       gameTitle: this.props.state.selectedGame.gameTitle
  //     }
  //     gameToAdd.push(profileGame);
  //     console.log(this.state);
  //   }
  

  
  handleSelectGame(gameTitle) {
    // let gameTitle = e.target.value;
    console.log(gameTitle);
    let action = {
      type: types.SELECT_GAME,
      gameTitle: gameTitle
    }
    // const { receiveGame } = actions;
    // const { selectGame } = actions;
    console.log(this.props.dispatch);
    this.props.dispatch(action);
    addGameToFirebase(gameTitle);
    // this.props.dispatch(receiveGame)
   }
   
  //   handleAddingNewGame(selectedGame, props, event, dispatch) {
  //   event.preventDefault();
  //   dispatch(addGameToProfileList(selectedGame));
  // }
  // 
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