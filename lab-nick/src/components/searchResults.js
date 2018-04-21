'use strict';

import React from 'react';
// import ReactDOM from 'react-dom';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  listMovies() {
    console.log('results:', this.props.results)
    return this.props.results.map((result, i) => {
     return <li key={i}>{result}</li>
    });
  }

  render() {
    console.log('Search results loaded...');
    console.log(this.props);
    return <div>
      <p>Found {this.props.results.length} Movies</p>
    <ul>
      {this.listMovies()}
    </ul>
    </div>
  }
}

module.exports = SearchResults;