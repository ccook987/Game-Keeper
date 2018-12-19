import React from 'react';
import '../sass/main.scss';
import Header from './Header';
import GameSearch from './GameSearch';
import GameList from './GameList';
import ProfileGames from './ProfileGames';
import Home from './Home';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import * as actions from './../actions';
import * as types from './../constants/ActionTypes';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import constants from './../constants';
import firebase from 'firebase';


class App extends React.Component {
  
  componentWillMount() {
  const { dispatch } = this.props;
  const { watchFirebaseGamesRef } = actions;
  dispatch(watchFirebaseGamesRef());
}
  
// componentDidMount() {
//   const gameRef = firebase.database().ref('hello');
//     gameRef.on('value', (snapshot) => {
//       let gamers = snapshot.val();
//       let newState = [];
//       for (let gamer in gamers) {
//         newState.push({
//           id: gamer,
//           gameTitle: gamers[gamer].gameTitle,
//         })
//       }
//       console.log(newState);
//       this.setState({
//         gamers: newState
//       });
//       console.log(this.state);
// 
// 
//   });
// }
  render() {
    return (
      <div className="App">
        <Header/>
        <GameSearch/>
        <GameList/>
        <ProfileGames/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.profileGames
  };
};

export default connect(mapStateToProps)(App);
