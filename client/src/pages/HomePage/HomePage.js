import React, { Component } from 'react';
import axios from 'axios';
import MainVideo from '../../components/MainVideo/MainVideo';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import Form from '../../components/Form/Form';
import Comments from '../../components/Comments/Comments';
import VideoNav from '../../components/VideoNav/VideoNav';
import './HomePage.scss'

//save API URL and API KEY to variable
//const API_URL = "https://project-2-api.herokuapp.com";
//const API_KEY = "2d32074c-9698-4bb6-b56c-25da44886f82";

const API_URL = process.env.REACT_APP_API_URL;


class HomePage extends Component {

  state = {
    videos:[],
    selectedVideo:null
  }

  componentDidMount(){

    const currVideo = this.props.match.params.videoId;

  
    // initial API call
    axios
    .get(`${API_URL}/videos`)
    .then( response => {
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
     
    // show first video when logo is clicked
     if(!videoId){
       videoId = this.state.videos[0].id
     }

    //get the selected video when it is clicked on video nav   
    axios
     .get(`${API_URL}/videos/${videoId}`)
     .then ((response => {

      const currentVideo = response.data;

       this.setState ({
        selectedVideo : currentVideo
       })

     }))
     .catch(err => console.log(err));
  }
    
    render() {

      //when no selected video return null
      if (!this.state.selectedVideo) {
        return null
    }

      // remove selected video from the video nav
      const filteredVideo = this.state.videos.filter(video => video.id !== this.state.selectedVideo.id);

      return (
        <>
          <MainVideo selectedVideo={this.state.selectedVideo}/>
          <div className ="desktop-layout">
            <div className ="desktop-layout__video-content">
              <VideoDetails selectedVideo={this.state.selectedVideo}/>
              <Form selectedVideo={this.state.selectedVideo} />
              <Comments selectedVideo={this.state.selectedVideo} />
            </div>
            <div className ="desktop-layout__video-nav">
              <VideoNav videos={filteredVideo}/> 
            </div>
          </div>
        </>     
      );
    }
}

export default HomePage;