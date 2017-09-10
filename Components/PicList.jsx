import React from 'react';
import Pic from './Pic.jsx';

// Define data points from 'pics' array (fetch response data) using map
// Return list of custom list items from 'Pic' component below

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

export default PicList;
