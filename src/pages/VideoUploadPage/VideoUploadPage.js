import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';


const VideoUploadPage = () => {
    return (
        <div>
            <Header/>
            <h1>Upload Video</h1>
            <p>VIDEO THUMBNAIL</p>
            <div>
                {/* <img></img> */}
            </div>
            <form>
                <label className="" htmlFor ="comment-box">TITLE YOUR VIDEO</label><br></br>
                <input className="" type ="text" name="comment-box" placeholder="Add a title to your video"></input>
                <label className="" htmlFor ="comment-box">ADD A VIDEO DESCRIPTION</label><br></br>
                <input className="" type ="text" name="comment-box" placeholder="Add a description to your video"></input>
                <button className ="" type="button" ><Link to={`/`} style={{ textDecoration: 'none' }}>PUBLISH</Link></button>
            </form>
        </div>
    );
};

export default VideoUploadPage;