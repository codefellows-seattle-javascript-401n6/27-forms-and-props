import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
      // this.state = {
      //   userInput: '',
      //   userLimit: null
      // };
      // this.updateInput = this.updateInput.bind(this);
      // this.updateLimit = this.updateLimit.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

 
  // updateInput(ev){
  //   let input = ev.target.value;
  //   this.setState({userInput: input});
  // }
  // updateLimit(ev){
  //   let limit = ev.target.value;
  //   this.setState({userLimit: limit});
  // }

  handleSubmit(ev){
    ev.preventDefault();
    console.log(ev.target.search.value)
    console.log('props', this.props)
    this.props.search(ev.target.search.value, ev.target.limit.value);
  }

  render(){
    return <form onSubmit={this.handleSubmit}>
      <input type="text" name="search"
      // onChange={this.updateInput}
      placeholder ="search" />
      <input type="number" name="limit"
      min="1"
      max="100"
      placeholder="1-100"
      // onChange={this.updateLimit}
       />

      <button>search</button>
    </form>
  }
}

module.exports = SearchForm;