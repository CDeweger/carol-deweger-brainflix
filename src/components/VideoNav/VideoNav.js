import React from 'react';
import './VideoNav.scss'
import VideoNavItem from'../../components/VideoNavItem/VideoNavItem'
import VideoDetails from '../VideoDetails/VideoDetails';


const VideoNav = (props) => {

  //console.log(props);
  return (
    <div className ="video-nav">
      {props.videos.map(video => {
        return (
           
           <VideoNavItem
           key={video.id}
           title={video.title}
           channel={video.channel}
           image={video.image}
           onVideoSelect={props.onVideoSelect}
           />
        )
      })}
    </div>
  );
}


export default VideoNav;