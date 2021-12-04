import React from 'react';
import './VideoDetails.scss'


const VideoDetails = (props) => {
    return (
        <div className="video-main">
            <div className="video-main__video-container">
                <video className="video-main__video-container--current-video" width="100%vw" height="auto" poster = {props.selectedVideo.image} controls> </video>
            </div>
            <h1 className="video-main__heading">{props.selectedVideo.title}</h1>
            <div className="channel-and-timestamp__container">
                <p className="channel-and-timestamp__container--channel">By {props.selectedVideo.channel}</p>
                <p className="channel-and-timestamp__container--timestamp">{props.selectedVideo.timestamp}</p>
            </div>
            <div className="views-and-likes__container">
                <p className="views-and-likes__container--views">{props.selectedVideo.views}</p>
                <p className="views-and-likes__container--likes">{props.selectedVideo.likes}</p>
            </div>
            <p className="video-main__description">{props.selectedVideo.description}</p>
       
        </div>
    );
};

export default VideoDetails;