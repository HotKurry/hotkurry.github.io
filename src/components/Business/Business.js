import React from 'react';
import './Business.css';



var business = {
    imageSrc: 'http://localhost:3000/misty.png',
    name: 'Misty',
    media: 'Anime',
    source: 'Pokémon',
    flavortext: 'Sometimes I look at that Psyduck\'s face and I get a headache.',
    Partner: 'Weebman5000',
    rating: 2469,
    Value: 9001
  };
  class Business extends React.Component {
    render() {
        return(
          <div className="Cardbox">
      <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} alt=''/>
        </div>
        <h2>{business.name}</h2>
        <div className="wifu-info">
          <div className="Business-address">
            <p>{business.media}</p>
            <p>{business.source}</p>
          </div>
          <div className="value-info">
            <h3 className="rating">{business.rating}</h3>
            <p></p>
          </div>
        </div>
          <div className="flavor-info">
            <p>{business.flavortext}</p>  
          </div>
          </div>
          <div className="card-info">
            <div className="namebox">
              <p>{business.Partner}</p>
            </div>
          <div className="pricebox">
            <p><p className="green">{business.Value}(+24%)</p></p>
          </div>
        </div>
      </div>
      

    )
    }
}
export default Business;