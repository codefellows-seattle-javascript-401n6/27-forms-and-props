import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm.js';
import SearchResultList from './SearchResultList.js';

const REDDIT_API_PREFIX = 'http://www.reddit.com/r/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Reddit Search',
      results: [],
      error: '',
      errorMessage: 'Results not found.'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(query) {
    fetch(`${REDDIT_API_PREFIX}` + query.userInput + '.json?limit='  + query.limit)
      .then(res => {
        this.setState({error: false});
        return res.json();
      }).then(json => {
        this.setState({
          results: json.data.children.map(item => {
            return <li key={item.data.id}>
              <a href={item.data.url}>
                <h2>{item.data.title}</h2>
              </a>
            </li>;  
          })
        });
      })
      .catch(err => {
        this.setState({error: true, results: []});
      });
  } 

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <SearchForm error={this.state.error} submit={this.handleSubmit} />
      <div className='errorMessage'>{this.state.errorMessage}</div>
      <SearchResultList results={this.state.results} />
    </div>;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);