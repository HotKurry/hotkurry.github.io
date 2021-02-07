import React from 'react';
import './WaifuList.css';
import Waifu from '../waifu/waifu';
class WaifuList extends React.Component {
    render() {
        return(
            <div class="WaifuList">
            <Waifu />
            <Waifu />
            <Waifu />
            <Waifu />
            <Waifu />
            <Waifu />
          </div> 
        )
    }
}

export default WaifuList;