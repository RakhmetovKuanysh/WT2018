import React, { Component } from 'react';
import './App.css';
import Sheet from './Sheet';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className = "container">
            <h1>let's do this</h1>
            <Sheet />
        </div>
      </div>
    );
  }
}

export default App;
