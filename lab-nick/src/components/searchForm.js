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

  handleSubmit(ev) {
    ev.preventDefault();
    console.log(ev.target.search.value);
    console.log(this.props.search);
    this.props.search(ev.target.search.value);
  }

  render() {
    console.log('Search form loaded...');
    return <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.updateInput} name='search' value={this.state.userInput} placeholder="search for a subject" />
      <button>Search</button>
      
    </form>
  }
}

module.exports = SearchForm;