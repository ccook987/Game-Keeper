import React from 'react';
import '../sass/App.scss';
import Header from './Header';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route component={Error404} />
        </Switch>
    <p> i am the app component</p>
      </div>
    );
  }
}

export default App;
