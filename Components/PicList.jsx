import React from 'react';
import Pic from './Pic.jsx';

// Define data points from 'pics' array (fetch response data) using map
// Return list of custom list items from 'Pic' component below

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

export default PicList;
