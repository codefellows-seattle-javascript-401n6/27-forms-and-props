import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userBoardInput: '',
    }
    this.formSubmit = this.formSubmit.bind(this);
    this.updateBoardValue = this.updateBoardValue.bind(this);
  }

  updateBoardValue(event) {
    let input = ev.target.value;
    this.setState({userBoardInput: input});
  }

  formSubmit(event) {
    event.preventDefault();
    this.props.submitFunc(this.state.userBoardInput);
  }

  render() {
    return <div>
      <form onSubmit={this.formSubmit}>
        r/ 
        <input type="text"  value={this.state.rboard} onChange={this.updateBoardValue} placeholder="reddit board"/>
        max: 
        <input type="number" name="rlimit" placeholder="number of results 1-100" min="1" max="100" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  }
}

module.exports = SearchForm;