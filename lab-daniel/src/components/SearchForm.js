import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userInput: '' 
        }
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(e) {
        let input = e.target.value;
        this.setState({userInput: input})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.search(e.target.search.value, e.target.limit.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    name="search"
                    onChange={this.updateInput} 
                    placeholder="Search here..." /> 
                <input type="number" 
                    name="limit"
                    min="1"
                    max="100"
                    placeholder="1-100" />
                <button>Search</button>
            </form>
        )
    }
}

module.exports = SearchForm;