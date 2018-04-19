'use strict';

import React from 'react';
// import ReactDOM from 'react-dom';

class SearchResutls extends React.Component {
  constructor(props) {
    super(props);
  }

  listMovies() {
    return this.props.results.map(result, i => {
     return <li key={i}>{result}</li>
    });
  }

  render() {
    return <div>
      <p>Found {this.props.results.length} Movies</p>
    <ul>
      {this.listMovies()}
    </ul>
    </div>
  }
}

module.exports = SearchResults;