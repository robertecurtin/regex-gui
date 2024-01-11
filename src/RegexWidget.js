import React from 'react';
import { ListGroup, ListGroupItem, Accordion, Button, Form } from 'react-bootstrap';
import dictionary from './dictionary.json';

function RegexWidget(props) {
  const [result, setResult] = React.useState([]);
  const [regex, setRegex] = React.useState("Enter regex");
  const [useFixedLength, setUseFixedLength] = React.useState(false);

  const handleSubmit = async (event) => {
    const regexp = new RegExp(useFixedLength ? '^' + regex + '$' : regex, 'ig');
    event.preventDefault();
    event.stopPropagation();
    setResult(dictionary.filter(a => regexp.test(a)));
  };

  const handleRegexChanged = (e) => {
    console.log(e);
    setRegex(e.target.value);
  };

  const handleFixedLengthCheckboxChange = (e) => {
    console.log(e);
    setUseFixedLength(e.target.value);
  };

  return <div className='RegexWidget'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Check label="Fixed length" onChange={handleFixedLengthCheckboxChange} />
        <Form.Control type="email" placeholder="Enter regex" onChange={handleRegexChanged} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    <ListGroup>

    {
      result.map((a) => {
        return <ListGroup.Item key={a}>{a}</ListGroup.Item>;
      })
    }
    </ListGroup>
  </div>;
}

export default RegexWidget;

