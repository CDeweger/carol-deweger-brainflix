import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
//import previewImg from '../../assets/images/Upload-video-preview.jpg'
import publishImg from '../../assets/icons/publish.svg'
import './VideoUploadPage.scss'

const API_URL = process.env.REACT_APP_API_URL;
const url = 'http://localhost:8080/videos';


 class VideoUploadPage extends React.Component {
   state = {
     posted: false
   }
   postNewVideo = (e) => {
     console.log(e);
     e.preventDefault(); 
     this.setState({ posted: true });
     const id = uuidv4();

     axios
     .post(url,
     {
         title: e.target.title.value,
         channel: "Carol DeWeger",
         image: process.env.PUBLIC_URL + '/public/images/upload-video-preview.jpg',
         description: e.target.description.value,
         views: 1000,
         likes: 2000,
         duration: "3:30",
         video: 'https://project-2-api.herokuapp.com/stream',
         timestamp: 1632344461000,
         comments: [{
          "name": "Martin Evergreen",
          "comment": "I’ve loved trains ever since I was a child. I dreamed about riding one around the world. This is the most fantastic thing I’ve seen yet, and I’m watching it ON a train!",
          "likes": 3,
          "timestamp": 1632512763000
          },
          {
          "name": "Emily Harper",
          "comment": "Let’s collaborate on a video for saving money on cheap train tickets! I’ll have my associates contact yours.",
          "likes": 0,
          "timestamp": 1632496261000
          }],
         id: id,
     })
     .catch(err => {
         console.error(err);
     })
     e.target.reset();
 }
   render() {
     const image = "http://localhost:8080/images/Upload-video-preview.jpg"
     const previewImg = image.includes('http') ? image : `${API_URL}/${image}`;
     return (
         <>
         <div className='upload'>
           <h1 className="upload__heading">Upload Video</h1>
           <div className='upload__desktop-layout'>
             <div className='upload__image-container'>
               <p className="upload__title">VIDEO THUMBNAIL</p>
               <img className='upload__image-container--img' src={previewImg} alt="Upload-video-preview"></img> 
             </div>
             <form className='upload__form' onSubmit={(e) => {this.postNewVideo(e)}}>
               <label className="upload__title upload__form-title" htmlFor ="comment-box" >TITLE YOUR VIDEO</label><br></br>
               <input className="upload__input-title" type ="text" name="title" placeholder="Add a title to your video"></input><br></br>
               <label className="upload__title upload__form-title" htmlFor ="comment-box" name="description">ADD A VIDEO DESCRIPTION</label><br></br>
               <input className="upload__input-des" type ="text" name="description" placeholder="Add a description to your video"></input>
               <input className="upload__cancel" type="reset" value="CANCEL"></input>
               <button type="submit" className="upload__button">PUBLISH</button>
             </form>
           </div>
             <div className='upload__tablet-layout'>
               {/* console.log the message when publish button is clicked */}
               {/* <Link className="upload__link"onClick= {()=> console.log("Video Published!")}  to={`/`}> */}
                 {/* <p className="upload__button">PUBLISH
                 <img className="upload__icon" src={publishImg} alt="upload-icon"></img>
                 </p> */}
               {/* </Link> */}
             </div>
         </div>
         </>
     );
 };
 }
 export default VideoUploadPage;



//  const VideoUploadPage = () => {

//    const image = "http://localhost:8080/images/Upload-video-preview.jpg"
//    const previewImg = image.includes('http') ? image : `${API_URL}/${image}`
//      return (
//          <>
//          <div className='upload'>
//            <h1 className="upload__heading">Upload Video</h1>
//            <div className='upload__desktop-layout'>
//              <div className='upload__image-container'>
//                <p className="upload__title">VIDEO THUMBNAIL</p>
//                <img className='upload__image-container--img' src={previewImg} alt="Upload-video-preview"></img> 
//              </div>
//              <form className='upload__form'>
//                <label className="upload__title upload__form-title" htmlFor ="comment-box">TITLE YOUR VIDEO</label><br></br>
//                <input className="upload__input-title" type ="text" name="comment-box" placeholder="Add a title to your video"></input><br></br>
//                <label className="upload__title upload__form-title" htmlFor ="comment-box">ADD A VIDEO DESCRIPTION</label><br></br>
//                <input className="upload__input-des" type ="text" name="comment-box" placeholder="Add a description to your video"></input>
//                {/* reset form when cancel button is clicked */}
//                <input className="upload__cancel" type="reset" value="CANCEL"></input>
//              </form>
//            </div>
//              <div className='upload__tablet-layout'>
//                {/* console.log the message when publish button is clicked */}
//                <Link className="upload__link"onClick= {()=> console.log("Video Published!")}  to={`/`}>
//                  <p className="upload__button">PUBLISH
//                  <img className="upload__icon" src={publishImg} alt="upload-icon"></img>
//                  </p>
//                </Link>
//              </div>
//          </div>
//          </>
//      );
//  }
//  export default VideoUploadPage;