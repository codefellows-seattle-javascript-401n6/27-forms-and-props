import React from 'react';
import ReactDom from 'react-dom';
import SearchForm from './components/SearchForm.js'
import SearchResults from './components/SearchResults.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Movie Search',
      results:["Rushmore","Royal Tenebaums","Isle of Dogs"]
    }
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <SearchForm />
      <SearchResults results={this.state.results}/>
      </div>
  }
}

const root = document.getElementById('root');
ReactDom.render(<App/>, root);