import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
// import videoData from '../src/data/videos.json';
// import videoDetails from '../src/data/video-details.json'
// import Header from "./components/Header/Header";
// import VideoNav from "./components/VideoNav/VideoNav";
// import MainVideo from './components/MainVideo/MainVideo';
// import VideoDetails from './components/VideoDetails/VideoDetails';
// import Comments from './components/Comments/Comments';
// import Form from './components/Form/Form';
import HomePage from './pages/HomePage/HomePage';
import './styles/_partials/_global.scss';
import './App.scss';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';

class App extends React.Component {

//   state ={
//     videos:videoData,
//     videoDetails:videoDetails,
//     selectedVideo: videoDetails[0]
//   }
 

//   handleVideoSelect = id => {
//     this.setState ({
//       selectedVideo: videoDetails.find (video => video.id === id)      
//     })
//   }
// ;

  render (){
    // const videoNavVideos = videoData.filter(video => video.id !== this.state.selectedVideo.id);

    
    return (
      <>
      <BrowserRouter>
        <Switch> 

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/video-upload" >
            <VideoUploadPage/>
          </Route>



        </Switch>
      </BrowserRouter>
        {/* <MainVideo selectedVideo={this.state.selectedVideo}/> 
        
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
        </div> */}
      
     </>
    );
  }
  
}

export default App;

