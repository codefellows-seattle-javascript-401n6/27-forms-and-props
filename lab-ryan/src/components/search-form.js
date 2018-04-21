import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            userLimit: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.updateInput = this.updateInput.bind(this);
        // this.updateValue = this.updateValue.bind(this);
    }

    // updateInput(event) {
    //     let input = event.target.value;
    //     this.setState({
    //         userInput: input
    //     });
    // }

    // updateValue(event) {
    //     let input = parsInt(event.target.value);
    //     this.setState({
    //         userMaxInput: input
    //     });
    // }

    handleSubmit(event) {
        event.preventDefault();
        this.props.search(event.target.serch.value, event.target.limit.value);
    }

    render() {           
    return <form onSubmit={this.handleSubmit}>
    <input
         type="text"
         name="search"
         placeholder="reddit board"
     />
     <input
         type="number"
         name="limit"
         minimum="1" 
         maximum="100"
         placeholder="from 1 to 100"
     />
     <input type="submit" value="Submit" />
     </form>
    }
}

module.exports = SearchForm;