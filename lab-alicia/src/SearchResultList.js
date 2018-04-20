import React from 'react';

class SearchResultList extends React.Component {
  constructor(props) {
    super(props);

    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  // onChange(ev) {
  //   let count = ev.target.value;
  //   count = parseInt(count, 10);
  //   this.setState({count});
  // }

  // onSubmit(ev) {

  // }

  // getList() {
  //   if(this.state.count === 0) {
  //     return <p>No phrases.</p>
  //   } else if (this.state.count === 1) {
  //     return <p>One phrase.</p>
  //   } else {
  //     return <p>Many phrases!</p>
  //   }
  // }

  // phrases() {
  //   let phrases = ['cowabunga', 'any array'];
  //   phrases = phrases.map(phrase => {
  //     return <li>{phrase}</li>
  //   });
  //   return 
  //   <ol>
  //     {phrases}
  //   </ol>
  // }
  listMovies() {
    return this.props.results.map((result, i) => {
      return <li key={i}>{result}</li>
    });
  }

  render() {
    if (!this.props.hasSearched) {
      return <div/>
    } else if (this.props.isLoading) {
      return <p> Loading...</p>
    } else {
      return <div>
        {/* {this.phrases()} */}
        <p>Found {this.props.results.length} Movies</p>
        <ul>
          {this.listMovies()}
        </ul>
      </div>
    }
  }
}

module.exports = SearchResultList;