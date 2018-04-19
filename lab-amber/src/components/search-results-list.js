import React from 'react';

class SearchResultList extends React.Component {
  constructor(props) {
    super(props);

    this.displayResults = this.displayResults.bind(this);
  }

  displayResults() {
    return this.props.topics.map((result, i) => {
      return <li key={i}>{result.date.title}</li>
    });
  }

  render() {
    return <div>
      <h2>Your results: {this.props.topics.length}</h2>
      <ul>
        {this.displayResults()}
      </ul>
    </div>
  }
}

module.exports = SearchResultList;