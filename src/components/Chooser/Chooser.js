import React from 'react';
import './Chooser.css';

export class Chooser extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    var text = e.target.value;
    this.props.chooseVideo(text);
      }
  render() {
    return (
      <div className='Content'>
        <button onClick={this.handleClick} className='RightContent' value="choice">
        </button>
      <button onClick={this.handleClick} className='LeftContent' value="poorly">
        </button>
      </div>
    );
  }
}

export default Chooser;