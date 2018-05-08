import React, { Component } from 'react';
import './App.css';

import Home from './components/home/Home';
import Header from './components/template/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
