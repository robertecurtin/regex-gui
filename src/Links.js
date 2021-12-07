import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import config from './config.json'

const PadRemainingSpace = <Col fluid={true} />

function Links() {
  return <div className='Game'>
    <Container>
      <Row>
        {config.map((url) => {
          return <Col width='300px' key={`row-containing-${url}`}>
            <LinkPreview url={url} width='300px' />
          </Col>
        })}
        {PadRemainingSpace}
      </Row>
    </Container>
  </div>;
}

export default Links;
