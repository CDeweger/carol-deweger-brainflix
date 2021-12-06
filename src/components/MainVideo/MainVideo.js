import React from 'react';
import './MainVideo.scss'


const MainVideo = (props) => {
    return (

         <div className="video-main__video-container">
             <video className="video-main__video-container--current-video"  poster = {props.selectedVideo.image} controls> </video>
        </div>
    );
};

export default MainVideo;