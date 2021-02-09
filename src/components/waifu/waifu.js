import React from 'react';
import './waifu.css';



var waifutemp = {
    imageSrc: 'http://localhost:3000/misty.png',
    name: 'Misty',
    media: 'Anime',
    source: 'Pokémon',
    flavortext: 'Sometimes I look at that Psyduck\'s face and I get a headache.',
    Partner: 'Weebman5000',
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
            <p>{waifutemp.media}</p>
            <p>{waifutemp.source}</p>
          </div>
          <div className="value-info">
            <h3 className="rating">{waifutemp.rating}</h3>
            <p></p>
          </div>
        </div>
          <div className="flavor-info">
            <p>{waifutemp.flavortext}</p>  
          </div>
          </div>
          <div className="card-info">
            <div className="namebox">
              <p>{waifutemp.Partner}</p>
            </div>
          <div className="pricebox">
            <p><p className="green">{waifutemp.Value}(+33%)</p></p>
          </div>
        </div>
      </div>
      

    )
    }
}
export default waifu;