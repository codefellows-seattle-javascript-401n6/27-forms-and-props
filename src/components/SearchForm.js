import React from 'react';


class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userInput:''
    }
    this.updateInput = this.updateInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }



  updateInput(ev){
    let input = ev.target.value;
    this.setState({userInput:input});
  }

  handleSubmit(ev) {
    ev.preventDefault();
    console.log('SearchFormInput:', this.state.userInput);
    this.props.search(this.state.userInput);
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
     <input type="text" 
     onChange={this.updateInput}
     value={this.state.userInput} placeholder="Movie Name"/>
      <button>Search</button>
      </form>
  }
}

module.exports = SearchForm;