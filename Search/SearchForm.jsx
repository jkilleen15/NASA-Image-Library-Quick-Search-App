import React, { Component } from 'react';

export default class SearchForm extends Component {

    // Define data points from 'pics' array (fetch response data) using map
    // Return list of custom list items from 'Pic' component below

  constructor (props) {
    super(props);
    this.state = {searchText: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSearchChange (e) {
    this.setState({
      searchText: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.onSearchChange(this.state.searchText);
    e.target.reset();
  }

  render () {
    return (
      <form className='search-form' onSubmit={this.handleSubmit} >
        <label htmlFor='search'> ENTER SEARCH BELOW >> </label>
        <input type='search'
          onChange={this.onSearchChange.bind(this)}
          name='search'
          ref={(input) => this.query = input}
          title='Enter a topic i.e. stars, sun'
          placeholder='i.e. black hole' />
        <button type='submit' id='search' className='search-button'><i>GO!</i></button>
      </form>
    );
  }
}
