import React from 'react';

const VideoNavItem = (props) => {
     const handleVideoSelect = e => {
         e.preventDefault();
         props.onVideoSelect(props.videoId);
        
     }
    

    return (
        <>
        <div>
            <video onClick={handleVideoSelect} width ="20%vw" height="auto" poster = {props.image}> </video>
        </div>
        <div>
            <p>{props.title}</p>
            <p>{props.channel}</p>
        </div>
        </>
      );
    };

export default VideoNavItem;