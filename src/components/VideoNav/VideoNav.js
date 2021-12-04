import React from 'react';
import './VideoNav.scss'
import VideoNavItem from'../../components/VideoNavItem/VideoNavItem'


const VideoNav = (props) => {

  console.log(props);

  const videoNavVideos = props.videos.filter(video => video.id !== props.selectedVideo.id);
console.log(videoNavVideos);
  return (
    <div className ="video-nav">
       {videoNavVideos.map(video => {
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