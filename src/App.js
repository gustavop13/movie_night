import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import Welcome from './components/Welcome';

import store from './store/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome/>
        <Counter store={store}/>
      </div>
    );
  }
}

export default (App);
