import React from 'react';
import classes from './BackgroundVideo.module.css';
import Chooser from '../Chooser/Chooser';

const VIDEOS = {
    choice: './choice4.mp4',
    poorly: './poorly.mp4',
    correct: 'https://content.codecademy.com/courses/React/react_video-cute.mp4'
  };
const LOOP = {
    onloop: "loop",
    offloop: "false"
};

export class BackgroundVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { src: VIDEOS.choice };
        this.chooseVideo = this.chooseVideo.bind(this);
      }
      chooseVideo(newVideo) {
      this.setState({
        src: VIDEOS[newVideo]
      });
    }
    refreshPage(e){
        window.location.reload(false);
    }

    render() {
    return (
        <div className={classes.fullscreen}>
        <div className={classes.Container}>
            <video autoPlay="autoplay" loop='loop' muted className={classes.Video} src={this.state.src} type="video/mp4" >
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <Chooser chooseVideo={this.chooseVideo}/>
            </div>
            <div id="tryagain"><button onClick={this.refreshPage}><h1>Try Again?</h1></button></div>
        </div>
    </div>
    
    );
}
}

export default BackgroundVideo;