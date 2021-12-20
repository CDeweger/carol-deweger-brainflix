import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import publishImg from "../../assets/icons/publish.svg";
import "./VideoUploadPage.scss";

const API_URL = process.env.REACT_APP_API_URL;
const url = "http://localhost:8080/videos";

class VideoUploadPage extends React.Component {
  state = {
    posted: false,
  };

  postNewVideo = (e) => {
    console.log(e);
    e.preventDefault();
    this.setState({ posted: true });

    axios
      .post(url, {
        title: e.target.title.value,
        description: e.target.description.value,
      })
      .catch((err) => {
        console.error(err);
      });
    e.target.reset();
  };

  //this is the function to alert and redirect when video is published
  redirectPath = () => {
    window.alert("Video Published!");
    window.location.href = "/";
  };

  render() {
    const image = "http://localhost:8080/images/Upload-video-preview.jpg";
    const previewImg = image.includes("http") ? image : `${API_URL}/${image}`;

    return (
      <>
        <div className="upload">
          <h1 className="upload__heading">Upload Video</h1>
          <div className="upload__desktop-layout">
            <div className="upload__image-container">
              <p className="upload__title">VIDEO THUMBNAIL</p>
              <img
                className="upload__image-container--img"
                src={previewImg}
                alt="Upload-video-preview"
              ></img>
            </div>
            <form
              className="upload__form"
              onSubmit={(e) => {
                this.postNewVideo(e);
              }}
            >
              <div className="form__desktop-layout">
                <label
                  className="upload__title upload__form-title"
                  htmlFor="comment-box"
                >
                  TITLE YOUR VIDEO
                </label>
                <br></br>
                <input
                  className="upload__input-title"
                  type="text"
                  name="title"
                  placeholder="Add a title to your video"
                  required
                ></input>
                <br></br>
                <label
                  className="upload__title upload__form-title"
                  htmlFor="comment-box"
                  name="description"
                >
                  ADD A VIDEO DESCRIPTION
                </label>
                <br></br>
                <input
                  className="upload__input-des"
                  type="text"
                  name="description"
                  placeholder="Add a description to your video"
                  required
                ></input>
              </div>
              <div className="upload__tablet-layout">
                <button type="submit" className="upload__button">
                  PUBLISH
                  <img
                    className="upload__icon"
                    src={publishImg}
                    alt="upload-icon"
                  ></img>
                </button>
                <div className="upload__cancel-box">
                  <Link className="upload__cancel" to={`/`}>
                    CANCEL
                  </Link>
                </div>
              </div>
            </form>

            {this.state.posted ? this.redirectPath() : null}
          </div>
        </div>
      </>
    );
  }
}
export default VideoUploadPage;
