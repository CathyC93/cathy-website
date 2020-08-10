import {
  Nav,
  Navbar,
} from 'react-bootstrap'
import blackLotus from './black-lotus.png'
import React from 'react'
export const NavBar = () => (
  <Navbar expand="lg" style={{ backgroundColor: '#849264' }}>
    <Navbar.Brand>
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
        <Nav.Link>Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)