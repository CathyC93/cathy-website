import {
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import React, { Component } from 'react';
import blackLotus from './black-lotus.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
          <img
            src={blackLotus}
            width="45"
            height="45"
            className="d-inline-block align-top"
            alt="Black Lotus"
          />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="cathy">Cathy</Nav.Link>=
              <NavDropdown title="Writing" id="basic-nav-dropdown">
                <NavDropdown.Item href="writing/code">Code</NavDropdown.Item>
                <NavDropdown.Item href="writing/leadership">Leadership</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="writing/blog">Blog</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </header>
      </div>
    );
  }
}

export default App;
