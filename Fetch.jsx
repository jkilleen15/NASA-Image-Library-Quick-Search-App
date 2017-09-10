'use strict';

import React, { Component } from 'react';
const ReactDOM = require('react-dom');
const styles = require('./style2.css');
import SearchForm from './Components/SearchForm.jsx';
import PicList from './Components/PicList.jsx';
import axios from 'axios';

export default class Fetch extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pics: [],
      loading: true
    };
    this.performSearch = this.performSearch.bind(this);
  }

  // Initiates fetch from NASA Image and Video Library

  componentDidMount () {
    this.performSearch();
  }

  performSearch (query = 'moon') {
    axios.get(`https://images-api.nasa.gov/search?q=${query}`)
  .then(data => {
    console.log('made it to data');
    console.log(query);
    this.setState({
      pics: data.data.collection.items,
      loading: false});
  })
  .catch((error) => {
    console.log('Oops! Error fetching and parsing your data', error);
  });
  }

  // renders header and search component

  render () {
    console.log(this.state.pics);
    // PREV
    return (
      <div>
        <div className='main-header'>
          <div className='inner'>
            <h1 className='main-title'>Smart Search NASA</h1>
            <SearchForm onSearchChange={this.performSearch} />
            <h1 className='main-title' id='lite'>Hover for title, Click image to enlarge</h1>
          </div>
        </div>
        <div className='main-content'>
          {
          (this.state.loading)
          ? <p>Loading...</p>
          : <PicList data={this.state.pics} />
        }
        </div>
      </div>
    );
  }
}
