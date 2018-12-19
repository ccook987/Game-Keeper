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