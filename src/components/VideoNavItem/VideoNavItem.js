import React from 'react';

const VideoNavItem = (props) => {
    const handleVideoSelect = e => {
        e.preventDefault();
        props.onVideoSelect(props.id);
        //console.log(e);
    }

    return (
        <>
       
            {/* <button onClick={handleVideoSelect}>{props.name}</button> */}
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