import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './components/search-form.js';
import SearchResultList from './components/search-results-list.js';

import './style/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Search Reddit Subreddit Search Engine',
      topics: [],
      rboard: '',
      rlimit: 0,
      formClass: 'good'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(query) {
    let url = 'https://www.reddit.com/r/' + query.rboard + '.json?limit=' + query.rlimit;
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      let content = json.data.children;
      let contentArr = [];
      content.forEach(topic => {
        contentArr.push(topic);
      });
      return contentArr;
    })
    .then(arr => {
      this.setState({
        topics: arr,
        rboard: query.rboard,
        rlimit: query.rlimit
      });
    })
    .catch(() => {
      console.log('no results available');
      this.setState({
        topics: [],
        formClass: 'error'
      });
    });
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <SearchForm submitFunc={this.handleSubmit} errorDisplay={this.state.formClass} />
      <SearchResultList topics={this.state.topics} />
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);