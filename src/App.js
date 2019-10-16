import React, { Component } from 'react';
import './App.css';
import Lobby from './components/Lobby';
import Welcome from './components/Welcome';

import store from './store/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome/>
        <Lobby store={store}/>
      </div>
    );
  }
}

export default (App);
