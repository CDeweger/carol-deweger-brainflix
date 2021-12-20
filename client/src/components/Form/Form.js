import React from "react";
import avatarImg from "../../assets/images/mohan-muruge.jpg";
import commentImg from "../../assets/icons/add_comment.svg";
import "./Form.scss";

const Form = (props) => {
  if (!props.selectedVideo) {
    return <p></p>;
  }

  //diving deeper part ( not yet completed )
  const postNewComment = (e) => {
    console.log(e.target.comment.value);
    e.preventDefault();
    e.target.reset();
  };

  const commentCount = [props.selectedVideo.comments.length];

  return (
    <>
      <div className="comment-form">
        <p className="comment-form__heading">{commentCount} Comments</p>
        <div className="comment-form__body">
          <div className="comment-form__img-container">
            <img
              className="comment-form__img-container--img"
              src={avatarImg}
              alt="mohan-muruge"
            ></img>
          </div>
          <form
            className="comment-form__form"
            onSubmit={(e) => {
              postNewComment(e);
            }}
          >
            <label className="comment-form__form--label" htmlFor="comment-box">
              JOIN THE CONVERSATION
            </label>
            <br></br>
            <input
              className="comment-form__form--comment-box"
              type="text"
              name="comment"
              placeholder="Add a new comment"
            ></input>
            <button className="comment-form__form--button" type="submit">
              COMMENT
            </button>
            <img
              className="comment-form__form--img"
              alt="comment"
              src={commentImg}
            ></img>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
