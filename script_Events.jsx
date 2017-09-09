'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

//   <Gif url={gif.images.fixed_height.url} key = {gif.id} />
const GifList = props => {
  const results = props.data;
  let gifs = results.map(gif =>
    <Gif key={gif.id} />
  );
// prev <Gif />
  return (
    <ul className="gif-list">
      {gifs}
    </ul>
  );

}
// <img src={props.url} alt="" />
const Gif = props => (
  <li className = "gif-wrap">
    <h1>{props.url}</h1>
  </li>
);

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }
//IPAB2FNSAAWF7ID3ZYWC
  componentDidMount() {
    //1.
    //fetch('http://services.groupkt.com/country/get/all')
    fetch('https://www.eventbriteapi.com/v3/events/search/?token=IPAB2FNSAAWF7ID3ZYWC')
    //fetch('https://www.eventbriteapi.com/v3/users/me/?token=IPAB2FNSAAWF7ID3ZYWC')
    //fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    .then(response => response.json())
    // 1.
    //.then(data => {
    .then(responseData => {
      // 1.
      //this.setState({gifs: data.RestResponse.result});
      this.setState({gifs: responseData.data});
    })
    .catch((error) => {
      console.log('Oops! Error fetching and parsing your data', error);
    });

  }

render() {
  console.log(this.state.gifs);
  return (
    <div className = "main-content">

      <h1>Address Book / Country Codes</h1>
      <GifList data={this.state.gifs} />
    </div>
  );
}

}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
