import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './components/search-form.js';
import SearchResultList from './components/search-results-list.js'

import './style/main.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Search',
            topics: [],
            rboard: '',
            rlimit: '',
            formClass: 'good'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(query) {
        let url = 'https://reddit.com/r/' + query.rboard + '.json?limit=' + query.rlimit;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            let content = json.data.children;
            contentArr = [];
            content.forEach(topic => {
                contentArr.push(topic);
            });
        })
        .catch(() => {
            console.log('no results');
            this.setState({
                topics: [],
                formClass: 'error'
            });
        });
    }

    render() {
        return <div>
            <h1>{this.state.title}</h1>
            <SearchForm submitFunction={this.handleSubmit} errorDisplay={this.state.formClass} />
            <SearchResultList topics={this.state.topics} />
            </div>
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);