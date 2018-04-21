'use strict';

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/searchForm.js';
import SearchResults from './components/searchResults.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Movie Search',
      results: ['Rushmore', "Royal Tenebamus", "Isle of Dogs"]
    }
    this.performSearch = this.performSearch.bind(this);
  }

  performSearch(query) {
    conslose.log('perform query');
    // do some sort of action search thing
    // eventually get results and set them to the state
    if (query === 'ttt') {
      this.setState({results: ['Kill Bill', 'Kill Bill vol2']});
    } else {
      this.setState({results: []})
    }
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <SearchForm search={this.performSearch}/>
      <SearchResults title={this.state.title} results={this.state.results} />
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root); // Class and render need to be the same.