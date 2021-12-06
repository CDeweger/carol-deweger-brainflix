import React from 'react';
import avatarImg from "../../assets/images/mohan-muruge.jpg";
import './Form.scss'


const Form = (props) => {
    const commentCount = [props.selectedVideoComments.length]

    return (
        <div className="comment-form">
            <p className ="comment-form__heading">{commentCount} Comments</p>
            <div className="comment-form__body">
                <div className="comment-form__img-container">
                    <img className="comment-form__img-container--img" src={avatarImg} alt="mohan-muruge"></img>                
                </div>
                <form className="comment-form__form">
                    <label className="comment-form__form--label" htmlFor ="comment-box">JOIN THE CONVERSATION</label><br></br>
                    <input className="comment-form__form--comment-box" type ="text" name="comment-box" placeholder="Add a new comment"></input>
                    <input className="comment-form__form--button" type ="submit" value="COMMENT" ></input>
                </form>                         
            </div>
        </div>
    );
};

export default Form;

