import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './components/search-form.js';
import SearchResultList from './components/search-results-list.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Search Reddit Subreddit Search Engine',
      rboard: '',
      rlimit: 0,
      topics: ['sample1', 'sample2'],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(query) {
    console.log('query in app handle submit', query);
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <SearchForm submitFunc={this.handleSubmit} />
      <SearchResultList topics={this.state.topics}/>
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);