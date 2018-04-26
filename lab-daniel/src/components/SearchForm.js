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
        console.log('target value: ', this.state.userInput);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    onChange={this.updateInput} 
                    value={this.state.userInput} 
                    placeholder="Search here..." /> 
                <button>Search</button>
            </form>
        )
    }
}

module.exports = SearchForm;