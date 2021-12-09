import React from 'react';
import './VideoDetails.scss'
import likesImg from "../../assets/icons/likes.svg"
import viewsImg from "../../assets/icons/views.svg"

const VideoDetails = (props) => {
    if (!props.selectedVideo) {
        return <p></p>
    }

     //re-format timestamp to human readable date format 
     const timestampString = (props.selectedVideo.timestamp);
     const dateObject = new Date(timestampString);
     const humanReadableDateFormat = dateObject.toLocaleString("en-US", { month: "2-digit" , day: "2-digit", year: "numeric"});
    
    return (
        <>
          <div className="video-main">
            <h1 className="video-main__heading">{props.selectedVideo.title}</h1>
            <div className="video-main__info-container">
              <div className="video-main__channel-timestamp-container">
                  <p className="video-main__channel-timestamp-container--channel">By {props.selectedVideo.channel}</p>
                  <p className="video-main__channel-timestamp-container--timestamp">{humanReadableDateFormat}</p>
              </div>
              <div className="video-main__views-likes-container">
                  <p className="video-main__views-likes-container--views">{props.selectedVideo.views}</p>
                  <img className="video-main__views-likes-container--views-img" src={viewsImg} alt="views"></img>
                  <p className="video-main__views-likes-container--likes">{props.selectedVideo.likes}</p>
                  <img className="video-main__views-likes-container--likes-img"src={likesImg} alt="likes"></img>
              </div>
            </div>
            <p className="video-main__description">{props.selectedVideo.description}</p>
          </div> 
        </>
    );
};

export default VideoDetails;