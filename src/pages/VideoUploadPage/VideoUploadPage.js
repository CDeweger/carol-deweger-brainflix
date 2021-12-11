import React from 'react';
import { Link } from 'react-router-dom';
import previewImg from '../../assets/images/Upload-video-preview.jpg'
import Header from '../../components/Header/Header';
import publishImg from '../../assets/icons/publish.svg'
import './VideoUploadPage.scss'



const VideoUploadPage = () => {
    return (
        <>
        {/* <Header/> */}

        <div className='upload'>
            <h1 className="upload__heading">Upload Video</h1>
            <div className='upload__desktop-layout'>
              <div className='upload__image-container'>
              <p className="upload__title">VIDEO THUMBNAIL</p>
                  <img className='upload__image-container--img' src={previewImg} alt="Upload-video-preview"></img> 
              </div>
              <form className='upload__form'>
                  <label className="upload__title upload__form-title" htmlFor ="comment-box">TITLE YOUR VIDEO</label><br></br>
                  <input className="upload__input-title" type ="text" name="comment-box" placeholder="Add a title to your video"></input><br></br>
                  <label className="upload__title upload__form-title" htmlFor ="comment-box">ADD A VIDEO DESCRIPTION</label><br></br>
                  <input className="upload__input-des" type ="text" name="comment-box" placeholder="Add a description to your video"></input>
                  <input className="upload__cancel" type="reset" value="CANCEL"></input>
              </form>
                  </div>
                  <div className='upload__tablet-layout'>
                    <Link className="upload__link"onClick= {()=> console.log("Video Published!")}  to={`/`}>
                      <p className="upload__button">PUBLISH
                      <img className="upload__icon" src={publishImg} alt="upload-icon"></img>
                      </p>
                    </Link>
                    {/* <p className="upload__cancel">CANCEL</p> */}
                  </div>
              
        </div>
        </>
    );
};


export default VideoUploadPage;