import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Link} from 'react-router-dom';
import GamesPage from './GamesPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Link to="/games">Games</Link>
        <Route exact path="/games" component={GamesPage} />
      </div>
    );
  }
}

export default App;
