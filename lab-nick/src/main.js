'use strict';

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/searchForm.js';
import SearchResults from './components/searchResults.js';
import './style/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Redit Search',
      results: [],
      noResults: ''
    }
    this.performSearch = this.performSearch.bind(this);
  }

  performSearch(query) {
    let searchFormBoard = query;
    // let searchFormLimit = 10;
    let searchFormLimit = document.getElementById('numb-results').value;
    console.log(document.getElementById('numb-results').value);
    // console.log(`http://www.reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`);

    fetch(`http://www.reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`)
      .then(
        (response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ', response.status);
            this.setState({ results: [] });
            this.setState({noResults: 'No results found!'});
            return;
          }

          // Examine the text in the response
          response.json().then( (data) => {
            // console.log(data);
            
            console.log('data: ', data.data.children)
            this.setState({noResults: ''});
            this.setState({ results: data.data.children });
          });
        }
      )
      .catch( (err) => {
        console.log('Fetch Error :-S', err);
      });

    // fetch(`http://www.reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`, (req, res) => {
    //   console.log('fetched:', res);
    //   this.setState({ results: [res] });
    // });

    // if (query === 'ttt') {
    //   this.setState({results: ['Kill Bill', 'Kill Bill vol2']});
    // } else {
    //   this.setState({results: []})
    // }
  }

  render() {
    return <div>
      <h1>{this.state.header}</h1>
      <SearchForm search={this.performSearch} />
      <h2 id="no-results">{this.state.noResults}</h2>
      <SearchResults results={this.state.results} />
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root); // Class and render need to be the same.