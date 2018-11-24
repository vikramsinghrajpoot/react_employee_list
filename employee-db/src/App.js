import React, { Component } from 'react';
import './App.css';
import AppRouter from './Moduls/Router/AppRouter'

class App extends Component {
  render() {
    return (
      <div className="App">
       <AppRouter />
      </div>
    );
  }
}

export default App;
