import React from 'react';

export default class SearchForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      numberInput: 50,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state);
  }

  render() {
    return <form onSubmit={this.handleSubmit}> 
      <input type="text" placeholder='enter subreddit search'
       value={this.state.textInput} onChange={this.handleChange} 
       name="textInput"/>
      <input type="number" value={this.state.numberInput} 
        min="0" max="100" name="numberInput" 
        onChange={this.handleChange}/>
      <input type="submit" value="SeArcH"/>
    </form>
  }
}




