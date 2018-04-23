import React from 'react';


class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }

  }

  render() {
    return <form>
      {this.props.title};
     <input type="text" placeholder="Movie Name"/>
      <button>Search</button>
      </form>
  }
}

module.exports = SearchForm;