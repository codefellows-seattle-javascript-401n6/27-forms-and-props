import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/search-form.js';
import SearchResults from './components/search-results.js'

// import './style/main.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Search',
            topics: [],
        }
        this.runSearch = this.runSearch.bind(this);
    }

    runSearch(query, limit) {
        let url = `https://reddit.com/r/${query}.json?limit=${limit}`;
        fetch(url)
        .then(results => {
            return results.json();
        })
        .then(results => {
            this.setState({topics: results.data.children})
        })
        .catch(err => {
            console.log('no results', err);
            });
    };
    

    render() {
        return <div>
            <h1>{this.state.title}</h1>
            <SearchForm search={this.runSearch} />
            <SearchResults topics={this.state.topics}/>
            </div>
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);