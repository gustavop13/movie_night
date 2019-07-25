import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
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
    timestamp: 'no timestamp yet'
  };

  render() {
    return (
      <div className="App">
        <Counter store={store}/>
      </div>
    );
  }
}

export default (App);
