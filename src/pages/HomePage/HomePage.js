import React, { Component } from 'react';
// import videoData from '../../../src/data/videos.json';
// import videoDetails from '../../../src/data/video-details.json'
import MainVideo from '../../components/MainVideo/MainVideo';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import Form from '../../components/Form/Form';
import Comments from '../../components/Comments/Comments';
import VideoNav from '../../components/VideoNav/VideoNav';
import Header from '../../components/Header/Header';
import axios from 'axios';

const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "2d32074c-9698-4bb6-b56c-25da44886f82";

class HomePage extends Component {

  state = {
    videos:[],
    selectedVideo:null
  }

  componentDidMount(){

    const currVideo = this.props.match.params.videoId;
    //console.log(this.props);

    axios
    .get(API_URL + "/videos/" + "?api_key=" + API_KEY)
    .then( response => {
      console.log(response);
      this.setState({
        videos:response.data
      });
      const videoToFetch = currVideo ? currVideo : response.data[0].id;
      this.fetchVideo(videoToFetch);

    })
    .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps) {
    const currVideo = this.props.match.params.videoId;
    if (prevProps.match.params.videoId !== currVideo ){
      this.fetchVideo(currVideo);
    }
  }

  fetchVideo = (videoId) => {
    // console.log(videoId);

    
    axios
     .get(API_URL + "/videos/" + videoId +"?api_key=" + API_KEY)
     .then ((response => {
       console.log(response.data.id);

      //  const currentVideo = this.state.videos.find(video => video.id === videoId);
      const currentVideo = response.data;
       console.log(currentVideo);

       this.setState ({
        selectedVideo : currentVideo
       })

     }))

  }

    // state ={
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
    

    render() {
        // const videoNavVideos = videoData.filter(video => video.id !== this.state.selectedVideo.id);

        return (
            <>
                <Header/>
                <MainVideo selectedVideo={this.state.selectedVideo}/>
                <div className ="desktop-layout">
                  <div className ="desktop-layout__video-content">
                    <VideoDetails selectedVideo={this.state.selectedVideo}/>
                    <Form selectedVideo={this.state.selectedVideo} />
                    <Comments selectedVideo={this.state.selectedVideo} />
                  </div>
                  <div className ="desktop-layout__video-nav">
                    <VideoNav videos={this.state.videos}/> 
                  </div>
                </div>


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

export default HomePage;