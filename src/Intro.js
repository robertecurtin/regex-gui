import React from 'react';
import { Alert } from 'react-bootstrap';
import { Container, Col, Row } from 'react-bootstrap';

const PadRemainingSpace = <Col fluid={true} />;

function Intro() {
  return <Alert variant='primary'>

    <Container>
      <Row>
        {PadRemainingSpace}
        <Col>
          <a href='https://www.debuggex.com/cheatsheet/regex/javascript'>Javascript regex cheat sheet</a>
        </Col>
        {PadRemainingSpace}
      </Row>
    </Container>
  </Alert>;
}

export default Intro;
