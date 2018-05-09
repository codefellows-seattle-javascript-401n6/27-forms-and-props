import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm.jsx';
import fetch from 'node-fetch';
import SearchResult from './SearchResults.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: 'asdfasdfasdf',
      topics: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(userInput) {
    fetch('https://www.reddit.com/r/' + userInput.textInput + '.json?limit=' + userInput.numberInput)
    .then(res => {
      return res.json();
    }).then(json => {
      console.log(json);
      this.setState({
        topics: json.data.children.map(item => {
          return <li key={item.data.id}>
            <span>{item.data.ups}</span><a href={item.data.url}>{item.data.title}</a>
          </li>
        })
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render(){
    return <div>
      <h1>{this.state.title}</h1>
      <SearchForm submit={this.handleSubmit}/>
      <SearchResult topics={this.state.topics}/>
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));