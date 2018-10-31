import {
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
  MenuItem
} from 'react-bootstrap'
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
            <Nav>
              <NavItem eventKey={1} href="#">
                Bio
              </NavItem>
              <NavDropdown eventKey={2} title="Contributions">
                <MenuItem eventKey={2.1}>Coding</MenuItem>
                <MenuItem eventKey={2.2}>Writing</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default App;
