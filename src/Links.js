import React from 'react';
import { ListGroup, ListGroupItem, Accordion } from 'react-bootstrap';
import config from './links.json';

function Links() {
  return <div className='Links'>
    <Accordion alwaysOpen >
      {config.map((category) => {
        console.log(category);
        return <Accordion.Item eventKey={category.category} key={category.category}>
          <Accordion.Header>{category.category}</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {category.links.map((link) => {
                return <ListGroupItem key="{link.url}">
                  <a href={link.url}> {link.title} </a>
                </ListGroupItem>;
              })}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>;
      })}
    </Accordion>
  </div>;
}

export default Links;
