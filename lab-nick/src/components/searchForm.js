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
    this.setState({ userInput: input });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    // console.log(ev.target.search.value);
    // console.log(this.props.search);
    this.props.search(ev.target.search.value);
  }

  render() {
    console.log('Search form loaded...');
    return <form onSubmit={this.handleSubmit}>
      <select id="numb-results" name="numb-results">
        <option value="10">10 Results</option>
        <option value="25">25 Results</option>
        <option value="50">50 Results</option>
        <option value="75">75 Results</option>
        <option value="100">100 Results</option>
      </select>
      <input type="text" onChange={this.updateInput} name='search' value={this.state.userInput} placeholder="search for a subject" />
      <button>Search</button>

    </form>
  }
}

module.exports = SearchForm;