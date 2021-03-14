import React from 'react';
import './Chooser.css';

export class Chooser extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    var text = e.target.value;
    document.getElementById("redpill").remove();
    document.getElementById("bluepill").remove();
    this.props.chooseVideo(text);
      if (e.target.value=="poorly"){
        document.getElementById("tryagain").style.visibility="visible";
      }else if (e.target.value=="choice"){
          // create a new div element
          const newDiv = document.createElement("h1");
          newDiv.setAttribute('id', 'buycoins')

          //...    

          // and give it some content
          const newContent = document.createTextNode("Buy sTesla with USDC");

          // add the text node to the newly created div
          newDiv.appendChild(newContent);

          // add the newly created element and its content into the DOM
          const currentDiv = document.getElementById("div1").firstElementChild;
          document.body.insertBefore(newDiv, currentDiv);
        }
      }



  render() {
    return (
      <div className='Content' id='Content'>
        <div id='div1'></div>
        <button id="redpill" onClick={this.handleClick} className='RightContent' value="choice">
        </button>
        <button id="bluepill" onClick={this.handleClick} className='LeftContent' value="poorly">
        </button>
      </div>
    );
  }
}

export default Chooser;