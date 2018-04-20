
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/SearchForm';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Reddit Subreddit Search Engine'
        }
    }

    render() {
        return (
        <div>
            <h1>{this.state.title}</h1>
            <SearchForm />
        </div>
        )
    }
}

const root = document.getElementById('root')
ReactDOM.render(<App/>, root);