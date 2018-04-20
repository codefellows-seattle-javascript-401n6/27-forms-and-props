import React from 'react';
import faker from 'faker';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(ev) {
    let input = ev.target.value;
    this.setState({userInput: input});
  }

  handleSubmit(ev) {
    ev.preventDefault();
    console.log(ev.state.userInput);

    this.props.search(this.state)
  }

render() {
  return <div>
    <form onSubmit={this.handleSubmit}>
      {/* <input type='text' placeholder='search' value={this.state.query} onChange={this.onChange}> */}
      <input type='text' placeholder='search' value={this.state.userInput} onChange={this.updateInput} />
      <button>Search</button>
    </form>
  </div>
  }
}

module.exports = SearchForm;