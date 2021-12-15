import React from 'react';
import './VideoNav.scss';
import VideoNavItem from'../VideoNavItem/VideoNavItem'


const VideoNav = (props) => {

  return (
    <>
       <p className ="video-heading">NEXT VIDEOS</p>
     
       {props.videos.map(video => {
        return (
           
           <VideoNavItem
           key={video.id}
           title={video.title}
           channel={video.channel}
           image={video.image}
           videoId={video.id}
           />
        )
      })}  
      </>
  );
}


export default VideoNav;