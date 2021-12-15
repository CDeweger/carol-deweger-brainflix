import React from 'react';
import './Comments.scss'
import { v4 as uuidv4 } from 'uuid';


const Comments = (props) => {
  if (!props.selectedVideo) {
    return <p></p>
}
  const selectedVideoComments = props.selectedVideo.comments
    return (
      <>
        {selectedVideoComments.map(selectedVideoComment => 
         <div key={uuidv4()}>
           <div className="comment-box">
             <div className="comment-box__img"></div>
             <div className="comment-box__content-box">
               <div className="comment-box__content-box-name-time">
                 <p className="comment-box__content-box--name">
                 {selectedVideoComment.name}</p>
                 <p className="comment-box__content-box--time">
                 {(new Date(selectedVideoComment.timestamp)).toLocaleString("en-US", { month: "2-digit" , day: "2-digit", year: "numeric"})}</p>
               </div>
               <p className="comment-box__comment">{selectedVideoComment.comment} </p>
             </div>
           </div>
         </div>
     )}
      </>
  )    
}



export default Comments;

// how to print the comments that are from the selected video??
//step 1 -  find what video is currently selected
//step 2 - map the 3 comments in the selected video
//step 3 - print the comments
