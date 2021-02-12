import React from 'react';
import './WaifuList.css';
import Waifu from '../waifu/waifu';
import Waifu2 from '../waifu2/waifu2';
import Waifu3 from '../waifu3/waifu3';
class WaifuList extends React.Component {
    render() {
        return(
            <div class="WaifuList">
            <Waifu />
            <Waifu2 />
            <Waifu3 />
          </div> 
        )
    }
}

export default WaifuList;