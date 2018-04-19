'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: 'type something here'
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    let input = ev.target.value;
    console.log('input', input);
    this.setState({userInput: input});
    // this.setState(state => { // same as above but less lines and better for ASYNC
    //   return {userInput: input};
    // })
  }

  display () {
    this.props.appFunc(this.state.userInput);
  }

  render() {
    return <div>
      <h1>{this.props.title}</h1>
      Input: <input type="text" placeholder="enter text here"
        value = {this.state.userInput} />
        onChange
      Mirror: {this.state.userInput}
      <UserInputMirrorer/>
      <button onClick={this.display}>display</button>
    </div>
  }
}

module.exports = UserInputMorrorer;