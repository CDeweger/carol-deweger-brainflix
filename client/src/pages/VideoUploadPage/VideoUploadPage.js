import React from 'react';
import { Link } from 'react-router-dom';
//import { v4 as uuidv4 } from 'uuid';
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
     //const id = uuidv4();

     axios
     .post(url,
     {
         title: e.target.title.value,
         description: e.target.description.value,
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
               <input className="upload__input-title" type ="text" name="title" placeholder="Add a title to your video" required></input><br></br>
               <label className="upload__title upload__form-title" htmlFor ="comment-box" name="description">ADD A VIDEO DESCRIPTION</label><br></br>
               <input className="upload__input-des" type ="text" name="description" placeholder="Add a description to your video" required></input>
               <input className="upload__cancel" type="reset" value="CANCEL"></input>
               <Link className="upload__cancel" to={`/`}>CANCEL</Link>
               <button type="submit" className="upload__button" onClick= {()=> alert("Video Published!")} >PUBLISH</button>
              {/* <Link className="upload__link upload__button" onClick= {()=> alert("Video Published!")}  to={`/`}>  */}
                 {/* <p className="upload__button">PUBLISH PUBLISH
                 {/* <img className="upload__icon" src={publishImg} alt="upload-icon"></img> */}
                 {/* </p> */} 
               {/* </Link> */}
             </form>
             
             {/* {
              this.state.posted ? <div className="upload__success">Posted successfully.</div> : null
             }  */}

           </div>
             {/* <div className='upload__tablet-layout'>
               <Link className="upload__link"onClick= {()=> console.log("Video Published!")}  to={`/`}>
                 <p className="upload__button">PUBLISH
                 <img className="upload__icon" src={publishImg} alt="upload-icon"></img>
                 </p>
               </Link>
             </div> */}
         </div>
         </>
     );
 };
 }
 export default VideoUploadPage;



