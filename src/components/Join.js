import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from './Welcome';
import Game from './Game';
import Winner from './Winner';
import logo from '../assets/TicTacToe.svg';

class Join extends Component {
  render() {
    return (
      <Router>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route exact path="/"><Welcome /></Route>
            <Route path="/game"><Game /></Route>
            <Route exact path="/winner"><Winner /></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Join;