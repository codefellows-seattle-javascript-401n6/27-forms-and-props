import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      limit: 100
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(ev) {
    let input = ev.target.value;
    this.setState({userInput: input});
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.submit(this.state);
  }

  error() {
    if (this.props.error) {
      return 'myerror';
    } else {
      return '';
    }
  }

  render() {
    return <form className={this.error()} onSubmit={this.handleSubmit}>
      <input 
        type='text' 
        name='userInput'
        placeholder='enter subreddit name' 
        value={this.state.userInput} 
        onChange={this.updateInput} 
      />
      <input 
        type="number" 
        name="limit" 
        value={this.state.limit} 
        min="0" max="100" 
        onChange={this.updateInput} />
      <button type="submit">Search</button>
    </form>;
  }
}

module.exports = SearchForm;