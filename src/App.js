import React, { Component } from 'react';
import Intro from './Intro';
import RegexWidget from './RegexWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render () {
    return <div className='App'>
      <Intro />
      <RegexWidget />
    </div>;
  }
}

export default App;
