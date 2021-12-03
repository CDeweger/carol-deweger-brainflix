import React from 'react';
import videoData from '../src/data/videos.json';
import videoDetails from '../src/data/video-details.json'
import Header from "./components/Header/Header";
import VideoNav from "./components/VideoNav/VideoNav";
import VideoDetails from './components/VideoDetails/VideoDetails';
import './styles/_partials/_global.scss';

console.log(videoData);


class App extends React.Component {

  state ={
    videos:videoData,
    videoDetails:videoDetails,
    selectedVideo: videoDetails[0]
  }
 

  handleVideoSelect = id => {
    this.setState ({
      selectedVideo: videoDetails.find (video => video.id === id)
    })
  }


  render (){
    const videoNavVideos = videoDetails.filter(video => video.id !== this.state.selectedVideo.id);

    return (
      <div>
       <Header/> 
       <VideoDetails selectedVideo={this.state.selectedVideo}/>
       <VideoNav 
       videos={videoNavVideos}
       onVideoselect={this.handleVideoSelect}
       />
     </div>
    );
  }
  
}

export default App;

