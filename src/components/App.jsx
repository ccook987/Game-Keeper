import React from 'react';
import '../sass/main.scss';
import Header from './Header';
import GameSearch from './GameSearch';
import GameList from './GameList';
import ProfileGames from './ProfileGames';
import Home from './Home';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><GameSearch/>}/>
          <Route path='/profile' render={()=><ProfileGames/>}/>
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

export default withRouter(connect(mapStateToProps)(App));