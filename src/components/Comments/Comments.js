import React from 'react';

const Comments = (props) => {
    console.log(props);

    return (
    props.selectedVideoComments.map(selectedVideoComment => 
        <>
        <p>
        {selectedVideoComment.name}
                </p>
        <p>
{selectedVideoComment.comment}
        </p>
        
      
        </>


)
     
    )    
}



export default Comments;

//print the comments that are from the selected video
//step 1 -  find what video is selected
//step 2 - forEach the 3 comments in the selected video
//step 3 - print the comments

// if === to onVideoSelect, then print on the page