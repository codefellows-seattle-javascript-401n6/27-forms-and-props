import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ul>
      {this.props.topics}
    </ul>
  }
}
export default SearchResults;