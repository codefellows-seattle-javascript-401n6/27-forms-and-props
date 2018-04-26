import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  listResults(){
    return this.props.topics.map((result, i) => {
      return <a href={result.data.url} target="_blank"><li key={i}>{result.data.title}</li></a>
    })
  }


  render(){
    return <div>
      <p>Found {this.props.topics.length} </p>
      <ul>
        {this.listResults()}
      </ul>
    </div>
  }
}

module.exports = SearchResults;