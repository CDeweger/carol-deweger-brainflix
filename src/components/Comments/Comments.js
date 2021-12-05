import React from 'react';
import './Comments.scss'


const Comments = (props) => {
        // const timestampString = (props.selectedVideoComment.timestamp);
        // const dateObject = new Date(timestampString);
        // const humanReadableDateFormat = dateObject.toLocaleString("en-US", { month: "2-digit" , day: "2-digit", year: "numeric"});
    return (
    props.selectedVideoComments.map(selectedVideoComment => 

        <div>
          <div className="comment-box">
            <div className="comment-box__img"></div>
            <div className="comment-box__content-box">
              <div className="comment-box__content-box-name-time">
                <p className="comment-box__content-box--name">{selectedVideoComment.name}</p>
                <p className="comment-box__content-box--time">{selectedVideoComment.timestamp}</p>
              </div>
              <p className="comment-box__comment">{selectedVideoComment.comment}</p>
            </div>
          </div>
        </div>
    )
  )    
}



export default Comments;

//print the comments that are from the selected video
//step 1 -  find what video is currently selected
//step 2 - map the 3 comments in the selected video
//step 3 - print the comments
