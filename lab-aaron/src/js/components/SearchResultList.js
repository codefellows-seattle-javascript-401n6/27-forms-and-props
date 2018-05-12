import React from 'react';

class SearchResultList extends React.Component {
constructor(props){
  super(props);
  this.result = this.result.bind(this);
};

  result() {
    return this.props.topics.map((results, i) => {
      return (
        <li key={`List-Item:${i}`}>
          <a href={results.data.url} target="_blank">
            <h1>
              {results.data.title}
            </h1>
            <p>
              {results.data.ups}{/* WHY DO WE NEED THIS??*/}
            </p>
          </a>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <p>Results: {this.props.topics.length}</p>
        <ul>{this.result()}</ul>
      </div>
    );
  };
};

module.exports = SearchResultList;