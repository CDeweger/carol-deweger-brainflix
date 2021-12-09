import React from 'react';
import { Link } from 'react-router-dom';
import './VideoNavItem.scss'

const VideoNavItem = (props) => {
  //console.log(props);
    //  const handleVideoSelect = e => {
    //      e.preventDefault();
    //      props.onVideoSelect(props.videoId);
    //  }
    return (
        <>
         <Link to ={`/videos/${props.videoId}`}> 
        <div className="video-nav">
            <div className="video-nav__container">
              <video className="video-nav__container--video" width ="20%vw" height="auto" poster = {props.image}> </video>
            </div>
            <div className="video-nav__description-container">
              <p className="video-nav__description-container--title">{props.title}</p>
              <p className="video-nav__description-container--channel">{props.channel}</p>
           </div>
          </div>
          </Link> 
          {/* <div className="video-nav">
            <div className="video-nav__container">
              <video className="video-nav__container--video" onClick={handleVideoSelect} width ="20%vw" height="auto" poster = {props.image}> </video>
            </div>
            <div className="video-nav__description-container">
              <p className="video-nav__description-container--title">{props.title}</p>
              <p className="video-nav__description-container--channel">{props.channel}</p>
           </div>
          </div> */}
        </>
      );
    };

export default VideoNavItem;