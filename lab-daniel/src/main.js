
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/SearchForm';
import SearchResultList from './components/SearchResultList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Subreddit Search Engine',
            results: [],
            limit: 100
        }
        this.performSearch = this.performSearch.bind(this);
    }

    performSearch(query, limit) {
        console.log('Query: ', query)
        console.log('Limit ', limit)
        fetch(`http://www.reddit.com/r/${SearchForm}.json?limit=${SearchResultList}`)
        .then(res => {
            console.log('results : ', res);
            return res.json();
        })
        .then(res => {
            this.setState({topics: results.data.children})
        })
        .catch(err => {
            console.log('Error: ', err)
        })
    }
    
    render() {
        return (
        <div>
            <h1>{this.state.title}</h1>
            <SearchForm search={this.performSearch}/>
            <SearchResultList topics={this.state.topics}/>
        </div>
        )
    }
}

const root = document.getElementById('root')
ReactDOM.render(<App/>, root);