import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './search-form.js';

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

    handleSubmit() {

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