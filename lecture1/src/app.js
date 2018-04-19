'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import UserInputMorrorer from './components/userInputMirror.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Mirror User Input',
      prompt1: 'Name',
      prompt2: 'number',
    }
  }

  makeAlert() {
    alert('evil');
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <UserInputMirrorer title={this.state.prompt1}
      appFunc={this.makeAlert}/>
      <UserInputMirrorer title={this.state.prompt2}
      appFunc={this.makeAlert}/>
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root); // Class and render need to be the same.