'use strict';

import React, { Component } from 'react';
const ReactDOM = require('react-dom');
import Search from 'react-search';
const styles = require('./style2.css');
import SearchForm from './Components/SearchForm.jsx';
import PicList from './Components/PicList.jsx';
import axios from 'axios';

// Define data points from 'pics' array (fetch response data) using map
// Return list of custom list items from 'Pic' component below
/*
const PicList = props => {
  const results = props.data;
  let pics = results.map(pic =>
    <Pic
      url={pic.links[0].href}
      key={pic.data[0].nasa_id}
      title={pic.data[0].title} />
  );

  return (
    <ul className='pic-list'>
      {pics}
    </ul>
  );
};

// Generates custom list items
// <h4>{props.title}</h4>
const Pic = props => (
  <li className='pic-wrap'>
    <a href={props.url} target="_blank"><img src={props.url} alt={props.title} title={props.title} /></a>
    <br /><br />
  </li>
);

/*
const onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

const handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.searchText);
    e.currentTarget.reset();
  }
  */

// Primary component rendered to DOM

export default class Fetch extends Component {

//class Fetch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      pics: [],
      loading: true
    };
    this.performSearch = this.performSearch.bind(this);
  }

  // Initiates fetch from NASA Image and Video Library

componentDidMount() {
  this.performSearch();
}

performSearch (query='moon') {
  //axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
  //fetch(`https://images-api.nasa.gov/search?q=${query}`)
  axios.get(`https://images-api.nasa.gov/search?q=${query}`)
  //fetch(`https://images-api.nasa.gov/search?q=${query}`)
  //fetch('https://images-api.nasa.gov/search?q=moon')
  //.then(response => response.json())
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

  // Renders structure for incoming list items

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

//ReactDOM.render(<Fetch />, document.getElementById('fetch'));
//export default Fetch;
