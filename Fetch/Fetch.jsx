'use strict';

import React, { Component } from 'react';
const ReactDOM = require('react-dom');
const styles = require('../style.css');
import SearchForm from '../Search/SearchForm.jsx';

const PicList = props => {
  let results = props.data;
  let pics = results.map(pic =>
    <Pic
      url={pic.links[0].href}
      key={pic.data[0].nasa_id}
      title={pic.data[0].title} />
    );

  // let user know if no results
  if (pics.length < 1) {
    return (
      <div className='no-pics'>
        <br />
        <h3>Hmmm...</h3>
        <br />
        <h3>We couldn't find any images that match your search.</h3>
        <br />
        <h3>Let's try again!</h3>
      </div>
    );

  // else return image results
  } else {
    return (
      <ul className='pic-list'>
        {pics}
      </ul>
    );
  }
};

// Generates custom list items
const Pic = props => (
  <li className='pic-wrap'>
    <a href={props.url} target='_blank'><img src={props.url} alt={props.title} title={props.title} /></a>
    <br /><br />
  </li>
);

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
    fetch(`https://images-api.nasa.gov/search?q=${query}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        pics: data.collection.items,
        loading: false});
    })

  .catch((error) => {
    console.log('Oops! Error fetching and parsing your data', error);
  });
  }

  // renders header and search component
  render () {
    console.log(this.state.pics);
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
