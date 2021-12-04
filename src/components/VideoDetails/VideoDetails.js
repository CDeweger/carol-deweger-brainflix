import React from 'react';

const VideoDetails = (props) => {

    return (
        <>
         <div>
            <video width="100%vw" height="auto" poster = {props.selectedVideo.image} controls> </video>
        </div>
        <div>
            <h1>{props.selectedVideo.title}</h1>
        </div>
        <div>
            <p>By {props.selectedVideo.channel}</p>
            <p>{props.selectedVideo.timestamp}</p>
        </div>
        <div>
            <p>{props.selectedVideo.views}</p>
            <p>{props.selectedVideo.likes}</p>
        </div>
       
        </>
    );
};

export default VideoDetails;