import React from 'react';
import videoData from '../src/data/videos.json';
import videoDetails from '../src/data/video-details.json'
import Header from "./components/Header/Header";
import VideoNav from "./components/VideoNav/VideoNav";
import MainVideo from './components/MainVideo/MainVideo';
import VideoDetails from './components/VideoDetails/VideoDetails';
import Comments from './components/Comments/Comments';
import Form from './components/Form/Form';
import './styles/_partials/_global.scss';
import './App.scss';

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
      <>
       <Header/> 
       <MainVideo selectedVideo={this.state.selectedVideo}/> 
       
       <div className ="desktop-layout">
         <div className ="desktop-layout__video-content">
           <VideoDetails selectedVideo={this.state.selectedVideo}/>
           <Form selectedVideoComments={this.state.selectedVideo.comments} />
           <Comments selectedVideoComments={this.state.selectedVideo.comments} />
         </div>
         <div className ="desktop-layout__video-nav">
         <VideoNav 
         videos={videoNavVideos}
         onVideoSelect={this.handleVideoSelect}
         />
         </div>
      </div>
     </>
    );
  }
  
}

export default App;

