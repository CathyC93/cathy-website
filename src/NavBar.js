import {
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import blackLotus from './black-lotus.png'
import React from 'react'
export const NavBar = () => (
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
)