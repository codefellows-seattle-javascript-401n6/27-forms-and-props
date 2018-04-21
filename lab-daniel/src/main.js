
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/SearchForm';
import SearchResultList from './components/SearchResultList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Reddit Subreddit Search Engine',
            results: ['Basketball', 'Baseball', 'Football']
        }
    }

    performSearch(query) {
        if(query === 'bjj') {
            this.setState({results: ['Jiu-jitsu', 'Brazilian Jiu-jitsu', 'Artem Lobov']})
        } else {
            this.setState({results: ['Not found!']});
        }
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