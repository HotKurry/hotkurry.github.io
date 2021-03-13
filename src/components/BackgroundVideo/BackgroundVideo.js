import React from 'react';

import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const VIDEOS = {
        choice: './choice4.mp4',
        poorly: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
        correct: 'https://content.codecademy.com/courses/React/react_video-cute.mp4'
      };
    const LOOP = {
        onloop: "loop",
        offloop: "false"
    };
    return (
        <div className={classes.fullscreen}>
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop={LOOP.onloop} muted className={classes.Video} >
                <source src={VIDEOS.choice} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.LeftContent} >

                </div>
                <div className={classes.RightContent} >

                </div>
            </div>
        </div>
    </div>
    )
}

export default BackgroundVideo