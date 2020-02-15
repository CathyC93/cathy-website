import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { NavBar } from './NavBar'
import { Home } from './Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Home />
        </header>
      </div>
    );
  }
}

export default App;
