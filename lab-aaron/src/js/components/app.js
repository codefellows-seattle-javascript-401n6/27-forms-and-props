'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm.js';
import SearchResultList from './SearchResultList';
import '../../style/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'SubReddit Search (L-27)',
      topics: [],
      prompt1: 'Name',
      prompt2: 'Phone Number'
    };
    this.performSearch = this.performSearch.bind(this);
  };

performSearch(query, limit) {
  console.log('query: ', query);
  console.log('limit: ', limit);
  // let url = `http://www.reddit.com/r/${query}.json?limit=${limit}`;
  // console.log(url);
  fetch(`http://www.reddit.com/r/${query}.json?limit=${limit}`)
  .then(result => {
    console.log('Results: ', result);
    return result.json();
  })
  .then(result => {
    this.setState({topics: result.data.children, error: false})
  })
  .catch(error => {
    console.error('Error: ', error);
    this.setState({error: true});
  });
};

  render() {
    return (
    <div>
      <h1>
        {this.state.title}
      </h1>
      <SearchForm search={this.performSearch} searchError={this.state.error}/>
      <SearchResultList topics={this.state.topics}/>
    </div>
    )
  };
};

const root = document.getElementById('root');

ReactDOM.render(<App/>, root);