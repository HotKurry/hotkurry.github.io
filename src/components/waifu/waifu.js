import React from 'react';
import './waifu.css';

var Web3 = require('web3');

// "Web3.providers.givenProvider" will be set if in an Ethereum supported browser.
var web3 = new Web3(Web3.givenProvider || 'wss://ropsten.infura.io/ws/v3/4edda353f1e74e81a5eeef199cab95d0');


var waifutemp = {
    imageSrc: 'http://localhost:3000/420man.jpg',
    name: '$420 Elon',
    media: 'Anime',
    source: 'Pokémon',
    flavortext: '"A ceiling is simply a floor from below"',
    Partner: 'Buy DOGE',
    rating: 2469,
    Value: 9001
  };
  class waifu extends React.Component {
    render() {
        return(
          <div className="Cardbox">
      <div className="waifu">
        <div className="image-container">
          <img src={waifutemp.imageSrc} alt=''/>
        </div>
        <h2>{waifutemp.name}</h2>
        <div className="wifu-info">
          <div className="waifu-address">
          </div>
          <div className="value-info">
            <p></p>
          </div>
        </div>
          <div className="flavor-info">
            <p>{waifutemp.flavortext}</p>  
          </div>
          </div>
          <div className="card-info">
              <a>{waifutemp.Partner}</a>
        </div>
      </div>
      

    )
    }
}
export default waifu;