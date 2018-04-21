'use strict';

import React from 'react';
// import ReactDOM from 'react-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(ev) {
    let input = ev.target.value;
    this.setState({userInput: input});
  }

  handleSubmit() {
    ev.preventDefault();
    console.log(ev.target.value);
  }

  render() {
    console.log('Search form loaded...');
    return <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.updateInput} value={this.state.userInput} placeholder="search for a movie " />
      <button>Search</button>
      
    </form>
  }
}

module.exports = SearchForm;