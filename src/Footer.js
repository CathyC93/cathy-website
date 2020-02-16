import {
  Col,
  Navbar,
  Nav,
} from 'react-bootstrap'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaDev } from 'react-icons/fa'

export const Footer = () => (
  <Navbar fixed="bottom" style={{ backgroundColor: '#849264', marginBottom: '0px', justifyContent: 'space-evenly' }}>
    <Nav>
      <Col md='3'>
        <FaLinkedin style={{ cursor: 'pointer' }} onClick={() => window.open("https://www.linkedin.com/in/cathy-casey-477b914b/")} />
      </Col>
      <Col md='3'>
        <FaInstagram style={{ cursor: 'pointer' }} onClick={() => window.open("https://www.instagram.com/cathy_c93/")} />
      </Col>
      <Col md='3'>
        <FaGithub style={{ cursor: 'pointer' }} onClick={() => window.open("https://github.com/CathyC93")} />
      </Col>
      <Col md='3'>
        <FaDev style={{ cursor: 'pointer' }} onClick={() => window.open("https://dev.to/cathyc93")} />
      </Col>
    </Nav>
  </Navbar>
)