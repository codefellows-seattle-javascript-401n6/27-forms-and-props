import React from 'react';
import faker from 'faker';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      limit: 100
    }
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(ev) {
    let input = ev.target.value;
    this.setState({[ev.target.name]: input});
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.submit(this.state);
  }

render() {
  return <form className={this.props.error} onSubmit={this.handleSubmit}>
      <input type='text' placeholder='userInput' value={this.state.userInput} onChange={this.updateInput} />
      <input type="number" name="limit" value={this.state.limit} min="0" max="100" onChange={this.updateInput} />
      <button type="submit" value="Search" />
    </form>
  }
}

module.exports = SearchForm;