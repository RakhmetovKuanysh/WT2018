import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "container">
            <List />
        </div>
      </div>
    );
  }
}

export default App;
