import { Navbar } from 'react-bootstrap'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">Home</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default App;
