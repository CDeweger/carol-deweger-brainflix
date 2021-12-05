import React from 'react';
import './VideoNav.scss'
import VideoNavItem from'../../components/VideoNavItem/VideoNavItem'


const VideoNav = (props) => {


  return (
    
    <div className="desktop-layout">
       <p className ="video-heading">NEXT VIDEOS</p>
       {props.videos.map(video => {
        return (
           
           <VideoNavItem
           key={video.id}
           title={video.title}
           channel={video.channel}
           image={video.image}
           onVideoSelect={props.onVideoSelect}
           videoId={video.id}
           />
        )
      })} 
      </div>
  );
}


export default VideoNav;