import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Search',
      topics: []
    }
  this.performSearch = this.performSearch.bind(this)
  }
  performSearch(query, limit){
    console.log('limit', limit)
    fetch(`http://www.reddit.com/r/${query}.json?limit=${limit}`)
    .then(results => {
      console.log(results)
      return results.json()
    })
    .then(results => {
      this.setState({topics: results.data.children})
      console.log(results)
    })
    .catch(err => {
      console.log('err', err)
    })


    // if (query) {
    //   this.setState({results: []});
    // }else {
    //   this.setState({results: []});
    // }
  }
  

  render(){
    return <div>
      <h1>{this.state.title}</h1>
      <SearchForm search={this.performSearch}/>
      <SearchResults topics={this.state.topics} />
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);