import React, { Component } from 'react';
import Links from './Links';
import Intro from './Intro';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render () {
    return <div className='App'>
      <Intro />
      <Links />
    </div>;
  }
}

export default App;
