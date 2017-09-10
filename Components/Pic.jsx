import React from 'react';

// Generates custom list items
// <h4>{props.title}</h4>
const Pic = props => (
  <li className='pic-wrap'>
    <a href={props.url} target='_blank'><img src={props.url} alt={props.title} title={props.title} /></a>
    <br /><br />
  </li>
);

export default Pic;
