import React from 'react';
import '../sass/App.scss';
import Header from './Header';
import Home from './Home';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';



class App extends React.Component {
  render() {
    return (
      <div className="App">
      <p> i am the app component</p>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
