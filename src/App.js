import {
  Col,
  Figure,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from 'react-bootstrap'
import React, { Component } from 'react';
import blackLotus from './black-lotus.png';
import cathy from './cathy.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar expand="lg" style={{ backgroundColor: '#849264' }}>
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
                <Nav.Link href="cathy">Home</Nav.Link>
                <NavDropdown title="Writing" id="basic-nav-dropdown">
                  <NavDropdown.Item href="code" style={{ fontSize: 'large' }}>Code</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="blog" style={{ fontSize: 'large' }}>Blog</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div>
            <Row>
              <Col md='4'>
                <Figure>
                  <Figure.Image
                    width={171}
                    height={180}
                    alt="cathy"
                    src={cathy}
                  />
                </Figure>
              </Col>
              <Col md='8'>
                <Row>
                  Hi!  I'm Cathy.
                </Row>
                <Row>
                  I read books, play games, lift weights, and write code.
                </Row>
              </Col>
            </Row>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
