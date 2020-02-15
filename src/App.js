import {
  Col,
  Figure,
  Row,
} from 'react-bootstrap'
import React, { Component } from 'react';
import cathy from './cathy.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
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
