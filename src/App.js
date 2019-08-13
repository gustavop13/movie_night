import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import MovieList from './components/MovieList';
import { subscribeToTimer } from './api';

import store from './store/';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
  }

  state = {
    movies: ['Batman', 'Avengers', 'Rocketman']
  };

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
