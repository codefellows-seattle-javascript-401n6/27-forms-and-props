// import '.style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
// import UserInputForm from './UserInputForm.js';
import SearchForm from './SearchForm.js';
import SearchResultList from './SearchResultList.js';

// const REDDIT_API_PREFIX = 'http://www.reddit.com/r';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Reddit Search',
      results: ['Rushmore', 'Royal Tenenbaums'],
      hasSearched: false,
      loading: false
    };

    this.performSearch = this.performSearch.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  performSearch(query) {
    this.setState({
      hasSearched: true,
      isLoading: true
    })

    var that = this;
    setTimeout(() => {
      if(query === 'ttt') {
        this.setState({results: ["Kill Bill", "Kill Bill 2"]});
        this.setState({isLoading: false});
      } else {
        this.setState({results: []});
        this.setState({isLoading: false});
      }
    }, 800);
  }

  render() {
    return <div>
        <h1>{this.state.title}</h1>
        {/* <UserInputForm /> */}
        <SearchForm search={this.performSearch}/>
        {/* submit={this.handleSubmit} */}
        <SearchResultList results={this.state.results} hasSearched={this.state.hasSearched} isLoading={this.state.isLoading} />
      </div>
  }

  // handleSubmit(query) {
  //   console.log('q:', query);
  // }
}

const root = document.getElementById('root');
// document.body.appendChild(root);
ReactDOM.render(<App />, root);