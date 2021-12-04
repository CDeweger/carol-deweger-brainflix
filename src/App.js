import React from 'react';
import videoData from '../src/data/videos.json';
import videoDetails from '../src/data/video-details.json'
import Header from "./components/Header/Header";
import VideoNav from "./components/VideoNav/VideoNav";
import VideoDetails from './components/VideoDetails/VideoDetails';
import Comments from './components/Comments/Comments';
import './styles/_partials/_global.scss';

console.log(videoDetails);
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

;

  render (){
    const videoNavVideos = videoData.filter(video => video.id !== this.state.selectedVideo.id);

    return (
      <div>
       <Header/> 
       <VideoDetails selectedVideo={this.state.selectedVideo}/>
       <VideoNav 
       videos={this.state.videos}
       //videos={videoNavVideos}
       onVideoSelect={this.handleVideoSelect}
       selectedVideo={videoDetails[0]}/>
       <Comments onVideoSelect={this.handleVideoSelect} videoDetails={videoDetails}/>

     </div>
    );
  }
  
}

export default App;

