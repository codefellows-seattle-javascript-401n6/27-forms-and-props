import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../src/components/search';
import ResultsList from '../src/components/resultslist';
import './style/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Are you Reddity?',
      results: [],
      error: '',
      errorMessage: 'No results found'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(query) {
    let url = 'https://www.reddit.com/r/' + query.subreddit + '.json?limit=' + query.limit
    fetch(url)
    .then(res => {
      this.state.error = '';
      return res.json();
    }).then(json => {
      this.setState({
        results: json.data.children.map(item => {
          return <li key={item.data.id}>
            <a href={item.data.url}>
            {console.log(item.data)}
              <span><img src={item.data.thumbnail}/>
              {item.data.ups}</span>
              <h2>{item.data.title}</h2>
            </a>
          </li>
        })
      })
    })
    .catch(err => {
      this.setState({error: 'error', results: []});
    })
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <Search error={this.state.error} submit={this.handleSubmit}/>
      <div >{this.state.errorMessage}</div>
      <ResultsList results={this.state.results}/>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));