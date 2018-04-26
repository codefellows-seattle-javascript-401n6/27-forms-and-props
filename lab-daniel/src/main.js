
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
        let url = `https://www.reddit.com/r${query}.json?limit=${limit}`;
        fetch(url)
        .then(res => {
            console.log('res: ', res);
            return res.json();
        })
    }
    
    render() {
        return (
        <div>
            <h1>{this.state.title}</h1>
            <SearchForm />
            <SearchResultList />
        </div>
        )
    }
}

const root = document.getElementById('root')
ReactDOM.render(<App/>, root);