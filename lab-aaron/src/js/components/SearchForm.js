import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.search(event.target.search.value, event.target.limit.value);
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input className="searchError" id="SearchForm" type="text" name="search" placeholder="Search"/>
        <input className="searchError" id="limitform" type="number" name="limit" min="1" max="100"
          placeholder="Search must be between 1 and 100 characters"/>
        <button type="submit">Inquire</button>
      </form>
    )
  }
}

module.exports = SearchForm;