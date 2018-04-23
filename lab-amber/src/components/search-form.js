import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userBoardInput: '',
      userMaxInput: '',
    }
    this.formSubmit = this.formSubmit.bind(this);
    this.updateBoardValue = this.updateBoardValue.bind(this);
    this.updateMaxValue = this.updateMaxValue.bind(this);
  }

  updateBoardValue(event) {
    let input = event.target.value;
    this.setState({userBoardInput: input});
  }

  updateMaxValue(event) {
    let input = parseInt(event.target.value);
    this.setState({userMaxInput: input});
  }

  formSubmit(event) {
    event.preventDefault();
    this.props.submitFunc({
      rboard: this.state.userBoardInput,
      rlimit: this.state.userMaxInput,
    });
  }

  render() {
    return <form onSubmit={this.formSubmit} className={this.props.errorDisplay}>
        r/ 
        <input 
          type="text"  
          value={this.state.rboard} 
          onChange={this.updateBoardValue} 
          placeholder="reddit board"
        />
        max: 
        <input 
          type="number" 
          value={this.state.userMaxInput} 
          onChange={this.updateMaxValue} 
          placeholder="number of results 1-100"
          min="1" max="100" 
        />
        <input type="submit" value="Submit" />
      </form>
  }
}

module.exports = SearchForm;