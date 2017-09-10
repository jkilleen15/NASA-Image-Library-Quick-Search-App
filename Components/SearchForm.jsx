import React, { Component } from 'react';

export default class SearchForm extends Component {
  constructor (props) {
  super(props);
  //this.onChange = this.onChange.bind(this);
  this.state = {
      searchText: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //console.log('made it to search');

onSearchChange (e) {
//onSearchChange (e) {
    this.setState({
      searchText: e.target.value });
  }

handleSubmit (e) {
    e.preventDefault();
    this.props.onSearchChange(this.state.searchText);
    //this.props.onSearch(this.query.value);
    //event.currentTarget.reset();
    e.target.reset();
  };

  /*.search-form input:only-of-type {
    width: 100%;
    margin-right: -40px;
    padding-right: 40px;
    border-bottom: 20px
  }

  className="is-hidden"
  */

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label htmlFor="search"> ENTER SEARCH BELOW >> </label>
        <input type="search"
               onChange={this.onSearchChange.bind(this)}
               //onChange={this.onSearchChange}
               name="search"
               ref={(input) => this.query = input}
               title="Enter a topic i.e. stars, black hole"
               placeholder="i.e. black hole" />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">GO!</i></button>
      </form>
    );
  }
}
