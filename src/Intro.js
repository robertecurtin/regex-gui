import React from 'react';
import { Alert } from 'react-bootstrap';
import { Container, Col, Row } from 'react-bootstrap';

const PadRemainingSpace = <Col fluid={true} />;

function Intro() {
  const [showUsage, setShowUsage] = React.useState(false);

  return <Alert variant='primary'>

    <Container onClick={() => setShowUsage(!showUsage)}>
      <Row>
        {PadRemainingSpace}
        <Col>
          {showUsage ? "Hide" : "Show"} usage
        </Col>
        {PadRemainingSpace}
      </Row>
      <Row hidden={!showUsage}>
          <a href='https://www.debuggex.com/cheatsheet/regex/javascript'>Javascript regex cheat sheet</a>
          <Row>Fixed length: Anchors your string with ^ and $, which means the string length will be fixed (unless you use quantifiers, such as * or +) </Row>
          <Row>Examples:</Row>
          <Row>..a. with fixed length set searches for four-letter words with a as the third letter</Row>
      </Row>
    </Container>
  </Alert>;
}

export default Intro;
