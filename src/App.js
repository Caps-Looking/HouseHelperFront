import React, { Component } from 'react';
import './App.css';

import Header from './components/template/Header';
import Routes from './components/template/Routes';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
