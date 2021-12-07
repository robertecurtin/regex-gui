import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { LinkPreview } from '@dhaiwat10/react-link-preview';

// const fs = require('fs');
// const config = fs.readFileSync('config.txt').toString().split("\n");

const Home = () => {
  return <LinkPreview url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' width='400px' />;
};
const config = [
  {
    url: 'https://www.youtube.com/'
  }
]

function Links() {
  return <div className='Game'>
    <Container>
      {config.map((row) => {
        return <Row key={`row-containing-${row.url}`}>
          <LinkPreview url={row.url} width='400px' />
        </Row>
      })}
    </Container>
  </div>;
}

export default Links;
