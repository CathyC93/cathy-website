import {
  Col,
  Figure,
  Row,
} from 'react-bootstrap'
import React from 'react'
import cathy from './cathy.jpg'

export const Home = () => {
  return (
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
  )
}