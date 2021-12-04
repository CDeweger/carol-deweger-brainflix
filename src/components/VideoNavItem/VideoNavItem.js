import React from 'react';

const VideoNavItem = (props) => {
    console.log(props);
    // const handleVideoSelect = e => {
    //     e.preventDefault();
    //     props.onVideoSelect(props.id);
        
    // }
    

    return (
        <>
        <div>
            <video onClick={(props.key)=> props.onVideoSelect(props.ke) } width ="20%vw" height="auto" poster = {props.image}> </video>
        </div>
        <div>
            <p>{props.title}</p>
            <p>{props.channel}</p>
        </div>
        </>
      );
    };

export default VideoNavItem;