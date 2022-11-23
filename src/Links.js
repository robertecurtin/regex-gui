import React from 'react';
import { Container, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import links from './links.json';

function Links() {
  return <div className='Links'>
    <ListGroup>
        {links.map((link) => {
          return <ListGroupItem key="{link.url}">
          <a href={link.url}> {link.title} </a>
          </ListGroupItem>;
        })}
    </ListGroup>
  </div>;
}

export default Links;
