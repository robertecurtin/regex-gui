import React from 'react';
import { ListGroup, ListGroupItem, Accordion, Button, Form } from 'react-bootstrap';
import dictionary from './dictionary.json';

function RegexWidget(props) {
  const [results, setResults] = React.useState({ long: <div />, short: <div /> });
  const [regex, setRegex] = React.useState("Enter regex");
  const [useFixedLength, setUseFixedLength] = React.useState(false);
  const [showMoreResults, setShowMoreResults] = React.useState(true); // sneakily default to hiding the button

  const handleSubmit = async (event) => {
    const regexp = new RegExp(useFixedLength ? '^' + regex + '$' : regex, 'ig');
    event.preventDefault();
    event.stopPropagation();
    const newResultsList =
      dictionary
        .filter(a => regexp.test(a))
        .map((a) => {
          return <ListGroup.Item key={a}>{a}</ListGroup.Item>;
        });

    setShowMoreResults(false);
    setResults({ long: newResultsList, short: newResultsList.slice(0, 50) });
  };

  const handleRegexChanged = (e) => {
    setRegex(e.target.value);
  };

  const handleFixedLengthCheckboxChange = (e) => {
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

      {showMoreResults ? results.long : results.short}

    </ListGroup>
    <Button variant="primary" type="submit" hidden={showMoreResults} onClick={() => setShowMoreResults(true)}>
      More results - may be laggy
    </Button>
  </div>;
}

export default RegexWidget;

