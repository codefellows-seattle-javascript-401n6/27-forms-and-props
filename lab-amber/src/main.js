import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './components/search-form.js';
import SearchResultList from './components/search-results-list.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Search Reddit Subreddit Search Engine',
      topics: [],
      rboard: '',
      rlimit: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(query) {
    console.log('query in app handle submit', query);
    this.setState({
      rboard: query.rboard,
      rlimit: query.rlimit
    });
    let url = 'https://www.reddit.com/r/' + query.rboard + '.json?limit=' + query.rlimit;
    console.log('fetch url', url);
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      let content = json.data.children;
      let contentArr = [];
      console.log('new content', content);
      content.forEach(topic => {
        contentArr.push(topic);
      });
      this.setState({topics: contentArr});
      // this.state.forceUpdate();
      console.log('last state', this.state);
    })
    .catch(() => {
      this.setState({topics: []});
    });
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <SearchForm submitFunc={this.handleSubmit} />
      <SearchResultList topics={this.state.topics} />
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);